import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import heroBg from '@/assets/hero-bg.jpg';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

const About = () => (
  <Layout>
    <SEOHead
      title="About La Folie Entertainment — Premium Photobooth Company Lebanon"
      description="Learn about La Folie Entertainment, Lebanon's premium photobooth rental company. Years of experience creating unforgettable event moments."
      canonical="/about"
      keywords="best photobooth company Lebanon, photobooth rental company Beirut, La Folie Entertainment about"
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
              <a href="https://wa.me/96170222018" target="_blank" rel="noopener noreferrer">
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
