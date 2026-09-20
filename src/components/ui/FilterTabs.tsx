import React from 'react';
import { cn } from '../../utils/cn';

interface FilterTabsProps {
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  /** Optional result counts keyed by option. */
  counts?: Record<string, number>;
  tone?: 'light' | 'dark';
  label?: string;
  className?: string;
}

/**
 * Horizontal filter set. On narrow screens it becomes an edge-to-edge
 * scroller so the tabs never wrap into a cramped block.
 */
export const FilterTabs: React.FC<FilterTabsProps> = ({
  options,
  value,
  onChange,
  counts,
  tone = 'light',
  label = 'Filter',
  className,
}) => {
  const dark = tone === 'dark';

  return (
    <div
      role="tablist"
      aria-label={label}
      className={cn(
        'rail -mx-5 gap-2 px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0',
        className
      )}
    >
      {options.map((option) => {
        const active = option === value;
        const count = counts?.[option];
        return (
          <button
            key={option}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(option)}
            className={cn(
              'tap inline-flex shrink-0 items-center gap-2 rounded-sm border px-4 text-[13px] font-medium',
              'transition-colors duration-200 ease-engineered',
              active
                ? dark
                  ? 'border-moss bg-moss text-white'
                  : 'border-navy bg-navy text-cream'
                : dark
                  ? 'border-navy-line bg-transparent text-cream-300/80 hover:border-cream-300/50 hover:text-cream'
                  : 'border-cream-300 bg-white text-ink-soft hover:border-navy hover:text-navy'
            )}
          >
            <span>{option}</span>
            {typeof count === 'number' && (
              <span
                className={cn(
                  'font-mono text-[11px]',
                  active ? 'opacity-70' : 'opacity-55'
                )}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
