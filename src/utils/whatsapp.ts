import { companyConfig } from '../config/company';
import type { ContactFormData, ProductEnquiryData, QuoteFormData } from '../types';

/** Strips everything but digits, which is what wa.me expects. */
export function formatWhatsAppNumber(phone: string): string {
  return phone.replace(/[^0-9]/g, '');
}

/**
 * Builds a WhatsApp chat link for the configured business number.
 * Every call site passes its own message so the engineer always knows
 * which page or product the enquiry came from.
 */
export function getWhatsAppUrl(message?: string): string {
  const number = formatWhatsAppNumber(companyConfig.whatsapp);
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

const brand = companyConfig.name;
const divider = '—'.repeat(18);

/** Short contextual openers used by buttons around the site. */
export const whatsappMessages = {
  general: `Hello ${brand}, I would like to speak to an engineer about a solar system.`,
  quote: `Hello ${brand}, I would like to request a quote for a solar system.`,
  installation: `Hello ${brand}, I need help with a solar installation.`,
  maintenance: `Hello ${brand}, I would like to book a maintenance visit for an existing solar system.`,
  consultation: `Hello ${brand}, I would like to book a consultation about going solar.`,
  service: (title: string) => `Hello ${brand}, I am interested in your ${title} service.`,
  product: (name: string) => `Hello ${brand}, I am interested in the ${name}. Is it available, and what is the price?`,
  productPrice: (name: string) => `Hello ${brand}, please send me the current price for the ${name}.`,
  project: (title: string, location: string) =>
    `Hello ${brand}, I saw the ${title} project in ${location} and I would like a similar system for my property.`,
};

/** Full quote request, formatted so it is readable in the WhatsApp chat. */
export function getQuoteWhatsAppMessage(data: QuoteFormData): string {
  return [
    `*NEW QUOTE REQUEST · ${brand}*`,
    divider,
    `Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
    data.email ? `Email: ${data.email}` : null,
    `Location: ${data.location}`,
    `Property type: ${data.propertyType}`,
    `Current power source: ${data.currentPowerSource}`,
    `What is needed: ${data.serviceNeeded}`,
    data.appliances ? `Appliances / load: ${data.appliances}` : null,
    data.budgetRange ? `Budget: ${data.budgetRange}` : null,
    data.message ? `Notes: ${data.message}` : null,
    divider,
    'Sent from the website quote form.',
  ]
    .filter(Boolean)
    .join('\n');
}

/** Product enquiry from the catalogue modal. */
export function getProductWhatsAppMessage(data: ProductEnquiryData): string {
  return [
    `*PRODUCT ENQUIRY · ${brand}*`,
    divider,
    `Product: ${data.productName}`,
    `Brand: ${data.productBrand}`,
    `Quantity: ${data.quantity}`,
    `Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
    data.location ? `Delivery location: ${data.location}` : null,
    data.message ? `Notes: ${data.message}` : null,
    divider,
    'Sent from the website product catalogue.',
  ]
    .filter(Boolean)
    .join('\n');
}

/** General message from the contact page form. */
export function getContactWhatsAppMessage(data: ContactFormData): string {
  return [
    `*WEBSITE ENQUIRY · ${brand}*`,
    divider,
    `Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
    data.email ? `Email: ${data.email}` : null,
    `Regarding: ${data.serviceRequired}`,
    `Message: ${data.message}`,
    divider,
    'Sent from the website contact form.',
  ]
    .filter(Boolean)
    .join('\n');
}

/** Fallback for people who would rather email than use WhatsApp. */
export function getMailtoUrl(subject: string, body: string): string {
  return `mailto:${companyConfig.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export const telUrl = `tel:${companyConfig.phone}`;
