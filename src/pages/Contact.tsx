import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BookingForm from '@/components/BookingForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '818-571-4030',
      subtitle: 'Available for emergency repairs',
      link: 'tel:818-571-4030'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'allsetappliance.business@gmail.com',
      subtitle: 'For quotes and questions',
      link: 'mailto:allsetappliance.business@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Service Areas',
      details: 'Greater Los Angeles',
      subtitle: 'Marina del Rey to Long Beach',
      link: '/areas'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: '8:00 AM - 8:00 PM',
      subtitle: 'Monday through Sunday',
      link: null
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Contact AllSet Appliance
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Ready to schedule your repair? Get in touch with our friendly team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              const content = (
                <Card key={index} className="card-hover text-center h-full">
                  <CardHeader>
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-foreground mb-1">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                  </CardContent>
                </Card>
              );

              if (info.link && info.link.startsWith('/')) {
                return (
                  <a key={index} href={info.link} className="block">
                    {content}
                  </a>
                );
              } else if (info.link) {
                return (
                  <a key={index} href={info.link} className="block">
                    {content}
                  </a>
                );
              }

              return content;
            })}
          </div>

          {/* Emergency Notice */}
          <div className="max-w-3xl mx-auto mb-16">
            <Card className="border-primary/20 bg-orange-light/50">
              <CardContent className="p-6 text-center">
                <h3 className="font-display font-semibold text-xl mb-2 text-primary">
                  Emergency Appliance Repair
                </h3>
                <p className="text-muted-foreground mb-4">
                  Appliance emergency? Don't wait! We offer same-day service for urgent repairs 
                  across Los Angeles. Call us now and we'll dispatch a technician to your location.
                </p>
                <a 
                  href="tel:818-571-4030"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  Call 818-571-4030 Now
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Schedule Your Repair
              </h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll contact you within 1 hour to confirm your appointment
              </p>
            </div>
            
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Service Areas Quick Reference */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl mb-6">
              We Serve These Areas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-sm">
              {[
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
              ].map((area) => (
                <div key={area} className="py-2 px-3 bg-secondary/50 rounded-lg text-center">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;