import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md supports-[backdrop-filter]:bg-slate-950/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-display font-bold text-2xl hover:opacity-90 transition-opacity">
            <span className="wordmark-outline text-[#f28c1b]">AllSet</span>{' '}
            <span className="wordmark-outline text-[#6fb9ff]">Appliance</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white/85 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-white/85 hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/pricing" className="text-white/85 hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-white/85 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-white/85 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="tel:818-571-4030" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">Free Call: 818-571-4030</span>
              </a>
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white/85 hover:text-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white/85 hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-white/85 hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/pricing"
                className="text-white/85 hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="text-white/85 hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-white/85 hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:818-571-4030"
                className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-3 py-2 rounded-md"
              >
                <Phone className="h-4 w-4" />
                Free Call
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
