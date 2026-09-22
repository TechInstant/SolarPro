import React, { useState } from 'react';
import { Play, Clock } from 'lucide-react';
import type { Video } from '../../types';
import { getYouTubeEmbedUrl, getYouTubeId, getYouTubeThumbnail } from '../../utils/youtube';
import { cn } from '../../utils/cn';

interface VideoPlayerProps {
  video: Video;
  /** Load the player straight away (used when a visitor picks a video from a list). */
  autoPlay?: boolean;
  className?: string;
}

/**
 * Lightweight YouTube player. The page shows a poster and a play button;
 * the YouTube iframe (≈1MB of script) only loads when the visitor presses
 * play. Until a video has been uploaded it shows a "Coming soon" poster.
 */
export const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, autoPlay = false, className }) => {
  const id = getYouTubeId(video.youtube);
  const [playing, setPlaying] = useState(autoPlay && Boolean(id));

  const poster = video.poster ?? (id ? getYouTubeThumbnail(id) : undefined);

  if (id && playing) {
    return (
      <div className={cn('relative aspect-video overflow-hidden rounded-xl bg-navy-deep', className)}>
        <iframe
          src={getYouTubeEmbedUrl(id)}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  const posterLayer = (
    <>
      {poster ? (
        <img
          src={poster}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-navy-800" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/25 to-navy-deep/10" />
    </>
  );

  if (!id) {
    return (
      <div
        className={cn('relative aspect-video overflow-hidden rounded-xl bg-navy-deep', className)}
        aria-label={`${video.title} — video coming soon`}
      >
        {posterLayer}
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-navy-deep/85 px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.12em] text-cream-300">
          <Clock className="h-3 w-3" strokeWidth={2} aria-hidden />
          Coming soon
        </span>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${video.title}`}
      className={cn(
        'group relative block aspect-video w-full overflow-hidden rounded-xl bg-navy-deep text-left',
        className
      )}
    >
      {posterLayer}
      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-moss text-white shadow-xl transition-transform duration-200 group-hover:scale-110 sm:h-[72px] sm:w-[72px]">
        <Play className="ml-1 h-7 w-7 fill-white" strokeWidth={1.5} aria-hidden />
      </span>
      {video.duration && (
        <span className="absolute bottom-3 right-3 rounded-md bg-navy-deep/85 px-2 py-0.5 font-mono text-[11px] text-cream">
          {video.duration}
        </span>
      )}
    </button>
  );
};
