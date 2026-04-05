import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { pageTransition } from '../../../styles/_animations';

interface ParkingZone {
  zone: string;
  name: string;
  type: string;
  ratePerDay: number;
  capacity: number;
  distance: string;
  features: string;
  badgeClass: string;
}

const parkingZones: ParkingZone[] = [
  {
    zone: 'A',
    name: 'Premium Short Stay',
    type: 'Covered Multi-Storey',
    ratePerDay: 5000,
    capacity: 800,
    distance: '2 min walk to terminals',
    features: 'Covered parking, CCTV, EV charging, valet available',
    badgeClass: 'zone-badge--a',
  },
  {
    zone: 'B',
    name: 'Long Stay',
    type: 'Open-Air Secured',
    ratePerDay: 2500,
    capacity: 2000,
    distance: '5 min shuttle to terminals',
    features: 'Security patrols, CCTV, shuttle every 10 min',
    badgeClass: 'zone-badge--b',
  },
  {
    zone: 'C',
    name: 'Economy',
    type: 'Open-Air',
    ratePerDay: 1500,
    capacity: 3000,
    distance: '8 min shuttle to terminals',
    features: 'Budget-friendly, shuttle every 15 min, CCTV',
    badgeClass: 'zone-badge--c',
  },
];

const shuttleRoutes = [
  { route: 'Zone B to Terminal 1', frequency: 'Every 10 minutes', hours: '04:00 – 00:00' },
  { route: 'Zone B to Terminal 2', frequency: 'Every 10 minutes', hours: '04:00 – 00:00' },
  { route: 'Zone B to Terminal 3', frequency: 'Every 10 minutes', hours: '04:00 – 00:00' },
  { route: 'Zone C to Terminal 1', frequency: 'Every 15 minutes', hours: '05:00 – 23:00' },
  { route: 'Zone C to Terminal 2', frequency: 'Every 15 minutes', hours: '05:00 – 23:00' },
  { route: 'Zone C to Terminal 3', frequency: 'Every 15 minutes', hours: '05:00 – 23:00' },
];

export default function Parking() {
  const [selectedZone, setSelectedZone] = useState('A');
  const [days, setDays] = useState(1);

  const zone = parkingZones.find((z) => z.zone === selectedZone)!;
  const total = zone.ratePerDay * days;

  return (
    <motion.div {...pageTransition}>
      <section className="airport-parking">
        <div className="container">
          <AnimatedSection>
            <h1 className="airport-parking__title">Parking &amp; Transport</h1>
            <p className="airport-parking__subtitle">
              Convenient parking options and shuttle services for every budget
            </p>
          </AnimatedSection>

          {/* Parking Zones Table */}
          <AnimatedSection>
            <h2 className="airport-parking__section-title">Parking Zones</h2>
            <div className="airport-parking__zones-wrap">
              <table className="airport-parking__zones-table">
                <thead>
                  <tr>
                    <th>Zone</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Rate / Day</th>
                    <th>Capacity</th>
                    <th>Distance</th>
                    <th>Features</th>
                  </tr>
                </thead>
                <tbody>
                  {parkingZones.map((z) => (
                    <tr key={z.zone}>
                      <td>
                        <span className={`zone-badge ${z.badgeClass}`}>Zone {z.zone}</span>
                      </td>
                      <td>{z.name}</td>
                      <td>{z.type}</td>
                      <td className="flight-mono">{'\u20A6'}{z.ratePerDay.toLocaleString()}</td>
                      <td>{z.capacity.toLocaleString()} spaces</td>
                      <td>{z.distance}</td>
                      <td>{z.features}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          {/* Price Calculator */}
          <AnimatedSection>
            <div className="airport-parking__calculator">
              <h3 className="airport-parking__calc-title">Price Calculator</h3>
              <div className="airport-parking__calc-controls">
                <div className="airport-parking__calc-group">
                  <label className="airport-parking__calc-label">Parking Zone</label>
                  <select
                    className="airport-parking__calc-select"
                    value={selectedZone}
                    onChange={(e) => setSelectedZone(e.target.value)}
                  >
                    {parkingZones.map((z) => (
                      <option key={z.zone} value={z.zone}>
                        Zone {z.zone} — {z.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="airport-parking__calc-group">
                  <label className="airport-parking__calc-label">Number of Days</label>
                  <input
                    className="airport-parking__calc-input"
                    type="number"
                    min={1}
                    max={365}
                    value={days}
                    onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                </div>
              </div>
              <div className="airport-parking__calc-result">
                <span className="airport-parking__calc-result-label">
                  Zone {zone.zone} ({zone.name}) &times; {days} day{days > 1 ? 's' : ''}
                </span>
                <span className="airport-parking__calc-result-amount">
                  {'\u20A6'}{total.toLocaleString()}
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Shuttle Times */}
          <AnimatedSection>
            <div className="airport-parking__shuttle">
              <h3 className="airport-parking__shuttle-title">Shuttle Services</h3>
              <div className="grid-3">
                {shuttleRoutes.map((s) => (
                  <div key={s.route} className="shuttle-card">
                    <div className="shuttle-card__route">{s.route}</div>
                    <div className="shuttle-card__frequency">{s.frequency}</div>
                    <div className="shuttle-card__hours">{s.hours}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
