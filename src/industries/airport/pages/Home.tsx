import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';
import { departures } from '../data/flightsData';
import { pageTransition, fadeUp } from '../../../styles/_animations';

const HERO_IMG = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=85';

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hh = String(time.getHours()).padStart(2, '0');
  const mm = String(time.getMinutes()).padStart(2, '0');
  const ss = String(time.getSeconds()).padStart(2, '0');

  return <div className="airport-hero__clock">{hh}:{mm}:{ss} WAT</div>;
}

function getStatusClass(status: string) {
  switch (status) {
    case 'On Time': return 'status-pill--on-time';
    case 'Boarding': return 'status-pill--boarding';
    case 'Delayed': return 'status-pill--delayed';
    case 'Cancelled': return 'status-pill--cancelled';
    default: return '';
  }
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const previewFlights = departures.slice(0, 5);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/airport/flights?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="airport-hero">
        <div
          className="airport-hero__bg"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="airport-hero__content">
          <AnimatedSection>
            <LiveClock />
            <h1 className="airport-hero__title">
              Your Journey<br />Starts Here
            </h1>
            <p className="airport-hero__subtitle">
              Welcome to Apogee International Airport, Abuja — Africa's premier hub
              connecting you to 42 destinations across the globe.
            </p>
            <form className="airport-hero__search" onSubmit={handleSearch}>
              <input
                className="airport-hero__search-input"
                type="text"
                placeholder="Search flight number or destination"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="airport-hero__search-btn" type="submit">
                Search
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* Status Strip */}
      <section className="airport-status">
        <div className="airport-status__inner">
          <div className="airport-status__badge">
            <span className="airport-status__badge-label">Departures</span>
            <span className="airport-status__badge-value">124 On Time</span>
          </div>
          <div className="airport-status__badge">
            <span className="airport-status__badge-label">Arrivals</span>
            <span className="airport-status__badge-value">98 On Time</span>
          </div>
          <div className="airport-status__badge">
            <span className="airport-status__badge-label">Weather</span>
            <span className="airport-status__badge-value airport-status__badge-value--weather">
              28°C Clear
            </span>
          </div>
        </div>
      </section>

      {/* Flight Preview Board */}
      <section className="airport-board-preview">
        <div className="container">
          <AnimatedSection>
            <div className="airport-board-preview__header">
              <h2 className="airport-board-preview__title">Live Departures</h2>
              <Link to="/airport/flights" className="airport-board-preview__link">
                View All Flights &rarr;
              </Link>
            </div>
            <div className="airport-board-preview__table-wrap">
              <table className="airport-board-preview__table">
                <thead>
                  <tr>
                    <th>Flight</th>
                    <th>Airline</th>
                    <th>Destination</th>
                    <th>Gate</th>
                    <th>Scheduled</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {previewFlights.map((f) => (
                    <tr key={f.flight} className={f.status === 'Boarding' ? 'boarding-row' : ''}>
                      <td className="flight-mono">{f.flight}</td>
                      <td>{f.airline}</td>
                      <td>{f.destination}</td>
                      <td className="flight-mono">{f.gate}</td>
                      <td className="flight-mono">{f.scheduled}</td>
                      <td>
                        <span className={`status-pill ${getStatusClass(f.status)}`}>
                          {f.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="airport-services-grid">
        <div className="container">
          <AnimatedSection>
            <p className="section-label airport-services-grid__label">Passenger Experience</p>
            <h2 className="airport-services-grid__title">Airport Services</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid-4">
              {[
                { icon: '🛋️', name: 'Lounges', desc: 'Premium and business lounges with world-class amenities across all terminals.' },
                { icon: '🍽️', name: 'Dining', desc: 'Over 40 restaurants and cafes serving local and international cuisine.' },
                { icon: '🛍️', name: 'Shopping', desc: 'Duty-free shops, luxury brands, and African artisan boutiques.' },
                { icon: '🚐', name: 'Ground Transport', desc: 'Taxis, ride-share, shuttles, and car rental services available 24/7.' },
              ].map((s) => (
                <div className="airport-service-card" key={s.name}>
                  <div className="airport-service-card__icon">{s.icon}</div>
                  <h3 className="airport-service-card__name">{s.name}</h3>
                  <p className="airport-service-card__desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="airport-stats">
        <div className="container">
          <AnimatedSection>
            <motion.div className="airport-stats__grid" variants={fadeUp}>
              <div className="airport-stats__item">
                <CounterStat end={3} suffix="" label="Terminals" />
              </div>
              <div className="airport-stats__item">
                <CounterStat end={180} suffix="" label="Daily Flights" />
              </div>
              <div className="airport-stats__item">
                <CounterStat end={42} suffix="" label="Destinations" />
              </div>
              <div className="airport-stats__item">
                <CounterStat end={12} suffix="M" label="Passengers / Year" />
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
