import { useState } from 'react';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    toast.success(
      `Thank you, ${form.name}! Your message has been sent. We will get back to you within 24 hours.`
    );
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="cw-contact">
      {/* ── HERO ── */}
      <section className="cw-contact__hero">
        <div className="cw-container">
          <h1>Get in Touch</h1>
          <p>We would love to hear from you. Drop by, call, or send us a message.</p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <AnimatedSection>
        <div className="cw-container">
          <div className="cw-contact__content">
            {/* ── FORM ── */}
            <div className="cw-contact-form">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="cw-contact-form__field">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                  />
                </div>
                <div className="cw-contact-form__field">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                  />
                </div>
                <div className="cw-contact-form__field">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+234..."
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                  />
                </div>
                <div className="cw-contact-form__field">
                  <label>Subject</label>
                  <select
                    value={form.subject}
                    onChange={(e) => update('subject', e.target.value)}
                  >
                    <option value="">Select a topic...</option>
                    <option value="membership">Membership Enquiry</option>
                    <option value="booking">Booking Question</option>
                    <option value="events">Events &amp; Partnerships</option>
                    <option value="corporate">Corporate Packages</option>
                    <option value="cafe">Café / Catering</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="cw-contact-form__field">
                  <label>Message *</label>
                  <textarea
                    placeholder="Tell us what you need..."
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                  />
                </div>
                <button type="submit" className="cw-contact-form__submit">
                  Send Message →
                </button>
              </form>
            </div>

            {/* ── INFO ── */}
            <div className="cw-contact-info">
              <h3>Visit Us</h3>

              <div className="cw-contact-info__item">
                <div className="cw-contact-info__item-icon">📍</div>
                <div className="cw-contact-info__item-text">
                  <strong>Address</strong>
                  <span>12 Bourdillon Road, Ikoyi, Lagos, Nigeria</span>
                </div>
              </div>

              <div className="cw-contact-info__item">
                <div className="cw-contact-info__item-icon">📞</div>
                <div className="cw-contact-info__item-text">
                  <strong>Phone</strong>
                  <a href="tel:+2348091234567">+234 809 123 4567</a>
                </div>
              </div>

              <div className="cw-contact-info__item">
                <div className="cw-contact-info__item-icon">✉️</div>
                <div className="cw-contact-info__item-text">
                  <strong>Email</strong>
                  <a href="mailto:hello@groveandco.ng">hello@groveandco.ng</a>
                </div>
              </div>

              <div className="cw-contact-info__item">
                <div className="cw-contact-info__item-icon">🕖</div>
                <div className="cw-contact-info__item-text">
                  <strong>Hours</strong>
                  <span>Monday – Sunday, 7:00 AM – 10:00 PM</span>
                </div>
              </div>

              <div className="cw-contact-info__item">
                <div className="cw-contact-info__item-icon">☕</div>
                <div className="cw-contact-info__item-text">
                  <strong>Café Hours</strong>
                  <span>Monday – Sunday, 7:00 AM – 8:00 PM</span>
                </div>
              </div>

              {/* ── MAP ── */}
              <div className="cw-contact-info__map">
                <iframe
                  title="Grove &amp; Co. Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7282!2d3.4251!3d6.4474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjYnNTAuNiJOIDPCsDI1JzMwLjQiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* ── SOCIAL ── */}
              <h3>Follow Us</h3>
              <div className="cw-contact-info__social">
                <a href="#ig" aria-label="Instagram">IG</a>
                <a href="#tw" aria-label="Twitter / X">X</a>
                <a href="#li" aria-label="LinkedIn">in</a>
                <a href="#fb" aria-label="Facebook">fb</a>
                <a href="#tt" aria-label="TikTok">Tk</a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
