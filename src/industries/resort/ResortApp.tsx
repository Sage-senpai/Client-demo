import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from '../../components/shared/ScrollToTop';
import BackToShowcase from '../../components/shared/BackToShowcase';
import { pageTransition } from '../../styles/_animations';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Dining from './pages/Dining';
import Spa from './pages/Spa';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';
import Book from './pages/Book';

import './styles/resort.scss';

const navLinks = [
  { to: '/resort', label: 'Home' },
  { to: '/resort/rooms', label: 'Rooms' },
  { to: '/resort/dining', label: 'Dining' },
  { to: '/resort/spa', label: 'Spa' },
  { to: '/resort/activities', label: 'Activities' },
  { to: '/resort/gallery', label: 'Gallery' },
];

export default function ResortApp() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/resort') return location.pathname === '/resort';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="resort-app">
      <ScrollToTop />
      <BackToShowcase />

      {/* ── NAV ── */}
      <nav className={`resort-nav ${scrolled ? 'resort-nav--scrolled' : ''}`}>
        <div className="resort-nav__inner">
          <Link to="/resort" className="resort-nav__logo">
            Coral Terrace
            <span>Resort &amp; Spa</span>
          </Link>

          <ul className="resort-nav__links">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`resort-nav__link ${isActive(l.to) ? 'resort-nav__link--active' : ''}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/resort/book" className="resort-nav__book-btn">
                Book Now
              </Link>
            </li>
          </ul>

          <button
            className={`resort-nav__hamburger ${mobileOpen ? 'resort-nav__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── MOBILE NAV OVERLAY ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="resort-mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="resort-mobile-nav__link">
                {l.label}
              </Link>
            ))}
            <Link to="/resort/book" className="resort-mobile-nav__book-btn">
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PAGES ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={pageTransition.initial}
          animate={pageTransition.animate}
          exit={pageTransition.exit}
          transition={pageTransition.transition}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/spa" element={<Spa />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/book" element={<Book />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      {/* ── FOOTER ── */}
      <footer className="resort-footer">
        <div className="resort-container">
          <div className="resort-footer__grid">
            <div className="resort-footer__brand">
              <h3>Coral Terrace Resort &amp; Spa</h3>
              <p>
                An exclusive coastal retreat on the shores of Ondo State, Nigeria.
                Where the rhythm of the Atlantic meets world-class hospitality.
              </p>
            </div>

            <div className="resort-footer__col">
              <h4>Explore</h4>
              <ul>
                <li><Link to="/resort/rooms">Rooms &amp; Suites</Link></li>
                <li><Link to="/resort/dining">Dining</Link></li>
                <li><Link to="/resort/spa">Spa &amp; Wellness</Link></li>
                <li><Link to="/resort/activities">Activities</Link></li>
              </ul>
            </div>

            <div className="resort-footer__col">
              <h4>Information</h4>
              <ul>
                <li><Link to="/resort/gallery">Gallery</Link></li>
                <li><Link to="/resort/book">Reservations</Link></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>

            <div className="resort-footer__col">
              <h4>Contact</h4>
              <ul>
                <li><a href="tel:+2348001234567">+234 800 123 4567</a></li>
                <li><a href="mailto:stay@coralterrace.ng">stay@coralterrace.ng</a></li>
                <li><a href="#map">Ilaje Coast, Ondo State</a></li>
              </ul>
            </div>
          </div>

          <div className="resort-footer__bottom">
            &copy; 2025 Coral Terrace Resort &amp; Spa &middot; Built by Anyadike Divine
          </div>
        </div>
      </footer>
    </div>
  );
}
