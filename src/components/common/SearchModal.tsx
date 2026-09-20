import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { servicesData } from '../../data/services';
import { projectsData } from '../../data/projects';
import { productsData, formatPrice } from '../../data/products';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Result {
  id: string;
  group: 'Services' | 'Projects' | 'Equipment';
  title: string;
  meta: string;
  path: string;
}

const suggestions = ['hybrid inverter', '5kVA', 'lithium battery', 'maintenance', 'MC4'];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useBodyScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) setQuery('');
  }, [isOpen]);

  const results = useMemo<Result[]>(() => {
    const term = query.trim().toLowerCase();
    if (!term) return [];

    const services: Result[] = servicesData
      .filter(
        (s) =>
          s.title.toLowerCase().includes(term) || s.shortDescription.toLowerCase().includes(term)
      )
      .map((s) => ({
        id: `service-${s.id}`,
        group: 'Services',
        title: s.title,
        meta: s.shortDescription,
        path: `/services/${s.slug}`,
      }));

    const projects: Result[] = projectsData
      .filter(
        (p) =>
          p.title.toLowerCase().includes(term) ||
          p.location.toLowerCase().includes(term) ||
          p.capacity.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term)
      )
      .map((p) => ({
        id: `project-${p.id}`,
        group: 'Projects',
        title: p.title,
        meta: `${p.category} · ${p.location}`,
        path: `/projects/${p.slug}`,
      }));

    const products: Result[] = productsData
      .filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.brand.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term) ||
          p.shortSpec.toLowerCase().includes(term)
      )
      .map((p) => ({
        id: `product-${p.id}`,
        group: 'Equipment',
        title: p.name,
        meta: `${p.brand} · ${formatPrice(p)}`,
        path: `/products/${p.slug}`,
      }));

    return [...services, ...projects, ...products];
  }, [query]);

  const grouped = useMemo(() => {
    return (['Services', 'Projects', 'Equipment'] as const)
      .map((group) => ({ group, items: results.filter((r) => r.group === group) }))
      .filter((section) => section.items.length > 0);
  }, [results]);

  if (!isOpen) return null;

  const go = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-navy-deep/80 px-4 pt-20 backdrop-blur-[2px] sm:pt-28"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-2xl border border-cream-300 bg-cream-50 shadow-panel animate-sheet-in">
        <div className="flex items-center gap-3 border-b border-cream-300 px-4 py-3.5">
          <Search className="h-[18px] w-[18px] shrink-0 text-ink-muted" strokeWidth={1.75} />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search services, projects and equipment"
            aria-label="Search services, projects and equipment"
            className="w-full bg-transparent text-[15px] text-navy placeholder:text-ink-muted/70 focus:outline-none"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="tap flex w-10 items-center justify-center text-ink-muted hover:text-navy"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {!query.trim() && (
            <div className="px-4 py-6">
              <p className="eyebrow mb-3">Try</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="rounded-sm border border-cream-300 bg-white px-3 py-2 text-[13px] text-ink-soft hover:border-navy hover:text-navy"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query.trim() && grouped.length === 0 && (
            <div className="px-4 py-10 text-center">
              <p className="text-sm text-ink-soft">
                Nothing matched “{query}”.
              </p>
              <button
                onClick={() => go('/contact')}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-moss-dark hover:underline"
              >
                Ask an engineer directly
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
              </button>
            </div>
          )}

          {grouped.map((section) => (
            <div key={section.group} className="border-b border-cream-200 last:border-b-0">
              <p className="eyebrow px-4 pb-2 pt-4">
                {section.group} ({section.items.length})
              </p>
              <ul>
                {section.items.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => go(item.path)}
                      className="group flex w-full items-center justify-between gap-4 px-4 py-3 text-left transition-colors hover:bg-white"
                    >
                      <span className="min-w-0">
                        <span className="block truncate text-[15px] font-medium text-navy">
                          {item.title}
                        </span>
                        <span className="mt-0.5 block truncate text-[13px] text-ink-muted">
                          {item.meta}
                        </span>
                      </span>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:text-moss-dark"
                        strokeWidth={1.75}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
