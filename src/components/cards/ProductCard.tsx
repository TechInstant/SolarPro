import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { SmartImage } from '../ui/SmartImage';
import { formatPrice } from '../../data/products';
import type { Product } from '../../types';
import { cn } from '../../utils/cn';

interface ProductCardProps {
  product: Product;
  /** Opens the enquiry modal for this product. */
  onEnquire: (product: Product) => void;
  className?: string;
}

const availabilityTone: Record<Product['availability'], string> = {
  'In Stock': 'text-moss-dark',
  'Limited Stock': 'text-bronze',
  'Available on Order': 'text-ink-muted',
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, onEnquire, className }) => (
  <article
    className={cn(
      'group flex h-full flex-col border border-cream-300 bg-white transition-colors duration-300 ease-engineered hover:border-navy/35',
      className
    )}
  >
    <Link
      to={`/products/${product.slug}`}
      className="block border-b border-cream-200 bg-cream-100"
      aria-label={`View ${product.name}`}
    >
      <SmartImage
        src={product.image}
        alt={product.name}
        ratio="aspect-[4/3]"
        className="p-3 transition-transform duration-500 ease-engineered group-hover:scale-[1.02] sm:p-4"
      />
    </Link>

    <div className="flex flex-1 flex-col p-5">
      <p className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
        <span>{product.brand}</span>
        <span className={availabilityTone[product.availability]}>{product.availability}</span>
      </p>

      <h3 className="mt-3 font-display text-[16.5px] font-semibold leading-snug text-navy">
        <Link to={`/products/${product.slug}`} className="hover:underline underline-offset-4">
          {product.name}
        </Link>
      </h3>

      <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{product.shortSpec}</p>

      <ul className="mt-4 flex-1 space-y-1.5">
        {product.highlights.slice(0, 3).map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-2 text-[13px] leading-snug text-ink-soft"
          >
            <span aria-hidden className="mt-[7px] h-[3px] w-[3px] shrink-0 bg-bronze" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-end justify-between border-t border-cream-200 pt-4">
        <span>
          <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
            {product.price ? 'Price' : 'Pricing'}
          </span>
          <span className="mt-1 block font-display text-[17px] font-semibold text-navy">
            {formatPrice(product)}
          </span>
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          onClick={() => onEnquire(product)}
          className="tap inline-flex items-center justify-center gap-1.5 rounded-sm bg-[#1FA855] px-3 text-[13px] font-medium text-white transition-colors hover:bg-[#178443]"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
          {product.price ? 'Order' : 'Get price'}
          <span className="sr-only"> — {product.name}</span>
        </button>
        <Link
          to={`/products/${product.slug}`}
          className="tap inline-flex items-center justify-center gap-1.5 rounded-sm border border-cream-300 px-3 text-[13px] font-medium text-navy transition-colors hover:border-navy"
        >
          Details
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
          <span className="sr-only"> for {product.name}</span>
        </Link>
      </div>
    </div>
  </article>
);
