import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { products } from '../data/productsData';

const product = products[0];

const allSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const colorMap: Record<string, string> = {
  Indigo: '#284B7A',
  White: '#F5F5F0',
  Rust: '#B7472A',
  Multi: '#C7A04F',
  'Earth Tones': '#8B7355',
  Gold: '#D4A843',
  Ivory: '#FFFFF0',
  Black: '#111111',
  Natural: '#D2B48C',
  Teal: '#008080',
  Burgundy: '#800020',
  Cream: '#FFFDD0',
  Tan: '#D2B48C',
  Olive: '#556B2F',
};

interface ProductProps {
  addToCart: (qty?: number) => void;
}

export default function Product({ addToCart }: ProductProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] || product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'sizing' | 'reviews'>('details');

  const handleAddToCart = () => {
    addToCart(quantity);
    toast.success(
      `${quantity}x ${product.name} (${selectedSize}, ${selectedColor}) added to cart!`
    );
  };

  const tabs = ['details', 'sizing', 'reviews'] as const;

  return (
    <div className="ecom-product">
      <div className="ecom-product__inner">
        <AnimatedSection>
          <div className="ecom-product__layout">
            {/* Image */}
            <div className="ecom-product__image-section">
              <motion.img
                className="ecom-product__main-image"
                src={product.image}
                alt={product.name}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
              />
            </div>

            {/* Details */}
            <div className="ecom-product__details">
              <p className="ecom-product__breadcrumb">
                <Link to="/ecommerce">Home</Link> / <Link to="/ecommerce/shop">Shop</Link> / {product.category}
              </p>

              <motion.h1
                className="ecom-product__name"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {product.name}
              </motion.h1>

              <motion.p
                className="ecom-product__price"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                &#8358;{product.price.toLocaleString()}
              </motion.p>

              <div className="ecom-product__rating-row">
                <span className="ecom-product__stars">
                  {'★'.repeat(Math.floor(product.rating))}
                  {product.rating % 1 >= 0.5 ? '½' : ''}
                </span>
                <span className="ecom-product__rating-text">
                  {product.rating} / 5.0 (24 reviews)
                </span>
              </div>

              <p className="ecom-product__description">{product.description}</p>

              {/* Size Selection */}
              <div className="ecom-product__option-group">
                <p className="ecom-product__option-label">Size: {selectedSize}</p>
                <div className="ecom-product__sizes">
                  {allSizes.map((size) => (
                    <button
                      key={size}
                      className={`ecom-product__size-btn ${
                        selectedSize === size ? 'ecom-product__size-btn--active' : ''
                      }`}
                      onClick={() => setSelectedSize(size)}
                      disabled={!product.sizes.includes(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="ecom-product__option-group">
                <p className="ecom-product__option-label">Color: {selectedColor}</p>
                <div className="ecom-product__colors">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`ecom-product__color-btn ${
                        selectedColor === color ? 'ecom-product__color-btn--active' : ''
                      }`}
                      onClick={() => setSelectedColor(color)}
                      style={{ backgroundColor: colorMap[color] || '#888' }}
                      aria-label={color}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="ecom-product__option-group">
                <p className="ecom-product__option-label">Quantity</p>
                <div className="ecom-product__quantity">
                  <button
                    className="ecom-product__qty-btn"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    -
                  </button>
                  <span className="ecom-product__qty-val">{quantity}</span>
                  <button
                    className="ecom-product__qty-btn"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <motion.button
                className="ecom-product__add-to-cart"
                onClick={handleAddToCart}
                {...buttonHover}
              >
                Add to Cart &mdash; &#8358;{(product.price * quantity).toLocaleString()}
              </motion.button>
            </div>
          </div>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection className="ecom-product__tabs">
          <div className="ecom-product__tab-headers">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`ecom-product__tab-btn ${
                  activeTab === tab ? 'ecom-product__tab-btn--active' : ''
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'details' ? 'Details' : tab === 'sizing' ? 'Sizing' : 'Reviews'}
              </button>
            ))}
          </div>

          <div className="ecom-product__tab-content">
            {activeTab === 'details' && (
              <div>
                <h4>Product Details</h4>
                <p>{product.description}</p>
                <ul>
                  <li>Category: {product.category}</li>
                  <li>Available Sizes: {product.sizes.join(', ')}</li>
                  <li>Available Colors: {product.colors.join(', ')}</li>
                  <li>Handcrafted using traditional techniques</li>
                  <li>100% ethically sourced materials</li>
                </ul>
                <h4>Care Instructions</h4>
                <ul>
                  <li>Hand wash in cold water</li>
                  <li>Do not bleach</li>
                  <li>Hang dry in shade</li>
                  <li>Iron on low heat if needed</li>
                </ul>
              </div>
            )}

            {activeTab === 'sizing' && (
              <div>
                <h4>Size Guide</h4>
                <p>
                  Our pieces are designed with a relaxed, comfortable fit. If you prefer a more
                  fitted look, we recommend sizing down. All measurements are in centimeters.
                </p>
                <ul>
                  <li>XS — Bust: 80, Waist: 62, Hips: 86</li>
                  <li>S — Bust: 84, Waist: 66, Hips: 90</li>
                  <li>M — Bust: 88, Waist: 70, Hips: 94</li>
                  <li>L — Bust: 94, Waist: 76, Hips: 100</li>
                  <li>XL — Bust: 100, Waist: 82, Hips: 106</li>
                  <li>XXL — Bust: 106, Waist: 88, Hips: 112</li>
                </ul>
                <p>
                  Not sure about your size? Contact us and our stylists will help you find the
                  perfect fit.
                </p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h4>Customer Reviews</h4>
                <div>
                  <p>
                    <strong>Adaeze N.</strong> — ★★★★★
                  </p>
                  <p>
                    &ldquo;Absolutely stunning piece. The fabric quality is incredible and the
                    indigo dye is even more vibrant in person. I&apos;ve gotten so many
                    compliments!&rdquo;
                  </p>
                </div>
                <br />
                <div>
                  <p>
                    <strong>Chioma K.</strong> — ★★★★★
                  </p>
                  <p>
                    &ldquo;True to size, beautiful craftsmanship. You can tell this was made with
                    love and care. Will definitely be ordering more from Nuvora.&rdquo;
                  </p>
                </div>
                <br />
                <div>
                  <p>
                    <strong>Fatima A.</strong> — ★★★★☆
                  </p>
                  <p>
                    &ldquo;Great quality and fast delivery to Abuja. The only reason I&apos;m not
                    giving 5 stars is I wish there were more color options. But the Indigo is
                    gorgeous.&rdquo;
                  </p>
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
