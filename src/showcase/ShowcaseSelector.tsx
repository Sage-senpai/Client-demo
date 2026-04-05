import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import industries from './industryData';
import './ShowcaseSelector.scss';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
};

export default function ShowcaseSelector() {
  const navigate = useNavigate();

  return (
    <div className="showcase">
      <motion.header
        className="showcase__header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="showcase__label">WEBSITE DEMO SHOWCASE</span>
        <h1 className="showcase__title">Which industry are we building for?</h1>
        <p className="showcase__subtitle">
          Ten fully-built, multi-page demo websites — each with unique design, features, and brand identity.
        </p>
      </motion.header>

      <motion.div
        className="showcase__grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {industries.map((ind) => (
          <motion.div
            key={ind.id}
            className="showcase-card"
            variants={cardVariants}
            style={{ '--card-accent': ind.accent } as React.CSSProperties}
            onClick={() => navigate(ind.route)}
          >
            <div className="showcase-card__image">
              <img src={ind.image} alt={ind.name} loading="lazy" />
              <div className="showcase-card__overlay" />
            </div>
            <div className="showcase-card__body">
              <div className="showcase-card__name-row">
                <span className="showcase-card__dot" />
                <span className="showcase-card__name">{ind.name}</span>
              </div>
              <span className="showcase-card__brand">{ind.brand}</span>
              <p className="showcase-card__desc">{ind.description}</p>
              <span className="showcase-card__link">Open demo site →</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
