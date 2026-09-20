import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { SmartImage } from '../ui/SmartImage';
import { cn } from '../../utils/cn';

interface ProductGalleryProps {
  images: string[];
  name: string;
}

/**
 * Product viewer: one large image with optional thumbnails. Pointer
 * position drives a 2x zoom on hover for desktop; tapping toggles it on
 * touch devices, where hover does not exist.
 */
export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, name }) => {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState('50% 50%');

  const source = images[index] ?? images[0];
  const isDrawing = source?.endsWith('.svg');

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

  return (
    <div>
      <div
        className="group relative overflow-hidden border border-cream-300 bg-cream-100"
        onMouseMove={onMove}
        onMouseEnter={() => !isDrawing && setZoomed(true)}
        onMouseLeave={() => setZoomed(false)}
        onClick={() => !isDrawing && setZoomed((z) => !z)}
      >
        <SmartImage
          src={source}
          alt={name}
          ratio="aspect-[4/3]"
          fit="contain"
          priority
          className={cn(
            'p-4 transition-transform duration-300 ease-engineered sm:p-8',
            zoomed && 'scale-[2]'
          )}
          style={{ transformOrigin: origin }}
        />
        {!isDrawing && (
          <span className="pointer-events-none absolute bottom-0 right-0 flex items-center gap-1.5 bg-navy/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-cream opacity-0 transition-opacity group-hover:opacity-100">
            <ZoomIn className="h-3.5 w-3.5" strokeWidth={1.75} />
            Zoom
          </span>
        )}
        {isDrawing && (
          <span className="pointer-events-none absolute bottom-0 left-0 bg-cream-200/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
            Technical drawing
          </span>
        )}
      </div>

      {images.length > 1 && (
        <div className="rail mt-3 gap-2">
          {images.map((image, i) => (
            <button
              key={image + i}
              onClick={() => setIndex(i)}
              aria-label={`View image ${i + 1} of ${name}`}
              aria-current={i === index}
              className={cn(
                'h-20 w-20 shrink-0 border bg-cream-100 p-1.5 transition-colors',
                i === index ? 'border-moss' : 'border-cream-300 opacity-70 hover:opacity-100'
              )}
            >
              <img src={image} alt="" loading="lazy" className="h-full w-full object-contain" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
