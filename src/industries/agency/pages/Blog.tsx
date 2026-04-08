import AnimatedSection from '../../../components/shared/AnimatedSection';
import { blogPosts } from '../data/agencyData';

export default function Blog() {
  return (
    <div className="ag-blog">
      {/* ── Header ── */}
      <div className="ag-page-header">
        <div className="ag-page-header__bg" />
        <AnimatedSection className="ag-page-header__inner">
          <p className="ag-page-header__label">The Flux Blog</p>
          <h1 className="ag-page-header__title">
            Insights &amp; Ideas
          </h1>
          <p className="ag-page-header__subtitle">
            Practical marketing knowledge from the trenches. No fluff, no jargon
            — just strategies that actually work.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Blog Grid ── */}
      <div className="ag-blog__grid">
        {blogPosts.map((post) => (
          <AnimatedSection key={post.id}>
            <div className="ag-blog-card">
              <img
                className="ag-blog-card__image"
                src={post.image}
                alt={post.title}
                loading="lazy"
              />
              <div className="ag-blog-card__body">
                <div className="ag-blog-card__meta">
                  <span className="ag-blog-card__badge">{post.category}</span>
                  <span className="ag-blog-card__date">{post.date}</span>
                </div>
                <h3 className="ag-blog-card__title">{post.title}</h3>
                <p className="ag-blog-card__excerpt">{post.excerpt}</p>
                <span className="ag-blog-card__read-time">{post.readTime}</span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
