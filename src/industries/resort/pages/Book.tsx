import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import roomsData, { type Room } from '../data/roomsData';
import { buttonHover } from '../../../styles/_animations';

const stepLabels = ['Dates & Guests', 'Choose Room', 'Confirm'];

const countries = [
  'Nigeria',
  'Ghana',
  'South Africa',
  'Kenya',
  'United Kingdom',
  'United States',
  'Canada',
  'Germany',
  'France',
  'United Arab Emirates',
  'Other',
];

export default function Book() {
  // step state
  const [step, setStep] = useState(1);

  // step 1
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // step 2
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  // step 3
  const [guestName, setGuestName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('Nigeria');
  const [requests, setRequests] = useState('');

  const today = new Date();
  const minCheckout = checkIn
    ? new Date(checkIn.getTime() + 86400000)
    : new Date(today.getTime() + 86400000);

  const nights =
    checkIn && checkOut
      ? Math.max(1, Math.round((checkOut.getTime() - checkIn.getTime()) / 86400000))
      : 0;

  const roomTotal = selectedRoom ? selectedRoom.price * nights : 0;
  const tax = Math.round(roomTotal * 0.075);
  const grandTotal = roomTotal + tax;

  const canProceedStep1 = checkIn && checkOut && adults > 0;
  const canProceedStep2 = selectedRoom !== null;
  const canSubmit = guestName.trim() && email.trim() && phone.trim();

  const handleConfirm = () => {
    toast.success(
      `Reservation confirmed! A confirmation email has been sent to ${email}. We look forward to welcoming you to Coral Terrace.`,
      { duration: 6000 }
    );
    // reset form
    setStep(1);
    setCheckIn(null);
    setCheckOut(null);
    setAdults(2);
    setChildren(0);
    setSelectedRoom(null);
    setGuestName('');
    setEmail('');
    setPhone('');
    setCountry('Nigeria');
    setRequests('');
  };

  const stepVariants = {
    enter: { opacity: 0, x: 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  return (
    <div className="resort-book-page">
      {/* ── PAGE HERO ── */}
      <div className="resort-page-hero">
        <img
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=85"
          alt="Book your stay"
          className="resort-page-hero__bg"
        />
        <div className="resort-page-hero__overlay" />
        <div className="resort-page-hero__content">
          <h1 className="resort-page-hero__title">Book Your Stay</h1>
          <p className="resort-page-hero__subtitle">
            Secure your coastal escape in just a few steps.
          </p>
        </div>
      </div>

      <div className="resort-booking">
        {/* ── PROGRESS INDICATOR ── */}
        <AnimatedSection>
          <div className="resort-progress">
            {stepLabels.map((label, i) => {
              const num = i + 1;
              const isActive = step === num;
              const isDone = step > num;
              return (
                <div key={label} className="resort-progress__step-wrapper">
                  {i > 0 && (
                    <span
                      className={`resort-progress__line ${isDone ? 'resort-progress__line--active' : ''}`}
                    />
                  )}
                  <div className="resort-progress__step">
                    <span
                      className={`resort-progress__circle ${
                        isActive ? 'resort-progress__circle--active' : ''
                      } ${isDone ? 'resort-progress__circle--done' : ''}`}
                    >
                      {isDone ? '✓' : num}
                    </span>
                    <span
                      className={`resort-progress__label ${
                        isActive ? 'resort-progress__label--active' : ''
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* ── STEPS ── */}
        <AnimatePresence mode="wait">
          {/* ─── STEP 1: Dates & Guests ─── */}
          {step === 1 && (
            <motion.div
              key="step-1"
              className="resort-step"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h3 className="resort-step__title">Select Dates &amp; Guests</h3>

              <div className="resort-form-row">
                <div className="resort-form-group">
                  <label>Check-in Date</label>
                  <DatePicker
                    selected={checkIn}
                    onChange={(date: Date | null) => {
                      setCheckIn(date);
                      if (checkOut && date && checkOut <= date) {
                        setCheckOut(null);
                      }
                    }}
                    minDate={today}
                    placeholderText="Select check-in"
                    dateFormat="dd MMM yyyy"
                  />
                </div>
                <div className="resort-form-group">
                  <label>Check-out Date</label>
                  <DatePicker
                    selected={checkOut}
                    onChange={(date: Date | null) => setCheckOut(date)}
                    minDate={minCheckout}
                    placeholderText="Select check-out"
                    dateFormat="dd MMM yyyy"
                  />
                </div>
              </div>

              <div className="resort-form-row">
                <div className="resort-form-group">
                  <label>Adults</label>
                  <div className="resort-stepper">
                    <button
                      className="resort-stepper__btn"
                      onClick={() => setAdults((p) => Math.max(1, p - 1))}
                    >
                      &minus;
                    </button>
                    <span className="resort-stepper__value">{adults}</span>
                    <button
                      className="resort-stepper__btn"
                      onClick={() => setAdults((p) => Math.min(8, p + 1))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="resort-form-group">
                  <label>Children</label>
                  <div className="resort-stepper">
                    <button
                      className="resort-stepper__btn"
                      onClick={() => setChildren((p) => Math.max(0, p - 1))}
                    >
                      &minus;
                    </button>
                    <span className="resort-stepper__value">{children}</span>
                    <button
                      className="resort-stepper__btn"
                      onClick={() => setChildren((p) => Math.min(6, p + 1))}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="resort-step-actions resort-step-actions--right">
                <motion.button
                  className="resort-btn resort-btn--primary"
                  disabled={!canProceedStep1}
                  onClick={() => setStep(2)}
                  {...buttonHover}
                >
                  Search Availability
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* ─── STEP 2: Choose Room ─── */}
          {step === 2 && (
            <motion.div
              key="step-2"
              className="resort-step"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h3 className="resort-step__title">Choose Your Room</h3>
              <p className="resort-section-subtitle">
                {nights} night{nights !== 1 ? 's' : ''} &middot; {adults} adult
                {adults !== 1 ? 's' : ''}
                {children > 0 && `, ${children} child${children !== 1 ? 'ren' : ''}`}
              </p>

              <div className="resort-room-select-grid">
                {roomsData.map((room) => {
                  const isSelected = selectedRoom?.id === room.id;
                  return (
                    <div
                      key={room.id}
                      className={`resort-room-select-card ${
                        isSelected ? 'resort-room-select-card--selected' : ''
                      }`}
                      onClick={() => setSelectedRoom(room)}
                    >
                      <img
                        src={room.image}
                        alt={room.name}
                        className="resort-room-select-card__image"
                      />
                      <div className="resort-room-select-card__body">
                        <div className="resort-room-select-card__name">{room.name}</div>
                        <div className="resort-room-select-card__price">
                          &#8358;{room.price.toLocaleString()} <span>/night</span>
                        </div>
                      </div>
                      <button
                        className={`resort-room-select-card__select-btn ${
                          isSelected ? 'resort-room-select-card__select-btn--selected' : ''
                        }`}
                      >
                        {isSelected ? 'Selected' : 'Select'}
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="resort-step-actions">
                <motion.button
                  className="resort-btn resort-btn--outline"
                  onClick={() => setStep(1)}
                  {...buttonHover}
                >
                  Back
                </motion.button>
                <motion.button
                  className="resort-btn resort-btn--primary"
                  disabled={!canProceedStep2}
                  onClick={() => setStep(3)}
                  {...buttonHover}
                >
                  Continue
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* ─── STEP 3: Guest Details & Confirm ─── */}
          {step === 3 && (
            <motion.div
              key="step-3"
              className="resort-step"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h3 className="resort-step__title">Guest Details</h3>

              <div className="resort-form-row">
                <div className="resort-form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                  />
                </div>
                <div className="resort-form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="resort-form-row">
                <div className="resort-form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+234 800 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="resort-form-group">
                  <label>Country</label>
                  <select value={country} onChange={(e) => setCountry(e.target.value)}>
                    {countries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="resort-form-row">
                <div className="resort-form-group resort-form-group--full">
                  <label>Special Requests</label>
                  <textarea
                    placeholder="Any dietary needs, celebrations, accessibility requirements..."
                    value={requests}
                    onChange={(e) => setRequests(e.target.value)}
                  />
                </div>
              </div>

              {/* Price Summary */}
              <div className="resort-price-summary">
                <div className="resort-price-summary__row">
                  <span className="resort-price-summary__label">
                    {selectedRoom?.name} &times; {nights} night{nights !== 1 ? 's' : ''}
                  </span>
                  <span className="resort-price-summary__value">
                    &#8358;{roomTotal.toLocaleString()}
                  </span>
                </div>
                <div className="resort-price-summary__row">
                  <span className="resort-price-summary__label">
                    Taxes &amp; fees (7.5%)
                  </span>
                  <span className="resort-price-summary__value">
                    &#8358;{tax.toLocaleString()}
                  </span>
                </div>
                <div className="resort-price-summary__row resort-price-summary__row--total">
                  <span className="resort-price-summary__label">Total</span>
                  <span className="resort-price-summary__value">
                    &#8358;{grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="resort-step-actions">
                <motion.button
                  className="resort-btn resort-btn--outline"
                  onClick={() => setStep(2)}
                  {...buttonHover}
                >
                  Back
                </motion.button>
                <motion.button
                  className="resort-btn resort-btn--secondary"
                  disabled={!canSubmit}
                  onClick={handleConfirm}
                  {...buttonHover}
                >
                  Confirm Reservation
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
