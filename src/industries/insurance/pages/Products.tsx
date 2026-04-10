import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';
import { plans } from '../data/insuranceData';

export default function Products() {
  return (
    <div className="ins-products-page">
      {/* ── Page Header ── */}
      <div className="ins-page-top">
        <div className="ins-page-top__inner">
          <p className="ins-section-label">Our Products</p>
          <h1 className="ins-page-top__heading">
            Comprehensive Insurance Solutions
          </h1>
          <p className="ins-page-top__subtitle">
            Whether you need coverage for yourself, your family, your vehicle,
            your home, your travels, or your business — Aegis Cover has you
            protected across 12 countries.
          </p>
        </div>
      </div>

      {/* ── Product Sections ── */}
      {plans.map((plan) => (
        <section className="ins-product-section" key={plan.id}>
          <AnimatedSection className="ins-product-section__inner">
            <div className="ins-product-section__content">
              <h2 className="ins-product-section__name">{plan.name}</h2>
              <p className="ins-product-section__desc">{plan.description}</p>

              <ul className="ins-product-section__benefits">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className="ins-product-section__highlights">
                <h4>Coverage Highlights</h4>
                <ul>
                  {plan.coverageHighlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>

              <Link to="/insurance/quote">
                <motion.button
                  className="ins-product-section__btn"
                  {...buttonHover}
                >
                  Get a {plan.name} Quote
                </motion.button>
              </Link>
            </div>

            <div className="ins-product-section__visual">
              <span
                className="ins-product-section__icon"
                dangerouslySetInnerHTML={{ __html: plan.icon }}
              />
            </div>
          </AnimatedSection>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="ins-cta">
        <AnimatedSection className="ins-cta__inner">
          <h2 className="ins-cta__heading">
            Not Sure Which Coverage You Need?
          </h2>
          <p className="ins-cta__text">
            Our insurance advisors are available 24/7 to help you find the
            perfect policy. Get a free consultation today.
          </p>
          <Link to="/insurance/contact">
            <motion.button className="ins-cta__btn" {...buttonHover}>
              Talk to an Advisor &rarr;
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
