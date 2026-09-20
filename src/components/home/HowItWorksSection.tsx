import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { ProcessTimeline } from '../ui/ProcessTimeline';
import { Button } from '../ui/Button';
import { getWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';
import { useReveal } from '../../hooks/useReveal';

const steps = [
  {
    title: 'Tell us your power needs',
    detail:
      'A short conversation about what must stay on, where the property is and what you are spending now.',
  },
  {
    title: 'Get a system recommendation',
    detail:
      'We size the array, inverter and battery against your actual load, then send an itemised quote.',
  },
  {
    title: 'Installation & testing',
    detail:
      'Mounting, wiring, earthing and commissioning — finished with a documented load test you keep.',
  },
  {
    title: 'Ongoing support',
    detail:
      'Scheduled maintenance, monitoring help, and the same engineer on the other end of the phone.',
  },
];

export const HowItWorksSection: React.FC = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="bg-cream-50 py-16 sm:py-20 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="How it works"
          title="Four steps from first call to steady power"
          description="No surprises in the middle. You know what happens next at every stage."
          action={
            <Button
              href={getWhatsAppUrl(whatsappMessages.consultation)}
              variant="outline"
              size="sm"
              leadingIcon={<MessageCircle className="h-4 w-4" strokeWidth={1.75} />}
              className="hidden md:inline-flex"
            >
              Start step one
            </Button>
          }
        />

        <div ref={ref} className="reveal mt-12">
          <ProcessTimeline steps={steps} />
        </div>

        <Button
          to="/quote"
          fullWidth
          className="mt-10 md:hidden"
          trailingIcon={<ArrowRight className="h-4 w-4" strokeWidth={1.75} />}
        >
          Start with a quote
        </Button>
      </div>
    </section>
  );
};
