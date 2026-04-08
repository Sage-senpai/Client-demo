import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';

interface CartItem {
  id: number;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  image: string;
}

const initialItems: CartItem[] = [
  {
    id: 1,
    name: 'Adire Wrap Dress',
    price: 45000,
    size: 'M',
    color: 'Indigo',
    quantity: 1,
    image: 'https://picsum.photos/seed/nuvora1/800/600',
  },
  {
    id: 2,
    name: 'Ankara Bomber Jacket',
    price: 62000,
    size: 'L',
    color: 'Multi',
    quantity: 1,
    image: 'https://picsum.photos/seed/nuvora2/800/600',
  },
  {
    id: 4,
    name: 'Cowrie Shell Choker',
    price: 15000,
    size: 'One Size',
    color: 'Gold',
    quantity: 2,
    image: 'https://picsum.photos/seed/nuvora4/800/600',
  },
];

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>(initialItems);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    toast.success('Item removed from cart.');
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = Math.round(subtotal * discount);
  const total = subtotal - discountAmount;

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'FIRST10') {
      setDiscount(0.1);
      toast.success('Promo code applied! 10% off your order.');
    } else {
      toast.error('Invalid promo code. Try "FIRST10".');
    }
  };

  const handleCheckout = () => {
    toast.success('Order placed successfully! Thank you for shopping with Nuvora.');
  };

  return (
    <div className="ecom-cart">
      <div className="ecom-cart__inner">
        <AnimatedSection>
          <motion.h1
            className="ecom-cart__heading"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Shopping Cart
          </motion.h1>
        </AnimatedSection>

        {items.length === 0 ? (
          <AnimatedSection className="ecom-cart__empty">
            <h3>Your cart is empty</h3>
            <p>Looks like you haven&apos;t added anything yet. Explore our collection!</p>
            <Link to="/ecommerce/shop" className="ecom-cart__continue-btn">
              Continue Shopping
            </Link>
          </AnimatedSection>
        ) : (
          <div className="ecom-cart__layout">
            {/* Items */}
            <div className="ecom-cart__items">
              {items.map((item) => (
                <div className="ecom-cart__item" key={item.id}>
                  <img
                    className="ecom-cart__item-image"
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                  />
                  <div className="ecom-cart__item-info">
                    <span className="ecom-cart__item-name">{item.name}</span>
                    <span className="ecom-cart__item-meta">
                      {item.size} / {item.color}
                    </span>
                    <span className="ecom-cart__item-price">
                      &#8358;{item.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="ecom-cart__item-actions">
                    <div className="ecom-cart__item-qty">
                      <button
                        className="ecom-cart__item-qty-btn"
                        onClick={() => updateQty(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="ecom-cart__item-qty-val">{item.quantity}</span>
                      <button
                        className="ecom-cart__item-qty-btn"
                        onClick={() => updateQty(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="ecom-cart__item-remove"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="ecom-cart__summary">
              <h3 className="ecom-cart__summary-title">Order Summary</h3>

              <div className="ecom-cart__summary-row">
                <span className="ecom-cart__summary-row--label">
                  Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)
                </span>
                <span className="ecom-cart__summary-row--value">
                  &#8358;{subtotal.toLocaleString()}
                </span>
              </div>

              <div className="ecom-cart__summary-row">
                <span className="ecom-cart__summary-row--label">Shipping</span>
                <span className="ecom-cart__summary-row--value">Free</span>
              </div>

              {discount > 0 && (
                <div className="ecom-cart__summary-row ecom-cart__summary-row--discount">
                  <span>Discount (10%)</span>
                  <span>-&#8358;{discountAmount.toLocaleString()}</span>
                </div>
              )}

              <div className="ecom-cart__summary-row ecom-cart__summary-row--total">
                <span>Total</span>
                <span>&#8358;{total.toLocaleString()}</span>
              </div>

              <div className="ecom-cart__promo">
                <input
                  className="ecom-cart__promo-input"
                  type="text"
                  placeholder="Promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button className="ecom-cart__promo-btn" onClick={applyPromo}>
                  Apply
                </button>
              </div>

              <motion.button
                className="ecom-cart__checkout-btn"
                onClick={handleCheckout}
                {...buttonHover}
              >
                Checkout
              </motion.button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
