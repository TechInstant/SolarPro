import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { getWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';
import { useSeo } from '../hooks/useSeo';

const destinations = [
  { label: 'Services', to: '/services', detail: 'Installation, storage, maintenance' },
  { label: 'Projects', to: '/projects', detail: 'Case studies from completed systems' },
  { label: 'Products', to: '/products', detail: 'Panels, inverters, batteries, tools' },
  { label: 'Contact', to: '/contact', detail: 'Phone, WhatsApp and email' },
];

export const NotFoundPage: React.FC = () => {
  useSeo({
    title: 'Page not found',
    description: 'That page does not exist. Find services, projects, equipment or contact details.',
  });

  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-navy pt-[104px] sm:pt-[116px]">
      <div className="absolute inset-0 blueprint opacity-60" aria-hidden />

      <div className="shell relative py-14">
        <div className="max-w-2xl">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-5 text-display-md font-semibold text-cream sm:text-display-lg">
            That page is off the grid.
          </h1>
          <p className="mt-5 text-[16px] leading-relaxed text-cream-300/75">
            The link is broken or the page has moved. Everything on the site is one step away from
            here.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/" trailingIcon={<ArrowRight className="h-4 w-4" strokeWidth={1.75} />}>
              Back to home
            </Button>
            <Button
              href={getWhatsAppUrl(whatsappMessages.general)}
              variant="outlineLight"
              leadingIcon={<MessageCircle className="h-4 w-4" strokeWidth={1.75} />}
            >
              Ask an engineer
            </Button>
          </div>
        </div>

        <ul className="mt-12 grid gap-px border border-navy-line bg-navy-line sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <li key={destination.label} className="bg-navy">
              <Link
                to={destination.to}
                className="group flex h-full flex-col px-5 py-5 transition-colors hover:bg-navy-800"
              >
                <span className="flex items-center justify-between text-[15px] font-medium text-cream">
                  {destination.label}
                  <ArrowRight
                    className="h-4 w-4 text-cream-300/40 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={1.75}
                  />
                </span>
                <span className="mt-1.5 text-[13.5px] text-cream-300/60">{destination.detail}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
