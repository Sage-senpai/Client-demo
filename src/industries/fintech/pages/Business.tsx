import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { plans } from '../data/fintechData';

const businessPlan = plans.find((p) => p.name === 'Business')!;

const enterpriseFeatures = [
  {
    icon: '&#128179;',
    title: 'Team Card Management',
    desc: 'Issue up to 25 physical or virtual cards for your team. Set individual spending limits, categories, and auto-freeze rules.',
  },
  {
    icon: '&#128176;',
    title: 'Payroll Disbursement',
    desc: 'Pay your entire team in one click. Schedule recurring payroll, handle bonuses, and generate payslips automatically.',
  },
  {
    icon: '&#128196;',
    title: 'Invoicing & Payment Links',
    desc: 'Create professional invoices and shareable payment links. Track payments in real-time with automatic reconciliation.',
  },
  {
    icon: '&#128268;',
    title: 'API & Webhooks',
    desc: 'Full RESTful API access with comprehensive documentation. Integrate Kash into your existing tools and workflows.',
  },
  {
    icon: '&#128202;',
    title: 'Custom Analytics',
    desc: 'Deep spending insights, cash flow forecasting, and customizable reports. Export to CSV, PDF, or connect to your accounting software.',
  },
  {
    icon: '&#128101;',
    title: 'Dedicated Account Manager',
    desc: 'A named account manager who knows your business. Priority support with guaranteed 1-hour response times.',
  },
];

export default function Business() {
  const [form, setForm] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    employees: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.company || !form.name || !form.email) {
      toast.error('Please fill in all required fields.');
      return;
    }
    toast.success('Thank you! Our business team will contact you within 24 hours.');
    setForm({ company: '', name: '', email: '', phone: '', employees: '', message: '' });
  };

  return (
    <div className="kash-business-page">
      {/* ── Hero ── */}
      <section className="kash-business-hero">
        <AnimatedSection className="kash-business-hero__inner">
          <motion.p
            className="section-label"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Kash for Business
          </motion.p>
          <motion.h1
            className="kash-business-hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Banking Built for <span className="gradient">Growing Teams</span>
          </motion.h1>
          <motion.p
            className="kash-business-hero__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            From 2-person startups to 500-employee enterprises — manage payroll, expenses,
            invoicing, and team cards from one powerful dashboard.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/fintech/pricing">
              <motion.button className="kash-hero__btn-primary" {...buttonHover}>
                Start Free Trial
              </motion.button>
            </Link>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* ── Enterprise Features ── */}
      <AnimatedSection className="kash-business-features">
        <div className="kash-business-features__inner">
          <h2 className="kash-business-features__heading">Enterprise-Grade Features</h2>
          <p className="kash-business-features__subtitle">
            Everything your finance team needs, nothing they don&apos;t.
          </p>
          <div className="kash-business-features__grid">
            {enterpriseFeatures.map((feat) => (
              <div className="kash-business-card" key={feat.title}>
                <span
                  className="kash-business-card__icon"
                  dangerouslySetInnerHTML={{ __html: feat.icon }}
                />
                <h3 className="kash-business-card__title">{feat.title}</h3>
                <p className="kash-business-card__desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Business Pricing ── */}
      <AnimatedSection className="kash-business-pricing">
        <div className="kash-business-pricing__inner">
          <h2 className="kash-business-pricing__heading">Business Plan</h2>
          <p className="kash-business-pricing__subtitle">
            One plan, everything included. Scale as you grow.
          </p>
          <div className="kash-business-pricing__card">
            <div className="kash-plan-card__price">
              {businessPlan.price}<small>{businessPlan.period}</small>
            </div>
            <ul className="kash-plan-card__features">
              {businessPlan.features.map((f) => (
                <li key={f}>
                  <span className="kash-plan-card__check">&#10003;</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/fintech/pricing">
              <motion.button className="kash-hero__btn-primary" {...buttonHover}>
                Get Started &rarr;
              </motion.button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Contact Form ── */}
      <AnimatedSection className="kash-business-form">
        <div className="kash-business-form__inner">
          <h2 className="kash-business-form__heading">Talk to Our Business Team</h2>
          <p className="kash-business-form__subtitle">
            Need a custom solution or have questions? We&apos;ll get back to you within 24 hours.
          </p>

          <form className="kash-form" onSubmit={handleSubmit}>
            <div className="kash-form__row">
              <div className="kash-form__field">
                <label htmlFor="biz-company">Company Name *</label>
                <input
                  id="biz-company"
                  name="company"
                  type="text"
                  placeholder="Your company"
                  value={form.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="kash-form__field">
                <label htmlFor="biz-name">Full Name *</label>
                <input
                  id="biz-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="kash-form__row">
              <div className="kash-form__field">
                <label htmlFor="biz-email">Work Email *</label>
                <input
                  id="biz-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="kash-form__field">
                <label htmlFor="biz-phone">Phone</label>
                <input
                  id="biz-phone"
                  name="phone"
                  type="tel"
                  placeholder="+234..."
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="kash-form__field">
              <label htmlFor="biz-employees">Number of Employees</label>
              <select
                id="biz-employees"
                name="employees"
                value={form.employees}
                onChange={handleChange}
              >
                <option value="">Select team size...</option>
                <option value="1-10">1 - 10</option>
                <option value="11-50">11 - 50</option>
                <option value="51-200">51 - 200</option>
                <option value="201-500">201 - 500</option>
                <option value="500+">500+</option>
              </select>
            </div>

            <div className="kash-form__field">
              <label htmlFor="biz-message">How can we help?</label>
              <textarea
                id="biz-message"
                name="message"
                placeholder="Tell us about your business needs..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <motion.button
              type="submit"
              className="kash-form__submit"
              {...buttonHover}
            >
              Submit Inquiry
            </motion.button>
          </form>
        </div>
      </AnimatedSection>
    </div>
  );
}
