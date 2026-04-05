import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';

const offices = [
  {
    name: 'Lagos Head Office',
    address: '14 Adeola Odeku Street, Victoria Island, Lagos',
    phone: '+234 (0) 812 345 6789',
    email: 'lagos@bastiongroup.ng',
    hours: 'Mon - Fri: 8:00 AM - 6:00 PM',
  },
  {
    name: 'Abuja Regional Office',
    address: 'Plot 723, Cadastral Zone A6, Central Business District, Abuja',
    phone: '+234 (0) 809 876 5432',
    email: 'abuja@bastiongroup.ng',
    hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
  },
  {
    name: 'Port Harcourt Site Office',
    address: '25 Aba Road, GRA Phase 2, Port Harcourt, Rivers State',
    phone: '+234 (0) 803 456 7890',
    email: 'ph@bastiongroup.ng',
    hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    toast.success('Message sent! We will respond within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="con-contact-page">
      {/* ── Page Header ── */}
      <div className="con-page-header">
        <h1 className="con-page-header__title">Contact Us</h1>
        <p className="con-page-header__subtitle">
          Reach out to discuss your project or visit any of our offices across Nigeria.
        </p>
      </div>

      <AnimatedSection className="con-section">
        <div className="con-contact-grid">
          {/* ── Form ── */}
          <form className="con-contact-form" onSubmit={handleSubmit}>
            <hr className="con-accent-bar" />
            <h2 className="con-section-title">Send a Message</h2>
            <div className="con-form-group">
              <label>Full Name *</label>
              <input
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
              />
            </div>
            <div className="con-form-group">
              <label>Email Address *</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
              />
            </div>
            <div className="con-form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="+234 XXX XXX XXXX"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
              />
            </div>
            <div className="con-form-group">
              <label>Subject</label>
              <input
                type="text"
                placeholder="What is this regarding?"
                value={formData.subject}
                onChange={(e) => updateField('subject', e.target.value)}
              />
            </div>
            <div className="con-form-group">
              <label>Message *</label>
              <textarea
                placeholder="Tell us about your project or enquiry..."
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
              />
            </div>
            <motion.button
              type="submit"
              className="con-contact-form__submit"
              {...buttonHover}
            >
              Send Message &rarr;
            </motion.button>
          </form>

          {/* ── Office Info ── */}
          <div className="con-contact-info">
            <hr className="con-accent-bar" />
            <h2 className="con-section-title">Our Offices</h2>
            {offices.map((office) => (
              <div className="con-office-card" key={office.name}>
                <h3 className="con-office-card__name">{office.name}</h3>
                <div className="con-office-card__detail">
                  <span>📍</span>
                  <span>{office.address}</span>
                </div>
                <div className="con-office-card__detail">
                  <span>📞</span>
                  <span>{office.phone}</span>
                </div>
                <div className="con-office-card__detail">
                  <span>✉️</span>
                  <span>{office.email}</span>
                </div>
                <div className="con-office-card__detail">
                  <span>🕐</span>
                  <span>{office.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Map ── */}
      <AnimatedSection className="con-section">
        <hr className="con-accent-bar" />
        <h2 className="con-section-title">Find Us</h2>
        <p className="con-section-subtitle">
          Our Lagos head office on Victoria Island — the heart of Nigeria's commercial
          district.
        </p>
        <div className="con-map">
          <iframe
            title="Bastion Group Lagos Office"
            src="https://www.openstreetmap.org/export/embed.html?bbox=3.41,6.42,3.44,6.44&layer=mapnik&marker=6.4281,3.4219"
            loading="lazy"
          />
        </div>
      </AnimatedSection>
    </div>
  );
}
