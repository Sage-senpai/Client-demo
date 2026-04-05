import { useState, useEffect } from 'react';
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from '../../components/shared/ScrollToTop';
import BackToShowcase from '../../components/shared/BackToShowcase';
import { pageTransition } from '../../styles/_animations';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import Team from './pages/Team';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import './styles/tech.scss';

const navLinks = [
  { path: '/tech', label: 'Home' },
  { path: '/tech/services', label: 'Services' },
  { path: '/tech/work', label: 'Case Studies' },
  { path: '/tech/team', label: 'Team' },
  { path: '/tech/blog', label: 'Blog' },
  { path: '/tech/careers', label: 'Careers' },
];

export default function TechApp() {
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
    <div className="tech-app">
      <Toaster position="top-right" />
      <ScrollToTop />
      <BackToShowcase />

      {/* ── Navbar ── */}
      <nav className={`tech-nav ${scrolled ? 'tech-nav--scrolled' : ''}`}>
        <div className="tech-nav__inner">
          <Link to="/tech" className="tech-nav__logo">
            Axiom<span>Labs</span>
          </Link>

          <ul className="tech-nav__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/tech'}
                  className={({ isActive }) =>
                    `tech-nav__link ${isActive ? 'tech-nav__link--active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link to="/tech/contact">
            <button className="tech-nav__cta">Let&rsquo;s Talk</button>
          </Link>

          <button
            className={`tech-nav__hamburger ${mobileOpen ? 'tech-nav__hamburger--open' : ''}`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`tech-nav__mobile ${mobileOpen ? 'tech-nav__mobile--open' : ''}`}>
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              {link.label}
            </Link>
          ))}
          <Link to="/tech/contact">
            <button className="tech-nav__cta">Let&rsquo;s Talk</button>
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
            <Route path="services" element={<Services />} />
            <Route path="work" element={<Work />} />
            <Route path="team" element={<Team />} />
            <Route path="blog" element={<Blog />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      {/* ── Footer ── */}
      <footer className="tech-footer">
        <div className="tech-footer__inner">
          <div className="tech-footer__grid">
            <div>
              <div className="tech-footer__brand">
                Axiom<span>Labs</span>
              </div>
              <p className="tech-footer__brand-text">
                Full-stack software engineering and AI consultancy based in Lagos, Nigeria.
                We build systems that scale.
              </p>
            </div>

            <div>
              <h4 className="tech-footer__col-title">Company</h4>
              <ul className="tech-footer__col-links">
                <li><Link to="/tech">Home</Link></li>
                <li><Link to="/tech/services">Services</Link></li>
                <li><Link to="/tech/work">Case Studies</Link></li>
                <li><Link to="/tech/team">Team</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="tech-footer__col-title">Resources</h4>
              <ul className="tech-footer__col-links">
                <li><Link to="/tech/blog">Blog</Link></li>
                <li><Link to="/tech/careers">Careers</Link></li>
                <li><Link to="/tech/contact">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="tech-footer__col-title">Connect</h4>
              <ul className="tech-footer__col-links">
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="mailto:hello@axiomlabs.ng">hello@axiomlabs.ng</a></li>
              </ul>
            </div>
          </div>

          <div className="tech-footer__bar">
            <p className="tech-footer__copy">
              &copy; 2025 Axiom Labs &middot; Built by Anyadike Divine
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
