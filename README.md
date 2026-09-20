# SolarPro Engineering

Website for a solar installation engineering business: services, project case
studies, an equipment catalogue, and WhatsApp-first enquiry handling.

React 19 · Vite · TypeScript · Tailwind CSS · React Router. No backend — every
form hands off to WhatsApp or email, so the site can be deployed as static files
and still generate real enquiries.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build locally
```

## Deploying to Netlify

Connect the repository and Netlify picks up `netlify.toml` automatically:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | 20 |

`netlify.toml` and `public/_redirects` both contain the SPA fallback, so a direct
visit to a deep link such as `/projects/5kva-hybrid-solar-system` resolves
correctly instead of returning a 404.

---

## Changing the business details

**Everything about the business lives in one file: `src/config/company.ts`.**

Name, tagline, engineer name and bio, phone number, WhatsApp number, email,
address, service areas, opening hours and social links. Change a value there and
it updates across the navigation, footer, every WhatsApp link, the quote form,
the contact page and the page metadata. Nothing is hardcoded anywhere else.

The WhatsApp number is the `whatsapp` field — digits only, including the country
code and no `+` (for example `2348135374919`).

---

## Changing the images

**Every photograph is registered in `src/config/images.ts`.** No component
hardcodes an image path.

To swap in your own photographs, drop them into the matching folder in
`public/images/` keeping the same file names:

```
public/images/
├── hero/hero-installation.jpg          Home page hero          1920 × 1080
├── brand/og-cover.jpg                  Social sharing card     1200 × 630
├── about/engineer-portrait.jpg         Engineer portrait        900 × 1200
├── about/engineer-on-site.jpg          Working photograph      1200 ×  800
├── services/<service-slug>.jpg         One per service         1100 ×  800
├── projects/<project-slug>/
│   ├── cover.jpg                       Card and hero           1400 ×  900
│   ├── before.jpg                      Before the work
│   ├── installation.jpg                Work in progress
│   ├── equipment.jpg                   Inverter / battery / board
│   └── result.jpg                      Finished result
└── products/<product>.svg              Equipment images
```

Nothing else needs to change. To point at a different path or an external URL
instead, edit the value in `src/config/images.ts`.

The hero supports two layouts. In `src/config/images.ts`:

```ts
hero: { layout: 'split' }  // text left, photograph right  (default)
hero: { layout: 'full' }   // full-width photograph behind the text
```

### About the images shipped with this repository

The photographs are licensed stock images used for demonstration. **They do not
show work carried out by this business**, which is why every project card and
case study carries an "Example project" label. Replace the photographs *and* the
copy in `src/data/projects.ts`, then set `isExample: false` on that project to
remove the label.

Product images are measured technical drawings rather than photographs, so the
catalogue never implies stock that has not been photographed. Replace each `.svg`
with a manufacturer photograph of the exact item you supply.

---

## Adding content

### A project

Copy any block in `src/data/projects.ts`, change the values, and put the
photographs in `public/images/projects/<your-slug>/`. The `slug` becomes the page
address: `/projects/<slug>`.

Each project is written as a case study — the client's problem, the system
designed, the equipment used, the installation process, and the measured result.
The `metrics` array drives the three figures at the top of the page.

### A product

Copy any block in `src/data/products.ts`. Set `price` (a number, in naira) for
items you publish a price for; leave it out and set `priceLabel` instead for
anything quoted on request. The card and detail page handle either case.

### A service

`src/data/services.ts`. The `iconName` must be one of the keys listed in
`src/components/cards/ServiceCard.tsx` — icons are mapped explicitly there
because importing the whole icon library adds roughly a megabyte to the bundle.

### Testimonials

`src/data/testimonials.ts` ships with placeholder entries and the section that
renders them says so. Replace them with real, permitted client quotes.

---

## Project structure

```
src/
├── components/
│   ├── cards/      ProjectCard, ProductCard, ServiceCard, TestimonialCard
│   ├── common/     Navbar, MobileMenu, Footer, PageHero, Breadcrumbs, modals
│   ├── forms/      QuoteForm, ContactForm
│   ├── gallery/    ProjectGallery (lightbox), ProductGallery (zoom)
│   ├── home/       One component per home page section, in page order
│   └── ui/         Button, SectionHeader, FilterTabs, Stats, SmartImage, …
├── config/         company.ts, images.ts  ← the two files you will edit
├── data/           services, projects, products, testimonials
├── hooks/          useSeo, useReveal, useBodyScrollLock
├── pages/          One per route
├── types/          Shared TypeScript interfaces
└── utils/          whatsapp.ts (all message builders), cn.ts
```

## Routes

`/` · `/services` · `/services/:slug` · `/projects` · `/projects/:slug` ·
`/products` · `/products/:slug` · `/about` · `/contact` · `/quote` · 404

## How enquiries work

There is no server. Every call to action resolves to a real action:

- **Quote form** — validates, then opens WhatsApp with the whole request written
  out, and offers an email fallback plus a copyable summary.
- **Product enquiry** — a modal that builds a message naming the product,
  quantity and delivery location.
- **Contact form** — same pattern, with a mailto fallback.
- **Phone and email links** — `tel:` and `mailto:` throughout.

All message templates live in `src/utils/whatsapp.ts`. When you add a backend
later, those handlers are the only place that needs to change.

## Notes

- Set the `RC` number in `src/config/company.ts` before going live, or remove it.
- The contact page map follows `mapQuery` in the same config file.
- Animation respects `prefers-reduced-motion`.
