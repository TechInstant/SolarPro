import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MessageCircle, Check, Wrench } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { ProductGallery } from '../components/gallery/ProductGallery';
import { ProductCard } from '../components/cards/ProductCard';
import { ProductModal } from '../components/common/ProductModal';
import { Button } from '../components/ui/Button';
import { getProductBySlug, getRelatedProducts, formatPrice } from '../data/products';
import { getServiceBySlug } from '../data/services';
import { getWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';
import { companyConfig } from '../config/company';
import { useSeo } from '../hooks/useSeo';
import type { Product } from '../types';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug);
  const [enquiry, setEnquiry] = useState<Product | null>(null);

  useSeo({
    title: product ? `${product.name} — ${product.brand}` : 'Product',
    description:
      product?.shortSpec ?? `Equipment supplied and installed by ${companyConfig.name}.`,
    image: product?.image,
    type: 'article',
  });

  if (!product) return <Navigate to="/products" replace />;

  const related = getRelatedProducts(product);
  const service = product.relatedServiceSlug ? getServiceBySlug(product.relatedServiceSlug) : undefined;
  const gallery = product.gallery?.length ? product.gallery : [product.image];

  return (
    <>
      <PageHero
        eyebrow={product.category}
        title={product.name}
        subtitle={product.shortSpec}
        breadcrumbItems={[{ label: 'Products', path: '/products' }, { label: product.name }]}
      />

      <div className="bg-cream-50 py-12 sm:py-16 lg:py-20">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <ProductGallery images={gallery} name={product.name} />

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                {product.brand}
              </p>

              <div className="mt-5 flex flex-wrap items-end gap-x-6 gap-y-3 border-y border-cream-300 py-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                    {product.price ? 'Price' : 'Pricing'}
                  </p>
                  <p className="mt-1.5 font-display text-[28px] font-semibold leading-none text-navy">
                    {formatPrice(product)}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                    Availability
                  </p>
                  <p className="mt-1.5 text-[15px] font-medium text-moss-dark">
                    {product.availability}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-[15.5px] leading-relaxed text-ink-soft">
                {product.fullDescription}
              </p>

              <ul className="mt-6 space-y-2">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5 text-[14.5px] text-ink-soft">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss-dark" strokeWidth={2} aria-hidden />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-2.5">
                <Button
                  onClick={() => setEnquiry(product)}
                  variant="whatsapp"
                  size="lg"
                  fullWidth
                  leadingIcon={<MessageCircle className="h-4 w-4" strokeWidth={1.75} />}
                >
                  Request this product
                </Button>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <Button
                    href={getWhatsAppUrl(whatsappMessages.productPrice(product.name))}
                    variant="outline"
                  >
                    Ask a question
                  </Button>
                  <Button
                    to={service ? `/services/${service.slug}` : '/services'}
                    variant="outline"
                    leadingIcon={<Wrench className="h-4 w-4" strokeWidth={1.75} />}
                  >
                    Need installation?
                  </Button>
                </div>
              </div>

              <p className="mt-4 text-[13px] leading-relaxed text-ink-muted">
                Prices exclude installation and delivery unless stated. Confirm current pricing
                before ordering — equipment costs move with the exchange rate.
              </p>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-14">
            <div>
              <h2 className="font-display text-[20px] font-semibold text-navy">Specifications</h2>
              <dl className="mt-5 divide-y divide-cream-200 border border-cream-300 bg-white">
                {Object.entries(product.specifications).map(([label, value]) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 px-5 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-muted">
                      {label}
                    </dt>
                    <dd className="text-[14.5px] font-medium text-navy sm:text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-display text-[20px] font-semibold text-navy">Applications</h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {product.applications.map((application) => (
                    <li
                      key={application}
                      className="border border-cream-300 bg-white px-3 py-2 text-[13.5px] text-ink-soft"
                    >
                      {application}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-[20px] font-semibold text-navy">Warranty</h2>
                <p className="mt-4 border-l-2 border-bronze bg-white px-5 py-4 text-[14.5px] leading-relaxed text-ink-soft">
                  {product.warranty}
                </p>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-16 border-t border-cream-300 pt-10">
              <h2 className="font-display text-[20px] font-semibold text-navy">
                Goes well with this
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <ProductCard key={item.id} product={item} onEnquire={setEnquiry} />
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-ink-soft transition-colors hover:text-navy"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
              Back to catalogue
            </Link>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-moss-dark hover:underline"
            >
              Request a full system quote
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </div>

      <ProductModal product={enquiry} onClose={() => setEnquiry(null)} />
    </>
  );
};
