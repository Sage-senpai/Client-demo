export interface Room {
  id: number;
  name: string;
  type: 'Garden View' | 'Lagoon View' | 'Overwater';
  maxGuests: number;
  price: number;
  amenities: string[];
  description: string;
  image: string;
}

const roomsData: Room[] = [
  {
    id: 1,
    name: 'Garden Deluxe Suite',
    type: 'Garden View',
    maxGuests: 2,
    price: 85000,
    amenities: ['King Bed', 'Rain Shower', 'Mini Bar', 'Wi-Fi', 'Garden Terrace'],
    description:
      'Nestled among lush tropical gardens, this spacious suite offers tranquil mornings with the sounds of native birds and the gentle rustle of palm fronds. Featuring locally sourced hardwood furnishings and hand-woven textiles, it is a serene escape from the everyday.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Lagoon View Room',
    type: 'Lagoon View',
    maxGuests: 2,
    price: 110000,
    amenities: ['Queen Bed', 'Soaking Tub', 'Mini Bar', 'Wi-Fi', 'Lagoon Balcony'],
    description:
      'Wake up to panoramic views of the turquoise lagoon from your private balcony. This elegantly appointed room blends contemporary comfort with coastal charm, featuring natural stone accents and soft linen drapes that dance in the ocean breeze.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Overwater Bungalow',
    type: 'Overwater',
    maxGuests: 2,
    price: 195000,
    amenities: ['King Bed', 'Glass Floor Panel', 'Outdoor Shower', 'Butler Service', 'Sundeck'],
    description:
      'Our signature overwater bungalow sits above the crystal-clear Atlantic, with a glass floor panel revealing the marine life below. Step from your private sundeck directly into the ocean, or simply relax in the hammock as the sun sets over the horizon.',
    image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Garden Family Suite',
    type: 'Garden View',
    maxGuests: 4,
    price: 130000,
    amenities: ['King + Twin Beds', 'Rain Shower', 'Mini Bar', 'Wi-Fi', 'Kids Corner', 'Garden Terrace'],
    description:
      'Designed for families seeking a coastal retreat, this two-room suite features a master bedroom and a connected children\'s room with bunk-style twins. The private terrace opens onto manicured gardens with direct access to the family pool area.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Lagoon Premium Suite',
    type: 'Lagoon View',
    maxGuests: 3,
    price: 155000,
    amenities: ['King Bed', 'Jacuzzi', 'Living Area', 'Espresso Machine', 'Wi-Fi', 'Lagoon Terrace'],
    description:
      'Elevated luxury meets waterfront living in this premium suite. The wraparound terrace features a private jacuzzi with uninterrupted lagoon views, while inside, a separate living area provides ample space for unwinding after a day of exploration.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Overwater Presidential Villa',
    type: 'Overwater',
    maxGuests: 4,
    price: 350000,
    amenities: ['Master Suite', 'Infinity Plunge Pool', 'Butler Service', 'Dining Pavilion', 'Spa Bathroom', 'Sundeck'],
    description:
      'The crown jewel of Coral Terrace. This expansive villa offers two bedrooms, an infinity plunge pool merging with the ocean horizon, a private dining pavilion, and a full spa bathroom with dual rain showers and a freestanding copper tub. Dedicated butler service ensures every moment is effortless.',
    image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    name: 'Garden Honeymoon Retreat',
    type: 'Garden View',
    maxGuests: 2,
    price: 105000,
    amenities: ['Four-Poster Bed', 'Outdoor Bathtub', 'Champagne on Arrival', 'Wi-Fi', 'Private Garden'],
    description:
      'A romantic hideaway wrapped in bougainvillea and frangipani. The centrepiece is a hand-carved four-poster bed draped in sheer linen, while the outdoor bathtub beneath the stars offers an unforgettable evening ritual. Complimentary champagne and rose petals await your arrival.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    name: 'Lagoon Accessible Suite',
    type: 'Lagoon View',
    maxGuests: 2,
    price: 110000,
    amenities: ['King Bed', 'Roll-in Shower', 'Accessible Terrace', 'Mini Bar', 'Wi-Fi'],
    description:
      'Thoughtfully designed for guests with mobility needs, this suite offers full accessibility without compromising on luxury. The spacious roll-in shower, widened doorways, and lowered fixtures complement the same stunning lagoon views enjoyed by all our waterfront rooms.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
  },
];

export default roomsData;
