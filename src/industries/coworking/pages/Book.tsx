import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AnimatedSection from '../../../components/shared/AnimatedSection';

// ─── Types ───
type SpaceType = 'hot-desk' | 'dedicated-desk' | 'private-office' | 'meeting-room' | 'event-space';

interface Extra {
  id: string;
  name: string;
  description: string;
  price: number;
  priceDisplay: string;
}

// ─── Data ───
const spaceOptions = [
  {
    id: 'hot-desk' as SpaceType,
    icon: '💻',
    name: 'Hot Desk',
    price: '₦2,500/day',
    basePrice: 2500,
    description: 'Flexible seating in our open-plan workspace. Perfect for freelancers and remote workers.',
  },
  {
    id: 'dedicated-desk' as SpaceType,
    icon: '🖥️',
    name: 'Dedicated Desk',
    price: '₦35,000/month',
    basePrice: 35000,
    description: 'Your own permanent desk with storage. Personalise your setup and leave belongings overnight.',
  },
  {
    id: 'private-office' as SpaceType,
    icon: '🏢',
    name: 'Private Office',
    price: 'From ₦85,000/month',
    basePrice: 85000,
    description: 'A lockable private room for your team. Fully furnished with custom branding options.',
  },
  {
    id: 'meeting-room' as SpaceType,
    icon: '🤝',
    name: 'Meeting Room',
    price: '₦5,000–₦10,000/hr',
    basePrice: 5000,
    description: 'Professionally equipped meeting rooms for 4–16 people with AV and video conferencing.',
  },
  {
    id: 'event-space' as SpaceType,
    icon: '🎤',
    name: 'Event Space',
    price: '₦80,000/day',
    basePrice: 80000,
    description: '200sqm open-plan venue for up to 120 guests. Full catering and AV available.',
  },
];

const extras: Extra[] = [
  { id: 'projector', name: 'Projector', description: 'HD projector with screen setup', price: 2000, priceDisplay: '₦2,000' },
  { id: 'whiteboard', name: 'Whiteboard', description: 'Mobile whiteboard with markers and eraser', price: 0, priceDisplay: 'Free' },
  { id: 'video-conf', name: 'Video Conferencing', description: 'Zoom/Teams setup with webcam, mic, and speakers', price: 5000, priceDisplay: '₦5,000' },
  { id: 'catering', name: 'Catering', description: 'Lunch and refreshments from The Grove Café', price: 3500, priceDisplay: '₦3,500/person' },
  { id: 'guest-passes', name: 'Extra Guest Passes', description: 'Additional guest passes beyond your plan allowance', price: 1500, priceDisplay: '₦1,500/pass' },
];

const timeSlots = [
  '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
];

const durations = ['1 hour', '1.5 hours', '2 hours', '3 hours', '4 hours', 'Half day (5 hrs)', 'Full day'];

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const hours = ['7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM'];

const meetingRooms = ['Ficus Room', 'Bamboo Room', 'Orchid Room', 'Palm Room', 'Fern Room', 'Cedar Room', 'Ivy Room', 'Sage Room'];

const generateAvailability = () => {
  const grid: Record<string, Record<string, 'available' | 'booked'>> = {};
  hours.forEach((hour) => {
    grid[hour] = {};
    days.forEach((day) => {
      grid[hour][day] = Math.random() > 0.3 ? 'available' : 'booked';
    });
  });
  return grid;
};

const generateRoomAvailability = () => {
  const rooms: Record<string, Record<string, Record<string, 'available' | 'booked'>>> = {};
  meetingRooms.forEach((room) => {
    rooms[room] = {};
    hours.forEach((hour) => {
      rooms[room][hour] = {};
      days.forEach((day) => {
        rooms[room][hour][day] = Math.random() > 0.35 ? 'available' : 'booked';
      });
    });
  });
  return rooms;
};

const generateRef = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let ref = '';
  for (let i = 0; i < 8; i++) {
    ref += chars[Math.floor(Math.random() * chars.length)];
  }
  return ref;
};

// ─── Slide Variants ───
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function Book() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);

  // Step 1
  const [selectedSpace, setSelectedSpace] = useState<SpaceType | ''>('');

  // Step 2
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState('');
  const [duration, setDuration] = useState('');
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [setupTime, setSetupTime] = useState(false);

  // Step 3
  const [availability] = useState(generateAvailability);
  const [roomAvailability] = useState(generateRoomAvailability);
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);

  // Step 4
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  // Step 5
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [hearAbout, setHearAbout] = useState('');
  const [payment, setPayment] = useState('');
  const [terms, setTerms] = useState(false);

  // Success
  const [bookingRef, setBookingRef] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const spaceInfo = spaceOptions.find((s) => s.id === selectedSpace);

  const extrasTotal = useMemo(() => {
    return extras
      .filter((e) => selectedExtras.includes(e.id))
      .reduce((sum, e) => sum + e.price, 0);
  }, [selectedExtras]);

  const basePrice = spaceInfo?.basePrice || 0;
  const total = basePrice + extrasTotal;

  const goNext = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 5));
  };

  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  };

  const toggleSlot = (key: string) => {
    setSelectedSlots((prev) =>
      prev.includes(key) ? prev.filter((s) => s !== key) : [...prev, key]
    );
  };

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const handleConfirm = () => {
    const ref = generateRef();
    setBookingRef(ref);
    setShowSuccess(true);
    toast.success(`Booking confirmed! Reference: ${ref}`);
  };

  const handleSendConfirmation = () => {
    toast.success(`Confirmation email sent to ${email}!`);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return !!selectedSpace;
      case 2:
        if (selectedSpace === 'meeting-room') return !!selectedDate && !!startTime && !!duration;
        if (selectedSpace === 'event-space') return !!selectedDate && !!endDate;
        return !!selectedDate;
      case 3:
        return true;
      case 4:
        return true;
      case 5:
        return !!name && !!email && !!phone && !!payment && terms;
      default:
        return false;
    }
  };

  const stepLabels = ['Space', 'Date', 'Availability', 'Extras', 'Details'];

  const availableDesks = 14;
  const totalDesks = 30;

  if (showSuccess) {
    return (
      <div className="cw-book">
        <section className="cw-book__hero">
          <div className="cw-container">
            <h1>Booking Confirmed!</h1>
            <p>Your space at Grove &amp; Co. is reserved</p>
          </div>
        </section>

        <AnimatedSection className="cw-success">
          <div className="cw-container">
            <div className="cw-success__icon">✓</div>
            <h2>You are all set!</h2>
            <p>Your booking reference is:</p>
            <div className="cw-success__ref">{bookingRef}</div>

            <div className="cw-success__summary">
              <h4>Booking Summary</h4>
              <div className="cw-success__summary-row">
                <span>Space Type</span>
                <span>{spaceInfo?.name}</span>
              </div>
              <div className="cw-success__summary-row">
                <span>Date</span>
                <span>{selectedDate?.toLocaleDateString('en-NG', { dateStyle: 'long' })}</span>
              </div>
              {selectedSpace === 'meeting-room' && (
                <>
                  <div className="cw-success__summary-row">
                    <span>Start Time</span>
                    <span>{startTime}</span>
                  </div>
                  <div className="cw-success__summary-row">
                    <span>Duration</span>
                    <span>{duration}</span>
                  </div>
                </>
              )}
              {selectedSpace === 'event-space' && endDate && (
                <div className="cw-success__summary-row">
                  <span>End Date</span>
                  <span>{endDate.toLocaleDateString('en-NG', { dateStyle: 'long' })}</span>
                </div>
              )}
              <div className="cw-success__summary-row">
                <span>Name</span>
                <span>{name}</span>
              </div>
              <div className="cw-success__summary-row">
                <span>Email</span>
                <span>{email}</span>
              </div>
              <div className="cw-success__summary-row">
                <span>Payment</span>
                <span>{payment}</span>
              </div>
              {selectedExtras.length > 0 && (
                <div className="cw-success__summary-row">
                  <span>Add-ons</span>
                  <span>
                    {extras
                      .filter((e) => selectedExtras.includes(e.id))
                      .map((e) => e.name)
                      .join(', ')}
                  </span>
                </div>
              )}
              <div className="cw-success__summary-total">
                <span>Total</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
            </div>

            <div className="cw-success__actions">
              <a
                href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=Grove+%26+Co.+Booking+(${bookingRef})&dates=${
                  selectedDate
                    ? selectedDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
                    : ''
                }&details=Booking+at+Grove+%26+Co.+Reference:+${bookingRef}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cw-btn cw-btn--outline"
              >
                Add to Calendar
              </a>
              <button className="cw-btn cw-btn--primary" onClick={handleSendConfirmation}>
                Send Confirmation →
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    );
  }

  return (
    <div className="cw-book">
      {/* ── HERO ── */}
      <section className="cw-book__hero">
        <div className="cw-container">
          <h1>Book a Space</h1>
          <p>Reserve your perfect workspace in just a few steps</p>
        </div>
      </section>

      {/* ── STEPPER ── */}
      <section className="cw-stepper">
        <div className="cw-container">
          {/* Progress */}
          <div className="cw-stepper__progress">
            {stepLabels.map((label, i) => {
              const stepNum = i + 1;
              const isActive = step === stepNum;
              const isCompleted = step > stepNum;
              return (
                <div key={label} className="cw-stepper__step-indicator-wrapper">
                  <div
                    className={`cw-stepper__step-indicator ${
                      isActive
                        ? 'cw-stepper__step-indicator--active'
                        : isCompleted
                        ? 'cw-stepper__step-indicator--completed'
                        : ''
                    }`}
                  >
                    <span className="cw-stepper__step-indicator-num">{stepNum}</span>
                    <span className="cw-stepper__step-indicator-label">{label}</span>
                  </div>
                  {i < stepLabels.length - 1 && (
                    <span
                      className={`cw-stepper__step-indicator-line ${
                        isCompleted ? 'cw-stepper__step-indicator--completed' : ''
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Step Content */}
          <div className="cw-stepper__content">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* ── STEP 1: Select Space ── */}
                {step === 1 && (
                  <div>
                    <h3 className="cw-section-title">Select Your Space</h3>
                    <p className="cw-section-subtitle">
                      Choose the type of workspace that fits your needs.
                    </p>
                    <div className="cw-space-select">
                      {spaceOptions.map((space) => (
                        <button
                          key={space.id}
                          className={`cw-space-select__card ${
                            selectedSpace === space.id ? 'cw-space-select__card--selected' : ''
                          }`}
                          onClick={() => setSelectedSpace(space.id)}
                        >
                          <div className="cw-space-select__card-icon">{space.icon}</div>
                          <h4>{space.name}</h4>
                          <div className="cw-space-select__card-price">{space.price}</div>
                          <p>{space.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── STEP 2: Date & Duration ── */}
                {step === 2 && (
                  <div className="cw-date-select">
                    <h3>Select Date {selectedSpace === 'meeting-room' ? '& Time' : selectedSpace === 'event-space' ? '& Duration' : ''}</h3>

                    {/* Desk / Office: just date */}
                    {(selectedSpace === 'hot-desk' || selectedSpace === 'dedicated-desk' || selectedSpace === 'private-office') && (
                      <div className="cw-date-select__field">
                        <label>Select Date</label>
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date: Date | null) => setSelectedDate(date)}
                          minDate={new Date()}
                          placeholderText="Pick a date"
                          dateFormat="MMMM d, yyyy"
                        />
                      </div>
                    )}

                    {/* Meeting Room: date + start time + duration */}
                    {selectedSpace === 'meeting-room' && (
                      <>
                        <div className="cw-date-select__field">
                          <label>Select Date</label>
                          <DatePicker
                            selected={selectedDate}
                            onChange={(date: Date | null) => setSelectedDate(date)}
                            minDate={new Date()}
                            placeholderText="Pick a date"
                            dateFormat="MMMM d, yyyy"
                          />
                        </div>
                        <div className="cw-date-select__row">
                          <div className="cw-date-select__field">
                            <label>Start Time</label>
                            <select
                              value={startTime}
                              onChange={(e) => setStartTime(e.target.value)}
                            >
                              <option value="">Select time...</option>
                              {timeSlots.map((t) => (
                                <option key={t} value={t}>{t}</option>
                              ))}
                            </select>
                          </div>
                          <div className="cw-date-select__field">
                            <label>Duration</label>
                            <select
                              value={duration}
                              onChange={(e) => setDuration(e.target.value)}
                            >
                              <option value="">Select duration...</option>
                              {durations.map((d) => (
                                <option key={d} value={d}>{d}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Event Space: start date + end date + setup toggle */}
                    {selectedSpace === 'event-space' && (
                      <>
                        <div className="cw-date-select__row">
                          <div className="cw-date-select__field">
                            <label>Start Date</label>
                            <DatePicker
                              selected={selectedDate}
                              onChange={(date: Date | null) => setSelectedDate(date)}
                              minDate={new Date()}
                              placeholderText="Start date"
                              dateFormat="MMMM d, yyyy"
                            />
                          </div>
                          <div className="cw-date-select__field">
                            <label>End Date</label>
                            <DatePicker
                              selected={endDate}
                              onChange={(date: Date | null) => setEndDate(date)}
                              minDate={selectedDate || new Date()}
                              placeholderText="End date"
                              dateFormat="MMMM d, yyyy"
                            />
                          </div>
                        </div>
                        <div className="cw-date-select__toggle">
                          <input
                            type="checkbox"
                            id="setup-time"
                            checked={setupTime}
                            onChange={(e) => setSetupTime(e.target.checked)}
                          />
                          <label htmlFor="setup-time">
                            Include early setup access (from 6:00 AM, +₦15,000)
                          </label>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* ── STEP 3: Availability ── */}
                {step === 3 && (
                  <div className="cw-availability">
                    <h3>Check Availability</h3>

                    {/* Hot desk / dedicated / private */}
                    {(selectedSpace === 'hot-desk' || selectedSpace === 'dedicated-desk' || selectedSpace === 'private-office') && (
                      <>
                        <p className="cw-availability__info">
                          {availableDesks}/{totalDesks} desks available for your selected date
                        </p>
                        <div className="cw-availability__legend">
                          <span>Available</span>
                          <span>Booked</span>
                          <span>Selected</span>
                        </div>
                        <div className="cw-availability__calendar">
                          <table className="cw-availability__table">
                            <thead>
                              <tr>
                                <th>Time</th>
                                {days.map((d) => (
                                  <th key={d}>{d}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {hours.map((hour) => (
                                <tr key={hour}>
                                  <td>{hour}</td>
                                  {days.map((day) => {
                                    const key = `${hour}-${day}`;
                                    const isSelected = selectedSlots.includes(key);
                                    const status = availability[hour]?.[day] || 'available';
                                    return (
                                      <td key={day}>
                                        <button
                                          className={`cw-availability__slot ${
                                            isSelected
                                              ? 'cw-availability__slot--selected'
                                              : status === 'booked'
                                              ? 'cw-availability__slot--booked'
                                              : 'cw-availability__slot--available'
                                          }`}
                                          onClick={() => {
                                            if (status === 'available') toggleSlot(key);
                                          }}
                                          disabled={status === 'booked' && !isSelected}
                                        >
                                          {isSelected ? '●' : status === 'booked' ? '✕' : '○'}
                                        </button>
                                      </td>
                                    );
                                  })}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </>
                    )}

                    {/* Meeting room */}
                    {selectedSpace === 'meeting-room' && (
                      <div className="cw-availability__rooms">
                        <p className="cw-availability__info">
                          Select a room and time slot below
                        </p>
                        <div className="cw-availability__legend">
                          <span>Available</span>
                          <span>Booked</span>
                          <span>Selected</span>
                        </div>
                        {meetingRooms.slice(0, 4).map((room) => (
                          <div key={room}>
                            <h4>{room}</h4>
                            <div className="cw-availability__calendar">
                              <table className="cw-availability__table">
                                <thead>
                                  <tr>
                                    <th>Time</th>
                                    {days.map((d) => (
                                      <th key={d}>{d}</th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {hours.slice(0, 8).map((hour) => {
                                    return (
                                      <tr key={hour}>
                                        <td>{hour}</td>
                                        {days.map((day) => {
                                          const key = `${room}-${hour}-${day}`;
                                          const isSelected = selectedSlots.includes(key);
                                          const status =
                                            roomAvailability[room]?.[hour]?.[day] || 'available';
                                          return (
                                            <td key={day}>
                                              <button
                                                className={`cw-availability__slot ${
                                                  isSelected
                                                    ? 'cw-availability__slot--selected'
                                                    : status === 'booked'
                                                    ? 'cw-availability__slot--booked'
                                                    : 'cw-availability__slot--available'
                                                }`}
                                                onClick={() => {
                                                  if (status === 'available') toggleSlot(key);
                                                }}
                                                disabled={status === 'booked' && !isSelected}
                                              >
                                                {isSelected ? '●' : status === 'booked' ? '✕' : '○'}
                                              </button>
                                            </td>
                                          );
                                        })}
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Event Space */}
                    {selectedSpace === 'event-space' && (
                      <>
                        <p className="cw-availability__info">
                          Event space availability for your selected dates
                        </p>
                        <div className="cw-availability__legend">
                          <span>Available</span>
                          <span>Booked</span>
                          <span>Selected</span>
                        </div>
                        <div className="cw-availability__calendar">
                          <table className="cw-availability__table">
                            <thead>
                              <tr>
                                <th>Time</th>
                                {days.map((d) => (
                                  <th key={d}>{d}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {hours.map((hour) => (
                                <tr key={hour}>
                                  <td>{hour}</td>
                                  {days.map((day) => {
                                    const key = `event-${hour}-${day}`;
                                    const isSelected = selectedSlots.includes(key);
                                    const status = availability[hour]?.[day] || 'available';
                                    return (
                                      <td key={day}>
                                        <button
                                          className={`cw-availability__slot ${
                                            isSelected
                                              ? 'cw-availability__slot--selected'
                                              : status === 'booked'
                                              ? 'cw-availability__slot--booked'
                                              : 'cw-availability__slot--available'
                                          }`}
                                          onClick={() => {
                                            if (status === 'available') toggleSlot(key);
                                          }}
                                          disabled={status === 'booked' && !isSelected}
                                        >
                                          {isSelected ? '●' : status === 'booked' ? '✕' : '○'}
                                        </button>
                                      </td>
                                    );
                                  })}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* ── STEP 4: Extras ── */}
                {step === 4 && (
                  <div className="cw-extras">
                    <h3>Extras &amp; Add-ons</h3>
                    <div className="cw-extras__list">
                      {extras.map((extra) => (
                        <div
                          key={extra.id}
                          className={`cw-extras__item ${
                            selectedExtras.includes(extra.id) ? 'cw-extras__item--selected' : ''
                          }`}
                          onClick={() => toggleExtra(extra.id)}
                        >
                          <input
                            type="checkbox"
                            checked={selectedExtras.includes(extra.id)}
                            onChange={() => toggleExtra(extra.id)}
                          />
                          <div className="cw-extras__item-info">
                            <h4>{extra.name}</h4>
                            <p>{extra.description}</p>
                          </div>
                          <span className="cw-extras__item-price">{extra.priceDisplay}</span>
                        </div>
                      ))}
                    </div>

                    <div className="cw-extras__total">
                      <h4>Running Total</h4>
                      <span className="cw-extras__total-amount">
                        ₦{total.toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}

                {/* ── STEP 5: Your Details ── */}
                {step === 5 && (
                  <div className="cw-details">
                    <h3>Your Details</h3>
                    <div className="cw-details__form">
                      <div className="cw-details__row">
                        <div className="cw-details__field">
                          <label>Full Name *</label>
                          <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="cw-details__field">
                          <label>Email Address *</label>
                          <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="cw-details__row">
                        <div className="cw-details__field">
                          <label>Phone Number *</label>
                          <input
                            type="tel"
                            placeholder="+234..."
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                        <div className="cw-details__field">
                          <label>Company (optional)</label>
                          <input
                            type="text"
                            placeholder="Your company name"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="cw-details__field">
                        <label>How did you hear about us?</label>
                        <select
                          value={hearAbout}
                          onChange={(e) => setHearAbout(e.target.value)}
                        >
                          <option value="">Select...</option>
                          <option value="google">Google Search</option>
                          <option value="social">Social Media</option>
                          <option value="referral">Friend / Colleague Referral</option>
                          <option value="event">Attended an Event</option>
                          <option value="walk-in">Walk In</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="cw-details__payment">
                        <h4>Payment Method *</h4>
                        <div className="cw-details__payment-options">
                          {['Pay Now', 'Pay on Arrival', 'Invoice'].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              className={`cw-details__payment-option ${
                                payment === opt ? 'cw-details__payment-option--selected' : ''
                              }`}
                              onClick={() => setPayment(opt)}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="cw-details__terms">
                        <input
                          type="checkbox"
                          id="terms"
                          checked={terms}
                          onChange={(e) => setTerms(e.target.checked)}
                        />
                        <label htmlFor="terms">
                          I agree to the Grove &amp; Co. terms of service and cancellation policy
                        </label>
                      </div>

                      <button
                        className="cw-details__submit-btn"
                        onClick={handleConfirm}
                        disabled={!canProceed()}
                      >
                        Confirm Booking →
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Nav buttons */}
            <div className="cw-stepper__nav">
              {step > 1 ? (
                <button className="cw-stepper__back-btn" onClick={goBack}>
                  ← Back
                </button>
              ) : (
                <div />
              )}
              {step < 5 && (
                <button
                  className="cw-stepper__next-btn"
                  onClick={goNext}
                  disabled={!canProceed()}
                >
                  Continue →
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
