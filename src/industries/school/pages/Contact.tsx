import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will respond within 48 hours.', {
      duration: 5000,
      style: { fontFamily: "'Source Sans 3', sans-serif" },
    });
    setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* ── Page Header ── */}
      <section className="sch-page-header">
        <h1 className="sch-page-header__title">Contact & Enquiry</h1>
        <p className="sch-page-header__subtitle">
          Have a question? Reach out to our admissions team, academic departments, or general enquiry desk
        </p>
      </section>

      {/* ── Contact Layout ── */}
      <AnimatedSection className="sch-contact">
        <div className="sch-contact__layout">
          {/* Left — Info & Map */}
          <div className="sch-contact__info">
            <div>
              <h2 className="sch-contact__info-title">Get in Touch</h2>
              <p className="sch-contact__info-text">
                Whether you are a prospective student, parent, partner organisation, or media
                representative, we are here to help. Our team is available Monday through Friday,
                8 AM to 5 PM WAT.
              </p>
            </div>

            <div className="sch-contact__info-items">
              <div className="sch-contact__info-item">
                <span className="sch-contact__info-icon">{'\uD83D\uDCCD'}</span>
                <div>
                  <div className="sch-contact__info-label">Address</div>
                  <div className="sch-contact__info-value">
                    12 University Drive, Victoria Island, Lagos, Nigeria
                  </div>
                </div>
              </div>

              <div className="sch-contact__info-item">
                <span className="sch-contact__info-icon">{'\uD83D\uDCDE'}</span>
                <div>
                  <div className="sch-contact__info-label">Phone</div>
                  <div className="sch-contact__info-value">+234 (0) 812 345 6789</div>
                </div>
              </div>

              <div className="sch-contact__info-item">
                <span className="sch-contact__info-icon">{'\u2709\uFE0F'}</span>
                <div>
                  <div className="sch-contact__info-label">Email</div>
                  <div className="sch-contact__info-value">admissions@meridian.edu.ng</div>
                </div>
              </div>

              <div className="sch-contact__info-item">
                <span className="sch-contact__info-icon">{'\uD83D\uDD52'}</span>
                <div>
                  <div className="sch-contact__info-label">Office Hours</div>
                  <div className="sch-contact__info-value">Mon — Fri, 8:00 AM — 5:00 PM WAT</div>
                </div>
              </div>
            </div>

            <div className="sch-contact__map">
              <iframe
                className="sch-contact__map-iframe"
                title="Meridian Institute Campus Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=3.40%2C6.42%2C3.44%2C6.46&layer=mapnik&marker=6.44%2C3.42"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right — Form */}
          <div className="sch-contact__form-wrap">
            <h2 className="sch-contact__form-title">Send Us a Message</h2>

            <form className="sch-contact__form" onSubmit={handleSubmit}>
              <div className="sch-contact__form-row">
                <div className="sch-contact__form-group">
                  <label className="sch-contact__label">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="sch-contact__input"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="sch-contact__form-group">
                  <label className="sch-contact__label">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="sch-contact__input"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div className="sch-contact__form-row">
                <div className="sch-contact__form-group">
                  <label className="sch-contact__label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="sch-contact__input"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="sch-contact__form-group">
                  <label className="sch-contact__label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="sch-contact__input"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 800 000 0000"
                  />
                </div>
              </div>

              <div className="sch-contact__form-group">
                <label className="sch-contact__label">Subject</label>
                <select
                  name="subject"
                  className="sch-contact__select"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="admissions">Admissions Enquiry</option>
                  <option value="courses">Programme Information</option>
                  <option value="scholarships">Scholarships & Financial Aid</option>
                  <option value="campus">Campus Visit / Tour</option>
                  <option value="partnerships">Corporate Partnerships</option>
                  <option value="media">Media & Press</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="sch-contact__form-group">
                <label className="sch-contact__label">Message</label>
                <textarea
                  name="message"
                  className="sch-contact__textarea"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>

              <motion.button type="submit" className="sch-contact__submit" {...buttonHover}>
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
