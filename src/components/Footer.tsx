import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const serviceAreas = [
    'Marina del Rey',
    'Playa Vista',
    'Beverly Hills',
    'Brentwood',
    'Pacific Palisades',
    'Culver City',
    'Santa Monica',
    'Venice',
    'Long Beach',
    'El Segundo'
  ];

  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">AllSet Appliance</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:818-571-4030" className="hover:text-primary transition-colors">
                  818-571-4030
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:allsetappliance.business@gmail.com" className="hover:text-primary transition-colors">
                  allsetappliance.business@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span>Serving Greater Los Angeles Area</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/services" className="block hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/pricing" className="block hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link to="/about" className="block hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Service Areas</h4>
            <div className="space-y-1">
              {serviceAreas.slice(0, 6).map((area) => (
                <div key={area} className="text-sm text-white/80">
                  {area}
                </div>
              ))}
              <Link to="/areas" className="text-sm text-primary hover:underline">
                View All Areas →
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Our Services</h4>
            <nav className="space-y-2 text-sm">
              <Link to="/services/refrigerator" className="block hover:text-primary transition-colors">
                Refrigerator Repair
              </Link>
              <Link to="/services/washer" className="block hover:text-primary transition-colors">
                Washer Repair
              </Link>
              <Link to="/services/dryer" className="block hover:text-primary transition-colors">
                Dryer Repair
              </Link>
              <Link to="/services/dishwasher" className="block hover:text-primary transition-colors">
                Dishwasher Repair
              </Link>
              <Link to="/services" className="text-primary hover:underline">
                View All Services →
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
          <p>&copy; {new Date().getFullYear()} AllSet Appliance. All rights reserved. Licensed & Insured.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;