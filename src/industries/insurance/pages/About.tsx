import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';
import { team, offices } from '../data/insuranceData';

const timeline = [
  {
    year: '2008',
    text: 'Aegis Cover founded in New York by Catherine Hargrove and a team of insurance veterans, launching with health and life products in the US market.',
  },
  {
    year: '2011',
    text: 'Expanded to the United Kingdom and opened our London office at 30 St Mary Axe. Launched auto and home insurance products.',
  },
  {
    year: '2014',
    text: 'Entered the Middle East market with our Dubai DIFC office. Introduced business insurance and commercial lines.',
  },
  {
    year: '2016',
    text: 'Opened Asia-Pacific headquarters in Singapore. Launched our AI-powered risk assessment engine and travel insurance.',
  },
  {
    year: '2019',
    text: 'Reached 250,000 active policies worldwide. Opened offices in Sydney and Toronto. Named "Insurer of the Year" by Global Finance.',
  },
  {
    year: '2022',
    text: 'Surpassed $1 billion in total claims paid. Expanded to 12 countries including Germany, France, Japan, South Korea, Brazil, and India.',
  },
  {
    year: '2025',
    text: 'Over 500,000 active policies, $2B+ in claims paid, 98.7% claims approval rate. Continuing to innovate with digital-first insurance solutions.',
  },
];

const accreditations = [
  { icon: '&#128274;', text: 'ISO 27001 Certified' },
  { icon: '&#9989;', text: 'A.M. Best A+ Rated' },
  { icon: '&#128737;', text: 'SOC 2 Type II Compliant' },
  { icon: '&#127760;', text: 'Lloyd\'s of London Partner' },
  { icon: '&#128176;', text: 'S&P Global BBB+ Rating' },
  { icon: '&#128196;', text: 'NAIC Member' },
];

export default function About() {
  return (
    <div className="ins-about">
      {/* ── Hero ── */}
      <div className="ins-about__hero">
        <AnimatedSection>
          <p className="ins-section-label">About Aegis Cover</p>
          <h1 className="ins-about__heading">
            Built on Trust. Driven by Innovation.
          </h1>
          <p className="ins-about__subtitle">
            Founded in 2008, Aegis Cover has grown from a New York startup into
            a global insurance platform operating across 12 countries. We
            combine decades of underwriting expertise with modern technology to
            deliver transparent, reliable, and affordable coverage to over
            500,000 policyholders worldwide.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Stats ── */}
      <AnimatedSection className="ins-stats">
        <div className="ins-stats__grid">
          <CounterStat end={17} suffix="+" label="Years of Experience" />
          <CounterStat end={12} suffix="" label="Countries" />
          <CounterStat end={500} suffix="K+" label="Active Policies" />
          <CounterStat end={2} suffix="B+" label="Claims Paid (USD)" />
        </div>
      </AnimatedSection>

      {/* ── Timeline ── */}
      <section className="ins-timeline">
        <AnimatedSection className="ins-timeline__inner">
          <h2 className="ins-timeline__heading">Our Journey</h2>
          <div className="ins-timeline__list">
            {timeline.map((item) => (
              <div className="ins-timeline__item" key={item.year}>
                <p className="ins-timeline__year">{item.year}</p>
                <p className="ins-timeline__text">{item.text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Global Offices ── */}
      <section className="ins-offices">
        <AnimatedSection className="ins-offices__inner">
          <p className="ins-section-label">Global Presence</p>
          <h2 className="ins-offices__heading">Our Offices Around the World</h2>
          <div className="ins-offices__grid">
            {offices.map((office) => (
              <div className="ins-office-card" key={office.city}>
                <p className="ins-office-card__city">{office.city}</p>
                <p className="ins-office-card__country">{office.country}</p>
                <p className="ins-office-card__address">{office.address}</p>
                <p className="ins-office-card__phone">{office.phone}</p>
                <span className="ins-office-card__type">{office.type}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Leadership Team ── */}
      <section className="ins-team">
        <AnimatedSection className="ins-team__inner">
          <p className="ins-section-label">Leadership</p>
          <h2 className="ins-team__heading">Meet Our Leadership Team</h2>
          <p className="ins-team__subtitle">
            A diverse global team with deep expertise in insurance, technology,
            and finance — united by a mission to make insurance better for
            everyone.
          </p>
          <div className="ins-team__grid">
            {team.map((member) => (
              <div className="ins-team-card" key={member.id}>
                <img
                  className="ins-team-card__img"
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                />
                <div className="ins-team-card__body">
                  <p className="ins-team-card__name">{member.name}</p>
                  <p className="ins-team-card__role">{member.role}</p>
                  <p className="ins-team-card__location">{member.location}</p>
                  <p className="ins-team-card__bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Accreditations ── */}
      <section className="ins-accreditations">
        <AnimatedSection className="ins-accreditations__inner">
          <h2 className="ins-accreditations__heading">
            Accreditations &amp; Ratings
          </h2>
          <div className="ins-accreditations__grid">
            {accreditations.map((badge) => (
              <div className="ins-accreditations__badge" key={badge.text}>
                <span
                  className="ins-accreditations__badge-icon"
                  dangerouslySetInnerHTML={{ __html: badge.icon }}
                />
                <span className="ins-accreditations__badge-text">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
