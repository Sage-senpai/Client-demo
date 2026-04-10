import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';
import { services, packages } from '../data/consultingData';

const steps = ['Service Area', 'Company Info', 'Project Details'];

export default function Book() {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState('');
  const [form, setForm] = useState({
    name: '',
    company: '',
    size: '',
    revenue: '',
    country: '',
    timeline: '',
    budget: '',
    description: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const next = () => {
    if (step === 0 && !selectedService) {
      toast.error('Please select a service area.');
      return;
    }
    if (step === 1 && (!form.name || !form.company || !form.country)) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setStep((s) => Math.min(s + 1, 2));
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.description) {
      toast.error('Please describe your project.');
      return;
    }
    toast.success(
      'Consultation request submitted! A partner will contact you within 24 hours.',
      { duration: 5000, style: { fontFamily: "'Inter', sans-serif" } },
    );
    setStep(0);
    setSelectedService('');
    setForm({
      name: '',
      company: '',
      size: '',
      revenue: '',
      country: '',
      timeline: '',
      budget: '',
      description: '',
    });
  };

  return (
    <div className="vx-book">
      {/* ── Header ── */}
      <div className="vx-page-header">
        <div className="vx-page-header__bg" />
        <AnimatedSection className="vx-page-header__inner">
          <p className="vx-page-header__label">Book a Consultation</p>
          <h1 className="vx-page-header__title">
            Let&rsquo;s Start with a Conversation
          </h1>
          <p className="vx-page-header__subtitle">
            Tell us about your challenge. We will match you with the right partner
            and practice for a confidential, no-obligation consultation.
          </p>
        </AnimatedSection>
      </div>

      <div className="vx-book__inner">
        {/* ── Stepper ── */}
        <div className="vx-stepper">
          {steps.map((label, i) => (
            <div key={label} className="vx-stepper__step-wrapper">
              <div
                className={`vx-stepper__step ${
                  i === step
                    ? 'vx-stepper__step--active'
                    : i < step
                    ? 'vx-stepper__step--done'
                    : ''
                }`}
              >
                <span className="vx-stepper__step-number">{i + 1}</span>
                <span className="vx-stepper__step-label">{label}</span>
              </div>
              {i < steps.length - 1 && <span className="vx-stepper__divider" />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* ── Step 1: Service Area ── */}
          {step === 0 && (
            <AnimatedSection>
              <div className="vx-book-services">
                {services.map((svc) => (
                  <div
                    key={svc.id}
                    className={`vx-book-services__card ${
                      selectedService === svc.id
                        ? 'vx-book-services__card--selected'
                        : ''
                    }`}
                    onClick={() => setSelectedService(svc.id)}
                  >
                    <h4>
                      {svc.icon} {svc.name}
                    </h4>
                    <p>{svc.description.slice(0, 80)}...</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* ── Step 2: Company Info ── */}
          {step === 1 && (
            <AnimatedSection>
              <div className="vx-form">
                <div className="vx-form__row">
                  <div className="vx-form__field">
                    <label className="vx-form__label">Full Name *</label>
                    <input
                      className="vx-form__input"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="vx-form__field">
                    <label className="vx-form__label">Company *</label>
                    <input
                      className="vx-form__input"
                      type="text"
                      name="company"
                      placeholder="Company name"
                      value={form.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="vx-form__row">
                  <div className="vx-form__field">
                    <label className="vx-form__label">Company Size</label>
                    <select
                      className="vx-form__select"
                      name="size"
                      value={form.size}
                      onChange={handleChange}
                    >
                      <option value="">Select size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1,000 employees</option>
                      <option value="1000+">1,000+ employees</option>
                    </select>
                  </div>
                  <div className="vx-form__field">
                    <label className="vx-form__label">Annual Revenue Range</label>
                    <select
                      className="vx-form__select"
                      name="revenue"
                      value={form.revenue}
                      onChange={handleChange}
                    >
                      <option value="">Select range</option>
                      <option value="under-1m">Under $1M</option>
                      <option value="1m-10m">$1M &ndash; $10M</option>
                      <option value="10m-100m">$10M &ndash; $100M</option>
                      <option value="100m-1b">$100M &ndash; $1B</option>
                      <option value="above-1b">$1B+</option>
                    </select>
                  </div>
                </div>
                <div className="vx-form__field">
                  <label className="vx-form__label">Country *</label>
                  <input
                    className="vx-form__input"
                    type="text"
                    name="country"
                    placeholder="Where is your headquarters?"
                    value={form.country}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* ── Step 3: Project Details ── */}
          {step === 2 && (
            <AnimatedSection>
              <div className="vx-form">
                <div className="vx-form__row">
                  <div className="vx-form__field">
                    <label className="vx-form__label">Timeline</label>
                    <select
                      className="vx-form__select"
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (within 2 weeks)</option>
                      <option value="1-3months">1 &ndash; 3 months</option>
                      <option value="3-6months">3 &ndash; 6 months</option>
                      <option value="6-12months">6 &ndash; 12 months</option>
                      <option value="exploratory">Exploratory / No timeline</option>
                    </select>
                  </div>
                  <div className="vx-form__field">
                    <label className="vx-form__label">Budget Range</label>
                    <select
                      className="vx-form__select"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select budget</option>
                      <option value="under-50k">Under $50K</option>
                      <option value="50k-150k">$50K &ndash; $150K</option>
                      <option value="150k-500k">$150K &ndash; $500K</option>
                      <option value="500k-1m">$500K &ndash; $1M</option>
                      <option value="above-1m">$1M+</option>
                    </select>
                  </div>
                </div>
                <div className="vx-form__field">
                  <label className="vx-form__label">Project Description *</label>
                  <textarea
                    className="vx-form__textarea"
                    name="description"
                    placeholder="Describe your challenge, objectives, and what success looks like for this engagement..."
                    value={form.description}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* ── Navigation ── */}
          <div className="vx-book-nav">
            {step > 0 && (
              <motion.button
                type="button"
                className="vx-book-nav__back"
                onClick={back}
                {...buttonHover}
              >
                &#8592; Back
              </motion.button>
            )}
            {step < 2 ? (
              <motion.button
                type="button"
                className="vx-book-nav__next"
                onClick={next}
                {...buttonHover}
              >
                Continue &#8594;
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                className="vx-book-nav__next"
                {...buttonHover}
              >
                Submit Request
              </motion.button>
            )}
          </div>
        </form>

        {/* ── Engagement Models ── */}
        <section className="vx-pricing">
          <AnimatedSection className="vx-pricing__header">
            <p className="vx-section-label">Engagement Models</p>
            <h2 className="vx-section-title">Flexible Ways to Work Together</h2>
            <p className="vx-section-subtitle">
              Choose the engagement structure that fits your needs — from focused
              project sprints to long-term strategic partnerships.
            </p>
          </AnimatedSection>

          <div className="vx-pricing__grid">
            {packages.map((pkg) => (
              <AnimatedSection key={pkg.id}>
                <div
                  className={`vx-pricing-card ${
                    pkg.popular ? 'vx-pricing-card--popular' : ''
                  }`}
                >
                  {pkg.popular && (
                    <span className="vx-pricing-card__badge">Most Popular</span>
                  )}
                  <h3 className="vx-pricing-card__name">{pkg.name}</h3>
                  <p className="vx-pricing-card__price">{pkg.price}</p>
                  <p className="vx-pricing-card__desc">{pkg.description}</p>
                  <ul className="vx-pricing-card__features">
                    {pkg.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
