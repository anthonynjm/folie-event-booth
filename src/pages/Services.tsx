import { motion } from 'framer-motion';
import { ChevronRight, Clock, Printer, Truck, Lightbulb, Users, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import liveBoothImg from '@/assets/booths/livebooth.jpg';
import vintageBoothImg from '@/assets/booths/vintage.jpg';
import magazineBoothImg from '@/assets/booths/magazine.jpg';
import mirrorBoothImg from '@/assets/booths/mirror.jpg';
import steelRoomImg from '@/assets/booths/steel-room.jpg';
import roomBoothImg from '@/assets/booths/room-booth.jpg';
import bikeBoothImg from '@/assets/booths/bike.jpg';
import audioGuestBookImg from '@/assets/booths/audio.jpg';
import videoGuestBookImg from '@/assets/booths/video.jpg';
import cupcakeAtmImg from '@/assets/booths/cupcake.jpg';
import e1 from '@/assets/gallery/e1.jpg';
import e2 from '@/assets/gallery/e2.jpg';
import e3 from '@/assets/gallery/e3.jpg';
import e4 from '@/assets/gallery/e4.jpg';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const WHATSAPP = 'https://wa.me/96171582222';

interface BoothService {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  ideal: string;
  image: string;
}

const booths: BoothService[] = [
  {
    title: 'LiveBooth',
    slug: 'livebooth',
    tagline: 'Capture the moment — live.',
    description:
      'The LiveBooth delivers real-time photo magic — perfect for dynamic events and instant memories.',
    ideal: 'Fast-paced parties, brand activations, product launches',
    image: liveBoothImg,
  },
  {
    title: 'Vintage Booth',
    slug: 'vintage-booth',
    tagline: 'Classic charm meets modern fun.',
    description:
      'The Vintage Booth adds a nostalgic twist that fits perfectly with elegant or retro-themed events.',
    ideal: 'Weddings, retro parties, elegant dinners',
    image: vintageBoothImg,
  },
  {
    title: 'Magazine Booth',
    slug: 'magazine-booth',
    tagline: 'Feel like a cover star.',
    description:
      'The Magazine Booth turns every photo into a headline moment with custom magazine-style templates.',
    ideal: 'Birthdays, brand events, fashion nights',
    image: magazineBoothImg,
  },
  {
    title: 'Mirror Booth',
    slug: 'mirror-booth',
    tagline: 'Interactive, glamorous, and fun.',
    description:
      'The Mirror Booth reflects your best angles while keeping the energy alive. Instant prints, touch-screen animations.',
    ideal: 'Weddings, galas, engagement parties',
    image: mirrorBoothImg,
  },
  {
    title: 'Room Booth (Steel)',
    slug: 'room-booth-steel',
    tagline: 'Step inside and own your moment.',
    description:
      'The Steel Room Booth creates a studio-like experience — bold, modern, and premium.',
    ideal: 'Corporate events, upscale parties',
    image: steelRoomImg,
  },
  {
    title: 'Room Booth',
    slug: 'room-booth',
    tagline: 'Our top-tier immersive booth.',
    description:
      'Designed for those who want cinematic photos, perfect lighting, and a show-stopping experience.',
    ideal: 'Weddings, premium events, VIP activations',
    image: roomBoothImg,
  },
  {
    title: 'Bike Booth',
    slug: 'bike-booth',
    tagline: 'A booth that comes to you.',
    description:
      'The Bike Booth roams around the event, making spontaneous photo stops to capture candid, fun moments.',
    ideal: 'Outdoor events, festivals, large venues',
    image: bikeBoothImg,
  },
  {
    title: 'Audio Guest Book',
    slug: 'audio-guest-book',
    tagline: 'A new way to capture memories.',
    description:
      'Let guests record personal voice messages filled with laughter, love, and emotion.',
    ideal: 'Weddings, milestone birthdays, reunions',
    image: audioGuestBookImg,
  },
  {
    title: 'Video Guest Book',
    slug: 'video-guest-book',
    tagline: 'Heartfelt videos, forever kept.',
    description:
      'Guests record short, heartfelt videos — the modern way to remember your event forever.',
    ideal: 'Weddings, corporate send-offs, celebrations',
    image: videoGuestBookImg,
  },
  {
    title: 'Cupcake ATM Machine',
    slug: 'cupcake-atm',
    tagline: 'A sweet surprise your guests won\'t forget.',
    description:
      'Add a touch of surprise to your event with our Cupcake ATM machine — guests pull fresh cupcakes on demand.',
    ideal: 'Weddings, birthdays, corporate events',
    image: cupcakeAtmImg,
  },
];

const included = [
  { icon: Clock, label: '3–4 hours of service' },
  { icon: Printer, label: 'Unlimited printing' },
  { icon: Truck, label: 'Transportation' },
  { icon: Lightbulb, label: 'Professional lighting' },
  { icon: Users, label: 'Friendly on-site assistants' },
];

const games = [
  'Jenga',
  'XO',
  'Ping-Pong',
  'Beer Pong',
  'Baby Foot (large & small)',
  'Small Hockey',
  'Darts',
];

const serviceSchemas = booths.map((s) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.title,
  description: s.description,
  provider: { '@type': 'LocalBusiness', name: 'La Folie Entertainment' },
  areaServed: [{ '@type': 'Country', name: 'Lebanon' }, { '@type': 'Country', name: 'United Arab Emirates' }],
  url: `https://www.lafolieentertainment.com/services/${s.slug}`,
}));

const galleryPreview = [e1, e2, e3, e4];

const Services = () => (
  <Layout>
    <SEOHead
      title="Photobooth & Games Services Lebanon — La Folie Entertainment"
      description="10 photobooth experiences — LiveBooth, Mirror, Magazine, Vintage, Room, Bike, Audio & Video guest books, Cupcake ATM — plus interactive games. Make your event unforgettable."
      canonical="/services"
      jsonLd={serviceSchemas}
      keywords="photobooth Lebanon, mirror booth Beirut, magazine booth Lebanon, vintage booth, 360 booth, audio guest book Lebanon, video guest book, cupcake ATM Lebanon, interactive games events"
      breadcrumbs={[{ name: 'Services', href: '/services' }]}
    />

    {/* Hero */}
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div className="text-center" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeInUp} className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Photobooth & Games Experiences
          </motion.p>
          <motion.h1 variants={fadeInUp} className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Make Your Event <span className="text-gradient-gold">Unforgettable</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-2xl font-body text-muted-foreground">
            From classic mirrors to cupcake ATMs, La Folie brings energy, laughter, and unforgettable memories to every celebration.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Booth grid */}
    <section className="pb-16 md:pb-24">
      <div className="container">
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {booths.map((booth) => (
            <motion.article
              key={booth.slug}
              variants={fadeInUp}
              className="group flex flex-col overflow-hidden rounded-lg border border-border/50 bg-card transition-all hover:border-primary/40"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={booth.image}
                  alt={`${booth.title} — ${booth.tagline}`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-xl font-bold uppercase tracking-wide">{booth.title}</h2>
                <p className="mt-1 font-body text-sm italic text-primary">{booth.tagline}</p>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">{booth.description}</p>
                <p className="mt-3 font-body text-xs text-muted-foreground">
                  <strong className="text-foreground">Ideal for:</strong> {booth.ideal}
                </p>
                <div className="mt-auto pt-5">
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-gold font-body font-semibold text-primary-foreground hover:opacity-90">
                      Book This Booth
                    </Button>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>

    {/* What's included */}
    <section className="border-y border-border/50 bg-card py-16 md:py-20">
      <div className="container">
        <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fadeInUp} className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            What's Included
          </motion.p>
          <motion.h2 variants={fadeInUp} className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Every Booth Includes
          </motion.h2>
        </motion.div>
        <motion.ul
          className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 md:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {included.map((item) => (
            <motion.li key={item.label} variants={fadeInUp} className="flex flex-col items-center text-center">
              <item.icon className="h-8 w-8 text-primary" />
              <span className="mt-3 font-body text-sm text-foreground">{item.label}</span>
            </motion.li>
          ))}
        </motion.ul>
        <p className="mx-auto mt-10 max-w-2xl text-center font-body text-sm text-muted-foreground">
          Every photo prints in high resolution within 6 seconds, with a customized frame template that matches your event's theme or branding.
        </p>
      </div>
    </section>

    {/* Games */}
    <section className="py-16 md:py-24">
      <div className="container grid items-center gap-10 md:grid-cols-2">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fadeInUp} className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Interactive Games
          </motion.p>
          <motion.h2 variants={fadeInUp} className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Game <span className="text-gradient-gold">Collection</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 font-body text-muted-foreground">
            Perfect for guests who love a little competition.
          </motion.p>
          <motion.ul variants={fadeInUp} className="mt-6 grid grid-cols-2 gap-2">
            {games.map((g) => (
              <li key={g} className="flex items-center gap-2 font-body text-sm text-foreground">
                <ChevronRight className="h-4 w-4 text-primary" /> {g}
              </li>
            ))}
          </motion.ul>
          <motion.div variants={fadeInUp} className="mt-8">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-gold font-body font-semibold text-primary-foreground hover:opacity-90">
                Ask About Games
              </Button>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {galleryPreview.slice(0, 4).map((img, i) => (
            <motion.img
              key={i}
              variants={fadeInUp}
              src={img}
              alt="La Folie event"
              loading="lazy"
              className="aspect-square w-full rounded-lg object-cover"
            />
          ))}
        </motion.div>
      </div>
    </section>

    {/* Combo offer */}
    <section className="border-t border-border/50 bg-card py-16 md:py-20">
      <div className="container">
        <motion.div
          className="mx-auto max-w-3xl rounded-xl border border-primary/30 bg-background/40 p-8 text-center md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp}>
            <Gift className="mx-auto h-10 w-10 text-primary" />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Combo <span className="text-gradient-gold">Offer</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-xl font-body text-muted-foreground">
            Enjoy a special combo discount when you book both our photobooth and games packages together.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-8">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-gold px-8 font-body font-semibold text-primary-foreground hover:opacity-90">
                Get Combo Pricing
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Services;
