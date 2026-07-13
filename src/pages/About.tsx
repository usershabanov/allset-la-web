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
      title: 'Licensed Service',
      description: 'Licensed local appliance repair service focused on clear communication and dependable work.'
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
      title: 'Careful Work',
      description: 'We focus on clear diagnostics, honest recommendations, and dependable repair work.'
    }
  ];

  const stats = [
    { number: '6', label: 'Current Service Areas' },
    { number: '8+', label: 'Major Brands' },
    { number: '7', label: 'Days Available' },
    { number: '1', label: 'Local Business Focus' }
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
              Licensed local appliance repair for Los Angeles and the Valley with a focus on clear service and practical scheduling.
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
                    with broken appliances. That's why we focus on same-day availability when scheduling allows,
                    upfront pricing, and practical service.
                  </p>
                  <p>
                    We work on major household appliance brands and focus on diagnosing problems clearly,
                    explaining the next step, and helping homeowners get back to normal as quickly as possible.
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

      {/* Service Approach */}
      <section className="py-16 bg-orange-light/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display font-bold text-3xl mb-4">
                How We Handle Service Requests
              </h2>
              <p className="text-xl text-muted-foreground">
                Clear communication and practical scheduling from first contact to completed repair
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-4 flex items-center gap-2">
                      <CheckCircle className="h-6 w-6 text-primary" />
                      Clear Diagnosis
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      We start by understanding the problem, checking the appliance, and explaining the next step in plain language.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-4 flex items-center gap-2">
                      <CheckCircle className="h-6 w-6 text-primary" />
                      Practical Scheduling
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Same-day availability may be possible when scheduling allows, and we keep the contact process simple for homeowners.
                    </p>
                  </div>
                </div>

                <div className="border-t pt-6 mt-6 text-center">
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    Licensed Local Business
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    Service focused on Los Angeles and the nearby Valley areas you listed
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
              Contact AllSet Appliance for practical local service, straightforward scheduling, and appliance help across Los Angeles and the Valley.
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
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
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