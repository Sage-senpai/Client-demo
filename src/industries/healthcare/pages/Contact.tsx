import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';

const subjectOptions = [
  'General Enquiry',
  'Appointment Issue',
  'Billing',
  'Insurance',
  'Complaints',
  'Partnerships',
];

const hoursData = [
  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: '10:00 AM - 2:00 PM' },
  { day: 'Public Holidays', hours: '10:00 AM - 2:00 PM' },
  { day: 'Emergency / A&E', hours: '24 Hours / 7 Days' },
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
    toast.success('Message sent! Our team will respond within 24 hours.');
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="med-contact-page">
      {/* ── Page Header ── */}
      <section className="med-page-header">
        <AnimatedSection className="med-page-header__inner">
          <motion.h1
            className="med-page-header__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="med-page-header__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Reach out for appointments, enquiries, or emergencies. We are here for you.
          </motion.p>
        </AnimatedSection>
      </section>

      <AnimatedSection className="med-contact">
        {/* ── Emergency Numbers ── */}
        <div className="med-contact__emergency">
          <h3>Emergency? Call Immediately</h3>
          <p>Our emergency department is open 24/7 with rapid-response teams on standby.</p>
          <a href="tel:+2349001234567">+234 (0) 900 123 4567</a>
          <br />
          <a href="tel:+2349009876543">+234 (0) 900 987 6543</a>
        </div>

        {/* ── Contact Grid ── */}
        <div className="med-contact__grid">
          {/* ── Left: Info Card ── */}
          <div className="med-contact__info">
            <h3 className="med-contact__info-title">Get in Touch</h3>
            <div className="med-contact__info-grid">
              <div className="med-contact__info-row">
                <span className="med-contact__info-icon">&#128205;</span>
                <div className="med-contact__info-text">
                  <strong>Address</strong>
                  15 Medical Center Drive, Victoria Island, Lagos, Nigeria
                </div>
              </div>
              <div className="med-contact__info-row">
                <span className="med-contact__info-icon">&#128222;</span>
                <div className="med-contact__info-text">
                  <strong>Phone</strong>
                  +234 (0) 900 123 4567
                </div>
              </div>
              <div className="med-contact__info-row">
                <span className="med-contact__info-icon">&#9993;</span>
                <div className="med-contact__info-text">
                  <strong>Email</strong>
                  care@solacemedical.ng
                </div>
              </div>
              <div className="med-contact__info-row">
                <span className="med-contact__info-icon">&#128337;</span>
                <div className="med-contact__info-text">
                  <strong>Emergency</strong>
                  24 Hours, 7 Days a Week
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="med-contact__form-wrapper">
            <h3 className="med-contact__form-title">Send a Message</h3>
            <form className="med-contact__form" onSubmit={handleSubmit}>
              <div className="med-contact__form-row">
                <div className="med-contact__form-field">
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
                <div className="med-contact__form-field">
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

              <div className="med-contact__form-row">
                <div className="med-contact__form-field">
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
                <div className="med-contact__form-field">
                  <label htmlFor="contact-subject">Subject</label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a topic</option>
                    {subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="med-contact__form-field">
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
                className="med-contact__form-btn"
                {...buttonHover}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>

        {/* ── Hours Table ── */}
        <div className="med-contact__hours">
          <h3 className="med-contact__hours-title">Opening Hours</h3>
          <table className="med-contact__hours-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Hours</th>
              </tr>
            </thead>
            <tbody>
              {hoursData.map((row, i) => (
                <tr key={i}>
                  <td>{row.day}</td>
                  <td>{row.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedSection>

      {/* ── Map ── */}
      <AnimatedSection className="med-map">
        <iframe
          title="Solace Medical Centre Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=3.40%2C6.42%2C3.44%2C6.46&layer=mapnik&marker=6.4281,3.4215"
          loading="lazy"
          allowFullScreen
        />
      </AnimatedSection>
    </div>
  );
}
