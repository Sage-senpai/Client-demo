import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from '../../components/shared/ScrollToTop';
import BackToShowcase from '../../components/shared/BackToShowcase';
import { pageTransition } from '../../styles/_animations';
import Home from './pages/Home';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Book from './pages/Book';
import Patients from './pages/Patients';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/healthcare.scss';

const navLinks = [
  { label: 'Home', path: '/healthcare' },
  { label: 'Services', path: '/healthcare/services' },
  { label: 'Doctors', path: '/healthcare/doctors' },
  { label: 'Book', path: '/healthcare/book' },
  { label: 'Patient Portal', path: '/healthcare/patients' },
  { label: 'About', path: '/healthcare/about' },
  { label: 'Contact', path: '/healthcare/contact' },
];

export default function HealthcareApp() {
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
    <div className="healthcare-app">
      <ScrollToTop />

      {/* ── Emergency Banner (fixed top) ── */}
      <div className="med-emergency">
        <div className="med-emergency__inner">
          <span className="med-emergency__icon">&#128680;</span>
          <span className="med-emergency__text">
            Emergency? Call now:
          </span>
          <a href="tel:+2349001234567" className="med-emergency__phone">
            +234 (0) 900 123 4567
          </a>
        </div>
      </div>

      {/* ── Navigation (below emergency banner) ── */}
      <nav className={`med-nav ${scrolled ? 'med-nav--scrolled' : ''}`}>
        <div className="med-nav__inner">
          <Link to="/healthcare" className="med-nav__logo">
            Solace<span> Medical</span>
          </Link>

          <ul className="med-nav__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`med-nav__link ${
                    location.pathname === link.path ? 'med-nav__link--active' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/healthcare/book" className="med-nav__cta">
            Book Appointment
          </Link>

          <button
            className={`med-nav__hamburger ${mobileOpen ? 'med-nav__hamburger--open' : ''}`}
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
              className="med-nav__overlay"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="med-nav__overlay-link">
                  {link.label}
                </Link>
              ))}
              <Link to="/healthcare/book" className="med-nav__overlay-cta">
                Book Appointment
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

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
            <Route path="doctors" element={<Doctors />} />
            <Route path="book" element={<Book />} />
            <Route path="patients" element={<Patients />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      {/* ── Footer ── */}
      <footer className="med-footer">
        <div className="med-footer__inner">
          <div className="med-footer__brand">
            <h3>Solace<span> Medical</span></h3>
            <p>
              Providing compassionate, world-class healthcare to Lagos
              and beyond. Your health, our priority.
            </p>
          </div>

          <div className="med-footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/healthcare/services">Services</Link></li>
              <li><Link to="/healthcare/doctors">Our Doctors</Link></li>
              <li><Link to="/healthcare/book">Book Appointment</Link></li>
              <li><Link to="/healthcare/patients">Patient Portal</Link></li>
            </ul>
          </div>

          <div className="med-footer__col">
            <h4>Departments</h4>
            <ul>
              <li><Link to="/healthcare/services">General Practice</Link></li>
              <li><Link to="/healthcare/services">Cardiology</Link></li>
              <li><Link to="/healthcare/services">Pediatrics</Link></li>
              <li><Link to="/healthcare/services">Emergency</Link></li>
            </ul>
          </div>

          <div className="med-footer__col">
            <h4>Contact</h4>
            <p>15 Medical Center Drive, Victoria Island, Lagos</p>
            <p>+234 (0) 900 123 4567</p>
            <p>care@solacemedical.ng</p>
          </div>
        </div>

        <div className="med-footer__bottom">
          &copy; 2025 Solace Medical &middot; Built by Anyadike Divine
        </div>
      </footer>

      <BackToShowcase />
    </div>
  );
}
