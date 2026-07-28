import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import BookingForm from '@/components/BookingForm';
import { 
  Wrench, 
  Refrigerator, 
  WashingMachine, 
  Microwave,
  Phone,
  CheckCircle,
  Shield,
  Clock,
  DollarSign,
  Star,
  Users,
  ChevronRight,
  MapPin,
  Zap,
  ChefHat
} from 'lucide-react';
import heroImage from '@/assets/hero-appliance-repair.jpg';

const Home = () => {
  const services = [
    {
      icon: Refrigerator,
      name: 'Refrigerator',
      description: 'Not cooling, leaking, or noisy? We diagnose and repair all major brands quickly—so your food stays fresh.',
      slug: 'refrigerator'
    },
    {
      icon: WashingMachine,
      name: 'Washer',
      description: 'From drain issues to no-spin, we diagnose the problem clearly and help get your washer running again.',
      slug: 'washer'
    },
    {
      icon: Zap,
      name: 'Dryer',
      description: 'No heat, won\'t start, or taking too long? We\'ll get your dryer running efficiently again.',
      slug: 'dryer'
    },
    {
      icon: Microwave,
      name: 'Dishwasher',
      description: 'Not cleaning properly or won\'t drain? We service all dishwasher brands with upfront pricing.',
      slug: 'dishwasher'
    },
    {
      icon: ChefHat,
      name: 'Oven/Range',
      description: 'Temperature issues or burners not working? Professional oven and range repair services.',
      slug: 'oven'
    },
    {
      icon: Microwave,
      name: 'Microwave',
      description: 'Not heating or display problems? Quick microwave repairs to get your kitchen back to normal.',
      slug: 'microwave'
    },
    {
      icon: Wrench,
      name: 'Garbage Disposal',
      description: 'Jammed, leaking, or making noise? Fast disposal repairs and replacements available.',
      slug: 'disposal'
    },
    {
      icon: Refrigerator,
      name: 'Freezer',
      description: 'Temperature problems or ice buildup? We repair all freezer types including chest and upright.',
      slug: 'freezer'
    }
  ];

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
    'San Fernando',
    'San Fernando Valley'
  ];

  const majorBrands = [
    'Samsung',
    'LG',
    'Whirlpool',
    'GE',
    'Frigidaire',
    'Bosch',
    'KitchenAid',
    'Maytag'
  ];

  const faqs = [
    {
      question: 'Do you offer same-day service?',
      answer: 'Yes, in most cases across our listed service areas. We understand appliance emergencies can\'t wait.'
    },
    {
      question: 'Is the service call fee applied to the repair?',
      answer: 'Yes—when you approve the repair, your diagnostic fee goes toward the total job cost.'
    },
    {
      question: 'What brands do you service?',
      answer: 'We service most major appliance brands including Samsung, LG, Whirlpool, GE, KitchenAid, Maytag, Bosch, and many others.'
    },
    {
      question: 'Do you offer a free phone consultation?',
      answer: 'Yes. Call 818-571-4030 and we can discuss the symptoms, likely next steps, and scheduling before you book online.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative blizzard-hero text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(6,12,23,0.56),rgba(8,18,35,0.72))]"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-5 flex flex-wrap justify-center gap-3">
              <Badge className="border border-white/15 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15">
                Free Phone Consultation
              </Badge>
              <Badge className="border border-white/15 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15">
                Same-Day Availability
              </Badge>
            </div>
            <h1 className="hero-readable-title font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
              Fast, Reliable Appliance Repair in Los Angeles
            </h1>
            <p className="hero-readable-text text-xl md:text-2xl mb-8 text-white/95 text-balance">
              Licensed local appliance repair with same-day availability when scheduling allows and a free phone consultation before you book.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg"
                asChild
              >
                <a href="#booking-form">Book Service</a>
              </Button>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg"
                asChild
              >
                <a href="tel:818-571-4030" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Free Call 818-571-4030
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Fast Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 blizzard-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <Shield className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-display font-semibold text-xl">Licensed Service</h3>
              <p className="text-muted-foreground">
                Clear, professional service for local homeowners across Los Angeles and the Valley.
              </p>
            </div>
            <div className="space-y-4">
              <Users className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-display font-semibold text-xl">Residential Appliance Repair</h3>
              <p className="text-muted-foreground">
                Repair, installation, and maintenance for the appliances you use every day.
              </p>
            </div>
            <div className="space-y-4">
              <DollarSign className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-display font-semibold text-xl">Free Phone Consultation</h3>
              <p className="text-muted-foreground">
                Start with a quick call to explain the issue, ask questions, and decide the best next step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 blizzard-surface-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Expert Appliance Repair Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional repair for all major appliances with same-day service availability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.slug} className="card-hover h-full">
                  <CardHeader className="text-center">
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center mb-4">
                      {service.description}
                    </CardDescription>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/services">
                        Learn More
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 blizzard-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Serving Greater Los Angeles
            </h2>
            <p className="text-xl text-muted-foreground">
              Service focused on the Valley, Westside Los Angeles, and nearby coastal communities
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {serviceAreas.map((area) => (
              <Badge
                key={area}
                variant="secondary"
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              >
                <MapPin className="h-4 w-4 mr-2" />
                {area}
              </Badge>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link to="/contact">
                View All Service Areas
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 blizzard-surface-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Brands We Work With
            </h2>
            <p className="text-xl text-muted-foreground">
              We service major household appliance brands used across Los Angeles homes.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {majorBrands.map((brand) => (
              <Badge key={brand} variant="secondary" className="px-4 py-2 text-sm">
                {brand}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 blizzard-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions about our services
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link to="/faq">
                  View All FAQs
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-form" className="py-16 blizzard-surface-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Schedule Your Repair Today
              </h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll contact you to confirm your appointment — or call first for a free phone consultation.
              </p>
            </div>
            
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 text-primary-foreground" style={{ background: "linear-gradient(135deg, rgba(10,25,46,0.95) 0%, rgba(24,69,118,0.98) 58%, rgba(243,127,37,0.9) 100%)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Need Immediate Appliance Repair?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't wait—call now for a free phone consultation and same-day availability across Los Angeles when scheduling allows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a href="tel:818-571-4030" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Free Call 818-571-4030
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:blizzard-surface hover:text-primary px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a href="#booking-form">Book Online</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
