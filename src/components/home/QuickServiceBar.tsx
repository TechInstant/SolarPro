import React from 'react';
import { Link } from 'react-router-dom';
import { SunMedium, Settings, Wrench, Users } from 'lucide-react';

const items = [
  {
    label: 'Installation',
    to: '/services/solar-panel-installation',
    Icon: SunMedium,
  },
  {
    label: 'Sales',
    to: '/products',
    Icon: Settings,
  },
  {
    label: 'Maintenance',
    to: '/services/solar-system-maintenance',
    Icon: Wrench,
  },
  {
    label: 'Consultation',
    to: '/services/solar-system-design',
    Icon: Users,
  },
];

export const QuickServiceBar: React.FC = () => (
  <section id="quick-service-bar" aria-label="Services overview" className="border-b border-cream-200 bg-cream-50">
    <div className="shell py-4 sm:py-5">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-cream-300/80">
        {items.map(({ label, to, Icon }) => (
          <Link
            key={label}
            to={to}
            className="flex items-center justify-center gap-3 py-3 px-4 transition-colors hover:text-moss-dark group"
          >
            <div className="text-moss-dark transition-transform duration-200 group-hover:scale-110">
              <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
            </div>
            <span className="text-[15px] font-semibold text-navy transition-colors group-hover:text-moss-dark">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

