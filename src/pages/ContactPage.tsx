import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { ContactForm } from '../components/forms/ContactForm';
import { Button } from '../components/ui/Button';
import { companyConfig, companyFullAddress } from '../config/company';
import { getWhatsAppUrl, whatsappMessages, telUrl } from '../utils/whatsapp';
import { useSeo } from '../hooks/useSeo';

export const ContactPage: React.FC = () => {
  useSeo({
    title: `Contact ${companyConfig.name}`,
    description: `Speak to a solar engineer in ${companyConfig.city}. Call ${companyConfig.phoneDisplay}, message on WhatsApp, or send an enquiry about installation, maintenance or equipment.`,
  });

  const channels = [
    {
      Icon: Phone,
      label: 'Phone',
      value: companyConfig.phoneDisplay,
      href: telUrl,
      note: 'Fastest during working hours',
    },
    {
      Icon: MessageCircle,
      label: 'WhatsApp',
      value: companyConfig.whatsappDisplay,
      href: getWhatsAppUrl(whatsappMessages.general),
      note: 'Send photographs of your setup',
    },
    {
      Icon: Mail,
      label: 'Email',
      value: companyConfig.email,
      href: `mailto:${companyConfig.email}`,
      note: 'Best for documents and tenders',
    },
  ];

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    companyConfig.mapQuery
  )}&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the engineer, not a call centre"
        subtitle="Tell us what you need — a new system, a fault, a price on equipment — and you will get a straight answer from the person who would do the work."
        breadcrumbItems={[{ label: 'Contact' }]}
      />

      <section className="bg-cream-50 py-12 sm:py-16 lg:py-20">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
            <div>
              <ul className="grid gap-px border border-cream-300 bg-cream-300">
                {channels.map(({ Icon, label, value, href, note }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                      className="group flex items-start gap-4 bg-white px-5 py-5 transition-colors hover:bg-cream-100"
                    >
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-moss-dark" strokeWidth={1.4} aria-hidden />
                      <span className="min-w-0">
                        <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                          {label}
                        </span>
                        <span className="mt-1 block break-all text-[15.5px] font-medium text-navy">
                          {value}
                        </span>
                        <span className="mt-1 block text-[13px] text-ink-muted">{note}</span>
                      </span>
                    </a>
                  </li>
                ))}

                <li className="flex items-start gap-4 bg-white px-5 py-5">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-moss-dark" strokeWidth={1.4} aria-hidden />
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                      Office
                    </span>
                    <span className="mt-1 block text-[15.5px] font-medium text-navy">
                      {companyFullAddress}
                    </span>
                    <span className="mt-1 block text-[13px] text-ink-muted">
                      Site visits across {companyConfig.serviceAreas.join(', ')}
                    </span>
                  </span>
                </li>

                <li className="flex items-start gap-4 bg-white px-5 py-5">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-moss-dark" strokeWidth={1.4} aria-hidden />
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                      Opening hours
                    </span>
                    <span className="mt-1.5 block text-[14.5px] leading-relaxed text-ink-soft">
                      Monday – Friday · {companyConfig.businessHours.weekdays}
                      <br />
                      Saturday · {companyConfig.businessHours.saturday}
                      <br />
                      Sunday · {companyConfig.businessHours.sunday}
                    </span>
                  </span>
                </li>
              </ul>

              <div className="mt-6 border border-cream-300 bg-navy p-6">
                <h2 className="font-display text-[19px] font-semibold text-cream">
                  Power emergency?
                </h2>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-cream-300/75">
                  A dead inverter, a bank that will not charge, or a system that tripped and will
                  not reset — call rather than write, and send a photograph of the display.
                </p>
                <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                  <Button href={telUrl} size="sm" leadingIcon={<Phone className="h-4 w-4" strokeWidth={1.75} />}>
                    Call now
                  </Button>
                  <Button
                    href={getWhatsAppUrl(whatsappMessages.maintenance)}
                    size="sm"
                    variant="outlineLight"
                    leadingIcon={<MessageCircle className="h-4 w-4" strokeWidth={1.75} />}
                  >
                    WhatsApp a photo
                  </Button>
                </div>
              </div>
            </div>

            <div className="border border-cream-300 bg-white p-6 sm:p-8">
              <p className="eyebrow">Send a message</p>
              <h2 className="mt-3 font-display text-[22px] font-semibold text-navy sm:text-[26px]">
                What do you need done?
              </h2>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-14">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-cream-300 pb-5">
              <div>
                <p className="eyebrow">Find us</p>
                <h2 className="mt-3 font-display text-[20px] font-semibold text-navy">
                  {companyConfig.city}, {companyConfig.country}
                </h2>
              </div>
              <Button
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  companyConfig.mapQuery
                )}`}
                variant="outline"
                size="sm"
                trailingIcon={<ArrowRight className="h-4 w-4" strokeWidth={1.75} />}
              >
                Open in Google Maps
              </Button>
            </div>

            <div className="mt-6 border border-cream-300 bg-cream-100">
              <iframe
                title={`Map showing ${companyConfig.city}, ${companyConfig.country}`}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[280px] w-full sm:h-[380px]"
              />
            </div>
            {/* <p className="mt-3 text-[13px] text-ink-muted">
              Replace the address in <code className="font-mono">src/config/company.ts</code> and
              this map follows it.
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
};
