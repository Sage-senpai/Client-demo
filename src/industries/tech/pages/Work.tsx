import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp } from '../../../styles/_animations';
import caseStudies from '../data/caseStudiesData';

const sectors = ['All', 'FinTech', 'HealthTech', 'E-Commerce', 'EdTech', 'Web3'] as const;

export default function Work() {
  const [filter, setFilter] = useState<string>('All');

  const filtered = filter === 'All'
    ? caseStudies
    : caseStudies.filter((cs) => cs.sector === filter);

  return (
    <div className="tech-work-page">
      <div className="tech-work-page__inner">
        <AnimatedSection className="tech-work-page__header">
          <p className="section-label">Our Work</p>
          <h1 className="tech-work-page__title">Case Studies</h1>
          <p className="tech-work-page__subtitle">
            Real problems. Real outcomes. Every project starts with a challenge and ends
            with measurable impact.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <img
            className="tech-page-image"
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
            alt="Server room"
            loading="lazy"
          />
        </AnimatedSection>

        <AnimatedSection>
          <div className="tech-filters">
            {sectors.map((sector) => (
              <button
                key={sector}
                className={`tech-filters__btn ${filter === sector ? 'tech-filters__btn--active' : ''}`}
                onClick={() => setFilter(sector)}
              >
                {sector}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="tech-work-grid">
          <AnimatePresence mode="wait">
            {filtered.map((cs) => (
              <motion.div
                key={cs.id}
                className="tech-work-card"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.35 }}
                layout
              >
                <span className={`tech-work-card__sector tech-work-card__sector--${cs.sector}`}>
                  {cs.sector}
                </span>
                <h3 className="tech-work-card__name">{cs.name}</h3>
                <p className="tech-work-card__challenge">{cs.challenge}</p>
                <p className="tech-work-card__outcome">{cs.outcome}</p>
                <div className="tech-work-card__stack">
                  {cs.techStack.map((tech) => (
                    <span className="tech-work-card__stack-pill" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
