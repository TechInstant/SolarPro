/**
 * SINGLE SOURCE OF TRUTH FOR BUSINESS DETAILS
 * ------------------------------------------------------------------
 * Change the values in this file and they update everywhere on the
 * site: navigation, footer, WhatsApp links, quote form, contact page,
 * phone links and page metadata. Nothing here is hardcoded elsewhere.
 */

export interface CompanyConfig {
  name: string;
  shortName: string;
  legalName: string;
  /** The four words under the logo and in the hero eyebrow. */
  pillars: string[];
  /** Full brand line: "Powering Possibilities. Securing the Future. Driven by Technology." */
  brandMessage: string;
  tagline: string;
  taglineLead: string;
  taglineAccent: string;
  taglineTail: string;
  secondaryMessage: string;
  /** One-line description of each half of the business. */
  divisions: {
    solar: { name: string; summary: string };
    security: { name: string; summary: string };
  };
  foundedYear: number;
  rcNumber: string;
  leadEngineer: {
    name: string;
    title: string;
    experienceYears: number;
    completedProjects: number;
    shortBio: string;
    bio: string;
    credentials: string[];
    image: string;
  };
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: string;
  city: string;
  state: string;
  country: string;
  serviceAreas: string[];
  mapQuery: string;
  businessHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export const companyConfig: CompanyConfig = {
  name: 'ELVOLTE',
  shortName: 'ELVOLTE',
  legalName: 'ELVOLTE',
  pillars: ['Power', 'Security', 'Tech', 'Possibility'],
  brandMessage: 'Powering Possibilities. Securing the Future. Driven by Technology.',
  tagline: 'Powering Possibilities. Securing the Future.',
  taglineLead: 'Powering Possibilities.',
  taglineAccent: 'Securing the Future.',
  taglineTail: 'Driven by Technology.',
  secondaryMessage:
    'Solar installation, inverters, batteries, CCTV cameras, electric fencing and barbed wire, smart security systems, access control and electrical solutions.',
  divisions: {
    solar: {
      name: 'Solar & Power',
      summary:
        'Solar installation, inverters, lithium batteries, panels, protective devices and electrical solutions.',
    },
    security: {
      name: 'CCTV & Security',
      summary:
        'CCTV cameras, electric fencing and barbed wire, smart security systems and access control.',
    },
  },
  foundedYear: 2018,
  rcNumber: 'RC — add your CAC number',

  leadEngineer: {
    name: 'Engr. Sam Adeyinka',
    title: 'Lead Engineer — Solar, Power & Security Systems',
    experienceYears: 8,
    completedProjects: 120,
    shortBio:
      'Power and security are designed together here: the cameras stay on because the inverter behind them was sized for it.',
    bio: "I'm a professional engineer focused on reliable power and dependable security for homes, businesses and institutions — solar and inverter systems, CCTV surveillance, electric fencing and access control. Every job starts with a site survey and ends with a test you can see for yourself.",
    credentials: [
      'Certified Solar PV Installation Engineer',
      'Hybrid & Off-Grid Inverter System Design',
      'CCTV, IP Surveillance & Remote Viewing Setup',
      'Electric Fencing, Access Control & Electrical Safety',
    ],
    image: '/images/about/engineer-portrait.jpg',
  },

  phone: '+2348135374919',
  phoneDisplay: '+234 813 537 4919',
  whatsapp: '2348135374919',
  whatsappDisplay: '+234 813 537 4919',
  // PLACEHOLDER — replace with the real ELVOLTE email before going live.
  email: 'info@elvolte.com',

  address: 'Plot 14, Commercial Avenue, Victoria Island',
  city: 'Lagos',
  state: 'Lagos State',
  country: 'Nigeria',
  serviceAreas: ['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Enugu'],
  mapQuery: 'Victoria Island, Lagos, Nigeria',

  businessHours: {
    weekdays: '8:00 AM – 6:00 PM',
    saturday: '9:00 AM – 4:00 PM',
    sunday: 'Emergency support only',
  },

  socialLinks: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
  },
};

export const companyLocation = `${companyConfig.city}, ${companyConfig.country}`;
export const companyFullAddress = `${companyConfig.address}, ${companyConfig.city}, ${companyConfig.country}`;
