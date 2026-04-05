import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';
import servicesData, { categories, type Category, type Service } from '../data/servicesData';

const stylistsForBooking = [
  {
    id: 1,
    name: 'Amara Obi',
    specialty: 'Hair Colourist',
    rating: '4.9',
    photo: 'https://picsum.photos/seed/book-amara/200/200',
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    offDays: ['Sat', 'Sun'],
  },
  {
    id: 2,
    name: 'Chidinma Eze',
    specialty: 'Braids & Locs',
    rating: '4.8',
    photo: 'https://picsum.photos/seed/book-chidinma/200/200',
    availableDays: ['Mon', 'Wed', 'Thu', 'Sat'],
    offDays: ['Tue', 'Fri', 'Sun'],
  },
  {
    id: 3,
    name: 'Kelechi Nwankwo',
    specialty: 'Skin Therapist',
    rating: '5.0',
    photo: 'https://picsum.photos/seed/book-kelechi/200/200',
    availableDays: ['Tue', 'Wed', 'Fri', 'Sat', 'Sun'],
    offDays: ['Mon', 'Thu'],
  },
];

const timeSlots = [
  { time: '9:00 AM', available: true },
  { time: '9:30 AM', available: true },
  { time: '10:00 AM', available: true },
  { time: '10:30 AM', available: false },
  { time: '11:00 AM', available: true },
  { time: '11:30 AM', available: true },
  { time: '12:00 PM', available: false },
  { time: '12:30 PM', available: true },
  { time: '1:00 PM', available: true },
  { time: '1:30 PM', available: false },
  { time: '2:00 PM', available: true },
  { time: '2:30 PM', available: true },
  { time: '3:00 PM', available: true },
  { time: '3:30 PM', available: true },
  { time: '4:00 PM', available: false },
  { time: '4:30 PM', available: true },
];

const stepLabels = ['Category', 'Service', 'Stylist', 'Date & Time', 'Details'];

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
  const [selectedCategory, setSelectedCategory] = useState<Category | ''>('');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedStylist, setSelectedStylist] = useState<(typeof stylistsForBooking)[0] | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [details, setDetails] = useState({ name: '', phone: '', email: '', notes: '' });
  const [isConfirmed, setIsConfirmed] = useState(false);

  const goNext = () => {
    setDirection(1);
    setStep((s) => s + 1);
  };

  const goBack = () => {
    setDirection(-1);
    setStep((s) => s - 1);
  };

  const handleConfirm = () => {
    if (!details.name || !details.phone || !details.email) {
      toast.error('Please fill in all required fields.');
      return;
    }
    toast.success('Appointment booked successfully!');
    setIsConfirmed(true);
  };

  const filteredServices = selectedCategory
    ? servicesData.filter((s) => s.category === selectedCategory)
    : [];

  const resetBooking = () => {
    setStep(1);
    setDirection(1);
    setSelectedCategory('');
    setSelectedService(null);
    setSelectedStylist(null);
    setSelectedDate(null);
    setSelectedTime('');
    setDetails({ name: '', phone: '', email: '', notes: '' });
    setIsConfirmed(false);
  };

  if (isConfirmed) {
    return (
      <div className="beauty-book-page">
        <AnimatedSection className="beauty-book-page__inner">
          <motion.div
            className="beauty-success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="beauty-success__icon">✓</div>
            <h2 className="beauty-success__title">Booking Confirmed!</h2>
            <p className="beauty-success__text">
              Thank you, {details.name}. Your appointment has been booked. You will receive a confirmation via email and SMS shortly.
            </p>
            <div className="beauty-success__summary">
              <div className="beauty-success__summary-row">
                <span>Service</span>
                <span>{selectedService?.name}</span>
              </div>
              <div className="beauty-success__summary-row">
                <span>Category</span>
                <span>{selectedCategory}</span>
              </div>
              <div className="beauty-success__summary-row">
                <span>Stylist</span>
                <span>{selectedStylist?.name}</span>
              </div>
              <div className="beauty-success__summary-row">
                <span>Date</span>
                <span>{selectedDate?.toLocaleDateString('en-NG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="beauty-success__summary-row">
                <span>Time</span>
                <span>{selectedTime}</span>
              </div>
              <div className="beauty-success__summary-row">
                <span>Duration</span>
                <span>{selectedService?.duration}</span>
              </div>
              <div className="beauty-success__summary-row">
                <span>Price</span>
                <span>{selectedService?.price}</span>
              </div>
            </div>
            <motion.button
              className="beauty-success__btn"
              onClick={resetBooking}
              {...buttonHover}
            >
              Book Another Appointment
            </motion.button>
          </motion.div>
        </AnimatedSection>
      </div>
    );
  }

  return (
    <div className="beauty-book-page">
      <AnimatedSection className="beauty-book-page__inner">
        <div className="beauty-book-page__header">
          <p className="section-label">Appointments</p>
          <h1 className="beauty-book-page__title">Book Your Visit</h1>
          <p className="beauty-book-page__subtitle">
            Choose your service, stylist, and preferred time.
          </p>
        </div>

        {/* ── Progress Bar ── */}
        <div className="beauty-progress">
          {stepLabels.map((label, i) => {
            const stepNum = i + 1;
            const isDone = step > stepNum;
            const isActive = step === stepNum;
            return (
              <div className="beauty-progress__step" key={label}>
                {i > 0 && (
                  <div
                    className={`beauty-progress__line${isDone ? ' beauty-progress__line--active' : ''}`}
                  />
                )}
                <div
                  className={`beauty-progress__circle${
                    isActive
                      ? ' beauty-progress__circle--active'
                      : isDone
                        ? ' beauty-progress__circle--done'
                        : ''
                  }`}
                >
                  {isDone ? '✓' : stepNum}
                </div>
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
            <div className="beauty-step">
              {/* ── Step 1: Choose Category ── */}
              {step === 1 && (
                <>
                  <h2 className="beauty-step__heading">Choose a Service Category</h2>
                  <div className="beauty-category-tiles">
                    {categories.map((cat) => (
                      <motion.button
                        key={cat}
                        className={`beauty-category-tiles__tile${
                          selectedCategory === cat ? ' beauty-category-tiles__tile--selected' : ''
                        }`}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setSelectedService(null);
                        }}
                        {...buttonHover}
                      >
                        {cat}
                      </motion.button>
                    ))}
                  </div>
                  {selectedCategory && (
                    <div className="beauty-step-nav">
                      <motion.button
                        className="beauty-step-nav__btn"
                        onClick={goNext}
                        {...buttonHover}
                      >
                        Next — Choose Service
                      </motion.button>
                    </div>
                  )}
                </>
              )}

              {/* ── Step 2: Choose Service ── */}
              {step === 2 && (
                <>
                  <button className="beauty-step__back" onClick={goBack}>
                    ← Back to Categories
                  </button>
                  <h2 className="beauty-step__heading">Choose a {selectedCategory} Service</h2>
                  <div className="beauty-service-options">
                    {filteredServices.map((service) => (
                      <motion.div
                        key={service.id}
                        className={`beauty-service-options__item${
                          selectedService?.id === service.id
                            ? ' beauty-service-options__item--selected'
                            : ''
                        }`}
                        onClick={() => setSelectedService(service)}
                        {...buttonHover}
                      >
                        <div className="beauty-service-options__info">
                          <h4>{service.name}</h4>
                          <span>{service.duration}</span>
                        </div>
                        <span className="beauty-service-options__price">{service.price}</span>
                      </motion.div>
                    ))}
                  </div>
                  {selectedService && (
                    <div className="beauty-step-nav">
                      <motion.button
                        className="beauty-step-nav__btn"
                        onClick={goNext}
                        {...buttonHover}
                      >
                        Next — Choose Stylist
                      </motion.button>
                    </div>
                  )}
                </>
              )}

              {/* ── Step 3: Choose Stylist ── */}
              {step === 3 && (
                <>
                  <button className="beauty-step__back" onClick={goBack}>
                    ← Back to Services
                  </button>
                  <h2 className="beauty-step__heading">Choose Your Stylist</h2>
                  <div className="beauty-stylist-options">
                    {stylistsForBooking.map((stylist) => (
                      <motion.div
                        key={stylist.id}
                        className={`beauty-stylist-options__card${
                          selectedStylist?.id === stylist.id
                            ? ' beauty-stylist-options__card--selected'
                            : ''
                        }`}
                        onClick={() => setSelectedStylist(stylist)}
                        {...buttonHover}
                      >
                        <img
                          className="beauty-stylist-options__photo"
                          src={stylist.photo}
                          alt={stylist.name}
                          loading="lazy"
                        />
                        <h3 className="beauty-stylist-options__name">{stylist.name}</h3>
                        <p className="beauty-stylist-options__specialty">{stylist.specialty}</p>
                        <p className="beauty-stylist-options__rating">
                          {'★'.repeat(Math.floor(Number(stylist.rating)))} {stylist.rating}
                        </p>
                        <div className="beauty-stylist-options__days">
                          {stylist.availableDays.map((day) => (
                            <span className="beauty-stylist-options__day" key={day}>
                              {day}
                            </span>
                          ))}
                          {stylist.offDays.map((day) => (
                            <span className="beauty-stylist-options__day beauty-stylist-options__day--off" key={day}>
                              {day}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  {selectedStylist && (
                    <div className="beauty-step-nav">
                      <motion.button
                        className="beauty-step-nav__btn"
                        onClick={goNext}
                        {...buttonHover}
                      >
                        Next — Choose Date &amp; Time
                      </motion.button>
                    </div>
                  )}
                </>
              )}

              {/* ── Step 4: Date & Time ── */}
              {step === 4 && (
                <>
                  <button className="beauty-step__back" onClick={goBack}>
                    ← Back to Stylists
                  </button>
                  <h2 className="beauty-step__heading">Select Date &amp; Time</h2>
                  <div className="beauty-datetime">
                    <div className="beauty-datetime__calendar">
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date: Date | null) => setSelectedDate(date)}
                        minDate={new Date()}
                        inline
                        calendarStartDay={1}
                      />
                    </div>
                    {selectedDate && (
                      <>
                        <p className="beauty-datetime__time-label">
                          Available Time Slots for{' '}
                          {selectedDate.toLocaleDateString('en-NG', {
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                        <div className="beauty-datetime__time-grid">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot.time}
                              className={`beauty-datetime__time-slot${
                                !slot.available
                                  ? ' beauty-datetime__time-slot--unavailable'
                                  : selectedTime === slot.time
                                    ? ' beauty-datetime__time-slot--selected'
                                    : ''
                              }`}
                              onClick={() => {
                                if (slot.available) setSelectedTime(slot.time);
                              }}
                              disabled={!slot.available}
                            >
                              {slot.time}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  {selectedDate && selectedTime && (
                    <div className="beauty-step-nav">
                      <motion.button
                        className="beauty-step-nav__btn"
                        onClick={goNext}
                        {...buttonHover}
                      >
                        Next — Your Details
                      </motion.button>
                    </div>
                  )}
                </>
              )}

              {/* ── Step 5: Your Details ── */}
              {step === 5 && (
                <>
                  <button className="beauty-step__back" onClick={goBack}>
                    ← Back to Date &amp; Time
                  </button>
                  <h2 className="beauty-step__heading">Your Details</h2>
                  <div className="beauty-details-form">
                    <div className="beauty-details-form__field">
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
                    <div className="beauty-details-form__field">
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
                    <div className="beauty-details-form__field">
                      <label htmlFor="book-email">Email Address *</label>
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
                    <div className="beauty-details-form__field">
                      <label htmlFor="book-notes">Special Notes (Optional)</label>
                      <textarea
                        id="book-notes"
                        placeholder="Any allergies, preferences, or requests..."
                        value={details.notes}
                        onChange={(e) =>
                          setDetails({ ...details, notes: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="beauty-step-nav">
                    <motion.button
                      className="beauty-step-nav__btn beauty-step-nav__btn--accent"
                      onClick={handleConfirm}
                      {...buttonHover}
                    >
                      Confirm Booking
                    </motion.button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </AnimatedSection>
    </div>
  );
}
