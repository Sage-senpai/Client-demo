import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';

type GalleryCategory = 'All' | 'Rooms' | 'Beach' | 'Dining' | 'Spa';

interface GalleryImage {
  id: number;
  src: string;
  label: string;
  category: GalleryCategory;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://picsum.photos/seed/coral1/600/400',
    label: 'Garden Deluxe Suite',
    category: 'Rooms',
  },
  {
    id: 2,
    src: 'https://picsum.photos/seed/coral2/600/800',
    label: 'Sunrise Beach',
    category: 'Beach',
  },
  {
    id: 3,
    src: 'https://picsum.photos/seed/coral3/600/500',
    label: 'Coral Kitchen Interior',
    category: 'Dining',
  },
  {
    id: 4,
    src: 'https://picsum.photos/seed/coral4/600/700',
    label: 'Spa Treatment Room',
    category: 'Spa',
  },
  {
    id: 5,
    src: 'https://picsum.photos/seed/coral5/600/450',
    label: 'Overwater Bungalow',
    category: 'Rooms',
  },
  {
    id: 6,
    src: 'https://picsum.photos/seed/coral6/600/600',
    label: 'Lagoon at Dusk',
    category: 'Beach',
  },
  {
    id: 7,
    src: 'https://picsum.photos/seed/coral7/600/500',
    label: 'The Sunset Bar',
    category: 'Dining',
  },
  {
    id: 8,
    src: 'https://picsum.photos/seed/coral8/600/750',
    label: 'Vitality Pool',
    category: 'Spa',
  },
  {
    id: 9,
    src: 'https://picsum.photos/seed/coral9/600/400',
    label: 'Lagoon View Suite',
    category: 'Rooms',
  },
  {
    id: 10,
    src: 'https://picsum.photos/seed/coral10/600/550',
    label: 'Aerial Coastline',
    category: 'Beach',
  },
  {
    id: 11,
    src: 'https://picsum.photos/seed/coral11/600/480',
    label: 'Tasting Menu Presentation',
    category: 'Dining',
  },
  {
    id: 12,
    src: 'https://picsum.photos/seed/coral12/600/650',
    label: 'Yoga Pavilion',
    category: 'Spa',
  },
];

const categories: GalleryCategory[] = ['All', 'Rooms', 'Beach', 'Dining', 'Spa'];

export default function Gallery() {
  const [active, setActive] = useState<GalleryCategory>('All');

  const filtered = active === 'All' ? galleryImages : galleryImages.filter((img) => img.category === active);

  return (
    <div className="resort-gallery-page">
      {/* ── PAGE HERO ── */}
      <div className="resort-page-hero">
        <img
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=85"
          alt="Gallery"
          className="resort-page-hero__bg"
        />
        <div className="resort-page-hero__overlay" />
        <div className="resort-page-hero__content">
          <h1 className="resort-page-hero__title">Gallery</h1>
          <p className="resort-page-hero__subtitle">
            A visual journey through the beauty of Coral Terrace.
          </p>
        </div>
      </div>

      {/* ── GALLERY ── */}
      <section className="resort-section">
        <div className="resort-container">
          <AnimatedSection>
            <div className="resort-filter-row">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  className={`resort-filter-btn ${active === cat ? 'resort-filter-btn--active' : ''}`}
                  onClick={() => setActive(cat)}
                  {...buttonHover}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="resort-gallery-grid">
              <AnimatePresence mode="popLayout">
                {filtered.map((img) => (
                  <motion.div
                    key={img.id}
                    className="resort-gallery-item"
                    layout
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.35 }}
                  >
                    <img src={img.src} alt={img.label} />
                    <div className="resort-gallery-item__overlay">
                      <span className="resort-gallery-item__label">{img.label}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
