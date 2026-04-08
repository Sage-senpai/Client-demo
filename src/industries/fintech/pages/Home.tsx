import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { features } from '../data/fintechData';

const previewFeatures = features.slice(0, 3);

const socialLogos = ['Paystack', 'Flutterwave', 'Stripe', 'Visa', 'Mastercard'];

export default function Home() {
  return (
    <div className="kash-home">
      {/* ── Hero ── */}
      <section className="kash-hero">
        <div className="kash-hero__bg-glow kash-hero__bg-glow--mint" />
        <div className="kash-hero__bg-glow kash-hero__bg-glow--violet" />

        <div className="kash-hero__content">
          <motion.span
            className="kash-hero__tag"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The Future of Banking in Africa
          </motion.span>

          <motion.h1
            className="kash-hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="gradient">Banking.</span><br />
            <span className="gradient">Reimagined.</span>
          </motion.h1>

          <motion.p
            className="kash-hero__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Send money instantly, earn up to 14% on savings, get virtual and physical
            cards, and manage your finances — all from one beautiful app.
          </motion.p>

          <motion.div
            className="kash-hero__ctas"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/fintech/pricing">
              <motion.button className="kash-hero__btn-primary" {...buttonHover}>
                Open Free Account
              </motion.button>
            </Link>
            <Link to="/fintech/features">
              <motion.button className="kash-hero__btn-outline" {...buttonHover}>
                See Features
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* ── CSS Credit Card ── */}
        <motion.div
          className="kash-hero__card-wrapper"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="kash-credit-card">
            <div className="kash-credit-card__top">
              <span className="kash-credit-card__brand">Kash.</span>
              <div className="kash-credit-card__chip" />
            </div>
            <span className="kash-credit-card__number">4532 &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 7890</span>
            <div className="kash-credit-card__bottom">
              <div>
                <span className="kash-credit-card__name">Adewale Okonkwo</span>
              </div>
              <div className="kash-credit-card__expiry">
                <small>Valid Thru</small>
                09/28
              </div>
              <span className="kash-credit-card__network">VISA</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Stats ── */}
      <AnimatedSection className="kash-stats">
        <div className="kash-stats__grid">
          <CounterStat end={2.5} suffix="T+" label="Transactions Processed (NGN)" />
          <CounterStat end={500} suffix="K+" label="Active Users" />
          <CounterStat end={99.99} suffix="%" label="Uptime" />
          <CounterStat end={2} suffix="s" label="Average Transfer Time" />
        </div>
      </AnimatedSection>

      {/* ── Feature Cards ── */}
      <section className="kash-features-preview">
        <AnimatedSection className="kash-features-preview__inner">
          <p className="section-label">Why Kash?</p>
          <h2 className="kash-features-preview__heading">Everything you need. Nothing you don&apos;t.</h2>
          <p className="kash-features-preview__subtitle">
            Built for the way Africans actually use money — fast, mobile, and borderless.
          </p>
          <div className="kash-features-preview__grid">
            {previewFeatures.map((feat) => (
              <div className="kash-feature-card" key={feat.id}>
                <span
                  className="kash-feature-card__icon"
                  dangerouslySetInnerHTML={{ __html: feat.icon }}
                />
                <h3 className="kash-feature-card__title">{feat.title}</h3>
                <p className="kash-feature-card__desc">{feat.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Social Proof ── */}
      <AnimatedSection className="kash-social-proof">
        <div className="kash-social-proof__inner">
          <p className="kash-social-proof__label">Trusted By Leading Partners</p>
          <div className="kash-social-proof__logos">
            {socialLogos.map((logo) => (
              <span className="kash-social-proof__logo" key={logo}>{logo}</span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Security Badges ── */}
      <AnimatedSection className="kash-security-strip">
        <div className="kash-security-strip__inner">
          <div className="kash-security-strip__badge">
            <span className="kash-security-strip__badge-icon">&#128274;</span>
            <span>AES-256 Encryption</span>
          </div>
          <div className="kash-security-strip__badge">
            <span className="kash-security-strip__badge-icon">&#9989;</span>
            <span>PCI DSS Level 1</span>
          </div>
          <div className="kash-security-strip__badge">
            <span className="kash-security-strip__badge-icon">&#128737;</span>
            <span>CBN Licensed</span>
          </div>
          <div className="kash-security-strip__badge">
            <span className="kash-security-strip__badge-icon">&#128273;</span>
            <span>Biometric Auth</span>
          </div>
          <div className="kash-security-strip__badge">
            <span className="kash-security-strip__badge-icon">&#128176;</span>
            <span>NDIC Insured</span>
          </div>
        </div>
      </AnimatedSection>

      {/* ── CTA Strip ── */}
      <section className="kash-home">
        <div className="kash-membership-cta">
          <AnimatedSection className="kash-membership-cta__inner">
            <h2 className="kash-membership-cta__heading">Ready to upgrade your banking?</h2>
            <p className="kash-membership-cta__text">
              Join 500,000+ Africans who chose smarter banking. Open a free account in under 3 minutes.
            </p>
            <Link to="/fintech/pricing">
              <motion.button className="kash-hero__btn-primary" {...buttonHover}>
                Get Started for Free &rarr;
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
