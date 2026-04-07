import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { trainers } from '../data/classesData';

export default function Trainers() {
  return (
    <div className="fit-trainers-page">
      {/* ── Page Header ── */}
      <section className="fit-page-header">
        <AnimatedSection className="fit-page-header__inner">
          <motion.h1
            className="fit-page-header__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Our Trainers
          </motion.h1>
          <motion.p
            className="fit-page-header__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Six certified professionals who live and breathe fitness. Your goals are their mission.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* ── Trainer Cards ── */}
      <AnimatedSection className="fit-trainers-grid">
        <div className="fit-trainers-grid__inner">
          {trainers.map((trainer, i) => (
            <div className="fit-trainer-card" key={i}>
              <img
                className="fit-trainer-card__photo"
                src={trainer.image}
                alt={trainer.name}
                loading="lazy"
              />
              <div className="fit-trainer-card__body">
                <h3 className="fit-trainer-card__name">{trainer.name}</h3>
                <p className="fit-trainer-card__specialty">{trainer.specialty}</p>
                <div className="fit-trainer-card__certs">
                  {trainer.certifications.split(', ').map((cert) => (
                    <span className="fit-trainer-card__cert-pill" key={cert}>{cert}</span>
                  ))}
                </div>
                <p className="fit-trainer-card__bio">{trainer.bio}</p>
                <Link to="/fitness/book">
                  <motion.button className="fit-trainer-card__btn" {...buttonHover}>
                    Train with {trainer.name.split(' ')[0]}
                  </motion.button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
