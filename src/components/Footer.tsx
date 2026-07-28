import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const serviceAreas = [
    'Bell Canyon',
    'Burbank',
    'Calabasas',
    'Westside Los Angeles',
    'Marina del Rey',
    'Venice',
    'Santa Monica',
    'Westwood',
    'Culver City',
    'Pacific Palisades',
    'Porter Ranch',
    'San Fernando Valley',
    'San Fernando'
  ];

  return (
    <footer className="text-white" style={{ background: 'linear-gradient(180deg, rgba(7,17,31,0.98) 0%, rgba(10,25,46,0.98) 48%, rgba(12,33,60,1) 100%)' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 font-display text-xl font-bold">AllSet Appliance</h3>
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
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <span>Serving the Valley, Westside Los Angeles, and nearby coastal communities</span>
              </div>
              <p className="text-sm text-white/75">Free phone consultation available before you book.</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">Quick Links</h4>
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

          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">Service Areas</h4>
            <div className="space-y-1">
              {serviceAreas.slice(0, 6).map((area) => (
                <div key={area} className="text-sm text-white/80">
                  {area}
                </div>
              ))}
              <Link to="/contact" className="text-sm text-primary hover:underline">
                View All Areas →
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">Our Services</h4>
            <nav className="space-y-2 text-sm">
              <Link to="/services" className="block hover:text-primary transition-colors">
                Refrigerator Repair
              </Link>
              <Link to="/services" className="block hover:text-primary transition-colors">
                Washer Repair
              </Link>
              <Link to="/services" className="block hover:text-primary transition-colors">
                Dryer Repair
              </Link>
              <Link to="/services" className="block hover:text-primary transition-colors">
                Dishwasher Repair
              </Link>
              <Link to="/services" className="text-primary hover:underline">
                View All Services →
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/75">
          <p>&copy; {new Date().getFullYear()} AllSet Appliance. All rights reserved. Licensed.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
