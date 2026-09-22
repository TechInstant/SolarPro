import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  Cctv,
  Cpu,
  DraftingCompass,
  Fence,
  Fingerprint,
  PlugZap,
  ShieldAlert,
  ShieldCheck,
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

const serviceIcons: Record<string, LucideIcon> = {
  SunMedium,
  Cpu,
  BatteryCharging,
  DraftingCompass,
  PlugZap,
  Wrench,
  ShieldAlert,
  Building2,
  Cctv,
  Fence,
  ShieldCheck,
  Fingerprint,
};

function ServiceIcon({ name }: { name: string }) {
  const Icon = serviceIcons[name] ?? SunMedium;
  return <Icon className="h-6 w-6 text-moss-bright" strokeWidth={1.75} aria-hidden />;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, className }) => (
  <article
    className={cn(
      'group relative flex h-full flex-col justify-between rounded-xl border border-cream-300/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-moss/40',
      className
    )}
  >
    <div>
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy shadow-inner">
        <ServiceIcon name={service.iconName} />
      </div>

      <h3 className="mt-5 text-[16.5px] font-bold leading-snug text-navy group-hover:text-moss-dark transition-colors">
        {service.title}
      </h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
        {service.shortDescription}
      </p>
    </div>

    <div className="mt-5 pt-2">
      <Link
        to={`/services/${service.slug}`}
        className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-navy transition-colors hover:text-moss-dark group-hover:text-moss-dark"
      >
        Learn More
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 ease-engineered group-hover:translate-x-1"
          strokeWidth={2}
        />
      </Link>
    </div>
  </article>
);

