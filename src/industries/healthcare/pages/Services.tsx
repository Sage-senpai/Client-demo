import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { services } from '../data/medicalData';

export default function Services() {
  return (
    <div className="med-services-page-wrap">
      {/* ── Page Header ── */}
      <section className="med-page-header">
        <AnimatedSection className="med-page-header__inner">
          <motion.h1
            className="med-page-header__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="med-page-header__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Comprehensive medical care across 12 specialized departments,
            all equipped with modern facilities and expert staff.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* ── All Services ── */}
      <section className="med-services-page">
        <AnimatedSection className="med-services-page__inner">
          <div className="med-services-page__grid">
            {services.map((service) => (
              <div className="med-service-card" key={service.id}>
                <span className="med-service-card__icon">{service.icon}</span>
                <h3 className="med-service-card__name">{service.name}</h3>
                <p className="med-service-card__dept">{service.department}</p>
                <p className="med-service-card__desc">{service.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── CTA ── */}
      <section className="med-cta-banner">
        <AnimatedSection className="med-cta-banner__inner">
          <h2 className="med-cta-banner__heading">
            Ready to get started?
          </h2>
          <p className="med-cta-banner__text">
            Choose a department and book your consultation today.
            Same-day appointments available for urgent cases.
          </p>
          <Link to="/healthcare/book">
            <motion.button className="med-cta-banner__btn" {...buttonHover}>
              Book Appointment &rarr;
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
