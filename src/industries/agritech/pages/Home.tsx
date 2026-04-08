import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { products, testimonials } from '../data/agritechData';

const featuredProducts = products.slice(0, 4);

const categoryCards = [
  { name: 'Grains & Cereals', count: 42, image: 'https://picsum.photos/seed/terracat1/800/600' },
  { name: 'Tubers & Roots', count: 28, image: 'https://picsum.photos/seed/terracat2/800/600' },
  { name: 'Fruits', count: 35, image: 'https://picsum.photos/seed/terracat3/800/600' },
  { name: 'Vegetables', count: 31, image: 'https://picsum.photos/seed/terracat4/800/600' },
  { name: 'Livestock', count: 19, image: 'https://picsum.photos/seed/terracat5/800/600' },
  { name: 'Processed Foods', count: 24, image: 'https://picsum.photos/seed/terracat6/800/600' },
];

const partners = [
  'Federal Ministry of Agriculture',
  'AfDB',
  'IITA',
  'GIZ',
  'World Bank',
  'USAID',
];

const steps = [
  { num: 1, icon: '\u{1F3E0}', title: 'Register Your Farm', desc: 'Create your farm profile in minutes. Add location, crop types, and capacity.' },
  { num: 2, icon: '\u{1F33E}', title: 'List Produce', desc: 'Upload your available produce with prices, photos, and quantity.' },
  { num: 3, icon: '\u{1F91D}', title: 'Buyers Connect', desc: 'Verified buyers browse and place orders directly. No middlemen.' },
  { num: 4, icon: '\u{1F512}', title: 'Secure Payment', desc: 'Get paid securely through our escrow system. Funds released on delivery.' },
];

const tickerItems = [
  { label: 'FARMERS', value: '12,400+' },
  { label: 'TONNES TRADED', value: '85,000+' },
  { label: 'STATES', value: '24' },
  { label: 'AVG INCOME BOOST', value: '+40%' },
];

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

export default function Home() {
  return (
    <div className="ag-home">
      {/* ── Hero ── */}
      <section className="ag-hero">
        <div
          className="ag-hero__bg"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&q=85)',
          }}
        />
        <div className="ag-hero__overlay" />
        <div className="ag-hero__content">
          <motion.h1
            className="ag-hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            From Farm to Future
          </motion.h1>
          <motion.p
            className="ag-hero__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Africa&apos;s smartest agritech platform — connecting farmers, buyers, and technology.
          </motion.p>
          <motion.div
            className="ag-hero__ctas"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/agritech/marketplace">
              <motion.button className="ag-btn-primary" {...buttonHover}>
                Browse Marketplace
              </motion.button>
            </Link>
            <Link to="/agritech/dashboard">
              <motion.button className="ag-btn-outline" {...buttonHover}>
                Farm Dashboard
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Ticker ── */}
      <div className="ag-ticker">
        <div className="ag-ticker__track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div className="ag-ticker__item" key={i}>
              <span className="ag-ticker__dot" />
              <span>{item.label}:</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>

      {/* ── How TerraYield Works ── */}
      <section className="ag-how">
        <AnimatedSection className="ag-how__inner">
          <span className="ag-section-label">How It Works</span>
          <h2 className="ag-section-heading">How TerraYield Works</h2>
          <p className="ag-section-subtitle">
            Four simple steps from farm to market. No middlemen, no stress.
          </p>
          <div className="ag-how__grid">
            {steps.map((step) => (
              <div className="ag-how__step" key={step.num}>
                <div className="ag-how__step-number">{step.num}</div>
                <div className="ag-how__step-icon">{step.icon}</div>
                <h3 className="ag-how__step-title">{step.title}</h3>
                <p className="ag-how__step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Product Categories ── */}
      <section className="ag-categories">
        <AnimatedSection className="ag-categories__inner">
          <span className="ag-section-label">What We Trade</span>
          <h2 className="ag-section-heading">Product Categories</h2>
          <p className="ag-section-subtitle">
            Browse produce across six major categories from verified Nigerian farms.
          </p>
          <div className="ag-categories__grid">
            {categoryCards.map((cat, i) => (
              <Link to="/agritech/marketplace" key={i} className="ag-cat-card">
                <div className="ag-cat-card__image">
                  <img src={cat.image} alt={cat.name} loading="lazy" />
                </div>
                <div className="ag-cat-card__body">
                  <span className="ag-cat-card__name">{cat.name}</span>
                  <span className="ag-cat-card__count">{cat.count} products</span>
                </div>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Impact Section ── */}
      <section className="ag-impact">
        <AnimatedSection className="ag-impact__inner">
          <span className="ag-section-label ag-impact__label">Our Impact</span>
          <h2 className="ag-impact__heading">Numbers That Matter</h2>
          <div className="ag-impact__grid">
            <CounterStat end={12400} suffix="+" label="Farmers" />
            <CounterStat end={85000} suffix="+" label="Tonnes Traded" />
            <CounterStat end={2.5} suffix="B+" label="Naira Traded" />
            <CounterStat end={40} suffix="%" label="Income Boost" />
          </div>
        </AnimatedSection>
      </section>

      {/* ── Featured Products ── */}
      <section className="ag-featured">
        <AnimatedSection className="ag-featured__inner">
          <span className="ag-section-label">From Our Farms</span>
          <h2 className="ag-section-heading">Featured Products</h2>
          <p className="ag-section-subtitle">
            Fresh produce from verified farmers across Nigeria.
          </p>
          <div className="ag-featured__grid">
            {featuredProducts.map((product) => (
              <div className="ag-product-card" key={product.id}>
                <div className="ag-product-card__image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span className="ag-product-card__category-badge">{product.category}</span>
                </div>
                <div className="ag-product-card__body">
                  <h3 className="ag-product-card__name">{product.name}</h3>
                  <p className="ag-product-card__location">{product.location}</p>
                  <p className="ag-product-card__price">
                    {product.price}<span>{product.unit}</span>
                  </p>
                  <p className="ag-product-card__farmer">{product.farmer}</p>
                  <div className="ag-product-card__rating">
                    <span className="ag-product-card__rating-stars">{renderStars(product.rating)}</span>
                    <span className="ag-product-card__rating-count">({product.reviews})</span>
                  </div>
                  <div className="ag-product-card__tags">
                    {product.tags.map((tag) => (
                      <span className={`ag-product-card__tag ${getTagClass(tag)}`} key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to="/agritech/marketplace">
                    <motion.button className="ag-product-card__order-btn" {...buttonHover}>
                      Order Now
                    </motion.button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Testimonials ── */}
      <section className="ag-testimonials">
        <AnimatedSection className="ag-testimonials__inner">
          <span className="ag-section-label">What Farmers Say</span>
          <h2 className="ag-section-heading">Success Stories</h2>
          <div className="ag-testimonials__grid">
            {testimonials.map((t, i) => (
              <div className="ag-testimonial-card" key={i}>
                <span className="ag-testimonial-card__quote-mark">&ldquo;</span>
                <p className="ag-testimonial-card__quote">{t.quote}</p>
                <div className="ag-testimonial-card__author">
                  <img
                    className="ag-testimonial-card__photo"
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                  />
                  <div>
                    <div className="ag-testimonial-card__name">{t.name}</div>
                    <div className="ag-testimonial-card__location">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Partners ── */}
      <section className="ag-partners">
        <AnimatedSection className="ag-partners__inner">
          <h3 className="ag-partners__heading">Trusted By Leading Organizations</h3>
          <div className="ag-partners__grid">
            {partners.map((p, i) => (
              <span className="ag-partners__badge" key={i}>{p}</span>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── CTA ── */}
      <section className="ag-cta-section">
        <AnimatedSection className="ag-cta-section__inner">
          <h2 className="ag-cta-section__heading">Ready to grow?</h2>
          <p className="ag-cta-section__text">
            Join 12,400+ farmers already selling smarter on TerraYield.
          </p>
          <div className="ag-cta-section__buttons">
            <Link to="/agritech/marketplace">
              <motion.button className="ag-btn-accent" {...buttonHover}>
                Browse Marketplace
              </motion.button>
            </Link>
            <Link to="/agritech/contact">
              <motion.button className="ag-btn-outline" {...buttonHover}>
                Partner With Us
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
