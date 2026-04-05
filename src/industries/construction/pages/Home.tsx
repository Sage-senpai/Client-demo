import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';
import { fadeUp, buttonHover } from '../../../styles/_animations';

const featuredProjects = [
  {
    name: 'Eko Atlantic Tower C',
    location: 'Lagos, Nigeria',
    sector: 'Commercial',
    image: 'https://images.unsplash.com/photo-1581094794329-c811110e5f8b?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Dangote Refinery Access Road',
    location: 'Ibeju-Lekki, Lagos',
    sector: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1590644616948-36c7c06e7f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Abuja International School',
    location: 'Abuja, FCT',
    sector: 'Institutional',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80',
  },
];

const services = [
  { icon: '🏗️', name: 'Commercial Construction', desc: 'Office towers, retail centres, and mixed-use developments delivered on time.' },
  { icon: '🏠', name: 'Residential Development', desc: 'From luxury homes to large-scale estate projects across Nigeria.' },
  { icon: '🌉', name: 'Road & Bridge', desc: 'Highways, bridges, and transport infrastructure built to last decades.' },
  { icon: '🏭', name: 'Industrial Facilities', desc: 'Factories, warehouses, and processing plants for all sectors.' },
  { icon: '🔧', name: 'Renovation & Restoration', desc: 'Breathing new life into ageing structures with modern engineering.' },
  { icon: '📋', name: 'Project Management', desc: 'End-to-end construction project management and consultancy.' },
];

export default function Home() {
  return (
    <div className="con-home">
      {/* ── Hero ── */}
      <section
        className="con-hero"
        role="img"
        aria-label="Construction site with cranes at sunset"
      >
        <div className="con-hero__overlay" />
        <div className="con-hero__content">
          <motion.h1
            className="con-hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We Build<br />What Lasts.
          </motion.h1>
          <motion.p
            className="con-hero__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Bastion Group is a leading civil and structural engineering firm delivering
            world-class infrastructure across Nigeria since 2007.
          </motion.p>
          <motion.div
            className="con-hero__ctas"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/construction/projects">
              <motion.button className="con-hero__btn-primary" {...buttonHover}>
                Our Projects
              </motion.button>
            </Link>
            <Link to="/construction/quote">
              <motion.button className="con-hero__btn-outline" {...buttonHover}>
                Get a Quote
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="con-stats">
        <div className="con-stats__inner">
          <CounterStat end={18} suffix="" label="Years of Experience" />
          <CounterStat end={200} suffix="+" label="Projects Delivered" />
          <CounterStat end={12} suffix="" label="States Covered" />
          <CounterStat end={100} suffix="%" label="On-Budget Delivery" />
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <AnimatedSection className="con-section">
        <hr className="con-accent-bar" />
        <h2 className="con-section-title">Featured Projects</h2>
        <p className="con-section-subtitle">
          A selection of landmark projects that showcase our engineering capabilities
          across diverse sectors.
        </p>
        <div className="con-projects-showcase">
          {featuredProjects.map((project) => (
            <Link to="/construction/projects" key={project.name} className="con-project-card">
              <img src={project.image} alt={project.name} className="con-project-card__image" />
              <div className="con-project-card__overlay">
                <span className="con-project-card__sector">{project.sector}</span>
                <h3 className="con-project-card__name">{project.name}</h3>
                <p className="con-project-card__location">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      {/* ── Services Grid ── */}
      <AnimatedSection className="con-section con-section--warm">
        <div className="con-section__inner">
          <hr className="con-accent-bar" />
          <h2 className="con-section-title">Our Services</h2>
          <p className="con-section-subtitle">
            Comprehensive construction and engineering solutions for every scale.
          </p>
          <div className="con-services-grid">
            {services.map((service) => (
              <div className="con-service-card" key={service.name}>
                <div className="con-service-card__icon">{service.icon}</div>
                <h3 className="con-service-card__name">{service.name}</h3>
                <p className="con-service-card__desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Certifications Strip ── */}
      <AnimatedSection className="con-certs">
        <div className="con-certs__inner">
          <h3 className="con-certs__title">Accredited &amp; Certified</h3>
          <div className="con-certs__badges">
            <span className="con-certs__badge">SON Certified</span>
            <span className="con-certs__badge">CORBON Registered</span>
            <span className="con-certs__badge">NAEC Member</span>
          </div>
        </div>
      </AnimatedSection>

      {/* ── CTA Strip ── */}
      <AnimatedSection className="con-cta-strip">
        <h2 className="con-cta-strip__title">Start Your Project</h2>
        <p className="con-cta-strip__text">
          Ready to build? Get a detailed quote from our engineering team within 24 hours.
        </p>
        <Link to="/construction/quote">
          <motion.button className="con-cta-strip__btn" {...buttonHover}>
            Request a Quote &rarr;
          </motion.button>
        </Link>
      </AnimatedSection>
    </div>
  );
}
