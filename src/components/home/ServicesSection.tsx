import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { ServiceCard } from '../cards/ServiceCard';
import { Button } from '../ui/Button';
import { servicesData } from '../../data/services';
import { useReveal } from '../../hooks/useReveal';

export const ServicesSection: React.FC = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="bg-cream-50 py-16 sm:py-20 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="What we do"
          title="Complete Solar Solutions"
          description="From consultation to installation and ongoing support, we provide end-to-end solar solutions for homes, businesses and institutions."
          action={
            <Button
              to="/services"
              variant="outline"
              size="sm"
              trailingIcon={<ArrowRight className="h-4 w-4" strokeWidth={1.75} />}
              className="hidden md:inline-flex"
            >
              All services
            </Button>
          }
        />

        <div
          ref={ref}
          className="reveal mt-10 grid gap-px bg-cream-300 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} className="border-0" />
          ))}
        </div>

        <Button
          to="/services"
          variant="outline"
          fullWidth
          className="mt-8 md:hidden"
          trailingIcon={<ArrowRight className="h-4 w-4" strokeWidth={1.75} />}
        >
          View all services
        </Button>
      </div>
    </section>
  );
};
