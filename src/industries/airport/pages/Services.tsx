import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { pageTransition } from '../../../styles/_animations';

interface ServiceItem {
  icon: string;
  name: string;
  location: string;
  hours: string;
  description: string;
}

interface ServiceCategory {
  title: string;
  emoji: string;
  items: ServiceItem[];
}

const categories: ServiceCategory[] = [
  {
    title: 'Lounges',
    emoji: '🛋️',
    items: [
      {
        icon: '🌟',
        name: 'Diamond First Lounge',
        location: 'Terminal 3, Level 3',
        hours: '24 hours',
        description: 'Ultra-premium lounge with private suites, a la carte dining, spa treatments, and a champagne bar for first-class passengers.',
      },
      {
        icon: '🏔️',
        name: 'Horizon Business Lounge',
        location: 'Terminal 3, Level 2',
        hours: '05:00 – 23:00',
        description: 'Spacious business lounge featuring hot buffet, shower suites, high-speed Wi-Fi, and a dedicated work area.',
      },
      {
        icon: '🌿',
        name: 'Savanna Executive Lounge',
        location: 'Terminal 2, Level 2',
        hours: '06:00 – 22:00',
        description: 'Regional-themed lounge with comfortable seating, African cuisine, and runway views.',
      },
      {
        icon: '✈️',
        name: 'Apogee Domestic Lounge',
        location: 'Terminal 1, Level 1',
        hours: '05:30 – 21:00',
        description: 'Complimentary refreshments, newspapers, and quiet workspace for premium domestic travelers.',
      },
    ],
  },
  {
    title: 'Dining',
    emoji: '🍽️',
    items: [
      {
        icon: '🔥',
        name: 'Kilimanjaro Grill',
        location: 'Terminal 1, Ground Floor',
        hours: '06:00 – 22:00',
        description: 'Charcoal-grilled suya, jollof rice, and Nigerian comfort food favorites served fresh throughout the day.',
      },
      {
        icon: '🍕',
        name: 'Le Vol International Kitchen',
        location: 'Terminal 3, Level 2',
        hours: '24 hours',
        description: 'Global cuisine from Italian pizza to Japanese ramen, catering to international travelers around the clock.',
      },
      {
        icon: '☕',
        name: 'Bean & Brew',
        location: 'All Terminals, Multiple Locations',
        hours: '04:30 – 23:00',
        description: 'Premium Ethiopian and Colombian coffee, fresh pastries, and healthy grab-and-go meals.',
      },
      {
        icon: '🍸',
        name: 'Cloud Nine Cocktail Bar',
        location: 'Terminal 3, Level 3',
        hours: '11:00 – 01:00',
        description: 'Signature cocktails and a curated wine list with panoramic views of the runway.',
      },
    ],
  },
  {
    title: 'Shopping',
    emoji: '🛍️',
    items: [
      {
        icon: '💎',
        name: 'World Duty Free',
        location: 'Terminal 3, Departure Hall',
        hours: '05:00 – 23:00',
        description: 'Tax-free luxury brands, fragrances, electronics, and spirits from around the world.',
      },
      {
        icon: '🎨',
        name: 'Africa Arts & Crafts Market',
        location: 'Terminal 2, Level 1',
        hours: '07:00 – 21:00',
        description: 'Curated African art, handwoven textiles, beadwork, and unique souvenirs from local artisans.',
      },
      {
        icon: '📱',
        name: 'Tech Zone',
        location: 'Terminal 1, Level 1',
        hours: '06:00 – 22:00',
        description: 'Latest gadgets, travel adapters, noise-cancelling headphones, and tech accessories.',
      },
    ],
  },
  {
    title: 'Medical',
    emoji: '🏥',
    items: [
      {
        icon: '🩺',
        name: 'International Medical Center',
        location: 'Terminal 3, Ground Floor',
        hours: '24 hours',
        description: 'Full-service medical facility with doctors on call, vaccinations, and emergency treatment.',
      },
      {
        icon: '💊',
        name: 'Airport Pharmacy',
        location: 'All Terminals, Ground Floor',
        hours: '06:00 – 22:00',
        description: 'Over-the-counter medications, prescriptions, first-aid supplies, and health essentials.',
      },
    ],
  },
  {
    title: 'Accessibility',
    emoji: '♿',
    items: [
      {
        icon: '🦽',
        name: 'Mobility Assistance',
        location: 'All Terminals, Information Desk',
        hours: '24 hours',
        description: 'Wheelchair services, electric carts, and dedicated staff for passengers with reduced mobility.',
      },
      {
        icon: '👁️',
        name: 'Sensory Support Hub',
        location: 'Terminal 1, Level 1',
        hours: '06:00 – 22:00',
        description: 'Quiet rooms, tactile guides, hearing loop systems, and assistance for visually impaired travelers.',
      },
      {
        icon: '👶',
        name: 'Family & Nursing Rooms',
        location: 'All Terminals, Near Gates',
        hours: '24 hours',
        description: 'Private nursing rooms, baby-changing facilities, and play areas for families traveling with children.',
      },
    ],
  },
];

export default function Services() {
  return (
    <motion.div {...pageTransition}>
      <section className="airport-services-page">
        <div className="container">
          <AnimatedSection>
            <h1 className="airport-services-page__title">Passenger Services</h1>
            <p className="airport-services-page__subtitle">
              Everything you need for a seamless airport experience
            </p>
          </AnimatedSection>

          {categories.map((category) => (
            <div key={category.title} className="airport-services-page__category">
              <AnimatedSection>
                <h2 className="airport-services-page__category-title">
                  <span className="airport-services-page__category-emoji">{category.emoji}</span>
                  {category.title}
                </h2>
              </AnimatedSection>
              <AnimatedSection>
                <div className="grid-3">
                  {category.items.map((item) => (
                    <div key={item.name} className="service-detail-card">
                      <div className="service-detail-card__icon">{item.icon}</div>
                      <h3 className="service-detail-card__name">{item.name}</h3>
                      <p className="service-detail-card__location">{item.location}</p>
                      <p className="service-detail-card__hours">{item.hours}</p>
                      <p className="service-detail-card__desc">{item.description}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
