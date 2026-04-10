import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { plans, testimonials } from '../data/insuranceData';

const heroImage =
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85';

const productTypes = [
  { value: 'health', label: 'Health Insurance' },
  { value: 'life', label: 'Life Insurance' },
  { value: 'auto', label: 'Auto Insurance' },
  { value: 'home', label: 'Home Insurance' },
  { value: 'travel', label: 'Travel Insurance' },
  { value: 'business', label: 'Business Insurance' },
];

export default function Home() {
  const navigate = useNavigate();
  const [quoteType, setQuoteType] = useState('health');

  return (
    <div className="ins-home">
      {/* ── Hero ── */}
      <section
        className="ins-hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="ins-hero__overlay" />

        <div className="ins-hero__content">
          <motion.span
            className="ins-hero__tag"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Global Insurance Platform
          </motion.span>

          <motion.h1
            className="ins-hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Protection You Can{' '}
            <span className="highlight">Count On</span>
          </motion.h1>

          <motion.p
            className="ins-hero__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Comprehensive coverage for health, life, auto, home, travel, and
            business — trusted by over 500,000 policyholders across 12 countries.
          </motion.p>

          <motion.div
            className="ins-hero__ctas"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/insurance/quote">
              <motion.button className="ins-hero__btn-primary" {...buttonHover}>
                Get a Free Quote
              </motion.button>
            </Link>
            <Link to="/insurance/products">
              <motion.button className="ins-hero__btn-outline" {...buttonHover}>
                Explore Products
              </motion.button>
            </Link>
          </motion.div>

          {/* ── Quick Quote Bar ── */}
          <motion.div
            className="ins-quick-quote"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <div className="ins-quick-quote__bar">
              <select
                className="ins-quick-quote__select"
                value={quoteType}
                onChange={(e) => setQuoteType(e.target.value)}
              >
                {productTypes.map((pt) => (
                  <option key={pt.value} value={pt.value}>
                    {pt.label}
                  </option>
                ))}
              </select>
              <motion.button
                className="ins-quick-quote__btn"
                {...buttonHover}
                onClick={() => navigate('/insurance/quote')}
              >
                Get Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Trust Badges ── */}
      <AnimatedSection className="ins-trust">
        <div className="ins-trust__inner">
          <div className="ins-trust__grid">
            <div className="counter-stat">
              <span className="counter-stat__icon">&#128274;</span>
              <span className="counter-stat__label">Licensed &amp; Regulated</span>
            </div>
            <div className="counter-stat">
              <span className="counter-stat__icon">&#128222;</span>
              <span className="counter-stat__label">24/7 Claims Support</span>
            </div>
            <div className="counter-stat">
              <span className="counter-stat__icon">&#128196;</span>
              <span className="counter-stat__label">500K+ Active Policies</span>
            </div>
            <div className="counter-stat">
              <span className="counter-stat__icon">&#128176;</span>
              <span className="counter-stat__label">$2B+ Claims Paid Out</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Stats Strip ── */}
      <AnimatedSection className="ins-stats">
        <div className="ins-stats__grid">
          <CounterStat end={500} suffix="K+" label="Policyholders Worldwide" />
          <CounterStat end={12} suffix="" label="Countries" />
          <CounterStat end={98.7} suffix="%" label="Claims Approval Rate" />
          <CounterStat end={2} suffix="B+" label="Claims Paid (USD)" />
        </div>
      </AnimatedSection>

      {/* ── Product Cards ── */}
      <section className="ins-products">
        <AnimatedSection className="ins-products__inner">
          <p className="ins-section-label">Our Products</p>
          <h2 className="ins-products__heading">
            Insurance for Every Part of Life
          </h2>
          <p className="ins-products__subtitle">
            From health and life to auto, home, travel, and business — we offer
            tailored coverage that fits your needs and budget.
          </p>
          <div className="ins-products__grid">
            {plans.map((plan) => (
              <div className="ins-product-card" key={plan.id}>
                <span
                  className="ins-product-card__icon"
                  dangerouslySetInnerHTML={{ __html: plan.icon }}
                />
                <h3 className="ins-product-card__name">{plan.name}</h3>
                <p className="ins-product-card__desc">{plan.description}</p>
                <ul className="ins-product-card__features">
                  {plan.features.slice(0, 4).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <p className="ins-product-card__price">
                  Starting at {plan.startingPrice}{' '}
                  <small>per person</small>
                </p>
                <Link to="/insurance/quote" className="ins-product-card__btn">
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Testimonials ── */}
      <section className="ins-testimonials">
        <AnimatedSection className="ins-testimonials__inner">
          <p className="ins-section-label">What Our Clients Say</p>
          <h2 className="ins-testimonials__heading">
            Trusted by Families and Businesses Worldwide
          </h2>
          <div className="ins-testimonials__grid">
            {testimonials.map((t) => (
              <div className="ins-testimonial-card" key={t.id}>
                <p className="ins-testimonial-card__quote">{t.quote}</p>
                <p className="ins-testimonial-card__author">{t.name}</p>
                <p className="ins-testimonial-card__location">{t.location}</p>
                <span className="ins-testimonial-card__product">
                  {t.product}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── CTA Strip ── */}
      <section className="ins-cta">
        <AnimatedSection className="ins-cta__inner">
          <h2 className="ins-cta__heading">
            Ready to Protect What Matters Most?
          </h2>
          <p className="ins-cta__text">
            Join over 500,000 policyholders across 12 countries who trust Aegis
            Cover. Get a personalized quote in under 2 minutes.
          </p>
          <Link to="/insurance/quote">
            <motion.button className="ins-cta__btn" {...buttonHover}>
              Get Your Free Quote &rarr;
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
