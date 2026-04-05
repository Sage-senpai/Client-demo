export interface Space {
  id: string;
  name: string;
  type: 'Hot Desk' | 'Dedicated Desk' | 'Private Office' | 'Meeting Room' | 'Event Space';
  priceDisplay: string;
  capacity: string;
  amenities: string[];
  description: string;
  image: string;
}

const spacesData: Space[] = [
  {
    id: 'hot-desk',
    name: 'Hot Desk',
    type: 'Hot Desk',
    priceDisplay: '₦2,500/day',
    capacity: '1 person',
    amenities: [
      'High-speed WiFi (500mbps)',
      'Power outlets & USB charging',
      'Access to communal kitchen',
      'Complimentary coffee & tea',
      'Printing (20 pages/day)',
      'Locker rental available',
    ],
    description:
      'Grab any available desk in our vibrant open-plan workspace. Surrounded by lush greenery and bathed in natural light, our hot desks are perfect for freelancers, remote workers, and anyone who thrives in a dynamic environment. Come and go as you please — no commitment required.',
    image:
      'https://images.unsplash.com/photo-1497366811352-aa15ab7f7b8d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dedicated-desk',
    name: 'Dedicated Desk',
    type: 'Dedicated Desk',
    priceDisplay: '₦35,000/month',
    capacity: '1 person',
    amenities: [
      'Reserved desk 24/7',
      'Lockable storage cabinet',
      'Ergonomic chair',
      'Dual monitor setup available',
      '500mbps WiFi + Ethernet',
      '10% Grove Café discount',
      '2 meeting room hours/month',
      'Mail handling',
    ],
    description:
      'Your own permanent desk in our premium workspace. Personalise your setup, leave your belongings overnight, and enjoy the consistency of a dedicated spot while still being part of our collaborative community. Ideal for professionals who need a reliable daily workspace.',
    image:
      'https://images.unsplash.com/photo-1497366811352-aa15ab7f7b8d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'private-office',
    name: 'Private Office',
    type: 'Private Office',
    priceDisplay: '₦85,000–₦250,000/month',
    capacity: '2–10 people',
    amenities: [
      'Fully furnished private room',
      'Lockable door with key card',
      'Dedicated internet line',
      'Custom branding on door',
      '15% Grove Café discount',
      '5 meeting room hours/month',
      'Mail & package handling',
      'Priority event access',
      'Guest passes (5/month)',
    ],
    description:
      'A private, lockable office space for your team, nestled within the Grove & Co. ecosystem. Enjoy complete privacy for calls, meetings, and focused work while still having access to all communal amenities, the café, and our vibrant events programme.',
    image:
      'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meeting-room',
    name: 'Meeting Room',
    type: 'Meeting Room',
    priceDisplay: '₦5,000–₦10,000/hr',
    capacity: '4–16 people',
    amenities: [
      '65" 4K display with HDMI & wireless casting',
      'Video conferencing setup',
      'Whiteboard & markers',
      'Projector available',
      'Sound-insulated walls',
      'Complimentary water & coffee',
      'Catering add-on available',
    ],
    description:
      'Book one of our eight beautifully designed meeting rooms for your next client presentation, team brainstorm, or board meeting. Each room is named after a tropical plant and features floor-to-ceiling windows, soundproofing, and state-of-the-art AV equipment.',
    image:
      'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'event-space',
    name: 'Event Space',
    type: 'Event Space',
    priceDisplay: '₦80,000/day',
    capacity: '50–120 people',
    amenities: [
      'Open-plan 200sqm venue',
      'Modular furniture layout',
      'Professional sound system',
      'Stage & podium',
      'Projector & dual screens',
      'In-house catering available',
      'Dedicated event coordinator',
      'Green room / speaker lounge',
    ],
    description:
      'Our stunning event space transforms to host conferences, product launches, workshops, and social gatherings. With its signature living wall backdrop, industrial-chic finishes, and full-service catering from The Grove Café, your event will be one to remember.',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
  },
];

export default spacesData;
