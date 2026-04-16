import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import mirrorBooth from '@/assets/mirror-booth.jpg';
import threeSixtyBooth from '@/assets/360-booth.jpg';
import customBooth from '@/assets/custom-booth.jpg';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

const servicesData = [
  {
    title: 'Mirror Photobooth',
    slug: 'mirror-photobooth',
    description: 'Our interactive mirror photobooth features a full-length touchscreen display with engaging animations that guide guests through their photo experience. Prints are ready in under 8 seconds with custom-designed frames matching your event theme.',
    features: ['Touchscreen interface with animations', 'Instant prints in under 8 seconds', 'Custom frames & overlays', 'Props included', 'Digital copies shared instantly'],
    ideal: 'Weddings, corporate galas, engagement parties',
    image: mirrorBooth,
  },
  {
    title: '360 Photobooth',
    slug: '360-photobooth',
    description: 'The ultimate showstopper — our 360 spinner captures slow-motion video from every angle as guests pose on an elevated platform. Perfect for creating viral social media content with branded overlays.',
    features: ['Slow-motion 360° video capture', 'Fits 4–6 guests on platform', 'Branded overlays & logos', 'Instant social media sharing', 'LED lighting effects'],
    ideal: 'Weddings, birthdays, brand activations, gender reveals',
    image: threeSixtyBooth,
  },
  {
    title: 'Custom Photo Experiences',
    slug: 'custom-photo-experiences',
    description: 'For brands and events that demand something truly unique, we create bespoke photo experiences. From themed backdrops to fully branded corporate setups with logo-stamped prints and digital overlays.',
    features: ['Themed backdrops & props', 'Branded prints with logos', 'Custom digital overlays', 'Corporate branding packages', 'Multi-booth setups available'],
    ideal: 'Corporate events, product launches, brand activations',
    image: customBooth,
  },
];

const serviceSchemas = servicesData.map((s) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.title,
  description: s.description,
  provider: { '@type': 'LocalBusiness', name: 'La Folie Entertainment' },
  areaServed: [{ '@type': 'Country', name: 'Lebanon' }, { '@type': 'Country', name: 'United Arab Emirates' }],
  url: `https://www.lafolieentertainment.com/services/${s.slug}`,
}));

const Services = () => (
  <Layout>
    <SEOHead
      title="Photobooth Services Lebanon — La Folie Entertainment"
      description="Explore our premium photobooth services: Mirror Booth, 360 Spinner, and Custom Photo Experiences for events across Lebanon."
      canonical="/services"
      jsonLd={serviceSchemas}
      keywords="mirror photobooth Lebanon, 360 photobooth Lebanon, glambot Lebanon, photobooth rental Beirut, custom photo experience Lebanon"
      breadcrumbs={[{ name: 'Services', href: '/services' }]}
    />
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div className="text-center" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeInUp} className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Services</motion.p>
          <motion.h1 variants={fadeInUp} className="mt-3 font-display text-4xl font-bold md:text-5xl">Premium Photobooth <span className="text-gradient-gold">Services</span></motion.h1>
          <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-2xl font-body text-muted-foreground">
            From interactive mirror booths to viral 360 spinners, we bring the entertainment that makes your event unforgettable.
          </motion.p>
        </motion.div>

        <div className="mt-16 space-y-20">
          {servicesData.map((service, i) => (
            <motion.div key={service.slug} className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 !== 0 ? 'md:[direction:rtl]' : ''}`} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeInUp} className="overflow-hidden rounded-lg md:[direction:ltr]">
                <img src={service.image} alt={`${service.title} rental Lebanon`} loading="lazy" width={800} height={800} className="w-full rounded-lg object-cover" />
              </motion.div>
              <motion.div variants={fadeInUp} className="md:[direction:ltr]">
                <h2 className="font-display text-3xl font-bold">{service.title}</h2>
                <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-body text-sm text-foreground">
                      <ChevronRight className="h-4 w-4 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-body text-xs text-muted-foreground"><strong className="text-foreground">Ideal for:</strong> {service.ideal}</p>
                <div className="mt-6">
                  <a href="https://wa.me/96171582222" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-gold font-body font-semibold text-primary-foreground hover:opacity-90">Book This Booth</Button>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
