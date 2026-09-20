import React from 'react';
import { ArrowRight, MessageCircle, Phone, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { companyConfig } from '../../config/company';
import { getWhatsAppUrl, whatsappMessages, telUrl } from '../../utils/whatsapp';

export const ContactCtaSection: React.FC = () => (
  <section className="relative overflow-hidden bg-navy-deep py-16 sm:py-20 lg:py-24">
    <div className="absolute inset-0 blueprint opacity-60" aria-hidden />

    <div className="shell relative">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
        <div className="rule-tick-dark">
          <p className="eyebrow mb-3">Next step</p>
          <h2 className="text-display-sm font-semibold text-cream sm:text-display-md">
            Let's Build Your Energy Solution.
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-cream-300/75">
            Tell us what you need and we'll help you determine the right solar solution — the
            system size, the equipment and what it will cost, before anyone climbs a roof.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              to="/quote"
              size="lg"
              trailingIcon={<ArrowRight className="h-4 w-4" strokeWidth={1.75} />}
            >
              Request a Quote
            </Button>
            <Button
              href={getWhatsAppUrl(whatsappMessages.general)}
              size="lg"
              variant="whatsapp"
              leadingIcon={<MessageCircle className="h-4 w-4" strokeWidth={1.75} />}
            >
              Chat With an Engineer
            </Button>
          </div>
        </div>

        <ul className="grid gap-px self-start border border-navy-line bg-navy-line">
          <li>
            <a
              href={telUrl}
              className="group flex items-center gap-4 bg-navy px-5 py-5 transition-colors hover:bg-navy-800"
            >
              <Phone className="h-5 w-5 shrink-0 text-moss-bright" strokeWidth={1.4} aria-hidden />
              <span className="min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-cream-300/50">
                  Call the engineer
                </span>
                <span className="mt-1 block text-[15px] text-cream">
                  {companyConfig.phoneDisplay}
                </span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={getWhatsAppUrl(whatsappMessages.quote)}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 bg-navy px-5 py-5 transition-colors hover:bg-navy-800"
            >
              <MessageCircle className="h-5 w-5 shrink-0 text-moss-bright" strokeWidth={1.4} aria-hidden />
              <span className="min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-cream-300/50">
                  WhatsApp
                </span>
                <span className="mt-1 block text-[15px] text-cream">
                  {companyConfig.whatsappDisplay}
                </span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={`mailto:${companyConfig.email}`}
              className="group flex items-center gap-4 bg-navy px-5 py-5 transition-colors hover:bg-navy-800"
            >
              <Mail className="h-5 w-5 shrink-0 text-moss-bright" strokeWidth={1.4} aria-hidden />
              <span className="min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-cream-300/50">
                  Email
                </span>
                <span className="mt-1 block break-all text-[15px] text-cream">
                  {companyConfig.email}
                </span>
              </span>
            </a>
          </li>
          <li className="bg-navy px-5 py-5">
            <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-cream-300/50">
              Opening hours
            </span>
            <span className="mt-1.5 block text-[14px] leading-relaxed text-cream-300/85">
              Mon–Fri {companyConfig.businessHours.weekdays}
              <br />
              Sat {companyConfig.businessHours.saturday} · Sun {companyConfig.businessHours.sunday}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
