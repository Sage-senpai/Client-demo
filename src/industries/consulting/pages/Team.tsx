import AnimatedSection from '../../../components/shared/AnimatedSection';
import { team } from '../data/consultingData';

export default function Team() {
  return (
    <div className="vx-team">
      {/* ── Header ── */}
      <div className="vx-page-header">
        <div className="vx-page-header__bg" />
        <AnimatedSection className="vx-page-header__inner">
          <p className="vx-page-header__label">Our Team</p>
          <h1 className="vx-page-header__title">
            Global Leaders. Local Expertise.
          </h1>
          <p className="vx-page-header__subtitle">
            Our partners and principals bring decades of experience from the
            world&rsquo;s leading firms. Based across six continents, they combine
            global perspective with deep local knowledge.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Team Grid ── */}
      <div className="vx-team__grid">
        {team.map((member) => (
          <AnimatedSection key={member.id}>
            <div className="vx-team-card">
              <img
                className="vx-team-card__image"
                src={member.image}
                alt={member.name}
                loading="lazy"
              />
              <div className="vx-team-card__body">
                <h3 className="vx-team-card__name">{member.name}</h3>
                <p className="vx-team-card__title">{member.title}</p>
                <p className="vx-team-card__specialty">{member.specialty}</p>
                <p className="vx-team-card__country">
                  &#127758; {member.country}
                </p>
                <p className="vx-team-card__bio">{member.bio}</p>
                <span className="vx-team-card__linkedin">
                  &#128279; Connect on LinkedIn
                </span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
