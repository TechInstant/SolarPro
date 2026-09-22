const ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;

/**
 * Pulls the 11-character video ID out of anything YouTube hands you:
 * watch?v=, youtu.be/, /shorts/, /embed/, /live/, or the bare ID.
 * Returns null for an empty or unrecognised value.
 */
export function getYouTubeId(input: string): string | null {
  const value = input.trim();
  if (!value) return null;
  if (ID_PATTERN.test(value)) return value;

  try {
    const url = new URL(value.startsWith('http') ? value : `https://${value}`);
    const host = url.hostname.replace(/^www\.|^m\./, '');

    if (host === 'youtu.be') {
      const id = url.pathname.slice(1).split('/')[0];
      return ID_PATTERN.test(id) ? id : null;
    }

    if (host === 'youtube.com' || host === 'youtube-nocookie.com' || host === 'music.youtube.com') {
      const fromQuery = url.searchParams.get('v');
      if (fromQuery && ID_PATTERN.test(fromQuery)) return fromQuery;

      const [kind, id] = url.pathname.split('/').filter(Boolean);
      if (['shorts', 'embed', 'live', 'v'].includes(kind) && id && ID_PATTERN.test(id)) return id;
    }
  } catch {
    return null;
  }

  return null;
}

/** Privacy-enhanced embed: no tracking cookies until the visitor presses play. */
export const getYouTubeEmbedUrl = (id: string) =>
  `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

export const getYouTubeThumbnail = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const getYouTubeWatchUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;
