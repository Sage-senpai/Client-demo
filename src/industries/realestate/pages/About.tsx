import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';
import { fadeUp } from '../../../styles/_animations';

const timeline = [
  {
    year: '2010',
    title: 'Prestige Properties Founded',
    text: 'Established in Ikoyi, Lagos with a vision to redefine the Nigerian real estate experience through professionalism and integrity.',
  },
  {
    year: '2013',
    title: 'Expanded to Commercial Properties',
    text: 'Launched our commercial division, helping businesses find premium office and retail spaces across Lagos and Abuja.',
  },
  {
    year: '2016',
    title: '500th Property Transaction',
    text: 'Reached a landmark milestone of 500 successful property transactions, cementing our reputation as a trusted industry leader.',
  },
  {
    year: '2019',
    title: 'Digital Transformation',
    text: 'Launched our digital platform with virtual tours, mortgage calculators, and online booking — making property search seamless.',
  },
  {
    year: '2022',
    title: 'Pan-Nigeria Expansion',
    text: 'Opened offices in Abuja, Port Harcourt, and Enugu, bringing Prestige-quality service to clients nationwide.',
  },
  {
    year: '2025',
    title: 'Industry Leadership',
    text: 'Recognized as Nigeria&apos;s leading real estate agency with over 2,000 happy clients, 12 expert agents, and a premium portfolio of 500+ properties.',
  },
];

export default function About() {
  return (
    <div className="re-about-page">
      {/* ── Page Header ── */}
      <section className="re-page-header">
        <AnimatedSection className="re-page-header__inner">
          <motion.h1
            className="re-page-header__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            About Prestige Properties
          </motion.h1>
          <motion.p
            className="re-page-header__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Nigeria&apos;s most trusted name in premium real estate since 2010.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* ── Company Story ── */}
      <section className="re-about">
        <AnimatedSection className="re-about__inner">
          <div className="re-about__story">
            <div className="re-about__story-content">
              <span className="re-section-label">Our Story</span>
              <h2>Built on Trust, Driven by Excellence</h2>
              <p>
                Prestige Properties was founded in 2010 with a single mission: to bring
                transparency, professionalism, and world-class service to the Nigerian
                real estate market. What started as a small team of passionate property
                enthusiasts in Ikoyi has grown into one of the country&apos;s most respected
                real estate agencies.
              </p>
              <p>
                Over the past 15 years, we have helped thousands of families find their
                dream homes, guided investors to profitable opportunities, and assisted
                businesses in securing premium commercial spaces. Our commitment to
                integrity and client satisfaction remains unwavering.
              </p>
            </div>
            <div className="re-about__story-image">
              <img
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=800&q=80"
                alt="Prestige Properties office"
                loading="lazy"
              />
            </div>
          </div>

          {/* ── Mission & Vision ── */}
          <div className="re-about__pillars">
            <div className="re-about__pillar">
              <h3>Our Mission</h3>
              <p>
                To deliver exceptional real estate experiences by combining deep market
                expertise, innovative technology, and unwavering commitment to our
                clients&apos; goals. We believe every property transaction should be
                seamless, transparent, and rewarding.
              </p>
            </div>
            <div className="re-about__pillar">
              <h3>Our Vision</h3>
              <p>
                To be Africa&apos;s most trusted and admired real estate brand — known for
                setting the standard in professionalism, client care, and property
                excellence across every market we serve.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Stats ── */}
      <AnimatedSection className="re-stats">
        <div className="re-stats__grid">
          <CounterStat end={500} suffix="+" label="Properties Listed" />
          <CounterStat end={15} suffix="" label="Years of Excellence" />
          <CounterStat end={2000} suffix="+" label="Satisfied Clients" />
          <CounterStat end={4} suffix="" label="Offices Nationwide" />
        </div>
      </AnimatedSection>

      {/* ── Timeline ── */}
      <section className="re-about">
        <AnimatedSection className="re-about__inner">
          <div className="re-about__timeline">
            <h2 className="re-about__timeline-heading">Our Journey</h2>
            {timeline.map((item) => (
              <div className="re-about__timeline-item" key={item.year}>
                <span className="re-about__timeline-year">{item.year}</span>
                <h3 className="re-about__timeline-title">{item.title}</h3>
                <p className="re-about__timeline-text">{item.text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
