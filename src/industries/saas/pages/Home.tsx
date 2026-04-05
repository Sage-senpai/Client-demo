import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';
import { buttonHover } from '../../../styles/_animations';

const logos = ['TechCorp', 'FinServ', 'BuildIQ', 'MediFlow', 'EduPrime', 'CloudNine'];

const highlights = [
  {
    title: 'AI-Powered Task Management',
    description:
      'Let intelligent algorithms prioritize your backlog, assign tasks based on team capacity, and predict delivery timelines with remarkable accuracy.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    points: [
      'Automatic priority scoring based on impact and urgency',
      'Smart assignment matching skills to requirements',
      'Predictive delivery estimates using historical data',
    ],
  },
  {
    title: 'Seamless Team Collaboration',
    description:
      'Break down silos with real-time document editing, threaded discussions, and contextual notifications that keep everyone aligned.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    points: [
      'Real-time co-editing with presence indicators',
      'Threaded conversations tied to specific tasks',
      'Smart notifications that reduce noise by 60%',
    ],
    reverse: true,
  },
  {
    title: 'Powerful Analytics Dashboard',
    description:
      'Gain deep insights into team performance, project health, and resource utilization with beautiful, customizable dashboards.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    points: [
      'Custom KPI widgets with real-time data',
      'Sprint velocity and burndown tracking',
      'Team utilization and bottleneck detection',
    ],
  },
];

const testimonials = [
  {
    quote:
      'Vela transformed how our engineering team operates. We shipped 40% more features last quarter with the same headcount.',
    name: 'Sarah Chen',
    role: 'VP Engineering, TechCorp',
    avatar: 'https://picsum.photos/seed/vela1/80/80',
    stars: 5,
  },
  {
    quote:
      'The AI prioritization alone saved us 10 hours per sprint in planning meetings. It just works.',
    name: 'Marcus Johnson',
    role: 'Product Lead, FinServ',
    avatar: 'https://picsum.photos/seed/vela2/80/80',
    stars: 5,
  },
  {
    quote:
      'Finally a project tool that scales with our team. From 5 people to 200, Vela handled it all seamlessly.',
    name: 'Adaeze Obi',
    role: 'CTO, BuildIQ',
    avatar: 'https://picsum.photos/seed/vela3/80/80',
    stars: 5,
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* ── Hero ── */}
      <section className="saas-hero">
        <div className="saas-hero__content">
          <AnimatedSection>
            <span className="saas-hero__badge">
              ✦ Now with AI Workflow Intelligence
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="saas-hero__title">
              The workspace your
              <br />
              <span className="saas-gradient-text">team deserves.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="saas-hero__subtitle">
              Vela combines AI-powered project intelligence with beautiful
              collaboration tools so your team can focus on building, not managing.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="saas-hero__ctas">
              <motion.button
                className="saas-btn saas-btn--primary saas-btn--lg"
                onClick={() => navigate('/saas/signup')}
                {...buttonHover}
              >
                Start Free Trial
              </motion.button>
              <motion.button
                className="saas-btn saas-btn--outline saas-btn--lg"
                {...buttonHover}
              >
                Watch Demo ▶
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Social Proof ── */}
      <AnimatedSection>
        <section className="saas-proof">
          <p className="saas-proof__label">
            Trusted by 2,000+ teams worldwide
          </p>
          <div className="saas-proof__logos">
            {logos.map((name) => (
              <div key={name} className="saas-proof__logo">
                {name}
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ── Product Screenshot Mockup ── */}
      <AnimatedSection>
        <section className="saas-product">
          <div className="saas-product__wrapper">
            <div className="saas-product__mockup">
              <div className="saas-product__mockup-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="saas-product__mockup-body">
                <div className="saas-product__mockup-card">
                  <h4>Active Projects</h4>
                  <div className="saas-product__mockup-card-value">24</div>
                  <div className="saas-product__mockup-card-bar saas-product__mockup-card-bar--w72">
                    <span />
                  </div>
                </div>
                <div className="saas-product__mockup-card">
                  <h4>Sprint Velocity</h4>
                  <div className="saas-product__mockup-card-value">89%</div>
                  <div className="saas-product__mockup-card-bar saas-product__mockup-card-bar--w89">
                    <span />
                  </div>
                </div>
                <div className="saas-product__mockup-card">
                  <h4>Tasks Completed</h4>
                  <div className="saas-product__mockup-card-value">1,847</div>
                  <div className="saas-product__mockup-card-bar saas-product__mockup-card-bar--w64">
                    <span />
                  </div>
                </div>
                <div className="saas-product__mockup-card">
                  <h4>Team Efficiency</h4>
                  <div className="saas-product__mockup-card-value">94%</div>
                  <div className="saas-product__mockup-card-bar saas-product__mockup-card-bar--w94">
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Stats Strip ── */}
      <AnimatedSection>
        <section className="saas-stats">
          <div className="saas-stats__grid">
            <div className="saas-stats__item">
              <CounterStat end={2000} suffix="+" label="Teams Worldwide" />
            </div>
            <div className="saas-stats__item">
              <CounterStat end={99.9} suffix="%" label="Uptime SLA" />
            </div>
            <div className="saas-stats__item">
              <CounterStat end={40} suffix="%" label="More Productive" />
            </div>
            <div className="saas-stats__item">
              <CounterStat end={150} suffix="+" label="Integrations" />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Feature Highlights ── */}
      <section className="saas-highlights">
        {highlights.map((item, idx) => (
          <AnimatedSection key={idx}>
            <div
              className={`saas-highlights__item ${
                item.reverse ? 'saas-highlights__item--reverse' : ''
              }`}
            >
              <div className="saas-highlights__image">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="saas-highlights__text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul>
                  {item.points.map((point, pidx) => (
                    <li key={pidx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </section>

      {/* ── Testimonials ── */}
      <section className="saas-section">
        <AnimatedSection>
          <div className="saas-section__header saas-container">
            <h2>
              Loved by teams <span className="saas-gradient-text">everywhere</span>
            </h2>
            <p>See why thousands of teams trust Vela to power their workflows.</p>
          </div>
        </AnimatedSection>

        <div className="saas-testimonials__grid">
          {testimonials.map((t, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="saas-testimonials__card">
                <div className="saas-testimonials__stars">
                  {'★'.repeat(t.stars)}
                </div>
                <p className="saas-testimonials__quote">"{t.quote}"</p>
                <div className="saas-testimonials__author">
                  <img src={t.avatar} alt={t.name} loading="lazy" />
                  <div className="saas-testimonials__author-info">
                    <h5>{t.name}</h5>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Pricing CTA Strip ── */}
      <AnimatedSection>
        <section className="saas-cta-strip">
          <div className="saas-container">
            <h2>Ready to supercharge your team?</h2>
            <p>Start your 14-day free trial. No credit card required.</p>
            <motion.button
              className="saas-btn saas-btn--white saas-btn--lg"
              onClick={() => navigate('/saas/pricing')}
              {...buttonHover}
            >
              View Pricing Plans
            </motion.button>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
