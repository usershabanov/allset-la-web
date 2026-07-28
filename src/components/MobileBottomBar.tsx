import { Phone, Mail, CalendarDays } from 'lucide-react';

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-slate-950/95 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-3 gap-1">
        <a
          href="tel:818-571-4030"
          className="flex flex-col items-center justify-center bg-primary px-2 py-3 text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Phone className="mb-1 h-5 w-5" />
          <span className="text-xs font-medium">Free Call</span>
        </a>

        <a
          href="mailto:allsetappliance.business@gmail.com"
          className="flex flex-col items-center justify-center px-2 py-3 text-white/85 transition-colors hover:bg-white/5"
        >
          <Mail className="mb-1 h-5 w-5" />
          <span className="text-xs font-medium">Email</span>
        </a>

        <a
          href="/#booking-form"
          className="flex flex-col items-center justify-center bg-primary px-2 py-3 text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <CalendarDays className="mb-1 h-5 w-5" />
          <span className="text-xs font-medium">Book</span>
        </a>
      </div>
    </div>
  );
};

export default MobileBottomBar;
