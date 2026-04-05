import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';

const timeSlots: string[] = [];
for (let h = 12; h <= 21; h++) {
  timeSlots.push(`${h}:00`);
  if (h < 21 || (h === 21 && true)) {
    timeSlots.push(`${h}:30`);
  }
}
// Filter to only include up to 21:30
const filteredTimeSlots = timeSlots.filter((t) => {
  const [hr, min] = t.split(':').map(Number);
  return hr < 21 || (hr === 21 && min <= 30);
});

const occasions = [
  'None',
  'Birthday',
  'Anniversary',
  'Business Dinner',
  'Date Night',
  'Other',
];

export default function Reservations() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState('');
  const [occasion, setOccasion] = useState('None');
  const [requests, setRequests] = useState('');

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 90);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Table reserved! Confirmation sent.', {
      duration: 4000,
      style: {
        fontFamily: "'DM Sans', sans-serif",
      },
    });
    setName('');
    setPhone('');
    setEmail('');
    setDate(null);
    setTime('');
    setPartySize('');
    setOccasion('None');
    setRequests('');
  };

  return (
    <div className="rest-reservations">
      {/* ── Header ── */}
      <div className="rest-page-header">
        <AnimatedSection>
          <p className="rest-page-header__label">Join Us</p>
          <h1 className="rest-page-header__title">Reservations</h1>
          <p className="rest-page-header__subtitle">
            Secure your table at Koko &amp; Thyme for an evening to remember.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Split: Form + Image ── */}
      <AnimatedSection className="rest-reservations__split">
        <div className="rest-reservations__form-section">
          <h2>Book Your Table</h2>
          <p>Fill in the details below and we will confirm your reservation within the hour.</p>
          <form className="rest-reservations__form" onSubmit={handleSubmit}>
            <div className="rest-reservations__field">
              <label className="rest-reservations__label">Full Name</label>
              <input
                className="rest-reservations__input"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="rest-reservations__field">
              <label className="rest-reservations__label">Phone Number</label>
              <input
                className="rest-reservations__input"
                type="tel"
                placeholder="+234 800 000 0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="rest-reservations__field">
              <label className="rest-reservations__label">Email Address</label>
              <input
                className="rest-reservations__input"
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="rest-reservations__field">
              <label className="rest-reservations__label">Date</label>
              <DatePicker
                selected={date}
                onChange={(d: Date | null) => setDate(d)}
                minDate={minDate}
                maxDate={maxDate}
                placeholderText="Select a date"
                dateFormat="MMMM d, yyyy"
                required
              />
            </div>
            <div className="rest-reservations__field">
              <label className="rest-reservations__label">Time</label>
              <select
                className="rest-reservations__select"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="">Select time</option>
                {filteredTimeSlots.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="rest-reservations__field">
              <label className="rest-reservations__label">Party Size</label>
              <select
                className="rest-reservations__select"
                value={partySize}
                onChange={(e) => setPartySize(e.target.value)}
                required
              >
                <option value="">Select size</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={String(i + 1)}>{i + 1}</option>
                ))}
                <option value="10+">10+</option>
              </select>
            </div>
            <div className="rest-reservations__field">
              <label className="rest-reservations__label">Occasion</label>
              <select
                className="rest-reservations__select"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                {occasions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            <div className="rest-reservations__field rest-reservations__field--full">
              <label className="rest-reservations__label">Special Requests</label>
              <textarea
                className="rest-reservations__textarea"
                placeholder="Any dietary needs, seating preferences, or special arrangements..."
                value={requests}
                onChange={(e) => setRequests(e.target.value)}
              />
            </div>
            <motion.button
              type="submit"
              className="rest-reservations__submit"
              {...buttonHover}
            >
              Reserve My Table
            </motion.button>
          </form>
        </div>
        <div className="rest-reservations__image-col">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
            alt="Restaurant interior"
            loading="lazy"
          />
        </div>
      </AnimatedSection>

      {/* ── What to Expect ── */}
      <section className="rest-reservations__expect">
        <AnimatedSection className="rest-reservations__expect-inner">
          <h2 className="rest-reservations__expect-title">What to Expect</h2>
          <div className="rest-reservations__expect-grid">
            <div className="rest-reservations__expect-card">
              <div className="rest-reservations__expect-icon">&#127860;</div>
              <h3 className="rest-reservations__expect-card-title">A Curated Experience</h3>
              <p className="rest-reservations__expect-card-text">
                From the moment you arrive, our team will guide you through a thoughtfully
                curated dining journey featuring the best of West African fine cuisine.
              </p>
            </div>
            <div className="rest-reservations__expect-card">
              <div className="rest-reservations__expect-icon">&#127863;</div>
              <h3 className="rest-reservations__expect-card-title">Sommelier Pairings</h3>
              <p className="rest-reservations__expect-card-text">
                Our in-house sommelier is available to pair each course with wines,
                cocktails, or non-alcoholic creations that elevate every bite.
              </p>
            </div>
            <div className="rest-reservations__expect-card">
              <div className="rest-reservations__expect-icon">&#127926;</div>
              <h3 className="rest-reservations__expect-card-title">Live Music Evenings</h3>
              <p className="rest-reservations__expect-card-text">
                Join us on Friday and Saturday evenings for live Afrobeat and jazz
                performances that complement the ambience perfectly.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
