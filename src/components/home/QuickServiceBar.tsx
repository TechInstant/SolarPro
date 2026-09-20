import React from 'react';
import { Link } from 'react-router-dom';
import { SunMedium, Package, Wrench, DraftingCompass, ArrowRight } from 'lucide-react';

const items = [
  {
    label: 'Installation',
    detail: 'Panels, inverters and storage',
    to: '/services/solar-panel-installation',
    Icon: SunMedium,
  },
  {
    label: 'Equipment Sales',
    detail: 'Genuine solar hardware',
    to: '/products',
    Icon: Package,
  },
  {
    label: 'Maintenance',
    detail: 'Servicing and repairs',
    to: '/services/solar-system-maintenance',
    Icon: Wrench,
  },
  {
    label: 'Consultation',
    detail: 'Load audits and design',
    to: '/services/solar-system-design',
    Icon: DraftingCompass,
  },
];

export const QuickServiceBar: React.FC = () => (
  <section id="quick-service-bar" aria-label="What we do" className="border-b border-cream-300 bg-cream-100">
    <div className="shell">
      <ul className="grid grid-cols-2 gap-px bg-cream-300 lg:grid-cols-4">
        {items.map(({ label, detail, to, Icon }) => (
          <li key={label} className="bg-cream-100">
            <Link
              to={to}
              className="group flex h-full flex-col gap-3 px-4 py-6 transition-colors hover:bg-cream-50 sm:flex-row sm:items-center sm:gap-4 sm:px-6 sm:py-7"
            >
              <Icon className="h-6 w-6 shrink-0 text-moss-dark" strokeWidth={1.4} aria-hidden />
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-medium text-navy">{label}</span>
                <span className="mt-0.5 block text-[13px] leading-snug text-ink-muted">{detail}</span>
              </span>
              <ArrowRight
                className="hidden h-4 w-4 shrink-0 text-cream-300 transition-all duration-200 ease-engineered group-hover:translate-x-0.5 group-hover:text-bronze sm:block"
                strokeWidth={1.75}
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
