import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';

const services = [
  {
    icon: '\u{1F4A7}',
    title: 'Smart Irrigation Solutions',
    desc: 'Precision irrigation powered by IoT sensors. Monitor soil moisture, weather patterns, and water usage in real-time from your phone.',
    features: [
      'Soil moisture sensors with 98% accuracy',
      'Automated drip irrigation scheduling',
      'Real-time weather integration',
      'Water usage analytics dashboard',
      'Up to 40% water savings',
    ],
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: '\u{1F52C}',
    title: 'Soil Testing & Analysis',
    desc: 'Comprehensive soil health analysis with actionable nutrient recommendations. Know exactly what your soil needs before you plant.',
    features: [
      'NPK & micronutrient analysis',
      'pH and organic matter testing',
      'Custom fertilizer recommendations',
      'Seasonal testing schedules',
      'Results in 48 hours',
    ],
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: '\u{1F331}',
    title: 'Crop Advisory',
    desc: 'AI-powered crop recommendations tailored to your soil, climate, and market demand. Maximize yield and revenue per hectare.',
    features: [
      'AI-driven planting recommendations',
      'Pest & disease early warning',
      'Optimal harvest timing alerts',
      'Market demand forecasting',
      'Personalized agronomist support',
    ],
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: '\u{1F4B0}',
    title: 'Farm Finance',
    desc: 'Access microloans, input financing, and crop insurance designed specifically for Nigerian smallholder farmers.',
    features: [
      'Microloans from ₦50,000 to ₦5M',
      'Input financing (seeds, fertilizer)',
      'Crop insurance partnerships',
      'Flexible repayment after harvest',
      'No collateral for small amounts',
    ],
    image: 'https://picsum.photos/seed/terrafinance/800/600',
  },
  {
    icon: '\u{1F69A}',
    title: 'Logistics & Cold Chain',
    desc: 'End-to-end harvest transport and cold storage network. Reduce post-harvest losses from 40% to under 5%.',
    features: [
      'Refrigerated truck fleet',
      'Cold storage hubs in 12 states',
      'Last-mile delivery coordination',
      'GPS tracking & temperature logs',
      'Aggregation centers',
    ],
    image: 'https://picsum.photos/seed/terralogistics/800/600',
  },
  {
    icon: '\u{1F393}',
    title: 'Training & Extension',
    desc: 'Farmer workshops, digital literacy programs, and field extension services. Empowering farmers with knowledge.',
    features: [
      'Monthly farmer workshops',
      'Mobile-first learning modules',
      'Field demonstration plots',
      'Digital literacy training',
      'Peer-to-peer farmer networks',
    ],
    image: 'https://picsum.photos/seed/terratrain/800/600',
  },
];

export default function Services() {
  return (
    <div className="ag-services">
      <AnimatedSection className="ag-services__hero">
        <span className="ag-section-label">What We Offer</span>
        <h1 className="ag-section-heading">Farm Services</h1>
        <p className="ag-section-subtitle">
          End-to-end agricultural solutions from soil preparation to market delivery.
        </p>
      </AnimatedSection>

      {services.map((service, i) => (
        <section
          className={`ag-service-block ${i % 2 !== 0 ? 'ag-service-block--reverse' : ''}`}
          key={i}
        >
          <AnimatedSection className="ag-service-block__inner">
            <div className="ag-service-block__image">
              <img src={service.image} alt={service.title} loading="lazy" />
            </div>
            <div className="ag-service-block__content">
              <div className="ag-service-block__icon">{service.icon}</div>
              <h2 className="ag-service-block__title">{service.title}</h2>
              <p className="ag-service-block__desc">{service.desc}</p>
              <ul className="ag-service-block__features">
                {service.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <motion.button className="ag-btn-primary" {...buttonHover}>
                Learn More
              </motion.button>
            </div>
          </AnimatedSection>
        </section>
      ))}
    </div>
  );
}
