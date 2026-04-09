import AnimatedSection from '../../../components/shared/AnimatedSection';
import { blogPosts } from '../data/agritechData';

export default function Blog() {
  return (
    <div className="terra-blog">
      <AnimatedSection className="terra-blog__header">
        <span className="terra-section-label">TerraYield Insights</span>
        <h1 className="terra-section-heading">Insights &amp; Blog</h1>
        <p className="terra-section-subtitle">
          Market trends, farming tips, policy updates, and the latest in agritech innovation.
        </p>
      </AnimatedSection>

      <div className="terra-blog__grid">
        {blogPosts.map((post) => (
          <div className="terra-blog-card" key={post.id}>
            <div className="terra-blog-card__image">
              <img src={post.image} alt={post.title} loading="lazy" />
            </div>
            <div className="terra-blog-card__body">
              <span className="terra-blog-card__category">{post.category}</span>
              <h3 className="terra-blog-card__title">{post.title}</h3>
              <p className="terra-blog-card__excerpt">{post.excerpt}</p>
              <div className="terra-blog-card__meta">
                <span className="terra-blog-card__author">{post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
