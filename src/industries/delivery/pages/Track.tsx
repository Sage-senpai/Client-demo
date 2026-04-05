import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp } from '../../../styles/_animations';

const trackingSteps = [
  { label: 'Order Placed', status: 'done' },
  { label: 'Picked Up', status: 'done' },
  { label: 'En Route', status: 'active' },
  { label: 'Delivered', status: 'pending' },
];

const orderItems = [
  { name: 'MacBook Pro 14" M3', qty: 1, price: '₦1,450,000' },
  { name: 'USB-C Hub (7-in-1)', qty: 2, price: '₦18,500' },
  { name: 'Laptop Sleeve Case', qty: 1, price: '₦8,200' },
];

export default function Track() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('order') || 'ZNG-29471';

  const [countdown, setCountdown] = useState(22 * 60); // 22 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;
  const etaDisplay = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const handleCall = () => {
    alert('Demo mode: Calling rider Tunde Adeyemi...');
  };

  const handleMessage = () => {
    alert('Demo mode: Opening chat with rider Tunde Adeyemi...');
  };

  return (
    <div className="del-page-enter">
      <AnimatedSection className="del-track">
        <h1 className="del-track__title">Track Your Order</h1>
        <p className="del-track__order-id">
          Order ID: <strong>{orderId}</strong>
        </p>

        {/* ── PROGRESS TRACKER ── */}
        <div className="del-progress">
          <div className="del-progress__steps">
            <div className="del-progress__bar">
              <motion.div
                className="del-progress__bar-fill"
                initial={{ width: '0%' }}
                animate={{ width: '62%' }}
                transition={{ duration: 1.8, ease: 'easeOut', delay: 0.3 }}
              />
            </div>

            {trackingSteps.map((step, index) => (
              <motion.div
                className="del-progress__step"
                key={step.label}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.4, delay: 0.2 + index * 0.15 }}
              >
                <div
                  className={`del-progress__dot ${
                    step.status === 'done'
                      ? 'del-progress__dot--done'
                      : step.status === 'active'
                      ? 'del-progress__dot--active'
                      : ''
                  }`}
                >
                  {step.status === 'done' ? '✓' : step.status === 'active' ? '●' : index + 1}
                </div>
                <span className="del-progress__label">{step.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── ORDER INFO CARD ── */}
        <motion.div
          className="del-order-card"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="del-order-card__header">
            <div className="del-order-card__rider">
              <div className="del-order-card__avatar">TA</div>
              <div>
                <div className="del-order-card__rider-name">Tunde Adeyemi</div>
                <div className="del-order-card__rider-rating">★ 4.9 &middot; 1,247 deliveries</div>
              </div>
            </div>

            <div className="del-order-card__eta">
              <div className="del-order-card__eta-label">Live ETA</div>
              <div className="del-order-card__eta-time">{etaDisplay}</div>
            </div>
          </div>

          <div className="del-order-card__info">
            <div className="del-order-card__info-item">
              <label>Pickup Location</label>
              <span>Computer Village, Ikeja</span>
            </div>
            <div className="del-order-card__info-item">
              <label>Delivery Address</label>
              <span>14 Admiralty Way, Lekki Phase 1</span>
            </div>
            <div className="del-order-card__info-item">
              <label>Distance</label>
              <span>23.4 km</span>
            </div>
            <div className="del-order-card__info-item">
              <label>Estimated Arrival</label>
              <span>{minutes} min remaining</span>
            </div>
          </div>

          <div className="del-order-card__items">
            <h4>Order Items</h4>
            <ul>
              {orderItems.map((item) => (
                <li key={item.name}>
                  <span>
                    {item.name} {item.qty > 1 && `(x${item.qty})`}
                  </span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="del-order-card__actions">
            <button
              className="del-order-card__btn del-order-card__btn--call"
              onClick={handleCall}
            >
              📞 Call Rider
            </button>
            <button
              className="del-order-card__btn del-order-card__btn--message"
              onClick={handleMessage}
            >
              💬 Message Rider
            </button>
          </div>
        </motion.div>
      </AnimatedSection>
    </div>
  );
}
