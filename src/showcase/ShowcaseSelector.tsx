import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import industries from './industryData';
import './ShowcaseSelector.scss';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
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
    window.open(`mailto:anyadikedivine0@gmail.com?subject=${subject}&body=${body}`, '_self');
    setSending(false);
    toast.success("Opening your email client — I'll get back to you within 24 hours.");
    setForm({ name: '', email: '', industry: '', budget: '', message: '' });
  };

  return (
    <div className="showcase">
      {/* ══════ HERO: Bio Left + Cards Right ══════ */}
      <div className="showcase__hero">
        {/* ── Left: Bio Sidebar ── */}
        <motion.aside
          className="showcase__sidebar"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="showcase__sidebar-inner">
            <span className="showcase__sidebar-label">Built by</span>
            <h1 className="showcase__sidebar-name">Anyadike Divine</h1>
            <p className="showcase__sidebar-role">Full Stack Engineer</p>

            <p className="showcase__sidebar-bio">
              I turn business problems into production-grade software. Every demo here is a real,
              functional website — designed, coded, and deployed from scratch.
            </p>

            <div className="showcase__sidebar-stats">
              <div className="showcase__sidebar-stat">
                <span className="showcase__sidebar-stat-val">30+</span>
                <span className="showcase__sidebar-stat-key">Projects</span>
              </div>
              <div className="showcase__sidebar-stat">
                <span className="showcase__sidebar-stat-val">19</span>
                <span className="showcase__sidebar-stat-key">Industries</span>
              </div>
              <div className="showcase__sidebar-stat">
                <span className="showcase__sidebar-stat-val">4+</span>
                <span className="showcase__sidebar-stat-key">Years</span>
              </div>
            </div>

            <div className="showcase__sidebar-ctas">
              <a
                href="https://portfolio-dvyne.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="showcase__sidebar-btn"
              >
                Full Portfolio &rarr;
              </a>
              <a href="#contact" className="showcase__sidebar-btn showcase__sidebar-btn--fill">
                Start a Project
              </a>
            </div>

            <div className="showcase__sidebar-links">
              <a href="https://github.com/Sage-senpai" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/divineanyadike" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://x.com/sage_senpeak" target="_blank" rel="noopener noreferrer">
                X
              </a>
            </div>
          </div>
        </motion.aside>

        {/* ── Right: Industry Grid ── */}
        <div className="showcase__main">
          <motion.div
            className="showcase__main-header"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className="showcase__main-label">DEMO SHOWCASE</span>
            <h2 className="showcase__main-title">Pick an industry. Explore the build.</h2>
          </motion.div>

          <motion.div
            className="showcase__cards"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {industries.map((ind) => (
              <motion.div
                key={ind.id}
                className="sc"
                variants={cardVariants}
                style={{ '--card-accent': ind.accent } as React.CSSProperties}
                onClick={() => navigate(ind.route)}
              >
                <div className="sc__img">
                  <img src={ind.image} alt={ind.name} loading="lazy" />
                  <div className="sc__img-overlay" />
                </div>
                <div className="sc__body">
                  <div className="sc__row">
                    <span className="sc__dot" />
                    <span className="sc__name">{ind.name}</span>
                  </div>
                  <span className="sc__brand">{ind.brand}</span>
                  <p className="sc__desc">{ind.description}</p>
                  <span className="sc__go">Open demo &rarr;</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ══════ VALUE PROPS ══════ */}
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
            <p>
              From concept to deployed product in weeks, not months. Agile process with daily
              updates.
            </p>
          </div>
          <div className="showcase__value-card">
            <span className="showcase__value-icon">&#127912;</span>
            <h3>Pixel-Perfect Design</h3>
            <p>
              Every pixel intentional. Modern UI/UX that converts visitors into customers.
            </p>
          </div>
          <div className="showcase__value-card">
            <span className="showcase__value-icon">&#128640;</span>
            <h3>Scalable Architecture</h3>
            <p>
              Clean code, performance-first. Your product grows seamlessly from day one.
            </p>
          </div>
          <div className="showcase__value-card">
            <span className="showcase__value-icon">&#127758;</span>
            <h3>Global Standards</h3>
            <p>
              Built for the world stage. Responsive, accessible, and optimized for every device.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ══════ CONTACT ══════ */}
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
              <input id="c-name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="showcase__contact-field">
              <label htmlFor="c-email">Email *</label>
              <input id="c-email" name="email" type="email" placeholder="you@company.com" value={form.email} onChange={handleChange} required />
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
                <option value="Discuss">Let&apos;s discuss</option>
              </select>
            </div>
          </div>
          <div className="showcase__contact-field">
            <label htmlFor="c-message">Project Details *</label>
            <textarea id="c-message" name="message" rows={5} placeholder="Tell me about your project — what you need built, your goals, timeline, and any demos above that inspired you..." value={form.message} onChange={handleChange} required />
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
          <a href="https://github.com/Sage-senpai" target="_blank" rel="noopener noreferrer">GitHub</a>
          {' '}&middot;{' '}
          <a href="https://linkedin.com/in/divineanyadike" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </footer>
    </div>
  );
}
