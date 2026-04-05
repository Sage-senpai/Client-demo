import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import caseStudies from '../data/caseStudiesData';

const techStack = [
  'React',
  'Next.js',
  'Python',
  'AWS',
  'Solidity',
  'Flutter',
  'Go',
  'Docker',
  'PostgreSQL',
  'TensorFlow',
];

const services = [
  {
    icon: '{ }',
    title: 'Web App Development',
    desc: 'Responsive, performant web applications built with modern frameworks and battle-tested architecture.',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    desc: 'Cross-platform and native mobile experiences using Flutter and React Native for iOS and Android.',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    desc: 'Infrastructure as code, CI/CD pipelines, and multi-cloud deployments that scale with your business.',
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    desc: 'Machine learning models, NLP systems, and intelligent automation pipelines that unlock real value.',
  },
  {
    icon: '⚡',
    title: 'API & Backend',
    desc: 'High-throughput APIs and microservices engineered for reliability, speed, and developer experience.',
  },
  {
    icon: '🔒',
    title: 'Security Audits',
    desc: 'Comprehensive vulnerability assessments, penetration testing, and compliance readiness reviews.',
  },
];

const previewStudies = caseStudies.slice(0, 3);

export default function Home() {
  return (
    <div className="tech-home">
      {/* ── Hero ── */}
      <section className="tech-hero">
        <div className="tech-hero__bg-pattern" />
        <div className="tech-hero__gradient-orb tech-hero__gradient-orb--blue" />
        <div className="tech-hero__gradient-orb tech-hero__gradient-orb--indigo" />

        <div className="tech-hero__content">
          <motion.div
            className="tech-hero__brand"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Axiom Labs
          </motion.div>

          <motion.h1
            className="tech-hero__headline"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Software that thinks.<br />Code that ships.
          </motion.h1>

          <motion.p
            className="tech-hero__sub"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We are a full-stack software engineering and AI consultancy based in Lagos.
            We design, build, and scale products that move industries forward.
          </motion.p>

          <motion.div
            className="tech-hero__ctas"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/tech/work">
              <motion.button className="tech-hero__btn-primary" {...buttonHover}>
                View Our Work
              </motion.button>
            </Link>
            <Link to="/tech/contact">
              <motion.button className="tech-hero__btn-outline" {...buttonHover}>
                Let&rsquo;s Talk
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <div className="tech-hero__scroll">&#8964;</div>
      </section>

      {/* ── Tech Stack Marquee ── */}
      <div className="tech-marquee">
        <div className="tech-marquee__track">
          {[...techStack, ...techStack].map((item, i) => (
            <span className="tech-marquee__item" key={i}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Services Overview ── */}
      <section className="tech-services-overview">
        <AnimatedSection className="tech-services-overview__inner">
          <div className="tech-services-overview__header">
            <p className="section-label">What We Do</p>
            <h2 className="tech-services-overview__title">End-to-End Engineering</h2>
            <p className="tech-services-overview__subtitle">
              From concept to production, we handle every layer of the stack so you can focus
              on your business.
            </p>
          </div>
          <div className="tech-services-overview__grid">
            {services.map((svc, i) => (
              <div className="tech-services-overview__card" key={i}>
                <div className="tech-services-overview__card-icon">{svc.icon}</div>
                <h3 className="tech-services-overview__card-title">{svc.title}</h3>
                <p className="tech-services-overview__card-desc">{svc.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Stats ── */}
      <section className="tech-stats">
        <AnimatedSection className="tech-stats__inner">
          <CounterStat end={120} suffix="+" label="Projects Delivered" />
          <CounterStat end={40} suffix="+" label="Engineers" />
          <CounterStat end={99.9} suffix="%" label="Uptime SLA" />
          <CounterStat end={8} suffix="" label="Countries Served" />
        </AnimatedSection>
      </section>

      {/* ── Case Studies Preview ── */}
      <section className="tech-case-preview">
        <AnimatedSection className="tech-case-preview__inner">
          <div className="tech-case-preview__header">
            <p className="section-label">Selected Work</p>
            <h2 className="tech-case-preview__title">Case Studies</h2>
          </div>
          <div className="tech-case-preview__grid">
            {previewStudies.map((cs) => (
              <div className="tech-case-preview__card" key={cs.id}>
                <p className="tech-case-preview__card-sector">{cs.sector}</p>
                <h3 className="tech-case-preview__card-name">{cs.name}</h3>
                <p className="tech-case-preview__card-challenge">{cs.challenge}</p>
                <p className="tech-case-preview__card-outcome">{cs.outcome}</p>
              </div>
            ))}
          </div>
          <div className="tech-case-preview__cta">
            <Link to="/tech/work">
              <motion.button className="tech-case-preview__btn" {...buttonHover}>
                View All Case Studies
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Hero Image ── */}
      <AnimatedSection>
        <img
          className="tech-page-image"
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85"
          alt="Technology hardware"
          loading="lazy"
        />
      </AnimatedSection>

      {/* ── CTA Section ── */}
      <section className="tech-cta-section">
        <AnimatedSection className="tech-cta-section__inner">
          <p className="section-label">Ready to Build?</p>
          <h2 className="tech-cta-section__title">
            Let&rsquo;s turn your idea into<br />production-grade software.
          </h2>
          <p className="tech-cta-section__text">
            Whether you need a full product team or a specialized engineering partner,
            Axiom Labs has the talent and track record to deliver.
          </p>
          <Link to="/tech/contact">
            <motion.button className="tech-cta-section__btn" {...buttonHover}>
              Start a Conversation
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
