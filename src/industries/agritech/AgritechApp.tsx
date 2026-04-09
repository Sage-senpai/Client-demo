import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from '../../components/shared/ScrollToTop';
import BackToShowcase from '../../components/shared/BackToShowcase';
import { pageTransition } from '../../styles/_animations';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Services from './pages/Services';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './styles/agritech.scss';

const navLinks = [
  { label: 'Home', path: '/agritech' },
  { label: 'Marketplace', path: '/agritech/marketplace' },
  { label: 'Services', path: '/agritech/services' },
  { label: 'Dashboard', path: '/agritech/dashboard' },
  { label: 'About', path: '/agritech/about' },
  { label: 'Blog', path: '/agritech/blog' },
  { label: 'Contact', path: '/agritech/contact' },
];

export default function AgritechApp() {
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
    <div className="agritech-app">
      <ScrollToTop />

      <nav className={`ag-nav ${scrolled ? 'ag-nav--scrolled' : ''}`}>
        <div className="terra-nav__inner">
          <Link to="/agritech" className="terra-nav__logo">
            Terra<span>Yield</span>
          </Link>

          <ul className="terra-nav__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`ag-nav__link ${
                    location.pathname === link.path ? 'ag-nav__link--active' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/agritech/marketplace" className="terra-nav__cta">
            Browse Produce
          </Link>

          <button
            className={`ag-nav__hamburger ${mobileOpen ? 'ag-nav__hamburger--open' : ''}`}
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
              className="terra-nav__overlay"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="terra-nav__overlay-link">
                  {link.label}
                </Link>
              ))}
              <Link to="/agritech/marketplace" className="terra-nav__overlay-cta">
                Browse Produce
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
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="services" element={<Services />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <footer className="terra-footer">
        <div className="terra-footer__inner">
          <div className="terra-footer__brand">
            <h3>Terra<span>Yield</span></h3>
            <p>
              Africa&apos;s smartest agritech platform — connecting farmers,
              buyers, and technology for a more prosperous agricultural future.
            </p>
          </div>

          <div className="terra-footer__col">
            <h4>Platform</h4>
            <ul>
              <li><Link to="/agritech/marketplace">Marketplace</Link></li>
              <li><Link to="/agritech/services">Farm Services</Link></li>
              <li><Link to="/agritech/dashboard">Dashboard</Link></li>
              <li><Link to="/agritech/blog">Insights</Link></li>
            </ul>
          </div>

          <div className="terra-footer__col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/agritech/about">About Us</Link></li>
              <li><Link to="/agritech/contact">Contact</Link></li>
              <li><Link to="/agritech/about">Our Impact</Link></li>
              <li><Link to="/agritech/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="terra-footer__col">
            <h4>Contact</h4>
            <p>14 Adeola Odeku Street, Victoria Island, Lagos</p>
            <p>+234 (0) 812 345 6789</p>
            <p>hello@terrayield.ng</p>
          </div>
        </div>

        <div className="terra-footer__bottom">
          &copy; 2025 TerraYield &middot; Built by Anyadike Divine
        </div>
      </footer>

      <BackToShowcase />
    </div>
  );
}
