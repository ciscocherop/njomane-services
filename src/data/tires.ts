// Tire data for Njomane Services LLC
// Brands and sizes confirmed from actual inventory photos.
// Call 857-316-6799 to confirm current availability and pricing.

export interface Tire {
  id: string;
  brand: string;
  model: string;
  size: string;
  type: 'Steer' | 'Drive' | 'Trailer' | 'All Position';
  position: string;
  description: string;
  photo?: string; // path relative to /public
}

export const tires: Tire[] = [
  {
    id: 't1',
    brand: 'Goodyear',
    model: 'G647 RSS',
    size: '295/75R22.5',
    type: 'Steer',
    position: 'Steer Axle',
    description:
      'Long-haul steer tire with excellent handling and even wear characteristics.',
    photo: '/IMG-20260921-WA0021.jpg',   // Goodyear inventory stack
  },
  {
    id: 't2',
    brand: 'Royalmax',
    model: 'RY617',
    size: '295/75R22.5',
    type: 'Steer',
    position: 'Steer Axle',
    description:
      'Highway steer tire designed for fuel efficiency and long tread life on the steer axle.',
    photo: '/IMG-20260923-WA0016.jpg',   // Royalmax steer label photo
  },
  {
    id: 't3',
    brand: 'Tomoro',
    model: 'TMD12',
    size: '295/75R22.5',
    type: 'Drive',
    position: 'Drive Axle',
    description:
      'Deep-lug drive tire built for traction and durability in regional and long-haul service.',
    photo: '/IMG-20260923-WA0015.jpg',   // drive tires stacked outdoors
  },
  {
    id: 't4',
    brand: 'Arisun',
    model: 'AS673',
    size: '255/70R22.5',
    type: 'All Position',
    position: 'All Position',
    description:
      'All-steel tubeless all-position tire rated 140/137M — suitable for steer, drive and trailer axles on medium-duty trucks.',
    photo: '/IMG-20260923-WA0019.jpg',   // Arisun all-position label
  },
  {
    id: 't5',
    brand: 'Xcellent',
    model: 'IIST',
    size: 'ST225/75R15',
    type: 'Trailer',
    position: 'Trailer Axle',
    description:
      'All-steel special trailer tire (ST), 14PR, rated 123/119M. Designed for boat, utility and commercial trailer applications.',
    photo: '/IMG-20260923-WA0018.jpg',   // Xcellent trailer tire
  },
  {
    id: 't6',
    brand: 'Goodyear',
    model: 'G622 RSD',
    size: '295/75R22.5',
    type: 'Drive',
    position: 'Drive Axle',
    description:
      'Drive position tire optimized for fuel economy and long tread life in long-haul operations.',
    photo: '/tyre_1.jpg',               // Goodyear Reliant product shot
  },
  {
    id: 't7',
    brand: 'Tomoro',
    model: 'TMD12',
    size: '295/75R22.5',
    type: 'Drive',
    position: 'Drive Axle',
    description:
      'Robust lug-pattern drive tire suited for heavy-duty regional trucking and mixed-service routes.',
    photo: '/IMG-20260923-WA0040.jpg',   // Tomoro drive tires outdoor stack
  },
  {
    id: 't8',
    brand: 'Royalmax',
    model: 'RY617',
    size: '295/75R22.5',
    type: 'Steer',
    position: 'Steer Axle',
    description:
      'Smooth-shoulder steer tire offering stable handling and good wet-road performance.',
    photo: '/tyre_2.jpg',               // mixed tire shop inventory
  },
  {
    id: 't9',
    brand: 'Arisun',
    model: 'AS673',
    size: '265/70R22.5',
    type: 'All Position',
    position: 'All Position',
    description:
      'All-position tire in a low-profile 22.5 size. All-steel tubeless construction for mixed-service trucks.',
    photo: '/tyre_3.jpg',               // person handling Goodyear tires in warehouse
  },
  {
    id: 't10',
    brand: 'Goodyear',
    model: 'G647 RSS',
    size: '11R22.5',
    type: 'Steer',
    position: 'Steer Axle',
    description:
      'Classic 11R22.5 steer tire for older fleets and mixed-service applications requiring a reliable steer.',
    photo: '/IMG-20260923-WA0013(1).jpg', // brake drums + parts in service truck bed
  },
];

export const tireTypes = ['All', 'Steer', 'Drive', 'Trailer', 'All Position'] as const;
export type TireTypeFilter = (typeof tireTypes)[number];
