import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    userType: '',
    phone: '',
    message: '',
  });
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success('Message sent! Our team will reach out within 24 hours.');
      setForm({ name: '', email: '', userType: '', phone: '', message: '' });
    }, 1200);
  };

  return (
    <div className="ag-contact">
      <AnimatedSection className="ag-contact__header">
        <span className="ag-section-label">Get In Touch</span>
        <h1 className="ag-section-heading">Contact &amp; Partnerships</h1>
        <p className="ag-section-subtitle">
          Whether you&apos;re a farmer, buyer, investor, or development partner — we&apos;d love to hear from you.
        </p>
      </AnimatedSection>

      <div className="ag-contact__body">
        {/* Form */}
        <form className="ag-contact__form" onSubmit={handleSubmit}>
          <div className="ag-contact__field">
            <label htmlFor="ag-name">Full Name *</label>
            <input
              id="ag-name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="ag-contact__field">
            <label htmlFor="ag-email">Email Address *</label>
            <input
              id="ag-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="ag-contact__field">
            <label htmlFor="ag-type">I am a...</label>
            <select
              id="ag-type"
              name="userType"
              value={form.userType}
              onChange={handleChange}
            >
              <option value="">Select user type...</option>
              <option value="Farmer">Farmer</option>
              <option value="Buyer">Buyer</option>
              <option value="Investor">Investor</option>
              <option value="Partner">Partner</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="ag-contact__field">
            <label htmlFor="ag-phone">Phone Number</label>
            <input
              id="ag-phone"
              name="phone"
              type="tel"
              placeholder="+234 8XX XXX XXXX"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="ag-contact__field">
            <label htmlFor="ag-message">Message *</label>
            <textarea
              id="ag-message"
              name="message"
              placeholder="Tell us about your inquiry or partnership interest..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <motion.button
            type="submit"
            className="ag-contact__submit"
            disabled={sending}
            {...buttonHover}
          >
            {sending ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>

        {/* Info */}
        <div className="ag-contact__info">
          <div className="ag-contact__info-card">
            <h4>Office Address</h4>
            <p>14 Adeola Odeku Street</p>
            <p>Victoria Island, Lagos, Nigeria</p>
          </div>

          <div className="ag-contact__info-card">
            <h4>Phone</h4>
            <p>+234 (0) 812 345 6789</p>
            <p>+234 (0) 901 234 5678</p>
          </div>

          <div className="ag-contact__info-card">
            <h4>Email</h4>
            <p>
              General: <a href="mailto:hello@terrayield.ng">hello@terrayield.ng</a>
            </p>
            <p>
              Partnerships: <a href="mailto:partners@terrayield.ng">partners@terrayield.ng</a>
            </p>
          </div>

          <div className="ag-contact__info-card">
            <h4>Partnership Inquiries</h4>
            <p>
              We partner with development agencies, government bodies, financial institutions,
              and agribusinesses. Reach out to discuss collaboration opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="ag-contact__map">
        <iframe
          title="TerraYield Office Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=3.41%2C6.42%2C3.44%2C6.44&layer=mapnik&marker=6.4305%2C3.4235"
          loading="lazy"
        />
      </div>
    </div>
  );
}
