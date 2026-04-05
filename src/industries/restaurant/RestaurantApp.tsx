import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from '../../components/shared/ScrollToTop';
import BackToShowcase from '../../components/shared/BackToShowcase';
import { pageTransition } from '../../styles/_animations';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import OurStory from './pages/OurStory';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './styles/restaurant.scss';

const navLinks = [
  { label: 'Home', path: '/restaurant' },
  { label: 'Menu', path: '/restaurant/menu' },
  { label: 'Reservations', path: '/restaurant/reservations' },
  { label: 'Our Story', path: '/restaurant/our-story' },
  { label: 'Gallery', path: '/restaurant/gallery' },
  { label: 'Contact', path: '/restaurant/contact' },
];

export default function RestaurantApp() {
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

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/restaurant' || location.pathname === '/restaurant/';

  return (
    <div className="restaurant-app">
      <Toaster position="top-center" />
      <ScrollToTop />
      <BackToShowcase />

      {/* ── Navbar ── */}
      <nav
        className={`rest-nav ${
          !scrolled && isHome ? 'rest-nav--transparent' : 'rest-nav--scrolled'
        }`}
      >
        <div className="rest-nav__inner">
          <Link to="/restaurant" className="rest-nav__logo">
            Koko &amp; Thyme
          </Link>

          <ul className="rest-nav__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="rest-nav__link">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/restaurant/reservations">
                <button className="rest-nav__cta">Book a Table</button>
              </Link>
            </li>
          </ul>

          <button
            className="rest-nav__hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── Mobile Nav Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="rest-mobile-nav"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <button
              className="rest-mobile-nav__close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
            >
              &#10005;
            </button>
            <ul className="rest-mobile-nav__links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="rest-mobile-nav__link"
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
            <Route path="menu" element={<Menu />} />
            <Route path="reservations" element={<Reservations />} />
            <Route path="our-story" element={<OurStory />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      {/* ── Footer ── */}
      <footer className="rest-footer">
        <div className="rest-footer__inner">
          <div>
            <div className="rest-footer__logo">Koko &amp; Thyme</div>
            <p className="rest-footer__desc">
              Contemporary West African fine dining in the heart of Lagos. Every dish
              tells a story of heritage, flavour, and love.
            </p>
          </div>

          <div>
            <h4 className="rest-footer__col-title">Pages</h4>
            <ul className="rest-footer__links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="rest-footer__col-title">Contact</h4>
            <div className="rest-footer__info">
              42 Admiralty Way,<br />
              Lekki Phase 1, Lagos<br /><br />
              +234 (0) 812 345 6789<br />
              hello@kokoandthyme.com
            </div>
          </div>

          <div>
            <h4 className="rest-footer__col-title">Hours</h4>
            <div className="rest-footer__info">
              Monday: Closed<br />
              Tue – Thu: 12pm – 10pm<br />
              Fri – Sat: 12pm – 11pm<br />
              Sunday: 11am – 9pm
            </div>
          </div>
        </div>

        <div className="rest-footer__bottom">
          &copy; 2025 Koko &amp; Thyme &middot; Built by Anyadike Divine
        </div>
      </footer>
    </div>
  );
}
