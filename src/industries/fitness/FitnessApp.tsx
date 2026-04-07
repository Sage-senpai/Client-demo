import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from '../../components/shared/ScrollToTop';
import BackToShowcase from '../../components/shared/BackToShowcase';
import { pageTransition } from '../../styles/_animations';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Schedule from './pages/Schedule';
import Trainers from './pages/Trainers';
import Membership from './pages/Membership';
import Book from './pages/Book';
import Contact from './pages/Contact';
import './styles/fitness.scss';

const navLinks = [
  { label: 'Home', path: '/fitness' },
  { label: 'Classes', path: '/fitness/classes' },
  { label: 'Schedule', path: '/fitness/schedule' },
  { label: 'Trainers', path: '/fitness/trainers' },
  { label: 'Membership', path: '/fitness/membership' },
  { label: 'Contact', path: '/fitness/contact' },
];

export default function FitnessApp() {
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
    <div className="fitness-app">
      <ScrollToTop />

      <nav className={`fit-nav ${scrolled ? 'fit-nav--scrolled' : ''}`}>
        <div className="fit-nav__inner">
          <Link to="/fitness" className="fit-nav__logo">
            PULSE<span>.</span>
          </Link>

          <ul className="fit-nav__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`fit-nav__link ${
                    location.pathname === link.path ? 'fit-nav__link--active' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/fitness/membership" className="fit-nav__cta">
            Join Now
          </Link>

          <button
            className={`fit-nav__hamburger ${mobileOpen ? 'fit-nav__hamburger--open' : ''}`}
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
              className="fit-nav__overlay"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="fit-nav__overlay-link">
                  {link.label}
                </Link>
              ))}
              <Link to="/fitness/membership" className="fit-nav__overlay-cta">
                Join Now
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
            <Route path="classes" element={<Classes />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="trainers" element={<Trainers />} />
            <Route path="membership" element={<Membership />} />
            <Route path="book" element={<Book />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <footer className="fit-footer">
        <div className="fit-footer__inner">
          <div className="fit-footer__brand">
            <h3>PULSE<span>.</span></h3>
            <p>
              Lagos&apos; premier fitness destination. World-class equipment,
              expert coaching, and a community that pushes you to be your best.
            </p>
          </div>

          <div className="fit-footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/fitness/classes">Classes</Link></li>
              <li><Link to="/fitness/schedule">Schedule</Link></li>
              <li><Link to="/fitness/trainers">Trainers</Link></li>
              <li><Link to="/fitness/membership">Membership</Link></li>
            </ul>
          </div>

          <div className="fit-footer__col">
            <h4>Programs</h4>
            <ul>
              <li><Link to="/fitness/classes">Strength</Link></li>
              <li><Link to="/fitness/classes">HIIT</Link></li>
              <li><Link to="/fitness/classes">Yoga</Link></li>
              <li><Link to="/fitness/classes">Combat</Link></li>
            </ul>
          </div>

          <div className="fit-footer__col">
            <h4>Contact</h4>
            <p>42 Admiralty Way, Lekki Phase 1, Lagos</p>
            <p>+234 (0) 901 234 5678</p>
            <p>hello@pulseathletics.ng</p>
          </div>
        </div>

        <div className="fit-footer__bottom">
          &copy; 2025 Pulse Athletics &middot; Built by Anyadike Divine
        </div>
      </footer>

      <BackToShowcase />
    </div>
  );
}
