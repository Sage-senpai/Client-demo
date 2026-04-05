import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';

const services = [
  {
    name: 'Coral Deep-Tissue Massage',
    duration: '90 min',
    price: '₦35,000',
    description:
      'A restorative full-body massage using heated volcanic stones and locally pressed coconut oil to release deep-seated tension and restore muscular balance.',
  },
  {
    name: 'Ocean Mineral Body Wrap',
    duration: '60 min',
    price: '₦28,000',
    description:
      'Atlantic sea minerals and African shea butter are blended into a nourishing wrap that detoxifies the skin, leaving it silky and deeply hydrated.',
  },
  {
    name: 'Ondo Herbal Facial',
    duration: '75 min',
    price: '₦30,000',
    description:
      'A bespoke facial using indigenous herbs from the Ondo region. Includes deep cleansing, a turmeric-honey mask, and a gentle lymphatic drainage massage.',
  },
  {
    name: 'Couples Sunset Ritual',
    duration: '120 min',
    price: '₦85,000',
    description:
      'Shared in our open-air pavilion overlooking the ocean, this ritual for two includes a body scrub, aromatic oil massage, and a private plunge pool session.',
  },
  {
    name: 'Reflexology & Scalp Treatment',
    duration: '45 min',
    price: '₦20,000',
    description:
      'Targeted pressure-point therapy on the feet combined with a warm oil scalp massage to ease stress and promote deep relaxation.',
  },
  {
    name: 'Detox & Revitalise Package',
    duration: '180 min',
    price: '₦95,000',
    description:
      'Our signature half-day retreat: steam room, full-body scrub, detox wrap, 90-minute massage, and a fresh juice to finish. The ultimate reset.',
  },
];

const facilities = [
  { icon: '🧖', name: 'Steam Room', desc: 'Eucalyptus-infused steam for deep pore cleansing' },
  { icon: '🏊', name: 'Vitality Pool', desc: 'Heated hydrotherapy pool with massage jets' },
  { icon: '🧘', name: 'Yoga Pavilion', desc: 'Open-air deck for daily guided sessions' },
  { icon: '🍵', name: 'Relaxation Lounge', desc: 'Herbal teas, fruit waters, and quiet reflection' },
];

export default function Spa() {
  return (
    <div className="resort-spa-page">
      {/* ── PAGE HERO ── */}
      <div className="resort-page-hero">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
          alt="Spa & Wellness"
          className="resort-page-hero__bg"
        />
        <div className="resort-page-hero__overlay" />
        <div className="resort-page-hero__content">
          <h1 className="resort-page-hero__title">Spa &amp; Wellness</h1>
          <p className="resort-page-hero__subtitle">
            Restore body and mind in our oceanside wellness sanctuary.
          </p>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="resort-section">
        <div className="resort-container">
          <AnimatedSection>
            <h2 className="resort-section-title">Spa Treatments</h2>
            <p className="resort-section-subtitle">
              Every treatment is rooted in Nigerian botanical traditions and
              enhanced by modern wellness science.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="resort-spa-services">
              {services.map((s) => (
                <div key={s.name} className="resort-spa-card">
                  <div className="resort-spa-card__header">
                    <div className="resort-spa-card__name">{s.name}</div>
                    <div className="resort-spa-card__price">{s.price}</div>
                  </div>
                  <div className="resort-spa-card__duration">{s.duration}</div>
                  <p className="resort-spa-card__desc">{s.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FACILITIES ── */}
      <section className="resort-section resort-spa-facilities">
        <div className="resort-container">
          <AnimatedSection>
            <h2 className="resort-section-title">Spa Facilities</h2>
            <p className="resort-section-subtitle">
              Complimentary for all resort guests. Open daily from 6:00 AM to 9:00 PM.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="resort-spa-facilities__grid">
              {facilities.map((f) => (
                <div key={f.name} className="resort-facility-card">
                  <div className="resort-facility-card__icon">{f.icon}</div>
                  <div className="resort-facility-card__name">{f.name}</div>
                  <p className="resort-facility-card__desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── BOOKING CTA ── */}
      <AnimatedSection>
        <div className="resort-spa-cta">
          <div className="resort-container">
            <h3>Book Your Spa Experience</h3>
            <p>
              Advance booking is recommended to secure your preferred time.
              Walk-in guests are welcome subject to availability.
            </p>
            <motion.div {...buttonHover}>
              <Link to="/resort/book" className="resort-btn resort-btn--secondary">
                Reserve a Treatment
              </Link>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
