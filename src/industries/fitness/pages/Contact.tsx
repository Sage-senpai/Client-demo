import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';

const subjectOptions = ['General', 'Membership', 'Personal Training', 'Partnerships', 'Complaints'];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    toast.success('Message sent! We will get back to you within 24 hours.');
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="fit-contact-page">
      {/* ── Page Header ── */}
      <section className="fit-page-header">
        <AnimatedSection className="fit-page-header__inner">
          <motion.h1
            className="fit-page-header__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="fit-page-header__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Questions, feedback, or partnership inquiries — we are all ears.
          </motion.p>
        </AnimatedSection>
      </section>

      <AnimatedSection className="fit-contact">
        <div className="fit-contact__grid">
          {/* ── Left: Info Card ── */}
          <div className="fit-contact__info">
            <h3 className="fit-contact__info-title">Get in Touch</h3>
            <div className="fit-contact__info-grid">
              <div className="fit-contact__info-row">
                <span className="fit-contact__info-icon">&#128205;</span>
                <div className="fit-contact__info-text">
                  <strong>Address</strong>
                  42 Admiralty Way, Lekki Phase 1, Lagos, Nigeria
                </div>
              </div>
              <div className="fit-contact__info-row">
                <span className="fit-contact__info-icon">&#128222;</span>
                <div className="fit-contact__info-text">
                  <strong>Phone</strong>
                  +234 (0) 901 234 5678
                </div>
              </div>
              <div className="fit-contact__info-row">
                <span className="fit-contact__info-icon">&#9993;</span>
                <div className="fit-contact__info-text">
                  <strong>Email</strong>
                  hello@pulseathletics.ng
                </div>
              </div>
              <div className="fit-contact__info-row">
                <span className="fit-contact__info-icon">&#128337;</span>
                <div className="fit-contact__info-text">
                  <strong>Hours</strong>
                  Mon &ndash; Sun: 6:00 AM &ndash; 11:00 PM
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="fit-contact__form-wrapper">
            <h3 className="fit-contact__form-title">Send a Message</h3>
            <form className="fit-contact__form" onSubmit={handleSubmit}>
              <div className="fit-contact__form-row">
                <div className="fit-contact__form-field">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="fit-contact__form-field">
                  <label htmlFor="contact-email">Email *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="fit-contact__form-row">
                <div className="fit-contact__form-field">
                  <label htmlFor="contact-phone">Phone</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+234..."
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="fit-contact__form-field">
                  <label htmlFor="contact-subject">Subject</label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a topic</option>
                    {subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="fit-contact__form-field">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <motion.button
                type="submit"
                className="fit-contact__form-btn"
                {...buttonHover}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Map ── */}
      <AnimatedSection className="fit-map">
        <iframe
          title="Pulse Athletics Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=3.42%2C6.42%2C3.46%2C6.46&layer=mapnik&marker=6.4381,3.4415"
          loading="lazy"
          allowFullScreen
        />
      </AnimatedSection>

      {/* ── Social Links ── */}
      <AnimatedSection className="fit-social">
        <div className="fit-social__inner">
          <h3 className="fit-social__heading">Follow Us</h3>
          <div className="fit-social__links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="fit-social__link">
              Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="fit-social__link">
              Twitter / X
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="fit-social__link">
              Facebook
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="fit-social__link">
              YouTube
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="fit-social__link">
              TikTok
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
