import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceCard } from '../cards/ServiceCard';
import { servicesData } from '../../data/services';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-cream-100 py-16 lg:py-20">
      <div className="shell">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-moss-dark">
              Our Services
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-navy">
              Complete Solar Solutions
            </h2>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
              From consultation to installation and ongoing support, we provide end-to-end solar solutions for homes, businesses and industries.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-moss-dark hover:text-moss transition-colors shrink-0"
          >
            View All Services
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>

        {/* 8 Services Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.slice(0, 8).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

