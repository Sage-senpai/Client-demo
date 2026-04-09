import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';
import { products, categories } from '../data/agritechData';

function renderStars(rating: number) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = '';
  for (let i = 0; i < full; i++) stars += '\u2605';
  if (half) stars += '\u2606';
  return stars;
}

function getTagClass(tag: string) {
  if (tag === 'Premium') return 'ag-product-card__tag--premium';
  if (tag === 'Bulk Available') return 'ag-product-card__tag--bulk';
  return '';
}

export default function Marketplace() {
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('newest');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let list = [...products];

    if (category !== 'All') {
      list = list.filter((p) => p.category === category);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.farmer.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q)
      );
    }

    if (sort === 'price-low') {
      list.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
        const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
        return priceA - priceB;
      });
    } else if (sort === 'price-high') {
      list.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
        const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
        return priceB - priceA;
      });
    } else if (sort === 'popular') {
      list.sort((a, b) => b.reviews - a.reviews);
    }

    return list;
  }, [category, sort, search]);

  return (
    <div className="terra-marketplace">
      <AnimatedSection className="terra-marketplace__header">
        <span className="terra-section-label">TerraYield Marketplace</span>
        <h1 className="terra-section-heading">Product Marketplace</h1>
        <p className="terra-section-subtitle">
          Browse fresh produce from verified farms across Nigeria. Direct from farm to you.
        </p>
      </AnimatedSection>

      <div className="terra-marketplace__body">
        {/* Sidebar */}
        <aside className="terra-marketplace__sidebar">
          <div className="terra-marketplace__sidebar-section">
            <h4>Categories</h4>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`ag-marketplace__sidebar-link ${
                  category === cat ? 'ag-marketplace__sidebar-link--active' : ''
                }`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="terra-marketplace__sidebar-section">
            <h4>Price Guide</h4>
            <div className="terra-marketplace__price-indicator">
              <strong>Grains:</strong> ₦55K – ₦85K/tonne<br />
              <strong>Tubers:</strong> ₦35K – ₦120K/tonne<br />
              <strong>Fruits:</strong> ₦2.8K – ₦4.5K/crate<br />
              <strong>Livestock:</strong> ₦3.8K – ₦5.2K/unit
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div>
          {/* Filter Bar */}
          <div className="terra-marketplace__filters">
            <select
              className="terra-marketplace__filter-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? 'All Categories' : cat}
                </option>
              ))}
            </select>

            <select
              className="terra-marketplace__filter-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low-High</option>
              <option value="price-high">Price: High-Low</option>
              <option value="popular">Most Popular</option>
            </select>

            <input
              className="terra-marketplace__filter-input"
              type="text"
              placeholder="Search produce..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Product Grid */}
          <div className="terra-marketplace__grid">
            {filtered.length === 0 && (
              <div className="terra-marketplace__no-results">
                No products found matching your criteria. Try adjusting filters.
              </div>
            )}
            {filtered.map((product) => (
              <div className="terra-product-card" key={product.id}>
                <div className="terra-product-card__image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span className="terra-product-card__category-badge">{product.category}</span>
                </div>
                <div className="terra-product-card__body">
                  <h3 className="terra-product-card__name">{product.name}</h3>
                  <p className="terra-product-card__location">{product.location}</p>
                  <p className="terra-product-card__price">
                    {product.price}<span>{product.unit}</span>
                  </p>
                  <p className="terra-product-card__farmer">{product.farmer}</p>
                  <div className="terra-product-card__rating">
                    <span className="terra-product-card__rating-stars">{renderStars(product.rating)}</span>
                    <span className="terra-product-card__rating-count">({product.reviews})</span>
                  </div>
                  <div className="terra-product-card__tags">
                    {product.tags.map((tag) => (
                      <span className={`ag-product-card__tag ${getTagClass(tag)}`} key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.button className="terra-product-card__order-btn" {...buttonHover}>
                    Order Now
                  </motion.button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
