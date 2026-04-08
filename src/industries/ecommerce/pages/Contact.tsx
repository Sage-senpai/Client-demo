import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please fill out all required fields.');
      return;
    }
    toast.success('Message sent! We will get back to you within 24 hours.');
    setForm({ name: '', email: '', subject: 'General Inquiry', message: '' });
  };

  return (
    <div className="ecom-contact">
      {/* Header */}
      <section className="ecom-contact__header">
        <AnimatedSection className="ecom-contact__header-inner">
          <p className="section-label">Get in Touch</p>
          <motion.h1
            className="ecom-contact__heading"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Contact Nuvora
          </motion.h1>
          <motion.p
            className="ecom-contact__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Questions about orders, sizing, or returns? We are here to help.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* Main Content */}
      <section className="ecom-contact__main">
        <div className="ecom-contact__main-inner">
          {/* Form */}
          <AnimatedSection>
            <form className="ecom-contact__form" onSubmit={handleSubmit}>
              <h2 className="ecom-contact__form-title">Send a Message</h2>

              <div className="ecom-contact__form-group">
                <label className="ecom-contact__form-label">Full Name *</label>
                <input
                  className="ecom-contact__form-input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="ecom-contact__form-group">
                <label className="ecom-contact__form-label">Email Address *</label>
                <input
                  className="ecom-contact__form-input"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="ecom-contact__form-group">
                <label className="ecom-contact__form-label">Subject</label>
                <select
                  className="ecom-contact__form-select"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                >
                  <option>General Inquiry</option>
                  <option>Order Status</option>
                  <option>Returns & Exchanges</option>
                  <option>Sizing Help</option>
                  <option>Wholesale / Partnerships</option>
                </select>
              </div>

              <div className="ecom-contact__form-group">
                <label className="ecom-contact__form-label">Message *</label>
                <textarea
                  className="ecom-contact__form-textarea"
                  name="message"
                  placeholder="How can we help?"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <motion.button
                className="ecom-contact__form-btn"
                type="submit"
                {...buttonHover}
              >
                Send Message
              </motion.button>
            </form>
          </AnimatedSection>

          {/* Info Sidebar */}
          <AnimatedSection className="ecom-contact__info">
            {/* Returns Policy */}
            <div className="ecom-contact__info-section">
              <h3>Returns Policy</h3>
              <div className="ecom-contact__info-item">
                <span>
                  We accept returns within 14 days of delivery for unworn items in
                  original packaging. Handcrafted items may have minor variations — this
                  is part of their unique character, not a defect.
                </span>
              </div>
              <div className="ecom-contact__info-item">
                <span>
                  To initiate a return, email us at returns@nuvora.ng with your order
                  number. Refunds are processed within 5-7 business days.
                </span>
              </div>
            </div>

            {/* Shipping FAQ */}
            <div className="ecom-contact__info-section">
              <h3>Shipping FAQ</h3>

              <div className="ecom-contact__faq-item">
                <h4>How long does delivery take?</h4>
                <p>
                  Lagos: 1-2 business days. Other Nigerian cities: 3-5 business days.
                  International: 7-14 business days depending on destination.
                </p>
              </div>

              <div className="ecom-contact__faq-item">
                <h4>Is shipping free?</h4>
                <p>
                  Free shipping on all orders over &#8358;30,000 within Nigeria.
                  International shipping is calculated at checkout.
                </p>
              </div>

              <div className="ecom-contact__faq-item">
                <h4>Can I track my order?</h4>
                <p>
                  Yes! Once your order ships, you will receive a tracking number via
                  email and SMS. You can also check status by contacting us.
                </p>
              </div>

              <div className="ecom-contact__faq-item">
                <h4>Do you ship internationally?</h4>
                <p>
                  We currently ship to the UK, US, Canada, Ghana, South Africa, and
                  Kenya. More destinations are being added soon.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="ecom-contact__info-section">
              <h3>Visit Us</h3>
              <div className="ecom-contact__info-item">
                <strong>Address</strong>
                <span>24 Awolowo Road, Ikoyi, Lagos</span>
              </div>
              <div className="ecom-contact__info-item">
                <strong>Phone</strong>
                <span>+234 (0) 812 345 6789</span>
              </div>
              <div className="ecom-contact__info-item">
                <strong>Email</strong>
                <span>hello@nuvora.ng</span>
              </div>
              <div className="ecom-contact__info-item">
                <strong>Hours</strong>
                <span>Mon-Sat: 10AM - 7PM WAT</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
