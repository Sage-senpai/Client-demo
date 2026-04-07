import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { classes, categories } from '../data/classesData';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const timeSlots = [
  '05:30 AM',
  '06:00 AM',
  '06:30 AM',
  '07:00 AM',
  '07:30 AM',
  '08:00 AM',
  '10:00 AM',
  '12:00 PM',
  '05:30 PM',
  '06:00 PM',
  '06:30 PM',
  '07:00 PM',
];

function getClassForCell(day: string, time: string, filterCategory: string) {
  return classes.find((cls) => {
    const matchDay = cls.days.includes(day);
    const matchTime = cls.time === time;
    const matchCategory = filterCategory === 'All' || cls.category === filterCategory;
    return matchDay && matchTime && matchCategory;
  });
}

export default function Schedule() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="fit-schedule-page">
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
            Weekly Schedule
          </motion.h1>
          <motion.p
            className="fit-page-header__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Plan your week. Every class, every time slot, all in one view.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* ── Category Filter ── */}
      <AnimatedSection className="fit-filters">
        <div className="fit-filters__inner">
          <div className="fit-filters__group">
            <p className="fit-filters__label">Filter by Category</p>
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
        </div>
      </AnimatedSection>

      {/* ── Schedule Grid ── */}
      <AnimatedSection className="fit-schedule">
        <div className="fit-schedule__wrapper">
          <table className="fit-schedule__table">
            <thead>
              <tr>
                <th className="fit-schedule__time-header">Time</th>
                {daysOfWeek.map((day) => (
                  <th className="fit-schedule__day-header" key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time) => (
                <tr key={time}>
                  <td className="fit-schedule__time-cell">{time}</td>
                  {daysOfWeek.map((day) => {
                    const cls = getClassForCell(day, time, activeCategory);
                    return (
                      <td
                        className={`fit-schedule__cell ${cls ? 'fit-schedule__cell--occupied' : ''}`}
                        key={`${day}-${time}`}
                      >
                        {cls && (
                          <div className="fit-schedule__class">
                            <span className="fit-schedule__class-name">{cls.name}</span>
                            <span className="fit-schedule__class-instructor">{cls.instructor}</span>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedSection>
    </div>
  );
}
