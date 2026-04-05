export interface ServiceCategory {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
}

const servicesData: ServiceCategory[] = [
  {
    id: 'food',
    icon: '🍔',
    title: 'Food Delivery',
    description:
      'Craving something delicious? We partner with over 2,000 restaurants, fast-food joints, and local buka spots across Lagos to bring your favourite meals straight to your door — hot and fresh, every single time.',
    features: [
      'Average delivery time under 35 minutes',
      'Real-time temperature-controlled packaging',
      'In-app restaurant reviews and ratings',
      'Schedule meals up to 7 days in advance',
      'Group ordering for offices and events',
    ],
    cta: 'Order Food Now',
  },
  {
    id: 'parcel',
    icon: '📦',
    title: 'Parcel Delivery',
    description:
      'Send parcels across Lagos and beyond with same-day and next-day options. From documents to bulky items, our riders handle it all with care and speed. Track every step of the journey in real time.',
    features: [
      'Same-day delivery within Lagos',
      'Next-day inter-city delivery to 24 cities',
      'Up to 50kg per parcel',
      'Insurance coverage up to ₦500,000',
      'Proof of delivery with photo confirmation',
    ],
    cta: 'Send a Parcel',
  },
  {
    id: 'pharmacy',
    icon: '💊',
    title: 'Pharmacy Delivery',
    description:
      'Get your prescriptions and over-the-counter medications delivered discreetly and quickly. We partner with licensed pharmacies to ensure you receive genuine, properly stored medications.',
    features: [
      'Licensed pharmacy partners only',
      'Cold-chain delivery for sensitive medications',
      'Prescription verification via in-app upload',
      'Discreet, tamper-evident packaging',
      'Priority delivery within 45 minutes',
    ],
    cta: 'Order Medication',
  },
  {
    id: 'ecommerce',
    icon: '🛒',
    title: 'E-commerce Fulfillment',
    description:
      'Online sellers, we have got your back. Integrate Zinga into your Shopify, WooCommerce, or custom store and let us handle last-mile delivery. Your customers get fast shipping, you get happy reviews.',
    features: [
      'API and webhook integrations',
      'Shopify & WooCommerce plugins',
      'Cash-on-delivery collection and remittance',
      'Branded tracking pages for your store',
      'Bulk dispatch dashboard for high-volume sellers',
    ],
    cta: 'Integrate Your Store',
  },
  {
    id: 'medical',
    icon: '🏥',
    title: 'Medical Logistics',
    description:
      'Hospitals, labs, and clinics trust Zinga for time-sensitive medical deliveries. From blood samples to medical equipment, we maintain strict chain-of-custody protocols and temperature controls.',
    features: [
      'HIPAA-equivalent data handling',
      'Temperature-logged deliveries (2°C – 8°C)',
      'Chain-of-custody tracking with digital signatures',
      'Dedicated medical courier fleet',
      'SLA-backed delivery windows',
    ],
    cta: 'Contact Medical Team',
  },
];

export default servicesData;
