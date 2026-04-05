import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { departures, arrivals } from '../data/flightsData';
import { pageTransition } from '../../../styles/_animations';

function getStatusClass(status: string) {
  switch (status) {
    case 'On Time': return 'status-pill--on-time';
    case 'Boarding': return 'status-pill--boarding';
    case 'Delayed': return 'status-pill--delayed';
    case 'Cancelled': return 'status-pill--cancelled';
    default: return '';
  }
}

export default function Flights() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [activeTab, setActiveTab] = useState<'departures' | 'arrivals'>('departures');
  const [search, setSearch] = useState(initialQuery);

  const data = activeTab === 'departures' ? departures : arrivals;

  const filtered = useMemo(() => {
    if (!search.trim()) return data;
    const q = search.toLowerCase();
    return data.filter(
      (f) =>
        f.flight.toLowerCase().includes(q) ||
        f.destination.toLowerCase().includes(q) ||
        f.airline.toLowerCase().includes(q)
    );
  }, [data, search]);

  return (
    <motion.div {...pageTransition}>
      <section className="airport-flights">
        <div className="container">
          <AnimatedSection>
            <div className="airport-flights__header">
              <h1 className="airport-flights__title">
                {activeTab === 'departures' ? 'Departures' : 'Arrivals'}
              </h1>
              <div className="airport-flights__live">
                <span className="airport-flights__live-dot" />
                LIVE
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="airport-flights__tabs">
              <button
                className={`airport-flights__tab ${activeTab === 'departures' ? 'airport-flights__tab--active' : ''}`}
                onClick={() => setActiveTab('departures')}
              >
                Departures
              </button>
              <button
                className={`airport-flights__tab ${activeTab === 'arrivals' ? 'airport-flights__tab--active' : ''}`}
                onClick={() => setActiveTab('arrivals')}
              >
                Arrivals
              </button>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="airport-flights__search">
              <input
                className="airport-flights__search-input"
                type="text"
                placeholder="Filter by flight number, destination, or airline..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="airport-flights__table-wrap">
              <table className="airport-flights__table">
                <thead>
                  <tr>
                    <th>Flight</th>
                    <th>Airline</th>
                    <th>Destination</th>
                    <th>Terminal</th>
                    <th>Gate</th>
                    <th>Scheduled</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={7}>
                        No flights match your search.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((f) => (
                      <tr
                        key={f.flight}
                        className={f.status === 'Boarding' ? 'boarding-row' : ''}
                      >
                        <td className="flight-mono">{f.flight}</td>
                        <td>{f.airline}</td>
                        <td>{f.destination}</td>
                        <td className="flight-mono">T{f.terminal}</td>
                        <td className="flight-mono">{f.gate}</td>
                        <td className="flight-mono">{f.scheduled}</td>
                        <td>
                          <span className={`status-pill ${getStatusClass(f.status)}`}>
                            {f.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
