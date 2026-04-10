/* ═══════════════════════════════════════════════════
   AEGIS COVER — Insurance Data Layer
   Global insurance platform
   ═══════════════════════════════════════════════════ */

// ── Insurance Plans ──
export interface InsurancePlan {
  id: number;
  name: string;
  icon: string;
  description: string;
  features: string[];
  startingPrice: string;
  coverageHighlights: string[];
}

export const plans: InsurancePlan[] = [
  {
    id: 1,
    name: 'Health Insurance',
    icon: '&#128153;',
    description:
      'Comprehensive health coverage for individuals and families worldwide. Access top-tier hospitals, specialists, and emergency care across 190+ countries.',
    features: [
      'Global hospital network (800K+ providers)',
      'Prescription drug coverage',
      'Mental health & therapy sessions',
      'Annual wellness checkups',
      'Emergency medical evacuation',
      'Dental & vision add-ons',
    ],
    startingPrice: '$89/mo',
    coverageHighlights: [
      'Up to $2M annual coverage',
      'Zero deductible options',
      '$50 co-pay for specialists',
      'Family plans available',
    ],
  },
  {
    id: 2,
    name: 'Life Insurance',
    icon: '&#128737;',
    description:
      'Protect your loved ones with flexible term and whole life policies. Guaranteed payouts, competitive premiums, and worldwide coverage.',
    features: [
      'Term life (10, 20, 30 years)',
      'Whole life with cash value',
      'Accidental death benefit',
      'Living benefits rider',
      'Guaranteed renewability',
      'Spousal & child riders',
    ],
    startingPrice: '$29/mo',
    coverageHighlights: [
      'Up to $5M death benefit',
      'No medical exam under $500K',
      'Locked-in premiums',
      'Accelerated underwriting',
    ],
  },
  {
    id: 3,
    name: 'Auto Insurance',
    icon: '&#128663;',
    description:
      'Full-spectrum vehicle protection from liability to comprehensive coverage. Drive with confidence on any road in the world.',
    features: [
      'Liability coverage',
      'Collision & comprehensive',
      'Roadside assistance 24/7',
      'Rental car reimbursement',
      'New car replacement',
      'Gap coverage available',
    ],
    startingPrice: '$65/mo',
    coverageHighlights: [
      'Up to $1M liability',
      'Multi-vehicle discounts',
      'Safe driver rewards',
      'International coverage options',
    ],
  },
  {
    id: 4,
    name: 'Home Insurance',
    icon: '&#127968;',
    description:
      'Shield your home and belongings against disasters, theft, and liability. Customizable policies for homeowners and renters worldwide.',
    features: [
      'Dwelling & structure coverage',
      'Personal property protection',
      'Liability & medical payments',
      'Additional living expenses',
      'Natural disaster add-ons',
      'High-value item scheduling',
    ],
    startingPrice: '$55/mo',
    coverageHighlights: [
      'Up to $2M dwelling coverage',
      'Replacement cost on contents',
      'Flood & earthquake riders',
      'Smart home discount',
    ],
  },
  {
    id: 5,
    name: 'Travel Insurance',
    icon: '&#9992;',
    description:
      'Travel the world worry-free with coverage for trip cancellation, medical emergencies, lost luggage, and more across all destinations.',
    features: [
      'Trip cancellation & interruption',
      'Emergency medical abroad',
      'Lost or delayed baggage',
      'Flight delay compensation',
      'Emergency evacuation',
      'Adventure sports coverage',
    ],
    startingPrice: '$12/trip',
    coverageHighlights: [
      'Up to $500K medical abroad',
      'Cancel for any reason option',
      '24/7 global assistance hotline',
      'Multi-trip annual plans',
    ],
  },
  {
    id: 6,
    name: 'Business Insurance',
    icon: '&#127970;',
    description:
      'Comprehensive commercial coverage including general liability, professional indemnity, property, and cyber risk for businesses of all sizes.',
    features: [
      'General liability',
      'Professional indemnity (E&O)',
      'Commercial property',
      'Cyber liability & data breach',
      'Workers compensation',
      'Business interruption',
    ],
    startingPrice: '$149/mo',
    coverageHighlights: [
      'Up to $10M general liability',
      'Tailored industry packages',
      'Multi-location coverage',
      'Dedicated risk advisor',
    ],
  },
];

// ── Claims ──
export interface Claim {
  id: string;
  policyNumber: string;
  type: string;
  date: string;
  status: 'Approved' | 'Processing' | 'Under Review' | 'Denied';
  amount: string;
}

export const claims: Claim[] = [
  {
    id: 'CLM-2025-0847',
    policyNumber: 'POL-HLT-90234',
    type: 'Health',
    date: '2025-01-08',
    status: 'Approved',
    amount: '$4,250.00',
  },
  {
    id: 'CLM-2025-0851',
    policyNumber: 'POL-AUT-44521',
    type: 'Auto',
    date: '2025-01-10',
    status: 'Processing',
    amount: '$12,800.00',
  },
  {
    id: 'CLM-2025-0863',
    policyNumber: 'POL-HOM-67893',
    type: 'Home',
    date: '2025-01-12',
    status: 'Approved',
    amount: '$28,500.00',
  },
  {
    id: 'CLM-2025-0879',
    policyNumber: 'POL-TRV-12098',
    type: 'Travel',
    date: '2025-01-14',
    status: 'Under Review',
    amount: '$1,875.00',
  },
  {
    id: 'CLM-2025-0884',
    policyNumber: 'POL-BIZ-33410',
    type: 'Business',
    date: '2025-01-15',
    status: 'Approved',
    amount: '$67,000.00',
  },
  {
    id: 'CLM-2025-0891',
    policyNumber: 'POL-LIF-55678',
    type: 'Life',
    date: '2025-01-16',
    status: 'Processing',
    amount: '$250,000.00',
  },
  {
    id: 'CLM-2025-0902',
    policyNumber: 'POL-HLT-90234',
    type: 'Health',
    date: '2025-01-18',
    status: 'Denied',
    amount: '$780.00',
  },
  {
    id: 'CLM-2025-0915',
    policyNumber: 'POL-AUT-44521',
    type: 'Auto',
    date: '2025-01-20',
    status: 'Under Review',
    amount: '$5,430.00',
  },
];

// ── FAQs ──
export interface FaqItem {
  category: 'General' | 'Claims' | 'Policies' | 'Payments';
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    category: 'General',
    q: 'What makes Aegis Cover different from other insurers?',
    a: 'Aegis Cover operates across 12 countries with a single unified platform. We combine AI-driven risk assessment with personalized service, offering faster underwriting, transparent pricing, and 24/7 global support. Our digital-first approach means you can manage everything from your phone.',
  },
  {
    category: 'General',
    q: 'In which countries does Aegis Cover operate?',
    a: 'We currently operate in the United States, United Kingdom, Canada, Australia, United Arab Emirates, Singapore, Germany, France, Japan, South Korea, Brazil, and India. We are actively expanding into additional markets across Europe and Asia-Pacific.',
  },
  {
    category: 'Claims',
    q: 'How do I file a claim?',
    a: 'You can file a claim through our online portal, mobile app, or by calling our 24/7 claims hotline. Simply provide your policy number, describe the incident, upload supporting documents, and our team will begin processing within 24 hours.',
  },
  {
    category: 'Claims',
    q: 'How long does it take to process a claim?',
    a: 'Simple claims (travel, minor health) are typically processed within 3-5 business days. Auto and home claims may take 7-14 business days depending on the assessment required. Life insurance claims are processed within 15-30 business days after all documentation is received.',
  },
  {
    category: 'Policies',
    q: 'Can I customize my coverage?',
    a: 'Absolutely. Every Aegis Cover policy is modular. You can add or remove riders, adjust deductibles, increase coverage limits, and bundle multiple policies for discounts. Our quote calculator helps you see exactly how changes affect your premium in real time.',
  },
  {
    category: 'Policies',
    q: 'What happens if I need to cancel my policy?',
    a: 'You can cancel any policy within the first 30 days for a full refund (free-look period). After that, cancellation terms vary by product. Term life and travel policies may have different surrender schedules. Contact our support team and we will walk you through your options.',
  },
  {
    category: 'Payments',
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit and debit cards (Visa, Mastercard, Amex), bank transfers, ACH/direct debit, and PayPal. For annual premiums, we also offer installment plans at no extra cost. Currency conversion is handled automatically for international customers.',
  },
  {
    category: 'Payments',
    q: 'Can I pay my premium annually for a discount?',
    a: 'Yes. Paying annually saves you up to 15% compared to monthly payments. We also offer semi-annual billing. All payment schedules are flexible and can be changed at any time through your account dashboard without penalties.',
  },
];

// ── Team ──
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Catherine Hargrove',
    role: 'Chief Executive Officer',
    location: 'New York, USA',
    image: 'https://picsum.photos/seed/aegis-ceo/400/400',
    bio: '22 years in global insurance. Former VP at MetLife. Harvard MBA. Led Aegis Cover from startup to 12-country operation.',
  },
  {
    id: 2,
    name: 'James Whitfield',
    role: 'Chief Underwriting Officer',
    location: 'London, UK',
    image: 'https://picsum.photos/seed/aegis-cuo/400/400',
    bio: '18 years in actuarial science and underwriting. Former Director at Lloyd\'s of London. Fellow of the Institute of Actuaries.',
  },
  {
    id: 3,
    name: 'Priya Mehta',
    role: 'Chief Technology Officer',
    location: 'Singapore',
    image: 'https://picsum.photos/seed/aegis-cto/400/400',
    bio: '15 years building enterprise platforms. Ex-Google, ex-Grab. Architect of Aegis Cover\'s AI-powered risk engine.',
  },
  {
    id: 4,
    name: 'Omar Al-Rashidi',
    role: 'VP of Middle East & Africa',
    location: 'Dubai, UAE',
    image: 'https://picsum.photos/seed/aegis-vpmea/400/400',
    bio: '14 years in insurance markets across MENA. Former Regional Director at AXA Gulf. Drives growth in emerging markets.',
  },
  {
    id: 5,
    name: 'Sophie Laurent',
    role: 'Chief Claims Officer',
    location: 'Toronto, Canada',
    image: 'https://picsum.photos/seed/aegis-cco/400/400',
    bio: '16 years in claims management and customer advocacy. Built Aegis Cover\'s 48-hour fast-track claims system.',
  },
  {
    id: 6,
    name: 'Liam Chen',
    role: 'Chief Financial Officer',
    location: 'Sydney, Australia',
    image: 'https://picsum.photos/seed/aegis-cfo/400/400',
    bio: '20 years in financial services. CPA and CFA charterholder. Oversees $4B+ in managed assets and global compliance.',
  },
];

// ── Testimonials ──
export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  product: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Robert & Lisa Hawthorne',
    location: 'Austin, Texas, USA',
    quote:
      'After a devastating house fire, Aegis Cover processed our home insurance claim in just 9 days. The payout covered everything — rebuilding costs, temporary housing, and personal belongings. We cannot recommend them enough.',
    product: 'Home Insurance',
  },
  {
    id: 2,
    name: 'Dr. Eleanor Ashworth',
    location: 'Manchester, UK',
    quote:
      'As a frequent traveler for medical conferences, their travel insurance has been invaluable. When I had a medical emergency in Tokyo, Aegis Cover coordinated everything within hours. Truly world-class service.',
    product: 'Travel Insurance',
  },
  {
    id: 3,
    name: 'Khalid Al-Mansouri',
    location: 'Abu Dhabi, UAE',
    quote:
      'We insured our entire fleet of 40 commercial vehicles with Aegis Cover. Their business auto policy saved us 22% compared to our previous provider, and the claims process is seamless through their digital portal.',
    product: 'Business Insurance',
  },
];

// ── Global Offices ──
export interface Office {
  city: string;
  country: string;
  address: string;
  phone: string;
  type: 'Headquarters' | 'Regional Office';
}

export const offices: Office[] = [
  {
    city: 'New York',
    country: 'United States',
    address: '350 Fifth Avenue, Suite 4200, New York, NY 10118',
    phone: '+1 (212) 555-0180',
    type: 'Headquarters',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '30 St Mary Axe, 24th Floor, London EC3A 8BF',
    phone: '+44 20 7946 0958',
    type: 'Regional Office',
  },
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    address: 'DIFC Gate Village, Building 3, Level 5, Dubai',
    phone: '+971 4 555 8200',
    type: 'Regional Office',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: '1 Raffles Place, Tower 2, #40-02, Singapore 048616',
    phone: '+65 6500 8300',
    type: 'Regional Office',
  },
  {
    city: 'Sydney',
    country: 'Australia',
    address: '200 George Street, Level 35, Sydney NSW 2000',
    phone: '+61 2 8000 4500',
    type: 'Regional Office',
  },
  {
    city: 'Toronto',
    country: 'Canada',
    address: '100 King Street West, Suite 5600, Toronto ON M5X 1C9',
    phone: '+1 (416) 555-0240',
    type: 'Regional Office',
  },
];
