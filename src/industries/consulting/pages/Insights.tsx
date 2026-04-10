import AnimatedSection from '../../../components/shared/AnimatedSection';
import { insights } from '../data/consultingData';

export default function Insights() {
  return (
    <div className="vx-insights">
      {/* ── Header ── */}
      <div className="vx-page-header">
        <div className="vx-page-header__bg" />
        <AnimatedSection className="vx-page-header__inner">
          <p className="vx-page-header__label">Insights</p>
          <h1 className="vx-page-header__title">
            Thought Leadership from the Front Lines
          </h1>
          <p className="vx-page-header__subtitle">
            Original research, frameworks, and perspectives from our partners and
            practitioners — designed to help leaders navigate complexity with
            confidence.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Insights Grid ── */}
      <div className="vx-insights__grid">
        {insights.map((post) => (
          <AnimatedSection key={post.id}>
            <div className="vx-insight-card">
              <img
                className="vx-insight-card__image"
                src={post.image}
                alt={post.title}
                loading="lazy"
              />
              <div className="vx-insight-card__body">
                <div className="vx-insight-card__meta">
                  <span className="vx-insight-card__category">
                    {post.category}
                  </span>
                  <span className="vx-insight-card__date">{post.date}</span>
                </div>
                <h3 className="vx-insight-card__title">{post.title}</h3>
                <p className="vx-insight-card__excerpt">{post.excerpt}</p>
                <span className="vx-insight-card__link">
                  Read More &#8594;
                </span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
