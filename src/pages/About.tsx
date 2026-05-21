import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import heroBg from '@/assets/hero-bg.jpg';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About La Folie Entertainment',
  description: 'La Folie Entertainment is Lebanon\'s leading photobooth rental company with 500+ events completed, 10 booth types, and 5-star reviews. Based in Beirut, serving all Lebanon and UAE.',
  url: 'https://www.lafolieentertainment.com/about',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'La Folie Entertainment',
    url: 'https://www.lafolieentertainment.com',
    telephone: '+961-71-582-222',
    foundingLocation: {
      '@type': 'Place',
      name: 'Beirut, Lebanon',
    },
    description: 'Lebanon\'s #1 photobooth rental company offering 10 booth types including Mirror Booth, 360 Spinner, Glambot, LiveBooth, Vintage, Magazine, Room Booth, Bike Booth, Audio & Video Guest Books, and Cupcake ATM.',
    areaServed: [
      { '@type': 'Country', name: 'Lebanon' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
    knowsAbout: [
      'Photobooth Rental',
      'Event Entertainment',
      'Wedding Photography',
      'Corporate Event Entertainment',
      '360 Photo Booth',
      'Mirror Photo Booth',
    ],
  },
};

const About = () => (
  <Layout>
    <SEOHead
      title="About La Folie Entertainment — #1 Photobooth Company in Lebanon"
      description="La Folie Entertainment: Lebanon's leading photobooth rental company with 500+ events, 10 booth types, and 5-star reviews. Based in Beirut, serving Damour to Batroun."
      canonical="/about"
      jsonLd={aboutPageSchema}
      keywords="best photobooth company Lebanon, photobooth rental company Beirut, La Folie Entertainment, top photobooth Lebanon, premium photobooth Lebanon"
      breadcrumbs={[{ name: 'About', href: '/about' }]}
    />
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeInUp} className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">About Us</motion.p>
            <motion.h1 variants={fadeInUp} className="mt-3 font-display text-4xl font-bold md:text-5xl">
              We Don't Just Rent Photobooths — <span className="text-gradient-gold">We Create Experiences</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-6 font-body text-sm leading-relaxed text-muted-foreground">
              La Folie Entertainment was born out of a passion for creating unforgettable moments. Based in Beirut, Lebanon, we've grown from a single mirror booth to a full fleet of premium photobooth experiences serving hundreds of events across Lebanon and the UAE.
            </motion.p>
            <motion.p variants={fadeInUp} className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
              We believe every event deserves entertainment that goes beyond the ordinary. Our photobooths aren't just cameras in a box — they're interactive, immersive experiences that bring people together, create lasting memories, and generate content your guests will share for weeks.
            </motion.p>
            <motion.p variants={fadeInUp} className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
              With over 500 events completed and thousands of happy guests, we've refined our craft to deliver premium quality, reliability, and fun at every single event.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8">
              <a href="https://wa.me/96171582222" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-gold font-body font-semibold text-primary-foreground hover:opacity-90">
                  Let's Plan Your Event
                </Button>
              </a>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }} className="overflow-hidden rounded-lg">
            <img src={heroBg} alt="La Folie Entertainment team photobooth setup Lebanon" width={1920} height={1080} className="w-full rounded-lg object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
