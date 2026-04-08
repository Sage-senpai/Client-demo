import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { faqs } from '../data/fintechData';

const subjectOptions = ['General Inquiry', 'Account Support', 'Business Banking', 'Partnerships', 'Bug Report', 'Feature Request'];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
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

  const toggleFaq = (i: number) => {
    setOpenFaq(openFaq === i ? null : i);
  };

  return (
    <div className="kash-contact-page">
      {/* ── Page Header ── */}
      <section className="kash-page-header">
        <AnimatedSection className="kash-page-header__inner">
          <motion.h1
            className="kash-page-header__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Get in <span className="gradient">Touch</span>
          </motion.h1>
          <motion.p
            className="kash-page-header__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Questions, feedback, or partnership inquiries — our team is here to help.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* ── Contact Grid ── */}
      <AnimatedSection className="kash-contact">
        <div className="kash-contact__grid">
          {/* ── Left: Info ── */}
          <div className="kash-contact__info">
            <h3 className="kash-contact__info-title">Contact Information</h3>
            <div className="kash-contact__info-grid">
              <div className="kash-contact__info-row">
                <span className="kash-contact__info-icon">&#128205;</span>
                <div className="kash-contact__info-text">
                  <strong>Headquarters</strong>
                  14 Adeola Odeku Street, Victoria Island, Lagos, Nigeria
                </div>
              </div>
              <div className="kash-contact__info-row">
                <span className="kash-contact__info-icon">&#128222;</span>
                <div className="kash-contact__info-text">
                  <strong>Phone</strong>
                  +234 (0) 800 KASH 000
                </div>
              </div>
              <div className="kash-contact__info-row">
                <span className="kash-contact__info-icon">&#9993;</span>
                <div className="kash-contact__info-text">
                  <strong>Email</strong>
                  hello@kash.ng
                </div>
              </div>
              <div className="kash-contact__info-row">
                <span className="kash-contact__info-icon">&#128337;</span>
                <div className="kash-contact__info-text">
                  <strong>Support Hours</strong>
                  24/7 &mdash; We never sleep so you can.
                </div>
              </div>
              <div className="kash-contact__info-row">
                <span className="kash-contact__info-icon">&#127758;</span>
                <div className="kash-contact__info-text">
                  <strong>Other Offices</strong>
                  Abuja &middot; Accra &middot; Nairobi &middot; London
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="kash-contact__form-wrapper">
            <h3 className="kash-contact__form-title">Send a Message</h3>
            <form className="kash-form" onSubmit={handleSubmit}>
              <div className="kash-form__row">
                <div className="kash-form__field">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="kash-form__field">
                  <label htmlFor="contact-email">Email *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="kash-form__row">
                <div className="kash-form__field">
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
                <div className="kash-form__field">
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

              <div className="kash-form__field">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="kash-form__submit"
                {...buttonHover}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </AnimatedSection>

      {/* ── FAQ ── */}
      <AnimatedSection className="kash-faq">
        <div className="kash-faq__inner">
          <h2 className="kash-faq__heading">Common Questions</h2>
          <div className="kash-faq__list">
            {faqs.map((faq, i) => (
              <div key={i} className="kash-faq__item">
                <button
                  className="kash-faq__item-header"
                  onClick={() => toggleFaq(i)}
                >
                  <span>{faq.q}</span>
                  <span
                    className={`kash-faq__item-icon ${openFaq === i ? 'kash-faq__item-icon--open' : ''}`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      className="kash-faq__item-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Map ── */}
      <AnimatedSection className="kash-map">
        <div className="kash-map__inner">
          <iframe
            title="Kash Headquarters — Victoria Island, Lagos"
            src="https://www.openstreetmap.org/export/embed.html?bbox=3.40%2C6.42%2C3.44%2C6.46&layer=mapnik&marker=6.4281,3.4215"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </AnimatedSection>
    </div>
  );
}
