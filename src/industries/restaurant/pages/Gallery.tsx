import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeIn } from '../../../styles/_animations';

type GalleryCategory = 'All' | 'Food' | 'Interior' | 'Team' | 'Events';

interface GalleryImage {
  id: number;
  src: string;
  category: GalleryCategory;
  label: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://picsum.photos/seed/gal1/800/600', category: 'Food', label: 'Food' },
  { id: 2, src: 'https://picsum.photos/seed/gal2/800/1000', category: 'Interior', label: 'Interior' },
  { id: 3, src: 'https://picsum.photos/seed/gal3/800/600', category: 'Food', label: 'Food' },
  { id: 4, src: 'https://picsum.photos/seed/gal4/800/900', category: 'Team', label: 'Team' },
  { id: 5, src: 'https://picsum.photos/seed/gal5/800/600', category: 'Events', label: 'Events' },
  { id: 6, src: 'https://picsum.photos/seed/gal6/800/800', category: 'Food', label: 'Food' },
  { id: 7, src: 'https://picsum.photos/seed/gal7/800/1100', category: 'Interior', label: 'Interior' },
  { id: 8, src: 'https://picsum.photos/seed/gal8/800/600', category: 'Events', label: 'Events' },
  { id: 9, src: 'https://picsum.photos/seed/gal9/800/700', category: 'Team', label: 'Team' },
  { id: 10, src: 'https://picsum.photos/seed/gal10/800/600', category: 'Food', label: 'Food' },
  { id: 11, src: 'https://picsum.photos/seed/gal11/800/900', category: 'Interior', label: 'Interior' },
  { id: 12, src: 'https://picsum.photos/seed/gal12/800/600', category: 'Events', label: 'Events' },
];

const filterCategories: GalleryCategory[] = ['All', 'Food', 'Interior', 'Team', 'Events'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('All');

  const filtered =
    activeFilter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <div className="rest-gallery">
      {/* ── Header ── */}
      <div className="rest-page-header">
        <AnimatedSection>
          <p className="rest-page-header__label">Visual Journey</p>
          <h1 className="rest-page-header__title">Gallery</h1>
          <p className="rest-page-header__subtitle">
            A glimpse into the world of Koko &amp; Thyme — our food, our space, our people.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Filter Tabs ── */}
      <div className="rest-gallery__filters">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            className={`rest-gallery__filter-btn ${activeFilter === cat ? 'rest-gallery__filter-btn--active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Masonry Grid ── */}
      <AnimatedSection className="rest-gallery__masonry">
        <AnimatePresence mode="popLayout">
          {filtered.map((img) => (
            <motion.div
              key={img.id}
              className="rest-gallery__item"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              layout
              transition={{ duration: 0.4 }}
            >
              <img src={img.src} alt={img.label} loading="lazy" />
              <div className="rest-gallery__overlay">
                <span className="rest-gallery__overlay-label">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </AnimatedSection>
    </div>
  );
}
