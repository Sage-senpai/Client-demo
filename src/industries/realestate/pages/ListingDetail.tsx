import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import { properties } from '../data/propertiesData';

export default function ListingDetail() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === Number(id)) || properties[0];

  const [loanAmount, setLoanAmount] = useState(property.price.toString());
  const [interestRate, setInterestRate] = useState('18');
  const [loanTerm, setLoanTerm] = useState('20');
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(price);

  const calculateMortgage = () => {
    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate) / 100;
    const r = annualRate / 12;
    const n = parseFloat(loanTerm) * 12;

    if (P <= 0 || r <= 0 || n <= 0) return;

    const payment = (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    setMonthlyPayment(payment);
  };

  return (
    <div className="re-detail-page">
      {/* ── Detail Section ── */}
      <section className="re-detail">
        <AnimatedSection className="re-detail__grid">
          <div className="re-detail__image">
            <img src={property.image} alt={property.name} />
          </div>

          <div className="re-detail__info">
            <span className="re-detail__status-badge">For {property.status}</span>

            <motion.h1
              className="re-detail__price"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {formatPrice(property.price)}
              {property.status === 'Rent' && <span style={{ fontSize: '0.5em', opacity: 0.7 }}> /year</span>}
            </motion.h1>

            <h2 className="re-detail__name">{property.name}</h2>
            <p className="re-detail__location">{property.location}</p>

            <div className="re-detail__meta">
              {property.bedrooms > 0 && (
                <span className="re-detail__meta-item">{property.bedrooms} Bedrooms</span>
              )}
              {property.bathrooms > 0 && (
                <span className="re-detail__meta-item">{property.bathrooms} Bathrooms</span>
              )}
              <span className="re-detail__meta-item">{property.sqft.toLocaleString()} sqft</span>
              <span className="re-detail__meta-item">{property.type}</span>
            </div>

            <p className="re-detail__description">{property.description}</p>

            <div className="re-detail__features">
              {property.features.map((feature) => (
                <span key={feature} className="re-detail__feature-tag">{feature}</span>
              ))}
            </div>

            <Link to="/realestate/contact">
              <motion.button className="re-cta__btn" {...buttonHover}>
                Enquire About This Property &rarr;
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Mortgage Calculator ── */}
      <section className="re-mortgage">
        <AnimatedSection className="re-mortgage__inner">
          <span className="re-section-label">Financial Tool</span>
          <h2 className="re-mortgage__heading">Mortgage Calculator</h2>
          <p className="re-mortgage__subtitle">
            Estimate your monthly mortgage payment based on loan amount, interest rate, and term.
          </p>

          <div className="re-mortgage__form">
            <div className="re-mortgage__field">
              <label htmlFor="loan-amount">Loan Amount (NGN)</label>
              <input
                id="loan-amount"
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                placeholder="e.g. 100000000"
              />
            </div>
            <div className="re-mortgage__field">
              <label htmlFor="interest-rate">Annual Interest Rate (%)</label>
              <input
                id="interest-rate"
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                placeholder="e.g. 18"
              />
            </div>
            <div className="re-mortgage__field">
              <label htmlFor="loan-term">Loan Term (Years)</label>
              <input
                id="loan-term"
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                placeholder="e.g. 20"
              />
            </div>
          </div>

          <motion.button className="re-mortgage__btn" onClick={calculateMortgage} {...buttonHover}>
            Calculate Monthly Payment
          </motion.button>

          {monthlyPayment !== null && (
            <div className="re-mortgage__result">
              <span className="re-mortgage__result-label">Estimated Monthly Payment</span>
              <span className="re-mortgage__result-value">{formatPrice(monthlyPayment)}</span>
            </div>
          )}
        </AnimatedSection>
      </section>
    </div>
  );
}
