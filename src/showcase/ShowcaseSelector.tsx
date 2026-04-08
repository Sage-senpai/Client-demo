import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import industries from './industryData';
import './ShowcaseSelector.scss';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

export default function ShowcaseSelector() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    industry: '',
    budget: '',
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

    const subject = encodeURIComponent(
      `Client Inquiry: ${form.industry || 'General'} — ${form.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nIndustry: ${form.industry || 'Not specified'}\nBudget Range: ${form.budget || 'Not specified'}\n\nMessage:\n${form.message}`,
    );
    window.open(
      `mailto:anyadikedivine0@gmail.com?subject=${subject}&body=${body}`,
      '_self',
    );
    setSending(false);
    toast.success("Opening your email client — I'll get back to you within 24 hours.");
    setForm({ name: '', email: '', industry: '', budget: '', message: '' });
  };

  return (
    <div className="showcase">
      {/* ── Hero / Bio Section ── */}
      <motion.section
        className="showcase__bio"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="showcase__bio-avatar">AD</div>
        <span className="showcase__bio-greeting">Hello, I&apos;m</span>
        <h1 className="showcase__bio-name">Anyadike Divine</h1>
        <p className="showcase__bio-role">
          Full Stack Engineer &middot; Smart Contract Developer &middot; Technical Architect
        </p>
        <p className="showcase__bio-text">
          I design and build production-grade web applications for businesses across every industry.
          From restaurant booking systems to SaaS dashboards, fintech platforms to e-commerce stores
          — I ship fast, scalable, pixel-perfect products that drive real results.
          <strong> 30+ projects shipped. Global clients served.</strong>
        </p>
        <div className="showcase__bio-stats">
          <div className="showcase__bio-stat">
            <span className="showcase__bio-stat-num">30+</span>
            <span className="showcase__bio-stat-label">Projects Shipped</span>
          </div>
          <div className="showcase__bio-stat">
            <span className="showcase__bio-stat-num">17</span>
            <span className="showcase__bio-stat-label">Industries Covered</span>
          </div>
          <div className="showcase__bio-stat">
            <span className="showcase__bio-stat-num">4+</span>
            <span className="showcase__bio-stat-label">Years Experience</span>
          </div>
          <div className="showcase__bio-stat">
            <span className="showcase__bio-stat-num">100%</span>
            <span className="showcase__bio-stat-label">Client Satisfaction</span>
          </div>
        </div>
        <div className="showcase__bio-links">
          <a
            href="https://github.com/Sage-senpai"
            target="_blank"
            rel="noopener noreferrer"
            className="showcase__bio-link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/divineanyadike"
            target="_blank"
            rel="noopener noreferrer"
            className="showcase__bio-link"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/sage_senpeak"
            target="_blank"
            rel="noopener noreferrer"
            className="showcase__bio-link"
          >
            X / Twitter
          </a>
          <a href="#contact" className="showcase__bio-link showcase__bio-link--cta">
            Hire Me
          </a>
        </div>
      </motion.section>

      {/* ── Section Header ── */}
      <motion.header
        className="showcase__header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="showcase__label">WEBSITE DEMO SHOWCASE</span>
        <h2 className="showcase__title">Which industry are we building for?</h2>
        <p className="showcase__subtitle">
          Seventeen fully-built, multi-page demo websites — each with unique design, features, and
          brand identity. Click any card to explore the live demo.
        </p>
      </motion.header>

      {/* ── Industry Cards Grid ── */}
      <motion.div
        className="showcase__grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {industries.map((ind) => (
          <motion.div
            key={ind.id}
            className="showcase-card"
            variants={cardVariants}
            style={{ '--card-accent': ind.accent } as React.CSSProperties}
            onClick={() => navigate(ind.route)}
          >
            <div className="showcase-card__image">
              <img src={ind.image} alt={ind.name} loading="lazy" />
              <div className="showcase-card__overlay" />
            </div>
            <div className="showcase-card__body">
              <div className="showcase-card__name-row">
                <span className="showcase-card__dot" />
                <span className="showcase-card__name">{ind.name}</span>
              </div>
              <span className="showcase-card__brand">{ind.brand}</span>
              <p className="showcase-card__desc">{ind.description}</p>
              <span className="showcase-card__link">Open demo site &rarr;</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Value Proposition ── */}
      <motion.section
        className="showcase__value"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="showcase__value-title">Why Work With Me?</h2>
        <div className="showcase__value-grid">
          <div className="showcase__value-card">
            <span className="showcase__value-icon">&#9889;</span>
            <h3>Fast Delivery</h3>
            <p>From concept to deployed product in weeks, not months. Agile process with daily updates.</p>
          </div>
          <div className="showcase__value-card">
            <span className="showcase__value-icon">&#127912;</span>
            <h3>Pixel-Perfect Design</h3>
            <p>Every pixel intentional. Modern UI/UX that converts visitors into customers.</p>
          </div>
          <div className="showcase__value-card">
            <span className="showcase__value-icon">&#128640;</span>
            <h3>Scalable Architecture</h3>
            <p>Clean code, performance-first. Your product grows seamlessly from day one.</p>
          </div>
          <div className="showcase__value-card">
            <span className="showcase__value-icon">&#127758;</span>
            <h3>Global Standards</h3>
            <p>Built for the world stage. Responsive, accessible, and optimized for every device.</p>
          </div>
        </div>
      </motion.section>

      {/* ── Contact Form ── */}
      <motion.section
        id="contact"
        className="showcase__contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="showcase__contact-info">
          <h2 className="showcase__contact-title">
            Let&apos;s Build Something <span>Amazing</span>
          </h2>
          <p className="showcase__contact-text">
            Seen something you like? Want a custom build for your industry? Tell me about your
            project and I&apos;ll get back to you within 24 hours with a roadmap and quote.
          </p>
          <div className="showcase__contact-details">
            <div className="showcase__contact-detail">
              <span className="showcase__contact-detail-label">Email</span>
              <span>anyadikedivine0@gmail.com</span>
            </div>
            <div className="showcase__contact-detail">
              <span className="showcase__contact-detail-label">Based in</span>
              <span>Nigeria &middot; Available globally</span>
            </div>
            <div className="showcase__contact-detail">
              <span className="showcase__contact-detail-label">Response time</span>
              <span>Within 24 hours</span>
            </div>
          </div>
        </div>

        <form className="showcase__contact-form" onSubmit={handleSubmit}>
          <div className="showcase__contact-row">
            <div className="showcase__contact-field">
              <label htmlFor="c-name">Full Name *</label>
              <input
                id="c-name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="showcase__contact-field">
              <label htmlFor="c-email">Email *</label>
              <input
                id="c-email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="showcase__contact-row">
            <div className="showcase__contact-field">
              <label htmlFor="c-industry">Industry / Niche</label>
              <select id="c-industry" name="industry" value={form.industry} onChange={handleChange}>
                <option value="">Select an industry...</option>
                <option value="Real Estate">Real Estate</option>
                <option value="E-commerce">E-commerce / Retail</option>
                <option value="Healthcare">Healthcare / Clinic</option>
                <option value="Fintech">Fintech / Finance</option>
                <option value="Marketing Agency">Marketing Agency</option>
                <option value="Logistics">Logistics / Delivery</option>
                <option value="Education">Education / EdTech</option>
                <option value="Hospitality">Hospitality / Hotels</option>
                <option value="Recruitment">Recruitment / HR</option>
                <option value="Legal">Legal Firm</option>
                <option value="Fitness">Fitness / Gym</option>
                <option value="Restaurant">Restaurant / Food</option>
                <option value="Construction">Construction / Engineering</option>
                <option value="SaaS">SaaS / Tech Product</option>
                <option value="Beauty">Beauty / Wellness</option>
                <option value="Nonprofit">Nonprofit / NGO</option>
                <option value="Automotive">Automotive</option>
                <option value="Events">Events / Entertainment</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="showcase__contact-field">
              <label htmlFor="c-budget">Budget Range</label>
              <select id="c-budget" name="budget" value={form.budget} onChange={handleChange}>
                <option value="">Select budget range...</option>
                <option value="$500-$2k">$500 – $2,000</option>
                <option value="$2k-$5k">$2,000 – $5,000</option>
                <option value="$5k-$10k">$5,000 – $10,000</option>
                <option value="$10k-$25k">$10,000 – $25,000</option>
                <option value="$25k+">$25,000+</option>
                <option value="Discuss">Let's discuss</option>
              </select>
            </div>
          </div>

          <div className="showcase__contact-field">
            <label htmlFor="c-message">Project Details *</label>
            <textarea
              id="c-message"
              name="message"
              rows={5}
              placeholder="Tell me about your project — what you need built, your goals, timeline, and any demos above that inspired you..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="showcase__contact-submit" disabled={sending}>
            {sending ? 'Sending...' : 'Send Inquiry'}
          </button>
        </form>
      </motion.section>

      {/* ── Footer ── */}
      <footer className="showcase__footer">
        <p>
          &copy; 2025 Anyadike Divine &middot; Full Stack Engineer &middot;{' '}
          <a
            href="https://github.com/Sage-senpai"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{' '}
          &middot;{' '}
          <a
            href="https://linkedin.com/in/divineanyadike"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
}
