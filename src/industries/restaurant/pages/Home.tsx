import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';
import { fadeUp, buttonHover } from '../../../styles/_animations';

const specials = [
  { name: 'Jollof Risotto', price: '₦18,500' },
  { name: 'Suya Ribeye', price: '₦25,000' },
  { name: 'Pepper Soup Consommé', price: '₦5,800' },
  { name: 'Ofada Lamb Rack', price: '₦22,000' },
  { name: 'Seafood Okra Pot', price: '₦28,000' },
  { name: 'Chapman Royale', price: '₦6,500' },
];

const featuredDishes = [
  {
    name: 'Jollof Risotto',
    description: 'Arborio rice cooked in a rich smoky jollof base with grilled lobster tail, finished with palm oil butter.',
    price: '₦18,500',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Suya Ribeye Steak',
    description: 'Dry-aged ribeye rubbed with suya spice, seared over an open flame, with roasted pepper sauce.',
    price: '₦25,000',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Seafood Okra Pot',
    description: 'A luxurious okra soup loaded with crab, prawns, and lobster, served with pounded yam.',
    price: '₦28,000',
    image: 'https://picsum.photos/seed/dish28/800/600',
  },
];

export default function Home() {
  return (
    <div className="rest-home">
      {/* ── Hero ── */}
      <section
        className="rest-hero"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85)',
        }}
      >
        <div className="rest-hero__overlay" />
        <div className="rest-hero__content">
          <motion.h1
            className="rest-hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Where West Africa<br />Meets the World
          </motion.h1>
          <motion.p
            className="rest-hero__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Contemporary Nigerian cuisine — crafted with intention, served with love.
          </motion.p>
          <motion.div
            className="rest-hero__ctas"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/restaurant/menu">
              <motion.button className="rest-hero__btn-primary" {...buttonHover}>
                View Our Menu
              </motion.button>
            </Link>
            <Link to="/restaurant/reservations">
              <motion.button className="rest-hero__btn-outline" {...buttonHover}>
                Reserve a Table
              </motion.button>
            </Link>
          </motion.div>
        </div>
        <div className="rest-hero__scroll-indicator">&#8964;</div>
      </section>

      {/* ── Specials Ticker ── */}
      <section className="rest-specials">
        <div className="rest-specials__track">
          {[...specials, ...specials].map((item, i) => (
            <span className="rest-specials__item" key={i}>
              {item.name} <span className="rest-specials__price">{item.price}</span>
              <span className="rest-specials__dot" />
            </span>
          ))}
        </div>
      </section>

      {/* ── Story Intro ── */}
      <section className="rest-story-intro">
        <AnimatedSection className="rest-story-intro__inner">
          <div className="rest-story-intro__text">
            <p className="section-label">Our Story</p>
            <h2 className="rest-story-intro__heading">
              A Love Letter to<br />West African Flavour
            </h2>
            <p className="rest-story-intro__paragraph">
              Koko &amp; Thyme was born from a simple conviction: the bold, layered flavours of
              West Africa deserve a seat at the world&rsquo;s finest tables. Founded in the
              heart of Lagos in 2012, our kitchen bridges the gap between tradition and
              contemporary fine dining.
            </p>
            <p className="rest-story-intro__paragraph">
              Every dish on our menu tells a story — of smoky suya evenings, of grandmother&rsquo;s
              pepper soup on rainy afternoons, of the vibrant markets that pulse through our
              city. We source locally, cook seasonally, and serve with deep respect for the
              ingredients and the culture they represent.
            </p>
            <Link to="/restaurant/our-story" className="rest-story-intro__link">
              Meet the Chef &#8594;
            </Link>
          </div>
          <div className="rest-story-intro__image">
            <img
              src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=800&q=80"
              alt="Chef at Koko and Thyme"
              loading="lazy"
            />
          </div>
        </AnimatedSection>
      </section>

      {/* ── Menu Preview ── */}
      <section className="rest-menu-preview">
        <AnimatedSection className="rest-menu-preview__inner">
          <div className="rest-menu-preview__header">
            <p className="section-label">From Our Kitchen</p>
            <h2 className="rest-menu-preview__title">Signature Dishes</h2>
          </div>
          <div className="rest-menu-preview__grid">
            {featuredDishes.map((dish, i) => (
              <div className="rest-menu-preview__card" key={i}>
                <img
                  className="rest-menu-preview__card-img"
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                />
                <div className="rest-menu-preview__card-body">
                  <h3 className="rest-menu-preview__card-name">{dish.name}</h3>
                  <p className="rest-menu-preview__card-desc">{dish.description}</p>
                  <div className="rest-menu-preview__card-footer">
                    <span className="rest-menu-preview__card-price">{dish.price}</span>
                    <Link to="/restaurant/menu" className="rest-menu-preview__card-link">
                      View Full Menu &#8594;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Stats Row ── */}
      <section className="rest-stats">
        <AnimatedSection className="rest-stats__inner">
          <CounterStat end={12} suffix="" label="Years of Excellence" />
          <CounterStat end={4.9} suffix="★" label="Guest Rating" />
          <CounterStat end={200} suffix="+" label="Dishes Crafted" />
          <CounterStat end={80} suffix="" label="Seats" />
        </AnimatedSection>
      </section>

      {/* ── Reservation CTA ── */}
      <section className="rest-reserve-cta">
        <AnimatedSection className="rest-reserve-cta__inner">
          <h2 className="rest-reserve-cta__title">
            Your Table Awaits
          </h2>
          <p className="rest-reserve-cta__text">
            Whether it&rsquo;s a romantic dinner for two or a celebration with friends,
            we&rsquo;ll craft an unforgettable evening for you.
          </p>
          <Link to="/restaurant/reservations">
            <motion.button className="rest-reserve-cta__btn" {...buttonHover}>
              Reserve a Table
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
