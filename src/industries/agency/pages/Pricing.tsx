import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';
import { packages } from '../data/agencyData';

const comparisonRows = [
  { feature: 'Brand Identity', starter: true, growth: true, enterprise: true },
  { feature: 'Website Design & Dev', starter: '5 pages', growth: '10 pages + CMS', enterprise: 'Custom App' },
  { feature: 'Social Media Setup', starter: true, growth: true, enterprise: true },
  { feature: 'Social Media Management', starter: false, growth: '3 months', enterprise: '6 months' },
  { feature: 'SEO Strategy', starter: 'Basic', growth: 'Full', enterprise: 'Advanced' },
  { feature: 'Paid Ad Campaigns', starter: false, growth: true, enterprise: 'Multi-platform' },
  { feature: 'Email Marketing', starter: false, growth: true, enterprise: 'With automations' },
  { feature: 'Dedicated Account Manager', starter: false, growth: false, enterprise: true },
  { feature: 'Strategy Calls', starter: 'Monthly', growth: 'Bi-weekly', enterprise: 'Weekly' },
  { feature: 'Post-Launch Support', starter: '30 days', growth: '90 days', enterprise: '6 months' },
];

function renderCell(value: boolean | string) {
  if (value === true) return <span className="ag-check">&#10003;</span>;
  if (value === false) return <span className="ag-cross">&#10007;</span>;
  return value;
}

export default function Pricing() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    packageChoice: '',
    budget: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    toast.success('Quote request sent! We will get back to you within 24 hours.', {
      duration: 4000,
      style: { fontFamily: "'Inter', sans-serif" },
    });
    setForm({ name: '', email: '', company: '', packageChoice: '', budget: '', message: '' });
  };

  return (
    <div className="ag-pricing">
      {/* ── Header ── */}
      <div className="ag-page-header">
        <div className="ag-page-header__bg" />
        <AnimatedSection className="ag-page-header__inner">
          <p className="ag-page-header__label">Pricing</p>
          <h1 className="ag-page-header__title">
            Transparent Pricing, Real Results
          </h1>
          <p className="ag-page-header__subtitle">
            Three packages designed for businesses at every stage. Pick a plan or
            get a custom quote — either way, you win.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Pricing Cards ── */}
      <div className="ag-pricing-grid">
        {packages.map((pkg) => (
          <AnimatedSection key={pkg.id}>
            <div
              className={`ag-price-card ${pkg.popular ? 'ag-price-card--popular' : ''}`}
            >
              <h3 className="ag-price-card__name">{pkg.name}</h3>
              <p className="ag-price-card__price">{pkg.price}</p>
              <p className="ag-price-card__desc">{pkg.description}</p>
              <ul className="ag-price-card__features">
                {pkg.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
              <motion.button
                className={`ag-price-card__btn ${
                  pkg.popular
                    ? 'ag-price-card__btn--filled'
                    : 'ag-price-card__btn--outline'
                }`}
                {...buttonHover}
                onClick={() => {
                  setForm({ ...form, packageChoice: pkg.name });
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started
              </motion.button>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* ── Comparison Table ── */}
      <div className="ag-comparison">
        <AnimatedSection className="ag-comparison__header">
          <p className="ag-section-label">Compare Plans</p>
          <h2 className="ag-section-title">Feature Breakdown</h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="ag-comparison__table-wrap">
            <table className="ag-comparison__table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Starter</th>
                  <th>Growth</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.feature}</td>
                    <td>{renderCell(row.starter)}</td>
                    <td>{renderCell(row.growth)}</td>
                    <td>{renderCell(row.enterprise)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>

      {/* ── Quote Form ── */}
      <div className="ag-quote-form" id="quote-form">
        <AnimatedSection className="ag-quote-form__header">
          <p className="ag-section-label">Get a Quote</p>
          <h2 className="ag-section-title">Request a Custom Quote</h2>
          <p className="ag-section-subtitle" style={{}}>
            Need something tailored? Tell us about your project and we will put
            together a proposal within 48 hours.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <form onSubmit={handleSubmit}>
            <div className="ag-quote-form__grid">
              <div className="ag-quote-form__field">
                <label className="ag-quote-form__label">Full Name *</label>
                <input
                  className="ag-quote-form__input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ag-quote-form__field">
                <label className="ag-quote-form__label">Email *</label>
                <input
                  className="ag-quote-form__input"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ag-quote-form__field">
                <label className="ag-quote-form__label">Company</label>
                <input
                  className="ag-quote-form__input"
                  type="text"
                  name="company"
                  placeholder="Your company"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>
              <div className="ag-quote-form__field">
                <label className="ag-quote-form__label">Package</label>
                <select
                  className="ag-quote-form__select"
                  name="packageChoice"
                  value={form.packageChoice}
                  onChange={handleChange}
                >
                  <option value="">Select a package</option>
                  <option value="Starter">Starter — &#8358;300k</option>
                  <option value="Growth">Growth — &#8358;650k</option>
                  <option value="Enterprise">Enterprise — &#8358;1.2M</option>
                  <option value="Custom">Custom / Not Sure</option>
                </select>
              </div>
              <div className="ag-quote-form__field">
                <label className="ag-quote-form__label">Budget Range</label>
                <select
                  className="ag-quote-form__select"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget</option>
                  <option value="under-300k">Under &#8358;300k</option>
                  <option value="300k-650k">&#8358;300k - &#8358;650k</option>
                  <option value="650k-1.2m">&#8358;650k - &#8358;1.2M</option>
                  <option value="above-1.2m">Above &#8358;1.2M</option>
                </select>
              </div>
              <div className="ag-quote-form__field ag-quote-form__field--full">
                <label className="ag-quote-form__label">Project Details *</label>
                <textarea
                  className="ag-quote-form__textarea"
                  name="message"
                  placeholder="Tell us about your project, goals, and timeline..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <motion.button
              type="submit"
              className="ag-quote-form__submit"
              {...buttonHover}
            >
              Submit Quote Request
            </motion.button>
          </form>
        </AnimatedSection>
      </div>
    </div>
  );
}
