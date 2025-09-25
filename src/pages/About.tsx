import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Award, 
  Users, 
  CheckCircle, 
  Phone,
  Clock,
  ThumbsUp,
  Star,
  Wrench
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const credentials = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed appliance repair business with comprehensive insurance coverage for your protection.'
    },
    {
      icon: Award,
      title: 'Certified Technicians',
      description: 'Our technicians are factory-trained and certified to work on all major appliance brands.'
    },
    {
      icon: Users,
      title: 'Bilingual Support',
      description: 'We provide service in both English and Russian to better serve our diverse LA community.'
    }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: 'Honest Pricing',
      description: 'Upfront, transparent pricing with no hidden fees. You know the cost before we start.'
    },
    {
      icon: Clock,
      title: 'Same-Day Service',
      description: 'We understand appliance emergencies can\'t wait. Same-day appointments available.'
    },
    {
      icon: ThumbsUp,
      title: 'Quality Guarantee',
      description: 'All our work is backed by a comprehensive warranty on both parts and labor.'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Happy Customers' },
    { number: '5+', label: 'Years Experience' },
    { number: '10', label: 'Service Areas' },
    { number: '4.9', label: 'Average Rating' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-6">
              About AllSet Appliance
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Your trusted local appliance repair experts serving Los Angeles with 
              professional, reliable, and affordable service since 2019.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    AllSet Appliance was founded with a simple mission: to provide fast, 
                    reliable, and honest appliance repair services to families and businesses 
                    throughout Los Angeles.
                  </p>
                  <p>
                    As a locally-owned business, we understand the frustration of dealing 
                    with broken appliances. That's why we've built our reputation on same-day 
                    service, upfront pricing, and expert repairs that last.
                  </p>
                  <p>
                    Our team of certified technicians has the experience and tools to diagnose 
                    and repair all major appliance brands quickly and efficiently. We take 
                    pride in our work and stand behind every repair with our comprehensive warranty.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <Wrench className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-xl">Expert Technicians</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Factory-trained professionals with years of experience repairing 
                      all types of home appliances.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Star className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-xl">Customer First</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We prioritize your satisfaction with transparent communication, 
                      fair pricing, and reliable repairs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Why Choose AllSet Appliance?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're more than just a repair service—we're your trusted partner in keeping 
              your home appliances running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {credentials.map((credential, index) => {
              const IconComponent = credential.icon;
              return (
                <Card key={index} className="card-hover text-center">
                  <CardHeader>
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{credential.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{credential.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Our Commitment to You
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do, ensuring you receive the best 
              appliance repair experience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <IconComponent className="h-10 w-10 text-primary mb-4" />
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Warranty Policy */}
      <section className="py-16 bg-orange-light/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display font-bold text-3xl mb-4">
                Our Warranty Policy
              </h2>
              <p className="text-xl text-muted-foreground">
                We stand behind our work with comprehensive warranty coverage
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-4 flex items-center gap-2">
                      <CheckCircle className="h-6 w-6 text-primary" />
                      Parts Warranty
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      All replacement parts are covered by manufacturer warranty, 
                      typically ranging from 90 days to 1 year depending on the part.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-4 flex items-center gap-2">
                      <CheckCircle className="h-6 w-6 text-primary" />
                      Labor Warranty
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Our workmanship is guaranteed for 90 days. If the same issue 
                      occurs due to our repair, we'll fix it at no additional charge.
                    </p>
                  </div>
                </div>

                <div className="border-t pt-6 mt-6 text-center">
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    Licensed & Insured Business
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    Your protection and satisfaction are our top priorities
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Ready to Experience the AllSet Difference?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers who trust AllSet Appliance 
              for all their repair needs.
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
                className="border-2 border-white text-white hover:bg-white hover:text-brand-blue font-semibold"
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
    </div>
  );
};

export default About;