import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { properties } from '../data/propertiesData';

const featured = properties.filter((p) => p.isNew).slice(0, 4);

const servicesPreview = [
  { icon: '\u{1F3E0}', title: 'Buying', text: 'Find your dream property from our curated selection of premium homes and investments across Nigeria.' },
  { icon: '\u{1F4B0}', title: 'Selling', text: 'Get the best market value for your property with our expert valuation and marketing strategies.' },
  { icon: '\u{1F511}', title: 'Renting', text: 'Discover premium rental properties managed to the highest standards for tenants and landlords.' },
];

export default function Home() {
  const navigate = useNavigate();
  const [searchLocation, setSearchLocation] = useState('');
  const [searchMode, setSearchMode] = useState<'Buy' | 'Rent'>('Buy');

  const handleSearch = () => {
    navigate(`/realestate/listings?status=${searchMode}&q=${encodeURIComponent(searchLocation)}`);
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(price);

  return (
    <div className="re-home">
      {/* ── Hero ── */}
      <section className="re-hero">
        <div
          className="re-hero__bg"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85)',
          }}
        />
        <div className="re-hero__overlay" />
        <div className="re-hero__content">
          <motion.h1
            className="re-hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Find Your Perfect Property
          </motion.h1>
          <motion.p
            className="re-hero__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Prestige Properties is Nigeria&apos;s leading real estate agency.
            Luxury homes, commercial spaces, and prime land — all in one place.
          </motion.p>
          <motion.div
            className="re-hero__search"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <input
              className="re-hero__search-input"
              type="text"
              placeholder="Enter location, e.g. Lekki, Ikoyi..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <div className="re-hero__search-toggle">
              <button
                className={`re-hero__toggle-btn ${searchMode === 'Buy' ? 're-hero__toggle-btn--active' : ''}`}
                onClick={() => setSearchMode('Buy')}
                type="button"
              >
                Buy
              </button>
              <button
                className={`re-hero__toggle-btn ${searchMode === 'Rent' ? 're-hero__toggle-btn--active' : ''}`}
                onClick={() => setSearchMode('Rent')}
                type="button"
              >
                Rent
              </button>
            </div>
            <button className="re-hero__search-btn" onClick={handleSearch} type="button">
              Search
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <AnimatedSection className="re-stats">
        <div className="re-stats__grid">
          <CounterStat end={500} suffix="+" label="Properties Listed" />
          <CounterStat end={15} suffix="" label="Years of Experience" />
          <CounterStat end={2000} suffix="+" label="Happy Clients" />
          <CounterStat end={12} suffix="" label="Expert Agents" />
        </div>
      </AnimatedSection>

      {/* ── Featured Properties ── */}
      <section className="re-featured">
        <AnimatedSection className="re-featured__inner">
          <span className="re-section-label">Premium Selection</span>
          <h2 className="re-featured__heading">Featured Properties</h2>
          <p className="re-featured__subtitle">
            Handpicked listings from our latest portfolio of luxury homes and investment opportunities.
          </p>
          <div className="re-featured__grid">
            {featured.map((property) => (
              <Link to={`/realestate/listings/${property.id}`} key={property.id} className="re-property-card">
                <div className="re-property-card__image">
                  <img src={property.image} alt={property.name} loading="lazy" />
                  {property.isNew && <span className="re-property-card__badge">New</span>}
                  <span className="re-property-card__status">{property.status}</span>
                </div>
                <div className="re-property-card__body">
                  <p className="re-property-card__price">{formatPrice(property.price)}</p>
                  <h3 className="re-property-card__name">{property.name}</h3>
                  <p className="re-property-card__location">{property.location}</p>
                  <div className="re-property-card__meta">
                    {property.bedrooms > 0 && (
                      <span className="re-property-card__meta-item">{property.bedrooms} Beds</span>
                    )}
                    {property.bathrooms > 0 && (
                      <span className="re-property-card__meta-item">{property.bathrooms} Baths</span>
                    )}
                    <span className="re-property-card__meta-item">{property.sqft.toLocaleString()} sqft</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="re-featured__cta">
            <Link to="/realestate/listings">
              <motion.button className="re-featured__btn" {...buttonHover}>
                View All Listings &rarr;
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Services Preview ── */}
      <section className="re-services-preview">
        <AnimatedSection className="re-services-preview__inner">
          <span className="re-section-label">What We Do</span>
          <h2 className="re-services-preview__heading">Our Services</h2>
          <p className="re-services-preview__subtitle">
            From property search to closing — we handle every step of your real estate journey.
          </p>
          <div className="re-services-preview__grid">
            {servicesPreview.map((svc) => (
              <div className="re-service-card" key={svc.title}>
                <span className="re-service-card__icon">{svc.icon}</span>
                <h3 className="re-service-card__title">{svc.title}</h3>
                <p className="re-service-card__text">{svc.text}</p>
              </div>
            ))}
          </div>
          <Link to="/realestate/services">
            <motion.button className="re-services-preview__btn" {...buttonHover}>
              All Services &rarr;
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>

      {/* ── CTA ── */}
      <section className="re-cta">
        <AnimatedSection className="re-cta__inner">
          <h2 className="re-cta__heading">Ready to find your next home?</h2>
          <p className="re-cta__text">
            Whether you are buying, selling, or renting — our team of expert agents
            is here to guide you every step of the way.
          </p>
          <Link to="/realestate/contact">
            <motion.button className="re-cta__btn" {...buttonHover}>
              Get in Touch &rarr;
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
