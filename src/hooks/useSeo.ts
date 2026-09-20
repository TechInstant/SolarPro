import { useEffect } from 'react';
import { companyConfig } from '../config/company';
import { siteImages } from '../config/images';

interface SeoOptions {
  title: string;
  description: string;
  /** Path-relative or absolute image for the social card. */
  image?: string;
  /** Set to 'article' for project and product detail pages. */
  type?: 'website' | 'article';
}

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

/**
 * Sets the document title, description, canonical URL and Open Graph tags
 * for the page that calls it. Used instead of a helmet dependency — the
 * site is small enough that direct head updates are simpler and faster.
 */
export function useSeo({ title, description, image, type = 'website' }: SeoOptions) {
  useEffect(() => {
    const fullTitle = title.includes(companyConfig.name)
      ? title
      : `${title} | ${companyConfig.name}`;
    document.title = fullTitle;

    const card = image ?? siteImages.ogImage;
    const url = window.location.href;

    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:image"]', 'property', 'og:image', card);
    setMeta('meta[property="og:type"]', 'property', 'og:type', type);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', card);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + window.location.pathname;
  }, [title, description, image, type]);
}
