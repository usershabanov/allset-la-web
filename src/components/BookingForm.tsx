import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const bookingSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name too long'),
  phone: z.string().trim().min(10, 'Valid phone number required'),
  email: z.union([z.literal(''), z.string().trim().email('Valid email required')]).optional(),
  applianceType: z.string().optional(),
  brand: z.string().optional(),
  preferredTime: z.string().optional(),
  problem: z.string().trim().min(10, 'Please describe the problem (minimum 10 characters)').max(1000, 'Description too long'),
  honeypot: z.string().max(0, 'Spam detected'),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const appliances = [
  'Refrigerator',
  'Freezer',
  'Washer',
  'Dryer',
  'Dishwasher',
  'Oven/Range',
  'Microwave',
  'Garbage Disposal',
  'Wine Cooler',
];

const timeSlots = [
  'ASAP',
  'Morning',
  'Afternoon',
  'Evening',
  'Flexible',
];

const inputClassName =
  'border-white/10 bg-slate-950/55 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:ring-offset-slate-950';

const BookingForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      applianceType: undefined,
      email: '',
      brand: '',
      preferredTime: 'Flexible',
      honeypot: '',
      problem: '',
      name: '',
      phone: '',
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setIsSubmitted(true);
      toast({
        title: 'Request Sent',
        description: "Your request was sent. We'll contact you shortly.",
      });
    } catch (error) {
      toast({
        title: 'Submission Failed',
        description: 'Please try again or call us directly.',
        variant: 'destructive',
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto rounded-2xl border border-white/10 bg-slate-950/70 p-8 text-center shadow-lg backdrop-blur-sm">
        <CheckCircle className="mx-auto mb-4 h-16 w-16 text-primary" />
        <h3 className="mb-2 text-xl font-display font-semibold">Thank You!</h3>
        <p className="mb-4 text-muted-foreground">
          Your request has been submitted. We'll call you from{' '}
          <span className="font-semibold text-primary">818-571-4030</span> shortly.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            form.reset({
              applianceType: undefined,
              email: '',
              brand: '',
              preferredTime: 'Flexible',
              honeypot: '',
              problem: '',
              name: '',
              phone: '',
            });
          }}
          variant="outline"
          className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
        >
          Send Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-slate-950/70 p-6 shadow-lg backdrop-blur-sm md:p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <input
            type="text"
            {...form.register('honeypot')}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name *</FormLabel>
                  <FormControl>
                    <Input className={inputClassName} placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone *</FormLabel>
                  <FormControl>
                    <Input className={inputClassName} placeholder="(818) 555-0123" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="applianceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Appliance</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value || undefined}>
                    <FormControl>
                      <SelectTrigger className={inputClassName}>
                        <SelectValue placeholder="Optional — choose appliance" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="border-white/10 bg-slate-950/95 text-foreground">
                      {appliances.map((appliance) => (
                        <SelectItem
                          key={appliance}
                          value={appliance}
                          className="focus:bg-blue-light focus:text-foreground"
                        >
                          {appliance}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <FormControl>
                    <Input className={inputClassName} placeholder="Samsung, LG, Whirlpool..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input className={inputClassName} placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preferredTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred time</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value || 'Flexible'}>
                    <FormControl>
                      <SelectTrigger className={inputClassName}>
                        <SelectValue placeholder="Choose a time" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="border-white/10 bg-slate-950/95 text-foreground">
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot} className="focus:bg-blue-light focus:text-foreground">
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="problem"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is wrong? *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Briefly describe the problem"
                    className={`${inputClassName} min-h-[140px]`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? 'Sending...' : 'Send Request'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;
