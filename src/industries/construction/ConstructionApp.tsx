import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from '../../components/shared/ScrollToTop';
import BackToShowcase from '../../components/shared/BackToShowcase';
import { pageTransition } from '../../styles/_animations';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import About from './pages/About';
import Safety from './pages/Safety';
import Quote from './pages/Quote';
import Contact from './pages/Contact';
import './styles/construction.scss';

const navLinks = [
  { label: 'Home', path: '/construction' },
  { label: 'Projects', path: '/construction/projects' },
  { label: 'Services', path: '/construction/services' },
  { label: 'About', path: '/construction/about' },
  { label: 'Safety', path: '/construction/safety' },
  { label: 'Contact', path: '/construction/contact' },
];

export default function ConstructionApp() {
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
    <div className="construction-app">
      <ScrollToTop />

      {/* ── Navbar ── */}
      <nav className={`con-nav ${scrolled ? 'con-nav--scrolled' : ''}`}>
        <div className="con-nav__inner">
          <Link to="/construction" className="con-nav__logo">
            Bastion<span>Group</span>
          </Link>

          <ul className="con-nav__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`con-nav__link ${
                    location.pathname === link.path ? 'con-nav__link--active' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/construction/quote">
                <button className="con-nav__cta">Get a Quote &rarr;</button>
              </Link>
            </li>
          </ul>

          <button
            className={`con-nav__hamburger ${mobileOpen ? 'con-nav__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`con-nav__mobile ${mobileOpen ? 'con-nav__mobile--open' : ''}`}>
          <ul className="con-nav__mobile-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <Link to="/construction/quote">
            <button className="con-nav__mobile-cta">Get a Quote &rarr;</button>
          </Link>
        </div>
      </nav>

      {/* ── Routes ── */}
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
            <Route path="projects" element={<Projects />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="safety" element={<Safety />} />
            <Route path="quote" element={<Quote />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      {/* ── Footer ── */}
      <footer className="con-footer">
        <div className="con-footer__inner">
          <div>
            <h3 className="con-footer__brand">
              Bastion<span>Group</span>
            </h3>
            <p className="con-footer__tagline">
              Civil and structural engineering excellence across Nigeria. We build what lasts
              — bridges, towers, estates, and the infrastructure that drives progress.
            </p>
          </div>

          <div>
            <h4 className="con-footer__col-title">Quick Links</h4>
            <ul className="con-footer__links">
              <li><Link to="/construction/projects">Projects</Link></li>
              <li><Link to="/construction/services">Services</Link></li>
              <li><Link to="/construction/about">About Us</Link></li>
              <li><Link to="/construction/safety">HSE</Link></li>
              <li><Link to="/construction/quote">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="con-footer__col-title">Services</h4>
            <ul className="con-footer__links">
              <li><Link to="/construction/services">Commercial Build</Link></li>
              <li><Link to="/construction/services">Residential</Link></li>
              <li><Link to="/construction/services">Road &amp; Bridge</Link></li>
              <li><Link to="/construction/services">Industrial</Link></li>
              <li><Link to="/construction/services">Renovation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="con-footer__col-title">Contact</h4>
            <p className="con-footer__contact-item">14 Adeola Odeku St, Victoria Island, Lagos</p>
            <p className="con-footer__contact-item">+234 (0) 812 345 6789</p>
            <p className="con-footer__contact-item">info@bastiongroup.ng</p>
          </div>
        </div>

        <div className="con-footer__bottom">
          &copy; 2025 Bastion Group &middot; Built by Anyadike Divine
        </div>
      </footer>

      <BackToShowcase />
    </div>
  );
}
