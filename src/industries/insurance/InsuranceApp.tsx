import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from '../../components/shared/ScrollToTop';
import BackToShowcase from '../../components/shared/BackToShowcase';
import { pageTransition } from '../../styles/_animations';
import Home from './pages/Home';
import Products from './pages/Products';
import Quote from './pages/Quote';
import Claims from './pages/Claims';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import './styles/insurance.scss';

const navLinks = [
  { label: 'Home', path: '/insurance' },
  { label: 'Products', path: '/insurance/products' },
  { label: 'Get a Quote', path: '/insurance/quote' },
  { label: 'Claims', path: '/insurance/claims' },
  { label: 'About', path: '/insurance/about' },
  { label: 'FAQ', path: '/insurance/faq' },
  { label: 'Contact', path: '/insurance/contact' },
];

export default function InsuranceApp() {
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
    <div className="insurance-app">
      <ScrollToTop />

      <nav className={`ins-nav ${scrolled ? 'ins-nav--scrolled' : ''}`}>
        <div className="ins-nav__inner">
          <Link to="/insurance" className="ins-nav__logo">
            Aegis<span>Cover</span>
          </Link>

          <ul className="ins-nav__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`ins-nav__link ${
                    location.pathname === link.path ? 'ins-nav__link--active' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/insurance/quote" className="ins-nav__cta">
            Get a Quote
          </Link>

          <button
            className={`ins-nav__hamburger ${mobileOpen ? 'ins-nav__hamburger--open' : ''}`}
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
              className="ins-nav__overlay"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="ins-nav__overlay-link">
                  {link.label}
                </Link>
              ))}
              <Link to="/insurance/quote" className="ins-nav__overlay-cta">
                Get a Quote
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
            <Route path="products" element={<Products />} />
            <Route path="quote" element={<Quote />} />
            <Route path="claims" element={<Claims />} />
            <Route path="about" element={<About />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <footer className="ins-footer">
        <div className="ins-footer__inner">
          <div className="ins-footer__brand">
            <h3>Aegis<span>Cover</span></h3>
            <p>
              Modern global insurance for individuals and businesses.
              Protection you can count on, wherever life takes you.
            </p>
          </div>

          <div className="ins-footer__col">
            <h4>Products</h4>
            <ul>
              <li><Link to="/insurance/products">Health Insurance</Link></li>
              <li><Link to="/insurance/products">Life Insurance</Link></li>
              <li><Link to="/insurance/products">Auto Insurance</Link></li>
              <li><Link to="/insurance/products">Home Insurance</Link></li>
              <li><Link to="/insurance/products">Travel Insurance</Link></li>
              <li><Link to="/insurance/products">Business Insurance</Link></li>
            </ul>
          </div>

          <div className="ins-footer__col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/insurance/about">About Us</Link></li>
              <li><Link to="/insurance/claims">Claims Center</Link></li>
              <li><Link to="/insurance/faq">FAQ</Link></li>
              <li><Link to="/insurance/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="ins-footer__col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/insurance">Privacy Policy</Link></li>
              <li><Link to="/insurance">Terms of Service</Link></li>
              <li><Link to="/insurance">Cookie Policy</Link></li>
              <li><Link to="/insurance">Regulatory Info</Link></li>
            </ul>
          </div>
        </div>

        <div className="ins-footer__bottom">
          &copy; 2025 Aegis Cover &middot; Trusted Worldwide
        </div>
      </footer>

      <BackToShowcase />
    </div>
  );
}
