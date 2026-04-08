import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp } from '../../../styles/_animations';
import { properties } from '../data/propertiesData';

const categories = ['All', 'Apartment', 'House', 'Land', 'Commercial'] as const;

export default function Listings() {
  const [searchParams] = useSearchParams();
  const initialStatus = (searchParams.get('status') as 'Buy' | 'Rent') || 'Buy';
  const initialQuery = searchParams.get('q') || '';

  const [statusFilter, setStatusFilter] = useState<'Buy' | 'Rent'>(initialStatus);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [search, setSearch] = useState(initialQuery);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const matchesStatus = p.status === statusFilter;
      const matchesCategory = categoryFilter === 'All' || p.type === categoryFilter;
      const matchesSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase());
      return matchesStatus && matchesCategory && matchesSearch;
    });
  }, [statusFilter, categoryFilter, search]);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(price);

  return (
    <div className="re-listings-page">
      {/* ── Page Header ── */}
      <section className="re-page-header">
        <AnimatedSection className="re-page-header__inner">
          <motion.h1
            className="re-page-header__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Property Listings
          </motion.h1>
          <motion.p
            className="re-page-header__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Browse our curated collection of premium properties across Nigeria.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* ── Filters ── */}
      <div className="re-filters">
        <div className="re-filters__bar">
          <div className="re-filters__group">
            <button
              className={`re-filters__btn ${statusFilter === 'Buy' ? 're-filters__btn--active' : ''}`}
              onClick={() => setStatusFilter('Buy')}
            >
              Buy
            </button>
            <button
              className={`re-filters__btn ${statusFilter === 'Rent' ? 're-filters__btn--active' : ''}`}
              onClick={() => setStatusFilter('Rent')}
            >
              Rent
            </button>
          </div>

          <div className="re-filters__group">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`re-filters__btn ${categoryFilter === cat ? 're-filters__btn--active' : ''}`}
                onClick={() => setCategoryFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <input
            className="re-filters__search"
            type="text"
            placeholder="Search by name or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <span className="re-filters__count">
            {filtered.length} {filtered.length === 1 ? 'property' : 'properties'} found
          </span>
        </div>
      </div>

      {/* ── Listings Grid ── */}
      {filtered.length > 0 ? (
        <div className="re-listings-grid">
          {filtered.map((property) => (
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
                <span className="re-property-card__link">View Details &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="re-no-results">
          <p className="re-no-results__text">
            No properties match your filters. Try adjusting your search criteria.
          </p>
        </div>
      )}
    </div>
  );
}
