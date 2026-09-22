import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, SunMedium, Cctv } from 'lucide-react';
import { homeCategoryTiles } from '../../data/products';
import { cn } from '../../utils/cn';
import type { Division } from '../../types';

const tabs: { value: Division; label: string; Icon: typeof SunMedium }[] = [
  { value: 'solar', label: 'Solar & Power', Icon: SunMedium },
  { value: 'security', label: 'CCTV & Security', Icon: Cctv },
];

export const ProductsSection: React.FC = () => {
  const [division, setDivision] = useState<Division>('solar');
  const tiles = homeCategoryTiles[division];

  return (
    <section id="products" className="bg-cream-50 py-16 lg:py-20">
      <div className="shell">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-moss-dark">
              Products &amp; Supply
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-navy">
              Quality Equipment. Professional Tools.
            </h2>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
              We supply inverters, lithium batteries, panels and protective devices, plus CCTV
              cameras and installation materials — genuine equipment at competitive prices.
            </p>
          </div>

          <Link
            to={`/products?division=${division}`}
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-moss-dark hover:text-moss transition-colors shrink-0"
          >
            View All Products
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>

        {/* Division tabs */}
        <div className="mt-8 inline-flex rounded-lg border border-cream-300 bg-white p-1 shadow-sm" role="tablist" aria-label="Product range">
          {tabs.map(({ value, label, Icon }) => {
            const active = division === value;
            return (
              <button
                key={value}
                role="tab"
                aria-selected={active}
                onClick={() => setDivision(value)}
                className={cn(
                  'inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[13.5px] font-semibold transition-colors',
                  active ? 'bg-navy text-cream shadow-sm' : 'text-ink-soft hover:text-navy'
                )}
              >
                <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden />
                {label}
              </button>
            );
          })}
        </div>

        {/* 8 Category Tiles */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {tiles.map((cat) => (
            <Link
              key={cat.name}
              to={`/products?category=${encodeURIComponent(cat.category)}`}
              className="group flex flex-col items-center justify-between rounded-xl border border-cream-300/80 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:border-moss/50 hover:shadow-md"
            >
              <div className="flex h-28 w-full items-center justify-center p-2">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <span className="mt-3 text-[13px] font-bold text-navy group-hover:text-moss-dark transition-colors leading-tight">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
