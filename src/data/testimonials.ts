import { Testimonial } from '../types';

/**
 * CLIENT FEEDBACK
 * ------------------------------------------------------------------
 * These are placeholder entries so the layout can be seen in context.
 * Replace them with real, permitted quotes from your own clients — the
 * section that renders them carries an "Example feedback" note until
 * you do. Delete this comment once the entries below are genuine.
 */

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    name: 'Dr. Babatunde Alabi',
    role: 'Homeowner',
    location: 'Lekki Phase 1, Lagos',
    systemInstalled: '5kVA hybrid · 10kWh lithium',
    rating: 5,
    comment:
      'We were burning about ₦180,000 of petrol a month and still losing power at night. The generator has not been started since March. The install was tidy and the labelling on the board means I can actually understand my own system.',
  },
  {
    id: 't-2',
    name: 'Mrs. Ngozi Okafor',
    role: 'Managing Director, logistics firm',
    location: 'Maitama, Abuja',
    systemInstalled: '20kVA three-phase commercial system',
    rating: 5,
    comment:
      'Thirty workstations and a server rack used to go down two or three times a week. Since the changeover we have not lost a single working session, and the diesel line in our budget has dropped by three quarters.',
  },
  {
    id: 't-3',
    name: 'Pastor Samuel Adeleke',
    role: 'Senior Pastor',
    location: 'Independence Layout, Enugu',
    systemInstalled: '30kVA solar mini-grid',
    rating: 5,
    comment:
      'The thing I did not expect was the silence. Our recordings used to carry generator rumble under every song. The team understood that the audio earth was the real problem, not just the power.',
  },
  {
    id: 't-4',
    name: 'Engr. Kenneth Ibe',
    role: 'Facility Manager',
    location: 'GRA, Port Harcourt',
    systemInstalled: '10kVA off-grid system',
    rating: 5,
    comment:
      'I am an engineer myself, so I checked the work: cable sizing, DC breaker ratings, earth resistance. All of it was to specification and all of it was documented at handover. That is rarer than it should be.',
  },
];
