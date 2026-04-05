import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';

const steps = [
  {
    title: 'Check Eligibility',
    desc: 'Review programme requirements and ensure you meet the minimum entry criteria for your chosen course of study.',
  },
  {
    title: 'Submit Online Application',
    desc: 'Complete the online application form with your personal details, academic history, and programme preference. Upload all required documents.',
  },
  {
    title: 'Entrance Assessment',
    desc: 'Shortlisted candidates will be invited for a written assessment and/or interview depending on the programme. Remote options available for international applicants.',
  },
  {
    title: 'Offer & Enrolment',
    desc: 'Successful candidates receive an offer letter via email. Accept your offer, pay the acceptance fee, and complete registration before the semester begins.',
  },
];

const eligibility = [
  { programme: 'Degree (Undergraduate)', requirement: '5 O\'Level credits including English & Mathematics; UTME/Institute entrance exam', documents: 'O\'Level results, Birth certificate, Passport photos' },
  { programme: 'Degree (Postgraduate / MBA)', requirement: 'Minimum 2:2 in relevant first degree; 2+ years work experience for MBA', documents: 'First degree transcript, CV, Reference letters (2)' },
  { programme: 'Diploma', requirement: '3 O\'Level credits including English; relevant work experience preferred', documents: 'O\'Level results, CV, Statement of purpose' },
  { programme: 'Certificate', requirement: 'Secondary school certificate or equivalent; basic computer literacy', documents: 'Secondary school certificate, ID document' },
  { programme: 'Short Course', requirement: 'No formal prerequisites; open to professionals and lifelong learners', documents: 'Valid ID, Proof of payment' },
];

const feeSchedule = [
  { item: 'Application Fee', amount: '\u20A615,000', note: 'Non-refundable, per application' },
  { item: 'Acceptance Fee', amount: '\u20A6100,000', note: 'Deducted from first-year tuition' },
  { item: 'Tuition (Degree)', amount: '\u20A61,600,000 \u2013 \u20A63,800,000 / yr', note: 'Varies by programme and department' },
  { item: 'Tuition (Diploma)', amount: '\u20A61,200,000 \u2013 \u20A61,800,000', note: 'Full programme cost' },
  { item: 'Tuition (Certificate)', amount: '\u20A6420,000 \u2013 \u20A6900,000', note: 'Full programme cost' },
  { item: 'Tuition (Short Course)', amount: '\u20A6350,000 \u2013 \u20A6500,000', note: 'Full course cost' },
  { item: 'Hostel Accommodation', amount: '\u20A6450,000 / yr', note: 'Optional; subject to availability' },
  { item: 'Student Activity Fee', amount: '\u20A625,000 / yr', note: 'Covers clubs, events, and sports' },
];

const programmes = [
  'Full-Stack Software Engineering',
  'Data Science & Analytics',
  'MBA \u2014 African Markets Focus',
  'Entrepreneurship & Innovation',
  'Medicine & Surgery (MBBS)',
  'Public Health & Epidemiology',
  'Bachelor of Laws (LLB)',
  'International Trade & Maritime Law',
  'African Literature & Creative Writing',
  'Visual Arts & Digital Media',
  'Civil & Structural Engineering',
  'Renewable Energy Systems',
];

export default function Admissions() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    programme: '',
    entryYear: '',
    email: '',
    phone: '',
  });
  const [fileName, setFileName] = useState('');
  const [statusId, setStatusId] = useState('');
  const [showStatus, setShowStatus] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Application submitted successfully! Check your email for confirmation.', {
      duration: 5000,
      style: { fontFamily: "'Source Sans 3', sans-serif" },
    });
    setFormData({ name: '', dob: '', programme: '', entryYear: '', email: '', phone: '' });
    setFileName('');
  };

  const handleStatusCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (statusId.trim()) {
      setShowStatus(true);
    }
  };

  return (
    <div>
      {/* ── Page Header ── */}
      <section className="sch-page-header">
        <h1 className="sch-page-header__title">Admissions</h1>
        <p className="sch-page-header__subtitle">
          Your journey to excellence starts here. Follow our simple admission process and join the Meridian community.
        </p>
      </section>

      {/* ── Timeline ── */}
      <AnimatedSection className="sch-admissions__timeline">
        <div className="sch-admissions__timeline-inner">
          <h2 className="sch-admissions__timeline-title">Admission Process</h2>
          <div className="sch-admissions__timeline-steps">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="sch-admissions__step"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="sch-admissions__step-number">{i + 1}</div>
                <h3 className="sch-admissions__step-title">{step.title}</h3>
                <p className="sch-admissions__step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Eligibility Requirements ── */}
      <AnimatedSection className="sch-admissions__requirements">
        <div className="sch-admissions__req-inner">
          <h2 className="sch-admissions__req-title">Eligibility Requirements</h2>
          <div className="sch-admissions__table-wrap">
            <table className="sch-admissions__table">
              <thead>
                <tr>
                  <th>Programme</th>
                  <th>Requirements</th>
                  <th>Documents</th>
                </tr>
              </thead>
              <tbody>
                {eligibility.map((row, i) => (
                  <tr key={i}>
                    <td>{row.programme}</td>
                    <td>{row.requirement}</td>
                    <td>{row.documents}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Fee Schedule ── */}
      <AnimatedSection className="sch-admissions__fees">
        <div className="sch-admissions__fees-inner">
          <h2 className="sch-admissions__fees-title">Fee Schedule</h2>
          <div className="sch-admissions__table-wrap">
            <table className="sch-admissions__table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Amount</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                {feeSchedule.map((row, i) => (
                  <tr key={i}>
                    <td>{row.item}</td>
                    <td>{row.amount}</td>
                    <td>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Application Form ── */}
      <AnimatedSection className="sch-admissions__form-section">
        <div className="sch-admissions__form-inner">
          <h2 className="sch-admissions__form-title">Apply Online</h2>
          <p className="sch-admissions__form-subtitle">
            Fill in your details below to begin your application to Meridian Institute
          </p>

          <form className="sch-admissions__form" onSubmit={handleSubmit}>
            <div className="sch-admissions__form-group">
              <label className="sch-admissions__label">Full Name</label>
              <input
                type="text"
                name="name"
                className="sch-admissions__input"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="sch-admissions__form-group">
              <label className="sch-admissions__label">Date of Birth</label>
              <input
                type="date"
                name="dob"
                className="sch-admissions__input"
                value={formData.dob}
                onChange={handleFormChange}
                required
              />
            </div>

            <div className="sch-admissions__form-group">
              <label className="sch-admissions__label">Programme</label>
              <select
                name="programme"
                className="sch-admissions__select"
                value={formData.programme}
                onChange={handleFormChange}
                required
              >
                <option value="">Select a programme</option>
                {programmes.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            <div className="sch-admissions__form-group">
              <label className="sch-admissions__label">Entry Year</label>
              <select
                name="entryYear"
                className="sch-admissions__select"
                value={formData.entryYear}
                onChange={handleFormChange}
                required
              >
                <option value="">Select entry year</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
              </select>
            </div>

            <div className="sch-admissions__form-group">
              <label className="sch-admissions__label">Email Address</label>
              <input
                type="email"
                name="email"
                className="sch-admissions__input"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="sch-admissions__form-group">
              <label className="sch-admissions__label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="sch-admissions__input"
                value={formData.phone}
                onChange={handleFormChange}
                placeholder="+234 800 000 0000"
                required
              />
            </div>

            <div className="sch-admissions__form-group sch-admissions__form-group--full">
              <label className="sch-admissions__label">Supporting Documents</label>
              <label className="sch-admissions__file-upload">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.png"
                  onChange={handleFileChange}
                  hidden
                />
                <p className="sch-admissions__file-text">
                  {fileName ? (
                    <>{fileName}</>
                  ) : (
                    <>
                      <span className="sch-admissions__file-text-accent">Click to upload</span> or drag
                      and drop your documents (PDF, DOC, JPG, PNG)
                    </>
                  )}
                </p>
              </label>
            </div>

            <div className="sch-admissions__submit-wrap">
              <motion.button type="submit" className="sch-admissions__submit" {...buttonHover}>
                Submit Application
              </motion.button>
            </div>
          </form>
        </div>
      </AnimatedSection>

      {/* ── Application Status Check ── */}
      <AnimatedSection className="sch-admissions__status">
        <div className="sch-admissions__status-inner">
          <h2 className="sch-admissions__status-title">Check Application Status</h2>
          <p className="sch-admissions__status-subtitle">
            Enter your Application ID to view your current admission status
          </p>
          <form className="sch-admissions__status-form" onSubmit={handleStatusCheck}>
            <input
              type="text"
              className="sch-admissions__status-input"
              placeholder="e.g. MER-2025-00472"
              value={statusId}
              onChange={(e) => { setStatusId(e.target.value); setShowStatus(false); }}
            />
            <motion.button type="submit" className="sch-admissions__status-btn" {...buttonHover}>
              Check Status
            </motion.button>
          </form>

          {showStatus && (
            <motion.div
              className="sch-admissions__status-card"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4 }}
            >
              <div className="sch-admissions__status-row">
                <span className="sch-admissions__status-label">Application ID</span>
                <span className="sch-admissions__status-value">{statusId || 'MER-2025-00472'}</span>
              </div>
              <div className="sch-admissions__status-row">
                <span className="sch-admissions__status-label">Applicant</span>
                <span className="sch-admissions__status-value">Demo Applicant</span>
              </div>
              <div className="sch-admissions__status-row">
                <span className="sch-admissions__status-label">Programme</span>
                <span className="sch-admissions__status-value">MBA — African Markets Focus</span>
              </div>
              <div className="sch-admissions__status-row">
                <span className="sch-admissions__status-label">Entry Year</span>
                <span className="sch-admissions__status-value">2025</span>
              </div>
              <div className="sch-admissions__status-row">
                <span className="sch-admissions__status-label">Status</span>
                <span className="sch-admissions__status-badge sch-admissions__status-badge--review">
                  Under Review
                </span>
              </div>
              <div className="sch-admissions__status-row">
                <span className="sch-admissions__status-label">Last Updated</span>
                <span className="sch-admissions__status-value">March 28, 2025</span>
              </div>
            </motion.div>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
}
