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
  tagline: string;
  taglineLead: string;
  taglineAccent: string;
  secondaryMessage: string;
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
  name: 'SolarPro Engineering',
  shortName: 'SolarPro',
  legalName: 'SolarPro Engineering Services',
  tagline: 'Reliable Solar Power. Professionally Installed.',
  taglineLead: 'Reliable Solar Power.',
  taglineAccent: 'Professionally Installed.',
  secondaryMessage:
    'Solar installation, inverter systems, batteries, maintenance and renewable energy solutions designed around your power needs.',
  foundedYear: 2018,
  rcNumber: 'RC — add your CAC number',

  leadEngineer: {
    name: 'Engr. Sam Adeyinka',
    title: 'Lead Solar & Renewable Energy Engineer',
    experienceYears: 8,
    completedProjects: 120,
    shortBio:
      'I design and install solar systems that are sized from measured load data — not guesswork — so they still perform in year five.',
    bio: "I'm a professional solar installation engineer focused on delivering reliable, efficient and cost-effective energy solutions for homes, businesses and institutions. Every system I install starts with a load audit and ends with a commissioning test you can read for yourself.",
    credentials: [
      'Certified Solar PV Installation Engineer',
      'Hybrid & Off-Grid Inverter System Design',
      'Lithium Energy Storage and BMS Integration',
      'Electrical Safety, Earthing & Surge Protection',
    ],
    image: '/images/about/engineer-portrait.jpg',
  },

  phone: '+2348135374919',
  phoneDisplay: '+234 813 537 4919',
  whatsapp: '2348135374919',
  whatsappDisplay: '+234 813 537 4919',
  email: 'hello@solarproengineering.com',

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
