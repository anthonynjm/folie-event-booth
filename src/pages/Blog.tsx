import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, User } from 'lucide-react';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import heroBg from '@/assets/hero-bg.jpg';
import mirrorBooth from '@/assets/mirror-booth.jpg';
import threeSixtyBooth from '@/assets/360-booth.jpg';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

const posts = [
  {
    slug: '5-reasons-wedding-photobooth',
    title: '5 Reasons Every Wedding in Lebanon Needs a Photobooth',
    excerpt: 'Discover why Lebanese weddings are incomplete without a premium photobooth experience. From keepsake prints to social media content, here\'s why every couple should consider it.',
    image: heroBg,
    date: '2024-12-15',
    author: 'La Folie Team',
  },
  {
    slug: 'mirror-booth-vs-360',
    title: 'Mirror Booth vs 360 Booth: Which One Is Right for Your Event?',
    excerpt: 'Not sure which photobooth to choose? We break down the key differences between mirror photobooths and 360 spinners to help you pick the perfect one.',
    image: mirrorBooth,
    date: '2024-11-28',
    author: 'La Folie Team',
  },
  {
    slug: 'choose-best-photobooth-company',
    title: 'How to Choose the Best Photobooth Rental Company in Lebanon',
    excerpt: 'With so many options available, how do you find the right photobooth provider? Here are the key factors to consider when booking a photobooth in Lebanon.',
    image: threeSixtyBooth,
    date: '2024-11-10',
    author: 'La Folie Team',
  },
];

const Blog = () => (
  <Layout>
    <SEOHead
      title="Photobooth Blog — Tips, Guides & Inspiration"
      description="Tips on choosing the right photobooth, event planning ideas, and inspiration for weddings and parties in Lebanon."
      canonical="/blog"
      keywords="photobooth tips Lebanon, wedding photobooth guide, best photobooth company Lebanon, photobooth for wedding Beirut"
      breadcrumbs={[{ name: 'Blog', href: '/blog' }]}
    />
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <motion.div className="text-center" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeInUp} className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">Blog</motion.p>
          <motion.h1 variants={fadeInUp} className="mt-3 font-display text-4xl font-bold md:text-5xl">Tips & <span className="text-gradient-gold">Inspiration</span></motion.h1>
        </motion.div>

        <motion.div className="mt-12 space-y-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {posts.map((post) => (
            <motion.article key={post.slug} variants={fadeInUp} className="group grid gap-6 overflow-hidden rounded-lg border border-border/50 bg-card md:grid-cols-[280px_1fr]">
              <div className="aspect-video overflow-hidden md:aspect-auto">
                <img src={post.image} alt={post.title} loading="lazy" width={800} height={800} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center p-6 md:py-6 md:pl-0 md:pr-6">
                <div className="flex items-center gap-4 font-body text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                </div>
                <h2 className="mt-2 font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary">{post.title}</h2>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1 font-body text-sm font-semibold text-primary">
                  Read More <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Blog;
