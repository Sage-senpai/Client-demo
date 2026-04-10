import { useState } from 'react';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { caseStudies } from '../data/consultingData';

const filters = ['All', 'Strategy', 'Digital', 'Operations', 'Finance'] as const;

export default function CaseStudies() {
  const [active, setActive] = useState<string>('All');

  const filtered =
    active === 'All'
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === active);

  return (
    <div className="vx-cases">
      {/* ── Header ── */}
      <div className="vx-page-header">
        <div className="vx-page-header__bg" />
        <AnimatedSection className="vx-page-header__inner">
          <p className="vx-page-header__label">Case Studies</p>
          <h1 className="vx-page-header__title">
            Impact Across Industries and Borders
          </h1>
          <p className="vx-page-header__subtitle">
            From Fortune 500 retailers to sovereign wealth funds, our work spans
            sectors and geographies. Every engagement is measured by outcomes.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Filters ── */}
      <div className="vx-cases__filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`vx-cases__filter-btn ${
              active === f ? 'vx-cases__filter-btn--active' : ''
            }`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ── Grid ── */}
      <div className="vx-cases__grid">
        {filtered.map((cs) => (
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
    </div>
  );
}
