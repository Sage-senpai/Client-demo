import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { products, categories } from '../data/productsData';

interface ShopProps {
  addToCart: (qty?: number) => void;
}

type SortOption = 'default' | 'price-low' | 'price-high' | 'name' | 'rating';

export default function Shop({ addToCart }: ShopProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [search, setSearch] = useState('');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, sortBy, search]);

  const handleQuickAdd = (name: string) => {
    addToCart(1);
    toast.success(`${name} added to cart!`);
  };

  return (
    <div className="ecom-shop">
      <div className="ecom-shop__inner">
        {/* Header */}
        <AnimatedSection className="ecom-shop__header">
          <motion.p
            className="section-label"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The Collection
          </motion.p>
          <h1 className="ecom-shop__heading">Shop All</h1>
          <p className="ecom-shop__subtitle">
            {products.length} handcrafted pieces celebrating African heritage and modern style.
          </p>
        </AnimatedSection>

        {/* Controls */}
        <div className="ecom-shop__controls">
          <div className="ecom-shop__filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`ecom-shop__filter-btn ${
                  activeCategory === cat ? 'ecom-shop__filter-btn--active' : ''
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="ecom-shop__sort-search">
            <select
              className="ecom-shop__sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
            >
              <option value="default">Sort by</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
              <option value="rating">Top Rated</option>
            </select>

            <input
              className="ecom-shop__search"
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="ecom-shop__grid">
          {filteredProducts.length === 0 && (
            <p className="ecom-shop__empty">
              No products found. Try a different filter or search.
            </p>
          )}
          {filteredProducts.map((product) => (
            <motion.div
              className="ecom-product-card"
              key={product.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="ecom-product-card__image-wrap">
                <img
                  className="ecom-product-card__image"
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
                <img
                  className="ecom-product-card__hover-image"
                  src={product.hoverImage}
                  alt={`${product.name} alternate`}
                  loading="lazy"
                />
                {product.isNew && (
                  <span className="ecom-product-card__badge">New</span>
                )}
                <motion.button
                  className="ecom-product-card__quick-add"
                  onClick={() => handleQuickAdd(product.name)}
                  {...buttonHover}
                >
                  Quick Add
                </motion.button>
              </div>
              <div className="ecom-product-card__info">
                <h3 className="ecom-product-card__name">{product.name}</h3>
                <p className="ecom-product-card__price">
                  &#8358;{product.price.toLocaleString()}
                </p>
                <p className="ecom-product-card__rating">
                  {'★'.repeat(Math.floor(product.rating))}
                  {product.rating % 1 >= 0.5 ? '½' : ''}{' '}
                  {product.rating}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
