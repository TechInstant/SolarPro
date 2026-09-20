import React from 'react';
import { ArrowRight, Zap, ShieldCheck, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../../config/company';
import { siteImages } from '../../config/images';

const credibility = [
  { icon: Zap, title: 'Clean Energy', detail: 'A greener tomorrow' },
  { icon: ShieldCheck, title: 'Reliable Systems', detail: 'Built to last' },
  { icon: Settings, title: 'Expert Installation', detail: 'By certified engineers' },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center overflow-hidden bg-navy pt-[80px] pb-16 lg:pb-20">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <img
          src={siteImages.hero.image}
          alt=""
          className="h-full w-full object-cover object-center lg:object-[center_35%]"
        />
        {/* Dark gradient overlay matching the mockup (dark on left, exposing technician on right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy/90 to-navy/40 lg:to-transparent" />
        <div className="absolute inset-0 bg-navy-deep/40 lg:bg-transparent" />
      </div>

      <div className="shell relative z-10 w-full">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-12">
          {/* Left Hero Content */}
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-moss-bright">
              Renewable Energy Solutions
            </p>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-cream sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              {companyConfig.taglineLead}
              <br />
              <span className="text-moss-bright">{companyConfig.taglineAccent}</span>
            </h1>

            <p className="mt-5 max-w-xl text-[15px] sm:text-[16px] leading-relaxed text-cream-200/90">
              {companyConfig.secondaryMessage}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 rounded-md bg-moss hover:bg-moss-dark px-6 py-3.5 text-[14.5px] font-medium text-white shadow-md transition-all duration-200 hover:shadow-lg"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center rounded-md border border-navy-line bg-navy/80 hover:bg-navy px-6 py-3.5 text-[14.5px] font-medium text-cream shadow-sm transition-all duration-200 hover:border-cream/30"
              >
                View Our Projects
              </Link>
            </div>
          </div>

          {/* Right Floating Credibility Card */}
          <div className="flex justify-start lg:justify-end">
            <div className="w-full max-w-xs rounded-xl border border-navy-line/80 bg-navy-deep/85 p-6 backdrop-blur-md shadow-2xl">
              <ul className="space-y-6">
                {credibility.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-moss/20 text-moss-bright border border-moss/30">
                      <item.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-[14.5px] font-semibold text-cream">{item.title}</h3>
                      <p className="mt-0.5 text-[12.5px] text-cream-300/70">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

