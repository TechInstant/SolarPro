import React from 'react';
import { cn } from '../../utils/cn';

export interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  items: Stat[];
  tone?: 'light' | 'dark';
  columns?: 2 | 3 | 4;
  className?: string;
}

/** Figure-and-label row used on the home page, about page and case studies. */
export const Stats: React.FC<StatsProps> = ({
  items,
  tone = 'light',
  columns = 4,
  className,
}) => {
  const dark = tone === 'dark';
  // Every layout is two columns on mobile, so an odd count would leave a
  // hole in the grid. The last figure stretches across instead.
  const oddOnMobile = items.length % 2 === 1;

  return (
    <dl
      className={cn(
        'grid gap-px',
        dark ? 'bg-navy-line' : 'bg-cream-300',
        columns === 2 && 'grid-cols-2',
        columns === 3 && 'grid-cols-2 sm:grid-cols-3',
        columns === 4 && 'grid-cols-2 lg:grid-cols-4',
        oddOnMobile && columns === 3 && '[&>*:last-child]:col-span-2 sm:[&>*:last-child]:col-span-1',
        oddOnMobile && columns === 4 && '[&>*:last-child]:col-span-2 lg:[&>*:last-child]:col-span-1',
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className={cn('px-4 py-6 sm:px-6 sm:py-7', dark ? 'bg-navy' : 'bg-cream-50')}
        >
          <dt className="sr-only">{item.label}</dt>
          <dd>
            <span
              className={cn(
                'block font-display text-[26px] font-semibold leading-none tracking-tight sm:text-[32px]',
                dark ? 'text-cream' : 'text-navy'
              )}
            >
              {item.value}
            </span>
            <span
              className={cn(
                'mt-2.5 block font-mono text-[11px] uppercase leading-snug tracking-[0.12em]',
                dark ? 'text-cream-300/70' : 'text-ink-muted'
              )}
            >
              {item.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
};
