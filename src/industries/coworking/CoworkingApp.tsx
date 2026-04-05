import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from '../../components/shared/ScrollToTop';
import BackToShowcase from '../../components/shared/BackToShowcase';
import { pageTransition } from '../../styles/_animations';

import Home from './pages/Home';
import Spaces from './pages/Spaces';
import Membership from './pages/Membership';
import Cafe from './pages/Cafe';
import Events from './pages/Events';
import Book from './pages/Book';
import Contact from './pages/Contact';

import './styles/coworking.scss';

const navLinks = [
  { to: '/coworking', label: 'Home' },
  { to: '/coworking/spaces', label: 'Spaces' },
  { to: '/coworking/membership', label: 'Membership' },
  { to: '/coworking/cafe', label: 'Café' },
  { to: '/coworking/events', label: 'Events' },
  { to: '/coworking/contact', label: 'Contact' },
];

export default function CoworkingApp() {
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
    if (path === '/coworking') return location.pathname === '/coworking';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="coworking-app">
      <ScrollToTop />
      <BackToShowcase />

      {/* ── NAV ── */}
      <nav className={`cw-nav ${scrolled ? 'cw-nav--scrolled' : ''}`}>
        <div className="cw-nav__inner">
          <Link to="/coworking" className="cw-nav__logo">
            Grove &amp; Co.
            <span>Coworking + Café</span>
          </Link>

          <ul className="cw-nav__links">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`cw-nav__link ${isActive(l.to) ? 'cw-nav__link--active' : ''}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/coworking/book" className="cw-nav__cta">
                Book a Desk →
              </Link>
            </li>
          </ul>

          <button
            className={`cw-nav__hamburger ${mobileOpen ? 'cw-nav__hamburger--open' : ''}`}
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
            className="cw-mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="cw-mobile-nav__link">
                {l.label}
              </Link>
            ))}
            <Link to="/coworking/book" className="cw-mobile-nav__cta">
              Book a Desk →
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
            <Route path="/spaces" element={<Spaces />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/cafe" element={<Cafe />} />
            <Route path="/events" element={<Events />} />
            <Route path="/book" element={<Book />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      {/* ── FOOTER ── */}
      <footer className="cw-footer">
        <div className="cw-container">
          <div className="cw-footer__grid">
            <div className="cw-footer__brand">
              <h3>Grove &amp; Co.</h3>
              <p>
                A biophilic coworking space and artisan café in the heart of Lagos.
                Where productivity meets nature, and community meets great coffee.
              </p>
            </div>

            <div className="cw-footer__col">
              <h4>Spaces</h4>
              <ul>
                <li><Link to="/coworking/spaces">Hot Desks</Link></li>
                <li><Link to="/coworking/spaces">Dedicated Desks</Link></li>
                <li><Link to="/coworking/spaces">Private Offices</Link></li>
                <li><Link to="/coworking/spaces">Meeting Rooms</Link></li>
              </ul>
            </div>

            <div className="cw-footer__col">
              <h4>Company</h4>
              <ul>
                <li><Link to="/coworking/membership">Membership</Link></li>
                <li><Link to="/coworking/cafe">The Grove Café</Link></li>
                <li><Link to="/coworking/events">Events</Link></li>
                <li><Link to="/coworking/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="cw-footer__col">
              <h4>Connect</h4>
              <ul>
                <li><a href="tel:+2348091234567">+234 809 123 4567</a></li>
                <li><a href="mailto:hello@groveandco.ng">hello@groveandco.ng</a></li>
                <li><a href="#map">12 Bourdillon Rd, Ikoyi, Lagos</a></li>
              </ul>
            </div>
          </div>

          <div className="cw-footer__bottom">
            &copy; 2025 Grove &amp; Co. &middot; Built by Anyadike Divine
          </div>
        </div>
      </footer>
    </div>
  );
}
