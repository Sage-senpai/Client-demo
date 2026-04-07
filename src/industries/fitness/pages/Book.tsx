import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { classes } from '../data/classesData';

const stepLabels = ['Select Class', 'Date & Time', 'Your Details'];

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

const experienceLevels = ['Complete Beginner', '0-6 Months', '6-12 Months', '1-2 Years', '2+ Years'];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
  }),
};

export default function Book() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [selectedClass, setSelectedClass] = useState<(typeof classes)[0] | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [details, setDetails] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    conditions: '',
  });

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);

  const goNext = () => {
    setDirection(1);
    setStep((s) => s + 1);
  };

  const goBack = () => {
    setDirection(-1);
    setStep((s) => s - 1);
  };

  const handleSubmit = () => {
    if (!details.name || !details.email || !details.phone) {
      toast.error('Please fill in all required fields.');
      return;
    }
    toast.success('Class booked! See you on the mat.');
    setStep(1);
    setSelectedClass(null);
    setSelectedDate(null);
    setSelectedTime('');
    setDetails({ name: '', email: '', phone: '', experience: '', conditions: '' });
  };

  return (
    <div className="fit-book-page">
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
            Book a Class
          </motion.h1>
          <motion.p
            className="fit-page-header__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Three easy steps to secure your spot.
          </motion.p>
        </AnimatedSection>
      </section>

      <AnimatedSection className="fit-book">
        <div className="fit-book__inner">
          {/* ── Progress Stepper ── */}
          <div className="fit-book__stepper">
            {stepLabels.map((label, i) => {
              const stepNum = i + 1;
              const isDone = step > stepNum;
              const isActive = step === stepNum;
              return (
                <div className="fit-book__stepper-item" key={label}>
                  {i > 0 && (
                    <div className={`fit-book__stepper-line ${isDone ? 'fit-book__stepper-line--done' : ''}`} />
                  )}
                  <div
                    className={`fit-book__stepper-circle ${
                      isActive
                        ? 'fit-book__stepper-circle--active'
                        : isDone
                          ? 'fit-book__stepper-circle--done'
                          : ''
                    }`}
                  >
                    {isDone ? '✓' : stepNum}
                  </div>
                  <span className="fit-book__stepper-label">{label}</span>
                </div>
              );
            })}
          </div>

          {/* ── Step Content ── */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <div className="fit-book__step">
                {/* ── Step 1: Select Class ── */}
                {step === 1 && (
                  <>
                    <h2 className="fit-book__step-heading">Choose Your Class</h2>
                    <div className="fit-book__class-grid">
                      {classes.map((cls) => (
                        <motion.div
                          key={cls.id}
                          className={`fit-book__class-card ${
                            selectedClass?.id === cls.id ? 'fit-book__class-card--selected' : ''
                          }`}
                          onClick={() => setSelectedClass(cls)}
                          {...buttonHover}
                        >
                          <h4 className="fit-book__class-card-name">{cls.name}</h4>
                          <span className="fit-book__class-card-category">{cls.category}</span>
                          <p className="fit-book__class-card-instructor">{cls.instructor}</p>
                          <div className="fit-book__class-card-meta">
                            <span>{cls.duration}</span>
                            <span className={`fit-class-card__intensity fit-class-card__intensity--${cls.intensity.toLowerCase().replace(/\s/g, '-')}`}>
                              {cls.intensity}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    {selectedClass && (
                      <div className="fit-book__nav">
                        <motion.button
                          className="fit-book__nav-btn"
                          onClick={goNext}
                          {...buttonHover}
                        >
                          Next &mdash; Date &amp; Time
                        </motion.button>
                      </div>
                    )}
                  </>
                )}

                {/* ── Step 2: Date & Time ── */}
                {step === 2 && (
                  <>
                    <button className="fit-book__back" onClick={goBack}>
                      &larr; Back to Classes
                    </button>
                    <h2 className="fit-book__step-heading">Select Date &amp; Time</h2>
                    <div className="fit-book__datetime">
                      <div className="fit-book__datetime-calendar">
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date: Date | null) => setSelectedDate(date)}
                          minDate={new Date()}
                          maxDate={maxDate}
                          inline
                          calendarStartDay={1}
                        />
                      </div>
                      {selectedDate && (
                        <div className="fit-book__datetime-slots">
                          <p className="fit-book__datetime-label">
                            Preferred time for{' '}
                            {selectedDate.toLocaleDateString('en-NG', {
                              weekday: 'long',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </p>
                          <div className="fit-book__datetime-grid">
                            {timeSlots.map((slot) => (
                              <button
                                key={slot}
                                className={`fit-book__time-slot ${
                                  selectedTime === slot ? 'fit-book__time-slot--selected' : ''
                                }`}
                                onClick={() => setSelectedTime(slot)}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    {selectedDate && selectedTime && (
                      <div className="fit-book__nav">
                        <motion.button
                          className="fit-book__nav-btn"
                          onClick={goNext}
                          {...buttonHover}
                        >
                          Next &mdash; Your Details
                        </motion.button>
                      </div>
                    )}
                  </>
                )}

                {/* ── Step 3: Your Details ── */}
                {step === 3 && (
                  <>
                    <button className="fit-book__back" onClick={goBack}>
                      &larr; Back to Date &amp; Time
                    </button>
                    <h2 className="fit-book__step-heading">Your Details</h2>
                    <div className="fit-book__form">
                      <div className="fit-book__form-row">
                        <div className="fit-book__form-field">
                          <label htmlFor="book-name">Full Name *</label>
                          <input
                            id="book-name"
                            type="text"
                            placeholder="Your full name"
                            value={details.name}
                            onChange={(e) => setDetails({ ...details, name: e.target.value })}
                          />
                        </div>
                        <div className="fit-book__form-field">
                          <label htmlFor="book-email">Email *</label>
                          <input
                            id="book-email"
                            type="email"
                            placeholder="you@email.com"
                            value={details.email}
                            onChange={(e) => setDetails({ ...details, email: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="fit-book__form-row">
                        <div className="fit-book__form-field">
                          <label htmlFor="book-phone">Phone Number *</label>
                          <input
                            id="book-phone"
                            type="tel"
                            placeholder="+234..."
                            value={details.phone}
                            onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                          />
                        </div>
                        <div className="fit-book__form-field">
                          <label htmlFor="book-experience">Experience Level</label>
                          <select
                            id="book-experience"
                            value={details.experience}
                            onChange={(e) => setDetails({ ...details, experience: e.target.value })}
                          >
                            <option value="">Select your level</option>
                            {experienceLevels.map((level) => (
                              <option key={level} value={level}>{level}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="fit-book__form-field">
                        <label htmlFor="book-conditions">Health Conditions / Notes</label>
                        <textarea
                          id="book-conditions"
                          placeholder="Any injuries, medical conditions, or special requirements we should know about..."
                          value={details.conditions}
                          onChange={(e) => setDetails({ ...details, conditions: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="fit-book__nav">
                      <motion.button
                        className="fit-book__nav-btn fit-book__nav-btn--submit"
                        onClick={handleSubmit}
                        {...buttonHover}
                      >
                        Book Class
                      </motion.button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </AnimatedSection>
    </div>
  );
}
