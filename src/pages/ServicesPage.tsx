import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { ServiceCard } from '../components/cards/ServiceCard';
import { ProcessTimeline } from '../components/ui/ProcessTimeline';
import { Button } from '../components/ui/Button';
import { solarServices, securityServices } from '../data/services';
import { companyConfig } from '../config/company';
import { getWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';
import { useSeo } from '../hooks/useSeo';

const process = [
  { title: 'Site visit and survey', detail: 'We measure your load and walk your perimeter before quoting anything.' },
  { title: 'Design and itemised quote', detail: 'Equipment, cabling, protection and labour, priced line by line.' },
  { title: 'Installation', detail: 'Mounting, wiring, earthing and protection to specification.' },
  { title: 'Commissioning and handover', detail: 'Tested, documented, and explained to you.' },
];

const divisions = [
  {
    id: 'solar',
    eyebrow: companyConfig.divisions.solar.name,
    title: 'Complete Solar Solutions',
    summary: companyConfig.divisions.solar.summary,
    services: solarServices,
    cta: whatsappMessages.installation,
  },
  {
    id: 'security',
    eyebrow: companyConfig.divisions.security.name,
    title: 'CCTV Surveillance & Security',
    summary: companyConfig.divisions.security.summary,
    services: securityServices,
    cta: whatsappMessages.security,
  },
];

export const ServicesPage: React.FC = () => {
  useSeo({
    title: 'Solar, CCTV & Security Services',
    description: companyConfig.secondaryMessage,
  });

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Power and Security, Professionally Installed"
        subtitle={companyConfig.secondaryMessage}
        breadcrumbItems={[{ label: 'Services' }]}
      >
        <div className="flex flex-wrap gap-2.5">
          {divisions.map((division) => (
            <a
              key={division.id}
              href={`#${division.id}`}
              className="inline-flex items-center gap-2 rounded-md border border-navy-line bg-navy-deep/60 px-4 py-2.5 text-[13.5px] font-semibold text-cream transition-colors hover:border-moss"
            >
              {division.eyebrow}
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </a>
          ))}
        </div>
      </PageHero>

      <section className="bg-cream-50 py-12 sm:py-16 lg:py-20">
        <div className="shell">
          {divisions.map((division, index) => (
            <div
              key={division.id}
              id={division.id}
              className={index > 0 ? 'mt-16 scroll-mt-28 border-t border-cream-300 pt-12' : 'scroll-mt-28'}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="font-mono text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-moss-dark">
                    {division.eyebrow}
                  </p>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-navy">
                    {division.title}
                  </h2>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{division.summary}</p>
                </div>
                <Button
                  href={getWhatsAppUrl(division.cta)}
                  variant="whatsapp"
                  size="sm"
                  leadingIcon={<MessageCircle className="h-4 w-4" strokeWidth={1.75} />}
                  className="shrink-0 rounded-md"
                >
                  Ask about {division.eyebrow}
                </Button>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {division.services.map((service, i) => (
                  <ServiceCard key={service.id} service={service} index={i} />
                ))}
              </div>
            </div>
          ))}

          <div className="mt-16 border-t border-cream-300 pt-12">
            <p className="eyebrow">How we work</p>
            <h2 className="mt-4 max-w-2xl text-display-sm font-semibold text-navy sm:text-display-md">
              Every job follows the same four stages
            </h2>
            <div className="mt-12">
              <ProcessTimeline steps={process} />
            </div>
          </div>

          <div className="mt-16 grid gap-px border border-cream-300 bg-cream-300 md:grid-cols-2">
            <div className="bg-white p-6 sm:p-8">
              <h2 className="font-display text-[20px] font-semibold text-navy">
                Not sure which service you need?
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                Describe the problem in plain words — the generator, the bill, the beeping inverter
                — and we will tell you which of these applies, or whether none of them does.
              </p>
              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <Button
                  href={getWhatsAppUrl(whatsappMessages.consultation)}
                  variant="whatsapp"
                  leadingIcon={<MessageCircle className="h-4 w-4" strokeWidth={1.75} />}
                >
                  Describe the problem
                </Button>
                <Button
                  to="/quote"
                  variant="outline"
                  trailingIcon={<ArrowRight className="h-4 w-4" strokeWidth={1.75} />}
                >
                  Request a quote
                </Button>
              </div>
            </div>
            <div className="bg-cream-100 p-6 sm:p-8">
              <h2 className="font-display text-[20px] font-semibold text-navy">
                Already have a system?
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                We service systems we did not install. Output dropping, batteries not holding,
                error codes on the inverter — book a diagnostic visit and get a written finding.
              </p>
              <div className="mt-6">
                <Button
                  to="/services/fault-diagnosis-repairs"
                  variant="outline"
                  trailingIcon={<ArrowRight className="h-4 w-4" strokeWidth={1.75} />}
                >
                  Fault diagnosis & repairs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
