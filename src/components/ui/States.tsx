import React from 'react';
import { SearchX, LoaderCircle } from 'lucide-react';
import { Button } from './Button';
import { cn } from '../../utils/cn';

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

/** Shown when a filter or search returns nothing. Always offers a way out. */
export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  actionLabel,
  onAction,
  className,
}) => (
  <div
    className={cn(
      'flex flex-col items-center border border-dashed border-cream-300 bg-white px-6 py-16 text-center',
      className
    )}
  >
    <SearchX className="h-7 w-7 text-ink-muted" strokeWidth={1.5} aria-hidden />
    <h3 className="mt-4 font-display text-lg font-semibold text-navy">{title}</h3>
    <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">{description}</p>
    {actionLabel && onAction && (
      <Button variant="outline" size="sm" className="mt-6" onClick={onAction}>
        {actionLabel}
      </Button>
    )}
  </div>
);

interface LoadingStateProps {
  label?: string;
  className?: string;
}

/** Used for suspense boundaries on lazily loaded routes. */
export const LoadingState: React.FC<LoadingStateProps> = ({
  label = 'Loading',
  className,
}) => (
  <div
    role="status"
    aria-live="polite"
    className={cn('flex min-h-[60vh] flex-col items-center justify-center gap-3', className)}
  >
    <LoaderCircle className="h-6 w-6 animate-spin text-moss" strokeWidth={1.5} aria-hidden />
    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
      {label}
    </span>
  </div>
);
