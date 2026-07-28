import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, ChevronRight, CheckCircle } from 'lucide-react';

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

const Faq = () => {
  return (
    <div className="min-h-screen">
      <section className="blizzard-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-readable-title font-display text-4xl font-bold md:text-5xl mb-6">
              Appliance Repair FAQs
            </h1>
            <p className="hero-readable-text text-xl mb-8 text-white/95">
              Quick answers about scheduling, diagnostics, pricing, and our free phone consultation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 blizzard-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <Card key={faq.question} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-primary-foreground" style={{ background: 'linear-gradient(135deg, rgba(10,25,46,0.95) 0%, rgba(24,69,118,0.98) 58%, rgba(243,127,37,0.9) 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <CheckCircle className="mx-auto mb-4 h-12 w-12 text-white" />
            <h2 className="font-display text-3xl font-bold md:text-4xl mb-4">
              Still have questions?
            </h2>
            <p className="mb-8 text-xl opacity-90">
              Call for a free phone consultation or send your request online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold" asChild>
                <a href="tel:818-571-4030" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Free Call 818-571-4030
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:blizzard-surface hover:text-primary px-8 py-4 text-lg font-semibold" asChild>
                <Link to="/contact">
                  Book Online
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
