import React from 'react';
import { ArrowRight, MessageCircle, Smartphone, Moon, BellRing, BatteryCharging } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceCard } from '../cards/ServiceCard';
import { securityServices } from '../../data/services';
import { siteImages } from '../../config/images';
import { companyConfig } from '../../config/company';
import { getWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';

const features = [
  { Icon: Smartphone, label: 'Live view on your phone' },
  { Icon: Moon, label: 'Colour night vision' },
  { Icon: BellRing, label: 'Intrusion alerts' },
  { Icon: BatteryCharging, label: 'Runs through outages' },
];

export const SecuritySection: React.FC = () => (
  <section id="security" className="bg-cream-50 py-16 lg:py-20 border-t border-cream-200">
    <div className="shell">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-moss-dark">
            CCTV Surveillance &amp; Security
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-navy">
            Securing the Future.
          </h2>
          <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
            {companyConfig.divisions.security.summary} Designed, supplied and installed by the same
            team that powers them — so your cameras and fence keep working when the grid does not.
          </p>
        </div>

        <Link
          to="/services#security"
          className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-moss-dark hover:text-moss transition-colors shrink-0"
        >
          All Security Services
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Image panel */}
        <div className="lg:col-span-5">
          <div className="relative h-full min-h-[320px] overflow-hidden rounded-xl border border-navy-line bg-navy-deep shadow-lg sm:min-h-[400px]">
            <img
              src={siteImages.security.image}
              alt={siteImages.security.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <ul className="grid grid-cols-2 gap-2.5">
                {features.map(({ Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 rounded-lg border border-navy-line/80 bg-navy-deep/85 px-3 py-2.5 backdrop-blur-sm"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-moss-bright" strokeWidth={1.75} aria-hidden />
                    <span className="text-[12.5px] font-medium leading-tight text-cream">{label}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
                <Link
                  to="/quote"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-moss hover:bg-moss-dark px-4 py-3 text-[13.5px] font-semibold text-white transition-colors"
                >
                  Request a Security Survey
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
                <a
                  href={getWhatsAppUrl(whatsappMessages.security)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-navy-line bg-navy/80 hover:bg-navy px-4 py-3 text-[13.5px] font-semibold text-cream transition-colors"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={2} />
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Security services */}
        <div className="lg:col-span-7">
          <div className="grid gap-5 sm:grid-cols-2">
            {securityServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3 rounded-xl border border-cream-300/80 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[14.5px] font-bold text-navy">
                CCTV cameras &amp; installation materials
              </p>
              <p className="mt-1 text-[13px] text-ink-soft">
                Cameras, recorders, cable, PoE switches, fence energizers and access control — supplied
                on their own or installed.
              </p>
            </div>
            <Link
              to="/products?division=security"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-cream-300 bg-cream-50 hover:bg-white px-4 py-2.5 text-[13px] font-semibold text-navy transition-colors"
            >
              Shop Security Products
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);
