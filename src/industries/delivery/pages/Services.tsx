import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp, buttonHover } from '../../../styles/_animations';
import servicesData from '../data/servicesData';

export default function Services() {
  return (
    <div className="del-page-enter">
      <AnimatedSection className="del-services-page">
        <h1 className="del-services-page__title">Our Services</h1>
        <div className="del-section-divider" />
        <p className="del-services-page__subtitle">
          From hot meals to critical medical supplies, Zinga handles every delivery category
          with purpose-built logistics and dedicated rider teams.
        </p>

        {servicesData.map((service, index) => (
          <AnimatedSection key={service.id}>
            <motion.div
              className="del-service-section"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="del-service-section__icon">{service.icon}</div>

              <div className="del-service-section__content">
                <h3>{service.title}</h3>
                <p className="del-service-section__desc">{service.description}</p>

                <ul className="del-service-section__features">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <motion.div {...buttonHover}>
                  <Link to="/delivery/contact" className="del-service-section__cta">
                    {service.cta}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </AnimatedSection>
    </div>
  );
}
