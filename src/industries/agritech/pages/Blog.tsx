import AnimatedSection from '../../../components/shared/AnimatedSection';
import { blogPosts } from '../data/agritechData';

export default function Blog() {
  return (
    <div className="ag-blog">
      <AnimatedSection className="ag-blog__header">
        <span className="ag-section-label">TerraYield Insights</span>
        <h1 className="ag-section-heading">Insights &amp; Blog</h1>
        <p className="ag-section-subtitle">
          Market trends, farming tips, policy updates, and the latest in agritech innovation.
        </p>
      </AnimatedSection>

      <div className="ag-blog__grid">
        {blogPosts.map((post) => (
          <div className="ag-blog-card" key={post.id}>
            <div className="ag-blog-card__image">
              <img src={post.image} alt={post.title} loading="lazy" />
            </div>
            <div className="ag-blog-card__body">
              <span className="ag-blog-card__category">{post.category}</span>
              <h3 className="ag-blog-card__title">{post.title}</h3>
              <p className="ag-blog-card__excerpt">{post.excerpt}</p>
              <div className="ag-blog-card__meta">
                <span className="ag-blog-card__author">{post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
