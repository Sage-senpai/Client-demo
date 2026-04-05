import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { pageTransition } from '../../../styles/_animations';

const emergencyContacts = [
  { icon: '🚨', name: 'Airport Emergency', number: '112' },
  { icon: '🚒', name: 'Fire Service', number: '+234 9 461 0001' },
  { icon: '🚑', name: 'Medical Emergency', number: '+234 9 461 0002' },
  { icon: '👮', name: 'Airport Security', number: '+234 9 461 0003' },
];

const generalInfo = [
  { icon: '📞', title: 'General Enquiries', value: '+234 9 461 0000', isLink: false },
  { icon: '📧', title: 'Email', value: 'info@apogeeairport.ng', isLink: true, href: 'mailto:info@apogeeairport.ng' },
  { icon: '📍', title: 'Address', value: 'Apogee International Airport, Nnamdi Azikiwe Way, Abuja 900211, Nigeria', isLink: false },
  { icon: '🕐', title: 'Operations', value: '24 hours, 7 days a week', isLink: false },
  { icon: '🌐', title: 'Website', value: 'www.apogeeairport.ng', isLink: true, href: 'https://www.apogeeairport.ng' },
  { icon: '💬', title: 'Lost & Found', value: '+234 9 461 0050', isLink: false },
];

const socialLinks = [
  { name: 'Twitter / X', handle: '@ApogeeAirport' },
  { name: 'Instagram', handle: '@apogeeairport' },
  { name: 'Facebook', handle: 'Apogee International Airport' },
  { name: 'LinkedIn', handle: 'Apogee Airport' },
  { name: 'YouTube', handle: 'Apogee Airport Official' },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'General Enquiry',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }
    toast.success('Message sent successfully! We will respond within 24 hours.');
    setForm({ name: '', email: '', subject: 'General Enquiry', message: '' });
  };

  return (
    <motion.div {...pageTransition}>
      <section className="airport-contact">
        <div className="container">
          <AnimatedSection>
            <h1 className="airport-contact__title">Contact &amp; Emergency</h1>
            <p className="airport-contact__subtitle">
              Reach us anytime — we are here to help 24/7
            </p>
          </AnimatedSection>

          {/* Emergency Numbers */}
          <AnimatedSection>
            <div className="airport-contact__emergency">
              <h2 className="airport-contact__section-title">Emergency Numbers</h2>
              <div className="grid-4">
                {emergencyContacts.map((c) => (
                  <div key={c.name} className="emergency-card">
                    <div className="emergency-card__icon">{c.icon}</div>
                    <div className="emergency-card__name">{c.name}</div>
                    <div className="emergency-card__number">{c.number}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* General Contact Info */}
          <AnimatedSection>
            <div className="contact-info-section">
              <h2 className="airport-contact__section-title">General Information</h2>
              <div className="grid-3">
                {generalInfo.map((info) => (
                  <div key={info.title} className="contact-info-card">
                    <div className="contact-info-card__icon">{info.icon}</div>
                    <div className="contact-info-card__title">{info.title}</div>
                    <div className="contact-info-card__value">
                      {info.isLink ? (
                        <a
                          className="contact-info-card__link"
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        info.value
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection>
            <form className="airport-contact-form" onSubmit={handleSubmit}>
              <h3 className="airport-contact-form__title">Send Us a Message</h3>
              <div className="airport-contact-form__grid">
                <div className="airport-contact-form__group">
                  <label className="airport-contact-form__label">Full Name *</label>
                  <input
                    className="airport-contact-form__input"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="airport-contact-form__group">
                  <label className="airport-contact-form__label">Email Address *</label>
                  <input
                    className="airport-contact-form__input"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="airport-contact-form__group airport-contact-form__group--full">
                  <label className="airport-contact-form__label">Subject</label>
                  <select
                    className="airport-contact-form__select"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                  >
                    <option>General Enquiry</option>
                    <option>Flight Information</option>
                    <option>Lost &amp; Found</option>
                    <option>Parking &amp; Transport</option>
                    <option>Lounge Booking</option>
                    <option>Accessibility Services</option>
                    <option>Complaint</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="airport-contact-form__group airport-contact-form__group--full">
                  <label className="airport-contact-form__label">Message *</label>
                  <textarea
                    className="airport-contact-form__textarea"
                    name="message"
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button className="airport-contact-form__submit" type="submit">
                Send Message
              </button>
            </form>
          </AnimatedSection>

          {/* Social Media */}
          <AnimatedSection>
            <div className="airport-social">
              <h3 className="airport-social__title">Follow Us</h3>
              <div className="airport-social__links">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href="#"
                    className="airport-social__link"
                    onClick={(e) => e.preventDefault()}
                  >
                    {s.name}: {s.handle}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
