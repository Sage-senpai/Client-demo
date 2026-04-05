import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';

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
    toast.success('Message sent successfully! We will get back to you within 24 hours.');
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="beauty-contact-page">
      <AnimatedSection className="beauty-contact-page__inner">
        <div className="beauty-contact-page__header">
          <p className="section-label">Get in Touch</p>
          <h1 className="beauty-contact-page__title">Contact Us</h1>
          <p className="beauty-contact-page__subtitle">
            Have a question, feedback, or partnership inquiry? We would love to hear from you.
          </p>
        </div>

        <div className="beauty-contact-page__grid">
          {/* Left Column — Info & Hours */}
          <div>
            <div className="beauty-contact-info__card">
              <h3 className="beauty-contact-info__card-title">Visit Us</h3>
              <div className="beauty-contact-info__row">
                <span className="beauty-contact-info__icon">📍</span>
                <div className="beauty-contact-info__text">
                  <strong>Address</strong>
                  12 Aminu Kano Crescent, Wuse II, Abuja, Nigeria
                </div>
              </div>
              <div className="beauty-contact-info__row">
                <span className="beauty-contact-info__icon">📞</span>
                <div className="beauty-contact-info__text">
                  <strong>Phone</strong>
                  +234 809 123 4567
                </div>
              </div>
              <div className="beauty-contact-info__row">
                <span className="beauty-contact-info__icon">✉</span>
                <div className="beauty-contact-info__text">
                  <strong>Email</strong>
                  hello@radiancestudio.ng
                </div>
              </div>
              <div className="beauty-contact-info__row">
                <span className="beauty-contact-info__icon">📱</span>
                <div className="beauty-contact-info__text">
                  <strong>WhatsApp</strong>
                  +234 809 123 4567
                </div>
              </div>
            </div>

            <div className="beauty-contact-hours__card">
              <h3 className="beauty-contact-hours__card-title">Opening Hours</h3>
              <div className="beauty-contact-hours__row">
                <span>Monday</span>
                <span>9:00 AM — 7:00 PM</span>
              </div>
              <div className="beauty-contact-hours__row">
                <span>Tuesday</span>
                <span>9:00 AM — 7:00 PM</span>
              </div>
              <div className="beauty-contact-hours__row">
                <span>Wednesday</span>
                <span>9:00 AM — 7:00 PM</span>
              </div>
              <div className="beauty-contact-hours__row">
                <span>Thursday</span>
                <span>9:00 AM — 8:00 PM</span>
              </div>
              <div className="beauty-contact-hours__row">
                <span>Friday</span>
                <span>9:00 AM — 8:00 PM</span>
              </div>
              <div className="beauty-contact-hours__row">
                <span>Saturday</span>
                <span>8:00 AM — 8:00 PM</span>
              </div>
              <div className="beauty-contact-hours__row">
                <span>Sunday</span>
                <span>10:00 AM — 5:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column — Contact Form */}
          <div className="beauty-contact-form">
            <h3 className="beauty-contact-form__title">Send a Message</h3>
            <form className="beauty-contact-form__fields" onSubmit={handleSubmit}>
              <div className="beauty-contact-form__row">
                <div className="beauty-contact-form__field">
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
                <div className="beauty-contact-form__field">
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

              <div className="beauty-contact-form__row">
                <div className="beauty-contact-form__field">
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
                <div className="beauty-contact-form__field">
                  <label htmlFor="contact-subject">Subject</label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Enquiry</option>
                    <option value="booking">Booking Question</option>
                    <option value="partnership">Partnership / Collaboration</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                  </select>
                </div>
              </div>

              <div className="beauty-contact-form__field">
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
                className="beauty-contact-form__btn"
                {...buttonHover}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>

        {/* ── Map ── */}
        <div className="beauty-map">
          <iframe
            title="Radiance Studio Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=7.47%2C9.06%2C7.50%2C9.08&layer=mapnik&marker=9.0718%2C7.4851"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </AnimatedSection>
    </div>
  );
}
