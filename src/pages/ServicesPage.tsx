import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { ServiceCard } from '../components/cards/ServiceCard';
import { ProcessTimeline } from '../components/ui/ProcessTimeline';
import { Button } from '../components/ui/Button';
import { servicesData } from '../data/services';
import { getWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';
import { useSeo } from '../hooks/useSeo';

const process = [
  { title: 'Site visit and load audit', detail: 'We measure what you actually use before quoting anything.' },
  { title: 'Design and itemised quote', detail: 'Array, inverter, storage and protection, priced line by line.' },
  { title: 'Installation', detail: 'Mounting, wiring, earthing and protection to specification.' },
  { title: 'Commissioning and handover', detail: 'Tested under load, documented, and explained to you.' },
];

export const ServicesPage: React.FC = () => {
  useSeo({
    title: 'Solar Installation & Maintenance Services',
    description:
      'Solar panel installation, inverter systems, battery storage, system design, electrical works, maintenance, fault diagnosis and commercial solar solutions.',
  });

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Complete Solar Solutions"
        subtitle="From consultation to installation and ongoing support, we provide end-to-end solar solutions for homes, businesses and institutions."
        breadcrumbItems={[{ label: 'Services' }]}
      />

      <section className="bg-cream-50 py-12 sm:py-16 lg:py-20">
        <div className="shell">
          <div className="grid gap-px bg-cream-300 sm:grid-cols-2 lg:grid-cols-4">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} className="border-0" />
            ))}
          </div>

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
