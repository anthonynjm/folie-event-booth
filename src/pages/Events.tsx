import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { ChevronRight } from 'lucide-react';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const events = [
  { title: 'Wedding Photobooth', slug: 'wedding-photobooth', description: 'Make your wedding reception unforgettable with a premium photobooth. Guests take home instant prints as keepsakes while you capture candid moments of joy. Our mirror and 360 booths add elegance and entertainment to your special day. Custom frames with your names, date, and theme included.' },
  { title: 'Corporate Event Photobooth', slug: 'corporate-photobooth', description: 'Branded photo experiences for product launches, conferences, and company celebrations. Every print and digital image features your logo and brand colors. Boost engagement and create shareable content that extends your event\'s reach on social media.' },
  { title: 'Birthday & Party Photobooth', slug: 'birthday-photobooth', description: 'From kids\' birthdays to milestone celebrations, add the fun factor with a photobooth. Our props, custom frames, and instant prints make every birthday unforgettable. The 360 spinner is especially popular for creating exciting slow-motion birthday memories.' },
  { title: 'Brand Activation Photobooth', slug: 'brand-activation-photobooth', description: 'Engage your audience with interactive branded photo content they\'ll share on social media. Our custom-branded setups create organic reach and memorable brand interactions. Perfect for product launches, pop-up events, and experiential marketing campaigns.' },
  { title: 'Bachelor & Bachelorette Photobooth', slug: 'bachelor-bachelorette-photobooth', description: 'Celebrate the bride or groom-to-be with hilarious, fun, and memorable photobooth moments. Custom props, themed frames, and instant sharing make these pre-wedding celebrations even more special. Capture the laughter and good times forever.' },
  { title: 'Gender Reveal Photobooth', slug: 'gender-reveal-photobooth', description: 'Make the big reveal even more exciting with a photobooth that captures every reaction. Custom frames in pink and blue, confetti props, and instant prints let everyone take home a piece of the celebration. The 360 booth captures the exact moment of surprise!' },
];

const eventSchemas = events.map((e) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: e.title,
  description: e.description,
  provider: { '@type': 'LocalBusiness', name: 'La Folie Entertainment' },
  areaServed: [{ '@type': 'Country', name: 'Lebanon' }],
  url: `https://www.lafolieentertainment.com/events/${e.slug}`,
}));

const Events = () => (
  <Layout>
    <SEOHead
      title="Events We Serve — Photobooth Rental for All Occasions | La Folie"
      description="Premium photobooth rentals for weddings, corporate events, birthdays, brand activations, and more across Lebanon."
      canonical="/events"
      jsonLd={eventSchemas}
      keywords="wedding photobooth Lebanon, corporate event photobooth Beirut, birthday photobooth rental Lebanon, brand activation photobooth"
      breadcrumbs={[{ name: 'Events', href: '/events' }]}
    />
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div className="text-center" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeInUp} className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">Events</motion.p>
          <motion.h1 variants={fadeInUp} className="mt-3 font-display text-4xl font-bold md:text-5xl">Events We <span className="text-gradient-gold">Serve</span></motion.h1>
        </motion.div>
        <motion.div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {events.map((event) => (
            <motion.div key={event.slug} variants={fadeInUp} className="group rounded-lg border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:glow-gold">
              <h2 className="font-display text-xl font-bold">{event.title}</h2>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">{event.description}</p>
              <a href="https://wa.me/96171582222" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 font-body text-sm font-semibold text-primary transition-colors hover:text-gold-light">
                Book Now <ChevronRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Events;
