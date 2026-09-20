import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  Cpu,
  DraftingCompass,
  PlugZap,
  ShieldAlert,
  Sun,
  SunMedium,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import type { Service } from '../../types';
import { cn } from '../../utils/cn';

interface ServiceCardProps {
  service: Service;
  index: number;
  className?: string;
}

/**
 * Icons are mapped explicitly rather than looked up off the whole library —
 * a wildcard import pulls all six thousand icons into the bundle.
 */
const serviceIcons: Record<string, LucideIcon> = {
  SunMedium,
  Cpu,
  BatteryCharging,
  DraftingCompass,
  PlugZap,
  Wrench,
  ShieldAlert,
  Building2,
};

function ServiceIcon({ name }: { name: string }) {
  const Icon = serviceIcons[name] ?? Sun;
  return <Icon className="h-6 w-6" strokeWidth={1.4} aria-hidden />;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, className }) => (
  <article
    className={cn(
      'group relative flex h-full flex-col border border-cream-300 bg-white p-6 sm:p-7',
      'transition-colors duration-300 ease-engineered hover:border-navy/35',
      className
    )}
  >
    {/* Bronze rule that draws in on hover — the only motion on the card. */}
    <span
      aria-hidden
      className="absolute inset-x-0 top-0 h-[3px] w-0 bg-bronze transition-[width] duration-500 ease-engineered group-hover:w-full"
    />

    <div className="flex items-start justify-between">
      <span className="text-moss-dark">
        <ServiceIcon name={service.iconName} />
      </span>
      <span className="font-mono text-[11px] tracking-[0.12em] text-cream-300">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>

    <h3 className="mt-6 font-display text-[19px] font-semibold leading-snug text-navy">
      {service.title}
    </h3>
    <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-soft">
      {service.shortDescription}
    </p>

    <Link
      to={`/services/${service.slug}`}
      className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-navy transition-colors hover:text-moss-dark"
    >
      Learn more
      <ArrowRight
        className="h-4 w-4 transition-transform duration-200 ease-engineered group-hover:translate-x-1"
        strokeWidth={1.75}
      />
      <span className="sr-only"> about {service.title}</span>
    </Link>
  </article>
);
