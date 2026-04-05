import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';

const products = [
  {
    name: 'Radiance Hydrating Serum',
    category: 'Skincare',
    price: '₦18,500',
    image: 'https://picsum.photos/seed/prod-serum/500/500',
    description: 'Lightweight hyaluronic acid serum that delivers deep hydration for a dewy, plump complexion all day.',
  },
  {
    name: 'Silk Repair Hair Mask',
    category: 'Hair Care',
    price: '₦12,000',
    image: 'https://picsum.photos/seed/prod-mask/500/500',
    description: 'Intensive keratin-infused mask that repairs damage, reduces breakage, and restores silky softness to all hair types.',
  },
  {
    name: 'Rose Gold Lip Gloss Set',
    category: 'Makeup',
    price: '₦8,500',
    image: 'https://picsum.photos/seed/prod-lipgloss/500/500',
    description: 'A set of 4 non-sticky lip glosses in rose, nude, berry, and clear — enriched with vitamin E and shea butter.',
  },
  {
    name: 'Scalp Revival Treatment Oil',
    category: 'Hair Care',
    price: '₦14,000',
    image: 'https://picsum.photos/seed/prod-oil/500/500',
    description: 'Tea tree and peppermint oil blend that soothes itchy scalps, stimulates growth, and adds brilliant shine.',
  },
  {
    name: 'Glow Body Butter',
    category: 'Body Care',
    price: '₦9,500',
    image: 'https://picsum.photos/seed/prod-butter/500/500',
    description: 'Whipped shea and cocoa butter infused with subtle shimmer particles for skin that glows from head to toe.',
  },
  {
    name: 'Nail Strengthening Base Coat',
    category: 'Nail Care',
    price: '₦5,500',
    image: 'https://picsum.photos/seed/prod-nailcoat/500/500',
    description: 'Calcium-fortified base coat that prevents peeling and breakage while creating the perfect foundation for polish.',
  },
  {
    name: 'Vitamin C Brightening Cream',
    category: 'Skincare',
    price: '₦22,000',
    image: 'https://picsum.photos/seed/prod-vitc/500/500',
    description: 'Potent vitamin C and niacinamide formula that fades dark spots, evens skin tone, and boosts natural radiance.',
  },
  {
    name: 'Detangling Spray',
    category: 'Hair Care',
    price: '₦7,000',
    image: 'https://picsum.photos/seed/prod-detangle/500/500',
    description: 'Leave-in conditioning spray that makes combing effortless, reduces knots, and protects against heat styling damage.',
  },
];

export default function Products() {
  const handleShopNow = (productName: string) => {
    alert(`"${productName}" — This is a demo. In production, this would add the product to your cart.`);
  };

  return (
    <div className="beauty-products-page">
      <AnimatedSection className="beauty-products-page__inner">
        <div className="beauty-products-page__header">
          <p className="section-label">Shop</p>
          <h1 className="beauty-products-page__title">Our Products</h1>
          <p className="beauty-products-page__subtitle">
            Salon-grade products curated by our stylists — now available for your at-home beauty routine.
          </p>
        </div>

        <div className="beauty-products-page__grid">
          {products.map((product, i) => (
            <motion.div
              className="beauty-products-page__card"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <img
                className="beauty-products-page__card-img"
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
              <div className="beauty-products-page__card-body">
                <p className="beauty-products-page__card-category">{product.category}</p>
                <h3 className="beauty-products-page__card-name">{product.name}</h3>
                <p className="beauty-products-page__card-desc">{product.description}</p>
                <div className="beauty-products-page__card-footer">
                  <span className="beauty-products-page__card-price">{product.price}</span>
                  <motion.button
                    className="beauty-products-page__card-btn"
                    onClick={() => handleShopNow(product.name)}
                    {...buttonHover}
                  >
                    Shop Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
