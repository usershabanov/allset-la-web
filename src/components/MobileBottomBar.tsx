import { Phone, Mail, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileBottomBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border z-40">
      <div className="grid grid-cols-3 gap-1">
        {/* Call Button */}
        <a
          href="tel:818-571-4030"
        >
          <Phone className="h-5 w-5 mb-1" />
          <span className="text-xs font-medium">Call</span>
        </a>

        {/* Email Button */}
        <a
          href="mailto:allsetappliance.business@gmail.com"
          className="flex flex-col items-center justify-center py-3 px-2 text-accent hover:bg-blue-light transition-colors"
        >
          <Mail className="h-5 w-5 mb-1" />
          <span className="text-xs font-medium">Email</span>
        </a>

        {/* Book Button */}
        <Link
          to="/contact"
          className="flex flex-col items-center justify-center py-3 px-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <CalendarDays className="h-5 w-5 mb-1" />
          <span className="text-xs font-medium">Book</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileBottomBar;