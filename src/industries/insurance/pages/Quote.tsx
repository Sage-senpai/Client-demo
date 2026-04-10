import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';
import { plans } from '../data/insuranceData';

const productOptions = plans.map((p) => ({
  id: p.id,
  name: p.name,
  icon: p.icon,
}));

function calculatePremium(
  productId: number,
  age: number,
  coverageValue: number
): number {
  const basePrices: Record<number, number> = {
    1: 89,
    2: 29,
    3: 65,
    4: 55,
    5: 12,
    6: 149,
  };
  const base = basePrices[productId] || 89;

  let ageFactor = 1;
  if (age > 50) ageFactor = 1.6;
  else if (age > 40) ageFactor = 1.35;
  else if (age > 30) ageFactor = 1.15;
  else if (age < 25) ageFactor = 1.1;

  const valueFactor = 1 + (coverageValue / 500000) * 0.5;

  return Math.round(base * ageFactor * valueFactor * 100) / 100;
}

export default function Quote() {
  const [step, setStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(1);
  const [age, setAge] = useState(30);
  const [coverageValue, setCoverageValue] = useState(100000);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const premium = useMemo(
    () => calculatePremium(selectedProduct, age, coverageValue),
    [selectedProduct, age, coverageValue]
  );

  const handleSubmit = () => {
    if (!fullName.trim() || !email.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }
    toast.success(
      'Quote request submitted! Our team will contact you within 24 hours.',
      { duration: 5000 }
    );
    setStep(1);
    setSelectedProduct(1);
    setAge(30);
    setCoverageValue(100000);
    setFullName('');
    setEmail('');
    setPhone('');
  };

  const selectedPlan = plans.find((p) => p.id === selectedProduct);

  return (
    <div className="ins-quote">
      <div className="ins-quote__inner">
        <AnimatedSection>
          <p className="ins-section-label">Quote Calculator</p>
          <h1 className="ins-quote__heading">Get Your Personalized Quote</h1>
          <p className="ins-quote__subtitle">
            Answer a few questions and see your estimated premium instantly.
          </p>

          {/* ── Steps ── */}
          <div className="ins-quote__steps">
            <button
              className={`ins-quote__step ${
                step === 1 ? 'ins-quote__step--active' : ''
              } ${step > 1 ? 'ins-quote__step--done' : ''}`}
              onClick={() => setStep(1)}
            >
              1. Product
            </button>
            <button
              className={`ins-quote__step ${
                step === 2 ? 'ins-quote__step--active' : ''
              } ${step > 2 ? 'ins-quote__step--done' : ''}`}
              onClick={() => step >= 2 && setStep(2)}
            >
              2. Coverage
            </button>
            <button
              className={`ins-quote__step ${
                step === 3 ? 'ins-quote__step--active' : ''
              }`}
              onClick={() => step >= 3 && setStep(3)}
            >
              3. Details
            </button>
          </div>

          <div className="ins-quote__body">
            {/* ── Step 1: Product Selection ── */}
            {step === 1 && (
              <div>
                <div className="ins-quote__radio-grid">
                  {productOptions.map((opt) => (
                    <div
                      key={opt.id}
                      className={`ins-quote__radio-card ${
                        selectedProduct === opt.id
                          ? 'ins-quote__radio-card--selected'
                          : ''
                      }`}
                      onClick={() => setSelectedProduct(opt.id)}
                    >
                      <span
                        className="ins-quote__radio-card-icon"
                        dangerouslySetInnerHTML={{ __html: opt.icon }}
                      />
                      <span className="ins-quote__radio-card-name">
                        {opt.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="ins-quote__premium">
                  <p className="ins-quote__premium-label">
                    Estimated Monthly Premium
                  </p>
                  <p className="ins-quote__premium-amount">
                    ${premium.toFixed(2)} <small>/month</small>
                  </p>
                </div>

                <div className="ins-quote__actions">
                  <motion.button
                    className="ins-quote__btn-next"
                    {...buttonHover}
                    onClick={() => setStep(2)}
                  >
                    Continue to Coverage &rarr;
                  </motion.button>
                </div>
              </div>
            )}

            {/* ── Step 2: Coverage Details ── */}
            {step === 2 && (
              <div>
                <div className="ins-quote__form-grid">
                  <div className="ins-quote__field">
                    <label htmlFor="quote-age">Your Age</label>
                    <input
                      id="quote-age"
                      type="number"
                      min={18}
                      max={85}
                      value={age}
                      onChange={(e) => setAge(Number(e.target.value))}
                    />
                  </div>

                  <div className="ins-quote__field">
                    <label htmlFor="quote-coverage">
                      {selectedProduct === 3
                        ? 'Vehicle Value (USD)'
                        : selectedProduct === 4
                        ? 'Property Value (USD)'
                        : selectedProduct === 6
                        ? 'Annual Revenue (USD)'
                        : 'Coverage Amount (USD)'}
                    </label>
                    <input
                      id="quote-coverage"
                      type="number"
                      min={10000}
                      step={10000}
                      value={coverageValue}
                      onChange={(e) =>
                        setCoverageValue(Number(e.target.value))
                      }
                    />
                  </div>

                  {selectedProduct === 5 && (
                    <>
                      <div className="ins-quote__field">
                        <label htmlFor="quote-destination">
                          Destination
                        </label>
                        <select id="quote-destination">
                          <option>Europe</option>
                          <option>North America</option>
                          <option>Asia Pacific</option>
                          <option>Middle East</option>
                          <option>Worldwide</option>
                        </select>
                      </div>
                      <div className="ins-quote__field">
                        <label htmlFor="quote-duration">
                          Trip Duration
                        </label>
                        <select id="quote-duration">
                          <option>1-7 days</option>
                          <option>8-14 days</option>
                          <option>15-30 days</option>
                          <option>31-90 days</option>
                          <option>Annual multi-trip</option>
                        </select>
                      </div>
                    </>
                  )}
                </div>

                {selectedPlan && (
                  <div className="ins-quote__premium">
                    <p className="ins-quote__premium-label">
                      Estimated Premium for {selectedPlan.name}
                    </p>
                    <p className="ins-quote__premium-amount">
                      ${premium.toFixed(2)} <small>/month</small>
                    </p>
                  </div>
                )}

                <div className="ins-quote__actions">
                  <motion.button
                    className="ins-quote__btn-back"
                    {...buttonHover}
                    onClick={() => setStep(1)}
                  >
                    &larr; Back
                  </motion.button>
                  <motion.button
                    className="ins-quote__btn-next"
                    {...buttonHover}
                    onClick={() => setStep(3)}
                  >
                    Continue to Details &rarr;
                  </motion.button>
                </div>
              </div>
            )}

            {/* ── Step 3: Personal Details ── */}
            {step === 3 && (
              <div>
                <div className="ins-quote__form-grid">
                  <div className="ins-quote__field">
                    <label htmlFor="quote-name">Full Name *</label>
                    <input
                      id="quote-name"
                      type="text"
                      placeholder="John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="ins-quote__field">
                    <label htmlFor="quote-email">Email Address *</label>
                    <input
                      id="quote-email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="ins-quote__field">
                    <label htmlFor="quote-phone">Phone Number</label>
                    <input
                      id="quote-phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="ins-quote__field">
                    <label htmlFor="quote-country">Country</label>
                    <select id="quote-country">
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>United Arab Emirates</option>
                      <option>Singapore</option>
                      <option>Germany</option>
                      <option>France</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {selectedPlan && (
                  <div className="ins-quote__premium">
                    <p className="ins-quote__premium-label">
                      Your {selectedPlan.name} Quote
                    </p>
                    <p className="ins-quote__premium-amount">
                      ${premium.toFixed(2)} <small>/month</small>
                    </p>
                  </div>
                )}

                <div className="ins-quote__actions">
                  <motion.button
                    className="ins-quote__btn-back"
                    {...buttonHover}
                    onClick={() => setStep(2)}
                  >
                    &larr; Back
                  </motion.button>
                  <motion.button
                    className="ins-quote__btn-submit"
                    {...buttonHover}
                    onClick={handleSubmit}
                  >
                    Submit Quote Request
                  </motion.button>
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
