import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';
import { team } from '../data/agencyData';

const values = [
  {
    icon: '\u{1F3AF}',
    title: 'Strategy First',
    desc: 'Every pixel and every word is guided by strategy. We don\u2019t create for the sake of creating \u2014 we create to convert.',
  },
  {
    icon: '\u{1F525}',
    title: 'Bold Creativity',
    desc: 'Safe is forgettable. We push boundaries to make brands that demand attention and refuse to be ignored.',
  },
  {
    icon: '\u{1F4CA}',
    title: 'Data-Driven',
    desc: 'Gut feelings are nice, but numbers don\u2019t lie. Every decision we make is backed by analytics and measurable outcomes.',
  },
  {
    icon: '\u{1F91D}',
    title: 'True Partnership',
    desc: 'We don\u2019t do client-vendor relationships. We embed ourselves in your team and treat your brand like our own.',
  },
];

const awards = [
  {
    icon: '\u{1F3C6}',
    title: 'Best Digital Agency',
    year: '2024',
    desc: 'Nigeria Digital Awards \u2014 Recognized for outstanding client results and creative innovation.',
  },
  {
    icon: '\u{1F31F}',
    title: 'Top 10 African Agencies',
    year: '2023',
    desc: 'Continental Creative Report \u2014 Named among the top 10 creative agencies across Africa.',
  },
  {
    icon: '\u{1F4A1}',
    title: 'Innovation in Marketing',
    year: '2023',
    desc: 'West Africa Marketing Summit \u2014 Awarded for pioneering AI-driven campaign strategies.',
  },
];

export default function About() {
  return (
    <div className="ag-about">
      {/* ── Header ── */}
      <div className="ag-page-header">
        <div className="ag-page-header__bg" />
        <AnimatedSection className="ag-page-header__inner">
          <p className="ag-page-header__label">About Flux</p>
          <h1 className="ag-page-header__title">
            The Agency Behind the Brands
          </h1>
          <p className="ag-page-header__subtitle">
            We are a collective of strategists, designers, developers, and
            marketers on a mission to make African brands world-class.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Story ── */}
      <AnimatedSection className="ag-about-story">
        <div className="ag-about-story__text">
          <h2>Born in Lagos. Built for the World.</h2>
          <p>
            Flux Creative started in 2017 with a simple belief: African brands
            deserve the same caliber of creative and strategic work as any brand
            in New York, London, or Tokyo. What began as a two-person operation
            in a Yaba co-working space has grown into a 20-person agency serving
            clients across 6 countries.
          </p>
          <p>
            We have helped over 120 brands find their voice, build their digital
            presence, and scale their growth. From early-stage startups to
            established enterprises, our approach is always the same: strategy
            first, creativity always, results guaranteed.
          </p>
          <p>
            Today, Flux Creative is recognized as one of West Africa&rsquo;s
            leading digital agencies, and we are just getting started.
          </p>
        </div>
        <img
          className="ag-about-story__image"
          src="https://picsum.photos/seed/fluxteam/800/600"
          alt="Flux Creative team"
          loading="lazy"
        />
      </AnimatedSection>

      {/* ── Values ── */}
      <div className="ag-values">
        <AnimatedSection className="ag-values__header">
          <p className="ag-section-label">Our Values</p>
          <h2 className="ag-section-title">What Drives Us</h2>
        </AnimatedSection>

        <div className="ag-values__grid">
          {values.map((v, i) => (
            <AnimatedSection key={i}>
              <div className="ag-value-card">
                <span className="ag-value-card__icon">{v.icon}</span>
                <h3 className="ag-value-card__title">{v.title}</h3>
                <p className="ag-value-card__desc">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* ── Team ── */}
      <div className="ag-team">
        <AnimatedSection className="ag-team__header">
          <p className="ag-section-label">The Team</p>
          <h2 className="ag-section-title">Meet the Humans Behind Flux</h2>
        </AnimatedSection>

        <div className="ag-team__grid">
          {team.map((member) => (
            <AnimatedSection key={member.id}>
              <div className="ag-team-card">
                <img
                  className="ag-team-card__image"
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
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* ── Awards ── */}
      <div className="ag-awards">
        <AnimatedSection className="ag-awards__header">
          <p className="ag-section-label">Recognition</p>
          <h2 className="ag-section-title">Awards &amp; Accolades</h2>
        </AnimatedSection>

        <div className="ag-awards__grid">
          {awards.map((a, i) => (
            <AnimatedSection key={i}>
              <div className="ag-award-card">
                <span className="ag-award-card__icon">{a.icon}</span>
                <h3 className="ag-award-card__title">{a.title}</h3>
                <p className="ag-award-card__year">{a.year}</p>
                <p className="ag-award-card__desc">{a.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="ag-cta-banner">
        <div className="ag-cta-banner__bg" />
        <AnimatedSection className="ag-cta-banner__inner">
          <h2 className="ag-cta-banner__title">
            Want to Join the Team?
          </h2>
          <p className="ag-cta-banner__subtitle">
            We are always looking for talented people who want to do the best work
            of their careers. Drop us a line.
          </p>
          <Link to="/agency/contact">
            <motion.button className="ag-hero__btn-primary" {...buttonHover}>
              Get in Touch
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
