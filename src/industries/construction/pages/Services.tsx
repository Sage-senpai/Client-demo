import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';

const services = [
  {
    icon: '🏗️',
    name: 'Commercial Construction',
    description:
      'From Grade A office towers to shopping malls and mixed-use developments, Bastion Group delivers commercial projects that meet international standards. Our team manages every phase — from site investigation and structural design through to handover and facility commissioning. We specialize in fast-track delivery without compromising on quality, ensuring your investment generates returns on schedule.',
    deliverables: [
      'Structural engineering & design',
      'Reinforced concrete & steel frames',
      'Curtain wall & facade systems',
      'MEP coordination & installation',
      'Interior fit-out management',
      'Building commissioning',
    ],
  },
  {
    icon: '🏠',
    name: 'Residential Development',
    description:
      'Whether it is a single luxury villa or a 500-unit estate development, we bring the same rigour and attention to detail. Bastion has delivered residential projects across Lagos, Abuja, and Port Harcourt, ranging from affordable housing schemes to ultra-high-net-worth waterfront properties. We handle master planning, civil works, building construction, and estate infrastructure including roads, drainage, and utilities.',
    deliverables: [
      'Master planning & site layout',
      'Foundation & substructure works',
      'Block & concrete construction',
      'Roof systems & waterproofing',
      'Estate roads & drainage',
      'Landscaping & external works',
    ],
  },
  {
    icon: '🌉',
    name: 'Road & Bridge Engineering',
    description:
      'Our infrastructure division has delivered over 80 kilometers of roadway and rehabilitated 12 bridges across 6 Nigerian states. We design and build highways, expressways, access roads, and flyovers to Federal Ministry of Works standards. Our bridge engineering team handles new construction, rehabilitation, widening, and structural strengthening using both conventional and advanced methods.',
    deliverables: [
      'Pavement design & construction',
      'Bridge design & construction',
      'Structural rehabilitation',
      'Drainage & culvert systems',
      'Traffic management planning',
      'Asphalt & concrete paving',
    ],
  },
  {
    icon: '🏭',
    name: 'Industrial Facilities',
    description:
      'Bastion builds factories, warehouses, processing plants, and logistics hubs that are engineered for operational efficiency. We understand that industrial projects must balance structural robustness with functional flexibility — enabling clients to adapt their facilities as their operations evolve. Our team has delivered projects for food processing, manufacturing, oil and gas support, and cold chain logistics.',
    deliverables: [
      'Portal frame & steel structures',
      'Silo & tank construction',
      'Industrial flooring systems',
      'Loading dock & yard design',
      'Fire protection systems',
      'Clean room & controlled environments',
    ],
  },
  {
    icon: '🔧',
    name: 'Renovation & Restoration',
    description:
      'Not every project starts from scratch. Bastion has extensive experience in renovating and restoring existing structures — from colonial-era government buildings to 1990s commercial towers that need modernization. We conduct thorough structural assessments, develop remediation strategies, and execute upgrades that extend building life while meeting current codes and standards.',
    deliverables: [
      'Structural condition assessment',
      'Concrete repair & strengthening',
      'Facade renovation & resealing',
      'Electrical & plumbing upgrades',
      'Accessibility compliance',
      'Heritage-sensitive restoration',
    ],
  },
  {
    icon: '📋',
    name: 'Project Management',
    description:
      'For clients who need expert oversight without a full design-build engagement, Bastion offers standalone project management and construction supervision services. Our PMs bring decades of site experience and use industry-standard tools to track progress, manage budgets, coordinate subcontractors, and ensure quality at every stage. We serve as the client\'s trusted representative on site.',
    deliverables: [
      'Project planning & scheduling',
      'Cost estimation & budget control',
      'Subcontractor coordination',
      'Quality assurance & inspection',
      'Progress reporting & documentation',
      'Risk management & mitigation',
    ],
  },
];

export default function Services() {
  return (
    <div className="con-services-page">
      {/* ── Page Header ── */}
      <div className="con-page-header">
        <h1 className="con-page-header__title">Our Services</h1>
        <p className="con-page-header__subtitle">
          End-to-end construction and engineering services — from concept to completion.
        </p>
      </div>

      <AnimatedSection className="con-section">
        <div className="con-services-list">
          {services.map((service) => (
            <div className="con-service-block" key={service.name}>
              <div className="con-service-block__icon">{service.icon}</div>
              <div className="con-service-block__content">
                <h3 className="con-service-block__title">{service.name}</h3>
                <p className="con-service-block__desc">{service.description}</p>
                <h4 className="con-service-block__deliverables-title">Key Deliverables</h4>
                <ul className="con-service-block__deliverables">
                  {service.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ── CTA ── */}
      <AnimatedSection className="con-cta-strip">
        <h2 className="con-cta-strip__title">Need a Specialized Solution?</h2>
        <p className="con-cta-strip__text">
          Our engineering team can scope any project. Tell us what you need.
        </p>
        <Link to="/construction/quote">
          <motion.button className="con-cta-strip__btn" {...buttonHover}>
            Request a Quote &rarr;
          </motion.button>
        </Link>
      </AnimatedSection>
    </div>
  );
}
