import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { ProductCard } from '../cards/ProductCard';
import { ProductModal } from '../common/ProductModal';
import { SmartImage } from '../ui/SmartImage';
import { productsData, productCategoryRail } from '../../data/products';
import { getWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';
import { useReveal } from '../../hooks/useReveal';
import type { Product } from '../../types';

export const ProductsSection: React.FC = () => {
  const [enquiry, setEnquiry] = useState<Product | null>(null);
  const ref = useReveal<HTMLDivElement>();

  const featured = productsData.filter((product) => product.featured).slice(0, 4);

  return (
    <section id="products" className="bg-cream-100 py-16 sm:py-20 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="Equipment & tools"
          title="Quality Equipment. Professional Tools."
          description="We supply genuine solar equipment and professional installation tools. Tell us what you need and we will confirm price, stock and delivery on WhatsApp."
          action={
            <Button
              to="/products"
              variant="outline"
              size="sm"
              trailingIcon={<ArrowRight className="h-4 w-4" strokeWidth={1.75} />}
              className="hidden md:inline-flex"
            >
              Full catalogue
            </Button>
          }
        />

        {/* Category rail — scrolls on mobile rather than wrapping into a cramped grid. */}
        <div className="rail -mx-5 mt-9 gap-2 px-5 sm:mx-0 sm:flex-wrap sm:px-0">
          {productCategoryRail.map((item) => (
            <Link
              key={item.category}
              to={`/products?category=${encodeURIComponent(item.category)}`}
              className="tap inline-flex shrink-0 items-center rounded-sm border border-cream-300 bg-white px-4 text-[13px] font-medium text-ink-soft transition-colors hover:border-navy hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div ref={ref} className="reveal mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} onEnquire={setEnquiry} />
          ))}
        </div>

        {/* Supply note — the honest version of a "shop" without a checkout. */}
        <div className="mt-6 grid gap-px border border-cream-300 bg-cream-300 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div className="bg-white p-6 sm:p-8">
            <h3 className="font-display text-[19px] font-semibold text-navy">
              Buying equipment without an installer?
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              That is fine — we sell to homeowners and to other installers. Send the list, or the
              inverter model you are matching, and you will get a price, current stock and a
              straight answer on whether the parts actually work together.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <Button
                href={getWhatsAppUrl(whatsappMessages.general)}
                variant="whatsapp"
                leadingIcon={<MessageCircle className="h-4 w-4" strokeWidth={1.75} />}
              >
                Ask about stock
              </Button>
              <Button
                to="/products"
                variant="outline"
                trailingIcon={<ArrowRight className="h-4 w-4" strokeWidth={1.75} />}
              >
                Browse catalogue
              </Button>
            </div>
          </div>

          <SmartImage
            src="/images/services/inverter-installation.jpg"
            alt="Wall-mounted inverter and battery installation"
            ratio="aspect-[16/10] md:aspect-auto md:h-full"
            wrapperClassName="bg-cream-100"
          />
        </div>
      </div>

      <ProductModal product={enquiry} onClose={() => setEnquiry(null)} />
    </section>
  );
};
