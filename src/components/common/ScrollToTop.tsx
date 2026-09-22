import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * New page → start at the top. A link with a hash (e.g. /services#security)
 * → scroll to that section instead. Pages are lazy-loaded, so the target
 * may not exist on the first frame; retry briefly until it does.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    let timer: number | undefined;

    const tryScroll = () => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (attempts < 20) {
        attempts += 1;
        timer = window.setTimeout(tryScroll, 50);
      }
    };

    tryScroll();
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};
