export interface Service {
  id: number;
  name: string;
  category: string;
  duration: string;
  price: string;
  description: string;
}

export const categories = ['Hair', 'Skin & Facial', 'Nails', 'Spa & Massage', 'Bridal'] as const;

export type Category = (typeof categories)[number];

const servicesData: Service[] = [
  // ── Hair ──
  {
    id: 1,
    name: 'Silk Press & Blowout',
    category: 'Hair',
    duration: '1 hr 30 min',
    price: '₦25,000',
    description: 'Achieve a sleek, silky-smooth finish with our signature silk press and professional blowout.',
  },
  {
    id: 2,
    name: 'Braids & Cornrows',
    category: 'Hair',
    duration: '3 hrs',
    price: '₦35,000',
    description: 'Intricate braiding patterns from classic cornrows to trendy feed-in braids, crafted with precision.',
  },
  {
    id: 3,
    name: 'Locs Installation',
    category: 'Hair',
    duration: '4 hrs',
    price: '₦45,000',
    description: 'Start your loc journey with our expert installation using the comb coil or interlocking method.',
  },
  {
    id: 4,
    name: 'Deep Conditioning Treatment',
    category: 'Hair',
    duration: '45 min',
    price: '₦12,000',
    description: 'Intensive moisture therapy to restore elasticity, shine, and strength to damaged or dry hair.',
  },
  {
    id: 5,
    name: 'Colour & Highlights',
    category: 'Hair',
    duration: '2 hrs 30 min',
    price: '₦40,000',
    description: 'From subtle balayage to bold fashion colours, our colourists create stunning, head-turning results.',
  },
  {
    id: 6,
    name: 'Wig Install & Customisation',
    category: 'Hair',
    duration: '2 hrs',
    price: '₦30,000',
    description: 'Flawless wig installation with lace customisation, bleaching, plucking, and baby-hair styling.',
  },

  // ── Skin & Facial ──
  {
    id: 7,
    name: 'Radiance Glow Facial',
    category: 'Skin & Facial',
    duration: '1 hr',
    price: '₦20,000',
    description: 'Our signature facial combining enzymatic exfoliation, LED therapy, and a hydrating mask for luminous skin.',
  },
  {
    id: 8,
    name: 'Microdermabrasion',
    category: 'Skin & Facial',
    duration: '45 min',
    price: '₦28,000',
    description: 'Crystal-free microdermabrasion to resurface the skin, minimize pores, and even out skin tone.',
  },
  {
    id: 9,
    name: 'Chemical Peel',
    category: 'Skin & Facial',
    duration: '30 min',
    price: '₦35,000',
    description: 'Targeted chemical exfoliation for hyperpigmentation, acne scars, and fine lines — tailored to your skin type.',
  },
  {
    id: 10,
    name: 'Anti-Ageing Facial',
    category: 'Skin & Facial',
    duration: '1 hr 15 min',
    price: '₦30,000',
    description: 'Rejuvenating treatment with retinol serums, collagen-boosting massage, and firming mask technology.',
  },
  {
    id: 11,
    name: 'Acne Clarifying Treatment',
    category: 'Skin & Facial',
    duration: '1 hr',
    price: '₦22,000',
    description: 'Deep cleansing extraction session with antibacterial blue-light therapy and purifying clay mask.',
  },

  // ── Nails ──
  {
    id: 12,
    name: 'Gel Manicure',
    category: 'Nails',
    duration: '1 hr',
    price: '₦10,000',
    description: 'Long-lasting gel polish application with cuticle care, shaping, and a chip-free glossy finish.',
  },
  {
    id: 13,
    name: 'Acrylic Full Set',
    category: 'Nails',
    duration: '1 hr 30 min',
    price: '₦18,000',
    description: 'Custom sculpted acrylic nails with your choice of shape — coffin, stiletto, almond, or square.',
  },
  {
    id: 14,
    name: 'Spa Pedicure',
    category: 'Nails',
    duration: '1 hr',
    price: '₦12,000',
    description: 'Luxurious pedicure with warm soak, exfoliating scrub, callus removal, and hydrating massage.',
  },
  {
    id: 15,
    name: 'Nail Art & Design',
    category: 'Nails',
    duration: '45 min',
    price: '₦8,000',
    description: 'Hand-painted nail art from minimal line art to intricate 3D designs, chrome finishes, and encapsulated florals.',
  },
  {
    id: 16,
    name: 'Press-On Custom Nails',
    category: 'Nails',
    duration: '30 min',
    price: '₦15,000',
    description: 'Bespoke press-on nail sets custom-made to your measurements with reusable luxury designs.',
  },

  // ── Spa & Massage ──
  {
    id: 17,
    name: 'Swedish Full-Body Massage',
    category: 'Spa & Massage',
    duration: '1 hr',
    price: '₦20,000',
    description: 'Classic relaxation massage using long flowing strokes to relieve tension and promote deep calm.',
  },
  {
    id: 18,
    name: 'Deep Tissue Massage',
    category: 'Spa & Massage',
    duration: '1 hr 15 min',
    price: '₦25,000',
    description: 'Intensive pressure targeting chronic muscle knots, ideal for athletes and desk-bound professionals.',
  },
  {
    id: 19,
    name: 'Hot Stone Therapy',
    category: 'Spa & Massage',
    duration: '1 hr 30 min',
    price: '₦30,000',
    description: 'Heated basalt stones placed on key energy points combined with therapeutic massage for ultimate relaxation.',
  },
  {
    id: 20,
    name: 'Body Scrub & Wrap',
    category: 'Spa & Massage',
    duration: '1 hr',
    price: '₦18,000',
    description: 'Full-body exfoliation with sugar or salt scrub followed by a nourishing shea butter wrap.',
  },

  // ── Bridal ──
  {
    id: 21,
    name: 'Bridal Hair Styling',
    category: 'Bridal',
    duration: '3 hrs',
    price: '₦80,000',
    description: 'Bespoke bridal hair styling including trial session, day-of styling, and touch-up service.',
  },
  {
    id: 22,
    name: 'Bridal Makeup',
    category: 'Bridal',
    duration: '2 hrs',
    price: '₦65,000',
    description: 'Long-wearing airbrush or traditional bridal makeup with lashes, contour, and setting spray.',
  },
  {
    id: 23,
    name: 'Bridal Glow Package',
    category: 'Bridal',
    duration: '5 hrs',
    price: '₦120,000',
    description: 'Complete bridal prep: facial, body scrub, manicure, pedicure, hair, and makeup — your ultimate glow-up day.',
  },
  {
    id: 24,
    name: 'Bridesmaids Package (per person)',
    category: 'Bridal',
    duration: '2 hrs',
    price: '₦35,000',
    description: 'Coordinated hair and makeup for each bridesmaid to match the bridal party aesthetic.',
  },
  {
    id: 25,
    name: 'Pre-Wedding Skincare Plan',
    category: 'Bridal',
    duration: '4 sessions',
    price: '₦90,000',
    description: 'A 4-week skincare regimen with bi-weekly facials designed to perfect your complexion before the big day.',
  },
];

export default servicesData;
