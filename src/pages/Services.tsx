import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Wrench, 
  Refrigerator, 
  WashingMachine, 
  Microwave,
  Phone,
  ChevronRight,
  CheckCircle,
  Clock,
  Zap,
  ChefHat
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Refrigerator,
      name: 'Refrigerator Repair',
      description: 'Not cooling, leaking, or noisy? We diagnose and repair all major brands quickly—so your food stays fresh.',
      slug: 'refrigerator',
      commonIssues: ['Not cooling properly', 'Water leaking', 'Strange noises', 'Ice maker problems', 'Door seal issues']
    },
    {
      icon: WashingMachine,
      name: 'Washer Repair', 
      description: 'From drain issues to no-spin, we fix it right the first time and back it with a solid warranty.',
      slug: 'washer',
      commonIssues: ['Won\'t drain water', 'Not spinning', 'Excessive vibration', 'Won\'t start', 'Water leaks']
    },
    {
      icon: Zap,
      name: 'Dryer Repair',
      description: 'No heat, won\'t start, or taking too long? We\'ll get your dryer running efficiently again.',
      slug: 'dryer',
      commonIssues: ['No heat production', 'Takes too long to dry', 'Won\'t start', 'Overheating', 'Lint buildup']
    },
    {
      icon: Microwave,
      name: 'Dishwasher Repair',
      description: 'Not cleaning properly or won\'t drain? We service all dishwasher brands with upfront pricing.',
      slug: 'dishwasher',
      commonIssues: ['Poor cleaning performance', 'Won\'t drain', 'Door won\'t latch', 'Strange odors', 'Noisy operation']
    },
    {
      icon: ChefHat,
      name: 'Oven/Range Repair',
      description: 'Temperature issues or burners not working? Professional oven and range repair services.',
      slug: 'oven',
      commonIssues: ['Uneven heating', 'Burners not working', 'Oven won\'t heat up', 'Temperature problems', 'Door issues']
    },
    {
      icon: Microwave,
      name: 'Microwave Repair',
      description: 'Not heating or display problems? Quick microwave repairs to get your kitchen back to normal.',
      slug: 'microwave',
      commonIssues: ['Not heating food', 'Display not working', 'Turntable problems', 'Door won\'t close', 'Strange sounds']
    },
    {
      icon: Wrench,
      name: 'Garbage Disposal Repair',
      description: 'Jammed, leaking, or making noise? Fast disposal repairs and replacements available.',
      slug: 'disposal',
      commonIssues: ['Jammed disposal', 'Leaking water', 'Strange grinding noises', 'Won\'t turn on', 'Bad odors']
    },
    {
      icon: Refrigerator,
      name: 'Freezer Repair',
      description: 'Temperature problems or ice buildup? We repair all freezer types including chest and upright.',
      slug: 'freezer',
      commonIssues: ['Not freezing', 'Ice buildup', 'Temperature fluctuations', 'Door seal problems', 'Compressor issues']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Professional Appliance Repair Services
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Expert technicians, same-day service, and transparent pricing for all major appliances
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                asChild
              >
                <Link to="/contact">Schedule Service</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-brand-blue"
                asChild
              >
                <a href="tel:818-571-4030" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call 818-571-4030
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              What We Repair
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our certified technicians are experts in diagnosing and repairing all major appliance brands. 
              We come equipped with common parts and provide upfront pricing.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4">
              <Clock className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-display font-semibold text-xl">Same-Day Service</h3>
              <p className="text-muted-foreground">
                Emergency repairs available with same-day appointments in most areas
              </p>
            </div>
            <div className="text-center space-y-4">
              <CheckCircle className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-display font-semibold text-xl">Warranty Included</h3>
              <p className="text-muted-foreground">
                All repairs backed by our comprehensive warranty on parts and labor
              </p>
            </div>
            <div className="text-center space-y-4">
              <Wrench className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-display font-semibold text-xl">Expert Technicians</h3>
              <p className="text-muted-foreground">
                Licensed, insured professionals with years of appliance repair experience
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.slug} className="card-hover h-full">
                  <CardHeader className="text-center">
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wide">
                        Common Issues We Fix:
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {service.commonIssues.slice(0, 3).map((issue, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button variant="outline" className="w-full" asChild>
                      <Link to={`/services/${service.slug}`}>
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

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Ready to Schedule Your Repair?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't let a broken appliance disrupt your day. Our expert technicians 
              are ready to diagnose and fix your appliance quickly and affordably.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                asChild
              >
                <Link to="/contact">Book Online</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold"
                asChild
              >
                <a href="tel:818-571-4030" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;