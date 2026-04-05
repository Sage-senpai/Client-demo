import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import roomsData, { type Room } from '../data/roomsData';
import { fadeUp, buttonHover } from '../../../styles/_animations';

const filters = ['All', 'Garden View', 'Lagoon View', 'Overwater'] as const;

export default function Rooms() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered: Room[] =
    activeFilter === 'All'
      ? roomsData
      : roomsData.filter((r) => r.type === activeFilter);

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="resort-rooms-page">
      {/* ── PAGE HERO ── */}
      <div className="resort-page-hero">
        <img
          src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80"
          alt="Luxury suite"
          className="resort-page-hero__bg"
        />
        <div className="resort-page-hero__overlay" />
        <div className="resort-page-hero__content">
          <h1 className="resort-page-hero__title">Rooms &amp; Suites</h1>
          <p className="resort-page-hero__subtitle">
            Forty-eight individually designed retreats, each framing the coast in its own way.
          </p>
        </div>
      </div>

      {/* ── FILTER + GRID ── */}
      <section className="resort-section">
        <div className="resort-container">
          <AnimatedSection>
            <div className="resort-filter-row">
              {filters.map((f) => (
                <motion.button
                  key={f}
                  className={`resort-filter-btn ${activeFilter === f ? 'resort-filter-btn--active' : ''}`}
                  onClick={() => {
                    setActiveFilter(f);
                    setExpandedId(null);
                  }}
                  {...buttonHover}
                >
                  {f}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          <motion.div className="resort-rooms-grid" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((room) => (
                <motion.div
                  key={room.id}
                  layout
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.35 }}
                >
                  <div className="resort-room-card">
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
                        {room.amenities.map((a) => (
                          <span key={a} className="resort-room-card__amenity">{a}</span>
                        ))}
                      </div>
                      <div className="resort-room-card__footer">
                        <div className="resort-room-card__price">
                          &#8358;{room.price.toLocaleString()} <span>/night</span>
                        </div>
                        <div>
                          <button
                            className="resort-room-card__book-btn"
                            onClick={() => toggleExpand(room.id)}
                          >
                            {expandedId === room.id ? 'Close' : 'Details'}
                          </button>
                          &nbsp;
                          <Link to="/resort/book" className="resort-room-card__book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Accordion detail */}
                    <AnimatePresence>
                      {expandedId === room.id && (
                        <motion.div
                          className="resort-room-expand"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="resort-room-expand__desc">{room.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
