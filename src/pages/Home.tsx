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
      description: 'From drain issues to no-spin, we fix it right the first time and back it with a solid warranty.',
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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Santa Monica',
      rating: 5,
      text: 'My refrigerator stopped cooling on a Saturday morning. AllSet had a technician at my house the same day! Professional, honest pricing, and fixed it perfectly.'
    },
    {
      name: 'Mike Chen',
      location: 'Beverly Hills',
      rating: 5,
      text: 'Washer was leaking everywhere. They diagnosed the issue quickly, explained everything clearly, and the repair has held up perfectly for 6 months now.'
    },
    {
      name: 'Elena Rodriguez',
      location: 'Culver City',
      rating: 5,
      text: 'Excellent service! Dishwasher wasn\'t draining and they had it working like new in under an hour. Fair pricing and very professional technician.'
    }
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
      question: 'Do you provide warranties on repairs?',
      answer: 'Absolutely! We provide warranties on both parts and labor to ensure your peace of mind.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-blue via-accent to-brand-blue text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
              Fast, Reliable Appliance Repair in Los Angeles
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
              Same-day availability, upfront pricing, and a warranty on every repair.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg"
                asChild
              >
                <a href="#booking-form">Book Now</a>
              </Button>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg"
                asChild
              >
                <a href="tel:818-571-4030" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call 818-571-4030
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Warranty Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <Shield className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-display font-semibold text-xl">Licensed & Insured</h3>
              <p className="text-muted-foreground">
                Fully licensed and insured for your protection and peace of mind.
              </p>
            </div>
            <div className="space-y-4">
              <Users className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-display font-semibold text-xl">1000+ Happy Customers</h3>
              <p className="text-muted-foreground">
                Trusted by families across Los Angeles with excellent reviews.
              </p>
            </div>
            <div className="space-y-4">
              <DollarSign className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-display font-semibold text-xl">Upfront Pricing</h3>
              <p className="text-muted-foreground">
                No surprises—transparent pricing before we start any work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-secondary/30">
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

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Serving Greater Los Angeles
            </h2>
            <p className="text-xl text-muted-foreground">
              Fast, reliable appliance repair across LA's westside communities
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
              <Link to="/areas">
                View All Service Areas
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real reviews from satisfied customers across Los Angeles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-white">
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
      <section id="booking-form" className="py-16 bg-orange-light/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Schedule Your Repair Today
              </h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll contact you to confirm your appointment
              </p>
            </div>
            
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Need Immediate Appliance Repair?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't wait—call now for same-day service across Los Angeles. 
              Our expert technicians are standing by to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a href="tel:818-571-4030" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call 818-571-4030
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
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