import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { services, caseStudies } from '../data/consultingData';

const clientLogos = [
  'Meridian Corp',
  'NovaTech',
  'Equinox Holdings',
  'Pinnacle Group',
  'Vanguard Industries',
  'Atlas Global',
  'Horizon Capital',
  'Cerulean Systems',
];

export default function Home() {
  const previewServices = services.slice(0, 4);
  const previewCases = caseStudies.slice(0, 3);

  return (
    <div className="vx-home">
      {/* ── Hero ── */}
      <section className="vx-hero">
        <div className="vx-hero__bg" />
        <div className="vx-hero__content">
          <motion.p
            className="vx-section-label"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Global Consulting
          </motion.p>
          <motion.h1
            className="vx-hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Strategic Intelligence for<br />
            <span>Ambitious Companies</span>
          </motion.h1>
          <motion.p
            className="vx-hero__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            We partner with leadership teams across 12 countries to solve their most
            complex challenges — from growth strategy and digital transformation to
            operational excellence and cross-border expansion.
          </motion.p>
          <motion.div
            className="vx-hero__ctas"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/consulting/case-studies">
              <motion.button className="vx-hero__btn-primary" {...buttonHover}>
                View Case Studies
              </motion.button>
            </Link>
            <Link to="/consulting/book">
              <motion.button className="vx-hero__btn-outline" {...buttonHover}>
                Book a Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Client Logo Marquee ── */}
      <section className="vx-marquee">
        <div className="vx-marquee__track">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <span className="vx-marquee__item" key={i}>
              {logo}
            </span>
          ))}
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="vx-stats">
        <div className="vx-stats__grid">
          <CounterStat end={200} suffix="+" label="Clients Served" />
          <CounterStat end={4.8} suffix="B+" label="Impact Delivered (USD)" />
          <CounterStat end={12} suffix="" label="Countries" />
          <CounterStat end={98} suffix="%" label="Client Retention" />
        </div>
      </section>

      {/* ── Featured Services ── */}
      <section className="vx-services-preview">
        <AnimatedSection className="vx-services-preview__header">
          <p className="vx-section-label">Our Practices</p>
          <h2 className="vx-section-title">Expertise That Moves Markets</h2>
          <p className="vx-section-subtitle">
            Eight integrated practices spanning strategy, operations, technology,
            and people — designed to deliver measurable impact at scale.
          </p>
        </AnimatedSection>

        <div className="vx-services-preview__grid">
          {previewServices.map((svc) => (
            <AnimatedSection key={svc.id}>
              <div className="vx-service-card">
                <span className="vx-service-card__icon">{svc.icon}</span>
                <h3 className="vx-service-card__title">{svc.name}</h3>
                <p className="vx-service-card__desc">{svc.description.slice(0, 120)}...</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="vx-services-preview__header" delay={0.2}>
          <Link to="/consulting/services">
            <motion.button className="vx-hero__btn-outline" {...buttonHover}>
              View All Services
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>

      {/* ── Case Study Preview ── */}
      <section className="vx-cases">
        <AnimatedSection className="vx-cases__header">
          <p className="vx-section-label">Selected Engagements</p>
          <h2 className="vx-section-title">Results That Define Careers</h2>
          <p className="vx-section-subtitle">
            Our work spans Fortune 500 corporations, sovereign funds, and
            high-growth unicorns across every continent.
          </p>
        </AnimatedSection>

        <div className="vx-cases__grid">
          {previewCases.map((cs) => (
            <AnimatedSection key={cs.id}>
              <div className="vx-case-card">
                <img
                  className="vx-case-card__image"
                  src={cs.image}
                  alt={cs.client}
                  loading="lazy"
                />
                <div className="vx-case-card__body">
                  <span className="vx-case-card__industry">{cs.industry}</span>
                  <h3 className="vx-case-card__client">{cs.client}</h3>
                  <p className="vx-case-card__challenge">{cs.challenge}</p>
                  <p className="vx-case-card__result">{cs.result}</p>
                  <div className="vx-case-card__tags">
                    {cs.approach.map((tag, idx) => (
                      <span className="vx-case-card__tag" key={idx}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="vx-cases__header" delay={0.2}>
          <Link to="/consulting/case-studies">
            <motion.button className="vx-hero__btn-outline" {...buttonHover}>
              View All Case Studies
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>

      {/* ── CTA Banner ── */}
      <section className="vx-cta-banner">
        <div className="vx-cta-banner__bg" />
        <AnimatedSection className="vx-cta-banner__inner">
          <h2 className="vx-cta-banner__title">
            Ready to Transform Your Business?
          </h2>
          <p className="vx-cta-banner__subtitle">
            Whether you are navigating a complex transformation, entering new markets,
            or preparing for the next phase of growth — let us talk.
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
