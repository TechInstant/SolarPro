import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  tone?: 'light' | 'dark';
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  tone = 'dark',
  className,
}) => {
  const dark = tone === 'dark';

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol
        className={cn(
          'flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em]',
          dark ? 'text-cream-300/55' : 'text-ink-muted'
        )}
      >
        <li>
          <Link to="/" className={cn('transition-colors', dark ? 'hover:text-cream' : 'hover:text-navy')}>
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-x-2">
            <span aria-hidden className={dark ? 'text-cream-300/30' : 'text-cream-300'}>
              /
            </span>
            {item.path ? (
              <Link
                to={item.path}
                className={cn('transition-colors', dark ? 'hover:text-cream' : 'hover:text-navy')}
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className={cn('max-w-[62vw] truncate sm:max-w-xs', dark ? 'text-bronze-light' : 'text-bronze')}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
