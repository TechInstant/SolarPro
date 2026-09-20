import React from 'react';
import { ArrowRight, Leaf, ShieldCheck, Wrench, ArrowDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { SmartImage } from '../ui/SmartImage';
import { companyConfig } from '../../config/company';
import { siteImages } from '../../config/images';
import { cn } from '../../utils/cn';

const credibility = [
  { icon: Leaf, title: 'Clean Energy', detail: 'A greener tomorrow' },
  { icon: ShieldCheck, title: 'Reliable Systems', detail: 'Built to last' },
  { icon: Wrench, title: 'Expert Installation', detail: 'Professional workmanship' },
];

export const HeroSection: React.FC = () => {
  const split = siteImages.hero.layout === 'split';

  return (
    <section className="relative overflow-hidden bg-navy pt-[104px] sm:pt-[116px] lg:pt-[150px]">
      <div className="absolute inset-0 blueprint opacity-70" aria-hidden />

      {/* Full-bleed variant keeps the photograph behind the copy. */}
      {!split && (
        <div className="absolute inset-0" aria-hidden>
          <img
            src={siteImages.hero.image}
            alt=""
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
        </div>
      )}

      <div className="shell relative pb-14 sm:pb-16 lg:pb-20">
        <div
          className={cn(
            'grid items-center gap-10 lg:gap-14',
            split ? 'lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]' : 'lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]'
          )}
        >
          <div>
            <p className="eyebrow">Renewable energy engineering</p>

            <h1 className="mt-5 text-display-md font-semibold text-cream sm:text-display-lg lg:text-display-xl">
              {companyConfig.taglineLead}
              <br className="hidden sm:block" />{' '}
              <span className="text-moss-bright">{companyConfig.taglineAccent}</span>
            </h1>

            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-cream-300/80 sm:text-[17px]">
              {companyConfig.secondaryMessage}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                to="/quote"
                size="lg"
                trailingIcon={<ArrowRight className="h-4 w-4" strokeWidth={1.75} />}
                className="sm:w-auto"
              >
                Request a Quote
              </Button>
              <Button to="/projects" size="lg" variant="outlineLight">
                View Our Projects
              </Button>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-px border border-navy-line bg-navy-line sm:mt-12">
              {[
                { value: `${companyConfig.leadEngineer.completedProjects}+`, label: 'Systems delivered' },
                { value: `${companyConfig.leadEngineer.experienceYears} yrs`, label: 'On the tools' },
                { value: companyConfig.serviceAreas.length.toString(), label: 'Cities covered' },
              ].map((stat) => (
                <div key={stat.label} className="bg-navy px-3 py-4 sm:px-5 sm:py-5">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-[20px] font-semibold text-cream sm:text-[26px]">
                      {stat.value}
                    </span>
                    <span className="mt-1.5 block font-mono text-[10px] uppercase leading-tight tracking-[0.1em] text-cream-300/55 sm:text-[11px]">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            {split && (
              <div className="relative">
                {/* Bronze register mark behind the photograph. */}
                <span
                  aria-hidden
                  className="absolute -left-3 -top-3 hidden h-24 w-24 border-l-2 border-t-2 border-bronze/70 lg:block"
                />
                <SmartImage
                  src={siteImages.hero.image}
                  alt={siteImages.hero.alt}
                  ratio="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]"
                  priority
                  wrapperClassName="border border-navy-line"
                />
              </div>
            )}

            <ul
              className={cn(
                'grid gap-px border border-navy-line bg-navy-line',
                split ? 'mt-px grid-cols-1 sm:grid-cols-3 lg:grid-cols-1' : 'grid-cols-1'
              )}
            >
              {credibility.map((item) => (
                <li key={item.title} className="flex items-center gap-3.5 bg-navy-deep px-4 py-4 sm:px-5">
                  <item.icon className="h-5 w-5 shrink-0 text-moss-bright" strokeWidth={1.4} aria-hidden />
                  <span>
                    <span className="block text-[14.5px] font-medium text-cream">{item.title}</span>
                    <span className="mt-0.5 block text-[13px] text-cream-300/60">{item.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a
          href="#services"
          className="mt-12 hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-cream-300/50 transition-colors hover:text-cream lg:inline-flex"
        >
          <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.75} />
          Scroll to explore
        </a>
      </div>
    </section>
  );
};
