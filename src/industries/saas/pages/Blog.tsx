import AnimatedSection from '../../../components/shared/AnimatedSection';

interface BlogPost {
  date: string;
  category: 'Product' | 'Engineering' | 'Design';
  title: string;
  excerpt: string;
}

const posts: BlogPost[] = [
  {
    date: 'March 28, 2025',
    category: 'Product',
    title: 'Introducing AI Task Prioritization 2.0',
    excerpt:
      'Our completely redesigned AI engine now considers 40+ signals to rank your backlog with unprecedented accuracy. See how teams are saving 10+ hours per sprint with smarter prioritization.',
  },
  {
    date: 'March 15, 2025',
    category: 'Engineering',
    title: 'How We Scaled to 1 Million Concurrent Users',
    excerpt:
      'A deep dive into the architecture decisions, database optimizations, and caching strategies that enabled Vela to handle massive scale without breaking a sweat.',
  },
  {
    date: 'March 3, 2025',
    category: 'Design',
    title: 'Redesigning the Vela Dashboard Experience',
    excerpt:
      'Our design team shares the research, prototyping, and iteration process behind the new dashboard — including the 200+ user interviews that shaped every pixel.',
  },
  {
    date: 'February 20, 2025',
    category: 'Product',
    title: 'Workflow Automation: 50 New Templates',
    excerpt:
      'We just shipped 50 new automation templates covering CI/CD pipelines, QA workflows, design handoffs, and more. Set up powerful automations in under 2 minutes.',
  },
  {
    date: 'February 8, 2025',
    category: 'Engineering',
    title: 'Migrating to Edge Computing: A Retrospective',
    excerpt:
      'How moving our real-time collaboration infrastructure to the edge reduced latency by 65% and improved reliability across all geographic regions.',
  },
  {
    date: 'January 25, 2025',
    category: 'Design',
    title: 'Building an Accessible Design System at Scale',
    excerpt:
      'Lessons learned from building Vela\'s design system to meet WCAG 2.1 AA standards while maintaining the visual polish and performance our users expect.',
  },
];

const categoryClass: Record<string, string> = {
  Product: 'saas-blog-card__badge--product',
  Engineering: 'saas-blog-card__badge--engineering',
  Design: 'saas-blog-card__badge--design',
};

export default function Blog() {
  return (
    <>
      {/* ── Hero ── */}
      <AnimatedSection>
        <section className="saas-blog-hero">
          <div className="saas-container">
            <h1>
              Blog &amp; <span className="saas-gradient-text">Changelog</span>
            </h1>
            <p>
              Product updates, engineering deep dives, and design thinking from
              the Vela team.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Blog Grid ── */}
      <div className="saas-blog-grid">
        {posts.map((post, idx) => (
          <AnimatedSection key={idx} delay={idx * 0.08}>
            <div className="saas-blog-card">
              <p className="saas-blog-card__date">{post.date}</p>
              <span
                className={`saas-blog-card__badge ${categoryClass[post.category]}`}
              >
                {post.category}
              </span>
              <h3 className="saas-blog-card__title">{post.title}</h3>
              <p className="saas-blog-card__excerpt">{post.excerpt}</p>
              <span className="saas-blog-card__read-more">
                Read more &rarr;
              </span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </>
  );
}
