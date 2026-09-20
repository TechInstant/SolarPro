import React from 'react';
import { Phone, MessageCircle, ShieldCheck, Clock, Receipt } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { QuoteForm } from '../components/forms/QuoteForm';
import { Button } from '../components/ui/Button';
import { companyConfig } from '../config/company';
import { getWhatsAppUrl, whatsappMessages, telUrl } from '../utils/whatsapp';
import { useSeo } from '../hooks/useSeo';

const assurances = [
  {
    Icon: Receipt,
    title: 'Itemised, not a lump sum',
    detail: 'Every module, cable, hour and margin is listed so you can compare like for like.',
  },
  {
    Icon: Clock,
    title: 'A reply within a working day',
    detail: 'Usually sooner. If the job needs a site visit to price properly, we will say so.',
  },
  {
    Icon: ShieldCheck,
    title: 'No pressure to buy',
    detail: 'If solar is the wrong answer for your situation, that is what you will be told.',
  },
];

export const QuotePage: React.FC = () => {
  useSeo({
    title: 'Request a Solar Quote',
    description:
      'Tell us your power needs and get a sized, itemised solar quote — system design, equipment and installation, for homes and businesses.',
  });

  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="Tell us what has to stay on."
        subtitle="Answer a few questions about your property and your load. It takes about two minutes, and it gives the engineer enough to size a system properly rather than guess at it."
        breadcrumbItems={[{ label: 'Request a Quote' }]}
      />

      <section className="bg-cream-50 py-12 sm:py-16 lg:py-20">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-14">
            <div className="border border-cream-300 bg-white p-5 sm:p-8">
              <QuoteForm />
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <ul className="grid gap-px border border-cream-300 bg-cream-300">
                {assurances.map(({ Icon, title, detail }) => (
                  <li key={title} className="bg-white px-5 py-5">
                    <Icon className="h-5 w-5 text-bronze" strokeWidth={1.4} aria-hidden />
                    <h2 className="mt-3.5 font-display text-[16px] font-semibold text-navy">
                      {title}
                    </h2>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{detail}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border border-cream-300 bg-navy p-6">
                <h2 className="font-display text-[18px] font-semibold text-cream">
                  Prefer to just talk?
                </h2>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-cream-300/75">
                  Call or send a message and describe the property. The form only exists to save
                  you repeating yourself.
                </p>
                <div className="mt-5 space-y-2.5">
                  <Button
                    href={getWhatsAppUrl(whatsappMessages.quote)}
                    variant="whatsapp"
                    fullWidth
                    leadingIcon={<MessageCircle className="h-4 w-4" strokeWidth={1.75} />}
                  >
                    Message on WhatsApp
                  </Button>
                  <Button
                    href={telUrl}
                    variant="outlineLight"
                    fullWidth
                    leadingIcon={<Phone className="h-4 w-4" strokeWidth={1.75} />}
                  >
                    {companyConfig.phoneDisplay}
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};
