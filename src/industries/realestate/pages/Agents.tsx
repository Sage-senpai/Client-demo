import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { agents } from '../data/propertiesData';

export default function Agents() {
  return (
    <div className="re-agents-page">
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
            Our Agents
          </motion.h1>
          <motion.p
            className="re-page-header__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Meet the experts who make your property dreams a reality.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* ── Agents Grid ── */}
      <section className="re-agents">
        <AnimatedSection className="re-agents__inner">
          <span className="re-section-label">The Team</span>
          <h2 className="re-agents__heading">Experienced Real Estate Professionals</h2>
          <p className="re-agents__subtitle">
            Our agents combine deep market knowledge, strong negotiation skills, and a passion
            for helping clients find their perfect property.
          </p>
          <div className="re-agents__grid">
            {agents.map((agent) => (
              <div className="re-agent-card" key={agent.id}>
                <img
                  className="re-agent-card__photo"
                  src={agent.image}
                  alt={agent.name}
                  loading="lazy"
                />
                <div className="re-agent-card__body">
                  <h3 className="re-agent-card__name">{agent.name}</h3>
                  <p className="re-agent-card__specialty">{agent.specialty}</p>
                  <p className="re-agent-card__listings">{agent.listings} Active Listings</p>
                  <p className="re-agent-card__phone">{agent.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── CTA ── */}
      <section className="re-cta">
        <AnimatedSection className="re-cta__inner">
          <h2 className="re-cta__heading">Want to join our team?</h2>
          <p className="re-cta__text">
            We are always looking for talented, driven real estate professionals.
            If you are passionate about property, we want to hear from you.
          </p>
          <Link to="/realestate/contact">
            <motion.button className="re-cta__btn" {...buttonHover}>
              Get in Touch &rarr;
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
