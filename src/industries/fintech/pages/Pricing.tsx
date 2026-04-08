import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { plans, faqs } from '../data/fintechData';

const comparisonFeatures = [
  { name: 'Naira Account', free: '&#10003;', pro: '&#10003;', business: '&#10003;' },
  { name: 'Virtual Debit Card', free: '1', pro: '3', business: '25+' },
  { name: 'Free Transfers / Month', free: '5', pro: 'Unlimited', business: 'Unlimited' },
  { name: 'Physical Metal Card', free: '—', pro: '&#10003;', business: '&#10003;' },
  { name: 'Kash Vault (Savings)', free: '—', pro: 'Up to 14%', business: 'Up to 14%' },
  { name: 'Multi-Currency Wallets', free: '—', pro: 'USD, GBP, EUR', business: 'USD, GBP, EUR' },
  { name: 'Cashback Rewards', free: '—', pro: '1.5%', business: '2%' },
  { name: 'Priority Support', free: '—', pro: '&#10003;', business: '&#10003;' },
  { name: 'Team Cards', free: '—', pro: '—', business: 'Up to 25' },
  { name: 'Payroll Disbursement', free: '—', pro: '—', business: '&#10003;' },
  { name: 'Invoicing & Payment Links', free: '—', pro: '—', business: '&#10003;' },
  { name: 'API Access & Webhooks', free: '—', pro: '—', business: '&#10003;' },
  { name: 'Dedicated Account Manager', free: '—', pro: '—', business: '&#10003;' },
  { name: 'PCI DSS Level 1', free: '&#10003;', pro: '&#10003;', business: '&#10003;' },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (i: number) => {
    setOpenFaq(openFaq === i ? null : i);
  };

  return (
    <div className="kash-pricing-page">
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
            Simple, <span className="gradient">Transparent</span> Pricing
          </motion.h1>
          <motion.p
            className="kash-page-header__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Start free, upgrade when you&apos;re ready. No hidden fees, ever.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* ── Toggle ── */}
      <div className="kash-toggle">
        <span className={`kash-toggle__label ${!annual ? 'kash-toggle__label--active' : ''}`}>
          Monthly
        </span>
        <button
          className={`kash-toggle__switch ${annual ? 'kash-toggle__switch--annual' : ''}`}
          onClick={() => setAnnual(!annual)}
          aria-label="Toggle annual pricing"
        />
        <span className={`kash-toggle__label ${annual ? 'kash-toggle__label--active' : ''}`}>
          Annual
        </span>
        {annual && <span className="kash-toggle__save">Save 17%</span>}
      </div>

      {/* ── Pricing Cards ── */}
      <AnimatedSection className="kash-plans">
        <div className="kash-plans__grid">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              className={`kash-plan-card ${plan.featured ? 'kash-plan-card--featured' : ''}`}
              {...buttonHover}
            >
              {plan.featured && (
                <span className="kash-plan-card__badge">Most Popular</span>
              )}
              <h3 className="kash-plan-card__name">{plan.name}</h3>
              <p className="kash-plan-card__description">{plan.description}</p>
              <div className="kash-plan-card__price">
                {annual ? plan.priceAnnual : plan.price}
                <small>{annual ? '/year' : plan.period}</small>
              </div>
              <ul className="kash-plan-card__features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <span className="kash-plan-card__check">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.button
                className={`kash-plan-card__btn ${plan.featured ? 'kash-plan-card__btn--featured' : ''}`}
                {...buttonHover}
              >
                {plan.name === 'Free' ? 'Open Free Account' : `Get ${plan.name}`}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* ── Comparison Table ── */}
      <AnimatedSection className="kash-comparison">
        <div className="kash-comparison__inner">
          <h2 className="kash-comparison__heading">Compare Plans</h2>
          <p className="kash-comparison__subtitle">
            See exactly what each plan includes, side by side.
          </p>
          <div className="kash-comparison__wrapper">
            <table className="kash-comparison__table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Free</th>
                  <th>Pro</th>
                  <th>Business</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((f) => (
                  <tr key={f.name}>
                    <td>{f.name}</td>
                    <td>
                      <span
                        className={f.free === '—' ? 'dash' : 'check'}
                        dangerouslySetInnerHTML={{ __html: f.free }}
                      />
                    </td>
                    <td>
                      <span
                        className={f.pro === '—' ? 'dash' : 'check'}
                        dangerouslySetInnerHTML={{ __html: f.pro }}
                      />
                    </td>
                    <td>
                      <span
                        className={f.business === '—' ? 'dash' : 'check'}
                        dangerouslySetInnerHTML={{ __html: f.business }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* ── FAQ ── */}
      <AnimatedSection className="kash-faq">
        <div className="kash-faq__inner">
          <h2 className="kash-faq__heading">Frequently Asked Questions</h2>
          <div className="kash-faq__list">
            {faqs.map((faq, i) => (
              <div key={i} className="kash-faq__item">
                <button
                  className="kash-faq__item-header"
                  onClick={() => toggleFaq(i)}
                >
                  <span>{faq.q}</span>
                  <span
                    className={`kash-faq__item-icon ${openFaq === i ? 'kash-faq__item-icon--open' : ''}`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      className="kash-faq__item-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
