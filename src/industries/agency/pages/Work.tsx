import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';
import { caseStudies } from '../data/agencyData';
import type { CaseStudy } from '../data/agencyData';

const filters = ['All', 'Branding', 'Web', 'Social', 'SEO'] as const;

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filtered: CaseStudy[] =
    activeFilter === 'All'
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === activeFilter);

  return (
    <div className="ag-work">
      {/* ── Header ── */}
      <div className="ag-page-header">
        <div className="ag-page-header__bg" />
        <AnimatedSection className="ag-page-header__inner">
          <p className="ag-page-header__label">Our Work</p>
          <h1 className="ag-page-header__title">
            Case Studies &amp; Results
          </h1>
          <p className="ag-page-header__subtitle">
            Real projects, real numbers. Every case study here represents a brand
            we helped transform through strategy and creative execution.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Filters ── */}
      <div className="ag-work-filters">
        {filters.map((f) => (
          <motion.button
            key={f}
            className={`ag-filter-btn ${activeFilter === f ? 'ag-filter-btn--active' : ''}`}
            onClick={() => setActiveFilter(f)}
            {...buttonHover}
          >
            {f}
          </motion.button>
        ))}
      </div>

      {/* ── Grid ── */}
      <div className="ag-work-grid">
        {filtered.map((cs) => (
          <AnimatedSection key={cs.id}>
            <div className="ag-case-card">
              <img
                className="ag-case-card__image"
                src={cs.image}
                alt={cs.client}
                loading="lazy"
              />
              <div className="ag-case-card__body">
                <span className="ag-case-card__category">{cs.category}</span>
                <h3 className="ag-case-card__client">{cs.client}</h3>
                <p className="ag-case-card__industry">{cs.industry}</p>
                <p className="ag-case-card__results">{cs.results}</p>
                <div className="ag-case-card__stack">
                  {cs.techStack.map((tech, idx) => (
                    <span className="ag-case-card__tech" key={idx}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* ── CTA ── */}
      <section className="ag-cta-banner">
        <div className="ag-cta-banner__bg" />
        <AnimatedSection className="ag-cta-banner__inner">
          <h2 className="ag-cta-banner__title">
            Want Results Like These?
          </h2>
          <p className="ag-cta-banner__subtitle">
            Your brand could be our next success story. Let us discuss how we can
            help you achieve your growth goals.
          </p>
          <Link to="/agency/contact">
            <motion.button className="ag-hero__btn-primary" {...buttonHover}>
              Start a Project
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
