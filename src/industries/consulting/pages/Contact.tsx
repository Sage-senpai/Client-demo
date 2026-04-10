import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';

const offices = [
  {
    city: 'New York',
    address: '300 Park Avenue, 17th Floor\nNew York, NY 10022\nUnited States',
    phone: '+1 (212) 555-0180',
  },
  {
    city: 'London',
    address: '1 Finsbury Avenue, 5th Floor\nLondon EC2M 2PF\nUnited Kingdom',
    phone: '+44 20 7946 0958',
  },
  {
    city: 'Singapore',
    address: 'One Raffles Quay, North Tower\n#28-01, Singapore 048583',
    phone: '+65 6808 7200',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
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
    toast.success('Message sent. Our team will respond within 24 hours.', {
      duration: 4000,
      style: { fontFamily: "'Inter', sans-serif" },
    });
    setForm({ name: '', email: '', company: '', inquiryType: '', message: '' });
  };

  return (
    <div className="vx-contact">
      {/* ── Header ── */}
      <div className="vx-page-header">
        <div className="vx-page-header__bg" />
        <AnimatedSection className="vx-page-header__inner">
          <p className="vx-page-header__label">Contact</p>
          <h1 className="vx-page-header__title">
            Get in Touch with Vertex Advisory
          </h1>
          <p className="vx-page-header__subtitle">
            Whether you have a strategic challenge, a partnership inquiry, or a
            media request — our global team is ready to help. We respond within
            24 hours.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Split: Info + Form ── */}
      <AnimatedSection className="vx-contact-split">
        <div className="vx-contact-info">
          <h2>Global Offices</h2>
          <p>
            With offices across six major cities, we operate at the intersection
            of global markets and local expertise. Reach out to the office nearest
            you, or use the form and we will route your inquiry.
          </p>

          {offices.map((office) => (
            <div className="vx-office" key={office.city}>
              <h4 className="vx-office__city">{office.city}</h4>
              <p className="vx-office__address">
                {office.address.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
                {office.phone}
              </p>
            </div>
          ))}
        </div>

        <div className="vx-contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
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
                  <label className="vx-form__label">Email *</label>
                  <input
                    className="vx-form__input"
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="vx-form__row">
                <div className="vx-form__field">
                  <label className="vx-form__label">Company</label>
                  <input
                    className="vx-form__input"
                    type="text"
                    name="company"
                    placeholder="Company name"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="vx-form__field">
                  <label className="vx-form__label">Inquiry Type</label>
                  <select
                    className="vx-form__select"
                    name="inquiryType"
                    value={form.inquiryType}
                    onChange={handleChange}
                  >
                    <option value="">Select type</option>
                    <option value="consulting">Consulting Engagement</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="careers">Careers</option>
                    <option value="media">Media & Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="vx-form__field">
                <label className="vx-form__label">Message *</label>
                <textarea
                  className="vx-form__textarea"
                  name="message"
                  placeholder="Tell us how we can help..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <motion.button
              type="submit"
              className="vx-contact-form__submit"
              {...buttonHover}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </AnimatedSection>

      {/* ── Map ── */}
      <AnimatedSection className="vx-contact-map">
        <iframe
          title="Vertex Advisory — Global Offices"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-74.02%2C40.70%2C-73.95%2C40.78"
          loading="lazy"
        />
      </AnimatedSection>
    </div>
  );
}
