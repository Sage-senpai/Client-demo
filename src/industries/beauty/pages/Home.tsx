import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { categories } from '../data/servicesData';

const trustPillars = [
  { icon: '✦', title: 'Premium Products', text: 'We use only salon-grade, ethically sourced products from world-leading brands.' },
  { icon: '✂', title: 'Certified Stylists', text: 'Every stylist is licensed and continuously trained on the latest techniques.' },
  { icon: '🛡', title: 'Hygiene First', text: 'Hospital-grade sterilisation, fresh towels, and single-use tools where needed.' },
  { icon: '💎', title: 'Loyalty Rewards', text: 'Earn points on every visit and unlock exclusive perks, discounts, and free services.' },
];

const categoryCards = [
  {
    title: 'Hair',
    image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Skin',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Nails',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Spa',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
  },
];

const stylists = [
  { name: 'Amara Obi', specialty: 'Hair Colourist', photo: 'https://picsum.photos/seed/stylist1/300/300' },
  { name: 'Chidinma Eze', specialty: 'Braids & Locs', photo: 'https://picsum.photos/seed/stylist2/300/300' },
  { name: 'Kelechi Nwankwo', specialty: 'Skin Therapist', photo: 'https://picsum.photos/seed/stylist3/300/300' },
  { name: 'Fatima Bello', specialty: 'Nail Artist', photo: 'https://picsum.photos/seed/stylist4/300/300' },
];

const galleryImages = [
  'https://picsum.photos/seed/beauty-g1/400/400',
  'https://picsum.photos/seed/beauty-g2/400/400',
  'https://picsum.photos/seed/beauty-g3/400/400',
  'https://picsum.photos/seed/beauty-g4/400/400',
  'https://picsum.photos/seed/beauty-g5/400/400',
  'https://picsum.photos/seed/beauty-g6/400/400',
];

const reviews = [
  {
    name: 'Ngozi Adichie',
    date: '2 weeks ago',
    text: 'Absolutely love Radiance Studio! Amara transformed my hair with the most beautiful balayage. The ambience is so relaxing and every staff member is incredibly professional.',
    avatar: 'https://picsum.photos/seed/review1/100/100',
  },
  {
    name: 'Ibrahim Musa',
    date: '1 month ago',
    text: 'Best grooming experience in Abuja, hands down. The hot stone massage was heavenly, and the attention to detail in their barbering is world-class. Already booked my next visit!',
    avatar: 'https://picsum.photos/seed/review2/100/100',
  },
  {
    name: 'Aisha Balogun',
    date: '3 weeks ago',
    text: 'My bridal package was perfection. From the trial session to the wedding day, Radiance Studio made me feel like the most beautiful bride. My girls loved their makeup too!',
    avatar: 'https://picsum.photos/seed/review3/100/100',
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState('');
  const [bookingDate, setBookingDate] = useState('');

  const handleQuickBook = () => {
    navigate('/beauty/book');
  };

  return (
    <div className="beauty-home">
      {/* ── Hero ── */}
      <section className="beauty-hero">
        <div
          className="beauty-hero__bg"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1560066984-138daac8a51a?auto=format&fit=crop&w=1400&q=85)',
          }}
        />
        <div className="beauty-hero__overlay" />
        <div className="beauty-hero__content">
          <motion.h1
            className="beauty-hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Your Glow,<br /><span>Amplified.</span>
          </motion.h1>
          <motion.p
            className="beauty-hero__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Premium hair, skin &amp; wellness experiences — crafted by Abuja&rsquo;s finest stylists in a space designed for your radiance.
          </motion.p>
          <motion.div
            className="beauty-hero__ctas"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/beauty/book">
              <motion.button className="beauty-hero__btn-primary" {...buttonHover}>
                Book Appointment
              </motion.button>
            </Link>
            <Link to="/beauty/services">
              <motion.button className="beauty-hero__btn-outline" {...buttonHover}>
                Our Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
        <div className="beauty-hero__scroll-indicator">&#8964;</div>
      </section>

      {/* ── Floating Booking Widget ── */}
      <AnimatedSection>
        <div className="beauty-booking-widget">
          <div className="beauty-booking-widget__field">
            <label>Service</label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
              <option value="">Select a service</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="beauty-booking-widget__field">
            <label>Preferred Date</label>
            <input
              type="date"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
            />
          </div>
          <motion.button
            className="beauty-booking-widget__btn"
            onClick={handleQuickBook}
            {...buttonHover}
          >
            Book Now
          </motion.button>
        </div>
      </AnimatedSection>

      {/* ── Why Radiance (Trust Pillars) ── */}
      <section className="beauty-trust">
        <AnimatedSection className="beauty-trust__inner">
          <p className="section-label">Why Radiance</p>
          <h2 className="beauty-trust__heading">The Radiance Difference</h2>
          <div className="beauty-trust__grid">
            {trustPillars.map((pillar, i) => (
              <div className="beauty-trust__pillar" key={i}>
                <div className="beauty-trust__pillar-icon">{pillar.icon}</div>
                <h3 className="beauty-trust__pillar-title">{pillar.title}</h3>
                <p className="beauty-trust__pillar-text">{pillar.text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Service Category Showcase ── */}
      <section className="beauty-categories">
        <AnimatedSection className="beauty-categories__inner">
          <p className="section-label">What We Do</p>
          <h2 className="beauty-categories__heading">Our Specialties</h2>
          <p className="beauty-categories__subtitle">
            From transformative hair styling to rejuvenating skin treatments, explore the full range of Radiance services.
          </p>
          <div className="beauty-categories__grid">
            {categoryCards.map((card, i) => (
              <Link to="/beauty/services" key={i}>
                <motion.div className="beauty-categories__card" {...buttonHover}>
                  <img
                    className="beauty-categories__card-img"
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                  />
                  <div className="beauty-categories__card-overlay">
                    <h3 className="beauty-categories__card-title">{card.title}</h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Stats ── */}
      <section className="beauty-trust">
        <AnimatedSection className="beauty-trust__inner">
          <div className="beauty-trust__grid">
            <CounterStat end={8} suffix="+" label="Years in Abuja" />
            <CounterStat end={15000} suffix="+" label="Happy Clients" />
            <CounterStat end={25} suffix="" label="Expert Stylists" />
            <CounterStat end={4.9} suffix="★" label="Google Rating" />
          </div>
        </AnimatedSection>
      </section>

      {/* ── Stylist Spotlight ── */}
      <section className="beauty-stylists-spotlight">
        <AnimatedSection className="beauty-stylists-spotlight__inner">
          <p className="section-label">Our Talent</p>
          <h2 className="beauty-stylists-spotlight__heading">Meet Our Stylists</h2>
          <div className="beauty-stylists-spotlight__grid">
            {stylists.map((stylist, i) => (
              <Link to="/beauty/team" key={i}>
                <div className="beauty-stylists-spotlight__card">
                  <img
                    className="beauty-stylists-spotlight__card-photo"
                    src={stylist.photo}
                    alt={stylist.name}
                    loading="lazy"
                  />
                  <h3 className="beauty-stylists-spotlight__card-name">{stylist.name}</h3>
                  <p className="beauty-stylists-spotlight__card-specialty">{stylist.specialty}</p>
                </div>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Instagram-Style Gallery Strip ── */}
      <section className="beauty-gallery-strip">
        <AnimatedSection className="beauty-gallery-strip__inner">
          <p className="section-label">Follow Our Work</p>
          <h2 className="beauty-gallery-strip__heading">@radiancestudio</h2>
          <div className="beauty-gallery-strip__grid">
            {galleryImages.map((img, i) => (
              <Link to="/beauty/gallery" key={i}>
                <div className="beauty-gallery-strip__item">
                  <img src={img} alt={`Gallery ${i + 1}`} loading="lazy" />
                </div>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Google Reviews ── */}
      <section className="beauty-reviews">
        <AnimatedSection className="beauty-reviews__inner">
          <p className="section-label">Client Love</p>
          <h2 className="beauty-reviews__heading">What Our Clients Say</h2>
          <div className="beauty-reviews__rating">
            <span className="beauty-reviews__rating-stars">★★★★★</span>
            <span className="beauty-reviews__rating-text">4.9 out of 5 — 320+ Google Reviews</span>
          </div>
          <div className="beauty-reviews__grid">
            {reviews.map((review, i) => (
              <div className="beauty-reviews__card" key={i}>
                <div className="beauty-reviews__card-stars">★★★★★</div>
                <p className="beauty-reviews__card-text">&ldquo;{review.text}&rdquo;</p>
                <div className="beauty-reviews__card-author">
                  <img
                    className="beauty-reviews__card-avatar"
                    src={review.avatar}
                    alt={review.name}
                    loading="lazy"
                  />
                  <div>
                    <p className="beauty-reviews__card-name">{review.name}</p>
                    <p className="beauty-reviews__card-date">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
