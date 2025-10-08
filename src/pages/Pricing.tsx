import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  Phone, 
  Clock, 
  DollarSign,
  Shield,
  Wrench,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const pricingTiers = [
    {
      name: 'Service Call & Diagnosis',
      price: '$89',
      description: 'Professional diagnosis of your appliance issue',
      features: [
        'Comprehensive appliance inspection',
        'Problem diagnosis & explanation', 
        'Upfront repair quote',
        'No obligation to repair',
        'Applied toward repair if approved'
      ],
      note: 'Fee is waived when repair is completed'
    },
    {
      name: 'Labor Rates',
      price: '$120-180',
      description: 'Per hour for repair work',
      features: [
        'Factory-trained technician',
        'Professional repair service',
        '90-day labor warranty',
        'Same-day service available',
        'Evening & weekend availability'
      ],
      note: 'Most repairs completed in 1-2 hours'
    },
    {
      name: 'Parts',
      price: 'Market Rate',
      description: 'Genuine replacement parts',
      features: [
        'OEM & compatible parts available',
        'Manufacturer warranty included',
        'Competitive pricing',
        'Local parts sourcing when possible',
        'Transparent parts pricing'
      ],
      note: 'Parts quoted separately based on your appliance'
    }
  ];

  const commonRepairs = [
    { service: 'Refrigerator Not Cooling', estimate: '$150 - $350' },
    { service: 'Washer Not Draining', estimate: '$120 - $250' },
    { service: 'Dryer No Heat', estimate: '$130 - $280' },
    { service: 'Dishwasher Not Cleaning', estimate: '$110 - $200' },
    { service: 'Oven Not Heating', estimate: '$140 - $320' },
    { service: 'Microwave Not Working', estimate: '$90 - $180' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Transparent, Honest Pricing
            </h1>
            <p className="text-xl mb-8 text-white/90">
              No hidden fees, no surprises. Know exactly what you're paying before we start any work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                asChild
              >
                <Link to="/contact">Get Your Quote</Link>
              </Button>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href="tel:818-571-4030" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call for Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Our Pricing Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple, transparent pricing with no hidden costs. You'll know exactly what to expect.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`card-hover ${index === 1 ? 'border-primary shadow-lg' : ''}`}>
                {index === 1 && (
                  <div className="bg-primary text-primary-foreground text-center py-2 rounded-t-lg">
                    <Badge variant="secondary" className="bg-white text-primary">
                      Most Common
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">{tier.price}</div>
                  <p className="text-muted-foreground">{tier.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {tier.note && (
                    <div className="mt-4 p-3 bg-blue-light rounded-lg">
                      <p className="text-sm text-accent font-medium">{tier.note}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Promise */}
          <Card className="border-primary/20 bg-orange-light/50">
            <CardContent className="p-8 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-display font-semibold text-2xl mb-4">Our Pricing Promise</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The diagnostic fee is always applied toward your repair when you approve the work. 
                You'll never pay extra for choosing to move forward with the repair.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Common Repair Estimates */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Common Repair Estimates
              </h2>
              <p className="text-xl text-muted-foreground">
                Typical price ranges for popular appliance repairs (including labor & common parts)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonRepairs.map((repair, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{repair.service}</h3>
                        <p className="text-sm text-muted-foreground">Typical repair range</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-primary">{repair.estimate}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Important Note</h3>
                    <p className="text-muted-foreground">
                      These are estimated ranges based on common issues. Your actual repair cost may vary 
                      depending on the specific problem, required parts, and appliance model. We provide 
                      exact quotes after diagnosis.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Our Pricing is Fair */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl mb-4">
                Why Our Pricing is Fair
              </h2>
              <p className="text-xl text-muted-foreground">
                Quality service at competitive rates with no surprises
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <DollarSign className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-display font-semibold text-xl">No Hidden Fees</h3>
                <p className="text-muted-foreground">
                  What we quote is what you pay. No surprise charges or hidden costs.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <Wrench className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-display font-semibold text-xl">Quality Parts</h3>
                <p className="text-muted-foreground">
                  We use genuine OEM parts when available, ensuring long-lasting repairs.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <Clock className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-display font-semibold text-xl">Efficient Service</h3>
                <p className="text-muted-foreground">
                  Our experienced technicians complete most repairs quickly and correctly the first time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Ready for Honest, Upfront Pricing?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get your appliance diagnosed and repaired with transparent pricing and no surprises. 
              Schedule your service call today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
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
                  Call for Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;