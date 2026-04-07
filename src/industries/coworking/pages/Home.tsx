import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';
import { fadeUp, buttonHover } from '../../../styles/_animations';

const membershipCards = [
  { icon: '💻', name: 'Hot Desk', price: '₦2,500/day' },
  { icon: '🖥️', name: 'Dedicated Desk', price: '₦35,000/mo' },
  { icon: '🏢', name: 'Private Office', price: 'From ₦85,000/mo' },
  { icon: '🤝', name: 'Meeting Room', price: '₦5,000/hr' },
  { icon: '📬', name: 'Virtual Office', price: '₦15,000/mo' },
];

const testimonials = [
  {
    quote:
      'Grove & Co. transformed how I work. The plants, the coffee, the community — it all comes together to create a space where I actually look forward to Monday mornings.',
    name: 'Adaeze Okafor',
    initials: 'AO',
    role: 'Freelance Designer',
  },
  {
    quote:
      'We moved our 6-person startup here and productivity went through the roof. The private office is gorgeous, and The Grove Café means we never need to leave for lunch.',
    name: 'Tunde Bakare',
    initials: 'TB',
    role: 'CEO, PaySwift',
  },
  {
    quote:
      'The networking events alone are worth the membership. I have landed three clients just from conversations over coffee in the communal area. Incredible community.',
    name: 'Ngozi Eze',
    initials: 'NE',
    role: 'Marketing Consultant',
  },
];

const upcomingEvents = [
  {
    title: 'Lagos Startup Pitch Night',
    type: 'Networking',
    date: 'Jan 18, 2025',
    image: 'https://picsum.photos/seed/evt1/800/500',
  },
  {
    title: 'UX Design Workshop',
    type: 'Workshop',
    date: 'Jan 25, 2025',
    image: 'https://picsum.photos/seed/evt2/800/500',
  },
  {
    title: 'Coffee & Code: AI Edition',
    type: 'Masterclass',
    date: 'Feb 1, 2025',
    image: 'https://picsum.photos/seed/evt3/800/500',
  },
];

const menuHighlights = [
  { name: 'Avocado Toast with Suya Spice', price: '₦3,200' },
  { name: 'Flat White', price: '₦1,800' },
  { name: 'Tropical Green Smoothie', price: '₦2,500' },
  { name: 'Grilled Chicken Wrap', price: '₦3,800' },
  { name: 'Cold Brew on Tap', price: '₦2,000' },
];

export default function Home() {
  return (
    <div className="cw-home">
      {/* ── HERO ── */}
      <section className="cw-hero">
        <div className="cw-hero__text">
          <motion.h1
            className="cw-hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Work Better.<br />Live Greener.
          </motion.h1>
          <motion.p
            className="cw-hero__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Lagos' premier biophilic coworking space and artisan café.
            Surrounded by nature, powered by community, fuelled by great coffee.
          </motion.p>
          <motion.div
            className="cw-hero__ctas"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/coworking/spaces" className="cw-btn cw-btn--primary">
              Browse Spaces
            </Link>
            <Link to="/coworking/book" className="cw-btn cw-btn--copper">
              View Day Pass ₦2,500
            </Link>
          </motion.div>
        </div>
        <div className="cw-hero__image">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85"
            alt="Modern coworking space"
          />
        </div>
      </section>

      {/* ── MEMBERSHIP PREVIEW STRIP ── */}
      <AnimatedSection className="cw-membership-strip">
        <div className="cw-container">
          <h2 className="cw-section-title">Find Your Perfect Space</h2>
          <p className="cw-section-subtitle">
            From a single day pass to a fully furnished private office, we have a plan for every work style.
          </p>
          <div className="cw-membership-strip__grid">
            {membershipCards.map((card) => (
              <Link
                to="/coworking/membership"
                key={card.name}
                className="cw-membership-strip__card"
              >
                <div className="cw-membership-strip__card-icon">{card.icon}</div>
                <h4>{card.name}</h4>
                <div className="cw-membership-strip__card-price">{card.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── AMBIENCE SECTION ── */}
      <AnimatedSection className="cw-ambience">
        <div className="cw-container">
          <div className="cw-ambience__content">
            <div className="cw-ambience__masonry">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80"
                alt="Lush plants in workspace"
              />
              <img
                src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=800&q=80"
                alt="Open desk area"
              />
              <img
                src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80"
                alt="Meeting room"
              />
            </div>
            <div className="cw-ambience__text">
              <h2>Designed by Nature</h2>
              <p>
                Every corner of Grove &amp; Co. has been thoughtfully crafted to blend the indoors with
                the outdoors. Living walls, hanging planters, natural timber desks, and floor-to-ceiling
                windows flood every space with daylight and greenery.
              </p>
              <p>
                Studies show that biophilic design boosts focus by 15%, creativity by 15%, and overall
                wellbeing by 6%. We have taken that science and turned it into a workspace you will love.
              </p>
              <ul className="cw-ambience__text-features">
                <li>300+ living plants throughout the space</li>
                <li>Natural timber and recycled materials</li>
                <li>Circadian lighting that adjusts through the day</li>
                <li>Sound-masking water features</li>
                <li>Outdoor terrace with workspace pods</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── CAFÉ PREVIEW ── */}
      <AnimatedSection className="cw-cafe-preview">
        <div className="cw-container">
          <div className="cw-cafe-preview__content">
            <div className="cw-cafe-preview__image">
              <img
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80"
                alt="Artisan coffee"
              />
            </div>
            <div className="cw-cafe-preview__text">
              <h2>The Grove Café</h2>
              <p>
                More than just a coffee shop — it is the heartbeat of our community.
                Speciality single-origin beans, fresh breakfast bowls, house-made smoothies,
                and a menu that changes with the seasons.
              </p>
              <ul className="cw-cafe-preview__menu-highlights">
                {menuHighlights.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/coworking/cafe"
                className="cw-btn cw-btn--outline"
              >
                View Full Menu
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── TESTIMONIALS ── */}
      <AnimatedSection className="cw-testimonials">
        <div className="cw-container">
          <h2 className="cw-section-title">Member Stories</h2>
          <p className="cw-section-subtitle">
            Real words from real people who call Grove &amp; Co. their second home.
          </p>
          <div className="cw-testimonials__grid">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                className="cw-testimonials__card"
                {...buttonHover}
              >
                <blockquote>{t.quote}</blockquote>
                <div className="cw-testimonials__card-author">
                  <div className="cw-testimonials__card-author-avatar">
                    {t.initials}
                  </div>
                  <div className="cw-testimonials__card-author-info">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── EVENTS PREVIEW ── */}
      <AnimatedSection className="cw-events-preview">
        <div className="cw-container">
          <h2 className="cw-section-title">Upcoming Events</h2>
          <p className="cw-section-subtitle">
            Workshops, networking nights, and masterclasses curated for the Lagos creative community.
          </p>
          <div className="cw-events-preview__grid">
            {upcomingEvents.map((evt) => (
              <div key={evt.title} className="cw-event-card">
                <div className="cw-event-card__image">
                  <img src={evt.image} alt={evt.title} />
                  <span
                    className={`cw-event-card__badge cw-event-card__badge--${evt.type.toLowerCase()}`}
                  >
                    {evt.type}
                  </span>
                </div>
                <div className="cw-event-card__body">
                  <h4 className="cw-event-card__title">{evt.title}</h4>
                  <p className="cw-event-card__meta">{evt.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cw-events-preview__cta">
            <Link to="/coworking/events" className="cw-btn cw-btn--outline">
              View All Events
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* ── STATS ── */}
      <AnimatedSection className="cw-stats">
        <div className="cw-container">
          <div className="cw-stats__grid">
            <CounterStat end={200} suffix="+" label="Members" />
            <CounterStat end={8} suffix="" label="Meeting Rooms" />
            <CounterStat end={500} suffix="mbps" label="WiFi Speed" />
            <CounterStat end={15} suffix="hrs" label="Daily Hours (7am–10pm)" />
          </div>
        </div>
      </AnimatedSection>

      {/* ── BOTTOM CTA ── */}
      <AnimatedSection className="cw-bottom-cta">
        <div className="cw-container">
          <h2>Start Your Free Trial Day</h2>
          <p>
            Experience the Grove difference. Your first day is on us — no strings attached.
          </p>
          <Link to="/coworking/book" className="cw-btn cw-btn--copper">
            Book Your Free Day →
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
