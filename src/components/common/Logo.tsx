import React from 'react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../../config/company';
import { cn } from '../../utils/cn';

interface LogoProps {
  tone?: 'light' | 'dark';
  /** Renders as plain markup instead of a link (used inside the footer). */
  asLink?: boolean;
  className?: string;
}

/**
 * Brand mark — sun over a solar roofline. This is the same artwork as
 * `public/favicon.svg`; change both together when rebranding.
 */
const Mark: React.FC<{ tone: 'light' | 'dark' }> = ({ tone }) => (
  <svg
    viewBox="0 0 32 32"
    className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
    role="presentation"
    aria-hidden="true"
  >
    <rect width="32" height="32" rx="3" fill={tone === 'dark' ? '#102A38' : '#0B1F2A'} />
    <circle cx="16" cy="13" r="5" fill="#EAB308" />
    <path
      d="M16 2.5V5.5M5.8 13H8.4M23.6 13h2.6M8.4 5.4l1.9 1.9M23.6 5.4l-1.9 1.9"
      stroke="#EAB308"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M5 27l3.4-9h15.2L27 27H5z" fill="#3F8F5B" />
    <path
      d="M12.4 18l-2.1 9M19.6 18l2.1 9M7.3 22.5h17.4"
      stroke={tone === 'dark' ? '#102A38' : '#0B1F2A'}
      strokeWidth="1.3"
    />
  </svg>
);

export const Logo: React.FC<LogoProps> = ({ tone = 'dark', asLink = true, className }) => {
  const dark = tone === 'dark';

  const content = (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <Mark tone={tone} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-[18px] font-bold tracking-[0.04em] sm:text-[20px]',
            dark ? 'text-cream' : 'text-navy'
          )}
        >
          {companyConfig.shortName}
        </span>
        {/* Pillars sit under the wordmark from tablet up; phones keep the header uncluttered. */}
        <span
          className={cn(
            'mt-1 hidden font-mono text-[9px] uppercase tracking-[0.16em] sm:block',
            dark ? 'text-moss-bright/80' : 'text-moss-dark'
          )}
        >
          {companyConfig.pillars.slice(0, 3).join(' · ')}
        </span>
      </span>
    </span>
  );

  if (!asLink) return content;

  return (
    <Link to="/" aria-label={`${companyConfig.name} — home`} className="shrink-0">
      {content}
    </Link>
  );
};
