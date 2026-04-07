import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';

const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85',
  app: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
};

const marqueeItems = [
  'DELIVERIES TODAY: 2,481',
  'CITIES: 24',
  'AVG TIME: 38 MIN',
  'RATING: 4.8★',
];

const steps = [
  {
    num: 1,
    icon: '📱',
    title: 'Place Order',
    desc: 'Open the Zinga app or website, select your service, and enter pickup and delivery details.',
  },
  {
    num: 2,
    icon: '🏍️',
    title: 'Rider Assigned',
    desc: 'A nearby verified rider accepts your order within seconds. You see their name and ETA instantly.',
  },
  {
    num: 3,
    icon: '📍',
    title: 'En Route',
    desc: 'Track your delivery in real time on the live map. Get SMS and in-app updates at every milestone.',
  },
  {
    num: 4,
    icon: '✅',
    title: 'Delivered',
    desc: 'Your package arrives safely. Rate the rider, confirm receipt, and you are done. Simple as that.',
  },
];

const serviceCards = [
  { icon: '🍔', title: 'Food Delivery', desc: 'Hot meals from 2,000+ restaurants, delivered under 35 minutes.' },
  { icon: '📦', title: 'Parcel', desc: 'Same-day parcels across Lagos, next-day to 24 cities nationwide.' },
  { icon: '💊', title: 'Pharmacy', desc: 'Licensed pharmacy partners. Priority delivery in 45 minutes.' },
  { icon: '🛒', title: 'E-commerce', desc: 'Seamless last-mile fulfillment for online stores and sellers.' },
  { icon: '🏥', title: 'Medical', desc: 'Temperature-controlled, chain-of-custody medical logistics.' },
];

export default function Home() {
  const [trackingInput, setTrackingInput] = useState('');
  const navigate = useNavigate();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const orderId = trackingInput.trim() || 'ZNG-29471';
    navigate(`/delivery/track?order=${encodeURIComponent(orderId)}`);
  };

  return (
    <div className="del-page-enter">
      {/* ── HERO ── */}
      <section className="del-hero">
        <div className="del-hero__bg">
          <img src={IMAGES.hero} alt="Lagos delivery" />
        </div>

        <AnimatedSection className="del-hero__content">
          <h1 className="del-hero__heading">
            Delivered in<br />
            <span>Minutes.</span>
          </h1>
          <p className="del-hero__sub">
            Not hours. Zinga is Lagos&rsquo;s fastest same-day delivery platform.
            From food to parcels to pharmacy — we move what matters, when it matters.
          </p>

          <form className="del-hero__track-bar" onSubmit={handleTrack}>
            <input
              type="text"
              placeholder="Enter tracking number"
              value={trackingInput}
              onChange={(e) => setTrackingInput(e.target.value)}
            />
            <motion.button type="submit" {...buttonHover}>
              Track
            </motion.button>
          </form>
        </AnimatedSection>
      </section>

      {/* ── STATS MARQUEE ── */}
      <div className="del-marquee">
        <div className="del-marquee__track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span className="del-marquee__item" key={i}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <AnimatedSection className="del-how">
        <h2 className="del-how__title">How It Works</h2>
        <p className="del-how__subtitle">
          Four simple steps between you and your delivery. No complicated processes, no hidden fees.
        </p>

        <div className="del-how__steps">
          <div className="del-how__line">
            <motion.div
              className="del-how__line-fill"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              className="del-how__step"
              key={step.num}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={`del-how__number ${index <= 2 ? 'del-how__number--active' : ''}`}>
                {step.num}
              </div>
              <div className="del-how__icon">{step.icon}</div>
              <h4 className="del-how__step-title">{step.title}</h4>
              <p className="del-how__step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* ── SERVICES GRID ── */}
      <AnimatedSection className="del-services-grid">
        <div className="del-services-grid__inner">
          <h2 className="del-services-grid__title">What We Deliver</h2>
          <p className="del-services-grid__subtitle">
            Five core services. One platform. Infinite reliability.
          </p>

          <div className="del-services-grid__grid">
            {serviceCards.map((card, i) => (
              <motion.div
                className="del-services-grid__card"
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="del-services-grid__icon">{card.icon}</div>
                <h4 className="del-services-grid__card-title">{card.title}</h4>
                <p className="del-services-grid__card-desc">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── APP DOWNLOAD ── */}
      <AnimatedSection className="del-app-section">
        <div className="del-app-section__inner">
          <div className="del-app-section__text">
            <h2>
              Download the Zinga App
            </h2>
            <p>
              Everything you need in your pocket. Place orders, track deliveries in real time,
              save favourite addresses, and manage your delivery history — all from one sleek app.
              Available on iOS and Android.
            </p>

            <div className="del-app-section__badges">
              <Link to="/delivery" className="del-app-section__badge">
                <div>
                  <span>Download on the</span>
                  App Store
                </div>
              </Link>
              <Link to="/delivery" className="del-app-section__badge">
                <div>
                  <span>Get it on</span>
                  Google Play
                </div>
              </Link>
            </div>
          </div>

          <div className="del-app-section__phone">
            <div className="del-app-section__phone-frame">
              <div className="del-app-section__phone-screen">
                <img src={IMAGES.app} alt="Zinga mobile app" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
