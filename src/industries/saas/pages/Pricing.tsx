import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';

interface Tier {
  name: string;
  desc: string;
  monthly: string;
  annual: string;
  monthlyValue: string;
  annualValue: string;
  features: string[];
  featured?: boolean;
  cta: string;
}

const tiers: Tier[] = [
  {
    name: 'Free',
    desc: 'For small teams getting started with project management.',
    monthly: 'Free',
    annual: 'Free',
    monthlyValue: '₦0',
    annualValue: '₦0',
    features: [
      'Up to 5 team members',
      '3 active projects',
      'Basic task management',
      'Community support',
      '1 GB storage',
    ],
    cta: 'Get Started Free',
  },
  {
    name: 'Growth',
    desc: 'For scaling teams that need AI-powered productivity tools.',
    monthly: '₦25,000',
    annual: '₦20,000',
    monthlyValue: '₦25,000/mo',
    annualValue: '₦20,000/mo',
    features: [
      'Unlimited team members',
      'Unlimited projects',
      'AI task prioritization',
      'Smart scheduling',
      'Team analytics',
      'Workflow automation',
      'Priority support',
      '50 GB storage',
    ],
    featured: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    desc: 'For large organizations with advanced security and compliance needs.',
    monthly: '₦75,000',
    annual: '₦60,000',
    monthlyValue: '₦75,000/mo',
    annualValue: '₦60,000/mo',
    features: [
      'Everything in Growth',
      'Custom dashboards',
      'Advanced security (SSO, SAML)',
      'Audit logs',
      'Dedicated account manager',
      'Custom integrations',
      '99.99% SLA',
      'Unlimited storage',
    ],
    cta: 'Contact Sales',
  },
];

interface ComparisonRow {
  feature: string;
  free: string;
  growth: string;
  enterprise: string;
}

const comparisonData: ComparisonRow[] = [
  { feature: 'Team Members', free: '5', growth: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Projects', free: '3', growth: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'AI Task Prioritization', free: '—', growth: '✓', enterprise: '✓' },
  { feature: 'Smart Scheduling', free: '—', growth: '✓', enterprise: '✓' },
  { feature: 'Team Analytics', free: 'Basic', growth: 'Advanced', enterprise: 'Custom' },
  { feature: 'Workflow Automation', free: '—', growth: '50 rules', enterprise: 'Unlimited' },
  { feature: 'Real-time Collaboration', free: '✓', growth: '✓', enterprise: '✓' },
  { feature: 'Custom Dashboards', free: '—', growth: '—', enterprise: '✓' },
  { feature: 'Integrations', free: '5', growth: '50+', enterprise: '150+' },
  { feature: 'Storage', free: '1 GB', growth: '50 GB', enterprise: 'Unlimited' },
  { feature: 'Support', free: 'Community', growth: 'Priority', enterprise: 'Dedicated' },
  { feature: 'SSO / SAML', free: '—', growth: '—', enterprise: '✓' },
];

const faqs = [
  {
    q: 'Can I switch plans at any time?',
    a: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you\'ll be prorated for the remainder of your billing cycle. When downgrading, the change takes effect at the start of your next billing period.',
  },
  {
    q: 'What happens after my 14-day trial?',
    a: 'After your trial ends, you can choose to subscribe to any paid plan or continue using the Free tier. No credit card is required to start a trial, and you won\'t be charged automatically.',
  },
  {
    q: 'Is there a discount for annual billing?',
    a: 'Yes! When you choose annual billing, you save 20% compared to monthly billing. That works out to getting more than 2 months free every year.',
  },
  {
    q: 'Do you offer discounts for startups or nonprofits?',
    a: 'We offer a 50% discount for qualified startups (under 2 years old, under $5M in funding) and a 30% discount for registered nonprofits. Contact our sales team to apply.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards (Visa, Mastercard, Amex), bank transfers, and PayPal. Enterprise customers can also pay via invoice with NET-30 terms.',
  },
  {
    q: 'Can I get a refund if I\'m not satisfied?',
    a: 'We offer a 30-day money-back guarantee on all paid plans. If you\'re not completely satisfied, contact support and we\'ll process a full refund.',
  },
];

function CellContent({ value }: { value: string }) {
  if (value === '✓') return <span className="saas-comparison__check">✓</span>;
  if (value === '—') return <span className="saas-comparison__dash">—</span>;
  return <span className="saas-comparison__value">{value}</span>;
}

export default function Pricing() {
  const navigate = useNavigate();
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── Hero ── */}
      <AnimatedSection>
        <section className="saas-pricing-hero">
          <div className="saas-container">
            <h1>
              Simple, transparent{' '}
              <span className="saas-gradient-text">pricing</span>
            </h1>
            <p>No hidden fees. No surprises. Start free and scale as you grow.</p>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Toggle ── */}
      <AnimatedSection>
        <div className="saas-pricing-toggle">
          <span
            className={`saas-pricing-toggle__label ${!annual ? 'saas-pricing-toggle__label--active' : ''}`}
          >
            Monthly
          </span>
          <button
            className={`saas-pricing-toggle__switch ${annual ? 'saas-pricing-toggle__switch--active' : ''}`}
            onClick={() => setAnnual(!annual)}
            aria-label="Toggle billing period"
          />
          <span
            className={`saas-pricing-toggle__label ${annual ? 'saas-pricing-toggle__label--active' : ''}`}
          >
            Annual
          </span>
          <span className="saas-pricing-toggle__badge">Save 20%</span>
        </div>
      </AnimatedSection>

      {/* ── Pricing Cards ── */}
      <div className="saas-pricing-cards">
        {tiers.map((tier, idx) => (
          <AnimatedSection key={tier.name} delay={idx * 0.1}>
            <div
              className={`saas-pricing-card ${
                tier.featured ? 'saas-pricing-card--featured' : ''
              }`}
            >
              {tier.featured && (
                <div className="saas-pricing-card__popular">Most Popular</div>
              )}

              <h3 className="saas-pricing-card__name">{tier.name}</h3>
              <p className="saas-pricing-card__desc">{tier.desc}</p>

              <p className="saas-pricing-card__price">
                {annual ? tier.annual : tier.monthly}
              </p>
              <p className="saas-pricing-card__period">
                {tier.name === 'Free'
                  ? 'Free forever'
                  : annual
                  ? 'per month, billed annually'
                  : 'per month'}
              </p>

              <ul className="saas-pricing-card__features">
                {tier.features.map((f, fidx) => (
                  <li key={fidx} className="saas-pricing-card__feature">
                    {f}
                  </li>
                ))}
              </ul>

              <motion.button
                className={`saas-btn saas-pricing-card__btn ${
                  tier.featured
                    ? 'saas-btn--white'
                    : 'saas-btn--primary'
                }`}
                onClick={() => navigate('/saas/signup')}
                {...buttonHover}
              >
                {tier.cta}
              </motion.button>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* ── Feature Comparison ── */}
      <AnimatedSection>
        <section className="saas-comparison">
          <div className="saas-comparison__header">
            <h2>Compare all features</h2>
          </div>
          <div className="saas-comparison__table-wrap">
            <table className="saas-comparison__table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Free</th>
                  <th>Growth</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.feature}</td>
                    <td><CellContent value={row.free} /></td>
                    <td><CellContent value={row.growth} /></td>
                    <td><CellContent value={row.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </AnimatedSection>

      {/* ── FAQ ── */}
      <section className="saas-faq">
        <AnimatedSection>
          <div className="saas-faq__header">
            <h2>Frequently asked questions</h2>
            <p>Everything you need to know about Vela pricing.</p>
          </div>
        </AnimatedSection>

        <div className="saas-faq__list">
          {faqs.map((faq, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.05}>
              <div className="saas-faq__item">
                <button
                  className={`saas-faq__question ${openFaq === idx ? 'saas-faq__question--open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  {faq.q}
                  <span>+</span>
                </button>
                {openFaq === idx && (
                  <motion.div
                    className="saas-faq__answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
