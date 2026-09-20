import React from 'react';
import { cn } from '../../utils/cn';

interface SectionHeaderProps {
  /** Small technical label above the heading. */
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  /** Optional right-hand action, e.g. a "View all" link (desktop only). */
  action?: React.ReactNode;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
  className?: string;
  as?: 'h2' | 'h3';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  action,
  tone = 'light',
  align = 'left',
  className,
  as: Heading = 'h2',
}) => {
  const dark = tone === 'dark';

  return (
    <div
      className={cn(
        'flex flex-col gap-6 md:flex-row md:items-end md:justify-between',
        align === 'center' && 'md:flex-col md:items-center',
        className
      )}
    >
      <div
        className={cn(
          dark ? 'rule-tick-dark' : 'rule-tick',
          'max-w-2xl',
          align === 'center' && 'text-center md:mx-auto'
        )}
      >
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <Heading
          className={cn(
            'text-display-sm sm:text-display-md font-semibold',
            dark ? 'text-cream' : 'text-navy'
          )}
        >
          {title}
        </Heading>
        {description && (
          <p
            className={cn(
              'mt-4 text-[15px] leading-relaxed sm:text-base',
              dark ? 'text-cream-300/85' : 'text-ink-soft'
            )}
          >
            {description}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};
