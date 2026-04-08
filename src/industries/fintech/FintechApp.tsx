import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from '../../components/shared/ScrollToTop';
import BackToShowcase from '../../components/shared/BackToShowcase';
import { pageTransition } from '../../styles/_animations';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import Security from './pages/Security';
import Business from './pages/Business';
import Contact from './pages/Contact';
import './styles/fintech.scss';

const navLinks = [
  { label: 'Home', path: '/fintech' },
  { label: 'Features', path: '/fintech/features' },
  { label: 'Pricing', path: '/fintech/pricing' },
  { label: 'Dashboard', path: '/fintech/dashboard' },
  { label: 'Security', path: '/fintech/security' },
  { label: 'Business', path: '/fintech/business' },
  { label: 'Contact', path: '/fintech/contact' },
];

export default function FintechApp() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="fintech-app">
      <ScrollToTop />

      <nav className={`kash-nav ${scrolled ? 'kash-nav--scrolled' : ''}`}>
        <div className="kash-nav__inner">
          <Link to="/fintech" className="kash-nav__logo">
            Kash<span>.</span>
          </Link>

          <ul className="kash-nav__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`kash-nav__link ${
                    location.pathname === link.path ? 'kash-nav__link--active' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/fintech/pricing" className="kash-nav__cta">
            Open Account
          </Link>

          <button
            className={`kash-nav__hamburger ${mobileOpen ? 'kash-nav__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="kash-nav__overlay"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="kash-nav__overlay-link">
                  {link.label}
                </Link>
              ))}
              <Link to="/fintech/pricing" className="kash-nav__overlay-cta">
                Open Account
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={pageTransition.initial}
          animate={pageTransition.animate}
          exit={pageTransition.exit}
          transition={pageTransition.transition}
        >
          <Routes location={location}>
            <Route index element={<Home />} />
            <Route path="features" element={<Features />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="security" element={<Security />} />
            <Route path="business" element={<Business />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <footer className="kash-footer">
        <div className="kash-footer__inner">
          <div className="kash-footer__brand">
            <h3>Kash<span>.</span></h3>
            <p>
              The modern neobank for Africans. Send, save, invest, and manage
              your money — all from one beautiful app.
            </p>
          </div>

          <div className="kash-footer__col">
            <h4>Product</h4>
            <ul>
              <li><Link to="/fintech/features">Features</Link></li>
              <li><Link to="/fintech/pricing">Pricing</Link></li>
              <li><Link to="/fintech/security">Security</Link></li>
              <li><Link to="/fintech/business">Business</Link></li>
            </ul>
          </div>

          <div className="kash-footer__col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/fintech/contact">Contact</Link></li>
              <li><Link to="/fintech">About</Link></li>
              <li><Link to="/fintech">Careers</Link></li>
              <li><Link to="/fintech">Blog</Link></li>
            </ul>
          </div>

          <div className="kash-footer__col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/fintech">Privacy Policy</Link></li>
              <li><Link to="/fintech">Terms of Service</Link></li>
              <li><Link to="/fintech">Cookie Policy</Link></li>
              <li><Link to="/fintech">Compliance</Link></li>
            </ul>
          </div>
        </div>

        <div className="kash-footer__bottom">
          &copy; 2025 Kash &middot; Built by Anyadike Divine
        </div>
      </footer>

      <BackToShowcase />
    </div>
  );
}
