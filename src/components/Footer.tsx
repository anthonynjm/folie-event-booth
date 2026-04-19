import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold">
              <span className="text-gradient-gold">La Folie</span> Entertainment
            </h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
              Premium photobooth rentals for unforgettable events across Lebanon and the UAE.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="https://instagram.com/lafolieentertainment" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/lafolieentertainment" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">Services</h4>
            <ul className="mt-4 space-y-2">
              {[
                { label: 'Mirror Photobooth', href: '/services/mirror-photobooth' },
                { label: '360 Photobooth', href: '/services/360-photobooth' },
                { label: 'Custom Experiences', href: '/services/custom-photo-experiences' },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="font-body text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {[
                { label: 'Gallery', href: '/gallery' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="font-body text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+96170222018" className="hover:text-primary">70 222 018</a>
              </li>
              <li className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@lafolieentertainment.com" className="hover:text-primary">info@lafolieentertainment.com</a>
              </li>
              <li className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Beirut, Lebanon
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/50 pt-6 text-center font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} La Folie Entertainment. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
