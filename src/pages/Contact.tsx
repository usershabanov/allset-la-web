import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BookingForm from '@/components/BookingForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '818-571-4030',
      subtitle: 'Free phone consultation and urgent scheduling',
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
      details: 'Los Angeles, the Valley & the Westside',
      subtitle: 'Bell Canyon, Burbank, Calabasas, Marina del Rey, Venice, Santa Monica, Westwood, Culver City, Pacific Palisades',
      link: '/contact#service-areas'
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
      <section className="blizzard-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-readable-title font-display text-4xl font-bold md:text-5xl mb-6">
              Contact AllSet Appliance
            </h1>
            <p className="hero-readable-text text-xl mb-8 text-white/95">
              Ready to schedule your repair? Start with a free phone consultation or send your request online.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 blizzard-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 mb-16 md:grid-cols-2 lg:grid-cols-4">
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

          <div className="max-w-3xl mx-auto mb-16">
            <Card className="border-primary/20 blizzard-surface-alt">
              <CardContent className="p-6 text-center">
                <h3 className="font-display font-semibold text-xl mb-2 text-primary">
                  Emergency Appliance Repair
                </h3>
                <p className="text-muted-foreground mb-4">
                  Appliance emergency? Don't wait. Call now for a free phone consultation and fast scheduling
                  across Los Angeles service areas.
                </p>
                <a
                  href="tel:818-571-4030"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  Free Call: 818-571-4030
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 blizzard-surface-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Schedule Your Repair
              </h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll contact you within 1 hour to confirm your appointment,
                or call now for a free phone consultation first.
              </p>
            </div>

            <BookingForm />
          </div>
        </div>
      </section>

      <section id="service-areas" className="py-16 blizzard-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl mb-6">
              We Serve These Areas
            </h2>
            <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-3 lg:grid-cols-5">
              {[
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
