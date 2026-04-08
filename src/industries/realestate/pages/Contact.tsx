import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';

const subjectOptions = [
  'General Inquiry',
  'Buying a Property',
  'Selling a Property',
  'Renting',
  'Property Valuation',
  'Investment Advisory',
  'Partnerships',
];

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
    toast.success('Message sent! Our team will get back to you within 24 hours.');
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="re-contact-page">
      {/* ── Page Header ── */}
      <section className="re-page-header">
        <AnimatedSection className="re-page-header__inner">
          <motion.h1
            className="re-page-header__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="re-page-header__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Ready to start your property journey? We are here to help.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* ── Contact Section ── */}
      <section className="re-contact">
        <AnimatedSection className="re-contact__inner">
          <div className="re-contact__grid">
            {/* ── Left: Info Card ── */}
            <div className="re-contact__info">
              <h3 className="re-contact__info-title">Get in Touch</h3>
              <div className="re-contact__info-grid">
                <div className="re-contact__info-row">
                  <span className="re-contact__info-icon">&#128205;</span>
                  <div className="re-contact__info-text">
                    <strong>Head Office</strong>
                    15 Bourdillon Road, Ikoyi, Lagos, Nigeria
                  </div>
                </div>
                <div className="re-contact__info-row">
                  <span className="re-contact__info-icon">&#128222;</span>
                  <div className="re-contact__info-text">
                    <strong>Phone</strong>
                    +234 (0) 812 345 6789
                  </div>
                </div>
                <div className="re-contact__info-row">
                  <span className="re-contact__info-icon">&#9993;</span>
                  <div className="re-contact__info-text">
                    <strong>Email</strong>
                    hello@prestigeproperties.ng
                  </div>
                </div>
                <div className="re-contact__info-row">
                  <span className="re-contact__info-icon">&#128337;</span>
                  <div className="re-contact__info-text">
                    <strong>Office Hours</strong>
                    Mon &ndash; Fri: 8:00 AM &ndash; 6:00 PM
                    <br />
                    Sat: 9:00 AM &ndash; 3:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: Form ── */}
            <div className="re-contact__form-wrapper">
              <h3 className="re-contact__form-title">Send a Message</h3>
              <form className="re-contact__form" onSubmit={handleSubmit}>
                <div className="re-contact__form-row">
                  <div className="re-contact__form-field">
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
                  <div className="re-contact__form-field">
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

                <div className="re-contact__form-row">
                  <div className="re-contact__form-field">
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
                  <div className="re-contact__form-field">
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

                <div className="re-contact__form-field">
                  <label htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us about your property needs..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="re-contact__form-btn"
                  {...buttonHover}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Map ── */}
      <AnimatedSection className="re-map">
        <iframe
          title="Prestige Properties Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=3.42%2C6.42%2C3.46%2C6.46&layer=mapnik&marker=6.4481,3.4315"
          loading="lazy"
          allowFullScreen
        />
      </AnimatedSection>
    </div>
  );
}
