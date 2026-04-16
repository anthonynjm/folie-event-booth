import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/" className="font-display text-xl font-bold tracking-wide text-foreground md:text-2xl">
          <span className="text-gradient-gold">La Folie</span>{' '}
          <span className="hidden sm:inline">Entertainment</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`rounded-md px-3 py-2 font-body text-sm font-medium transition-colors hover:text-primary ${
                location.pathname.startsWith(link.href)
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Phone */}
        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+96171582222" className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary">
            <Phone className="h-4 w-4" />
            71 582 222
          </a>
          <a href="https://wa.me/96171582222" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-gold font-body text-sm font-semibold text-primary-foreground hover:opacity-90">
              Get a Quote
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-md px-3 py-3 font-body text-sm font-medium transition-colors ${
                  location.pathname.startsWith(link.href)
                    ? 'text-primary bg-secondary'
                    : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center gap-3 border-t border-border/50 pt-4">
              <a href="tel:+96171582222" className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                71 582 222
              </a>
              <a href="https://wa.me/96171582222" target="_blank" rel="noopener noreferrer" className="ml-auto">
                <Button className="bg-gradient-gold font-body text-sm font-semibold text-primary-foreground">
                  Get a Quote
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
