import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollToTop from '../../components/shared/ScrollToTop';
import BackToShowcase from '../../components/shared/BackToShowcase';
import { pageTransition, buttonHover } from '../../styles/_animations';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Campus from './pages/Campus';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './styles/school.scss';

const navLinks = [
  { label: 'Home', path: '/school' },
  { label: 'Courses', path: '/school/courses' },
  { label: 'Admissions', path: '/school/admissions' },
  { label: 'Faculty', path: '/school/faculty' },
  { label: 'Campus', path: '/school/campus' },
  { label: 'Blog', path: '/school/blog' },
  { label: 'Contact', path: '/school/contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/school' || location.pathname === '/school/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navClass = `sch-nav ${scrolled || !isHome ? 'sch-nav--scrolled' : 'sch-nav--transparent'}`;

  return (
    <>
      <nav className={navClass}>
        <div className="sch-nav__inner">
          <Link to="/school" className="sch-nav__logo">
            Meridian<span className="sch-nav__logo-accent"> Institute</span>
          </Link>

          <ul className="sch-nav__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="sch-nav__link">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/school/admissions">
                <motion.button className="sch-nav__cta" {...buttonHover}>
                  Apply Now
                </motion.button>
              </Link>
            </li>
          </ul>

          <button
            className="sch-nav__hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
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
            className="sch-mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button className="sch-mobile-nav__close" onClick={() => setMobileOpen(false)}>
              ✕
            </button>
            <ul className="sch-mobile-nav__links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="sch-mobile-nav__link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/school/admissions" onClick={() => setMobileOpen(false)}>
              <button className="sch-mobile-nav__cta">Apply Now</button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  return (
    <footer className="sch-footer">
      <div className="sch-footer__inner">
        <div>
          <div className="sch-footer__brand">
            Meridian<span className="sch-footer__brand-accent"> Institute</span>
          </div>
          <p className="sch-footer__desc">
            Shaping Africa's future leaders through world-class education, research, and professional
            development since 1997.
          </p>
        </div>

        <div>
          <h4 className="sch-footer__col-title">Academics</h4>
          <ul className="sch-footer__col-links">
            <li><Link to="/school/courses" className="sch-footer__col-link">Programmes</Link></li>
            <li><Link to="/school/faculty" className="sch-footer__col-link">Faculty</Link></li>
            <li><Link to="/school/admissions" className="sch-footer__col-link">Admissions</Link></li>
            <li><Link to="/school/campus" className="sch-footer__col-link">Campus Life</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="sch-footer__col-title">Resources</h4>
          <ul className="sch-footer__col-links">
            <li><Link to="/school/blog" className="sch-footer__col-link">News & Blog</Link></li>
            <li><Link to="/school/contact" className="sch-footer__col-link">Contact Us</Link></li>
            <li><span className="sch-footer__col-link">Student Portal</span></li>
            <li><span className="sch-footer__col-link">Library</span></li>
          </ul>
        </div>

        <div>
          <h4 className="sch-footer__col-title">Connect</h4>
          <ul className="sch-footer__col-links">
            <li><span className="sch-footer__col-link">Twitter / X</span></li>
            <li><span className="sch-footer__col-link">LinkedIn</span></li>
            <li><span className="sch-footer__col-link">Instagram</span></li>
            <li><span className="sch-footer__col-link">YouTube</span></li>
          </ul>
        </div>
      </div>

      <div className="sch-footer__bottom">
        &copy; 2025 Meridian Institute &middot; Built by Anyadike Divine
      </div>
    </footer>
  );
}

export default function SchoolApp() {
  const location = useLocation();

  return (
    <div className="school-app">
      <ScrollToTop />
      <Navbar />

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
            <Route path="courses" element={<Courses />} />
            <Route path="admissions" element={<Admissions />} />
            <Route path="faculty" element={<Faculty />} />
            <Route path="campus" element={<Campus />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Footer />
      <BackToShowcase />
    </div>
  );
}
