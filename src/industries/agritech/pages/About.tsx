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
    <div className="ag-about">
      {/* ── Hero ── */}
      <section className="ag-about-hero">
        <AnimatedSection>
          <h1 className="ag-about-hero__title">Feeding Africa, Empowering Farmers</h1>
          <p className="ag-about-hero__subtitle">
            TerraYield exists to bridge the gap between smallholder farmers and premium markets
            using technology. We believe every farmer deserves fair prices, modern tools, and
            access to the global food system.
          </p>
        </AnimatedSection>
      </section>

      {/* ── Stats ── */}
      <section className="ag-about-stats">
        <AnimatedSection className="ag-about-stats__inner">
          <span className="ag-section-label">Our Impact</span>
          <h2 className="ag-section-heading">Numbers That Tell Our Story</h2>
          <div className="ag-about-stats__grid" style={{ marginTop: '36px' }}>
            <CounterStat end={12400} suffix="+" label="Farmers Empowered" />
            <CounterStat end={85000} suffix="+" label="Tonnes Traded" />
            <CounterStat end={24} suffix="" label="States Covered" />
            <CounterStat end={40} suffix="%" label="Avg Income Boost" />
          </div>
        </AnimatedSection>
      </section>

      {/* ── Timeline ── */}
      <section className="ag-timeline">
        <AnimatedSection className="ag-timeline__inner">
          <span className="ag-section-label">Our Journey</span>
          <h2 className="ag-section-heading">Milestones</h2>
          <div className="ag-timeline__items">
            {milestones.map((m, i) => (
              <div className="ag-timeline-item" key={i}>
                <div className="ag-timeline-item__dot" />
                <span className="ag-timeline-item__year">{m.year}</span>
                <h3 className="ag-timeline-item__title">{m.title}</h3>
                <p className="ag-timeline-item__desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Team ── */}
      <section className="ag-team">
        <AnimatedSection className="ag-team__inner">
          <span className="ag-section-label">Leadership</span>
          <h2 className="ag-section-heading">Meet Our Team</h2>
          <div className="ag-team__grid">
            {teamMembers.map((member, i) => (
              <div className="ag-team-card" key={i}>
                <img
                  className="ag-team-card__photo"
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                />
                <div className="ag-team-card__body">
                  <h3 className="ag-team-card__name">{member.name}</h3>
                  <p className="ag-team-card__role">{member.role}</p>
                  <p className="ag-team-card__bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── SDGs ── */}
      <section className="ag-sdg">
        <AnimatedSection className="ag-sdg__inner">
          <span className="ag-section-label">Global Goals</span>
          <h2 className="ag-section-heading">SDG Alignment</h2>
          <p className="ag-section-subtitle">
            Our work directly contributes to four UN Sustainable Development Goals.
          </p>
          <div className="ag-sdg__grid">
            {sdgs.map((sdg, i) => (
              <div className="ag-sdg__card" key={i}>
                <div className="ag-sdg__card-icon">{sdg.icon}</div>
                <div className="ag-sdg__card-number">{sdg.number}</div>
                <div className="ag-sdg__card-title">{sdg.title}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
