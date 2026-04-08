import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from '../../components/shared/ScrollToTop';
import BackToShowcase from '../../components/shared/BackToShowcase';
import { pageTransition } from '../../styles/_animations';
import Home from './pages/Home';
import Listings from './pages/Listings';
import ListingDetail from './pages/ListingDetail';
import Services from './pages/Services';
import Agents from './pages/Agents';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/realestate.scss';

const navLinks = [
  { label: 'Home', path: '/realestate' },
  { label: 'Listings', path: '/realestate/listings' },
  { label: 'Services', path: '/realestate/services' },
  { label: 'Agents', path: '/realestate/agents' },
  { label: 'About', path: '/realestate/about' },
  { label: 'Contact', path: '/realestate/contact' },
];

export default function RealEstateApp() {
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
    <div className="realestate-app">
      <ScrollToTop />

      <nav className={`re-nav ${scrolled ? 're-nav--scrolled' : ''}`}>
        <div className="re-nav__inner">
          <Link to="/realestate" className="re-nav__logo">
            Prestige<span>.</span>
          </Link>

          <ul className="re-nav__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`re-nav__link ${
                    location.pathname === link.path ? 're-nav__link--active' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/realestate/listings" className="re-nav__cta">
            Find Property
          </Link>

          <button
            className={`re-nav__hamburger ${mobileOpen ? 're-nav__hamburger--open' : ''}`}
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
              className="re-nav__overlay"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="re-nav__overlay-link">
                  {link.label}
                </Link>
              ))}
              <Link to="/realestate/listings" className="re-nav__overlay-cta">
                Find Property
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
            <Route path="listings" element={<Listings />} />
            <Route path="listings/:id" element={<ListingDetail />} />
            <Route path="services" element={<Services />} />
            <Route path="agents" element={<Agents />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <footer className="re-footer">
        <div className="re-footer__inner">
          <div className="re-footer__brand">
            <h3>Prestige<span>.</span></h3>
            <p>
              Nigeria&apos;s premier real estate agency. Luxury homes, commercial
              properties, and investment opportunities across Lagos and beyond.
            </p>
          </div>

          <div className="re-footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/realestate/listings">Listings</Link></li>
              <li><Link to="/realestate/services">Services</Link></li>
              <li><Link to="/realestate/agents">Agents</Link></li>
              <li><Link to="/realestate/about">About</Link></li>
            </ul>
          </div>

          <div className="re-footer__col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/realestate/services">Buying</Link></li>
              <li><Link to="/realestate/services">Selling</Link></li>
              <li><Link to="/realestate/services">Renting</Link></li>
              <li><Link to="/realestate/services">Valuation</Link></li>
            </ul>
          </div>

          <div className="re-footer__col">
            <h4>Contact</h4>
            <p>15 Bourdillon Road, Ikoyi, Lagos</p>
            <p>+234 (0) 812 345 6789</p>
            <p>hello@prestigeproperties.ng</p>
          </div>
        </div>

        <div className="re-footer__bottom">
          &copy; 2025 Prestige Properties &middot; Built by Anyadike Divine
        </div>
      </footer>

      <BackToShowcase />
    </div>
  );
}
