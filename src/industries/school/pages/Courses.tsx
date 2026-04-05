import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import coursesData from '../data/coursesData';
import type { Course } from '../data/coursesData';

const departments = ['All', 'Technology', 'Business', 'Medicine', 'Law', 'Arts', 'Engineering'] as const;
const durations = ['All', 'Short Course', 'Certificate', 'Diploma', 'Degree'] as const;
const formats = ['All', 'In-Person', 'Online', 'Hybrid'] as const;

const formatIcons: Record<string, string> = {
  'In-Person': '\uD83C\uDFEB',
  'Online': '\uD83D\uDCBB',
  'Hybrid': '\uD83D\uDD04',
};

const INITIAL_VISIBLE = 6;

export default function Courses() {
  const [department, setDepartment] = useState<string>('All');
  const [duration, setDuration] = useState<string>('All');
  const [format, setFormat] = useState<string>('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    return coursesData.filter((c: Course) => {
      if (department !== 'All' && c.department !== department) return false;
      if (duration !== 'All' && c.duration !== duration) return false;
      if (format !== 'All' && c.format !== format) return false;
      return true;
    });
  }, [department, duration, format]);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);

  return (
    <div>
      {/* ── Page Header ── */}
      <section className="sch-page-header">
        <h1 className="sch-page-header__title">Our Programmes</h1>
        <p className="sch-page-header__subtitle">
          Explore our diverse range of degree, diploma, certificate, and short courses across six departments
        </p>
      </section>

      {/* ── Courses Grid ── */}
      <AnimatedSection className="sch-courses">
        <div className="sch-courses__layout">
          {/* Sidebar */}
          <aside className="sch-courses__sidebar">
            {/* Department Filter */}
            <div className="sch-courses__filter-group">
              <span className="sch-courses__filter-label">Department</span>
              <select
                className="sch-courses__filter-select"
                value={department}
                onChange={(e) => { setDepartment(e.target.value); setShowAll(false); }}
              >
                {departments.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <div className="sch-courses__filter-buttons">
                {departments.map((d) => (
                  <button
                    key={d}
                    className={`sch-courses__filter-btn ${department === d ? 'sch-courses__filter-btn--active' : ''}`}
                    onClick={() => { setDepartment(d); setShowAll(false); }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Filter */}
            <div className="sch-courses__filter-group">
              <span className="sch-courses__filter-label">Duration</span>
              <select
                className="sch-courses__filter-select"
                value={duration}
                onChange={(e) => { setDuration(e.target.value); setShowAll(false); }}
              >
                {durations.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <div className="sch-courses__filter-buttons">
                {durations.map((d) => (
                  <button
                    key={d}
                    className={`sch-courses__filter-btn ${duration === d ? 'sch-courses__filter-btn--active' : ''}`}
                    onClick={() => { setDuration(d); setShowAll(false); }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Format Filter */}
            <div className="sch-courses__filter-group">
              <span className="sch-courses__filter-label">Format</span>
              <select
                className="sch-courses__filter-select"
                value={format}
                onChange={(e) => { setFormat(e.target.value); setShowAll(false); }}
              >
                {formats.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
              <div className="sch-courses__filter-buttons">
                {formats.map((f) => (
                  <button
                    key={f}
                    className={`sch-courses__filter-btn ${format === f ? 'sch-courses__filter-btn--active' : ''}`}
                    onClick={() => { setFormat(f); setShowAll(false); }}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="sch-courses__grid">
            {visible.length === 0 && (
              <div className="sch-courses__empty">
                No programmes match your current filters. Try adjusting your selection.
              </div>
            )}

            {visible.map((course, i) => (
              <motion.div
                key={course.id}
                className="sch-courses__card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <img
                  src={course.image}
                  alt={course.name}
                  className="sch-courses__card-img"
                  loading="lazy"
                />
                <div className="sch-courses__card-body">
                  <span className="sch-courses__card-dept">{course.department}</span>
                  <h3 className="sch-courses__card-name">{course.name}</h3>
                  <div className="sch-courses__card-meta">
                    <span>{course.durationLabel}</span>
                    <span>{formatIcons[course.format]} {course.format}</span>
                  </div>
                  <p className="sch-courses__card-desc">{course.description}</p>
                  <div className="sch-courses__card-footer">
                    <span className="sch-courses__card-fee">{course.fee}</span>
                    <motion.button className="sch-courses__card-enroll" {...buttonHover}>
                      Enroll &rarr;
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}

            {!showAll && filtered.length > INITIAL_VISIBLE && (
              <div className="sch-courses__load-more-wrap">
                <motion.button
                  className="sch-courses__load-more"
                  onClick={() => setShowAll(true)}
                  {...buttonHover}
                >
                  Load More Programmes
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
