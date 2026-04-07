import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { classes, categories } from '../data/classesData';

const intensityLevels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'] as const;

export default function Classes() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIntensity, setActiveIntensity] = useState<string>('All');

  const filtered = classes.filter((cls) => {
    const catMatch = activeCategory === 'All' || cls.category === activeCategory;
    const intMatch = activeIntensity === 'All' || cls.intensity === activeIntensity;
    return catMatch && intMatch;
  });

  return (
    <div className="fit-classes-page">
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
            Our Classes
          </motion.h1>
          <motion.p
            className="fit-page-header__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            12 classes across 6 disciplines. Find the one that sets your soul on fire.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* ── Filters ── */}
      <AnimatedSection className="fit-filters">
        <div className="fit-filters__inner">
          <div className="fit-filters__group">
            <p className="fit-filters__label">Category</p>
            <div className="fit-filters__pills">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  className={`fit-filters__pill ${activeCategory === cat ? 'fit-filters__pill--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  {...buttonHover}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
          <div className="fit-filters__group">
            <p className="fit-filters__label">Intensity</p>
            <div className="fit-filters__pills">
              {intensityLevels.map((level) => (
                <motion.button
                  key={level}
                  className={`fit-filters__pill ${activeIntensity === level ? 'fit-filters__pill--active' : ''}`}
                  onClick={() => setActiveIntensity(level)}
                  {...buttonHover}
                >
                  {level}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Class Cards Grid ── */}
      <AnimatedSection className="fit-classes-grid">
        <div className="fit-classes-grid__inner">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${activeIntensity}`}
              className="fit-classes-grid__cards"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.length === 0 && (
                <p className="fit-classes-grid__empty">
                  No classes match your filters. Try a different combination.
                </p>
              )}
              {filtered.map((cls) => (
                <div className="fit-class-card fit-class-card--full" key={cls.id}>
                  <div className="fit-class-card__header">
                    <h3 className="fit-class-card__name">{cls.name}</h3>
                    <span className="fit-class-card__category-pill">{cls.category}</span>
                  </div>
                  <p className="fit-class-card__instructor">{cls.instructor}</p>
                  <div className="fit-class-card__meta">
                    <span className="fit-class-card__duration">{cls.duration}</span>
                    <span className={`fit-class-card__intensity fit-class-card__intensity--${cls.intensity.toLowerCase().replace(/\s/g, '-')}`}>
                      {cls.intensity}
                    </span>
                  </div>
                  <p className="fit-class-card__description">{cls.description}</p>
                  <div className="fit-class-card__days">
                    {cls.days.map((day) => (
                      <span className="fit-class-card__day-pill" key={day}>{day}</span>
                    ))}
                  </div>
                  <div className="fit-class-card__footer">
                    <span className="fit-class-card__spots">{cls.spots} spots remaining</span>
                    <Link to="/fitness/book">
                      <motion.button className="fit-class-card__book-btn" {...buttonHover}>
                        Book Class &rarr;
                      </motion.button>
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </AnimatedSection>
    </div>
  );
}
