import AnimatedSection from '../../../components/shared/AnimatedSection';

interface BlogPost {
  title: string;
  category: 'Engineering' | 'Product' | 'Culture';
  date: string;
  excerpt: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'Why We Rewrote Our API Gateway in Go',
    category: 'Engineering',
    date: 'March 12, 2025',
    excerpt:
      'After 18 months on Node.js, our API gateway was hitting concurrency limits under peak load. Here is why we chose Go for the rewrite, how we migrated without downtime, and the performance gains we measured.',
  },
  {
    title: 'Designing for Offline-First in Sub-Saharan Africa',
    category: 'Product',
    date: 'February 28, 2025',
    excerpt:
      'Internet connectivity in much of Africa is intermittent and expensive. We share the patterns, libraries, and UX strategies we use to build apps that work flawlessly even when the network does not.',
  },
  {
    title: 'How We Run Async Standups Across 3 Time Zones',
    category: 'Culture',
    date: 'February 10, 2025',
    excerpt:
      'With team members in Lagos, Nairobi, and London, synchronous meetings are impractical. Here is the async-first workflow we developed that keeps everyone aligned without the meeting fatigue.',
  },
  {
    title: 'Building a Real-Time Fraud Detection Pipeline with Kafka and TensorFlow',
    category: 'Engineering',
    date: 'January 22, 2025',
    excerpt:
      'We walk through the architecture of a fraud detection system processing 50K events per second, from data ingestion through Kafka to ML inference and alert routing.',
  },
  {
    title: 'The Product Spec Template That Saved Us 200 Hours',
    category: 'Product',
    date: 'January 5, 2025',
    excerpt:
      'Misalignment between product and engineering was costing us entire sprints. We share the one-page spec template that eliminated scope creep and cut our cycle time in half.',
  },
  {
    title: 'Why Every Engineer at Axiom Labs Does Client Interviews',
    category: 'Culture',
    date: 'December 18, 2024',
    excerpt:
      'We believe engineers build better software when they hear problems directly from users. Here is how we structure our client interview program and what we have learned from a year of running it.',
  },
];

export default function Blog() {
  return (
    <div className="tech-blog-page">
      <div className="tech-blog-page__inner">
        <AnimatedSection className="tech-blog-page__header">
          <p className="section-label">Insights</p>
          <h1 className="tech-blog-page__title">Blog</h1>
          <p className="tech-blog-page__subtitle">
            Engineering deep dives, product thinking, and lessons from building software
            across Africa.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="tech-blog-page__grid">
            {blogPosts.map((post, i) => (
              <article className="tech-blog-card" key={i}>
                <div className="tech-blog-card__body">
                  <p className="tech-blog-card__category">{post.category}</p>
                  <h2 className="tech-blog-card__title">{post.title}</h2>
                  <p className="tech-blog-card__date">{post.date}</p>
                  <p className="tech-blog-card__excerpt">{post.excerpt}</p>
                  <span className="tech-blog-card__link">Read more &#8594;</span>
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
