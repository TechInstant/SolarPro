import React from 'react';
import { Star } from 'lucide-react';
import type { Testimonial } from '../../types';
import { cn } from '../../utils/cn';

interface TestimonialCardProps {
  testimonial: Testimonial;
  tone?: 'light' | 'dark';
  className?: string;
}

/** Initials stand in for a photograph — no invented faces. */
function initials(name: string) {
  return name
    .replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.|Engr\.|Pastor)\s+/i, '')
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  tone = 'light',
  className,
}) => {
  const dark = tone === 'dark';

  return (
    <figure
      className={cn(
        'flex h-full flex-col border p-6 sm:p-7',
        dark ? 'border-navy-line bg-navy' : 'border-cream-300 bg-white',
        className
      )}
    >
      <div className="flex items-center gap-0.5" aria-label={`${testimonial.rating} out of 5`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-bronze text-bronze" strokeWidth={0} aria-hidden />
        ))}
      </div>

      <blockquote
        className={cn(
          'mt-5 flex-1 text-[15px] leading-relaxed',
          dark ? 'text-cream-300/85' : 'text-ink-soft'
        )}
      >
        {testimonial.comment}
      </blockquote>

      <figcaption
        className={cn(
          'mt-6 flex items-center gap-3.5 border-t pt-5',
          dark ? 'border-navy-line' : 'border-cream-200'
        )}
      >
        <span
          className={cn(
            'flex h-10 w-10 shrink-0 items-center justify-center font-mono text-[12px] tracking-[0.08em]',
            dark ? 'bg-navy-700 text-cream-300' : 'bg-cream-100 text-navy'
          )}
          aria-hidden
        >
          {initials(testimonial.name)}
        </span>
        <span className="min-w-0">
          <span
            className={cn(
              'block truncate text-[14.5px] font-medium',
              dark ? 'text-cream' : 'text-navy'
            )}
          >
            {testimonial.name}
          </span>
          <span
            className={cn(
              'mt-0.5 block truncate font-mono text-[11px] uppercase tracking-[0.1em]',
              dark ? 'text-cream-300/50' : 'text-ink-muted'
            )}
          >
            {testimonial.location} · {testimonial.systemInstalled}
          </span>
        </span>
      </figcaption>
    </figure>
  );
};
