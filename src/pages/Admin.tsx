import { useState } from 'react';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Trash2, Plus, RotateCcw, Upload } from 'lucide-react';
import {
  useEvents,
  saveEvents,
  resetEvents,
  fileToDataUrl,
  type EventItem,
  type EventCategory,
} from '@/lib/eventsStore';

const ADMIN_PASSWORD_KEY = 'lafolie.admin.authed';
// Change this after first run. Phase 2 will replace with Supabase auth.
const ADMIN_PASSWORD = 'folie2025';

const categories: EventCategory[] = ['Weddings', 'Corporate', 'Birthdays', 'Brand Activations'];

const Admin = () => {
  const events = useEvents();
  const [authed, setAuthed] = useState(
    typeof window !== 'undefined' && window.sessionStorage.getItem(ADMIN_PASSWORD_KEY) === '1',
  );
  const [password, setPassword] = useState('');

  if (!authed) {
    return (
      <Layout>
        <SEOHead title="Admin — La Folie Entertainment" description="Admin area" canonical="/admin" noindex />
        <section className="py-24">
          <div className="container max-w-sm">
            <h1 className="font-display text-3xl font-bold">Admin Login</h1>
            <p className="mt-2 font-body text-sm text-muted-foreground">
              Enter the admin password to manage event photos.
            </p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (password === ADMIN_PASSWORD) {
                  window.sessionStorage.setItem(ADMIN_PASSWORD_KEY, '1');
                  setAuthed(true);
                } else {
                  toast.error('Incorrect password');
                }
              }}
            >
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-gold text-primary-foreground">
                Sign In
              </Button>
            </form>
          </div>
        </section>
      </Layout>
    );
  }

  const update = (id: string, patch: Partial<EventItem>) => {
    saveEvents(events.map((e) => (e.id === id ? { ...e, ...patch } : e)));
  };

  const handleFile = async (id: string, file: File) => {
    try {
      const dataUrl = await fileToDataUrl(file);
      update(id, { image: dataUrl });
      toast.success('Image updated');
    } catch {
      toast.error('Failed to read image');
    }
  };

  const addEvent = () => {
    const id = `evt-${Date.now()}`;
    saveEvents([
      ...events,
      { id, title: 'New Event', category: 'Weddings', image: '', alt: 'New event' },
    ]);
  };

  const remove = (id: string) => {
    saveEvents(events.filter((e) => e.id !== id));
  };

  return (
    <Layout>
      <SEOHead title="Admin — La Folie Entertainment" description="Admin area" canonical="/admin" noindex />
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-display text-3xl font-bold md:text-4xl">Event Photos</h1>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                Upload and manage photos for each event. Changes are saved locally in this browser.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={addEvent}>
                <Plus className="mr-1 h-4 w-4" /> Add event
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  if (confirm('Reset all events to defaults?')) {
                    resetEvents();
                    toast.success('Events reset');
                  }
                }}
              >
                <RotateCcw className="mr-1 h-4 w-4" /> Reset
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  window.sessionStorage.removeItem(ADMIN_PASSWORD_KEY);
                  setAuthed(false);
                }}
              >
                Sign out
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {events.map((evt) => (
              <div key={evt.id} className="rounded-lg border border-border/50 bg-card p-4">
                <div className="aspect-[4/3] overflow-hidden rounded bg-muted">
                  {evt.image ? (
                    <img src={evt.image} alt={evt.alt} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                      No image
                    </div>
                  )}
                </div>

                <div className="mt-4 space-y-3">
                  <div>
                    <Label htmlFor={`title-${evt.id}`}>Title</Label>
                    <Input
                      id={`title-${evt.id}`}
                      value={evt.title}
                      onChange={(e) => update(evt.id, { title: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor={`cat-${evt.id}`}>Category</Label>
                    <select
                      id={`cat-${evt.id}`}
                      value={evt.category}
                      onChange={(e) => update(evt.id, { category: e.target.value as EventCategory })}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      {categories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor={`alt-${evt.id}`}>Alt text</Label>
                    <Input
                      id={`alt-${evt.id}`}
                      value={evt.alt}
                      onChange={(e) => update(evt.id, { alt: e.target.value })}
                    />
                  </div>

                  <div className="flex gap-2">
                    <label className="flex flex-1 cursor-pointer items-center justify-center gap-1 rounded-md border border-input bg-background px-3 py-2 text-sm hover:bg-accent">
                      <Upload className="h-4 w-4" />
                      Replace photo
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) void handleFile(evt.id, file);
                        }}
                      />
                    </label>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        if (confirm(`Delete "${evt.title}"?`)) remove(evt.id);
                      }}
                      aria-label="Delete event"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 font-body text-xs text-muted-foreground">
            Note: photos are currently stored in your browser only. Phase 2 will sync them to Supabase so
            every visitor sees your changes.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Admin;
