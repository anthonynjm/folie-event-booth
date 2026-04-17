import { motion } from 'framer-motion';
import kpmg from '@/assets/logos/kpmg.png';
import ferrero from '@/assets/logos/ferrero.png';
import tictac from '@/assets/logos/tictac.png';
import kinder from '@/assets/logos/kinder.png';
import usj from '@/assets/logos/usj.png';
import usek from '@/assets/logos/usek.jpg';
import aub from '@/assets/logos/aub.jpg';
import pfizer from '@/assets/logos/pfizer.png';
import addmind from '@/assets/logos/addmind.png';
import ap from '@/assets/logos/ap.jpg';
import iwc from '@/assets/logos/iwc.jpg';
import braun from '@/assets/logos/braun.png';
import unLebanon from '@/assets/logos/un-lebanon.png';
import interactClub from '@/assets/logos/interact-club.png';
import skyManagement from '@/assets/logos/sky-management.png';
import biel from '@/assets/logos/biel.png';
import ndu from '@/assets/logos/ndu.jpg';

const clients = [
  { name: 'KPMG Lebanon', src: kpmg },
  { name: 'Ferrero Rocher', src: ferrero },
  { name: 'Tic Tac', src: tictac },
  { name: 'Kinder', src: kinder },
  { name: 'Université Saint-Joseph de Beyrouth', src: usj },
  { name: 'USEK Business School', src: usek },
  { name: 'American University of Beirut', src: aub },
  { name: 'Pfizer', src: pfizer },
  { name: 'Addmind', src: addmind },
  { name: 'AP', src: ap },
  { name: 'IWC Schaffhausen', src: iwc },
  { name: 'Braun', src: braun },
  { name: 'United Nations Lebanon', src: unLebanon },
  { name: 'Interact Club', src: interactClub },
  { name: 'Sky Management', src: skyManagement },
  { name: 'BIEL', src: biel },
  { name: 'Notre Dame University Louaize', src: ndu },
];

const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.04 } } };

const CorporateClients = () => (
  <section className="border-y border-border/50 bg-card py-16 md:py-24">
    <div className="container">
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.p variants={fadeIn} className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Some of our
        </motion.p>
        <motion.h2 variants={fadeIn} className="mt-3 font-display text-3xl font-bold uppercase tracking-wide md:text-4xl">
          Corporate Clients
        </motion.h2>
      </motion.div>

      <motion.ul
        className="mx-auto mt-12 grid max-w-6xl grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
      >
        {clients.map((c) => (
          <motion.li
            key={c.name}
            variants={fadeIn}
            className="flex aspect-[5/3] items-center justify-center rounded-md bg-white/95 p-4 shadow-sm transition-all hover:bg-white hover:shadow-md"
          >
            <img
              src={c.src}
              alt={c.name}
              loading="lazy"
              className="max-h-full max-w-full object-contain"
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </section>
);

export default CorporateClients;
