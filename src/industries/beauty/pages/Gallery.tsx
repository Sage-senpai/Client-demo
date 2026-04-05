import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';

type GalleryTab = 'gallery' | 'before-after';
type GalleryFilter = 'All' | 'Hair' | 'Skin' | 'Nails' | 'Events';

interface GalleryItem {
  src: string;
  alt: string;
  category: GalleryFilter;
  height: number;
}

const galleryItems: GalleryItem[] = [
  { src: 'https://picsum.photos/seed/gal-hair1/600/800', alt: 'Silk press styling', category: 'Hair', height: 800 },
  { src: 'https://picsum.photos/seed/gal-skin1/600/500', alt: 'Facial glow treatment', category: 'Skin', height: 500 },
  { src: 'https://picsum.photos/seed/gal-nails1/600/600', alt: 'Gel nail art design', category: 'Nails', height: 600 },
  { src: 'https://picsum.photos/seed/gal-hair2/600/700', alt: 'Braids and cornrows', category: 'Hair', height: 700 },
  { src: 'https://picsum.photos/seed/gal-events1/600/500', alt: 'Bridal party preparation', category: 'Events', height: 500 },
  { src: 'https://picsum.photos/seed/gal-skin2/600/750', alt: 'Chemical peel result', category: 'Skin', height: 750 },
  { src: 'https://picsum.photos/seed/gal-nails2/600/600', alt: 'Acrylic full set', category: 'Nails', height: 600 },
  { src: 'https://picsum.photos/seed/gal-hair3/600/850', alt: 'Colour highlights', category: 'Hair', height: 850 },
  { src: 'https://picsum.photos/seed/gal-events2/600/550', alt: 'Salon opening event', category: 'Events', height: 550 },
  { src: 'https://picsum.photos/seed/gal-skin3/600/600', alt: 'Radiance glow facial', category: 'Skin', height: 600 },
  { src: 'https://picsum.photos/seed/gal-hair4/600/700', alt: 'Loc retwist styling', category: 'Hair', height: 700 },
  { src: 'https://picsum.photos/seed/gal-nails3/600/500', alt: 'Press-on custom nails', category: 'Nails', height: 500 },
  { src: 'https://picsum.photos/seed/gal-hair5/600/650', alt: 'Wig installation', category: 'Hair', height: 650 },
  { src: 'https://picsum.photos/seed/gal-events3/600/600', alt: 'Fashion show backstage', category: 'Events', height: 600 },
  { src: 'https://picsum.photos/seed/gal-skin4/600/700', alt: 'Anti-ageing treatment', category: 'Skin', height: 700 },
];

const beforeAfterData = [
  {
    title: 'Silk Press Transformation',
    description: 'From natural coils to sleek, bouncy silk press.',
    before: 'https://picsum.photos/seed/ba-before1/500/400',
    after: 'https://picsum.photos/seed/ba-after1/500/400',
  },
  {
    title: 'Colour Correction',
    description: 'Brassy orange corrected to a cool ash blonde.',
    before: 'https://picsum.photos/seed/ba-before2/500/400',
    after: 'https://picsum.photos/seed/ba-after2/500/400',
  },
  {
    title: 'Acne Scar Treatment',
    description: '6-week chemical peel programme results.',
    before: 'https://picsum.photos/seed/ba-before3/500/400',
    after: 'https://picsum.photos/seed/ba-after3/500/400',
  },
  {
    title: 'Loc Installation',
    description: 'Fresh comb coil locs on day one.',
    before: 'https://picsum.photos/seed/ba-before4/500/400',
    after: 'https://picsum.photos/seed/ba-after4/500/400',
  },
  {
    title: 'Bridal Glow-Up',
    description: 'Pre-wedding skincare and makeup transformation.',
    before: 'https://picsum.photos/seed/ba-before5/500/400',
    after: 'https://picsum.photos/seed/ba-after5/500/400',
  },
  {
    title: 'Nail Rescue',
    description: 'Damaged nails restored with strengthening treatment.',
    before: 'https://picsum.photos/seed/ba-before6/500/400',
    after: 'https://picsum.photos/seed/ba-after6/500/400',
  },
];

const filterCategories: GalleryFilter[] = ['All', 'Hair', 'Skin', 'Nails', 'Events'];

export default function Gallery() {
  const [tab, setTab] = useState<GalleryTab>('gallery');
  const [filter, setFilter] = useState<GalleryFilter>('All');

  const filteredItems =
    filter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="beauty-gallery-page">
      <AnimatedSection className="beauty-gallery-page__inner">
        <div className="beauty-gallery-page__header">
          <p className="section-label">Our Work</p>
          <h1 className="beauty-gallery-page__title">Gallery</h1>
          <p className="beauty-gallery-page__subtitle">
            A visual showcase of transformations, artistry, and beauty crafted at Radiance Studio.
          </p>
        </div>

        {/* Toggle */}
        <div className="beauty-gallery-page__toggle">
          <button
            className={`beauty-gallery-page__toggle-btn${tab === 'gallery' ? ' beauty-gallery-page__toggle-btn--active' : ''}`}
            onClick={() => setTab('gallery')}
          >
            Gallery
          </button>
          <button
            className={`beauty-gallery-page__toggle-btn${tab === 'before-after' ? ' beauty-gallery-page__toggle-btn--active' : ''}`}
            onClick={() => setTab('before-after')}
          >
            Before &amp; After
          </button>
        </div>

        <AnimatePresence mode="wait">
          {tab === 'gallery' ? (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              {/* Category Filters */}
              <div className="beauty-gallery-page__filters">
                {filterCategories.map((cat) => (
                  <button
                    key={cat}
                    className={`beauty-gallery-page__filter-btn${filter === cat ? ' beauty-gallery-page__filter-btn--active' : ''}`}
                    onClick={() => setFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Masonry Grid */}
              <div className="beauty-masonry">
                {filteredItems.map((item, i) => (
                  <motion.div
                    className="beauty-masonry__item"
                    key={item.src}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                  >
                    <img src={item.src} alt={item.alt} loading="lazy" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="before-after"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              {/* Before & After Grid */}
              <div className="beauty-before-after">
                {beforeAfterData.map((item, i) => (
                  <div className="beauty-before-after__card" key={i}>
                    <div className="beauty-before-after__images">
                      <div className="beauty-before-after__img-wrapper">
                        <img src={item.before} alt={`Before — ${item.title}`} loading="lazy" />
                        <span className="beauty-before-after__label">Before</span>
                      </div>
                      <div className="beauty-before-after__img-wrapper">
                        <img src={item.after} alt={`After — ${item.title}`} loading="lazy" />
                        <span className="beauty-before-after__label beauty-before-after__label--after">After</span>
                      </div>
                    </div>
                    <div className="beauty-before-after__body">
                      <h3 className="beauty-before-after__title">{item.title}</h3>
                      <p className="beauty-before-after__desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimatedSection>
    </div>
  );
}
