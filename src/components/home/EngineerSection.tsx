import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Tag, Cpu, LifeBuoy, Wrench, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteImages } from '../../config/images';

const whyChooseItems = [
  {
    icon: HardHat,
    title: 'Professional Installation',
    detail: 'By certified and experienced hands.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Equipment',
    detail: 'Genuine and durable products.',
  },
  {
    icon: Tag,
    title: 'Transparent Pricing',
    detail: 'No hidden costs.',
  },
  {
    icon: Cpu,
    title: 'Proper System Design',
    detail: 'Tailored to your site and needs.',
  },
  {
    icon: LifeBuoy,
    title: 'After-Sales Support',
    detail: "We're with you always.",
  },
  {
    icon: Wrench,
    title: 'Maintenance Services',
    detail: 'Keep your system running.',
  },
];

const howItWorksSteps = [
  {
    step: '01',
    title: 'Tell Us What You Need',
    detail: 'Power, security, or both — and where.',
  },
  {
    step: '02',
    title: 'Get a System Recommendation',
    detail: 'We design the right solution for you.',
  },
  {
    step: '03',
    title: 'Installation & Testing',
    detail: 'Professional setup and full testing.',
  },
  {
    step: '04',
    title: 'Ongoing Support',
    detail: 'Maintenance and customer care.',
  },
];

export const EngineerSection: React.FC = () => {
  return (
    <section id="about" className="bg-cream-100 py-16 lg:py-20 border-t border-cream-200">
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Column 1: About the Engineer (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            {/* Portrait image - large and prominent on mobile & desktop */}
            <div className="w-full max-w-xs sm:w-48 lg:w-52 shrink-0 rounded-2xl overflow-hidden shadow-lg border border-cream-300 bg-white">
              <img
                src={siteImages.about.portrait}
                alt={siteImages.about.portraitAlt}
                className="w-full h-72 sm:h-80 lg:h-84 object-cover object-top transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Engineer Info */}
            <div className="flex-1 text-left">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-moss-dark">
                About the Engineer
              </p>
              <h2 className="mt-1.5 text-xl sm:text-2xl font-bold tracking-tight text-navy">
                Experienced. Certified. Trusted.
              </h2>
              <p className="mt-2.5 text-[13px] leading-relaxed text-ink-soft">
                I'm a professional engineer with years of hands-on experience in solar power and security systems. I deliver reliable, efficient and cost-effective solar, CCTV and access control installations for homes, businesses and institutions.
              </p>

              {/* 4 Checkmarks */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[12.5px] font-medium text-navy">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-moss-dark shrink-0" />
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-moss-dark shrink-0" />
                  <span>Certified Solar Installer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-moss-dark shrink-0" />
                  <span>CCTV & Security Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-moss-dark shrink-0" />
                  <span>50+ Projects Completed</span>
                </div>
              </div>

              <div className="mt-5">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 bg-white hover:bg-cream-50 px-5 py-2 text-[13px] font-semibold text-navy shadow-sm transition-colors"
                >
                  About Me
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>


          {/* Column 2: Why Choose Us (4 cols on lg) */}
          <div className="lg:col-span-4 lg:border-l lg:border-cream-300 lg:pl-8">
            <h3 className="text-base font-bold uppercase tracking-wider text-navy mb-5">
              Why Choose Us
            </h3>

            <div className="space-y-4">
              {whyChooseItems.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-moss/15 text-moss-dark">
                    <item.icon className="h-3.5 w-3.5" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-[13.5px] font-bold text-navy leading-tight">{item.title}</h4>
                    <p className="text-[12px] text-ink-muted leading-tight mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: How It Works (3 cols on lg) */}
          <div className="lg:col-span-3 lg:border-l lg:border-cream-300 lg:pl-8">
            <h3 className="text-base font-bold uppercase tracking-wider text-navy mb-5">
              How It Works
            </h3>

            <div className="relative space-y-6">
              {/* Connecting vertical line */}
              <div className="absolute left-3.5 top-3 bottom-3 w-0.5 bg-moss/20 -z-0" />

              {howItWorksSteps.map((step) => (
                <div key={step.step} className="relative z-10 flex items-start gap-3.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-moss text-white font-mono text-xs font-bold shadow-sm">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-[13.5px] font-bold text-navy leading-tight">{step.title}</h4>
                    <p className="text-[12px] text-ink-muted leading-tight mt-0.5">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

