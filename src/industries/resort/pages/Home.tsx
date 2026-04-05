import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';
import roomsData from '../data/roomsData';
import { fadeUp, buttonHover } from '../../../styles/_animations';

const activities = [
  { emoji: '🏄', name: 'Surfing' },
  { emoji: '🤿', name: 'Snorkeling' },
  { emoji: '🚣', name: 'Kayaking' },
  { emoji: '🎣', name: 'Deep-Sea Fishing' },
  { emoji: '🧘', name: 'Beach Yoga' },
  { emoji: '🚴', name: 'Cycling Tours' },
  { emoji: '🍳', name: 'Cooking Class' },
  { emoji: '🌅', name: 'Sunset Cruise' },
];

const testimonials = [
  {
    stars: 5,
    quote:
      'From the moment we arrived, everything was flawless. The overwater bungalow was a dream — waking up to see fish swimming beneath the glass floor is something we will never forget.',
    author: 'Amara Obi',
    origin: 'Lagos, Nigeria',
  },
  {
    stars: 5,
    quote:
      'The Coral Kitchen alone is worth the trip. Chef Emeka\'s tasting menu tells a story of Nigerian coastal cuisine that rivals any fine-dining experience we have had worldwide.',
    author: 'David & Claire Whitmore',
    origin: 'London, United Kingdom',
  },
  {
    stars: 5,
    quote:
      'We came for a weekend and extended to a full week. The spa treatments use local ingredients that left my skin glowing, and the staff remember every preference without asking twice.',
    author: 'Funke Adeyemi',
    origin: 'Abuja, Nigeria',
  },
];

export default function Home() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState('2');

  const featured = roomsData.slice(0, 3);

  const handleSearch = () => {
    navigate('/resort/book');
  };

  const today = new Date();
  const minCheckout = checkIn ? new Date(checkIn.getTime() + 86400000) : new Date(today.getTime() + 86400000);

  return (
    <>
      {/* ── HERO ── */}
      <section className="resort-hero" ref={heroRef}>
        <motion.img
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=85"
          alt="Coral Terrace Resort aerial view"
          className="resort-hero__bg"
          style={{ y: heroY }}
        />
        <div className="resort-hero__overlay" />

        <motion.div
          className="resort-hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="resort-hero__badge">Ondo State, Nigeria</span>
          <h1 className="resort-hero__title">
            Where the Ocean<br />Meets Luxury
          </h1>
          <p className="resort-hero__subtitle">
            An exclusive coastal sanctuary where world-class hospitality
            meets the untouched beauty of the Nigerian Atlantic coastline.
          </p>
        </motion.div>

        <motion.div
          className="resort-booking-widget"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="resort-booking-widget__field">
            <span className="resort-booking-widget__label">Check-in</span>
            <DatePicker
              selected={checkIn}
              onChange={(date: Date | null) => setCheckIn(date)}
              minDate={today}
              placeholderText="Select date"
              dateFormat="dd MMM yyyy"
            />
          </div>

          <div className="resort-booking-widget__field">
            <span className="resort-booking-widget__label">Check-out</span>
            <DatePicker
              selected={checkOut}
              onChange={(date: Date | null) => setCheckOut(date)}
              minDate={minCheckout}
              placeholderText="Select date"
              dateFormat="dd MMM yyyy"
            />
          </div>

          <div className="resort-booking-widget__field">
            <span className="resort-booking-widget__label">Guests</span>
            <select
              className="resort-booking-widget__input"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
          </div>

          <motion.button
            className="resort-booking-widget__btn"
            onClick={handleSearch}
            {...buttonHover}
          >
            Check Availability
          </motion.button>
        </motion.div>
      </section>

      {/* ── FEATURED ROOMS ── */}
      <section className="resort-section resort-featured-rooms">
        <div className="resort-container">
          <AnimatedSection>
            <h2 className="resort-section-title">Rooms &amp; Suites</h2>
            <p className="resort-section-subtitle">
              Each room is a private retreat designed to frame the natural beauty
              of the coast with understated elegance.
            </p>
          </AnimatedSection>

          <div className="resort-featured-rooms__grid">
            {featured.map((room) => (
              <AnimatedSection key={room.id}>
                <motion.div className="resort-room-card" variants={fadeUp}>
                  <img
                    src={room.image}
                    alt={room.name}
                    className="resort-room-card__image"
                  />
                  <div className="resort-room-card__body">
                    <div className="resort-room-card__type">{room.type}</div>
                    <h3 className="resort-room-card__name">{room.name}</h3>
                    <div className="resort-room-card__meta">
                      <span>Up to {room.maxGuests} guests</span>
                    </div>
                    <div className="resort-room-card__amenities">
                      {room.amenities.slice(0, 3).map((a) => (
                        <span key={a} className="resort-room-card__amenity">{a}</span>
                      ))}
                    </div>
                    <div className="resort-room-card__footer">
                      <div className="resort-room-card__price">
                        &#8358;{room.price.toLocaleString()} <span>/night</span>
                      </div>
                      <Link to="/resort/book" className="resort-room-card__book-btn">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="resort-section" delay={0.15}>
            <div className="resort-text-center">
              <Link to="/resort/rooms" className="resort-btn resort-btn--outline">
                View All Rooms
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── DINING SPLIT ── */}
      <section className="resort-section">
        <div className="resort-container">
          <AnimatedSection>
            <div className="resort-split">
              <div className="resort-split__text">
                <h2>A Culinary Journey Along the Coast</h2>
                <p>
                  From the farm-to-table creations of Coral Kitchen to the laid-back sunset
                  cocktails at The Sunset Bar, every meal at Coral Terrace is an exploration
                  of Nigerian coastal flavours elevated by world-class technique.
                </p>
                <p>
                  Our chefs source the freshest catch from local fishermen each morning and
                  pair it with organic produce from our own garden. The result is a dining
                  experience that is as authentic as it is unforgettable.
                </p>
                <Link to="/resort/dining" className="resort-btn resort-btn--primary">
                  Explore Dining
                </Link>
              </div>
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
                alt="Fine dining at Coral Terrace"
                className="resort-split__image"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ACTIVITIES ICON GRID ── */}
      <section className="resort-section">
        <div className="resort-container">
          <AnimatedSection>
            <h2 className="resort-section-title">Things to Do</h2>
            <p className="resort-section-subtitle">
              From thrilling water sports to tranquil wellness rituals, every day at
              Coral Terrace offers a new way to connect with the coast.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="resort-activities-grid">
              {activities.map((act) => (
                <div key={act.name} className="resort-activity-icon-card">
                  <div className="resort-activity-icon-card__emoji">{act.emoji}</div>
                  <div className="resort-activity-icon-card__name">{act.name}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="resort-section resort-testimonials">
        <div className="resort-container">
          <AnimatedSection>
            <h2 className="resort-section-title">Guest Experiences</h2>
            <p className="resort-section-subtitle">
              Hear from those who have made Coral Terrace their home away from home.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="resort-testimonials__grid">
              {testimonials.map((t, i) => (
                <div key={i} className="resort-testimonial-card">
                  <div className="resort-testimonial-card__stars">
                    {'★'.repeat(t.stars)}
                  </div>
                  <p className="resort-testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
                  <div className="resort-testimonial-card__author">{t.author}</div>
                  <div className="resort-testimonial-card__origin">{t.origin}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="resort-section resort-stats">
        <div className="resort-container">
          <AnimatedSection>
            <div className="resort-stats__grid">
              <CounterStat end={5} suffix="★" label="Rating" />
              <CounterStat end={48} label="Suites" />
              <CounterStat end={2} label="Restaurants" />
              <CounterStat end={1} label="Spa" />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
