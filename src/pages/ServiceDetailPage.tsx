import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MessageCircle, Check, Clock } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { SmartImage } from '../components/ui/SmartImage';
import { Button } from '../components/ui/Button';
import { servicesData, getServiceBySlug } from '../data/services';
import { siteImages } from '../config/images';
import { getWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';
import { useSeo } from '../hooks/useSeo';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  useSeo({
    title: service ? service.title : 'Service',
    description: service?.shortDescription ?? 'Solar engineering services.',
    image: service ? siteImages.services[service.slug] : undefined,
  });

  if (!service) return <Navigate to="/services" replace />;

  const image = siteImages.services[service.slug] ?? siteImages.hero.image;
  const others = servicesData.filter((item) => item.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbItems={[{ label: 'Services', path: '/services' }, { label: service.title }]}
        bgImage={image}
      />

      <div className="bg-cream-50 py-12 sm:py-16 lg:py-20">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-14">
            <div>
              <SmartImage
                src={image}
                alt={service.title}
                ratio="aspect-[16/9]"
                priority
                wrapperClassName="border border-cream-300"
              />

              <p className="mt-8 text-[16px] leading-relaxed text-ink-soft">
                {service.fullDescription}
              </p>

              <section className="mt-10 border-t border-cream-300 pt-8">
                <h2 className="font-display text-[20px] font-semibold text-navy">
                  What you get
                </h2>
                <ul className="mt-5 grid gap-px bg-cream-300 sm:grid-cols-2">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2.5 bg-white px-4 py-3.5 text-[14.5px] leading-snug text-ink-soft"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss-dark" strokeWidth={2} aria-hidden />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-10 border-t border-cream-300 pt-8">
                <h2 className="font-display text-[20px] font-semibold text-navy">
                  How the work runs
                </h2>
                <ol className="mt-5 space-y-4">
                  {service.process.map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-cream-300 bg-white font-mono text-[11px] text-bronze">
                        {index + 1}
                      </span>
                      <span className="pt-1 text-[15px] leading-relaxed text-ink-soft">{step}</span>
                    </li>
                  ))}
                </ol>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-cream-300 bg-white">
                <div className="border-b border-cream-200 px-5 py-4">
                  <p className="eyebrow">At a glance</p>
                </div>

                <div className="space-y-5 px-5 py-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted">
                      Typical duration
                    </p>
                    <p className="mt-1.5 flex items-center gap-2 text-[14.5px] text-navy">
                      <Clock className="h-4 w-4 text-ink-muted" strokeWidth={1.5} aria-hidden />
                      {service.leadTime}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted">
                      Included
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {service.includedItems.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[14px] text-ink-soft">
                          <span aria-hidden className="mt-[7px] h-[3px] w-[3px] shrink-0 bg-bronze" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted">
                      Suited to
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {service.recommendedFor.map((item) => (
                        <span
                          key={item}
                          className="border border-cream-300 px-2.5 py-1.5 text-[12.5px] text-ink-soft"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 border-t border-cream-200 p-5">
                  <Button
                    href={getWhatsAppUrl(whatsappMessages.service(service.title))}
                    variant="whatsapp"
                    fullWidth
                    leadingIcon={<MessageCircle className="h-4 w-4" strokeWidth={1.75} />}
                  >
                    Ask about this service
                  </Button>
                  <Button
                    to="/quote"
                    variant="outline"
                    fullWidth
                    trailingIcon={<ArrowRight className="h-4 w-4" strokeWidth={1.75} />}
                  >
                    Request a quote
                  </Button>
                </div>
              </div>

              <div className="mt-6 border border-cream-300 bg-cream-100 p-5">
                <p className="eyebrow">Other services</p>
                <ul className="mt-3 space-y-2.5">
                  {others.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={`/services/${item.slug}`}
                        className="group flex items-center justify-between gap-3 text-[14.5px] text-ink-soft transition-colors hover:text-navy"
                      >
                        {item.title}
                        <ArrowRight
                          className="h-3.5 w-3.5 shrink-0 text-cream-300 transition-all group-hover:translate-x-0.5 group-hover:text-bronze"
                          strokeWidth={1.75}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-ink-soft transition-colors hover:text-navy"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
                All services
              </Link>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
