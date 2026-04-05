import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import menuData from '../data/menuData';
import type { Dish } from '../data/menuData';
import { fadeUp } from '../../../styles/_animations';

const categories = ['Starters', 'Mains', 'Desserts', 'Drinks', "Chef's Picks"] as const;
const dietFilters = ['All', 'Vegetarian', 'Gluten-Free', 'Spicy'] as const;

type DietFilter = (typeof dietFilters)[number];

const dietMap: Record<string, 'V' | 'GF' | 'S'> = {
  Vegetarian: 'V',
  'Gluten-Free': 'GF',
  Spicy: 'S',
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>('Starters');
  const [activeDiet, setActiveDiet] = useState<DietFilter>('All');

  const filtered = menuData.filter((dish: Dish) => {
    const catMatch = dish.category === activeCategory;
    const dietMatch =
      activeDiet === 'All' || dish.dietary.includes(dietMap[activeDiet]);
    return catMatch && dietMatch;
  });

  return (
    <div className="rest-menu">
      {/* ── Header ── */}
      <div className="rest-page-header">
        <AnimatedSection>
          <p className="rest-page-header__label">Curated Flavours</p>
          <h1 className="rest-page-header__title">Our Menu</h1>
          <p className="rest-page-header__subtitle">
            A celebration of West African cuisine, reimagined for the modern palate.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Filters ── */}
      <div className="rest-menu__filters">
        <div className="rest-menu__category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`rest-menu__tab ${activeCategory === cat ? 'rest-menu__tab--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="rest-menu__diet-filters">
          <span className="rest-menu__diet-label">Dietary Filter:</span>
          {dietFilters.map((d) => (
            <button
              key={d}
              className={`rest-menu__diet-btn ${activeDiet === d ? 'rest-menu__diet-btn--active' : ''}`}
              onClick={() => setActiveDiet(d)}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* ── Dishes Grid ── */}
      <AnimatedSection className="rest-menu__grid">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 && (
            <motion.div
              className="rest-menu__empty"
              key="empty"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              No dishes match your filter. Try adjusting your selection.
            </motion.div>
          )}
          {filtered.map((dish: Dish) => (
            <motion.div
              key={dish.id}
              className={`rest-menu__dish-card ${dish.isChefPick ? 'rest-menu__dish-card--chef-pick' : ''}`}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
              layout
            >
              <img
                className="rest-menu__dish-img"
                src={dish.image}
                alt={dish.name}
                loading="lazy"
              />
              <div className="rest-menu__dish-info">
                <div className="rest-menu__dish-top">
                  <h3 className="rest-menu__dish-name">{dish.name}</h3>
                  <span className="rest-menu__dish-price">{dish.price}</span>
                </div>
                <p className="rest-menu__dish-desc">{dish.description}</p>
                <div className="rest-menu__dish-tags">
                  {dish.dietary.map((tag) => (
                    <span key={tag} className={`rest-menu__dish-tag rest-menu__dish-tag--${tag}`}>
                      {tag === 'V' ? 'Vegetarian' : tag === 'GF' ? 'Gluten-Free' : 'Spicy'}
                    </span>
                  ))}
                  {dish.isChefPick && (
                    <span className="rest-menu__chef-badge">Chef&rsquo;s Pick</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </AnimatedSection>
    </div>
  );
}
