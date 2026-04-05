import AnimatedSection from '../../../components/shared/AnimatedSection';

interface DocCategory {
  icon: string;
  title: string;
  description: string;
  articles: number;
}

const categories: DocCategory[] = [
  {
    icon: '🚀',
    title: 'Getting Started',
    description:
      'Set up your workspace, invite team members, and create your first project in under 5 minutes.',
    articles: 12,
  },
  {
    icon: '⚡',
    title: 'API Reference',
    description:
      'Complete REST API documentation with authentication, endpoints, rate limits, and code examples.',
    articles: 45,
  },
  {
    icon: '🔗',
    title: 'Integrations',
    description:
      'Connect Vela with Slack, GitHub, Jira, Figma, and 150+ other tools your team already uses.',
    articles: 32,
  },
  {
    icon: '🪝',
    title: 'Webhooks',
    description:
      'Configure real-time event notifications to trigger actions in your external systems and workflows.',
    articles: 18,
  },
  {
    icon: '📦',
    title: 'SDKs',
    description:
      'Official client libraries for JavaScript, Python, Go, Ruby, and Java with TypeScript definitions.',
    articles: 24,
  },
  {
    icon: '🔒',
    title: 'Security',
    description:
      'Learn about SSO configuration, SAML setup, audit logs, data encryption, and compliance certifications.',
    articles: 15,
  },
];

export default function Docs() {
  return (
    <>
      {/* ── Hero ── */}
      <AnimatedSection>
        <section className="saas-docs-hero">
          <div className="saas-container">
            <h1>
              <span className="saas-gradient-text">Documentation</span>
            </h1>
            <p>
              Everything you need to integrate, customize, and get the most out
              of Vela.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Search Bar ── */}
      <AnimatedSection>
        <div className="saas-docs-search">
          <span className="saas-docs-search__icon">🔍</span>
          <input
            type="text"
            className="saas-docs-search__input"
            placeholder="Search documentation..."
            readOnly
          />
        </div>
      </AnimatedSection>

      {/* ── Category Grid ── */}
      <div className="saas-docs-grid">
        {categories.map((cat, idx) => (
          <AnimatedSection key={idx} delay={idx * 0.08}>
            <div className="saas-docs-card">
              <div className="saas-docs-card__icon">{cat.icon}</div>
              <h3 className="saas-docs-card__title">{cat.title}</h3>
              <p className="saas-docs-card__desc">{cat.description}</p>
              <span className="saas-docs-card__link">
                Browse docs &rarr;
              </span>
              <p className="saas-docs-card__count">
                {cat.articles} articles
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </>
  );
}
