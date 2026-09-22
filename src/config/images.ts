/**
 * CENTRAL IMAGE REGISTRY
 * ------------------------------------------------------------------
 * Every photograph used on the site is listed here once. No component
 * hardcodes an image path.
 *
 * TO REPLACE AN IMAGE WITH YOUR OWN PHOTOGRAPH:
 *   1. Drop your file into the matching folder in `public/images/...`
 *      keeping the same file name (e.g. public/images/hero/hero-installation.jpg).
 *   2. That is it — nothing else needs to change.
 *
 * Or point any value below at a different path or a full https:// URL.
 *
 * Recommended sizes:
 *   hero          1920 x 1080   (landscape, leave space on the left for text)
 *   project cover 1400 x 900
 *   gallery       1400 x 900
 *   portrait       900 x 1200   (vertical)
 *   service        1100 x 800
 *
 * IMPORTANT: the photographs shipped with this site are licensed stock
 * images used for demonstration only. They do not show work carried out
 * by this business, which is why every example project card carries an
 * "Example project" label until you replace both the images and the
 * copy in `src/data/projects.ts`.
 */

export const siteImages = {
  /** Home page hero. `layout` picks between a full-bleed photo and a split panel. */
  hero: {
    layout: 'split' as 'split' | 'full',
    image: '/images/hero/hero-installation.jpg',
    alt: 'Solar installer lowering a photovoltaic module onto a pitched roof under a clear sky',
  },

  /** Open Graph / social sharing card. */
  ogImage: '/images/brand/og-cover.jpg',

  about: {
    portrait: '/images/about/engineer-portrait.jpg',
    portraitAlt: 'Portrait of the lead solar engineer wearing a safety helmet',
    onSite: '/images/about/engineer-on-site.jpg',
    onSiteAlt: 'Engineer in a high-visibility vest inspecting a ground-mounted solar array',
    workmanship: '/images/about/workmanship-detail.jpg',
    workmanshipAlt: 'Gloved hands terminating cable on a solar mounting rail',
  },

  /** Keyed by service slug — see src/data/services.ts */
  services: {
    'solar-panel-installation': '/images/services/solar-panel-installation.jpg',
    'inverter-installation': '/images/services/inverter-installation.jpg',
    'battery-energy-storage': '/images/services/battery-energy-storage.jpg',
    'solar-system-design': '/images/services/solar-system-design.jpg',
    'electrical-installation': '/images/services/electrical-installation.jpg',
    'solar-system-maintenance': '/images/services/system-maintenance.jpg',
    'fault-diagnosis-repairs': '/images/services/fault-diagnosis.jpg',
    'commercial-solar-solutions': '/images/services/commercial-solar.jpg',
    'cctv-camera-installation': '/images/services/cctv-installation.jpg',
    'electric-fencing-barbed-wire': '/images/services/electric-fencing.jpg',
    'smart-security-systems': '/images/services/smart-security.jpg',
    'access-control-systems': '/images/services/access-control.jpg',
  } as Record<string, string>,

  /** Home page CCTV & Security section. */
  security: {
    image: '/images/security/cctv-section.jpg',
    alt: 'Two bullet CCTV cameras mounted on a dark ribbed building facade',
  },

  /** Fallback shown if any image fails to load. */
  fallback: '/images/brand/placeholder.svg',
} as const;

export type SiteImages = typeof siteImages;
