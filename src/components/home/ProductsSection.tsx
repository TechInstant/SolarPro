import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Solar Panels',
    category: 'Panels',
    image: '/images/products/solar-panel.svg',
  },
  {
    name: 'Inverters',
    category: 'Inverters',
    image: '/images/products/hybrid-inverter.svg',
  },
  {
    name: 'Lithium Batteries',
    category: 'Lithium Batteries',
    image: '/images/products/lithium-battery.svg',
  },
  {
    name: 'Deep Cycle Batteries',
    category: 'Deep Cycle Batteries',
    image: '/images/products/tubular-battery.svg',
  },
  {
    name: 'Charge Controllers',
    category: 'Charge Controllers',
    image: '/images/products/mppt-controller.svg',
  },
  {
    name: 'Solar Cables',
    category: 'Solar Cables',
    image: '/images/products/solar-cable.svg',
  },
  {
    name: 'MC4 Connectors',
    category: 'MC4 Connectors',
    image: '/images/products/mc4-connectors.svg',
  },
  {
    name: 'Installation Tools',
    category: 'Installation Tools',
    image: '/images/products/installation-tools.svg',
  },
];

export const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="bg-cream-50 py-16 lg:py-20">
      <div className="shell">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-moss-dark">
              Products & Tools
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-navy">
              Quality Equipment. Professional Tools.
            </h2>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
              We supply genuine solar equipment and professional tools at competitive prices.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-moss-dark hover:text-moss transition-colors shrink-0"
          >
            View All Products
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>

        {/* 8 Product Categories Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat) => (
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

