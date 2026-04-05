import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { pageTransition } from '../../../styles/_animations';

interface TerminalData {
  id: number;
  name: string;
  airlines: string[];
  gatePrefix: string;
  gateCount: number;
  amenities: { icon: string; name: string }[];
}

const terminalData: TerminalData[] = [
  {
    id: 1,
    name: 'Terminal 1 — Domestic',
    airlines: [
      'Air Peace', 'Arik Air', 'Dana Air', 'Ibom Air', 'Azman Air',
      'United Nigeria', 'Green Africa Airways', 'ValueJet',
    ],
    gatePrefix: 'A',
    gateCount: 22,
    amenities: [
      { icon: '🛋️', name: 'Apogee Lounge' },
      { icon: '🍽️', name: 'Kilimanjaro Grill' },
      { icon: '☕', name: 'Bean & Brew Cafe' },
      { icon: '🛍️', name: 'Naija Crafts Shop' },
      { icon: '💊', name: 'Medical Center' },
      { icon: '🕌', name: 'Multi-Faith Prayer Room' },
      { icon: '👶', name: 'Family Lounge' },
      { icon: '📱', name: 'Tech Hub & Charging' },
    ],
  },
  {
    id: 2,
    name: 'Terminal 2 — Regional Africa',
    airlines: [
      'Ethiopian Airlines', 'Kenya Airways', 'South African Airways',
      'EgyptAir', 'RwandAir', 'ASKY Airlines', 'Royal Air Maroc', 'Air Senegal',
    ],
    gatePrefix: 'B',
    gateCount: 18,
    amenities: [
      { icon: '🛋️', name: 'Savanna Executive Lounge' },
      { icon: '🍽️', name: 'Ubuntu Bites' },
      { icon: '🍸', name: 'Sunset Rooftop Bar' },
      { icon: '🛍️', name: 'Africa Duty Free' },
      { icon: '💊', name: 'Pharmacy & Clinic' },
      { icon: '🕌', name: 'Prayer Rooms' },
      { icon: '💆', name: 'Transit Spa' },
      { icon: '🏦', name: 'Currency Exchange' },
    ],
  },
  {
    id: 3,
    name: 'Terminal 3 — International',
    airlines: [
      'Emirates', 'British Airways', 'Turkish Airlines', 'Air France',
      'Lufthansa', 'Qatar Airways', 'Delta Air Lines', 'KLM Royal Dutch Airlines',
    ],
    gatePrefix: 'C',
    gateCount: 32,
    amenities: [
      { icon: '🛋️', name: 'First Class Diamond Lounge' },
      { icon: '🛋️', name: 'Business Class Horizon Lounge' },
      { icon: '🍽️', name: 'Le Vol Restaurant' },
      { icon: '🍸', name: 'Cloud Nine Cocktail Bar' },
      { icon: '🛍️', name: 'World Duty Free' },
      { icon: '🛍️', name: 'Designer Boutiques' },
      { icon: '💊', name: 'International Medical Center' },
      { icon: '🕌', name: 'Interfaith Chapel' },
      { icon: '💆', name: 'Apogee Wellness Spa' },
      { icon: '🏨', name: 'Transit Hotel & Sleep Pods' },
    ],
  },
];

function generateGates(prefix: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `${prefix}${String(i + 1).padStart(2, '0')}`);
}

export default function Terminals() {
  const [activeTerminal, setActiveTerminal] = useState(0);
  const terminal = terminalData[activeTerminal];
  const gates = generateGates(terminal.gatePrefix, terminal.gateCount);

  return (
    <motion.div {...pageTransition}>
      <section className="airport-terminals">
        <div className="container">
          <AnimatedSection>
            <h1 className="airport-terminals__title">Terminal Guide</h1>
            <p className="airport-terminals__subtitle">
              Navigate our three world-class terminals with ease
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="airport-terminals__tabs">
              {terminalData.map((t, idx) => (
                <button
                  key={t.id}
                  className={`airport-terminals__tab ${activeTerminal === idx ? 'airport-terminals__tab--active' : ''}`}
                  onClick={() => setActiveTerminal(idx)}
                >
                  Terminal {t.id}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="airport-terminals__section">
              <h2 className="airport-terminals__section-title">{terminal.name}</h2>
            </div>
          </AnimatedSection>

          {/* Airlines */}
          <AnimatedSection>
            <div className="airport-terminals__section">
              <p className="airport-terminals__gates-label">Airlines Operating</p>
              <div className="airport-terminals__airlines-list">
                {terminal.airlines.map((airline) => (
                  <span key={airline} className="airport-terminals__airline-tag">
                    {airline}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Gates */}
          <AnimatedSection>
            <div className="airport-terminals__section">
              <p className="airport-terminals__gates-label">
                Gates ({terminal.gatePrefix}01 &ndash; {terminal.gatePrefix}{String(terminal.gateCount).padStart(2, '0')})
              </p>
              <div className="airport-terminals__gates-list">
                {gates.map((gate) => (
                  <span key={gate} className="airport-terminals__gate">
                    {gate}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Amenities */}
          <AnimatedSection>
            <div className="airport-terminals__section">
              <h3 className="airport-terminals__amenities-title">Amenities &amp; Facilities</h3>
              <div className="grid-4">
                {terminal.amenities.map((amenity, i) => (
                  <div key={`${amenity.name}-${i}`} className="terminal-amenity-card">
                    <div className="terminal-amenity-card__icon">{amenity.icon}</div>
                    <div className="terminal-amenity-card__name">{amenity.name}</div>
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
