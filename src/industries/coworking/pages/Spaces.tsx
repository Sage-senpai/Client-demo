import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';
import spacesData from '../data/spacesData';

export default function Spaces() {
  return (
    <div className="cw-spaces">
      {/* ── HERO ── */}
      <section className="cw-spaces__hero">
        <div className="cw-container">
          <h1>Our Spaces</h1>
          <p>
            From flexible hot desks to fully private offices, find the space that fits your workflow.
          </p>
        </div>
      </section>

      {/* ── SPACE SECTIONS ── */}
      {spacesData.map((space) => (
        <AnimatedSection key={space.id} className="cw-space-section">
          <div className="cw-container">
            <div className="cw-space-section__content">
              <div className="cw-space-section__image">
                <img src={space.image} alt={space.name} />
              </div>
              <div className="cw-space-section__info">
                <h2>{space.name}</h2>
                <div className="cw-space-section__info-price">{space.priceDisplay}</div>
                <div className="cw-space-section__info-capacity">
                  Capacity: {space.capacity}
                </div>
                <p>{space.description}</p>
                <ul className="cw-space-section__amenities">
                  {space.amenities.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                <motion.div {...buttonHover}>
                  <Link to="/coworking/book" className="cw-btn cw-btn--primary">
                    Book Now →
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
