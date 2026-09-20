import React from 'react';
import { ArrowRight, MessageCircle, Check } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { SmartImage } from '../components/ui/SmartImage';
import { Stats } from '../components/ui/Stats';
import { Button } from '../components/ui/Button';
import { ProcessTimeline } from '../components/ui/ProcessTimeline';
import { companyConfig } from '../config/company';
import { siteImages } from '../config/images';
import { getWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';
import { useSeo } from '../hooks/useSeo';

const principles = [
  {
    title: 'Measure before you specify',
    detail:
      'Nameplate ratings lie. A week of logging on the distribution board tells you what the system actually has to carry, and it is the difference between a quote and a guess.',
  },
  {
    title: 'The protection is not the place to save',
    detail:
      'Isolators, fusing, surge arresters and earthing are the cheapest parts of the job and the ones that decide whether a fault becomes a fire.',
  },
  {
    title: 'Hand over the numbers',
    detail:
      'Every system leaves with a commissioning sheet: string voltages, earth resistance, torque settings and the load test result. It is yours, and any engineer can read it.',
  },
];

export const AboutPage: React.FC = () => {
  useSeo({
    title: `About ${companyConfig.leadEngineer.name}`,
    description: `${companyConfig.leadEngineer.name}, ${companyConfig.leadEngineer.title} — solar installation, inverter systems, battery storage and maintenance across ${companyConfig.serviceAreas.join(', ')}.`,
    image: siteImages.about.portrait,
  });

  const stats = [
    { value: `${companyConfig.leadEngineer.experienceYears} yrs`, label: 'Hands-on experience' },
    { value: `${companyConfig.leadEngineer.completedProjects}+`, label: 'Systems delivered' },
    { value: `${companyConfig.serviceAreas.length}`, label: 'Cities served' },
    { value: `${new Date().getFullYear() - companyConfig.foundedYear} yrs`, label: 'In business' },
  ];

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Experienced. Certified. Trusted."
        subtitle={companyConfig.leadEngineer.bio}
        breadcrumbItems={[{ label: 'About' }]}
        bgImage={siteImages.about.onSite}
      >
        <Stats items={stats} tone="dark" columns={4} className="max-w-3xl" />
      </PageHero>

      <section className="bg-cream-50 py-12 sm:py-16 lg:py-20">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
            <div>
              <SmartImage
                src={siteImages.about.portrait}
                alt={siteImages.about.portraitAlt}
                ratio="aspect-[4/5]"
                priority
                wrapperClassName="border border-cream-300"
              />
              <div className="border border-t-0 border-cream-300 bg-white px-5 py-4">
                <p className="font-display text-[16px] font-semibold text-navy">
                  {companyConfig.leadEngineer.name}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-muted">
                  {companyConfig.leadEngineer.title}
                </p>
              </div>

              <div className="mt-6 border border-cream-300 bg-white p-5">
                <p className="eyebrow">Qualifications</p>
                <ul className="mt-3 space-y-2.5">
                  {companyConfig.leadEngineer.credentials.map((credential) => (
                    <li key={credential} className="flex items-start gap-2.5 text-[14px] text-ink-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss-dark" strokeWidth={2} aria-hidden />
                      {credential}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="eyebrow">The approach</p>
              <h2 className="mt-4 text-display-sm font-semibold text-navy sm:text-display-md">
                Three things I will not shortcut
              </h2>

              <div className="mt-8 divide-y divide-cream-300 border-y border-cream-300">
                {principles.map((principle, index) => (
                  <div key={principle.title} className="py-6">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[11px] tracking-[0.14em] text-bronze">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-[18px] font-semibold text-navy">
                        {principle.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                      {principle.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <SmartImage
                  src={siteImages.about.onSite}
                  alt={siteImages.about.onSiteAlt}
                  ratio="aspect-[4/3]"
                  wrapperClassName="border border-cream-300"
                />
                <SmartImage
                  src={siteImages.about.workmanship}
                  alt={siteImages.about.workmanshipAlt}
                  ratio="aspect-[4/3]"
                  wrapperClassName="border border-cream-300"
                />
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  to="/quote"
                  trailingIcon={<ArrowRight className="h-4 w-4" strokeWidth={1.75} />}
                >
                  Request a quote
                </Button>
                <Button
                  href={getWhatsAppUrl(whatsappMessages.general)}
                  variant="outline"
                  leadingIcon={<MessageCircle className="h-4 w-4" strokeWidth={1.75} />}
                >
                  Talk to me directly
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-cream-300 bg-cream-100 py-12 sm:py-16 lg:py-20">
        <div className="shell">
          <p className="eyebrow">Where we work</p>
          <h2 className="mt-4 max-w-2xl text-display-sm font-semibold text-navy sm:text-display-md">
            Based in {companyConfig.city}, working across {companyConfig.serviceAreas.length} cities
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            {companyConfig.serviceAreas.join(', ')} — and further for commercial projects where the
            travel is worth it for both sides. If you are outside these areas, ask anyway.
          </p>

          <div className="mt-10">
            <ProcessTimeline
              steps={[
                { title: 'Consultation', detail: 'A conversation about load, budget and the building.' },
                { title: 'Survey & design', detail: 'Measurement on site, then a sized, itemised proposal.' },
                { title: 'Installation', detail: 'Built by the engineer who designed it.' },
                { title: 'Aftercare', detail: 'Maintenance, monitoring and a number that answers.' },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
};
