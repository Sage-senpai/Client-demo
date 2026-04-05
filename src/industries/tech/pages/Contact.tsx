import { type FormEvent } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Message sent successfully! Our team will get back to you within 24 hours.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="tech-contact-page">
      <div className="tech-contact-page__inner">
        <AnimatedSection className="tech-contact-page__header">
          <p className="section-label">Get in Touch</p>
          <h1 className="tech-contact-page__title">Contact Us</h1>
          <p className="tech-contact-page__subtitle">
            Have a project in mind? Want to explore a partnership? We would love to hear from you.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="tech-contact-page__grid">
            {/* ── Form ── */}
            <form className="tech-contact-form" onSubmit={handleSubmit}>
              <div className="tech-contact-form__row">
                <div className="tech-contact-form__field">
                  <label className="tech-contact-form__label">First Name</label>
                  <input
                    className="tech-contact-form__input"
                    type="text"
                    placeholder="Chukwuemeka"
                    required
                  />
                </div>
                <div className="tech-contact-form__field">
                  <label className="tech-contact-form__label">Last Name</label>
                  <input
                    className="tech-contact-form__input"
                    type="text"
                    placeholder="Obi"
                    required
                  />
                </div>
              </div>

              <div className="tech-contact-form__field">
                <label className="tech-contact-form__label">Email Address</label>
                <input
                  className="tech-contact-form__input"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div className="tech-contact-form__field">
                <label className="tech-contact-form__label">Company</label>
                <input
                  className="tech-contact-form__input"
                  type="text"
                  placeholder="Your company name"
                />
              </div>

              <div className="tech-contact-form__field">
                <label className="tech-contact-form__label">Project Budget</label>
                <input
                  className="tech-contact-form__input"
                  type="text"
                  placeholder="e.g. $20,000 - $50,000"
                />
              </div>

              <div className="tech-contact-form__field">
                <label className="tech-contact-form__label">Tell us about your project</label>
                <textarea
                  className="tech-contact-form__textarea"
                  placeholder="Describe your project, timeline, and any specific requirements..."
                  required
                />
              </div>

              <motion.button
                className="tech-contact-form__submit"
                type="submit"
                {...buttonHover}
              >
                Send Message
              </motion.button>
            </form>

            {/* ── Info ── */}
            <div className="tech-contact-info">
              <div className="tech-contact-info__section">
                <p className="tech-contact-info__label">Email</p>
                <p className="tech-contact-info__text">hello@axiomlabs.ng</p>
              </div>

              <div className="tech-contact-info__section">
                <p className="tech-contact-info__label">Phone</p>
                <p className="tech-contact-info__text">+234 801 234 5678</p>
              </div>

              <div className="tech-contact-info__section">
                <p className="tech-contact-info__label">Office</p>
                <p className="tech-contact-info__text">
                  4th Floor, Civic Towers<br />
                  Ozumba Mbadiwe Avenue<br />
                  Victoria Island, Lagos, Nigeria
                </p>
              </div>

              <div className="tech-contact-info__section">
                <p className="tech-contact-info__label">Working Hours</p>
                <p className="tech-contact-info__text">
                  Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM WAT<br />
                  Saturday &ndash; Sunday: Closed
                </p>
              </div>

              <div className="tech-contact-info__map">
                <iframe
                  title="Axiom Labs Office Location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=3.41%2C6.42%2C3.44%2C6.44&layer=mapnik&marker=6.4281%2C3.4219"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
