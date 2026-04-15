import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import heroBg from '@/assets/hero-bg.jpg';
import mirrorBooth from '@/assets/mirror-booth.jpg';
import threeSixtyBooth from '@/assets/360-booth.jpg';
import customBooth from '@/assets/custom-booth.jpg';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const categories = ['All', 'Weddings', 'Corporate', 'Birthdays', 'Brand Activations'];

const images = [
  { src: heroBg, alt: 'Mirror photobooth wedding Beirut Lebanon', category: 'Weddings' },
  { src: mirrorBooth, alt: 'Mirror photobooth rental Lebanon event', category: 'Weddings' },
  { src: threeSixtyBooth, alt: '360 photobooth corporate event Beirut', category: 'Corporate' },
  { src: customBooth, alt: 'Custom branded photobooth Lebanon', category: 'Corporate' },
  { src: mirrorBooth, alt: 'Photobooth birthday party Lebanon', category: 'Birthdays' },
  { src: threeSixtyBooth, alt: '360 spinner birthday celebration Beirut', category: 'Birthdays' },
  { src: heroBg, alt: 'Brand activation photobooth Lebanon', category: 'Brand Activations' },
  { src: customBooth, alt: 'Corporate branded photo experience Beirut', category: 'Brand Activations' },
  { src: mirrorBooth, alt: 'Wedding mirror booth Jounieh Lebanon', category: 'Weddings' },
  { src: threeSixtyBooth, alt: '360 photobooth wedding reception Lebanon', category: 'Weddings' },
  { src: heroBg, alt: 'Premium photobooth gala Beirut', category: 'Corporate' },
  { src: customBooth, alt: 'Photobooth rental party Beirut Lebanon', category: 'Birthdays' },
];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? images : images.filter((img) => img.category === filter);

  return (
    <Layout>
      <SEOHead
        title="Photobooth Gallery — La Folie Entertainment Lebanon"
        description="Browse photos from our photobooth events across Lebanon. Weddings, corporate events, birthdays, and brand activations."
        canonical="/gallery"
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div className="text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">Gallery</p>
            <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">Our <span className="text-gradient-gold">Work</span></h1>
          </motion.div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 font-body text-sm font-medium transition-colors ${filter === cat ? 'bg-gradient-gold text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            className="mt-10 columns-2 gap-3 md:columns-3 lg:columns-4"
            initial="hidden"
            animate="visible"
            variants={stagger}
            key={filter}
          >
            {filtered.map((img, i) => (
              <motion.div key={`${filter}-${i}`} variants={fadeInUp} className="mb-3 overflow-hidden rounded-lg">
                <img src={img.src} alt={img.alt} loading="lazy" width={800} height={800} className="w-full object-cover transition-transform duration-500 hover:scale-105" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
