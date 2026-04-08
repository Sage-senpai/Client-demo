import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    brief: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.brief) {
      toast.error('Please fill in all required fields.');
      return;
    }
    toast.success('Message sent! We will be in touch within 24 hours.', {
      duration: 4000,
      style: { fontFamily: "'Inter', sans-serif" },
    });
    setForm({ name: '', email: '', projectType: '', budget: '', timeline: '', brief: '' });
  };

  return (
    <div className="ag-contact">
      {/* ── Header ── */}
      <div className="ag-page-header">
        <div className="ag-page-header__bg" />
        <AnimatedSection className="ag-page-header__inner">
          <p className="ag-page-header__label">Contact</p>
          <h1 className="ag-page-header__title">
            Let&rsquo;s Build Something Great
          </h1>
          <p className="ag-page-header__subtitle">
            Have a project in mind? We would love to hear about it. Fill out the
            form below or reach out directly — we respond within 24 hours.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Split: Info + Form ── */}
      <AnimatedSection className="ag-contact-split">
        <div className="ag-contact-info">
          <h2>Get in Touch</h2>
          <p>
            Whether you are ready to start a project or just exploring your
            options, we are here to help. No hard sells — just an honest
            conversation about your goals.
          </p>

          <div className="ag-contact-detail">
            <span className="ag-contact-detail__icon">&#128205;</span>
            <div className="ag-contact-detail__text">
              <strong>Office</strong>
              14 Adeola Odeku Street, Victoria Island, Lagos, Nigeria
            </div>
          </div>

          <div className="ag-contact-detail">
            <span className="ag-contact-detail__icon">&#128222;</span>
            <div className="ag-contact-detail__text">
              <strong>Phone</strong>
              +234 (0) 901 234 5678
            </div>
          </div>

          <div className="ag-contact-detail">
            <span className="ag-contact-detail__icon">&#9993;</span>
            <div className="ag-contact-detail__text">
              <strong>Email</strong>
              hello@fluxcreative.ng
            </div>
          </div>

          <div className="ag-contact-detail">
            <span className="ag-contact-detail__icon">&#128337;</span>
            <div className="ag-contact-detail__text">
              <strong>Working Hours</strong>
              Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM<br />
              Saturday: 10:00 AM &ndash; 2:00 PM
            </div>
          </div>
        </div>

        <div className="ag-contact-form">
          <h2>Start a Project</h2>
          <form onSubmit={handleSubmit}>
            <div className="ag-contact-form__grid">
              <div className="ag-contact-form__field">
                <label className="ag-contact-form__label">Full Name *</label>
                <input
                  className="ag-contact-form__input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ag-contact-form__field">
                <label className="ag-contact-form__label">Email *</label>
                <input
                  className="ag-contact-form__input"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ag-contact-form__field">
                <label className="ag-contact-form__label">Project Type</label>
                <select
                  className="ag-contact-form__select"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                >
                  <option value="">Select type</option>
                  <option value="branding">Brand Strategy &amp; Identity</option>
                  <option value="web">Website Design &amp; Development</option>
                  <option value="seo">SEO &amp; Content Marketing</option>
                  <option value="social">Social Media Management</option>
                  <option value="ads">Paid Advertising</option>
                  <option value="email">Email Marketing</option>
                  <option value="full">Full-Service Package</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="ag-contact-form__field">
                <label className="ag-contact-form__label">Budget Range</label>
                <select
                  className="ag-contact-form__select"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget</option>
                  <option value="under-300k">Under &#8358;300k</option>
                  <option value="300k-650k">&#8358;300k &ndash; &#8358;650k</option>
                  <option value="650k-1.2m">&#8358;650k &ndash; &#8358;1.2M</option>
                  <option value="above-1.2m">Above &#8358;1.2M</option>
                </select>
              </div>
              <div className="ag-contact-form__field ag-contact-form__field--full">
                <label className="ag-contact-form__label">Timeline</label>
                <select
                  className="ag-contact-form__select"
                  name="timeline"
                  value={form.timeline}
                  onChange={handleChange}
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-2months">1 &ndash; 2 months</option>
                  <option value="3-4months">3 &ndash; 4 months</option>
                  <option value="6months">6+ months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              <div className="ag-contact-form__field ag-contact-form__field--full">
                <label className="ag-contact-form__label">Project Brief *</label>
                <textarea
                  className="ag-contact-form__textarea"
                  name="brief"
                  placeholder="Tell us about your project, your goals, and what success looks like for you..."
                  value={form.brief}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <motion.button
              type="submit"
              className="ag-contact-form__submit"
              {...buttonHover}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </AnimatedSection>

      {/* ── Map ── */}
      <AnimatedSection className="ag-contact-map">
        <iframe
          title="Flux Creative Office Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=3.4100%2C6.4250%2C3.4400%2C6.4450"
          loading="lazy"
        />
      </AnimatedSection>
    </div>
  );
}
