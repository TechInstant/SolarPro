import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X, MessageCircle, SunMedium, Cctv, LayoutGrid } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { ProductCard } from '../components/cards/ProductCard';
import { ProductModal } from '../components/common/ProductModal';
import { FilterTabs } from '../components/ui/FilterTabs';
import { EmptyState } from '../components/ui/States';
import { Button } from '../components/ui/Button';
import {
  productsData,
  productDivision,
  categoryDivision,
  solarProductCategories,
  securityProductCategories,
} from '../data/products';
import { getWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';
import { useSeo } from '../hooks/useSeo';
import { cn } from '../utils/cn';
import type { Division, Product, ProductCategory } from '../types';

type DivisionFilter = Division | 'all';

const divisionTabs: { value: DivisionFilter; label: string; Icon: typeof SunMedium }[] = [
  { value: 'all', label: 'All products', Icon: LayoutGrid },
  { value: 'solar', label: 'Solar & Power', Icon: SunMedium },
  { value: 'security', label: 'CCTV & Security', Icon: Cctv },
];

const isDivision = (value: string | null): value is Division =>
  value === 'solar' || value === 'security';

/** Resolve the starting division from the URL: explicit ?division=, else the category's. */
function divisionFromParams(params: URLSearchParams): DivisionFilter {
  const division = params.get('division');
  if (isDivision(division)) return division;
  const category = params.get('category') as ProductCategory | null;
  return category && categoryDivision[category] ? categoryDivision[category] : 'all';
}

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
  const [division, setDivision] = useState<DivisionFilter>(() => divisionFromParams(params));
  const [category, setCategory] = useState<string>(params.get('category') ?? 'All');
  const [sort, setSort] = useState<SortKey>('featured');
  const [enquiry, setEnquiry] = useState<Product | null>(null);

  useSeo({
    title: 'Solar, CCTV & Security Equipment',
    description:
      'Inverters, lithium batteries, solar panels and protective devices, plus CCTV cameras, recorders, installation materials, electric fence energizers and access control — with full specifications.',
  });

  // Links from the home page and footer carry ?division= and ?category= — follow them.
  useEffect(() => {
    setDivision(divisionFromParams(params));
    setCategory(params.get('category') ?? 'All');
  }, [params]);

  const updateParams = (nextDivision: DivisionFilter, nextCategory: string) => {
    const next = new URLSearchParams();
    if (nextDivision !== 'all') next.set('division', nextDivision);
    if (nextCategory !== 'All') next.set('category', nextCategory);
    setParams(next, { replace: true });
  };

  const changeDivision = (next: DivisionFilter) => {
    setDivision(next);
    setCategory('All');
    updateParams(next, 'All');
  };

  const changeCategory = (next: string) => {
    setCategory(next);
    updateParams(division, next);
  };

  /** Category chips shown for the current division. */
  const categoryOptions = useMemo<string[]>(() => {
    if (division === 'solar') return ['All', ...solarProductCategories];
    if (division === 'security') return ['All', ...securityProductCategories];
    return ['All', ...solarProductCategories, ...securityProductCategories];
  }, [division]);

  const inDivision = (product: Product) =>
    division === 'all' || productDivision(product) === division;

  const counts = useMemo(() => {
    const result: Record<string, number> = {
      All: productsData.filter(inDivision).length,
    };
    categoryOptions.slice(1).forEach((key) => {
      result[key] = productsData.filter((product) => product.category === key).length;
    });
    return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryOptions, division]);

  const visible = useMemo(() => {
    const term = query.trim().toLowerCase();

    const filtered = productsData.filter((product) => {
      const matchesDivision = inDivision(product);
      const matchesCategory = category === 'All' || product.category === category;
      const matchesQuery =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.brand.toLowerCase().includes(term) ||
        product.shortSpec.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.applications.some((a) => a.toLowerCase().includes(term));
      return matchesDivision && matchesCategory && matchesQuery;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, category, sort, division]);

  const reset = () => {
    setQuery('');
    changeDivision('all');
    setSort('featured');
  };

  return (
    <>
      <PageHero
        eyebrow="Equipment catalogue"
        title="Quality Equipment. Professional Tools."
        subtitle="Inverters, lithium batteries, panels and protective devices — plus CCTV cameras and installation materials. Prices shown are current for stock items; anything built to order is quoted per system. There is no checkout: you get a person, a price and a delivery date on WhatsApp."
        breadcrumbItems={[{ label: 'Products' }]}
      />

      <section className="bg-cream-50 py-10 sm:py-14 lg:py-16">
        <div className="shell">
          {/* Division tabs */}
          <div
            className="mb-5 grid grid-cols-3 gap-1 rounded-lg border border-cream-300 bg-white p-1 shadow-sm sm:inline-grid"
            role="tablist"
            aria-label="Product range"
          >
            {divisionTabs.map(({ value, label, Icon }) => {
              const active = division === value;
              return (
                <button
                  key={value}
                  role="tab"
                  aria-selected={active}
                  onClick={() => changeDivision(value)}
                  className={cn(
                    'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md px-2 text-[12.5px] font-semibold transition-colors sm:px-4 sm:text-[13.5px]',
                    active ? 'bg-navy text-cream shadow-sm' : 'text-ink-soft hover:text-navy'
                  )}
                >
                  <Icon className="hidden h-4 w-4 sm:block" strokeWidth={1.8} aria-hidden />
                  {label}
                </button>
              );
            })}
          </div>

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
              options={categoryOptions}
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
