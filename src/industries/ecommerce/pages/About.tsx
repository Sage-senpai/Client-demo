import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp } from '../../../styles/_animations';

const sustainabilityPillars = [
  {
    icon: '♻',
    title: 'Ethical Sourcing',
    text: 'Every material is traceable. We work directly with weavers and dyers across West Africa, ensuring fair wages and safe working conditions.',
  },
  {
    icon: '🌱',
    title: 'Low-Waste Production',
    text: 'We produce in small batches to minimize waste. Fabric offcuts are repurposed into accessories and packaging materials.',
  },
  {
    icon: '🤝',
    title: 'Community First',
    text: '5% of every sale goes to artisan training programs in rural Nigeria, helping preserve traditional craftsmanship for future generations.',
  },
];

const teamMembers = [
  {
    name: 'Oluwaseun Adeyemi',
    role: 'Founder & Creative Director',
    image: 'https://picsum.photos/seed/nuvteam1/400/400',
  },
  {
    name: 'Amaka Okonkwo',
    role: 'Head of Design',
    image: 'https://picsum.photos/seed/nuvteam2/400/400',
  },
  {
    name: 'Tunde Bakare',
    role: 'Operations Lead',
    image: 'https://picsum.photos/seed/nuvteam3/400/400',
  },
  {
    name: 'Zainab Ibrahim',
    role: 'Brand & Marketing',
    image: 'https://picsum.photos/seed/nuvteam4/400/400',
  },
];

export default function About() {
  return (
    <div className="ecom-about">
      {/* Hero */}
      <section className="ecom-about__hero">
        <AnimatedSection className="ecom-about__hero-inner">
          <p className="section-label">Our Story</p>
          <motion.h1
            className="ecom-about__hero-title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Built on Heritage.<br />Designed for Today.
          </motion.h1>
          <motion.p
            className="ecom-about__hero-text"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Nuvora was born from a simple belief: African fashion belongs on the world
            stage. We blend centuries-old textile traditions with contemporary design to
            create pieces that feel both timeless and fresh.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* Brand Story */}
      <section className="ecom-about__story">
        <AnimatedSection className="ecom-about__story-inner">
          <img
            className="ecom-about__story-image"
            src="https://picsum.photos/seed/nuvstory/800/600"
            alt="Nuvora artisans at work"
            loading="lazy"
          />
          <div className="ecom-about__story-content">
            <p className="section-label section-label--dark">The Beginning</p>
            <h3>From Lagos Market Stalls to Global Wardrobes</h3>
            <p>
              Nuvora started in 2019 when our founder, Oluwaseun Adeyemi, noticed a gap
              in the market — there was no modern platform championing authentic African
              textiles with the polish and experience customers deserved.
            </p>
            <p>
              What began as a curated pop-up in Lekki has grown into a full-fledged
              fashion brand, connecting master artisans in Abeokuta, Kano, and Accra
              with style-conscious shoppers across Nigeria and beyond.
            </p>
            <p>
              Every stitch carries a story. Every pattern has a meaning. When you wear
              Nuvora, you wear a piece of living heritage.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Sustainability */}
      <section className="ecom-about__sustainability">
        <AnimatedSection className="ecom-about__sustainability-inner">
          <p className="section-label section-label--dark">Responsibility</p>
          <h2 className="ecom-about__sustainability-heading">
            Fashion That Does Good
          </h2>
          <p className="ecom-about__sustainability-subtitle">
            We believe great style should never come at the cost of people or planet.
            Sustainability is woven into everything we do.
          </p>
          <div className="ecom-about__sustainability-grid">
            {sustainabilityPillars.map((pillar) => (
              <div className="ecom-about__sustainability-card" key={pillar.title}>
                <div className="ecom-about__sustainability-icon">{pillar.icon}</div>
                <h4>{pillar.title}</h4>
                <p>{pillar.text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Team */}
      <section className="ecom-about__team">
        <AnimatedSection className="ecom-about__team-inner">
          <p className="section-label section-label--dark">The People</p>
          <h2 className="ecom-about__team-heading">Meet the Nuvora Team</h2>
          <div className="ecom-about__team-grid">
            {teamMembers.map((member) => (
              <div className="ecom-about__team-card" key={member.name}>
                <img
                  className="ecom-about__team-photo"
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                />
                <h3 className="ecom-about__team-name">{member.name}</h3>
                <p className="ecom-about__team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
