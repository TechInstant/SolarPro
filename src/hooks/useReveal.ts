import { useEffect, useRef } from 'react';

/**
 * Adds `is-visible` to an element the first time it enters the viewport,
 * which drives the site's one and only entrance animation (see `.reveal`
 * in index.css).
 *
 * Content must never be able to get stuck hidden, so there are three ways
 * in: an immediate check on mount for anything already on screen, the
 * observer for everything below the fold, and a timed fallback in case the
 * observer never fires (background tabs, printing, older browsers). The
 * CSS also opts out entirely under prefers-reduced-motion.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.1) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const show = () => node.classList.add('is-visible');

    if (typeof IntersectionObserver === 'undefined') {
      show();
      return;
    }

    // Already on screen when mounted (direct link, refresh mid-page).
    if (node.getBoundingClientRect().top < window.innerHeight) show();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(node);

    const fallback = window.setTimeout(show, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [threshold]);

  return ref;
}
