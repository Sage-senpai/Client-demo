import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';

const plans = [
  {
    name: 'Day Pass',
    price: '₦2,500',
    period: '/day',
    description:
      'Perfect for occasional visits. Drop in whenever inspiration strikes and enjoy our full workspace for the day.',
    features: [
      'Hot desk access (7am–10pm)',
      '500mbps WiFi',
      'Complimentary coffee & tea',
      'Access to communal areas',
      'Power outlets & USB charging',
      '20 pages printing',
    ],
    featured: false,
  },
  {
    name: 'Flexi',
    price: '₦35,000',
    period: '/month',
    description:
      'Our most popular plan. A dedicated hot desk membership with all the perks of being a Grove & Co. regular.',
    features: [
      'Hot desk access (7am–10pm)',
      '500mbps WiFi',
      'Complimentary coffee & tea',
      'Locker included',
      'Mail handling',
      '10% Café discount',
      '2 meeting room hours/month',
      '1 guest pass/month',
      'Events priority access',
    ],
    featured: true,
  },
  {
    name: 'Full',
    price: '₦55,000',
    period: '/month',
    description:
      'The ultimate workspace experience. Your own dedicated desk with everything you need to build, create, and grow.',
    features: [
      'Dedicated desk 24/7 access',
      '500mbps WiFi + Ethernet',
      'Complimentary coffee & tea',
      'Lockable storage cabinet',
      'Ergonomic chair',
      'Mail & package handling',
      '15% Café discount',
      '5 meeting room hours/month',
      '3 guest passes/month',
      'Events priority access',
      'Dual monitor setup',
    ],
    featured: false,
  },
];

const addOns = [
  {
    name: 'Meeting Room',
    description: '8 beautifully designed rooms with AV equipment',
    price: '₦5,000–₦10,000/hr',
  },
  {
    name: 'Event Space',
    description: '200sqm venue for up to 120 guests with full setup',
    price: '₦80,000/day',
  },
];

const features = [
  { name: 'Access Hours', day: '7am–10pm', flexi: '7am–10pm', full: '24/7' },
  { name: 'Guest Passes', day: '—', flexi: '1/month', full: '3/month' },
  { name: 'Locker', day: '—', flexi: '✓', full: '✓ (large)' },
  { name: 'Mail Handling', day: '—', flexi: '✓', full: '✓' },
  { name: 'Café Discount', day: '—', flexi: '10%', full: '15%' },
  { name: 'Events Priority', day: '—', flexi: '✓', full: '✓' },
  { name: 'Meeting Room Credits', day: '—', flexi: '2 hrs/mo', full: '5 hrs/mo' },
];

const faqs = [
  {
    q: 'Can I try before I commit?',
    a: 'Absolutely! We offer a free trial day for anyone considering membership. Just book through our website or walk in, and we will set you up with a hot desk for the day — no credit card required.',
  },
  {
    q: 'What are your operating hours?',
    a: 'Our space is open from 7:00 AM to 10:00 PM, Monday through Sunday. Full members with dedicated desks have 24/7 key card access to the building.',
  },
  {
    q: 'Can I upgrade or downgrade my plan?',
    a: 'Yes! You can change your plan at any time. Upgrades take effect immediately (pro-rated), and downgrades take effect at the start of your next billing cycle.',
  },
  {
    q: 'Is there parking available?',
    a: 'We have 20 on-site parking spaces available on a first-come, first-served basis. There is also ample street parking along Bourdillon Road.',
  },
  {
    q: 'Do you offer corporate packages?',
    a: 'Yes! For teams of 5 or more, we offer customised corporate packages with volume discounts, dedicated account management, and flexible terms. Contact us for a tailored proposal.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Monthly plans can be cancelled at any time with 14 days notice before your next billing date. Day passes are non-refundable but can be rescheduled.',
  },
];

export default function Membership() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (i: number) => {
    setOpenFaq(openFaq === i ? null : i);
  };

  return (
    <div className="cw-membership">
      {/* ── HERO ── */}
      <section className="cw-membership__hero">
        <div className="cw-container">
          <h1>Membership Plans</h1>
          <p>
            Flexible pricing for every work style. No hidden fees, no long-term contracts.
          </p>
        </div>
      </section>

      {/* ── PLANS ── */}
      <AnimatedSection className="cw-plans">
        <div className="cw-container">
          <div className="cw-plans__grid">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                className={`cw-plan-card ${plan.featured ? 'cw-plan-card--featured' : ''}`}
                {...buttonHover}
              >
                {plan.featured && (
                  <span className="cw-plan-card__popular">Most Popular</span>
                )}
                <h3 className="cw-plan-card__name">{plan.name}</h3>
                <div className="cw-plan-card__price">
                  {plan.price}
                  <small>{plan.period}</small>
                </div>
                <p className="cw-plan-card__description">{plan.description}</p>
                <ul className="cw-plan-card__features">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link
                  to="/coworking/book"
                  className={`cw-btn ${plan.featured ? 'cw-btn--cream' : 'cw-btn--primary'}`}
                >
                  Get Started →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── ADD-ONS ── */}
      <AnimatedSection className="cw-addons">
        <div className="cw-container">
          <h2 className="cw-section-title">Add-Ons</h2>
          <p className="cw-section-subtitle">
            Enhance your membership with meeting rooms and event space bookings.
          </p>
          <div className="cw-addons__grid">
            {addOns.map((addon) => (
              <div key={addon.name} className="cw-addons__card">
                <div>
                  <h4>{addon.name}</h4>
                  <p>{addon.description}</p>
                </div>
                <span className="cw-addons__card-price">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── FEATURE COMPARISON TABLE ── */}
      <AnimatedSection className="cw-feature-table">
        <div className="cw-container">
          <h2 className="cw-section-title">Compare Plans</h2>
          <p className="cw-section-subtitle">
            See exactly what is included in each membership tier.
          </p>
          <div className="cw-feature-table__wrapper">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Day Pass</th>
                  <th>Flexi</th>
                  <th>Full</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f) => (
                  <tr key={f.name}>
                    <td>{f.name}</td>
                    <td>
                      <span className={f.day === '—' ? 'dash' : 'check'}>{f.day}</span>
                    </td>
                    <td>
                      <span className={f.flexi === '—' ? 'dash' : 'check'}>{f.flexi}</span>
                    </td>
                    <td>
                      <span className={f.full === '—' ? 'dash' : 'check'}>{f.full}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* ── FAQ ── */}
      <AnimatedSection className="cw-faq">
        <div className="cw-container">
          <h2 className="cw-section-title">Frequently Asked Questions</h2>
          <p className="cw-section-subtitle">
            Everything you need to know about working at Grove &amp; Co.
          </p>
          <div className="cw-faq__list">
            {faqs.map((faq, i) => (
              <div key={i} className="cw-faq__item">
                <button
                  className="cw-faq__item-header"
                  onClick={() => toggleFaq(i)}
                >
                  <span>{faq.q}</span>
                  <span
                    className={`cw-faq__item-header-icon ${
                      openFaq === i ? 'cw-faq__item-header-icon--open' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      className="cw-faq__item-body"
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
