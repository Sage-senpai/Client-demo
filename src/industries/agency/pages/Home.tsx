import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { services, caseStudies } from '../data/agencyData';

const clientLogos = [
  'Zenith Motors',
  'Aura Skincare',
  'NovaPay',
  'Brick & Barrel',
  'FreshRoots',
  'CloudSync',
  'Mama Titi Kitchen',
  'Orion Fitness',
];

const testimonials = [
  {
    quote: 'Flux Creative completely transformed our brand. We went from invisible to unmissable in our market within three months.',
    author: 'Kemi Adekunle',
    role: 'CEO, Zenith Motors',
  },
  {
    quote: 'The ROI on our ad campaigns has been insane. They understand the Nigerian market like no other agency we have worked with.',
    author: 'Chidi Nwankwo',
    role: 'Founder, NovaPay',
  },
  {
    quote: 'Our website went from a digital brochure to our number one sales channel. The team at Flux is world-class.',
    author: 'Amara Osei',
    role: 'CMO, Brick & Barrel',
  },
];

export default function Home() {
  const previewServices = services.slice(0, 6);
  const previewCases = caseStudies.slice(0, 3);

  return (
    <div className="ag-home">
      {/* ── Hero ── */}
      <section className="ag-hero">
        <div className="ag-hero__bg" />
        <div className="ag-hero__content">
          <motion.p
            className="ag-section-label"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Full-Service Creative Agency
          </motion.p>
          <motion.h1
            className="ag-hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We Make Brands<br />
            <span>Unforgettable</span>
          </motion.h1>
          <motion.p
            className="ag-hero__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Strategy, design, and digital marketing that turns ambitious brands
            into market leaders. We do not just build campaigns — we build legacies.
          </motion.p>
          <motion.div
            className="ag-hero__ctas"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/agency/work">
              <motion.button className="ag-hero__btn-primary" {...buttonHover}>
                See Our Work
              </motion.button>
            </Link>
            <Link to="/agency/contact">
              <motion.button className="ag-hero__btn-outline" {...buttonHover}>
                Start a Project
              </motion.button>
            </Link>
          </motion.div>

          <div className="ag-hero__stats">
            <CounterStat end={120} suffix="+" label="Projects Delivered" />
            <CounterStat end={340} suffix="%" label="Avg. Client Growth" />
            <CounterStat end={45} suffix="" label="Brand Partners" />
            <CounterStat end={8} suffix="" label="Years in Business" />
          </div>
        </div>
      </section>

      {/* ── Client Logo Marquee ── */}
      <section className="ag-marquee">
        <div className="ag-marquee__track">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <span className="ag-marquee__item" key={i}>
              {logo}
            </span>
          ))}
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="ag-services-preview">
        <AnimatedSection className="ag-services-preview__header">
          <p className="ag-section-label">What We Do</p>
          <h2 className="ag-section-title">Services Built for Growth</h2>
          <p className="ag-section-subtitle">
            From brand strategy to performance marketing, we cover every touchpoint
            in your customer journey.
          </p>
        </AnimatedSection>

        <div className="ag-services-preview__grid">
          {previewServices.map((svc) => (
            <AnimatedSection key={svc.id}>
              <div className="ag-service-card">
                <span className="ag-service-card__icon">{svc.icon}</span>
                <h3 className="ag-service-card__title">{svc.title}</h3>
                <p className="ag-service-card__desc">{svc.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="ag-services-preview__header" delay={0.2}>
          <Link to="/agency/services">
            <motion.button className="ag-hero__btn-outline" {...buttonHover}>
              View All Services
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>

      {/* ── Case Study Previews ── */}
      <section className="ag-work">
        <AnimatedSection className="ag-work-header">
          <p className="ag-section-label">Selected Work</p>
          <h2 className="ag-section-title">Results That Speak</h2>
          <p className="ag-section-subtitle">
            We measure success in outcomes, not outputs. Here are some of the brands
            we have helped transform.
          </p>
        </AnimatedSection>

        <div className="ag-work-grid">
          {previewCases.map((cs) => (
            <AnimatedSection key={cs.id}>
              <div className="ag-case-card">
                <img
                  className="ag-case-card__image"
                  src={cs.image}
                  alt={cs.client}
                  loading="lazy"
                />
                <div className="ag-case-card__body">
                  <span className="ag-case-card__category">{cs.category}</span>
                  <h3 className="ag-case-card__client">{cs.client}</h3>
                  <p className="ag-case-card__industry">{cs.industry}</p>
                  <p className="ag-case-card__results">{cs.results}</p>
                  <div className="ag-case-card__stack">
                    {cs.techStack.map((tech, idx) => (
                      <span className="ag-case-card__tech" key={idx}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="ag-work-header" delay={0.2}>
          <Link to="/agency/work">
            <motion.button className="ag-hero__btn-outline" {...buttonHover}>
              View All Projects
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>

      {/* ── Stats ── */}
      <section className="ag-stats">
        <div className="ag-stats__grid">
          <CounterStat end={120} suffix="+" label="Projects Delivered" />
          <CounterStat end={340} suffix="%" label="Avg. Client Growth" />
          <CounterStat end={45} suffix="" label="Brand Partners" />
          <CounterStat end={8} suffix="" label="Years in Business" />
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="ag-testimonials">
        <AnimatedSection className="ag-testimonials__header">
          <p className="ag-section-label">Client Love</p>
          <h2 className="ag-section-title">What Our Clients Say</h2>
        </AnimatedSection>

        <div className="ag-testimonials__grid">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i}>
              <div className="ag-testimonial-card">
                <div className="ag-testimonial-card__stars">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <p className="ag-testimonial-card__quote">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="ag-testimonial-card__author">{t.author}</p>
                <p className="ag-testimonial-card__role">{t.role}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="ag-cta-banner">
        <div className="ag-cta-banner__bg" />
        <AnimatedSection className="ag-cta-banner__inner">
          <h2 className="ag-cta-banner__title">
            Ready to Make Your Brand Unforgettable?
          </h2>
          <p className="ag-cta-banner__subtitle">
            Let us talk about your vision and build something remarkable together.
            No pressure, just a conversation.
          </p>
          <Link to="/agency/contact">
            <motion.button className="ag-hero__btn-primary" {...buttonHover}>
              Start a Project
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
