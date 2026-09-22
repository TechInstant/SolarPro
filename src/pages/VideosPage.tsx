import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { VideoPlayer } from '../components/video/VideoPlayer';
import { Button } from '../components/ui/Button';
import { videosData } from '../data/videos';
import { companyConfig } from '../config/company';
import { getWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';
import { useSeo } from '../hooks/useSeo';
import type { Division } from '../types';

const sections: { division: Division; title: string }[] = [
  { division: 'solar', title: companyConfig.divisions.solar.name },
  { division: 'security', title: companyConfig.divisions.security.name },
];

export const VideosPage: React.FC = () => {
  useSeo({
    title: 'Installation Videos',
    description: `Watch ${companyConfig.name} solar and CCTV security installations filmed on site.`,
  });

  return (
    <>
      <PageHero
        eyebrow="Videos"
        title="See the Work Being Done"
        subtitle="Solar systems and security installations filmed on site — mounting, wiring, testing and handover."
        breadcrumbItems={[{ label: 'Videos' }]}
      />

      <section className="bg-cream-50 py-12 sm:py-16 lg:py-20">
        <div className="shell space-y-14">
          {sections.map(({ division, title }) => {
            const videos = videosData.filter((video) => video.division === division);
            if (videos.length === 0) return null;

            return (
              <div key={division} id={division} className="scroll-mt-28">
                <p className="font-mono text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-moss-dark">
                  {title}
                </p>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {videos.map((video) => (
                    <article key={video.id}>
                      <VideoPlayer video={video} className="border border-cream-300 shadow-sm" />
                      <h2 className="mt-3.5 text-[16px] font-bold text-navy">{video.title}</h2>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">
                        {video.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="flex flex-col gap-4 rounded-xl border border-cream-300 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 className="text-[19px] font-bold text-navy">Want this done at your property?</h2>
              <p className="mt-1.5 text-[14px] text-ink-soft">
                Send us a message with what you have in mind and we will take it from there.
              </p>
            </div>
            <Button
              href={getWhatsAppUrl(whatsappMessages.general)}
              variant="whatsapp"
              leadingIcon={<MessageCircle className="h-4 w-4" strokeWidth={1.75} />}
              className="shrink-0 rounded-md"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
