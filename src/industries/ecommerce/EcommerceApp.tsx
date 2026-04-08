import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from '../../components/shared/ScrollToTop';
import BackToShowcase from '../../components/shared/BackToShowcase';
import { pageTransition } from '../../styles/_animations';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import About from './pages/About';
import Lookbook from './pages/Lookbook';
import Contact from './pages/Contact';
import './styles/ecommerce.scss';

const navLinks = [
  { label: 'Home', path: '/ecommerce' },
  { label: 'Shop', path: '/ecommerce/shop' },
  { label: 'Lookbook', path: '/ecommerce/lookbook' },
  { label: 'About', path: '/ecommerce/about' },
  { label: 'Contact', path: '/ecommerce/contact' },
];

export default function EcommerceApp() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const addToCart = (qty: number = 1) => {
    setCartCount((prev) => prev + qty);
  };

  return (
    <div className="ecom-app">
      <ScrollToTop />

      <nav className={`ecom-nav ${scrolled ? 'ecom-nav--scrolled' : ''}`}>
        <div className="ecom-nav__inner">
          <Link to="/ecommerce" className="ecom-nav__logo">
            NUVO<span>RA</span>
          </Link>

          <ul className="ecom-nav__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`ecom-nav__link ${
                    location.pathname === link.path ? 'ecom-nav__link--active' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ecom-nav__actions">
            <Link to="/ecommerce/cart" className="ecom-nav__cart-btn">
              <span role="img" aria-label="cart">&#128722;</span>
              {cartCount > 0 && (
                <span className="ecom-nav__cart-badge">{cartCount}</span>
              )}
            </Link>

            <button
              className={`ecom-nav__hamburger ${mobileOpen ? 'ecom-nav__hamburger--open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="ecom-nav__overlay"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="ecom-nav__overlay-link">
                  {link.label}
                </Link>
              ))}
              <Link to="/ecommerce/cart" className="ecom-nav__overlay-cta">
                View Cart ({cartCount})
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
            <Route index element={<Home addToCart={addToCart} />} />
            <Route path="shop" element={<Shop addToCart={addToCart} />} />
            <Route path="product" element={<Product addToCart={addToCart} />} />
            <Route path="cart" element={<Cart />} />
            <Route path="about" element={<About />} />
            <Route path="lookbook" element={<Lookbook />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <footer className="ecom-footer">
        <div className="ecom-footer__inner">
          <div className="ecom-footer__brand">
            <h3>NUVO<span>RA</span></h3>
            <p>
              Contemporary African fashion for the modern world.
              Handcrafted pieces that celebrate heritage and innovation.
            </p>
          </div>

          <div className="ecom-footer__col">
            <h4>Shop</h4>
            <ul>
              <li><Link to="/ecommerce/shop">All Products</Link></li>
              <li><Link to="/ecommerce/shop">Dresses</Link></li>
              <li><Link to="/ecommerce/shop">Tops</Link></li>
              <li><Link to="/ecommerce/shop">Accessories</Link></li>
            </ul>
          </div>

          <div className="ecom-footer__col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/ecommerce/about">Our Story</Link></li>
              <li><Link to="/ecommerce/lookbook">Lookbook</Link></li>
              <li><Link to="/ecommerce/contact">Contact</Link></li>
              <li><Link to="/ecommerce/contact">Returns</Link></li>
            </ul>
          </div>

          <div className="ecom-footer__col">
            <h4>Contact</h4>
            <ul>
              <li>24 Awolowo Rd, Ikoyi, Lagos</li>
              <li>+234 (0) 812 345 6789</li>
              <li>hello@nuvora.ng</li>
            </ul>
          </div>
        </div>

        <div className="ecom-footer__bottom">
          &copy; 2025 Nuvora &middot; Built by Anyadike Divine
        </div>
      </footer>

      <BackToShowcase />
    </div>
  );
}
