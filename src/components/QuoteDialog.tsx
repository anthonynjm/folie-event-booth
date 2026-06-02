import { useState, createContext, useContext } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { toast } from 'sonner';

const FORM_ENDPOINT = 'https://form-mailer.anthonynjm38.workers.dev';

const SERVICES = [
  'LiveBooth',
  'Vintage Booth',
  'Magazine Booth',
  'Mirror Booth',
  'Room Booth (Steel)',
  'Room Booth',
  'Bike Booth',
  'Audio Guest Book',
  'Video Guest Book',
  'Cupcake ATM Machine',
  'Interactive Games',
];

interface QuoteDialogContextType {
  open: (preselectedService?: string) => void;
}

const QuoteDialogContext = createContext<QuoteDialogContextType>({ open: () => {} });

export function useQuoteDialog() {
  return useContext(QuoteDialogContext);
}

export function QuoteDialogProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [dates, setDates] = useState<string[]>(['']);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  function open(preselectedService?: string) {
    setSelected(preselectedService ? [preselectedService] : []);
    setDates(['']);
    setSent(false);
    setIsOpen(true);
  }

  function toggleService(name: string) {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    const services = selected.length > 0 ? selected.join(', ') : 'General Inquiry';
    const eventDates = dates.filter(Boolean).join(', ') || '—';

    setSubmitting(true);
    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        ...payload,
        Services: services,
        'Event Date(s)': eventDates,
        _subject: `La Folie Quote — ${services}`,
        _site: 'lafolie',
      }),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error('Send failed');
        const json = await res.json().catch(() => null);
        if (json?.success === false) throw new Error(json?.message || 'Send failed');
        setSent(true);
        form.reset();
        setSelected([]);
        setDates(['']);
        toast.success("Quote request sent! We'll be in touch shortly.");
      })
      .catch(() => {
        toast.error('Something went wrong. Please try again or WhatsApp us at +961 71 582 222.');
      })
      .finally(() => setSubmitting(false));
  }

  return (
    <QuoteDialogContext.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-bold">
              Get a <span className="text-gradient-gold">Quote</span>
            </DialogTitle>
            <DialogDescription className="font-body text-sm">
              Fill in the details and we'll get back to you quickly.
            </DialogDescription>
          </DialogHeader>

          {sent ? (
            <div className="py-8 text-center">
              <p className="font-display text-xl font-bold">We got your request!</p>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                We'll confirm availability and pricing within the hour.
              </p>
              <Button
                className="mt-6 bg-gradient-gold font-body font-semibold text-primary-foreground hover:opacity-90"
                onClick={() => setIsOpen(false)}
              >
                Done
              </Button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <fieldset>
                <legend className="font-body text-sm font-medium text-foreground">Services</legend>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {SERVICES.map((name) => (
                    <label
                      key={name}
                      className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 font-body text-xs transition-colors ${
                        selected.includes(name)
                          ? 'border-primary bg-primary/10 text-foreground'
                          : 'border-border/50 bg-secondary text-muted-foreground hover:border-primary/40'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selected.includes(name)}
                        onChange={() => toggleService(name)}
                        className="sr-only"
                      />
                      <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                        selected.includes(name)
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border'
                      }`}>
                        {selected.includes(name) && (
                          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </span>
                      {name}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div>
                <label htmlFor="quote-name" className="font-body text-sm font-medium text-foreground">Name</label>
                <input
                  id="quote-name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-md border border-border/50 bg-secondary px-4 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="quote-phone" className="font-body text-sm font-medium text-foreground">
                    Phone <span className="text-primary">*</span>
                  </label>
                  <input
                    id="quote-phone"
                    name="phone"
                    type="tel"
                    required
                    className="mt-1 w-full rounded-md border border-border/50 bg-secondary px-4 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary"
                    placeholder="+961 ..."
                  />
                </div>
                <div>
                  <label htmlFor="quote-email" className="font-body text-sm font-medium text-foreground">Email</label>
                  <input
                    id="quote-email"
                    name="email"
                    type="email"
                    className="mt-1 w-full rounded-md border border-border/50 bg-secondary px-4 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="font-body text-sm font-medium text-foreground">Event Date(s)</label>
                  <div className="mt-1 space-y-2">
                    {dates.map((d, i) => (
                      <div key={i} className="flex gap-2">
                        <input
                          type="date"
                          value={d}
                          onChange={(e) => setDates((prev) => prev.map((v, j) => (j === i ? e.target.value : v)))}
                          className="w-full rounded-md border border-border/50 bg-secondary px-4 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary"
                        />
                        {dates.length > 1 && (
                          <button
                            type="button"
                            onClick={() => setDates((prev) => prev.filter((_, j) => j !== i))}
                            className="shrink-0 rounded-md border border-border/50 px-2 font-body text-sm text-muted-foreground hover:border-destructive hover:text-destructive"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => setDates((prev) => [...prev, ''])}
                      className="font-body text-xs font-medium text-primary hover:underline"
                    >
                      + Add another date
                    </button>
                  </div>
                </div>
                <div>
                  <label htmlFor="quote-type" className="font-body text-sm font-medium text-foreground">Event Type</label>
                  <select
                    id="quote-type"
                    name="event_type"
                    defaultValue="Wedding"
                    className="mt-1 w-full rounded-md border border-border/50 bg-secondary px-4 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary"
                  >
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Birthday / Party</option>
                    <option>Brand Activation</option>
                    <option>Gender Reveal</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="quote-message" className="font-body text-sm font-medium text-foreground">
                  Message <span className="text-muted-foreground">(optional)</span>
                </label>
                <textarea
                  id="quote-message"
                  name="message"
                  rows={3}
                  className="mt-1 w-full rounded-md border border-border/50 bg-secondary px-4 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary"
                  placeholder="Tell us about your event..."
                />
              </div>
              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-gold font-body font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60"
              >
                {submitting ? 'Sending...' : 'Send Quote Request'}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </QuoteDialogContext.Provider>
  );
}
