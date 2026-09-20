import React from 'react';
import { cn } from '../../utils/cn';

export interface ProcessStep {
  title: string;
  detail: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  tone?: 'light' | 'dark';
  className?: string;
}

/**
 * Numbered sequence. On desktop the steps sit along a single rule; on
 * mobile the rule turns vertical so the reading order stays obvious.
 */
export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({
  steps,
  tone = 'light',
  className,
}) => {
  const dark = tone === 'dark';

  return (
    <ol className={cn('relative grid gap-0 md:grid-cols-4', className)}>
      {steps.map((step, index) => (
        <li
          key={step.title}
          className={cn(
            'relative pb-10 pl-10 last:pb-0 md:pb-0 md:pl-0 md:pr-8 md:pt-12'
          )}
        >
          {/* Connector: vertical on mobile, horizontal on desktop. */}
          <span
            aria-hidden
            className={cn(
              'absolute left-[13px] top-7 h-full w-px md:left-0 md:top-[13px] md:h-px md:w-full',
              index === steps.length - 1 && 'hidden md:block md:w-8',
              dark ? 'bg-navy-line' : 'bg-cream-300'
            )}
          />
          <span
            aria-hidden
            className={cn(
              'absolute left-0 top-0 flex h-7 w-7 items-center justify-center font-mono text-[11px] md:left-0',
              dark ? 'bg-navy text-bronze-light' : 'bg-cream-50 text-bronze'
            )}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <h3
            className={cn(
              'font-display text-[17px] font-semibold leading-snug',
              dark ? 'text-cream' : 'text-navy'
            )}
          >
            {step.title}
          </h3>
          <p
            className={cn(
              'mt-2.5 max-w-xs text-[14.5px] leading-relaxed',
              dark ? 'text-cream-300/70' : 'text-ink-soft'
            )}
          >
            {step.detail}
          </p>
        </li>
      ))}
    </ol>
  );
};
