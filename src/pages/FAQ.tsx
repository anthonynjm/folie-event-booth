import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: 'How much does it cost to rent a photobooth in Lebanon?', a: 'Our photobooth rental packages start with our Essential plan and go up to our Ultimate package. Prices vary based on event duration, location, customization, and booth type. Contact us via WhatsApp for a personalized quote tailored to your event.' },
  { q: 'How much space does a photobooth need?', a: 'A mirror photobooth requires approximately 2m x 2m of floor space, while the 360 spinner needs around 3m x 3m. We recommend additional space for guest queuing and props. Our team will assess your venue to ensure the perfect fit.' },
  { q: 'How long does it take to set up?', a: 'Setup typically takes 45–60 minutes. Our team arrives early to ensure everything is ready before your event begins. We handle all delivery, setup, and teardown so you can focus on enjoying your event.' },
  { q: 'Do you provide props?', a: 'Yes! Every package includes a curated selection of fun props — hats, glasses, signs, and more. For custom or themed events, we can source specialty props to match your event\'s design.' },
  { q: 'Can I customize the photo frame with my logo or event theme?', a: 'Absolutely! We offer custom frame design as part of our Premium and Ultimate packages. You can include your logo, event name, date, colors, and any branding elements for a fully personalized experience.' },
  { q: 'Do you deliver outside Beirut?', a: 'Yes, we serve all of Lebanon including Jounieh, Byblos, Mount Lebanon, Batroun, Tripoli, Sidon, Zahle, and Faraya. We also offer services in the UAE. Delivery fees may apply depending on location.' },
  { q: 'How do guests receive their photos?', a: 'Guests receive instant high-quality prints on the spot. They can also get digital copies via QR code, email, or SMS for easy social media sharing. All photos are available in full resolution.' },
  { q: 'What is the difference between a mirror photobooth and a 360 photobooth?', a: 'The mirror photobooth is a full-length interactive mirror with touchscreen animations that takes photos and prints them instantly. The 360 photobooth captures slow-motion video as a camera arm spins around guests on an elevated platform — perfect for viral social content.' },
  { q: 'Do you offer photobooth rentals in Dubai/UAE?', a: 'Yes! We offer photobooth rental services in Dubai and across the UAE. Contact us to discuss logistics and availability for your UAE event.' },
  { q: 'How far in advance should I book?', a: 'We recommend booking at least 2–4 weeks in advance, especially during peak wedding and event season (May–October). Popular dates fill up quickly, so the earlier you book, the better.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const FAQ = () => (
  <Layout>
    <SEOHead
      title="Photobooth Rental FAQ — La Folie Entertainment Lebanon"
      description="Answers to common questions about renting a photobooth in Lebanon. Pricing, setup, delivery, customization, and more."
      canonical="/faq"
      jsonLd={jsonLd}
      keywords="photobooth rental FAQ Lebanon, how much does photobooth cost Lebanon, photobooth setup time, photobooth delivery Beirut"
      breadcrumbs={[{ name: 'FAQ', href: '/faq' }]}
    />
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <motion.div className="text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">Frequently Asked <span className="text-gradient-gold">Questions</span></h1>
        </motion.div>
        <motion.div className="mt-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-border/50 bg-card px-4">
                <AccordionTrigger className="font-body text-sm font-medium text-foreground hover:text-primary [&[data-state=open]]:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default FAQ;
