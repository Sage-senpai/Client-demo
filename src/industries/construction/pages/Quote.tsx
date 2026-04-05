import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';

type ProjectType = 'Commercial' | 'Residential' | 'Industrial' | 'Infrastructure' | 'Renovation';

const projectTypes: { type: ProjectType; icon: string }[] = [
  { type: 'Commercial', icon: '🏗️' },
  { type: 'Residential', icon: '🏠' },
  { type: 'Industrial', icon: '🏭' },
  { type: 'Infrastructure', icon: '🌉' },
  { type: 'Renovation', icon: '🔧' },
];

const budgetRanges = [
  'Below ₦100M',
  '₦100M - ₦500M',
  '₦500M - ₦1B',
  '₦1B - ₦5B',
  'Above ₦5B',
];

const timelines = [
  'Under 6 months',
  '6 - 12 months',
  '12 - 18 months',
  '18 - 24 months',
  'Over 24 months',
];

const processSteps = [
  {
    number: 1,
    title: 'Review & Assessment',
    desc: 'Our engineering team reviews your submission and conducts an initial feasibility assessment within 24 hours.',
  },
  {
    number: 2,
    title: 'Site Visit & Scoping',
    desc: 'We schedule a site visit to assess conditions, take measurements, and discuss your requirements in detail.',
  },
  {
    number: 3,
    title: 'Detailed Proposal',
    desc: 'You receive a comprehensive proposal with scope, timeline, cost breakdown, and terms — typically within 5 business days.',
  },
];

export default function Quote() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState<ProjectType | ''>('');
  const [formData, setFormData] = useState({
    location: '',
    size: '',
    floors: '',
    budget: '',
    timeline: '',
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceedStep1 = projectType !== '';
  const canProceedStep2 =
    formData.location.trim() !== '' &&
    formData.size.trim() !== '' &&
    formData.budget !== '' &&
    formData.timeline !== '';
  const canSubmit =
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.phone.trim() !== '';

  const handleSubmit = () => {
    toast.success('Our team will contact you within 24 hours.', {
      duration: 5000,
    });
    setStep(1);
    setProjectType('');
    setFormData({
      location: '',
      size: '',
      floors: '',
      budget: '',
      timeline: '',
      name: '',
      company: '',
      role: '',
      email: '',
      phone: '',
    });
  };

  return (
    <div className="con-quote-page">
      {/* ── Page Header ── */}
      <div className="con-page-header">
        <h1 className="con-page-header__title">Request a Quote</h1>
        <p className="con-page-header__subtitle">
          Tell us about your project and receive a detailed proposal within 5 business
          days.
        </p>
      </div>

      <AnimatedSection className="con-section">
        {/* ── Stepper ── */}
        <div className="con-quote-stepper">
          <div className="con-step-indicator">
            <div
              className={`con-step-indicator__circle ${
                step === 1
                  ? 'con-step-indicator__circle--active'
                  : step > 1
                  ? 'con-step-indicator__circle--done'
                  : ''
              }`}
            >
              {step > 1 ? '✓' : '1'}
            </div>
            <span className="con-step-indicator__label">Project Type</span>
          </div>
          <div className={`con-step-line ${step > 1 ? 'con-step-line--done' : ''}`} />
          <div className="con-step-indicator">
            <div
              className={`con-step-indicator__circle ${
                step === 2
                  ? 'con-step-indicator__circle--active'
                  : step > 2
                  ? 'con-step-indicator__circle--done'
                  : ''
              }`}
            >
              {step > 2 ? '✓' : '2'}
            </div>
            <span className="con-step-indicator__label">Scope Details</span>
          </div>
          <div className={`con-step-line ${step > 2 ? 'con-step-line--done' : ''}`} />
          <div className="con-step-indicator">
            <div
              className={`con-step-indicator__circle ${
                step === 3 ? 'con-step-indicator__circle--active' : ''
              }`}
            >
              3
            </div>
            <span className="con-step-indicator__label">Your Details</span>
          </div>
        </div>

        {/* ── Form Steps ── */}
        <div className="con-quote-form">
          {/* Step 1 */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="con-step-title">What type of project?</h3>
              <div className="con-radio-cards">
                {projectTypes.map((pt) => (
                  <div
                    key={pt.type}
                    className={`con-radio-card ${
                      projectType === pt.type ? 'con-radio-card--active' : ''
                    }`}
                    onClick={() => setProjectType(pt.type)}
                  >
                    <div className="con-radio-card__icon">{pt.icon}</div>
                    <span className="con-radio-card__label">{pt.type}</span>
                  </div>
                ))}
              </div>
              <div className="con-form-actions">
                <div />
                <motion.button
                  className={`con-btn con-btn--primary ${
                    !canProceedStep1 ? 'con-btn--disabled' : ''
                  }`}
                  onClick={() => canProceedStep1 && setStep(2)}
                  disabled={!canProceedStep1}
                  {...buttonHover}
                >
                  Next Step &rarr;
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="con-step-title">Project Scope</h3>
              <div className="con-form-grid">
                <div className="con-form-group">
                  <label>Project Location</label>
                  <input
                    type="text"
                    placeholder="e.g., Victoria Island, Lagos"
                    value={formData.location}
                    onChange={(e) => updateField('location', e.target.value)}
                  />
                </div>
                <div className="con-form-group">
                  <label>Approximate Size (m&#178;)</label>
                  <input
                    type="text"
                    placeholder="e.g., 5000"
                    value={formData.size}
                    onChange={(e) => updateField('size', e.target.value)}
                  />
                </div>
                <div className="con-form-group">
                  <label>Number of Floors</label>
                  <input
                    type="text"
                    placeholder="e.g., 8"
                    value={formData.floors}
                    onChange={(e) => updateField('floors', e.target.value)}
                  />
                </div>
                <div className="con-form-group">
                  <label>Budget Range</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => updateField('budget', e.target.value)}
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="con-form-group con-form-group--full">
                  <label>Desired Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => updateField('timeline', e.target.value)}
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((tl) => (
                      <option key={tl} value={tl}>
                        {tl}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="con-form-actions">
                <motion.button
                  className="con-btn con-btn--outline"
                  onClick={() => setStep(1)}
                  {...buttonHover}
                >
                  &larr; Back
                </motion.button>
                <motion.button
                  className={`con-btn con-btn--primary ${
                    !canProceedStep2 ? 'con-btn--disabled' : ''
                  }`}
                  onClick={() => canProceedStep2 && setStep(3)}
                  disabled={!canProceedStep2}
                  {...buttonHover}
                >
                  Next Step &rarr;
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="con-step-title">Your Information</h3>
              <div className="con-form-grid">
                <div className="con-form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                  />
                </div>
                <div className="con-form-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    placeholder="Your company (optional)"
                    value={formData.company}
                    onChange={(e) => updateField('company', e.target.value)}
                  />
                </div>
                <div className="con-form-group">
                  <label>Your Role</label>
                  <input
                    type="text"
                    placeholder="e.g., Project Owner, Architect"
                    value={formData.role}
                    onChange={(e) => updateField('role', e.target.value)}
                  />
                </div>
                <div className="con-form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                  />
                </div>
                <div className="con-form-group con-form-group--full">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+234 XXX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                  />
                </div>
              </div>
              <div className="con-form-actions">
                <motion.button
                  className="con-btn con-btn--outline"
                  onClick={() => setStep(2)}
                  {...buttonHover}
                >
                  &larr; Back
                </motion.button>
                <motion.button
                  className={`con-btn con-btn--primary ${
                    !canSubmit ? 'con-btn--disabled' : ''
                  }`}
                  onClick={() => canSubmit && handleSubmit()}
                  disabled={!canSubmit}
                  {...buttonHover}
                >
                  Submit Request
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </AnimatedSection>

      {/* ── What Happens After ── */}
      <AnimatedSection className="con-section con-section--warm">
        <div className="con-section__inner">
          <div className="con-process">
            <hr className="con-accent-bar" />
            <h2 className="con-section-title">What Happens After You Submit</h2>
            <p className="con-section-subtitle">
              Our streamlined process ensures you get a detailed response quickly.
            </p>
            <div className="con-process-steps">
              {processSteps.map((ps) => (
                <div className="con-process-step" key={ps.number}>
                  <div className="con-process-step__number">{ps.number}</div>
                  <h3 className="con-process-step__title">{ps.title}</h3>
                  <p className="con-process-step__desc">{ps.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
