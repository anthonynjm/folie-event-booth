import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Camera, Star, Users, Image as ImageIcon, ChevronRight, Sparkles } from 'lucide-react';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import heroBg from '@/assets/hero-bg.jpg';
import mirrorBooth from '@/assets/mirror-booth.jpg';
import threeSixtyBooth from '@/assets/360-booth.jpg';
import customBooth from '@/assets/custom-booth.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const stats = [
  { number: '500+', label: 'Events Completed', icon: Sparkles },
  { number: '50,000+', label: 'Photos Taken', icon: Camera },
  { number: '10,000+', label: 'Happy Guests', icon: Users },
  { number: '5★', label: 'Average Rating', icon: Star },
];

const services = [
  {
    title: 'Mirror Photobooth',
    description: 'An interactive full-length mirror with touchscreen animations, instant prints in under 8 seconds, and custom frames.',
    image: mirrorBooth,
    href: '/services/mirror-photobooth',
  },
  {
    title: '360 Photobooth',
    description: 'Slow-motion video captured from every angle. Fits 4–6 guests on the platform with branded overlays and instant sharing.',
    image: threeSixtyBooth,
    href: '/services/360-photobooth',
  },
  {
    title: 'Custom Experiences',
    description: 'Bespoke photo setups with themed backdrops, branded frames for corporate clients, and custom props.',
    image: customBooth,
    href: '/services/custom-photo-experiences',
  },
];

const steps = [
  { step: '01', title: 'Choose Your Booth', description: 'Pick the perfect photobooth experience for your event — mirror, 360, or custom.' },
  { step: '02', title: 'We Set Up at Your Venue', description: 'Our team handles delivery, setup, and a dedicated attendant for seamless operation.' },
  { step: '03', title: 'Guests Have a Blast', description: 'Instant prints, digital copies, social sharing — memories that last forever.' },
];

const testimonials = [
  { name: 'Sara M.', event: 'Wedding in Beirut', text: 'La Folie made our wedding reception absolutely magical. Every guest loved the mirror booth and the prints were stunning!' },
  { name: 'Karim H.', event: 'Corporate Event', text: 'Professional setup, amazing quality, and our branded photos were shared across social media instantly. Highly recommend!' },
  { name: 'Nadia R.', event: 'Birthday Party', text: 'The 360 booth was the highlight of my party! Everyone was obsessed with the slow-motion videos.' },
];

const locations = [
  'Beirut', 'Jounieh', 'Byblos', 'Mount Lebanon', 'Batroun', 'Tripoli', 'Sidon', 'Zahle', 'Faraya', 'UAE',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'La Folie Entertainment',
  description: 'Premium photobooth rentals for weddings, corporate events, and parties across Lebanon and the UAE.',
  telephone: '+961-71-582-222',
  url: 'https://www.lafolieentertainment.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Beirut', addressCountry: 'LB' },
  areaServed: ['Lebanon', 'United Arab Emirates'],
  priceRange: '$$',
};

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="La Folie Entertainment — Premium Photobooth Rental in Lebanon"
        description="Rent mirror photobooths and 360 spinners for weddings, corporate events, and parties across Lebanon. Instant prints, custom branding, premium experience. Book now!"
        canonical="/"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Premium mirror photobooth at luxury event in Lebanon" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>
        <motion.div
          className="container relative z-10 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p variants={fadeInUp} className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Premium Photobooth Rentals
          </motion.p>
          <motion.h1 variants={fadeInUp} className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Lebanon's Premium<br />
            <span className="text-gradient-gold">Photobooth Experience</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="mx-auto mt-6 max-w-2xl font-body text-base text-muted-foreground md:text-lg">
            Mirror Booths · 360 Spinners · Custom Branding · Instant Prints
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://wa.me/96171582222" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-gold px-8 font-body text-base font-semibold text-primary-foreground hover:opacity-90">
                Get a Quote
              </Button>
            </a>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-primary/30 px-8 font-body text-base text-foreground hover:bg-primary/10">
                See Our Booths
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/50 bg-card py-12 md:py-16">
        <div className="container">
          <motion.p className="mb-8 text-center font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Trusted at 500+ Events
          </motion.p>
          <motion.div
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                <p className="font-display text-3xl font-bold text-foreground md:text-4xl">{stat.number}</p>
                <p className="mt-1 font-body text-xs text-muted-foreground md:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.p variants={fadeInUp} className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Services</motion.p>
            <motion.h2 variants={fadeInUp} className="mt-3 font-display text-3xl font-bold md:text-4xl">Premium Photobooth Experiences</motion.h2>
          </motion.div>
          <motion.div
            className="mt-12 grid gap-8 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeInUp}>
                <Link to={service.href} className="group block overflow-hidden rounded-lg border border-border/50 bg-card transition-all hover:border-primary/30 hover:glow-gold">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={service.image} alt={`${service.title} rental in Lebanon`} loading="lazy" width={800} height={800} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold">{service.title}</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 font-body text-sm font-semibold text-primary">
                      Learn More <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-border/50 bg-card py-16 md:py-24">
        <div className="container">
          <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.p variants={fadeInUp} className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">Simple Process</motion.p>
            <motion.h2 variants={fadeInUp} className="mt-3 font-display text-3xl font-bold md:text-4xl">How It Works</motion.h2>
          </motion.div>
          <motion.div
            className="mt-12 grid gap-8 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {steps.map((step) => (
              <motion.div key={step.step} variants={fadeInUp} className="text-center">
                <span className="font-display text-5xl font-bold text-gradient-gold">{step.step}</span>
                <h3 className="mt-4 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.p variants={fadeInUp} className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">Testimonials</motion.p>
            <motion.h2 variants={fadeInUp} className="mt-3 font-display text-3xl font-bold md:text-4xl">What Our Clients Say</motion.h2>
          </motion.div>
          <motion.div
            className="mt-12 grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeInUp} className="rounded-lg border border-border/50 bg-card p-6">
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 font-body text-sm italic leading-relaxed text-muted-foreground">"{t.text}"</p>
                <div className="mt-4">
                  <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.event}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="border-y border-border/50 bg-card py-16 md:py-24">
        <div className="container">
          <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.p variants={fadeInUp} className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Work</motion.p>
            <motion.h2 variants={fadeInUp} className="mt-3 font-display text-3xl font-bold md:text-4xl">Event Gallery</motion.h2>
          </motion.div>
          <motion.div
            className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[heroBg, mirrorBooth, threeSixtyBooth, customBooth, mirrorBooth, heroBg, customBooth, threeSixtyBooth].map((img, i) => (
              <motion.div key={i} variants={fadeInUp} className={`overflow-hidden rounded-lg ${i === 0 || i === 5 ? 'row-span-2' : ''}`}>
                <img src={img} alt={`Photobooth event Lebanon ${i + 1}`} loading="lazy" width={800} height={800} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-8 text-center">
            <Link to="/gallery">
              <Button variant="outline" className="border-primary/30 font-body text-foreground hover:bg-primary/10">
                View Full Gallery <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.p variants={fadeInUp} className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">Coverage</motion.p>
            <motion.h2 variants={fadeInUp} className="mt-3 font-display text-3xl font-bold md:text-4xl">Serving All of Lebanon & UAE</motion.h2>
            <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-xl font-body text-sm text-muted-foreground">
              We deliver and set up premium photobooth experiences at venues across Lebanon and the United Arab Emirates.
            </motion.p>
          </motion.div>
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {locations.map((loc) => (
              <motion.span key={loc} variants={fadeInUp} className="rounded-full border border-primary/20 bg-secondary px-4 py-2 font-body text-sm text-secondary-foreground">
                {loc}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-card py-16 md:py-24">
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl font-bold md:text-4xl">
              Ready to Make Your Event <span className="text-gradient-gold">Unforgettable?</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-lg font-body text-muted-foreground">
              Get a personalized quote in minutes. Our team is ready to help you choose the perfect photobooth for your event.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8">
              <a href="https://wa.me/96171582222" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-gold px-8 font-body text-base font-semibold text-primary-foreground hover:opacity-90">
                  Get a Free Quote on WhatsApp
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
