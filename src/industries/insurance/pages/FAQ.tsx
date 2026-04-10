import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { faqs } from '../data/insuranceData';

const categories = ['All', 'General', 'Claims', 'Policies', 'Payments'] as const;

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`ins-faq-item__chevron ${open ? 'ins-faq-item__chevron--open' : ''}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs =
    activeCategory === 'All'
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="ins-faq">
      <div className="ins-faq__inner">
        <AnimatedSection>
          <p className="ins-section-label">Support</p>
          <h1 className="ins-faq__heading">Frequently Asked Questions</h1>
          <p className="ins-faq__subtitle">
            Find answers to common questions about our products, claims,
            policies, and payments.
          </p>

          {/* ── Category Filter ── */}
          <div className="ins-faq__categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`ins-faq__cat-btn ${
                  activeCategory === cat ? 'ins-faq__cat-btn--active' : ''
                }`}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── FAQ List ── */}
          <div className="ins-faq__list">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  className={`ins-faq-item ${isOpen ? 'ins-faq-item--open' : ''}`}
                  key={faq.q}
                >
                  <button
                    className="ins-faq-item__question"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown open={isOpen} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p className="ins-faq-item__answer">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
