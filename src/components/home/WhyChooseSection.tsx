import React from 'react';
import {
  HardHat,
  ShieldCheck,
  Receipt,
  DraftingCompass,
  LifeBuoy,
  Wrench,
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { useReveal } from '../../hooks/useReveal';

const reasons = [
  {
    Icon: HardHat,
    title: 'Professional Installation',
    detail: 'The engineer who quotes the job is on site while it is built.',
  },
  {
    Icon: ShieldCheck,
    title: 'Quality Equipment',
    detail: 'Tier-1 modules and genuine inverters, with warranty paperwork.',
  },
  {
    Icon: Receipt,
    title: 'Transparent Pricing',
    detail: 'An itemised quote: every panel, cable and hour of labour.',
  },
  {
    Icon: DraftingCompass,
    title: 'Proper System Design',
    detail: 'Sized against your measured load, with the workings shown.',
  },
  {
    Icon: LifeBuoy,
    title: 'After-Sales Support',
    detail: 'One number, answered by the person who built the system.',
  },
  {
    Icon: Wrench,
    title: 'Maintenance Services',
    detail: 'Scheduled servicing that keeps output where it started.',
  },
];

export const WhyChooseSection: React.FC = () => {
  const ref = useReveal<HTMLUListElement>();

  return (
    <section className="border-y border-cream-300 bg-cream-100 py-16 sm:py-20 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="Why work with us"
          title="Six things we do not compromise on"
          description="Solar is only as good as the workmanship behind it. These are the standards every job is held to."
        />

        <ul ref={ref} className="reveal mt-10 grid gap-px bg-cream-300 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ Icon, title, detail }) => (
            <li key={title} className="bg-cream-100 px-5 py-7 sm:px-7 sm:py-8">
              <Icon className="h-6 w-6 text-bronze" strokeWidth={1.3} aria-hidden />
              <h3 className="mt-5 font-display text-[17px] font-semibold text-navy">{title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft">{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
