import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { doctors } from '../data/medicalData';

export default function Doctors() {
  return (
    <div className="med-doctors-page-wrap">
      {/* ── Page Header ── */}
      <section className="med-page-header">
        <AnimatedSection className="med-page-header__inner">
          <motion.h1
            className="med-page-header__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Our Doctors
          </motion.h1>
          <motion.p
            className="med-page-header__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Board-certified specialists with decades of combined experience,
            committed to delivering personalized, compassionate care.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* ── All Doctors ── */}
      <section className="med-doctors-page">
        <AnimatedSection className="med-doctors-page__inner">
          <div className="med-doctors-page__grid">
            {doctors.map((doc) => (
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
                  <p className="med-doctor-card__qualifications">{doc.qualifications}</p>
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
                  <p className="med-doctor-card__bio">{doc.bio}</p>
                  <Link to="/healthcare/book">
                    <motion.button className="med-doctor-card__btn" {...buttonHover}>
                      Book with {doc.name.split(' ')[0]} {doc.name.split(' ').slice(-1)[0]}
                    </motion.button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
