import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';

const benefits = [
  {
    icon: '⚡',
    title: 'Same-Day Guarantee',
    desc: 'Every order dispatched before 2 PM is guaranteed same-day delivery within Lagos. We put our money where our riders are.',
  },
  {
    icon: '📊',
    title: 'Real-Time Dashboard',
    desc: 'Monitor all active deliveries, view analytics, track rider performance, and download reports from one centralized dashboard.',
  },
  {
    icon: '🔗',
    title: 'API Integration',
    desc: 'Connect your systems directly with our RESTful API. Automate dispatch, tracking, and invoicing without lifting a finger.',
  },
  {
    icon: '💰',
    title: 'Volume Discounts',
    desc: 'The more you ship, the less you pay. Business accounts enjoy tiered pricing that drops as your monthly volume increases.',
  },
  {
    icon: '🛡️',
    title: 'Insurance Coverage',
    desc: 'Every shipment is covered up to ₦500,000. High-value items get additional coverage with our premium insurance add-on.',
  },
  {
    icon: '👤',
    title: 'Dedicated Account Manager',
    desc: 'Premium and Enterprise clients get a dedicated account manager who knows your business inside out. No call centres, no tickets.',
  },
];

const tiers = [
  {
    name: 'Standard',
    desc: 'For small businesses shipping up to 100 orders per month.',
    features: [
      'Up to 100 deliveries/month',
      'Standard tracking dashboard',
      'Email support (24hr response)',
      'Basic analytics',
      'Insurance up to ₦200,000',
    ],
    featured: false,
    btnLabel: 'Get Started',
  },
  {
    name: 'Premium',
    desc: 'For growing businesses that need speed, scale, and dedicated support.',
    features: [
      'Up to 1,000 deliveries/month',
      'Priority dispatch queue',
      'Dedicated account manager',
      'API access with webhooks',
      'Advanced analytics and reports',
      'Insurance up to ₦500,000',
    ],
    featured: true,
    btnLabel: 'Go Premium',
  },
  {
    name: 'Enterprise',
    desc: 'Custom solutions for large-scale operations and logistics-heavy businesses.',
    features: [
      'Unlimited deliveries',
      'Custom SLA agreements',
      'White-label tracking pages',
      'Dedicated rider fleet option',
      'Full API suite with priority support',
      'Custom insurance limits',
      'On-site integration support',
    ],
    featured: false,
    btnLabel: 'Contact Sales',
  },
];

export default function Business() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    tier: 'Standard',
    monthlyVolume: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Business inquiry submitted! Our team will reach out within 24 hours.');
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      tier: 'Standard',
      monthlyVolume: '',
      message: '',
    });
  };

  return (
    <div className="del-page-enter">
      <div className="del-business">
        {/* ── HERO ── */}
        <AnimatedSection className="del-business__hero">
          <h1>
            Delivery Infrastructure for <span>African Business</span>
          </h1>
          <p>
            Whether you are a growing e-commerce brand or a national enterprise, Zinga provides
            the logistics backbone you need. Reliable, fast, and built for scale. Join 400+
            businesses that trust us with their last mile.
          </p>
        </AnimatedSection>

        {/* ── BENEFITS ── */}
        <AnimatedSection>
          <div className="del-benefits">
            <h2 className="del-benefits__title">Why Businesses Choose Zinga</h2>

            <div className="del-benefits__grid">
              {benefits.map((benefit, i) => (
                <motion.div
                  className="del-benefits__card"
                  key={benefit.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="del-benefits__card-icon">{benefit.icon}</div>
                  <h4 className="del-benefits__card-title">{benefit.title}</h4>
                  <p className="del-benefits__card-desc">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── PARTNERSHIP TIERS ── */}
        <AnimatedSection>
          <div className="del-tiers">
            <h2 className="del-tiers__title">Partnership Tiers</h2>

            <div className="del-tiers__grid">
              {tiers.map((tier, i) => (
                <motion.div
                  className={`del-tiers__card ${tier.featured ? 'del-tiers__card--featured' : ''}`}
                  key={tier.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {tier.featured && <div className="del-tiers__badge">Most Popular</div>}
                  <h3 className="del-tiers__card-title">{tier.name}</h3>
                  <p className="del-tiers__card-desc">{tier.desc}</p>

                  <ul className="del-tiers__features">
                    {tier.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  <motion.button
                    className={`del-tiers__card-btn ${
                      tier.featured ? 'del-tiers__card-btn--primary' : ''
                    }`}
                    {...buttonHover}
                  >
                    {tier.btnLabel}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── BUSINESS INQUIRY FORM ── */}
        <AnimatedSection>
          <form className="del-biz-form" onSubmit={handleSubmit}>
            <h3 className="del-biz-form__title">Get in Touch</h3>
            <p className="del-biz-form__subtitle">
              Tell us about your business and we will craft a logistics plan that fits.
            </p>

            <div className="del-biz-form__row">
              <div className="del-biz-form__field">
                <label>Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Acme Corp"
                  required
                />
              </div>
              <div className="del-biz-form__field">
                <label>Contact Person</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div className="del-biz-form__row">
              <div className="del-biz-form__field">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@acme.com"
                  required
                />
              </div>
              <div className="del-biz-form__field">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 800 000 0000"
                  required
                />
              </div>
            </div>

            <div className="del-biz-form__row">
              <div className="del-biz-form__field">
                <label>Preferred Tier</label>
                <select name="tier" value={formData.tier} onChange={handleChange}>
                  <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                  <option value="Enterprise">Enterprise</option>
                </select>
              </div>
              <div className="del-biz-form__field">
                <label>Monthly Volume (est.)</label>
                <input
                  type="text"
                  name="monthlyVolume"
                  value={formData.monthlyVolume}
                  onChange={handleChange}
                  placeholder="e.g. 500 deliveries"
                />
              </div>
            </div>

            <div className="del-biz-form__field">
              <label>Tell Us More</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your delivery needs, current challenges, or any special requirements..."
              />
            </div>

            <motion.button type="submit" className="del-biz-form__submit" {...buttonHover}>
              Submit Business Inquiry
            </motion.button>
          </form>
        </AnimatedSection>
      </div>
    </div>
  );
}
