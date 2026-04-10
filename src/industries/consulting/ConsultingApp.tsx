import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollToTop from '../../components/shared/ScrollToTop';
import BackToShowcase from '../../components/shared/BackToShowcase';
import { pageTransition } from '../../styles/_animations';
import Home from './pages/Home';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Team from './pages/Team';
import Insights from './pages/Insights';
import Book from './pages/Book';
import Contact from './pages/Contact';
import './styles/consulting.scss';

const navLinks = [
  { label: 'Home', path: '/consulting' },
  { label: 'Services', path: '/consulting/services' },
  { label: 'Case Studies', path: '/consulting/case-studies' },
  { label: 'Team', path: '/consulting/team' },
  { label: 'Insights', path: '/consulting/insights' },
  { label: 'Contact', path: '/consulting/contact' },
];

export default function ConsultingApp() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/consulting' || location.pathname === '/consulting/';

  return (
    <div className="vx-app">
      <ScrollToTop />
      <BackToShowcase />

      {/* ── Navbar ── */}
      <nav
        className={`vx-nav ${
          !scrolled && isHome ? 'vx-nav--transparent' : 'vx-nav--scrolled'
        }`}
      >
        <div className="vx-nav__inner">
          <Link to="/consulting" className="vx-nav__logo">
            Vertex<span>.</span>
          </Link>

          <ul className="vx-nav__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="vx-nav__link">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/consulting/book">
                <motion.button
                  className="vx-nav__cta"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Book a Consultation
                </motion.button>
              </Link>
            </li>
          </ul>

          <button
            className="vx-nav__hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── Mobile Nav ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="vx-mobile-nav"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <button
              className="vx-mobile-nav__close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
            >
              &#10005;
            </button>
            <ul className="vx-mobile-nav__links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="vx-mobile-nav__link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/consulting/book"
                  className="vx-mobile-nav__link"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Page Content ── */}
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
            <Route path="services" element={<Services />} />
            <Route path="case-studies" element={<CaseStudies />} />
            <Route path="team" element={<Team />} />
            <Route path="insights" element={<Insights />} />
            <Route path="book" element={<Book />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      {/* ── Footer ── */}
      <footer className="vx-footer">
        <div className="vx-footer__inner">
          <div>
            <div className="vx-footer__logo">
              Vertex<span>.</span>
            </div>
            <p className="vx-footer__desc">
              Global consulting firm delivering strategic intelligence, digital
              transformation, and operational excellence to ambitious companies
              across 12 countries.
            </p>
          </div>

          <div>
            <h4 className="vx-footer__col-title">Pages</h4>
            <ul className="vx-footer__links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="vx-footer__col-title">Practices</h4>
            <ul className="vx-footer__links">
              <li><a href="#strategy">Strategy & Growth</a></li>
              <li><a href="#digital">Digital Transformation</a></li>
              <li><a href="#operations">Operations</a></li>
              <li><a href="#financial">Financial Advisory</a></li>
              <li><a href="#technology">Technology & Innovation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="vx-footer__col-title">Global Offices</h4>
            <div className="vx-footer__info">
              New York &middot; London &middot; Singapore<br />
              Dubai &middot; Zurich &middot; Lagos<br /><br />
              +1 (212) 555-0180<br />
              contact@vertexadvisory.com
            </div>
          </div>
        </div>

        <div className="vx-footer__bottom">
          &copy; 2025 Vertex Advisory &middot; New York &middot; London &middot; Singapore
        </div>
      </footer>
    </div>
  );
}
