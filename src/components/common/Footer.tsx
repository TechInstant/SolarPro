import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { companyConfig } from '../../config/company';
import { getWhatsAppUrl, whatsappMessages, telUrl } from '../../utils/whatsapp';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Products', to: '/products' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const serviceLinks = [
  { label: 'Solar Installation', to: '/services/solar-panel-installation' },
  { label: 'Inverter Installation', to: '/services/inverter-installation' },
  { label: 'Battery Systems', to: '/services/battery-energy-storage' },
  { label: 'Maintenance', to: '/services/solar-system-maintenance' },
  { label: 'Consultation & Design', to: '/services/solar-system-design' },
];

const productLinks = [
  { label: 'Solar Panels', to: '/products?category=Panels' },
  { label: 'Inverters', to: '/products?category=Inverters' },
  { label: 'Batteries', to: '/products?category=Lithium+Batteries' },
  { label: 'Cables & Connectors', to: '/products?category=Solar+Cables' },
  { label: 'Installation Tools', to: '/products?category=Installation+Tools' },
];

const socials = [
  { key: 'facebook', label: 'Facebook', icon: <FacebookIcon />, href: companyConfig.socialLinks.facebook },
  { key: 'instagram', label: 'Instagram', icon: <InstagramIcon />, href: companyConfig.socialLinks.instagram },
  { key: 'linkedin', label: 'LinkedIn', icon: <LinkedinIcon />, href: companyConfig.socialLinks.linkedin },
  { key: 'youtube', label: 'YouTube', icon: <YoutubeIcon />, href: companyConfig.socialLinks.youtube },
].filter((s) => Boolean(s.href));

export const Footer: React.FC = () => (
  <footer className="border-t border-navy-line bg-navy-deep">
    <div className="shell py-14 sm:py-16">
      <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-12">
        {/* Brand */}
        <div className="col-span-2 lg:col-span-4">
          <Logo tone="dark" />
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-cream-300/70">
            Solar installation, inverter systems, batteries and maintenance — designed,
            installed and commissioned by a qualified engineer.
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map((social) => (
              <a
                key={social.key}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center border border-navy-line text-cream-300/70 transition-colors hover:border-moss hover:text-moss-bright"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <nav className="lg:col-span-2" aria-label="Quick links">
          <h2 className="eyebrow mb-4 text-cream-300/60">Quick Links</h2>
          <ul className="space-y-3 text-[15px]">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-cream-300/75 transition-colors hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="lg:col-span-2" aria-label="Services">
          <h2 className="eyebrow mb-4 text-cream-300/60">Services</h2>
          <ul className="space-y-3 text-[15px]">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-cream-300/75 transition-colors hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="lg:col-span-2" aria-label="Products">
          <h2 className="eyebrow mb-4 text-cream-300/60">Products</h2>
          <ul className="space-y-3 text-[15px]">
            {productLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-cream-300/75 transition-colors hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-2 lg:col-span-2">
          <h2 className="eyebrow mb-4 text-cream-300/60">Contact</h2>
          <ul className="space-y-3.5 text-[15px]">
            <li>
              <a
                href={telUrl}
                className="flex items-start gap-2.5 text-cream-300/75 transition-colors hover:text-cream"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-moss" strokeWidth={1.5} />
                {companyConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={getWhatsAppUrl(whatsappMessages.general)}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2.5 text-cream-300/75 transition-colors hover:text-cream"
              >
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-moss" strokeWidth={1.5} />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${companyConfig.email}`}
                className="flex items-start gap-2.5 break-all text-cream-300/75 transition-colors hover:text-cream"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-moss" strokeWidth={1.5} />
                {companyConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-cream-300/75">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-moss" strokeWidth={1.5} />
              <span>
                {companyConfig.address}
                <br />
                {companyConfig.city}, {companyConfig.country}
              </span>
            </li>
            <li className="flex items-start gap-2.5 text-cream-300/75">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-moss" strokeWidth={1.5} />
              <span>
                Mon–Fri {companyConfig.businessHours.weekdays}
                <br />
                Sat {companyConfig.businessHours.saturday}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-navy-line">
      <div className="shell flex flex-col items-center justify-between gap-4 py-6 font-mono text-[11px] uppercase tracking-[0.12em] text-cream-300/50 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {companyConfig.name}
        </p>
        <div className="flex items-center gap-6">
          <Link to="/quote" className="transition-colors hover:text-cream">
            Request a Quote
          </Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-cream"
          >
            Top
            <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </div>
  </footer>
);
