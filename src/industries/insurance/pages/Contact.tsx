import { useState } from 'react';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';

const contactOffices = [
  {
    city: 'New York (HQ)',
    address: '350 Fifth Avenue, Suite 4200, New York, NY 10118',
    phone: '+1 (212) 555-0180',
  },
  {
    city: 'London',
    address: '30 St Mary Axe, 24th Floor, London EC3A 8BF',
    phone: '+44 20 7946 0958',
  },
  {
    city: 'Dubai',
    address: 'DIFC Gate Village, Building 3, Level 5, Dubai',
    phone: '+971 4 555 8200',
  },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('General Inquiry');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }
    toast.success(
      'Message sent successfully! Our team will respond within 24 hours.',
      { duration: 5000 }
    );
    setName('');
    setEmail('');
    setPhone('');
    setInquiryType('General Inquiry');
    setMessage('');
  };

  return (
    <div className="ins-contact">
      <div className="ins-contact__inner">
        <AnimatedSection>
          <p className="ins-section-label">Get in Touch</p>
          <h1 className="ins-contact__heading">Contact Us</h1>
          <p className="ins-contact__subtitle">
            Have a question or need assistance? Our global team is available
            24/7 to help you.
          </p>

          <div className="ins-contact__grid">
            {/* ── Form ── */}
            <form className="ins-contact__form" onSubmit={handleSubmit}>
              <div className="ins-contact__form-grid">
                <div className="ins-contact__field">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="ins-contact__field">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="ins-contact__field">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="ins-contact__field">
                  <label htmlFor="contact-inquiry">Inquiry Type</label>
                  <select
                    id="contact-inquiry"
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                  >
                    <option>General Inquiry</option>
                    <option>New Policy</option>
                    <option>Claims Support</option>
                    <option>Billing &amp; Payments</option>
                    <option>Policy Changes</option>
                    <option>Complaints</option>
                    <option>Partnership</option>
                  </select>
                </div>

                <div className="ins-contact__field">
                  <label htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    placeholder="How can we help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>

              <button type="submit" className="ins-contact__submit">
                Send Message
              </button>
            </form>

            {/* ── Info Sidebar ── */}
            <div className="ins-contact__info">
              <div className="ins-contact__hotline">
                <p className="ins-contact__hotline-label">
                  24/7 Global Hotline
                </p>
                <p className="ins-contact__hotline-number">
                  +1 (800) 555-AEGIS
                </p>
                <p className="ins-contact__hotline-note">
                  Available in English, Arabic, Mandarin, French, and Spanish
                </p>
              </div>

              <div className="ins-contact__offices">
                {contactOffices.map((office) => (
                  <div className="ins-contact__office-card" key={office.city}>
                    <p className="ins-contact__office-card-city">
                      {office.city}
                    </p>
                    <p className="ins-contact__office-card-address">
                      {office.address}
                    </p>
                    <p className="ins-contact__office-card-phone">
                      {office.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Map ── */}
          <div className="ins-contact__map">
            <iframe
              title="Aegis Cover Headquarters"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0060%2C40.7128%2C-73.9360%2C40.7528&layer=mapnik&marker=40.7484%2C-73.9857"
              loading="lazy"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
