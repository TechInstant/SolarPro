import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { SmartImage } from '../ui/SmartImage';
import { companyConfig } from '../../config/company';
import { siteImages } from '../../config/images';
import { useReveal } from '../../hooks/useReveal';

const capabilities = [
  { title: 'Professional Installation', detail: 'Carried out and signed off by the engineer on site.' },
  { title: 'Quality Equipment', detail: 'Tier-1 modules, genuine inverters, traceable batteries.' },
  { title: 'System Design', detail: 'Sized from measured load, not from a price list.' },
  { title: 'Testing & Commissioning', detail: 'Documented results handed over with the system.' },
  { title: 'Maintenance & Support', detail: 'Scheduled servicing and a number that answers.' },
  { title: 'Fault Diagnosis', detail: 'Including systems installed by somebody else.' },
];

export const EngineerSection: React.FC = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="engineer" className="bg-cream-50 py-16 sm:py-20 lg:py-24">
      <div ref={ref} className="shell reveal">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <div className="relative">
            <SmartImage
              src={siteImages.about.portrait}
              alt={siteImages.about.portraitAlt}
              ratio="aspect-[4/5]"
              wrapperClassName="border border-cream-300"
            />
            {/* Name plate — deliberately reads like a stamped drawing title block. */}
            <div className="border border-t-0 border-cream-300 bg-white px-5 py-4">
              <p className="font-display text-[16px] font-semibold text-navy">
                {companyConfig.leadEngineer.name}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-muted">
                {companyConfig.leadEngineer.title}
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow">About the engineer</p>
            <h2 className="mt-4 text-display-sm font-semibold text-navy sm:text-display-md">
              Experienced. Certified. Trusted.
            </h2>

            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink-soft">
              I'm a professional solar installation engineer focused on delivering reliable,
              efficient and cost-effective energy solutions for homes, businesses and institutions.
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              {companyConfig.leadEngineer.shortBio}
            </p>

            <ul className="mt-8 grid gap-px bg-cream-300 sm:grid-cols-2">
              {capabilities.map((item) => (
                <li key={item.title} className="bg-cream-50 px-4 py-4 sm:px-5">
                  <span className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss-dark" strokeWidth={2} aria-hidden />
                    <span>
                      <span className="block text-[14.5px] font-medium text-navy">{item.title}</span>
                      <span className="mt-1 block text-[13.5px] leading-snug text-ink-muted">
                        {item.detail}
                      </span>
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                to="/about"
                trailingIcon={<ArrowRight className="h-4 w-4" strokeWidth={1.75} />}
              >
                About me
              </Button>
              <Button to="/projects" variant="outline">
                See the work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
