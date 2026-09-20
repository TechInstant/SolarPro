import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import { siteImages } from '../../config/images';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Tailwind aspect ratio class, e.g. 'aspect-[4/3]'. */
  ratio?: string;
  /** object-cover for photography, object-contain for technical drawings. */
  fit?: 'cover' | 'contain';
  /** Skip lazy loading for anything above the fold. */
  priority?: boolean;
  /** Applied to the wrapper, not the <img>. */
  wrapperClassName?: string;
}

/**
 * Every photograph on the site goes through this component so that
 * lazy loading, aspect ratio, the load-in fade and the fallback
 * placeholder behave identically everywhere.
 */
export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  ratio,
  fit = 'cover',
  priority = false,
  className,
  wrapperClassName,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const source = failed ? siteImages.fallback : src;
  const isDrawing = source.endsWith('.svg');

  return (
    <div className={cn('relative overflow-hidden bg-cream-200', ratio, wrapperClassName)}>
      <img
        src={source}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setFailed(true);
          setLoaded(true);
        }}
        className={cn(
          'h-full w-full transition-opacity duration-500 ease-engineered',
          isDrawing || fit === 'contain' ? 'object-contain' : 'object-cover',
          loaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        {...rest}
      />
    </div>
  );
};
