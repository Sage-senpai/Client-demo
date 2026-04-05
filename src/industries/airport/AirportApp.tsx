import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from '../../components/shared/ScrollToTop';
import BackToShowcase from '../../components/shared/BackToShowcase';
import Home from './pages/Home';
import Flights from './pages/Flights';
import Terminals from './pages/Terminals';
import Services from './pages/Services';
import Parking from './pages/Parking';
import Contact from './pages/Contact';
import './styles/airport.scss';

const navLinks = [
  { to: '/airport', label: 'Home' },
  { to: '/airport/flights', label: 'Flights' },
  { to: '/airport/terminals', label: 'Terminals' },
  { to: '/airport/services', label: 'Services' },
  { to: '/airport/parking', label: 'Parking' },
  { to: '/airport/contact', label: 'Contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/airport') return location.pathname === '/airport';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav className={`airport-nav ${scrolled ? 'airport-nav--scrolled' : ''}`}>
        <div className="airport-nav__inner">
          <Link to="/airport" className="airport-nav__logo">
            Apogee <span>Airport</span>
          </Link>

          <ul className="airport-nav__links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`airport-nav__link ${isActive(link.to) ? 'airport-nav__link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/airport/services" className="airport-nav__cta">
            Book Lounge &rarr;
          </Link>

          <button
            className={`airport-nav__hamburger ${mobileOpen ? 'airport-nav__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
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
            className="airport-mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="airport-mobile-nav__link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/airport/services"
              className="airport-mobile-nav__cta"
              onClick={() => setMobileOpen(false)}
            >
              Book Lounge &rarr;
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  return (
    <footer className="airport-footer">
      <div className="container">
        <div className="airport-footer__grid">
          <div>
            <div className="airport-footer__brand">
              Apogee <span>Airport</span>
            </div>
            <p className="airport-footer__brand-desc">
              Africa's premier international hub connecting Abuja to 42 destinations
              worldwide. Experience world-class service at every touchpoint.
            </p>
          </div>

          <div>
            <h4 className="airport-footer__col-title">Quick Links</h4>
            <ul className="airport-footer__links">
              <li><Link to="/airport/flights" className="airport-footer__link">Flight Status</Link></li>
              <li><Link to="/airport/terminals" className="airport-footer__link">Terminal Guide</Link></li>
              <li><Link to="/airport/parking" className="airport-footer__link">Parking</Link></li>
              <li><Link to="/airport/services" className="airport-footer__link">Lounges</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="airport-footer__col-title">Traveler Info</h4>
            <ul className="airport-footer__links">
              <li><Link to="/airport/services" className="airport-footer__link">Dining &amp; Shopping</Link></li>
              <li><Link to="/airport/services" className="airport-footer__link">Accessibility</Link></li>
              <li><Link to="/airport/contact" className="airport-footer__link">Lost &amp; Found</Link></li>
              <li><Link to="/airport/contact" className="airport-footer__link">Emergency</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="airport-footer__col-title">Contact</h4>
            <ul className="airport-footer__links">
              <li><span className="airport-footer__link">+234 9 461 0000</span></li>
              <li><span className="airport-footer__link">info@apogeeairport.ng</span></li>
              <li><span className="airport-footer__link">Abuja, Nigeria</span></li>
              <li><span className="airport-footer__link">24/7 Operations</span></li>
            </ul>
          </div>
        </div>

        <div className="airport-footer__bottom">
          &copy; 2025 Apogee International Airport &middot; Built by Anyadike Divine
        </div>
      </div>
    </footer>
  );
}

export default function AirportApp() {
  const location = useLocation();

  return (
    <div className="airport-app">
      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="flights" element={<Flights />} />
          <Route path="terminals" element={<Terminals />} />
          <Route path="services" element={<Services />} />
          <Route path="parking" element={<Parking />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>

      <Footer />
      <BackToShowcase />
    </div>
  );
}
