import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { features } from '../data/fintechData';
import { Link } from 'react-router-dom';

function TransferMockup() {
  return (
    <div className="kash-mockup-transfer">
      <div className="kash-mockup-transfer__row">
        <span className="kash-mockup-transfer__label">To</span>
        <span className="kash-mockup-transfer__value">Amaka O.</span>
      </div>
      <div className="kash-mockup-transfer__row">
        <span className="kash-mockup-transfer__label">Amount</span>
        <span className="kash-mockup-transfer__value">&#8358;150,000</span>
      </div>
      <div className="kash-mockup-transfer__row">
        <span className="kash-mockup-transfer__label">Bank</span>
        <span className="kash-mockup-transfer__value">GTBank</span>
      </div>
      <div className="kash-mockup-transfer__status">&#10003; Sent in 1.2 seconds</div>
    </div>
  );
}

function CardMockup() {
  return (
    <div className="kash-credit-card" style={{ transform: 'none', width: '100%', maxWidth: 320 }}>
      <div className="kash-credit-card__top">
        <span className="kash-credit-card__brand">Kash.</span>
        <div className="kash-credit-card__chip" />
      </div>
      <span className="kash-credit-card__number">5412 &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 3456</span>
      <div className="kash-credit-card__bottom">
        <span className="kash-credit-card__name">Chidinma Eze</span>
        <div className="kash-credit-card__expiry">
          <small>Valid Thru</small>
          11/27
        </div>
        <span className="kash-credit-card__network">VISA</span>
      </div>
    </div>
  );
}

function SavingsMockup() {
  return (
    <div className="kash-mockup-savings">
      <div className="kash-mockup-savings__circle">
        <span className="kash-mockup-savings__rate">14%</span>
        <span className="kash-mockup-savings__label">Annual Yield</span>
      </div>
      <div className="kash-mockup-savings__bar">
        <div className="kash-mockup-savings__bar-fill" style={{ width: '72%' }} />
      </div>
      <p style={{ color: '#8899AA', fontSize: '0.82rem', marginTop: '0.5rem' }}>
        &#8358;720,000 saved of &#8358;1,000,000 goal
      </p>
    </div>
  );
}

function CurrencyMockup() {
  return (
    <div className="kash-mockup-currencies">
      <div className="kash-mockup-currencies__item">
        <div>
          <span className="kash-mockup-currencies__flag">&#127482;&#127480;</span>
          <span className="kash-mockup-currencies__code">USD</span>
        </div>
        <span className="kash-mockup-currencies__rate">$1 = &#8358;1,580</span>
      </div>
      <div className="kash-mockup-currencies__item">
        <div>
          <span className="kash-mockup-currencies__flag">&#127468;&#127463;</span>
          <span className="kash-mockup-currencies__code">GBP</span>
        </div>
        <span className="kash-mockup-currencies__rate">&#163;1 = &#8358;1,980</span>
      </div>
      <div className="kash-mockup-currencies__item">
        <div>
          <span className="kash-mockup-currencies__flag">&#127466;&#127482;</span>
          <span className="kash-mockup-currencies__code">EUR</span>
        </div>
        <span className="kash-mockup-currencies__rate">&#8364;1 = &#8358;1,710</span>
      </div>
    </div>
  );
}

function BudgetMockup() {
  return (
    <div className="kash-mockup-budget">
      <div className="kash-mockup-budget__item">
        <div className="kash-mockup-budget__row">
          <span className="kash-mockup-budget__category">Food &amp; Dining</span>
          <span className="kash-mockup-budget__amount">&#8358;45,000 / &#8358;60,000</span>
        </div>
        <div className="kash-mockup-budget__bar">
          <div className="kash-mockup-budget__bar-fill kash-mockup-budget__bar-fill--mint" style={{ width: '75%' }} />
        </div>
      </div>
      <div className="kash-mockup-budget__item">
        <div className="kash-mockup-budget__row">
          <span className="kash-mockup-budget__category">Transport</span>
          <span className="kash-mockup-budget__amount">&#8358;18,000 / &#8358;25,000</span>
        </div>
        <div className="kash-mockup-budget__bar">
          <div className="kash-mockup-budget__bar-fill kash-mockup-budget__bar-fill--violet" style={{ width: '72%' }} />
        </div>
      </div>
      <div className="kash-mockup-budget__item">
        <div className="kash-mockup-budget__row">
          <span className="kash-mockup-budget__category">Entertainment</span>
          <span className="kash-mockup-budget__amount">&#8358;32,000 / &#8358;30,000</span>
        </div>
        <div className="kash-mockup-budget__bar">
          <div className="kash-mockup-budget__bar-fill kash-mockup-budget__bar-fill--mixed" style={{ width: '100%' }} />
        </div>
      </div>
      <div className="kash-mockup-budget__item">
        <div className="kash-mockup-budget__row">
          <span className="kash-mockup-budget__category">Shopping</span>
          <span className="kash-mockup-budget__amount">&#8358;22,000 / &#8358;50,000</span>
        </div>
        <div className="kash-mockup-budget__bar">
          <div className="kash-mockup-budget__bar-fill kash-mockup-budget__bar-fill--mint" style={{ width: '44%' }} />
        </div>
      </div>
    </div>
  );
}

function BusinessMockup() {
  return (
    <div className="kash-mockup-business">
      <div className="kash-mockup-business__item">
        <span className="kash-mockup-business__icon">&#128179;</span>
        <span className="kash-mockup-business__text">25 Team Cards Active</span>
      </div>
      <div className="kash-mockup-business__item">
        <span className="kash-mockup-business__icon">&#128200;</span>
        <span className="kash-mockup-business__text">Payroll: 48 employees</span>
      </div>
      <div className="kash-mockup-business__item">
        <span className="kash-mockup-business__icon">&#128196;</span>
        <span className="kash-mockup-business__text">12 invoices this month</span>
      </div>
      <div className="kash-mockup-business__item">
        <span className="kash-mockup-business__icon">&#128268;</span>
        <span className="kash-mockup-business__text">API: 24,500 calls today</span>
      </div>
    </div>
  );
}

const mockups = [
  <TransferMockup key="transfer" />,
  <CardMockup key="card" />,
  <SavingsMockup key="savings" />,
  <CurrencyMockup key="currency" />,
  <BudgetMockup key="budget" />,
  <BusinessMockup key="business" />,
];

export default function Features() {
  return (
    <div className="kash-features-page">
      {/* ── Page Header ── */}
      <section className="kash-page-header">
        <AnimatedSection className="kash-page-header__inner">
          <motion.h1
            className="kash-page-header__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Powerful <span className="gradient">Features</span>
          </motion.h1>
          <motion.p
            className="kash-page-header__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Everything you need to send, save, invest, and grow your money — built
            into one seamless experience.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* ── Alternating Feature Sections ── */}
      {features.map((feat, i) => (
        <section
          key={feat.id}
          className={`kash-feature-section ${i % 2 !== 0 ? 'kash-feature-section--reverse' : ''}`}
        >
          <AnimatedSection className="kash-feature-section__inner">
            <div className="kash-feature-section__content">
              <p className="section-label">Feature {String(i + 1).padStart(2, '0')}</p>
              <h3>{feat.title}</h3>
              <p>{feat.description}</p>
              <ul className="kash-feature-section__details">
                {feat.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div className="kash-feature-section__mockup">
              {mockups[i]}
            </div>
          </AnimatedSection>
        </section>
      ))}

      {/* ── CTA ── */}
      <AnimatedSection className="kash-security-cta">
        <div className="kash-security-cta__inner">
          <h2 className="kash-security-cta__heading">Ready to experience modern banking?</h2>
          <p className="kash-security-cta__text">
            Open a free account in under 3 minutes. No branch visits, no paperwork.
          </p>
          <Link to="/fintech/pricing">
            <motion.button className="kash-hero__btn-primary" {...buttonHover}>
              Get Started &rarr;
            </motion.button>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
