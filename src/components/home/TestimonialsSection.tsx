import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { TestimonialCard } from '../cards/TestimonialCard';
import { testimonialsData } from '../../data/testimonials';
import { useReveal } from '../../hooks/useReveal';

export const TestimonialsSection: React.FC = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="border-t border-cream-300 bg-cream-100 py-16 sm:py-20 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="Client feedback"
          title="What people say once the generator goes quiet"
        />

        {/* Scrolls on mobile so each quote stays readable rather than shrinking. */}
        <div ref={ref} className="reveal rail -mx-5 mt-10 gap-4 px-5 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              className="w-[83vw] shrink-0 sm:w-auto"
            />
          ))}
        </div>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
          Example feedback — replace with your own client quotes in src/data/testimonials.ts
        </p>
      </div>
    </section>
  );
};
