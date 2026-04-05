import { useState } from 'react';
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { pageTransition } from '../../styles/_animations';
import ScrollToTop from '../../components/shared/ScrollToTop';
import BackToShowcase from '../../components/shared/BackToShowcase';
import Home from './pages/Home';
import Track from './pages/Track';
import Services from './pages/Services';
import Business from './pages/Business';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import './styles/delivery.scss';

const navLinks = [
  { to: '/delivery', label: 'Home', end: true },
  { to: '/delivery/services', label: 'Services' },
  { to: '/delivery/track', label: 'Track' },
  { to: '/delivery/business', label: 'Business' },
  { to: '/delivery/pricing', label: 'Pricing' },
  { to: '/delivery/contact', label: 'Contact' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav className="del-nav">
        <Link to="/delivery" className="del-nav__logo">
          Zinga<span>.</span>
        </Link>

        <ul className="del-nav__links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/delivery/contact" className="del-nav__cta">
          Get Started
        </Link>

        <button
          className={`del-nav__hamburger ${mobileOpen ? 'del-nav__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="del-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={closeMobile}>
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  return (
    <footer className="del-footer">
      <div className="del-footer__inner">
        <div className="del-footer__brand">
          <h3>
            Zinga<span>.</span>
          </h3>
          <p>
            Pan-African same-day delivery. Moving Lagos at the speed of now,
            and expanding across the continent.
          </p>
        </div>

        <div className="del-footer__col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/delivery/services">Food Delivery</Link></li>
            <li><Link to="/delivery/services">Parcel Delivery</Link></li>
            <li><Link to="/delivery/services">Pharmacy</Link></li>
            <li><Link to="/delivery/services">E-commerce</Link></li>
            <li><Link to="/delivery/services">Medical</Link></li>
          </ul>
        </div>

        <div className="del-footer__col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/delivery/business">For Business</Link></li>
            <li><Link to="/delivery/pricing">Pricing</Link></li>
            <li><Link to="/delivery/track">Track Order</Link></li>
            <li><Link to="/delivery/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="del-footer__col">
          <h4>Support</h4>
          <ul>
            <li><Link to="/delivery/contact">Help Centre</Link></li>
            <li><Link to="/delivery/contact">Live Chat</Link></li>
            <li><Link to="/delivery/contact">FAQs</Link></li>
            <li><Link to="/delivery/contact">Report Issue</Link></li>
          </ul>
        </div>
      </div>

      <div className="del-footer__bottom">
        &copy; 2025 Zinga Delivery &middot; Built by Anyadike Divine
      </div>
    </footer>
  );
}

export default function DeliveryApp() {
  const location = useLocation();

  return (
    <div className="delivery-app">
      <Navbar />
      <ScrollToTop />
      <BackToShowcase />

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
            <Route path="track" element={<Track />} />
            <Route path="services" element={<Services />} />
            <Route path="business" element={<Business />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
