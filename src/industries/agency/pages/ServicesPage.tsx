import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';
import { services } from '../data/agencyData';

export default function ServicesPage() {
  return (
    <div className="ag-services-page">
      {/* ── Header ── */}
      <div className="ag-page-header">
        <div className="ag-page-header__bg" />
        <AnimatedSection className="ag-page-header__inner">
          <p className="ag-page-header__label">Our Services</p>
          <h1 className="ag-page-header__title">
            Everything You Need to Grow
          </h1>
          <p className="ag-page-header__subtitle">
            Six core services. One unified strategy. We cover every angle of
            your digital presence so nothing falls through the cracks.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Services Grid ── */}
      <div className="ag-services-full-grid">
        {services.map((svc) => (
          <AnimatedSection key={svc.id}>
            <div className="ag-service-full-card">
              <span className="ag-service-full-card__icon">{svc.icon}</span>
              <h2 className="ag-service-full-card__title">{svc.title}</h2>
              <p className="ag-service-full-card__desc">{svc.description}</p>
              <p className="ag-service-full-card__deliverables-title">
                Deliverables
              </p>
              <ul className="ag-service-full-card__deliverables">
                {svc.deliverables.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* ── CTA ── */}
      <section className="ag-cta-banner">
        <div className="ag-cta-banner__bg" />
        <AnimatedSection className="ag-cta-banner__inner">
          <h2 className="ag-cta-banner__title">
            Not Sure What You Need?
          </h2>
          <p className="ag-cta-banner__subtitle">
            Book a free 30-minute discovery call and we will map out a custom
            strategy for your brand. No strings attached.
          </p>
          <Link to="/agency/contact">
            <motion.button className="ag-hero__btn-primary" {...buttonHover}>
              Book a Discovery Call
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
