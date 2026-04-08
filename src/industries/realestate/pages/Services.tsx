import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';

const services = [
  {
    icon: '\u{1F3E0}',
    title: 'Buying',
    text: 'From first-time buyers to seasoned investors, we guide you through the entire purchase process. Our curated listings, market insights, and negotiation expertise ensure you secure the best deal on your dream property.',
  },
  {
    icon: '\u{1F4B0}',
    title: 'Selling',
    text: 'Maximize your property&apos;s value with our comprehensive selling service. Professional photography, strategic pricing, targeted marketing campaigns, and skilled negotiation to get you the best return on your investment.',
  },
  {
    icon: '\u{1F511}',
    title: 'Renting',
    text: 'Whether you are a landlord seeking reliable tenants or a tenant searching for the perfect home, our rental service covers everything from listing to lease signing and property handover.',
  },
  {
    icon: '\u{1F3E2}',
    title: 'Property Management',
    text: 'Full-service property management for landlords and investors. We handle tenant screening, rent collection, maintenance coordination, and regular property inspections so you can earn passively.',
  },
  {
    icon: '\u{1F4CA}',
    title: 'Valuation',
    text: 'Get an accurate, market-reflective valuation of your property. Our certified valuers use comparable analysis, location assessment, and market trends to determine the true worth of your real estate asset.',
  },
  {
    icon: '\u{2696}\u{FE0F}',
    title: 'Legal Advisory',
    text: 'Navigate the complexities of Nigerian property law with confidence. Our legal team handles title verification, contract review, property documentation, and ensures all transactions comply with regulatory requirements.',
  },
];

export default function Services() {
  return (
    <div className="re-services-page">
      {/* ── Page Header ── */}
      <section className="re-page-header">
        <AnimatedSection className="re-page-header__inner">
          <motion.h1
            className="re-page-header__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="re-page-header__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Comprehensive real estate solutions tailored to your needs.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* ── Services Grid ── */}
      <section className="re-services">
        <AnimatedSection className="re-services__inner">
          <span className="re-section-label">What We Offer</span>
          <h2 className="re-services__heading">End-to-End Real Estate Solutions</h2>
          <p className="re-services__subtitle">
            From property search to legal closing, we cover every aspect of the real estate journey
            with professionalism and dedication.
          </p>
          <div className="re-services__grid">
            {services.map((svc) => (
              <div className="re-service-card" key={svc.title}>
                <span className="re-service-card__icon">{svc.icon}</span>
                <h3 className="re-service-card__title">{svc.title}</h3>
                <p className="re-service-card__text">{svc.text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── CTA ── */}
      <section className="re-cta">
        <AnimatedSection className="re-cta__inner">
          <h2 className="re-cta__heading">Need a service not listed here?</h2>
          <p className="re-cta__text">
            We tailor our approach to your unique real estate needs. Reach out and let
            us craft a custom solution for you.
          </p>
          <Link to="/realestate/contact">
            <motion.button className="re-cta__btn" {...buttonHover}>
              Contact Us &rarr;
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
