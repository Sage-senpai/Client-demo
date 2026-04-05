import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';

const pricingTiers = [
  {
    name: 'Per-Drop',
    desc: 'Perfect for individual senders. No commitment, no subscription — just pay per delivery.',
    price: '₦1,200',
    unit: 'per delivery (up to 5km)',
    features: [
      'Flat rate within 5km radius',
      'Real-time tracking',
      'SMS & in-app notifications',
      'Photo proof of delivery',
      'Standard insurance (₦50,000)',
      'Cash or card payment',
    ],
    featured: false,
    btnLabel: 'Start Sending',
  },
  {
    name: 'Business',
    desc: 'Volume pricing for businesses shipping 100+ orders monthly. Save up to 35% per delivery.',
    price: '₦750',
    unit: 'per delivery (volume rate)',
    features: [
      'Everything in Per-Drop',
      'Volume discounts from 100 orders',
      'Dedicated dashboard',
      'Priority dispatch queue',
      'API & webhook access',
      'Enhanced insurance (₦500,000)',
      'Monthly invoicing',
    ],
    featured: true,
    btnLabel: 'Go Business',
  },
  {
    name: 'Enterprise',
    desc: 'Fully custom logistics solutions for large-scale operations. Tailored to your exact needs.',
    price: 'Custom',
    unit: 'contact for pricing',
    features: [
      'Everything in Business',
      'Unlimited deliveries',
      'Dedicated rider fleet',
      'White-label tracking',
      'Custom SLA agreements',
      'On-site integration support',
      'Custom insurance limits',
      'Dedicated account manager',
    ],
    featured: false,
    btnLabel: 'Contact Sales',
  },
];

export default function Pricing() {
  const [distance, setDistance] = useState(10);
  const [weightSurcharge, setWeightSurcharge] = useState(false);

  const baseRate = 500;
  const perKm = 45;
  const surchargeAmount = 300;

  const computedPrice = baseRate + distance * perKm + (weightSurcharge ? surchargeAmount : 0);

  return (
    <div className="del-page-enter">
      <div className="del-pricing">
        <AnimatedSection>
          <h1 className="del-pricing__title">Simple, Transparent Pricing</h1>
          <div className="del-section-divider" />
          <p className="del-pricing__subtitle">
            No hidden fees. No surge pricing. Just honest rates that scale with your needs.
          </p>
        </AnimatedSection>

        {/* ── PRICING CARDS ── */}
        <AnimatedSection>
          <div className="del-pricing-cards">
            {pricingTiers.map((tier, i) => (
              <motion.div
                className={`del-pricing-cards__card ${
                  tier.featured ? 'del-pricing-cards__card--featured' : ''
                }`}
                key={tier.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {tier.featured && (
                  <div className="del-pricing-cards__badge">Most Popular</div>
                )}
                <h3 className="del-pricing-cards__name">{tier.name}</h3>
                <p className="del-pricing-cards__desc">{tier.desc}</p>

                <div className="del-pricing-cards__price">
                  {tier.price}
                  {tier.price !== 'Custom' && <span> /drop</span>}
                </div>
                <div className="del-pricing-cards__unit">{tier.unit}</div>

                <ul className="del-pricing-cards__features">
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <motion.button
                  className={`del-pricing-cards__btn ${
                    tier.featured ? 'del-pricing-cards__btn--primary' : ''
                  }`}
                  {...buttonHover}
                >
                  {tier.btnLabel}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* ── DISTANCE CALCULATOR ── */}
        <AnimatedSection>
          <div className="del-calculator">
            <h3 className="del-calculator__title">Price Calculator</h3>
            <p className="del-calculator__subtitle">
              Estimate your delivery cost based on distance and package weight.
            </p>

            <div className="del-calculator__slider-group">
              <div className="del-calculator__slider-label">
                <span>Distance</span>
                <span>{distance} km</span>
              </div>
              <input
                type="range"
                className="del-calculator__slider"
                min={0}
                max={100}
                step={1}
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
              />
            </div>

            <div className="del-calculator__weight-toggle">
              <span>Heavy package surcharge (+₦{surchargeAmount})</span>
              <label className="del-calculator__toggle">
                <input
                  type="checkbox"
                  checked={weightSurcharge}
                  onChange={(e) => setWeightSurcharge(e.target.checked)}
                />
                <span className="del-calculator__toggle-slider" />
              </label>
            </div>

            <div className="del-calculator__result">
              <div className="del-calculator__result-label">Estimated Price</div>
              <div className="del-calculator__result-price">
                ₦{computedPrice.toLocaleString()}
              </div>
            </div>

            <p className="del-calculator__formula">
              Formula: ₦{baseRate} base + ({distance} km x ₦{perKm})
              {weightSurcharge ? ` + ₦${surchargeAmount} surcharge` : ''}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
