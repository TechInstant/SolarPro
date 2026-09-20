import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { SmartImage } from '../ui/SmartImage';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import type { ProjectImage } from '../../types';
import { cn } from '../../utils/cn';

interface ProjectGalleryProps {
  images: ProjectImage[];
  title: string;
}

const stageLabels: Record<ProjectImage['stage'], string> = {
  before: 'Before',
  installation: 'Installation',
  equipment: 'Equipment',
  detail: 'Detail',
  result: 'Final result',
};

/** Minimum horizontal travel before a touch counts as a swipe. */
const SWIPE_THRESHOLD = 48;

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images, title }) => {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

  useBodyScrollLock(lightboxOpen);

  const count = images.length;
  const current = images[index];

  const go = useCallback(
    (direction: 1 | -1) => setIndex((i) => (i + direction + count) % count),
    [count]
  );

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxOpen(false);
      if (event.key === 'ArrowRight') go(1);
      if (event.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [lightboxOpen, go]);

  // Keep the active thumbnail in view as the selection moves.
  useEffect(() => {
    const strip = thumbsRef.current;
    const active = strip?.children[index] as HTMLElement | undefined;
    if (strip && active) {
      const offset = active.offsetLeft - strip.offsetWidth / 2 + active.offsetWidth / 2;
      strip.scrollTo({ left: Math.max(offset, 0), behavior: 'smooth' });
    }
  }, [index]);

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) go(delta < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  if (count === 0) return null;

  return (
    <section aria-label={`${title} photographs`}>
      <div className="relative border border-cream-300 bg-white p-2 sm:p-3">
        <div
          className="relative"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <SmartImage
            src={current.src}
            alt={current.alt}
            ratio="aspect-[4/3] sm:aspect-[16/10]"
            priority={index === 0}
          />

          <span className="absolute left-0 top-0 bg-navy/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-cream">
            {stageLabels[current.stage]}
          </span>

          <button
            onClick={() => setLightboxOpen(true)}
            aria-label="Open photograph full screen"
            className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center bg-navy/90 text-cream transition-colors hover:bg-navy"
          >
            <Expand className="h-4 w-4" strokeWidth={1.75} />
          </button>

          {count > 1 && (
            <>
              <button
                onClick={() => go(-1)}
                aria-label="Previous photograph"
                className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-navy/85 text-cream transition-colors hover:bg-navy"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next photograph"
                className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-navy/85 text-cream transition-colors hover:bg-navy"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </>
          )}
        </div>

        <div className="flex items-start justify-between gap-4 px-1 pb-1 pt-3">
          <p className="text-[13.5px] leading-snug text-ink-soft">{current.caption}</p>
          <p className="shrink-0 font-mono text-[11px] tracking-[0.1em] text-ink-muted">
            {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </p>
        </div>
      </div>

      {count > 1 && (
        <div ref={thumbsRef} className="rail mt-3 gap-2">
          {images.map((image, i) => (
            <button
              key={image.src + i}
              onClick={() => setIndex(i)}
              aria-label={`Show ${stageLabels[image.stage]} photograph`}
              aria-current={i === index}
              className={cn(
                'relative h-16 w-24 shrink-0 overflow-hidden border transition-colors sm:h-[70px] sm:w-28',
                i === index ? 'border-moss' : 'border-cream-300 opacity-70 hover:opacity-100'
              )}
            >
              <img src={image.src} alt="" loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-navy-deep/97"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} photograph viewer`}
        >
          <div className="flex items-center justify-between border-b border-navy-line px-4 py-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cream-300/70">
              {title} — {stageLabels[current.stage]}
            </p>
            <button
              onClick={() => setLightboxOpen(false)}
              aria-label="Close viewer"
              className="tap flex w-11 items-center justify-center text-cream-300 hover:text-cream"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>

          <div
            className="flex flex-1 items-center justify-center p-3 sm:p-8"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-navy-line px-4 py-3">
            <button
              onClick={() => go(-1)}
              aria-label="Previous photograph"
              className="tap flex items-center gap-1.5 px-2 text-[13px] text-cream-300 hover:text-cream"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
              Prev
            </button>
            <p className="min-w-0 flex-1 truncate text-center text-[13px] text-cream-300/75">
              {current.caption}
            </p>
            <button
              onClick={() => go(1)}
              aria-label="Next photograph"
              className="tap flex items-center gap-1.5 px-2 text-[13px] text-cream-300 hover:text-cream"
            >
              Next
              <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
