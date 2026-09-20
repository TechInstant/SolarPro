import { Product, ProductCategory } from '../types';

/**
 * EQUIPMENT CATALOGUE
 * ------------------------------------------------------------------
 * TO ADD A PRODUCT: copy a block, change the values, drop an image into
 * `public/images/products/` and point `image` at it.
 *
 * PRICING: set `price` (a number, in naira) for items you publish a price
 * for. Leave `price` out and set `priceLabel` instead for anything quoted
 * on request — the card and the detail page both handle either case.
 *
 * IMAGES: the files shipped here are measured technical drawings, used so
 * the catalogue is honest until you photograph your own stock. Replace each
 * .svg with a manufacturer photograph (.jpg) of the exact item you supply.
 */

export const productsData: Product[] = [
  {
    id: 'canadian-solar-550w',
    slug: 'canadian-solar-550w-mono-perc',
    name: 'Canadian Solar 550W HiKu6 Mono PERC',
    category: 'Panels',
    brand: 'Canadian Solar',
    shortSpec: 'Tier-1 monocrystalline module · 21.5% efficiency',
    fullDescription:
      'A half-cut cell monocrystalline module built for hot climates. The half-cut layout lowers resistive losses and keeps output up when part of the array is shaded — which matters on a Nigerian roof with a water tank or a tree on one side.',
    price: 135000,
    priceFormatted: '₦135,000',
    availability: 'In Stock',
    image: '/images/products/solar-panel.svg',
    gallery: ['/images/products/solar-panel.svg'],
    highlights: ['550W rated output', '21.5% module efficiency', '25-year power warranty'],
    specifications: {
      'Rated power (Pmax)': '550 W',
      'Module efficiency': '21.5%',
      'Operating voltage (Vmp)': '41.9 V',
      'Operating current (Imp)': '13.13 A',
      'Open circuit voltage (Voc)': '49.8 V',
      'Short circuit current (Isc)': '13.98 A',
      'Cell type': 'Monocrystalline half-cut, 144 cells',
      Dimensions: '2278 × 1134 × 35 mm',
      Weight: '27.6 kg',
    },
    applications: ['Residential rooftops', 'Commercial buildings', 'Mini-grids', 'Water pumping'],
    warranty: '12-year product warranty · 25-year linear power warranty',
    relatedServiceSlug: 'solar-panel-installation',
    featured: true,
  },
  {
    id: 'deye-5kw-hybrid',
    slug: 'deye-5kw-hybrid-inverter',
    name: 'Deye 5kW 48V Hybrid Inverter',
    category: 'Inverters',
    brand: 'Deye',
    shortSpec: 'Pure sine wave · dual MPPT · Wi-Fi monitoring',
    fullDescription:
      'The workhorse of most three-bedroom installations. Dual MPPT inputs let you split an array across two roof planes, generator auto-start is built in, and changeover is fast enough that desktops and routers never notice a grid failure.',
    price: 1250000,
    priceFormatted: '₦1,250,000',
    availability: 'In Stock',
    image: '/images/products/hybrid-inverter.svg',
    gallery: ['/images/products/hybrid-inverter.svg'],
    highlights: ['5000W continuous output', 'Under 4 ms transfer', 'Parallel up to 16 units'],
    specifications: {
      'Rated AC output': '5000 W',
      'Max PV input': '6500 W',
      'Battery voltage': '40–60 V (48 V nominal)',
      'MPPT range': '125–425 V',
      'Max efficiency': '97.6%',
      'Transfer time': 'Under 4 ms',
      'Protection rating': 'IP65',
      'Parallel capability': 'Up to 16 units',
    },
    applications: ['3–5 bedroom homes', 'Small offices', 'Clinics', 'Supermarkets'],
    warranty: '5-year manufacturer warranty',
    relatedServiceSlug: 'inverter-installation',
    featured: true,
  },
  {
    id: 'felicity-10kwh-lithium',
    slug: 'felicity-10kwh-lifepo4-battery',
    name: 'Felicity 10kWh 51.2V LiFePO4 Battery',
    category: 'Lithium Batteries',
    brand: 'Felicity Solar',
    shortSpec: '51.2V 200Ah · 6000+ cycles · smart BMS',
    fullDescription:
      'Lithium iron phosphate storage rated for daily deep cycling. Where a tubular bank would be replaced twice, this is still working — and it reports its own cell health to the inverter over CAN or RS485.',
    price: 2450000,
    priceFormatted: '₦2,450,000',
    availability: 'In Stock',
    image: '/images/products/lithium-battery.svg',
    gallery: ['/images/products/lithium-battery.svg'],
    highlights: ['10.24 kWh usable', '6000+ cycles at 80% DoD', 'Rack or wall mounted'],
    specifications: {
      'Nominal energy': '10.24 kWh',
      'Nominal voltage': '51.2 V',
      Capacity: '200 Ah',
      'Cycle life': '≥6000 cycles at 80% DoD',
      Communication: 'CAN / RS485 / RS232',
      'Charge / discharge current': '50–100 A',
      Dimensions: '480 × 650 × 260 mm',
      Weight: '85 kg',
    },
    applications: ['Residential storage', 'Commercial backup', 'Off-grid lodges'],
    warranty: '5-year warranty · 10+ year design life',
    relatedServiceSlug: 'battery-energy-storage',
    featured: true,
  },
  {
    id: 'luminous-220ah-tubular',
    slug: 'luminous-220ah-tubular-battery',
    name: 'Luminous 220Ah 12V Tall Tubular Battery',
    category: 'Deep Cycle Batteries',
    brand: 'Luminous',
    shortSpec: '12V 220Ah · tubular plates · high acid volume',
    fullDescription:
      'The dependable option where budget rules out lithium. Tall tubular plates tolerate the long, deep discharges that come with frequent outages, and the level indicators make maintenance obvious rather than guesswork.',
    price: 340000,
    priceFormatted: '₦340,000',
    availability: 'In Stock',
    image: '/images/products/tubular-battery.svg',
    gallery: ['/images/products/tubular-battery.svg'],
    highlights: ['220Ah at C20', 'Six level indicators', 'Proven in high heat'],
    specifications: {
      'Nominal voltage': '12 V',
      'Rated capacity': '220 Ah at C20',
      'Plate technology': 'Die-cast spine tall tubular',
      'Level indicators': '6 ceramic float indicators',
      'Weight (filled)': '62 kg',
    },
    applications: ['Standard inverter systems', 'Homes', 'Retail shops'],
    warranty: '24-month manufacturer warranty',
    relatedServiceSlug: 'battery-energy-storage',
    featured: true,
  },
  {
    id: 'srne-60a-mppt',
    slug: 'srne-60a-mppt-charge-controller',
    name: 'SRNE 60A MPPT Charge Controller',
    category: 'Charge Controllers',
    brand: 'SRNE',
    shortSpec: '60A auto-detect · 150V max PV input · LCD',
    fullDescription:
      'For DC-coupled systems and retrofits where the inverter has no MPPT of its own. Tracks the array maximum power point to better than 99.5%, which in practice is an extra hour of useful charging either side of noon.',
    price: 185000,
    priceFormatted: '₦185,000',
    availability: 'In Stock',
    image: '/images/products/mppt-controller.svg',
    gallery: ['/images/products/mppt-controller.svg'],
    highlights: ['60A charge current', '≥99.5% tracking', 'Lithium and lead-acid profiles'],
    specifications: {
      'System voltage': '12 / 24 / 36 / 48 V auto-detect',
      'Rated charge current': '60 A',
      'Max PV open circuit voltage': '150 V DC',
      'Max PV input power': '3200 W at 48 V',
      'Tracking efficiency': '≥99.5%',
      'Battery support': 'Lithium, sealed, gel, flooded, custom',
    },
    applications: ['DC-coupled systems', 'Off-grid cabins', 'Street lighting'],
    warranty: '2-year warranty',
    relatedServiceSlug: 'solar-system-design',
    featured: true,
  },
  {
    id: 'kbe-6mm-solar-cable',
    slug: 'kbe-6mm-solar-dc-cable',
    name: 'KBE 6mm² Solar DC Cable — 100m Roll',
    category: 'Solar Cables',
    brand: 'KBE Berlin',
    shortSpec: 'Tinned copper · UV resistant · TÜV certified',
    fullDescription:
      'Double-insulated, halogen-free cable rated for 25 years of direct sun. Ordinary building wire on a roof goes brittle within two seasons — this is the difference between an array you can forget about and one that develops earth faults.',
    price: 115000,
    priceFormatted: '₦115,000',
    availability: 'In Stock',
    image: '/images/products/solar-cable.svg',
    gallery: ['/images/products/solar-cable.svg'],
    highlights: ['6.0 mm² tinned copper', '1500V DC rated', '100 m roll, red or black'],
    specifications: {
      'Cross section': '6.0 mm² (10 AWG)',
      Conductor: 'Tinned copper, stranded',
      'Rated voltage': '1500 V DC / 1000 V AC',
      'Temperature range': '−40 °C to +90 °C',
      Certification: 'EN 50618 / TÜV / IEC 62930',
      Length: '100 m roll',
    },
    applications: ['String interconnection', 'Inverter DC links', 'Combiner wiring'],
    warranty: '25-year outdoor design life',
    relatedServiceSlug: 'electrical-installation',
    featured: true,
  },
  {
    id: 'staubli-mc4-connectors',
    slug: 'staubli-mc4-connector-pairs',
    name: 'Stäubli MC4 Connectors — 10 Pairs',
    category: 'MC4 Connectors',
    brand: 'Stäubli',
    shortSpec: 'Genuine MC4 · 1500V DC 39A · IP68 mated',
    fullDescription:
      'Genuine Stäubli, not a look-alike. Mismatched connector brands are one of the most common causes of DC arc faults on rooftops — the contact geometry differs just enough to heat up under load.',
    price: 18500,
    priceFormatted: '₦18,500',
    availability: 'In Stock',
    image: '/images/products/mc4-connectors.svg',
    gallery: ['/images/products/mc4-connectors.svg'],
    highlights: ['10 male + 10 female', 'IP68 when mated', 'Snap-lock retention'],
    specifications: {
      'Rated voltage': '1500 V DC (IEC)',
      'Rated current': '39 A with 6 mm² cable',
      'Contact material': 'Tinned copper, snap-lock',
      'Protection class': 'IP68 mated (1 m / 1 h)',
      Quantity: '10 male and 10 female',
    },
    applications: ['String connections', 'Waterproof cable joints'],
    warranty: 'Manufacturer quality guarantee',
    relatedServiceSlug: 'electrical-installation',
    featured: true,
  },
  {
    id: 'solar-installation-toolkit',
    slug: 'solar-installation-toolkit',
    name: 'Solar Installation Toolkit — 12 Piece',
    category: 'Installation Tools',
    brand: 'SolarPro Tools',
    shortSpec: 'Ratchet crimper · stripper · MC4 spanners · cutter',
    fullDescription:
      'The kit we hand a new technician on day one. A ratchet crimper that will not release until the crimp is complete is the single best guarantee of a joint that lasts.',
    price: 68000,
    priceFormatted: '₦68,000',
    availability: 'In Stock',
    image: '/images/products/installation-tools.svg',
    gallery: ['/images/products/installation-tools.svg'],
    highlights: ['2.5 / 4 / 6 mm² dies', 'Ratchet release crimper', 'Zipped carry case'],
    specifications: {
      'Crimper range': '2.5 / 4.0 / 6.0 mm² (AWG 14–10)',
      'Stripper range': '0.5–6.0 mm² automatic',
      Contents:
        '1 ratchet crimper, 1 stripper, 1 cable cutter, 2 MC4 spanners, 6 MC4 pairs, carry case',
      Weight: '1.8 kg',
    },
    applications: ['Solar installers', 'Field technicians', 'Maintenance teams'],
    warranty: '1-year replacement warranty',
    relatedServiceSlug: 'electrical-installation',
    featured: true,
  },
  {
    id: 'dc-combiner-surge-board',
    slug: 'dc-combiner-surge-protection-board',
    name: 'DC Combiner & Surge Protection Board',
    category: 'Accessories',
    brand: 'SolarPro Assembly',
    shortSpec: '600V rotary isolator · per-string fusing · Type 2 SPD',
    fullDescription:
      'Assembled and labelled in our workshop to match your array layout. It gives you one place to isolate the DC side safely for maintenance, and takes the lightning surge that would otherwise reach your inverter.',
    priceLabel: 'Quoted per array',
    availability: 'Available on Order',
    image: '/images/products/dc-isolator.svg',
    gallery: ['/images/products/dc-isolator.svg'],
    highlights: ['IP66 enclosure', 'Type 2 surge arrester', 'Built to your string count'],
    specifications: {
      Enclosure: 'IP66 polycarbonate, lockable',
      Isolator: '600 V DC rotary, load break',
      'String protection': 'Individual DC fuses per string',
      'Surge protection': 'Type 2 SPD, replaceable cartridges',
      Busbars: 'Tinned copper, positive and negative',
    },
    applications: ['Rooftop arrays', 'Ground-mounted arrays', 'System upgrades'],
    warranty: '2-year assembly warranty',
    relatedServiceSlug: 'electrical-installation',
  },
  {
    id: 'aluminium-mounting-kit',
    slug: 'aluminium-rail-mounting-kit',
    name: 'Anodised Aluminium Rail Mounting Kit',
    category: 'Accessories',
    brand: 'SolarPro Supply',
    shortSpec: '4.2m rails · mid and end clamps · roof hooks',
    fullDescription:
      'Anodised aluminium rail, stainless fixings and the right hook for your roof type. Galvanised steel looks cheaper on the invoice and rusts through in coastal air within a few years.',
    priceLabel: 'Quoted per roof',
    availability: 'In Stock',
    image: '/images/products/mounting-rails.svg',
    gallery: ['/images/products/mounting-rails.svg'],
    highlights: ['Anodised, marine-grade', 'Tile, sheet and flat-roof hooks', 'Stainless fasteners'],
    specifications: {
      'Rail section': '40 × 36 mm anodised aluminium',
      'Rail length': '4200 mm',
      Clamps: '35 mm mid clamps and end clamps',
      Fixings: 'A2 stainless hanger bolts with EPDM seals',
      'Roof types': 'Pitched tile, corrugated sheet, flat concrete',
    },
    applications: ['Pitched roofs', 'Metal sheet roofs', 'Flat roof ballast systems'],
    warranty: '10-year structural warranty',
    relatedServiceSlug: 'solar-panel-installation',
  },
];

/** Catalogue filters, in display order. */
export const productCategories: (ProductCategory | 'All')[] = [
  'All',
  'Panels',
  'Inverters',
  'Lithium Batteries',
  'Deep Cycle Batteries',
  'Charge Controllers',
  'Solar Cables',
  'MC4 Connectors',
  'Installation Tools',
  'Accessories',
];

/** Short labels for the home page category rail. */
export const productCategoryRail: { label: string; category: ProductCategory }[] = [
  { label: 'Solar Panels', category: 'Panels' },
  { label: 'Inverters', category: 'Inverters' },
  { label: 'Lithium Batteries', category: 'Lithium Batteries' },
  { label: 'Deep Cycle Batteries', category: 'Deep Cycle Batteries' },
  { label: 'Charge Controllers', category: 'Charge Controllers' },
  { label: 'Solar Cables', category: 'Solar Cables' },
  { label: 'MC4 Connectors', category: 'MC4 Connectors' },
  { label: 'Installation Tools', category: 'Installation Tools' },
];

export const getProductBySlug = (slug?: string) =>
  productsData.find((product) => product.slug === slug);

export const getRelatedProducts = (current: Product, limit = 3) =>
  productsData
    .filter((p) => p.id !== current.id && p.category === current.category)
    .concat(productsData.filter((p) => p.id !== current.id && p.category !== current.category))
    .slice(0, limit);

/** Formats a product price, or the quote-on-request label. */
export const formatPrice = (product: Product) =>
  product.priceFormatted ?? product.priceLabel ?? 'Request price';
