import AnimatedSection from '../../../components/shared/AnimatedSection';

interface Feature {
  badge: string;
  title: string;
  description: string;
  points: string[];
  mockup: 'chart' | 'list' | 'grid' | 'bars' | 'dashboard' | 'timeline';
  reverse?: boolean;
}

const features: Feature[] = [
  {
    badge: 'Intelligence',
    title: 'AI Task Prioritization',
    description:
      'Our AI engine analyzes urgency, impact, dependencies, and team capacity to automatically rank and prioritize your backlog every sprint.',
    points: [
      'Machine learning models trained on 50M+ tasks',
      'Context-aware priority scoring (urgency, impact, effort)',
      'Automatic re-prioritization when blockers arise',
      'Customizable weighting for your team\'s workflow',
    ],
    mockup: 'chart',
  },
  {
    badge: 'Scheduling',
    title: 'Smart Scheduling',
    description:
      'Intelligent calendar integration that considers team availability, timezone overlaps, focus time preferences, and meeting fatigue to plan optimal schedules.',
    points: [
      'Auto-schedule meetings across time zones',
      'Protect deep focus blocks from interruptions',
      'Capacity-aware sprint planning',
      'Vacation and PTO-aware resource allocation',
    ],
    mockup: 'timeline',
    reverse: true,
  },
  {
    badge: 'Analytics',
    title: 'Team Analytics',
    description:
      'Comprehensive analytics dashboard that reveals actionable insights about team performance, sprint health, and project trajectory.',
    points: [
      'Real-time sprint burndown and velocity charts',
      'Individual and team performance metrics',
      'Bottleneck detection and resolution suggestions',
      'Exportable reports for stakeholder updates',
    ],
    mockup: 'dashboard',
  },
  {
    badge: 'Automation',
    title: 'Workflow Automation',
    description:
      'Build powerful no-code automations that eliminate repetitive tasks, enforce processes, and keep your team in flow state.',
    points: [
      '100+ pre-built automation templates',
      'If-this-then-that logic with branching',
      'Webhook triggers from external services',
      'Slack, Email, and SMS notification actions',
    ],
    mockup: 'grid',
    reverse: true,
  },
  {
    badge: 'Collaboration',
    title: 'Real-time Collaboration',
    description:
      'Work together seamlessly with real-time presence indicators, live cursors, threaded comments, and instant document co-editing.',
    points: [
      'Live cursors and presence awareness',
      'Threaded comments with @mentions',
      'Version history with one-click restore',
      'Screen sharing and whiteboarding built in',
    ],
    mockup: 'list',
  },
  {
    badge: 'Dashboards',
    title: 'Custom Dashboards',
    description:
      'Create personalized dashboards with drag-and-drop widgets that surface the metrics and data most relevant to your role and projects.',
    points: [
      'Drag-and-drop widget builder',
      '30+ chart types and visualizations',
      'Real-time data from all connected tools',
      'Shareable dashboard links for stakeholders',
    ],
    mockup: 'bars',
    reverse: true,
  },
];

function MockupChart() {
  const barClasses = ['h40', 'h65', 'h50', 'h80', 'h60', 'h90', 'h55', 'h75', 'h85', 'h70'];
  return (
    <div className="saas-feature-section__mockup">
      <div className="saas-feature-section__mockup-bar">
        <span /><span /><span />
      </div>
      <div className="saas-feature-section__mockup-content">
        <div className="saas-feature-section__mockup-row">
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--accent saas-feature-section__mockup-block--wide" />
          <div className="saas-feature-section__mockup-block" />
        </div>
        <div className="saas-feature-section__mockup-chart">
          {barClasses.map((cls, i) => (
            <span key={i} className={cls} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MockupTimeline() {
  return (
    <div className="saas-feature-section__mockup">
      <div className="saas-feature-section__mockup-bar">
        <span /><span /><span />
      </div>
      <div className="saas-feature-section__mockup-content">
        <div className="saas-feature-section__mockup-row">
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--accent" />
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--secondary" />
          <div className="saas-feature-section__mockup-block" />
        </div>
        <div className="saas-feature-section__mockup-row">
          <div className="saas-feature-section__mockup-block" />
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--cyan saas-feature-section__mockup-block--wide" />
        </div>
        <div className="saas-feature-section__mockup-row">
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--secondary saas-feature-section__mockup-block--wide" />
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--accent" />
        </div>
        <div className="saas-feature-section__mockup-row">
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--cyan" />
          <div className="saas-feature-section__mockup-block" />
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--accent" />
        </div>
        <div className="saas-feature-section__mockup-row">
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--wide" />
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--secondary" />
        </div>
      </div>
    </div>
  );
}

function MockupDashboard() {
  const barClasses = ['h55', 'h70', 'h45', 'h85', 'h60', 'h75', 'h90', 'h50'];
  return (
    <div className="saas-feature-section__mockup">
      <div className="saas-feature-section__mockup-bar">
        <span /><span /><span />
      </div>
      <div className="saas-feature-section__mockup-content">
        <div className="saas-feature-section__mockup-row">
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--tall saas-feature-section__mockup-block--accent" />
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--tall saas-feature-section__mockup-block--secondary" />
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--tall saas-feature-section__mockup-block--cyan" />
        </div>
        <div className="saas-feature-section__mockup-chart">
          {barClasses.map((cls, i) => (
            <span key={i} className={cls} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MockupGrid() {
  return (
    <div className="saas-feature-section__mockup">
      <div className="saas-feature-section__mockup-bar">
        <span /><span /><span />
      </div>
      <div className="saas-feature-section__mockup-content">
        <div className="saas-feature-section__mockup-row">
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--tall saas-feature-section__mockup-block--accent" />
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--tall" />
        </div>
        <div className="saas-feature-section__mockup-row">
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--tall" />
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--tall saas-feature-section__mockup-block--secondary" />
        </div>
        <div className="saas-feature-section__mockup-row">
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--tall saas-feature-section__mockup-block--cyan" />
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--tall saas-feature-section__mockup-block--accent" />
        </div>
      </div>
    </div>
  );
}

function MockupList() {
  const items = [
    { color: 'green', widthClass: 'w60' },
    { color: 'yellow', widthClass: 'w45' },
    { color: 'blue', widthClass: 'w75' },
    { color: 'purple', widthClass: 'w50' },
    { color: 'green', widthClass: 'w65' },
  ];

  return (
    <div className="saas-feature-section__mockup">
      <div className="saas-feature-section__mockup-bar">
        <span /><span /><span />
      </div>
      <div className="saas-feature-section__mockup-content">
        <div className="saas-feature-section__mockup-list">
          {items.map((item, i) => (
            <div key={i} className="saas-feature-section__mockup-list-item">
              <span className={item.color} />
              <span className={item.widthClass} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MockupBars() {
  return (
    <div className="saas-feature-section__mockup">
      <div className="saas-feature-section__mockup-bar">
        <span /><span /><span />
      </div>
      <div className="saas-feature-section__mockup-content">
        <div className="saas-feature-section__mockup-row">
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--accent saas-feature-section__mockup-block--wide" />
        </div>
        <div className="saas-feature-section__mockup-row">
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--secondary saas-feature-section__mockup-block--flex-1-5" />
          <div className="saas-feature-section__mockup-block" />
        </div>
        <div className="saas-feature-section__mockup-row">
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--cyan saas-feature-section__mockup-block--wide" />
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--accent" />
        </div>
        <div className="saas-feature-section__mockup-row">
          <div className="saas-feature-section__mockup-block" />
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--secondary saas-feature-section__mockup-block--wide" />
        </div>
        <div className="saas-feature-section__mockup-row">
          <div className="saas-feature-section__mockup-block saas-feature-section__mockup-block--accent saas-feature-section__mockup-block--flex-2-5" />
        </div>
      </div>
    </div>
  );
}

const mockupComponents: Record<Feature['mockup'], React.FC> = {
  chart: MockupChart,
  timeline: MockupTimeline,
  dashboard: MockupDashboard,
  grid: MockupGrid,
  list: MockupList,
  bars: MockupBars,
};

export default function Features() {
  return (
    <>
      {/* ── Hero ── */}
      <AnimatedSection>
        <section className="saas-features-hero">
          <div className="saas-container">
            <h1>
              Everything you need to{' '}
              <span className="saas-gradient-text">ship faster</span>
            </h1>
            <p>
              A complete suite of project intelligence tools designed for modern
              engineering and product teams.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Feature Sections ── */}
      {features.map((feature, idx) => {
        const Mockup = mockupComponents[feature.mockup];

        return (
          <AnimatedSection key={idx}>
            <section
              className={`saas-feature-section ${
                feature.reverse ? 'saas-feature-section--reverse' : ''
              }`}
            >
              <div className="saas-feature-section__inner">
                <Mockup />
                <div className="saas-feature-section__text">
                  <span className="saas-feature-section__text-badge">
                    {feature.badge}
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <ul>
                    {feature.points.map((point, pidx) => (
                      <li key={pidx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </AnimatedSection>
        );
      })}
    </>
  );
}
