export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  benefits: string[];
  process: string[];
  recommendedFor: string[];
  includedItems: string[];
  /** Short technical note shown on the service detail page. */
  leadTime: string;
}

export type ProjectCategory =
  | 'Residential'
  | 'Commercial'
  | 'Church'
  | 'Industrial'
  | 'Maintenance';

/** Each stage of the case study carries its own photograph and caption. */
export type GalleryStage = 'before' | 'installation' | 'equipment' | 'result' | 'detail';

export interface ProjectImage {
  src: string;
  stage: GalleryStage;
  caption: string;
  alt: string;
}

/** A measurable outcome, rendered as a figure + label pair. */
export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Extra tags used by the portfolio filter, e.g. 'Installation'. */
  tags: string[];
  location: string;
  capacity: string;
  completionDate: string;
  durationOnSite: string;
  clientType: string;
  summary: string;
  /** The five beats of the case study. */
  challenge: string;
  clientRequirement: string;
  solutionProvided: string;
  systemDesign: { label: string; value: string }[];
  equipmentUsed: string[];
  installationProcess: { title: string; detail: string }[];
  results: string[];
  metrics: ProjectMetric[];
  coverImage: string;
  coverAlt: string;
  gallery: ProjectImage[];
  featured?: boolean;
  /** True while the entry uses demonstration photography and copy. */
  isExample?: boolean;
}

export type ProductCategory =
  | 'Panels'
  | 'Inverters'
  | 'Lithium Batteries'
  | 'Deep Cycle Batteries'
  | 'Charge Controllers'
  | 'Solar Cables'
  | 'MC4 Connectors'
  | 'Installation Tools'
  | 'Accessories';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  brand: string;
  shortSpec: string;
  fullDescription: string;
  price?: number;
  priceFormatted?: string;
  priceLabel?: string;
  availability: 'In Stock' | 'Available on Order' | 'Limited Stock';
  image: string;
  gallery?: string[];
  /** Key figures shown on the card, before the full spec table. */
  highlights: string[];
  specifications: Record<string, string>;
  applications: string[];
  warranty: string;
  /** Services that pair with this product, by service slug. */
  relatedServiceSlug?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  systemInstalled: string;
  rating: number;
  comment: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  propertyType: string;
  currentPowerSource: string;
  serviceNeeded: string;
  appliances: string;
  budgetRange: string;
  message: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceRequired: string;
  message: string;
}

export interface ProductEnquiryData {
  productName: string;
  productBrand: string;
  quantity: number;
  fullName: string;
  phone: string;
  location: string;
  message: string;
}
