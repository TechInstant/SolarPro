import { Video } from '../types';

/**
 * VIDEOS
 * ------------------------------------------------------------------
 * TO ADD A VIDEO:
 *   1. Upload it to YouTube (public or unlisted both work).
 *   2. Copy the link from the Share button.
 *   3. Paste it into `youtube` below — any YouTube link format works:
 *        https://www.youtube.com/watch?v=dQw4w9WgXcQ
 *        https://youtu.be/dQw4w9WgXcQ
 *        https://www.youtube.com/shorts/dQw4w9WgXcQ
 *
 * While `youtube` is empty the card shows its poster with a
 * "Coming soon" label and cannot be played. The first video in the list
 * is the large one on the home page.
 *
 * `division` decides whether it appears under Solar or CCTV & Security.
 * `poster` is optional — without it YouTube's own thumbnail is used.
 */

export const videosData: Video[] = [
  {
    id: 'v-solar-install-walkthrough',
    division: 'solar',
    title: 'Solar installation, start to finish',
    description:
      'A full rooftop installation — mounting, wiring, inverter and battery commissioning — in a few minutes.',
    // TEST LINK so the player can be seen working (Blender's open-licence
    // short film, not an ELVOLTE video). Replace with your own YouTube link.
    youtube: 'https://youtu.be/aqz-KE-bpKQ',
    poster: '/images/projects/5kva-hybrid-lekki/cover.jpg',
  },
  {
    id: 'v-cctv-installation',
    division: 'security',
    title: 'Installing a CCTV system the right way',
    description:
      'Camera placement, concealed cabling and setting up live viewing on your phone.',
    youtube: '',
    poster: '/images/services/cctv-installation.jpg',
  },
  {
    id: 'v-electric-fence',
    division: 'security',
    title: 'Electric fence installation and testing',
    description: 'Brackets, strands, energizer and the voltage test on every line.',
    youtube: '',
    poster: '/images/projects/estate-perimeter-security/cover.jpg',
  },
  {
    id: 'v-inverter-battery',
    division: 'solar',
    title: 'Inverter and lithium battery setup',
    description: 'How a hybrid inverter and lithium bank are wired, configured and tested.',
    youtube: '',
    poster: '/images/services/inverter-installation.jpg',
  },
];
