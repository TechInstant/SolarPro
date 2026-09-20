import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * tailwind-merge only knows Tailwind's stock scales. Without this, our
 * custom sizes (`text-display-md`, `text-eyebrow`) look like colour
 * utilities to it, so `cn('text-display-md', 'text-navy')` would silently
 * drop the size and render the heading at body size.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: ['eyebrow', 'display-sm', 'display-md', 'display-lg', 'display-xl'] }],
    },
  },
});

/** Joins class names and resolves conflicting Tailwind utilities. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
