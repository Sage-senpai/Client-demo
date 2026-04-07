import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { classes, trainers } from '../data/classesData';

const previewClasses = classes.slice(0, 4);
const previewTrainers = trainers.slice(0, 3);

export default function Home() {
  return (
    <div className="fit-home">
      {/* ── Hero ── */}
      <section className="fit-hero">
        <div
          className="fit-hero__bg"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85)',
          }}
        />
        <div className="fit-hero__overlay" />
        <div className="fit-hero__content">
          <motion.h1
            className="fit-hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            PUSH BEYOND.<br />EVERY. SINGLE. DAY.
          </motion.h1>
          <motion.p
            className="fit-hero__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Lagos&apos; premier fitness destination. World-class equipment, expert coaching,
            and a community that pushes you to be your best.
          </motion.p>
          <motion.div
            className="fit-hero__ctas"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/fitness/membership">
              <motion.button className="fit-hero__btn-primary" {...buttonHover}>
                Join Pulse Athletics
              </motion.button>
            </Link>
            <Link to="/fitness/classes">
              <motion.button className="fit-hero__btn-outline" {...buttonHover}>
                View Classes
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <AnimatedSection className="fit-stats">
        <div className="fit-stats__grid">
          <CounterStat end={2400} suffix="+" label="Members" />
          <CounterStat end={50} suffix="+" label="Classes/Week" />
          <CounterStat end={12} suffix="" label="Expert Trainers" />
          <CounterStat end={17} suffix="hrs" label="Daily Hours (6AM-11PM)" />
        </div>
      </AnimatedSection>

      {/* ── Our Classes Preview ── */}
      <section className="fit-classes-preview">
        <AnimatedSection className="fit-classes-preview__inner">
          <p className="section-label">Train Your Way</p>
          <h2 className="fit-classes-preview__heading">Our Classes</h2>
          <p className="fit-classes-preview__subtitle">
            From heavy lifts to dance cardio — find a class that matches your energy.
          </p>
          <div className="fit-classes-preview__grid">
            {previewClasses.map((cls) => (
              <div className="fit-class-card" key={cls.id}>
                <div className="fit-class-card__header">
                  <h3 className="fit-class-card__name">{cls.name}</h3>
                  <span className={`fit-class-card__intensity fit-class-card__intensity--${cls.intensity.toLowerCase().replace(/\s/g, '-')}`}>
                    {cls.intensity}
                  </span>
                </div>
                <p className="fit-class-card__instructor">{cls.instructor}</p>
                <p className="fit-class-card__duration">{cls.duration}</p>
                <p className="fit-class-card__description">{cls.description}</p>
                <Link to="/fitness/classes" className="fit-class-card__link">
                  View Schedule &rarr;
                </Link>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Trainers Preview ── */}
      <section className="fit-trainers-preview">
        <AnimatedSection className="fit-trainers-preview__inner">
          <p className="section-label">Expert Coaching</p>
          <h2 className="fit-trainers-preview__heading">Meet Our Trainers</h2>
          <div className="fit-trainers-preview__grid">
            {previewTrainers.map((trainer, i) => (
              <Link to="/fitness/trainers" key={i} className="fit-trainers-preview__card">
                <img
                  className="fit-trainers-preview__card-photo"
                  src={trainer.image}
                  alt={trainer.name}
                  loading="lazy"
                />
                <h3 className="fit-trainers-preview__card-name">{trainer.name}</h3>
                <p className="fit-trainers-preview__card-specialty">{trainer.specialty}</p>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Gym Floor Gallery ── */}
      <section className="fit-gallery-strip">
        <AnimatedSection className="fit-gallery-strip__inner">
          <div className="fit-gallery-strip__grid">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80"
              alt="Gym floor"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
              alt="Weights area"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"
              alt="Training session"
              loading="lazy"
            />
          </div>
        </AnimatedSection>
      </section>

      {/* ── Membership CTA ── */}
      <section className="fit-membership-cta">
        <AnimatedSection className="fit-membership-cta__inner">
          <h2 className="fit-membership-cta__heading">Ready to transform?</h2>
          <p className="fit-membership-cta__text">
            Join a community of over 2,400 members who chose to invest in themselves.
            No contracts, no excuses — just results.
          </p>
          <Link to="/fitness/membership">
            <motion.button className="fit-membership-cta__btn" {...buttonHover}>
              View Membership Plans &rarr;
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
