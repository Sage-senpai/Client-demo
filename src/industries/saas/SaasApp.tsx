import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from '../../components/shared/ScrollToTop';
import BackToShowcase from '../../components/shared/BackToShowcase';
import { pageTransition } from '../../styles/_animations';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Docs from './pages/Docs';
import Signup from './pages/Signup';
import './styles/saas.scss';

const navLinks = [
  { label: 'Features', path: '/saas/features' },
  { label: 'Pricing', path: '/saas/pricing' },
  { label: 'Blog', path: '/saas/blog' },
  { label: 'Docs', path: '/saas/docs' },
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className={`saas-nav ${scrolled ? 'saas-nav--scrolled' : ''}`}>
        <div className="saas-nav__inner">
          <div className="saas-nav__logo" onClick={() => navigate('/saas')}>
            <span>Vela</span>
          </div>

          <ul className="saas-nav__links">
            {navLinks.map((link) => (
              <li
                key={link.path}
                className={`saas-nav__link ${location.pathname === link.path ? 'saas-nav__link--active' : ''}`}
                onClick={() => navigate(link.path)}
              >
                {link.label}
              </li>
            ))}
          </ul>

          <button
            className="saas-btn saas-btn--primary saas-nav__cta"
            onClick={() => navigate('/saas/signup')}
          >
            Get Started
          </button>

          <button
            className="saas-nav__hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="saas-mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="saas-mobile-nav__close"
              onClick={() => setMobileOpen(false)}
            >
              ✕
            </button>
            <ul className="saas-mobile-nav__links">
              <li className="saas-mobile-nav__link" onClick={() => navigate('/saas')}>
                Home
              </li>
              {navLinks.map((link) => (
                <li
                  key={link.path}
                  className="saas-mobile-nav__link"
                  onClick={() => navigate(link.path)}
                >
                  {link.label}
                </li>
              ))}
              <li className="saas-mobile-nav__link" onClick={() => navigate('/saas/signup')}>
                Get Started
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="saas-footer">
      <div className="saas-footer__grid">
        <div className="saas-footer__brand">
          <h3><span>Vela</span></h3>
          <p>
            The AI-powered workspace that helps teams move faster,
            collaborate smarter, and ship better products.
          </p>
        </div>

        <div className="saas-footer__col">
          <h4>Product</h4>
          <ul>
            <li onClick={() => navigate('/saas/features')}>Features</li>
            <li onClick={() => navigate('/saas/pricing')}>Pricing</li>
            <li>Integrations</li>
            <li>Changelog</li>
          </ul>
        </div>

        <div className="saas-footer__col">
          <h4>Resources</h4>
          <ul>
            <li onClick={() => navigate('/saas/docs')}>Documentation</li>
            <li onClick={() => navigate('/saas/blog')}>Blog</li>
            <li>API Reference</li>
            <li>Status</li>
          </ul>
        </div>

        <div className="saas-footer__col">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>

      <div className="saas-footer__bottom">
        <span>&copy; 2025 Vela &middot; Built by Anyadike Divine</span>
      </div>
    </footer>
  );
}

export default function SaasApp() {
  const location = useLocation();

  return (
    <div className="saas-app">
      <ScrollToTop />
      <Navbar />

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
            <Route path="blog" element={<Blog />} />
            <Route path="docs" element={<Docs />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Footer />
      <BackToShowcase />
    </div>
  );
}
