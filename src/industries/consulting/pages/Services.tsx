import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';
import { services } from '../data/consultingData';

export default function Services() {
  return (
    <div className="vx-services-page">
      {/* ── Header ── */}
      <div className="vx-page-header">
        <div className="vx-page-header__bg" />
        <AnimatedSection className="vx-page-header__inner">
          <p className="vx-page-header__label">Our Practices</p>
          <h1 className="vx-page-header__title">
            Eight Practices. One Mission.
          </h1>
          <p className="vx-page-header__subtitle">
            Our integrated consulting practices span strategy, operations,
            technology, and people — giving clients access to world-class
            expertise across every dimension of business performance.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Service Sections ── */}
      {services.map((svc, index) => (
        <AnimatedSection key={svc.id}>
          <div
            className={`vx-service-section ${
              index % 2 !== 0 ? 'vx-service-section--reverse' : ''
            }`}
          >
            <img
              className="vx-service-section__image"
              src={`https://picsum.photos/seed/vxsvc${index + 1}/800/600`}
              alt={svc.name}
              loading="lazy"
            />
            <div className="vx-service-section__content">
              <span className="vx-service-section__icon">{svc.icon}</span>
              <h2 className="vx-service-section__name">{svc.name}</h2>
              <p className="vx-service-section__desc">{svc.description}</p>
              <ul className="vx-service-section__deliverables">
                {svc.deliverables.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <div className="vx-service-section__industries">
                {svc.industries.map((ind, i) => (
                  <span className="vx-service-section__industry-tag" key={i}>
                    {ind}
                  </span>
                ))}
              </div>
              <Link to="/consulting/book">
                <motion.button
                  className="vx-service-section__cta"
                  {...buttonHover}
                >
                  Schedule a Call &#8594;
                </motion.button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      ))}

      {/* ── CTA ── */}
      <section className="vx-cta-banner">
        <div className="vx-cta-banner__bg" />
        <AnimatedSection className="vx-cta-banner__inner">
          <h2 className="vx-cta-banner__title">
            Not Sure Which Practice You Need?
          </h2>
          <p className="vx-cta-banner__subtitle">
            Our engagement begins with a diagnostic conversation. We will match
            you with the right team and practice based on your specific challenge.
          </p>
          <Link to="/consulting/book">
            <motion.button className="vx-hero__btn-primary" {...buttonHover}>
              Book a Consultation
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
