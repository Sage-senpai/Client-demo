import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { departments, doctors } from '../data/medicalData';

const stepLabels = ['Department', 'Doctor', 'Date & Time', 'Your Details'];

const timeSlots = [
  '08:00 AM',
  '08:30 AM',
  '09:00 AM',
  '09:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '01:00 PM',
  '01:30 PM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
];

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
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState<(typeof doctors)[0] | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [details, setDetails] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 60);

  const filteredDoctors = doctors.filter((d) => d.department === selectedDept);

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
    toast.success(
      `Appointment booked with ${selectedDoctor?.name} on ${selectedDate?.toLocaleDateString('en-NG', { weekday: 'long', month: 'long', day: 'numeric' })} at ${selectedTime}.`
    );
    setStep(1);
    setSelectedDept('');
    setSelectedDoctor(null);
    setSelectedDate(null);
    setSelectedTime('');
    setDetails({ name: '', email: '', phone: '', notes: '' });
  };

  return (
    <div className="med-book-page">
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
            Book an Appointment
          </motion.h1>
          <motion.p
            className="med-page-header__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Four simple steps to secure your consultation with our specialists.
          </motion.p>
        </AnimatedSection>
      </section>

      <AnimatedSection className="med-book">
        <div className="med-book__inner">
          {/* ── Progress Stepper ── */}
          <div className="med-book__stepper">
            {stepLabels.map((label, i) => {
              const stepNum = i + 1;
              const isDone = step > stepNum;
              const isActive = step === stepNum;
              return (
                <div className="med-book__stepper-item" key={label}>
                  {i > 0 && (
                    <div
                      className={`med-book__stepper-line ${
                        isDone ? 'med-book__stepper-line--done' : ''
                      }`}
                    />
                  )}
                  <div
                    className={`med-book__stepper-circle ${
                      isActive
                        ? 'med-book__stepper-circle--active'
                        : isDone
                          ? 'med-book__stepper-circle--done'
                          : ''
                    }`}
                  >
                    {isDone ? '\u2713' : stepNum}
                  </div>
                  <span className="med-book__stepper-label">{label}</span>
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
              <div className="med-book__step">
                {/* ── Step 1: Select Department ── */}
                {step === 1 && (
                  <>
                    <h2 className="med-book__step-heading">Select Department</h2>
                    <div className="med-book__dept-grid">
                      {departments.map((dept) => (
                        <motion.div
                          key={dept}
                          className={`med-book__dept-card ${
                            selectedDept === dept ? 'med-book__dept-card--selected' : ''
                          }`}
                          onClick={() => {
                            setSelectedDept(dept);
                            setSelectedDoctor(null);
                          }}
                          {...buttonHover}
                        >
                          {dept}
                        </motion.div>
                      ))}
                    </div>
                    {selectedDept && (
                      <div className="med-book__nav">
                        <motion.button
                          className="med-book__nav-btn"
                          onClick={goNext}
                          {...buttonHover}
                        >
                          Next &mdash; Select Doctor
                        </motion.button>
                      </div>
                    )}
                  </>
                )}

                {/* ── Step 2: Select Doctor ── */}
                {step === 2 && (
                  <>
                    <button className="med-book__back" onClick={goBack}>
                      &larr; Back to Departments
                    </button>
                    <h2 className="med-book__step-heading">
                      Select a Doctor &mdash; {selectedDept}
                    </h2>
                    {filteredDoctors.length === 0 ? (
                      <p>No doctors currently listed for this department. Please choose a different department.</p>
                    ) : (
                      <div className="med-book__doctor-grid">
                        {filteredDoctors.map((doc) => (
                          <motion.div
                            key={doc.id}
                            className={`med-book__doctor-option ${
                              selectedDoctor?.id === doc.id
                                ? 'med-book__doctor-option--selected'
                                : ''
                            }`}
                            onClick={() => setSelectedDoctor(doc)}
                            {...buttonHover}
                          >
                            <img
                              className="med-book__doctor-option-photo"
                              src={doc.image}
                              alt={doc.name}
                              loading="lazy"
                            />
                            <div className="med-book__doctor-option-info">
                              <h4>{doc.name}</h4>
                              <p>{doc.qualifications}</p>
                              <p>{doc.experience} yrs exp &middot; {doc.availability}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                    {selectedDoctor && (
                      <div className="med-book__nav">
                        <motion.button
                          className="med-book__nav-btn"
                          onClick={goNext}
                          {...buttonHover}
                        >
                          Next &mdash; Date &amp; Time
                        </motion.button>
                      </div>
                    )}
                  </>
                )}

                {/* ── Step 3: Date & Time ── */}
                {step === 3 && (
                  <>
                    <button className="med-book__back" onClick={goBack}>
                      &larr; Back to Doctors
                    </button>
                    <h2 className="med-book__step-heading">Select Date &amp; Time</h2>
                    <div className="med-book__datetime">
                      <div className="med-book__datetime-calendar">
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
                        <div className="med-book__datetime-slots">
                          <p className="med-book__datetime-label">
                            Available slots for{' '}
                            {selectedDate.toLocaleDateString('en-NG', {
                              weekday: 'long',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </p>
                          <div className="med-book__datetime-grid">
                            {timeSlots.map((slot) => (
                              <button
                                key={slot}
                                type="button"
                                className={`med-book__time-slot ${
                                  selectedTime === slot ? 'med-book__time-slot--selected' : ''
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
                      <div className="med-book__nav">
                        <motion.button
                          className="med-book__nav-btn"
                          onClick={goNext}
                          {...buttonHover}
                        >
                          Next &mdash; Your Details
                        </motion.button>
                      </div>
                    )}
                  </>
                )}

                {/* ── Step 4: Patient Details ── */}
                {step === 4 && (
                  <>
                    <button className="med-book__back" onClick={goBack}>
                      &larr; Back to Date &amp; Time
                    </button>
                    <h2 className="med-book__step-heading">Patient Details</h2>
                    <div className="med-book__form">
                      <div className="med-book__form-row">
                        <div className="med-book__form-field">
                          <label htmlFor="book-name">Full Name *</label>
                          <input
                            id="book-name"
                            type="text"
                            placeholder="Your full name"
                            value={details.name}
                            onChange={(e) =>
                              setDetails({ ...details, name: e.target.value })
                            }
                          />
                        </div>
                        <div className="med-book__form-field">
                          <label htmlFor="book-email">Email *</label>
                          <input
                            id="book-email"
                            type="email"
                            placeholder="you@email.com"
                            value={details.email}
                            onChange={(e) =>
                              setDetails({ ...details, email: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div className="med-book__form-row">
                        <div className="med-book__form-field">
                          <label htmlFor="book-phone">Phone Number *</label>
                          <input
                            id="book-phone"
                            type="tel"
                            placeholder="+234..."
                            value={details.phone}
                            onChange={(e) =>
                              setDetails({ ...details, phone: e.target.value })
                            }
                          />
                        </div>
                        <div className="med-book__form-field">
                          <label htmlFor="book-notes">Additional Notes</label>
                          <input
                            id="book-notes"
                            type="text"
                            placeholder="Symptoms, allergies, etc."
                            value={details.notes}
                            onChange={(e) =>
                              setDetails({ ...details, notes: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      {/* ── Summary ── */}
                      <div className="med-book__form-field">
                        <label>Appointment Summary</label>
                        <p>
                          <strong>Department:</strong> {selectedDept}<br />
                          <strong>Doctor:</strong> {selectedDoctor?.name}<br />
                          <strong>Date:</strong>{' '}
                          {selectedDate?.toLocaleDateString('en-NG', {
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                          <br />
                          <strong>Time:</strong> {selectedTime}
                        </p>
                      </div>
                    </div>
                    <div className="med-book__nav">
                      <motion.button
                        className="med-book__nav-btn med-book__nav-btn--submit"
                        onClick={handleSubmit}
                        {...buttonHover}
                      >
                        Confirm Appointment
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
