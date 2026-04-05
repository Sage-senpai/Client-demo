import { useState, useEffect } from 'react';
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from '../../components/shared/ScrollToTop';
import BackToShowcase from '../../components/shared/BackToShowcase';
import { pageTransition } from '../../styles/_animations';
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Book from './pages/Book';
import Products from './pages/Products';
import Contact from './pages/Contact';
import './styles/beauty.scss';

const navLinks = [
  { path: '/beauty', label: 'Home' },
  { path: '/beauty/services', label: 'Services' },
  { path: '/beauty/team', label: 'Team' },
  { path: '/beauty/gallery', label: 'Gallery' },
  { path: '/beauty/products', label: 'Products' },
  { path: '/beauty/contact', label: 'Contact' },
];

export default function BeautyApp() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="beauty-app">
      <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
      <ScrollToTop />
      <BackToShowcase />

      {/* ── Navigation ── */}
      <nav className={`beauty-nav${scrolled ? ' beauty-nav--scrolled' : ''}`}>
        <div className="beauty-nav__inner">
          <Link to="/beauty" className="beauty-nav__logo">
            Radiance <span>Studio</span>
          </Link>

          <ul className="beauty-nav__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/beauty'}
                  className={({ isActive }) =>
                    `beauty-nav__link${isActive ? ' beauty-nav__link--active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link to="/beauty/book">
            <motion.button
              className="beauty-nav__cta"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Book Now
            </motion.button>
          </Link>

          <button
            className={`beauty-nav__hamburger${menuOpen ? ' beauty-nav__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`beauty-nav__mobile-menu${menuOpen ? ' beauty-nav__mobile-menu--open' : ''}`}>
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              {link.label}
            </Link>
          ))}
          <Link to="/beauty/book">
            <button className="beauty-nav__cta">Book Now</button>
          </Link>
        </div>
      </nav>

      {/* ── Page Routes ── */}
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
            <Route path="services" element={<Services />} />
            <Route path="team" element={<Team />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="book" element={<Book />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      {/* ── Footer ── */}
      <footer className="beauty-footer">
        <div className="beauty-footer__inner">
          <div className="beauty-footer__grid">
            <div className="beauty-footer__brand">
              <h3>Radiance <span>Studio</span></h3>
              <p>
                Premium urban hair, skin &amp; wellness salon located in the heart of Abuja.
                Where beauty meets artistry.
              </p>
            </div>

            <div className="beauty-footer__col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/beauty/services">Services &amp; Pricing</Link></li>
                <li><Link to="/beauty/team">Our Stylists</Link></li>
                <li><Link to="/beauty/gallery">Gallery</Link></li>
                <li><Link to="/beauty/book">Book Appointment</Link></li>
              </ul>
            </div>

            <div className="beauty-footer__col">
              <h4>Services</h4>
              <ul>
                <li><Link to="/beauty/services">Hair Styling</Link></li>
                <li><Link to="/beauty/services">Skin &amp; Facials</Link></li>
                <li><Link to="/beauty/services">Nail Care</Link></li>
                <li><Link to="/beauty/services">Spa &amp; Massage</Link></li>
                <li><Link to="/beauty/services">Bridal Packages</Link></li>
              </ul>
            </div>

            <div className="beauty-footer__col">
              <h4>Contact</h4>
              <ul>
                <li>12 Aminu Kano Crescent, Wuse II, Abuja</li>
                <li>+234 809 123 4567</li>
                <li>hello@radiancestudio.ng</li>
              </ul>
            </div>
          </div>

          <div className="beauty-footer__bottom">
            <p>&copy; 2025 Radiance Studio &middot; Built by Anyadike Divine</p>
            <div className="beauty-footer__socials">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Twitter">TW</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="TikTok">TK</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
