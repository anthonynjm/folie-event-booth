import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { Check } from 'lucide-react';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

const packages = [
  {
    name: 'Essential',
    description: 'Perfect for intimate events',
    features: ['2-hour booth rental', '1 photobooth of your choice', 'Unlimited prints', 'Fun props included', 'Delivery within Beirut', 'Digital copies for all guests'],
    popular: false,
  },
  {
    name: 'Premium',
    description: 'Our most popular package',
    features: ['3-hour booth rental', '1 photobooth of your choice', 'Unlimited prints', 'Props & accessories', 'Custom frame design', 'Guest book with prints', 'Delivery all Lebanon', 'Dedicated attendant'],
    popular: true,
  },
  {
    name: 'Ultimate',
    description: 'The complete experience',
    features: ['4+ hours rental', 'Multiple booths available', 'Full event branding', 'Custom props & backdrops', 'Priority setup', 'Dedicated attendant', 'Delivery Lebanon & UAE', 'Social media sharing station'],
    popular: false,
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Photobooth Rental Packages',
  brand: { '@type': 'Brand', name: 'La Folie Entertainment' },
  offers: packages.map((p) => ({
    '@type': 'Offer',
    name: p.name,
    description: p.description,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  })),
};

const Pricing = () => (
  <Layout>
    <SEOHead
      title="Photobooth Rental Prices Lebanon — Packages & Quotes"
      description="Explore photobooth rental packages from La Folie Entertainment. Essential, Premium, and Ultimate plans for events across Lebanon. Get a free quote."
      canonical="/pricing"
      jsonLd={jsonLd}
      keywords="photobooth rental prices Lebanon, how much does a photobooth cost in Lebanon, photobooth packages Beirut, photobooth rental near me Lebanon"
      breadcrumbs={[{ name: 'Pricing', href: '/pricing' }]}
    />
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div className="text-center" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeInUp} className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">Pricing</motion.p>
          <motion.h1 variants={fadeInUp} className="mt-3 font-display text-4xl font-bold md:text-5xl">Choose Your <span className="text-gradient-gold">Package</span></motion.h1>
          <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-xl font-body text-muted-foreground">
            Prices vary by date, location, and customization. Contact us for a personalized quote.
          </motion.p>
        </motion.div>

        <motion.div className="mt-12 grid gap-6 md:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={fadeInUp}
              className={`relative rounded-lg border p-6 ${pkg.popular ? 'border-primary glow-gold bg-card' : 'border-border/50 bg-card'}`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-4 py-1 font-body text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold">{pkg.name}</h3>
              <p className="mt-1 font-body text-sm text-muted-foreground">{pkg.description}</p>
              <ul className="mt-6 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 font-body text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="https://wa.me/96170222018" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className={`w-full font-body font-semibold ${pkg.popular ? 'bg-gradient-gold text-primary-foreground hover:opacity-90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
                    Get a Quote
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Pricing;
