import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';
import { teamMembers } from '../data/agritechData';

const milestones = [
  {
    year: '2020',
    title: 'TerraYield Founded',
    desc: 'Started as a pilot project connecting 50 farmers in Ogun State to direct buyers. Proved the concept with ₦12M in first-quarter trades.',
  },
  {
    year: '2021',
    title: '1,000 Farmers Onboarded',
    desc: 'Expanded to 6 states. Launched soil testing service and mobile app. Secured seed funding from Y Combinator and Ventures Platform.',
  },
  {
    year: '2022',
    title: 'Marketplace Launch',
    desc: 'Full digital marketplace went live. Integrated payment escrow, logistics network, and cold chain partnerships. Traded 20,000 tonnes.',
  },
  {
    year: '2024',
    title: '24 States Covered',
    desc: 'Expanded to 24 Nigerian states. 12,400+ farmers, 85,000+ tonnes traded. Launched IoT irrigation and crop advisory services.',
  },
];

const sdgs = [
  { number: 'SDG 1', title: 'No Poverty', icon: '\u{1F3E0}' },
  { number: 'SDG 2', title: 'Zero Hunger', icon: '\u{1F33E}' },
  { number: 'SDG 8', title: 'Decent Work', icon: '\u{1F4BC}' },
  { number: 'SDG 9', title: 'Industry & Innovation', icon: '\u{1F3ED}' },
];

export default function About() {
  return (
    <div className="terra-about">
      {/* ── Hero ── */}
      <section className="terra-about-hero">
        <AnimatedSection>
          <h1 className="terra-about-hero__title">Feeding Africa, Empowering Farmers</h1>
          <p className="terra-about-hero__subtitle">
            TerraYield exists to bridge the gap between smallholder farmers and premium markets
            using technology. We believe every farmer deserves fair prices, modern tools, and
            access to the global food system.
          </p>
        </AnimatedSection>
      </section>

      {/* ── Stats ── */}
      <section className="terra-about-stats">
        <AnimatedSection className="terra-about-stats__inner">
          <span className="terra-section-label">Our Impact</span>
          <h2 className="terra-section-heading">Numbers That Tell Our Story</h2>
          <div className="terra-about-stats__grid" style={{ marginTop: '36px' }}>
            <CounterStat end={12400} suffix="+" label="Farmers Empowered" />
            <CounterStat end={85000} suffix="+" label="Tonnes Traded" />
            <CounterStat end={24} suffix="" label="States Covered" />
            <CounterStat end={40} suffix="%" label="Avg Income Boost" />
          </div>
        </AnimatedSection>
      </section>

      {/* ── Timeline ── */}
      <section className="terra-timeline">
        <AnimatedSection className="terra-timeline__inner">
          <span className="terra-section-label">Our Journey</span>
          <h2 className="terra-section-heading">Milestones</h2>
          <div className="terra-timeline__items">
            {milestones.map((m, i) => (
              <div className="terra-timeline-item" key={i}>
                <div className="terra-timeline-item__dot" />
                <span className="terra-timeline-item__year">{m.year}</span>
                <h3 className="terra-timeline-item__title">{m.title}</h3>
                <p className="terra-timeline-item__desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Team ── */}
      <section className="terra-team">
        <AnimatedSection className="terra-team__inner">
          <span className="terra-section-label">Leadership</span>
          <h2 className="terra-section-heading">Meet Our Team</h2>
          <div className="terra-team__grid">
            {teamMembers.map((member, i) => (
              <div className="terra-team-card" key={i}>
                <img
                  className="terra-team-card__photo"
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                />
                <div className="terra-team-card__body">
                  <h3 className="terra-team-card__name">{member.name}</h3>
                  <p className="terra-team-card__role">{member.role}</p>
                  <p className="terra-team-card__bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── SDGs ── */}
      <section className="terra-sdg">
        <AnimatedSection className="terra-sdg__inner">
          <span className="terra-section-label">Global Goals</span>
          <h2 className="terra-section-heading">SDG Alignment</h2>
          <p className="terra-section-subtitle">
            Our work directly contributes to four UN Sustainable Development Goals.
          </p>
          <div className="terra-sdg__grid">
            {sdgs.map((sdg, i) => (
              <div className="terra-sdg__card" key={i}>
                <div className="terra-sdg__card-icon">{sdg.icon}</div>
                <div className="terra-sdg__card-number">{sdg.number}</div>
                <div className="terra-sdg__card-title">{sdg.title}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
