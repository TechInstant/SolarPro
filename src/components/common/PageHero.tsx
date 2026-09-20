import React from 'react';
import { Breadcrumbs, type BreadcrumbItem } from './Breadcrumbs';
import { cn } from '../../utils/cn';

interface PageHeroProps {
  /** Technical label above the page title. */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbItems?: BreadcrumbItem[];
  /** Optional background photograph, shown at low opacity behind the type. */
  bgImage?: string;
  /** Rendered under the copy — stats, tags or actions. */
  children?: React.ReactNode;
  className?: string;
}

/**
 * Standard interior page header. Deliberately typographic: the photograph
 * sits well back so the heading stays the loudest thing on the screen.
 */
export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  breadcrumbItems,
  bgImage,
  children,
  className,
}) => (
  <section
    className={cn(
      'relative overflow-hidden border-b border-navy-line bg-navy',
      'pt-[104px] sm:pt-[116px] lg:pt-[148px]',
      'pb-12 sm:pb-14 lg:pb-16',
      className
    )}
  >
    {bgImage && (
      <div className="absolute inset-0" aria-hidden>
        <img src={bgImage} alt="" className="h-full w-full object-cover opacity-[0.16]" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/92 to-navy/70" />
      </div>
    )}
    <div className="absolute inset-0 blueprint opacity-60" aria-hidden />

    <div className="shell relative">
      {breadcrumbItems && <Breadcrumbs items={breadcrumbItems} className="mb-7" />}

      <div className="max-w-3xl">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="text-display-sm font-semibold text-cream sm:text-display-md lg:text-display-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-cream-300/75 sm:text-base">
            {subtitle}
          </p>
        )}
      </div>

      {children && <div className="mt-8">{children}</div>}
    </div>
  </section>
);
