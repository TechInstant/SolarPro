import React, { useMemo, useState } from 'react';
import { ArrowRight, Play, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VideoPlayer } from '../video/VideoPlayer';
import { videosData } from '../../data/videos';
import { companyConfig } from '../../config/company';
import { getYouTubeId } from '../../utils/youtube';
import { cn } from '../../utils/cn';
import type { Division } from '../../types';

const filters: { label: string; value: Division | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Solar', value: 'solar' },
  { label: 'CCTV & Security', value: 'security' },
];

export const VideoSection: React.FC = () => {
  const [filter, setFilter] = useState<Division | 'all'>('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [autoPlay, setAutoPlay] = useState(false);

  const visible = useMemo(
    () => (filter === 'all' ? videosData : videosData.filter((v) => v.division === filter)),
    [filter]
  );

  if (videosData.length === 0) return null;

  const featured = visible.find((v) => v.id === selectedId) ?? visible[0];
  const others = visible.filter((v) => v.id !== featured?.id);

  const choose = (id: string) => {
    setSelectedId(id);
    setAutoPlay(true);
  };

  return (
    <section id="videos" className="bg-navy py-16 lg:py-20 text-cream">
      <div className="shell">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-moss-bright">
              Watch Our Work
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-cream">
              See the Installations Up Close
            </h2>
            <p className="mt-2 text-[14.5px] leading-relaxed text-cream-300/80">
              Solar systems and security installations filmed on site — how the work is done,
              not just how it looks at the end.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {filters.map((item) => {
              const active = filter === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => {
                    setFilter(item.value);
                    setSelectedId(null);
                    setAutoPlay(false);
                  }}
                  aria-pressed={active}
                  className={cn(
                    'rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200',
                    active
                      ? 'bg-moss text-white shadow-sm'
                      : 'bg-navy-800/80 text-cream-300/80 hover:text-cream hover:bg-navy-700 border border-navy-line'
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {featured && (
          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <VideoPlayer
                key={featured.id}
                video={featured}
                autoPlay={autoPlay}
                className="border border-navy-line shadow-2xl"
              />
              <h3 className="mt-4 text-[17px] font-bold text-cream">{featured.title}</h3>
              <p className="mt-1.5 max-w-2xl text-[13.5px] leading-relaxed text-cream-300/75">
                {featured.description}
              </p>
            </div>

            <div className="lg:col-span-4">
              <ul className="space-y-3">
                {others.map((video) => {
                  const ready = Boolean(getYouTubeId(video.youtube));
                  const Thumb = (
                    <>
                      <div className="relative aspect-video w-32 shrink-0 overflow-hidden rounded-lg bg-navy-800 sm:w-36">
                        {video.poster && (
                          <img
                            src={video.poster}
                            alt=""
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        )}
                        <span className="absolute inset-0 flex items-center justify-center bg-navy-deep/40">
                          {ready ? (
                            <Play className="h-6 w-6 fill-white text-white" strokeWidth={1.5} aria-hidden />
                          ) : (
                            <Clock className="h-5 w-5 text-cream-300" strokeWidth={1.75} aria-hidden />
                          )}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[13.5px] font-semibold leading-snug text-cream line-clamp-2">
                          {video.title}
                        </p>
                        <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-cream-300/55">
                          {video.division === 'solar' ? 'Solar' : 'CCTV & Security'}
                          {ready ? (video.duration ? ` · ${video.duration}` : '') : ' · Coming soon'}
                        </p>
                      </div>
                    </>
                  );

                  return (
                    <li key={video.id}>
                      {ready ? (
                        <button
                          onClick={() => choose(video.id)}
                          className="flex w-full items-center gap-4 rounded-xl border border-navy-line bg-navy-deep/60 p-3 text-left transition-colors hover:border-moss/60 hover:bg-navy-deep"
                        >
                          {Thumb}
                        </button>
                      ) : (
                        <div className="flex items-center gap-4 rounded-xl border border-navy-line bg-navy-deep/40 p-3">
                          {Thumb}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Link
                  to="/videos"
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-moss-bright hover:text-cream transition-colors"
                >
                  All videos
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
                {companyConfig.socialLinks.youtube && (
                  <a
                    href={companyConfig.socialLinks.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] font-medium text-cream-300/75 underline-offset-4 hover:text-cream hover:underline"
                  >
                    Our YouTube channel
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
