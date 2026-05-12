import { useState, createContext, useContext } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { toast } from 'sonner';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/eca45746b19489ba1a44924d06dfee84';

interface QuoteDialogContextType {
  open: (preselectedService?: string) => void;
}

const QuoteDialogContext = createContext<QuoteDialogContextType>({ open: () => {} });

export function useQuoteDialog() {
  return useContext(QuoteDialogContext);
}

export function QuoteDialogProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  function open(preselectedService?: string) {
    setService(preselectedService || '');
    setSent(false);
    setIsOpen(true);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    setSubmitting(true);
    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        ...payload,
        _subject: `La Folie Quote — ${payload.service || 'General Inquiry'}`,
        _template: 'table',
      }),
    })
      .then(() => {
        setSent(true);
        form.reset();
        toast.success("Quote request sent! We'll be in touch shortly.");
      })
      .catch(() => {
        const lines = [
          'Hi La Folie — I\'d like to request a quote.',
          payload.name && `Name: ${payload.name}`,
          payload.phone && `Phone: ${payload.phone}`,
          payload.email && `Email: ${payload.email}`,
          payload.service && `Service: ${payload.service}`,
          payload.event_date && `Date: ${payload.event_date}`,
          payload.message && `Message: ${payload.message}`,
        ].filter(Boolean).join('\n');
        window.open(`https://wa.me/96171582222?text=${encodeURIComponent(lines)}`, '_blank');
        toast('Opening WhatsApp instead so we don\'t lose your message...');
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
              <div>
                <label htmlFor="quote-service" className="font-body text-sm font-medium text-foreground">Service</label>
                <select
                  id="quote-service"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="mt-1 w-full rounded-md border border-border/50 bg-secondary px-4 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary"
                >
                  <option value="">General Inquiry</option>
                  <option>LiveBooth</option>
                  <option>Vintage Booth</option>
                  <option>Magazine Booth</option>
                  <option>Mirror Booth</option>
                  <option>Room Booth (Steel)</option>
                  <option>Room Booth</option>
                  <option>Bike Booth</option>
                  <option>Audio Guest Book</option>
                  <option>Video Guest Book</option>
                  <option>Cupcake ATM Machine</option>
                  <option>Interactive Games</option>
                </select>
              </div>
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
                  <label htmlFor="quote-date" className="font-body text-sm font-medium text-foreground">Event Date</label>
                  <input
                    id="quote-date"
                    name="event_date"
                    type="date"
                    className="mt-1 w-full rounded-md border border-border/50 bg-secondary px-4 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary"
                  />
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
