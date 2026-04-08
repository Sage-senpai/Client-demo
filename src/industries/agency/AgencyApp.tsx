import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollToTop from '../../components/shared/ScrollToTop';
import BackToShowcase from '../../components/shared/BackToShowcase';
import { pageTransition } from '../../styles/_animations';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import Work from './pages/Work';
import About from './pages/About';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import './styles/agency.scss';

const navLinks = [
  { label: 'Home', path: '/agency' },
  { label: 'Services', path: '/agency/services' },
  { label: 'Work', path: '/agency/work' },
  { label: 'About', path: '/agency/about' },
  { label: 'Blog', path: '/agency/blog' },
  { label: 'Pricing', path: '/agency/pricing' },
  { label: 'Contact', path: '/agency/contact' },
];

export default function AgencyApp() {
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

  const isHome = location.pathname === '/agency' || location.pathname === '/agency/';

  return (
    <div className="agency-app">
      <ScrollToTop />
      <BackToShowcase />

      {/* ── Navbar ── */}
      <nav
        className={`ag-nav ${
          !scrolled && isHome ? 'ag-nav--transparent' : 'ag-nav--scrolled'
        }`}
      >
        <div className="ag-nav__inner">
          <Link to="/agency" className="ag-nav__logo">
            Flux<span>.</span>
          </Link>

          <ul className="ag-nav__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="ag-nav__link">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/agency/contact">
                <motion.button
                  className="ag-nav__cta"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Start a Project
                </motion.button>
              </Link>
            </li>
          </ul>

          <button
            className="ag-nav__hamburger"
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
            className="ag-mobile-nav"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <button
              className="ag-mobile-nav__close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
            >
              &#10005;
            </button>
            <ul className="ag-mobile-nav__links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="ag-mobile-nav__link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
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
            <Route path="services" element={<ServicesPage />} />
            <Route path="work" element={<Work />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      {/* ── Footer ── */}
      <footer className="ag-footer">
        <div className="ag-footer__inner">
          <div>
            <div className="ag-footer__logo">
              Flux<span>.</span>
            </div>
            <p className="ag-footer__desc">
              Full-service creative agency helping brands grow through strategy,
              design, and digital marketing. Lagos, Nigeria.
            </p>
          </div>

          <div>
            <h4 className="ag-footer__col-title">Pages</h4>
            <ul className="ag-footer__links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="ag-footer__col-title">Services</h4>
            <ul className="ag-footer__links">
              <li><a href="#brand">Brand Strategy</a></li>
              <li><a href="#web">Web Design</a></li>
              <li><a href="#seo">SEO</a></li>
              <li><a href="#social">Social Media</a></li>
              <li><a href="#ads">Paid Ads</a></li>
              <li><a href="#email">Email Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="ag-footer__col-title">Contact</h4>
            <div className="ag-footer__info">
              14 Adeola Odeku Street,<br />
              Victoria Island, Lagos<br /><br />
              +234 (0) 901 234 5678<br />
              hello@fluxcreative.ng
            </div>
          </div>
        </div>

        <div className="ag-footer__bottom">
          &copy; 2025 Flux Creative &middot; Built by Anyadike Divine
        </div>
      </footer>
    </div>
  );
}
