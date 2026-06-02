import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact La Folie Entertainment',
  description: 'Contact La Folie Entertainment for photobooth rental inquiries in Lebanon. Call +961 71 582 222, email info@lafolieentertainment.com, or WhatsApp us. Based in Beirut, serving all Lebanon and UAE.',
  url: 'https://www.lafolieentertainment.com/contact',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'La Folie Entertainment',
    telephone: '+961-71-582-222',
    email: 'info@lafolieentertainment.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Beirut',
      addressCountry: 'LB',
    },
    areaServed: [
      { '@type': 'Country', name: 'Lebanon' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+961-71-582-222',
      contactType: 'customer service',
      areaServed: ['LB', 'AE'],
      availableLanguage: ['English', 'Arabic'],
    },
  },
};

const FORM_ENDPOINT = 'https://form-mailer.anthonynjm38.workers.dev';

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const openWhatsAppFallback = (p: Record<string, FormDataEntryValue>) => {
    const lines = [
      `Hi La Folie — I'd like to request a quote.`,
      p.name && `Name: ${p.name}`,
      p.phone && `Phone: ${p.phone}`,
      p.email && `Email: ${p.email}`,
      p.event_type && `Event: ${p.event_type}`,
      p.event_date && `Date: ${p.event_date}`,
      p.message && `Message: ${p.message}`,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/96171582222?text=${encodeURIComponent(lines)}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    setSubmitting(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...payload,
          _subject: `La Folie Contact — ${payload.name || 'Website Inquiry'}`,
          _site: 'lafolie',
        }),
      });
      if (!res.ok) throw new Error('Send failed');
      const json = await res.json().catch(() => null);
      if (json?.success === false) throw new Error(json?.message || 'Send failed');
      setSent(true);
      form.reset();
      toast.success('Quote request sent! We\'ll be in touch shortly.');
    } catch {
      toast.error('Something went wrong. Please try again or WhatsApp us at +961 71 582 222.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
  <Layout>
    <SEOHead
      title="Book a Photobooth in Lebanon — Get a Free Quote | La Folie Entertainment"
      description="Contact La Folie Entertainment at +961 71 582 222 for photobooth rental in Beirut & all Lebanon. WhatsApp, phone, or email. Free quotes for weddings, corporate events & parties."
      canonical="/contact"
      jsonLd={contactPageSchema}
      keywords="book photobooth Lebanon, contact photobooth rental Beirut, photobooth quote Lebanon, rent photobooth wedding Lebanon, photobooth rental Jounieh, photobooth rental Byblos"
      breadcrumbs={[{ name: 'Contact', href: '/contact' }]}
    />
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div className="text-center" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeInUp} className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact</motion.p>
          <motion.h1 variants={fadeInUp} className="mt-3 font-display text-4xl font-bold md:text-5xl">Get in <span className="text-gradient-gold">Touch</span></motion.h1>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }} className="rounded-lg border border-border/50 bg-card p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="font-body text-sm font-medium text-foreground">Name</label>
                <input id="name" name="name" type="text" required className="mt-1 w-full rounded-md border border-border/50 bg-secondary px-4 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary" placeholder="Your name" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="font-body text-sm font-medium text-foreground">Email</label>
                  <input id="email" name="email" type="email" className="mt-1 w-full rounded-md border border-border/50 bg-secondary px-4 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary" placeholder="you@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="font-body text-sm font-medium text-foreground">Phone <span className="text-primary">*</span></label>
                  <input id="phone" name="phone" type="tel" required className="mt-1 w-full rounded-md border border-border/50 bg-secondary px-4 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary" placeholder="+961 ..." />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="event_date" className="font-body text-sm font-medium text-foreground">Event Date</label>
                  <input id="event_date" name="event_date" type="date" className="mt-1 w-full rounded-md border border-border/50 bg-secondary px-4 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="event_type" className="font-body text-sm font-medium text-foreground">Event Type</label>
                  <select id="event_type" name="event_type" defaultValue="Wedding" className="mt-1 w-full rounded-md border border-border/50 bg-secondary px-4 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary">
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
                <label htmlFor="message" className="font-body text-sm font-medium text-foreground">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-md border border-border/50 bg-secondary px-4 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary" placeholder="Tell us about your event..." />
              </div>
              <Button type="submit" disabled={submitting} className="w-full bg-gradient-gold font-body font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60">
                {submitting ? 'Sending…' : sent ? 'Sent — we\'ll be in touch!' : 'Send Inquiry'}
              </Button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }} className="space-y-6">
            <a href="https://wa.me/96171582222" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full bg-gradient-gold font-body text-base font-semibold text-primary-foreground hover:opacity-90">
                <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
              </Button>
            </a>
            <div className="space-y-4 rounded-lg border border-border/50 bg-card p-6">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-body text-xs text-muted-foreground">Phone</p>
                  <a href="tel:+96171582222" className="font-body text-sm font-medium text-foreground hover:text-primary">71 582 222</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-body text-xs text-muted-foreground">Email</p>
                  <a href="mailto:info@lafolieentertainment.com" className="font-body text-sm font-medium text-foreground hover:text-primary">info@lafolieentertainment.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="font-body text-xs text-muted-foreground">Location</p>
                  <p className="font-body text-sm font-medium text-foreground">Beirut, Lebanon</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106069.89736690498!2d35.44862285!3d33.88863075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99836b4!2sBeirut%2C%20Lebanon!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="La Folie Entertainment location in Beirut, Lebanon"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
  );
};

export default Contact;
