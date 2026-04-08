import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { services, doctors } from '../data/medicalData';

const previewServices = services.slice(0, 6);
const previewDoctors = doctors.slice(0, 4);

export default function Home() {
  return (
    <div className="med-home">
      {/* ── Hero ── */}
      <section className="med-hero">
        <div
          className="med-hero__bg"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1400&q=85)',
          }}
        />
        <div className="med-hero__overlay" />
        <div className="med-hero__content">
          <motion.span
            className="med-hero__badge"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Trusted Healthcare Since 2010
          </motion.span>
          <motion.h1
            className="med-hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Your Health,<br />Our Priority
          </motion.h1>
          <motion.p
            className="med-hero__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Solace Medical Centre delivers compassionate, world-class healthcare
            with cutting-edge facilities and a team of specialists committed to
            your well-being.
          </motion.p>
          <motion.div
            className="med-hero__ctas"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/healthcare/book">
              <motion.button className="med-hero__btn-primary" {...buttonHover}>
                Book Appointment
              </motion.button>
            </Link>
            <Link to="/healthcare/services">
              <motion.button className="med-hero__btn-outline" {...buttonHover}>
                Our Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <AnimatedSection className="med-stats">
        <div className="med-stats__grid">
          <CounterStat end={15000} suffix="+" label="Patients Served" />
          <CounterStat end={45} suffix="" label="Specialist Doctors" />
          <CounterStat end={12} suffix="" label="Departments" />
          <CounterStat end={24} suffix="/7" label="Emergency Care" />
        </div>
      </AnimatedSection>

      {/* ── Services Preview ── */}
      <section className="med-services-preview">
        <AnimatedSection className="med-services-preview__inner">
          <p className="section-label">What We Offer</p>
          <h2 className="med-services-preview__heading">Our Services</h2>
          <p className="med-services-preview__subtitle">
            Comprehensive healthcare services across 12 departments, all under one roof.
          </p>
          <div className="med-services-preview__grid">
            {previewServices.map((service) => (
              <div className="med-service-card" key={service.id}>
                <span className="med-service-card__icon">{service.icon}</span>
                <h3 className="med-service-card__name">{service.name}</h3>
                <p className="med-service-card__dept">{service.department}</p>
                <p className="med-service-card__desc">{service.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Doctors Preview ── */}
      <section className="med-doctors-preview">
        <AnimatedSection className="med-doctors-preview__inner">
          <p className="section-label">Expert Care</p>
          <h2 className="med-doctors-preview__heading">Meet Our Doctors</h2>
          <p className="med-doctors-preview__subtitle">
            A dedicated team of board-certified specialists providing personalized care.
          </p>
          <div className="med-doctors-preview__grid">
            {previewDoctors.map((doc) => (
              <div className="med-doctor-card" key={doc.id}>
                <img
                  className="med-doctor-card__photo"
                  src={doc.image}
                  alt={doc.name}
                  loading="lazy"
                />
                <div className="med-doctor-card__body">
                  <h3 className="med-doctor-card__name">{doc.name}</h3>
                  <p className="med-doctor-card__specialty">{doc.specialty}</p>
                  <p className="med-doctor-card__experience">
                    {doc.experience} years experience
                  </p>
                  <div className="med-doctor-card__availability">
                    <span
                      className={`med-doctor-card__dot med-doctor-card__dot--${doc.availability.toLowerCase()}`}
                    />
                    <span className="med-doctor-card__avail-label">
                      {doc.availability}
                    </span>
                  </div>
                  <Link to="/healthcare/book">
                    <motion.button className="med-doctor-card__btn" {...buttonHover}>
                      Book Appointment
                    </motion.button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── CTA Banner ── */}
      <section className="med-cta-banner">
        <AnimatedSection className="med-cta-banner__inner">
          <h2 className="med-cta-banner__heading">
            Need to see a doctor?
          </h2>
          <p className="med-cta-banner__text">
            Book an appointment online in minutes. Same-day slots available
            for urgent consultations. Your well-being cannot wait.
          </p>
          <Link to="/healthcare/book">
            <motion.button className="med-cta-banner__btn" {...buttonHover}>
              Book Appointment Now &rarr;
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
