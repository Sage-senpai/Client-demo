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
    subject: 'General Inquiry',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We will get back to you within a few hours.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: 'General Inquiry',
      message: '',
    });
  };

  return (
    <div className="del-page-enter">
      <div className="del-contact">
        <AnimatedSection>
          <h1 className="del-contact__title">Contact Us</h1>
          <div className="del-section-divider" />
          <p className="del-contact__subtitle">
            Got questions, feedback, or need help? Our support team is ready to assist you.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="del-contact__grid">
            {/* ── CONTACT INFO ── */}
            <div className="del-contact-info">
              <div className="del-contact-info__card">
                <h3 className="del-contact-info__heading">Get in Touch</h3>

                <div className="del-contact-info__item">
                  <div className="del-contact-info__icon">📍</div>
                  <div>
                    <div className="del-contact-info__label">Office</div>
                    <div className="del-contact-info__value">
                      14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria
                    </div>
                  </div>
                </div>

                <div className="del-contact-info__item">
                  <div className="del-contact-info__icon">📞</div>
                  <div>
                    <div className="del-contact-info__label">Phone</div>
                    <div className="del-contact-info__value">+234 (0) 800 ZINGA 00</div>
                  </div>
                </div>

                <div className="del-contact-info__item">
                  <div className="del-contact-info__icon">✉️</div>
                  <div>
                    <div className="del-contact-info__label">Email</div>
                    <div className="del-contact-info__value">hello@zingadelivery.com</div>
                  </div>
                </div>

                <div className="del-contact-info__item">
                  <div className="del-contact-info__icon">💬</div>
                  <div>
                    <div className="del-contact-info__label">Live Chat</div>
                    <div className="del-contact-info__value">Available in-app and on web</div>
                  </div>
                </div>

                <div className="del-contact-info__hours">
                  <h4 className="del-contact-info__hours-title">Support Hours</h4>
                  <div className="del-contact-info__hours-row">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 10:00 PM</span>
                  </div>
                  <div className="del-contact-info__hours-row">
                    <span>Saturday</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="del-contact-info__hours-row">
                    <span>Sunday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="del-contact-info__hours-row">
                    <span>Public Holidays</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── CONTACT FORM ── */}
            <form className="del-contact-form" onSubmit={handleSubmit}>
              <h3 className="del-contact-form__heading">Send a Message</h3>

              <div className="del-contact-form__row">
                <div className="del-contact-form__field">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Chidi"
                    required
                  />
                </div>
                <div className="del-contact-form__field">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Okonkwo"
                    required
                  />
                </div>
              </div>

              <div className="del-contact-form__row">
                <div className="del-contact-form__field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="chidi@example.com"
                    required
                  />
                </div>
                <div className="del-contact-form__field">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 800 000 0000"
                  />
                </div>
              </div>

              <div className="del-contact-form__field">
                <label>Subject</label>
                <select name="subject" value={formData.subject} onChange={handleChange}>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Delivery Issue">Delivery Issue</option>
                  <option value="Business Partnership">Business Partnership</option>
                  <option value="API Integration">API Integration</option>
                  <option value="Billing Question">Billing Question</option>
                  <option value="Feedback">Feedback</option>
                </select>
              </div>

              <div className="del-contact-form__field">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you today?"
                  required
                />
              </div>

              <motion.button type="submit" className="del-contact-form__submit" {...buttonHover}>
                Send Message
              </motion.button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
