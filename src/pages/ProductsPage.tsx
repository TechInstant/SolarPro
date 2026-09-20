import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X, MessageCircle } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { ProductCard } from '../components/cards/ProductCard';
import { ProductModal } from '../components/common/ProductModal';
import { FilterTabs } from '../components/ui/FilterTabs';
import { EmptyState } from '../components/ui/States';
import { Button } from '../components/ui/Button';
import { productsData, productCategories } from '../data/products';
import { getWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';
import { useSeo } from '../hooks/useSeo';
import type { Product } from '../types';

type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'name';

const sortOptions: { value: SortKey; label: string }[] = [
  { value: 'featured', label: 'Featured first' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'name', label: 'Name: A to Z' },
];

export const ProductsPage: React.FC = () => {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>(params.get('category') ?? 'All');
  const [sort, setSort] = useState<SortKey>('featured');
  const [enquiry, setEnquiry] = useState<Product | null>(null);

  useSeo({
    title: 'Solar Equipment & Installation Tools',
    description:
      'Solar panels, hybrid inverters, lithium and tubular batteries, charge controllers, cables, MC4 connectors and installation tools — with specifications and prices on request.',
  });

  // Keep the category in the URL so links from the home page and footer land correctly.
  useEffect(() => {
    const fromUrl = params.get('category');
    if (fromUrl && fromUrl !== category) setCategory(fromUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const changeCategory = (next: string) => {
    setCategory(next);
    if (next === 'All') {
      params.delete('category');
    } else {
      params.set('category', next);
    }
    setParams(params, { replace: true });
  };

  const counts = useMemo(() => {
    const result: Record<string, number> = { All: productsData.length };
    productCategories.slice(1).forEach((key) => {
      result[key] = productsData.filter((product) => product.category === key).length;
    });
    return result;
  }, []);

  const visible = useMemo(() => {
    const term = query.trim().toLowerCase();

    const filtered = productsData.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category;
      const matchesQuery =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.brand.toLowerCase().includes(term) ||
        product.shortSpec.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.applications.some((a) => a.toLowerCase().includes(term));
      return matchesCategory && matchesQuery;
    });

    const sorted = [...filtered];
    switch (sort) {
      case 'price-asc':
        sorted.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
        break;
      case 'price-desc':
        sorted.sort((a, b) => (b.price ?? -1) - (a.price ?? -1));
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        sorted.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
    }
    return sorted;
  }, [query, category, sort]);

  const reset = () => {
    setQuery('');
    changeCategory('All');
    setSort('featured');
  };

  return (
    <>
      <PageHero
        eyebrow="Equipment catalogue"
        title="Quality Equipment. Professional Tools."
        subtitle="Genuine solar equipment and the tools to install it. Prices shown are current for stock items; anything built to order is quoted per system. There is no checkout here — you get a person, a price and a delivery date on WhatsApp."
        breadcrumbItems={[{ label: 'Products' }]}
      />

      <section className="bg-cream-50 py-10 sm:py-14 lg:py-16">
        <div className="shell">
          {/* Controls */}
          <div className="space-y-5 border-b border-cream-300 pb-6">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search
                  className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by name, brand or specification"
                  aria-label="Search equipment"
                  className="field pl-10 pr-10"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    aria-label="Clear search"
                    className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-ink-muted hover:text-navy"
                  >
                    <X className="h-4 w-4" strokeWidth={1.75} />
                  </button>
                )}
              </div>

              <div className="sm:w-56">
                <label htmlFor="sort" className="sr-only">
                  Sort equipment
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(event) => setSort(event.target.value as SortKey)}
                  className="field"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <FilterTabs
              options={productCategories}
              value={category}
              onChange={changeCategory}
              counts={counts}
              label="Filter equipment by category"
            />
          </div>

          <p className="mt-6 text-[14px] text-ink-soft">
            <span className="font-medium text-navy">{visible.length}</span>{' '}
            {visible.length === 1 ? 'item' : 'items'}
            {category !== 'All' && <> in {category}</>}
            {query && <> matching “{query}”</>}
          </p>

          {visible.length === 0 ? (
            <EmptyState
              className="mt-6"
              title="Nothing matched that search"
              description="We stock far more than is listed here. Send the model or specification you are after and we will source it."
              actionLabel="Clear filters"
              onAction={reset}
            />
          ) : (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visible.map((product) => (
                <ProductCard key={product.id} product={product} onEnquire={setEnquiry} />
              ))}
            </div>
          )}

          <div className="mt-12 flex flex-col items-start gap-5 border border-cream-300 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 className="font-display text-[19px] font-semibold text-navy">
                Not listed? We can still source it.
              </h2>
              <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-ink-soft">
                Send the model number or a photograph of what you need. If it is genuine and we can
                stand behind it, we can supply it.
              </p>
            </div>
            <Button
              href={getWhatsAppUrl(whatsappMessages.general)}
              variant="whatsapp"
              leadingIcon={<MessageCircle className="h-4 w-4" strokeWidth={1.75} />}
              className="shrink-0"
            >
              Ask about an item
            </Button>
          </div>
        </div>
      </section>

      <ProductModal product={enquiry} onClose={() => setEnquiry(null)} />
    </>
  );
};
