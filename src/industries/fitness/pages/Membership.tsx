import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { plans } from '../data/classesData';

const comparisonFeatures = [
  { name: 'Gym Access', dayPass: '1 day', flex: 'Unlimited', elite: 'Unlimited' },
  { name: 'Group Classes', dayPass: '1 class', flex: 'All classes', elite: 'All classes' },
  { name: 'Locker & Towel', dayPass: 'Locker room only', flex: '✓', elite: '✓' },
  { name: 'Body Composition Scan', dayPass: '—', flex: '✓', elite: '✓' },
  { name: 'Sauna Access', dayPass: '—', flex: '✓', elite: '✓' },
  { name: 'Personal Training', dayPass: '—', flex: '—', elite: '4 sessions/mo' },
  { name: 'Nutrition Consultation', dayPass: '—', flex: '—', elite: '✓' },
  { name: 'Recovery Zone', dayPass: '—', flex: '—', elite: '✓' },
  { name: 'Guest Passes', dayPass: '—', flex: '—', elite: '2/month' },
  { name: 'Priority Booking', dayPass: '—', flex: '—', elite: '✓' },
];

const faqs = [
  {
    q: 'Can I freeze my membership?',
    a: 'Yes. Flex and Elite members can freeze their membership for up to 30 days per year at no extra charge. Simply notify us at least 48 hours before your next billing date.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'You can cancel your membership at any time with 14 days written notice before your next billing date. There are no cancellation fees or penalties.',
  },
  {
    q: 'Do you offer personal training outside of Elite?',
    a: 'Absolutely. Any member can purchase personal training sessions individually at ₦8,000 per session or in packs of 10 for ₦65,000. Elite members get 4 sessions included monthly.',
  },
  {
    q: 'Can I try the gym before committing?',
    a: 'Yes! Purchase a Day Pass for ₦3,500 and experience everything Pulse Athletics has to offer. If you sign up for Flex or Elite within 7 days, we will credit the Day Pass amount to your first month.',
  },
  {
    q: 'What are the gym operating hours?',
    a: 'Pulse Athletics is open from 6:00 AM to 11:00 PM, Monday through Sunday. Elite members with key card access can enter from 5:00 AM.',
  },
  {
    q: 'Is there parking available?',
    a: 'We have a secure parking lot with 30 spaces available on a first-come, first-served basis. There is also ample street parking along Admiralty Way.',
  },
];

export default function Membership() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (i: number) => {
    setOpenFaq(openFaq === i ? null : i);
  };

  return (
    <div className="fit-membership-page">
      {/* ── Page Header ── */}
      <section className="fit-page-header">
        <AnimatedSection className="fit-page-header__inner">
          <motion.h1
            className="fit-page-header__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Membership Plans
          </motion.h1>
          <motion.p
            className="fit-page-header__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Invest in yourself. Choose the plan that fits your goals.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* ── Pricing Cards ── */}
      <AnimatedSection className="fit-plans">
        <div className="fit-plans__grid">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              className={`fit-plan-card ${plan.featured ? 'fit-plan-card--featured' : ''}`}
              {...buttonHover}
            >
              {plan.featured && (
                <span className="fit-plan-card__badge">Most Popular</span>
              )}
              <h3 className="fit-plan-card__name">{plan.name}</h3>
              <div className="fit-plan-card__price">
                {plan.price}
                <small>{plan.period}</small>
              </div>
              <ul className="fit-plan-card__features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <span className="fit-plan-card__check">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/fitness/book">
                <motion.button
                  className={`fit-plan-card__btn ${plan.featured ? 'fit-plan-card__btn--featured' : ''}`}
                  {...buttonHover}
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* ── Feature Comparison Table ── */}
      <AnimatedSection className="fit-comparison">
        <div className="fit-comparison__inner">
          <h2 className="fit-comparison__heading">Compare Plans</h2>
          <p className="fit-comparison__subtitle">
            See exactly what is included in each membership tier.
          </p>
          <div className="fit-comparison__wrapper">
            <table className="fit-comparison__table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Day Pass</th>
                  <th>Flex</th>
                  <th>Elite</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((f) => (
                  <tr key={f.name}>
                    <td>{f.name}</td>
                    <td>
                      <span className={f.dayPass === '—' ? 'dash' : 'check'}>{f.dayPass}</span>
                    </td>
                    <td>
                      <span className={f.flex === '—' ? 'dash' : 'check'}>{f.flex}</span>
                    </td>
                    <td>
                      <span className={f.elite === '—' ? 'dash' : 'check'}>{f.elite}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* ── FAQ ── */}
      <AnimatedSection className="fit-faq">
        <div className="fit-faq__inner">
          <h2 className="fit-faq__heading">Frequently Asked Questions</h2>
          <div className="fit-faq__list">
            {faqs.map((faq, i) => (
              <div key={i} className="fit-faq__item">
                <button
                  className="fit-faq__item-header"
                  onClick={() => toggleFaq(i)}
                >
                  <span>{faq.q}</span>
                  <span
                    className={`fit-faq__item-icon ${openFaq === i ? 'fit-faq__item-icon--open' : ''}`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      className="fit-faq__item-body"
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
