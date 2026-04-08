import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { products } from '../data/productsData';

const trendingProducts = products.filter((p) => p.isNew).slice(0, 4);

const categoryCards = [
  { name: 'Dresses', image: 'https://picsum.photos/seed/nuvcat1/600/450' },
  { name: 'Tops', image: 'https://picsum.photos/seed/nuvcat2/600/450' },
  { name: 'Bottoms', image: 'https://picsum.photos/seed/nuvcat3/600/450' },
  { name: 'Accessories', image: 'https://picsum.photos/seed/nuvcat4/600/450' },
  { name: 'Shoes', image: 'https://picsum.photos/seed/nuvcat5/600/450' },
  { name: 'Outerwear', image: 'https://picsum.photos/seed/nuvcat6/600/450' },
];

interface HomeProps {
  addToCart: (qty?: number) => void;
}

export default function Home({ addToCart }: HomeProps) {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error('Please enter your email address.');
      return;
    }
    toast.success('Welcome to Nuvora! Check your inbox for 15% off.');
    setEmail('');
  };

  const handleQuickAdd = (name: string) => {
    addToCart(1);
    toast.success(`${name} added to cart!`);
  };

  return (
    <div className="ecom-home">
      {/* ── Hero ── */}
      <section className="ecom-hero">
        <div
          className="ecom-hero__bg"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85)',
          }}
        />
        <div className="ecom-hero__overlay" />
        <div className="ecom-hero__content">
          <motion.p
            className="ecom-hero__tag"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            New Collection 2025
          </motion.p>
          <motion.h1
            className="ecom-hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Heritage Meets<br />Modern Style
          </motion.h1>
          <motion.p
            className="ecom-hero__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            Discover contemporary African fashion — handcrafted pieces that
            celebrate culture, craftsmanship, and bold self-expression.
          </motion.p>
          <motion.div
            className="ecom-hero__ctas"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/ecommerce/shop">
              <motion.button className="ecom-hero__btn-primary" {...buttonHover}>
                Shop the Collection
              </motion.button>
            </Link>
            <Link to="/ecommerce/lookbook">
              <motion.button className="ecom-hero__btn-outline" {...buttonHover}>
                View Lookbook
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Trending Products ── */}
      <section className="ecom-trending">
        <AnimatedSection className="ecom-trending__inner">
          <p className="section-label">What&apos;s Hot</p>
          <h2 className="ecom-trending__heading">Trending Now</h2>
          <p className="ecom-trending__subtitle">
            Fresh arrivals handpicked by our stylists. Get them before they sell out.
          </p>
          <div className="ecom-trending__grid">
            {trendingProducts.map((product) => (
              <div className="ecom-product-card" key={product.id}>
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
                  <button
                    className="ecom-product-card__quick-add"
                    onClick={(e) => {
                      e.preventDefault();
                      handleQuickAdd(product.name);
                    }}
                  >
                    Quick Add
                  </button>
                </div>
                <div className="ecom-product-card__info">
                  <h3 className="ecom-product-card__name">{product.name}</h3>
                  <p className="ecom-product-card__price">
                    &#8358;{product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/ecommerce/shop" className="ecom-trending__view-all">
            View All Products
          </Link>
        </AnimatedSection>
      </section>

      {/* ── Categories ── */}
      <section className="ecom-categories">
        <AnimatedSection className="ecom-categories__inner">
          <p className="section-label section-label--dark">Browse By</p>
          <h2 className="ecom-categories__heading">Shop Categories</h2>
          <p className="ecom-categories__subtitle">
            From statement dresses to everyday essentials — find your style.
          </p>
          <div className="ecom-categories__grid">
            {categoryCards.map((cat) => (
              <Link
                to="/ecommerce/shop"
                className="ecom-category-card"
                key={cat.name}
              >
                <img
                  className="ecom-category-card__image"
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                />
                <div className="ecom-category-card__overlay">
                  <span className="ecom-category-card__label">{cat.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Newsletter ── */}
      <section className="ecom-newsletter">
        <AnimatedSection className="ecom-newsletter__inner">
          <p className="section-label">Stay Connected</p>
          <h2 className="ecom-newsletter__heading">Join the Nuvora Family</h2>
          <p className="ecom-newsletter__subtitle">
            Be the first to know about new drops, exclusive offers, and styling tips.
            Get 15% off your first order.
          </p>
          <form className="ecom-newsletter__form" onSubmit={handleNewsletter}>
            <input
              className="ecom-newsletter__input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <motion.button
              className="ecom-newsletter__btn"
              type="submit"
              {...buttonHover}
            >
              Subscribe
            </motion.button>
          </form>
        </AnimatedSection>
      </section>
    </div>
  );
}
