import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';
import servicesData, { categories, type Category } from '../data/servicesData';

const faqData = [
  {
    question: 'Do I need to book an appointment or can I walk in?',
    answer:
      'We strongly recommend booking ahead to guarantee your preferred stylist and time slot. Walk-ins are welcome based on availability, but wait times may vary during peak hours.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'We require at least 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a 50% service charge on your next visit.',
  },
  {
    question: 'Do prices vary by stylist?',
    answer:
      'Yes — our stylists are grouped into three tiers: Junior, Senior, and Master. Each tier reflects experience and specialisation. Prices listed are for Senior-tier stylists. Junior stylists are 20% less, Master stylists are 20% more.',
  },
  {
    question: 'What products do you use?',
    answer:
      'We use exclusively professional-grade, ethically sourced products including Olaplex, SheaMoisture Pro, Dermalogica, OPI, and CND Shellac. All products are free from harmful parabens and sulphates.',
  },
  {
    question: 'Is there parking available?',
    answer:
      'Yes, we have a dedicated parking lot directly in front of the studio with space for up to 15 vehicles. Overflow parking is available at the plaza next door.',
  },
  {
    question: 'Can I request a specific stylist?',
    answer:
      'Absolutely! You can select your preferred stylist during the booking process. If they are unavailable, we will suggest alternative stylists with the same specialisation.',
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<Category>('Hair');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredServices = servicesData.filter(
    (s) => s.category === activeCategory
  );

  return (
    <div className="beauty-services-page">
      <AnimatedSection className="beauty-services-page__inner">
        <div className="beauty-services-page__header">
          <p className="section-label">Our Menu</p>
          <h1 className="beauty-services-page__title">Services &amp; Pricing</h1>
          <p className="beauty-services-page__subtitle">
            Explore our full range of beauty, hair, skin, and wellness treatments.
          </p>
        </div>

        <div className="beauty-services-page__layout">
          {/* Sidebar Navigation */}
          <div className="beauty-services-page__sidebar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`beauty-services-page__sidebar-btn${
                  activeCategory === cat
                    ? ' beauty-services-page__sidebar-btn--active'
                    : ''
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Service List */}
          <div className="beauty-services-page__list">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                {filteredServices.map((service) => (
                  <div className="beauty-services-page__service-row" key={service.id}>
                    <div className="beauty-services-page__service-info">
                      <h3>{service.name}</h3>
                      <p>{service.description}</p>
                    </div>
                    <span className="beauty-services-page__service-duration">
                      {service.duration}
                    </span>
                    <span className="beauty-services-page__service-price">
                      {service.price}
                    </span>
                    <Link to="/beauty/book">
                      <motion.button
                        className="beauty-services-page__service-book"
                        {...buttonHover}
                      >
                        Book This Service
                      </motion.button>
                    </Link>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="beauty-services-page__price-note">
          <strong>Prices vary by stylist tier</strong> — Junior (−20%) | Senior (listed) | Master (+20%)
        </div>
      </AnimatedSection>

      {/* ── FAQ Accordion ── */}
      <section className="beauty-faq">
        <AnimatedSection className="beauty-faq__inner">
          <p className="section-label">Common Questions</p>
          <h2 className="beauty-faq__title">Frequently Asked Questions</h2>
          {faqData.map((faq, i) => (
            <div className="beauty-faq__item" key={i}>
              <button
                className={`beauty-faq__question${openFaq === i ? ' beauty-faq__question--open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {faq.question}
                <span>+</span>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="beauty-faq__answer">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </AnimatedSection>
      </section>
    </div>
  );
}
