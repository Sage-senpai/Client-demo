import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We will get back to you shortly.', {
      duration: 4000,
      style: {
        fontFamily: "'DM Sans', sans-serif",
      },
    });
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="rest-contact">
      {/* ── Header ── */}
      <div className="rest-page-header">
        <AnimatedSection>
          <p className="rest-page-header__label">Get in Touch</p>
          <h1 className="rest-page-header__title">Contact Us</h1>
          <p className="rest-page-header__subtitle">
            We would love to hear from you. Reach out for reservations, events, or just to say hello.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Split: Info + Form ── */}
      <AnimatedSection className="rest-contact__split">
        <div className="rest-contact__info">
          <h2>Visit Koko &amp; Thyme</h2>
          <p>
            Nestled in the heart of Lekki, Lagos, our restaurant is easy to find and
            always ready to welcome you.
          </p>

          <div className="rest-contact__detail">
            <span className="rest-contact__detail-icon">&#128205;</span>
            <div className="rest-contact__detail-text">
              <strong>Address</strong>
              42 Admiralty Way, Lekki Phase 1, Lagos, Nigeria
            </div>
          </div>

          <div className="rest-contact__detail">
            <span className="rest-contact__detail-icon">&#128222;</span>
            <div className="rest-contact__detail-text">
              <strong>Phone</strong>
              +234 (0) 812 345 6789
            </div>
          </div>

          <div className="rest-contact__detail">
            <span className="rest-contact__detail-icon">&#9993;</span>
            <div className="rest-contact__detail-text">
              <strong>Email</strong>
              hello@kokoandthyme.com
            </div>
          </div>

          <div className="rest-contact__hours">
            <h3>Opening Hours</h3>
            <table className="rest-contact__hours-table">
              <tbody>
                <tr><td>Monday</td><td>Closed</td></tr>
                <tr><td>Tuesday</td><td>12:00 PM – 10:00 PM</td></tr>
                <tr><td>Wednesday</td><td>12:00 PM – 10:00 PM</td></tr>
                <tr><td>Thursday</td><td>12:00 PM – 10:00 PM</td></tr>
                <tr><td>Friday</td><td>12:00 PM – 11:00 PM</td></tr>
                <tr><td>Saturday</td><td>11:00 AM – 11:00 PM</td></tr>
                <tr><td>Sunday</td><td>11:00 AM – 9:00 PM</td></tr>
              </tbody>
            </table>
          </div>

          <a
            href="https://wa.me/2348123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="rest-contact__whatsapp"
          >
            &#128172; Chat on WhatsApp
          </a>
        </div>

        <div className="rest-contact__form-section">
          <h2>Send Us a Message</h2>
          <form className="rest-contact__form" onSubmit={handleSubmit}>
            <div className="rest-contact__field">
              <label className="rest-contact__label">Full Name</label>
              <input
                className="rest-contact__input"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="rest-contact__field">
              <label className="rest-contact__label">Email Address</label>
              <input
                className="rest-contact__input"
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="rest-contact__field">
              <label className="rest-contact__label">Subject</label>
              <input
                className="rest-contact__input"
                type="text"
                placeholder="What is this about?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="rest-contact__field">
              <label className="rest-contact__label">Message</label>
              <textarea
                className="rest-contact__textarea"
                placeholder="Tell us more..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="rest-contact__submit"
              {...buttonHover}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </AnimatedSection>

      {/* ── Map ── */}
      <AnimatedSection className="rest-contact__map">
        <iframe
          title="Koko and Thyme Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=3.3792%2C6.4474%2C3.4195%2C6.4700"
          loading="lazy"
        />
      </AnimatedSection>
    </div>
  );
}
