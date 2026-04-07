import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';
import { fadeUp, buttonHover } from '../../../styles/_animations';

const featuredCourses = [
  {
    name: 'Full-Stack Software Engineering',
    department: 'Technology',
    duration: '4 Years',
    format: 'In-Person',
    fee: '\u20A62,400,000 / yr',
    image: 'https://picsum.photos/seed/course1/400/300',
  },
  {
    name: 'MBA \u2014 African Markets Focus',
    department: 'Business',
    duration: '2 Years',
    format: 'In-Person',
    fee: '\u20A63,200,000 / yr',
    image: 'https://picsum.photos/seed/course3/400/300',
  },
  {
    name: 'Medicine & Surgery (MBBS)',
    department: 'Medicine',
    duration: '6 Years',
    format: 'In-Person',
    fee: '\u20A63,800,000 / yr',
    image: 'https://picsum.photos/seed/course5/400/300',
  },
];

const testimonials = [
  {
    quote:
      'Meridian Institute transformed my understanding of what African leadership can look like. The faculty pushed me to think beyond borders, and the network I built here has been invaluable to my career.',
    name: 'Amara Okafor',
    program: 'MBA Class of 2022',
    avatar: 'https://picsum.photos/seed/student1/100/100',
  },
  {
    quote:
      'The medical programme at Meridian is world-class. Clinical rotations across three countries gave me an exposure I could never have gotten elsewhere. I graduated ready to serve.',
    name: 'Dr. Kwame Mensah',
    program: 'MBBS Class of 2021',
    avatar: 'https://picsum.photos/seed/student2/100/100',
  },
  {
    quote:
      'As a mature student returning to education, I was nervous. The Entrepreneurship Certificate gave me the tools and confidence to launch my fintech startup within a year of graduating.',
    name: 'Fatima Diallo',
    program: 'Entrepreneurship Certificate 2023',
    avatar: 'https://picsum.photos/seed/student3/100/100',
  },
];

export default function Home() {
  return (
    <div className="sch-home">
      {/* ── Hero ── */}
      <section
        className="sch-hero"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=85)',
        }}
      >
        <div className="sch-hero__overlay" />
        <div className="sch-hero__content">
          <motion.h1
            className="sch-hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Shaping Africa's
            <br />
            Future Leaders
          </motion.h1>
          <motion.p
            className="sch-hero__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Pan-African higher education &amp; professional development. Empowering minds, building
            nations, creating impact since 1997.
          </motion.p>
          <motion.div
            className="sch-hero__ctas"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/school/courses">
              <motion.button className="sch-hero__btn-primary" {...buttonHover}>
                Explore Programmes
              </motion.button>
            </Link>
            <Link to="/school/admissions">
              <motion.button className="sch-hero__btn-outline" {...buttonHover}>
                Apply Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Quick Stats ── */}
      <AnimatedSection className="sch-stats">
        <div className="sch-stats__inner">
          <CounterStat end={5000} suffix="+" label="Alumni" />
          <CounterStat end={120} suffix="" label="Faculty" />
          <CounterStat end={6} suffix="" label="Departments" />
          <CounterStat end={28} suffix="" label="Years" />
        </div>
      </AnimatedSection>

      {/* ── Featured Courses ── */}
      <AnimatedSection className="sch-featured">
        <div className="sch-featured__inner">
          <div className="sch-featured__header">
            <h2 className="sch-featured__title">Featured Programmes</h2>
            <p className="sch-featured__subtitle">
              Discover our most sought-after degree and professional courses
            </p>
          </div>
          <div className="sch-featured__grid">
            {featuredCourses.map((course, i) => (
              <motion.div
                key={i}
                className="sch-featured__card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <img
                  src={course.image}
                  alt={course.name}
                  className="sch-featured__card-img"
                  loading="lazy"
                />
                <div className="sch-featured__card-body">
                  <span className="sch-featured__card-dept">{course.department}</span>
                  <h3 className="sch-featured__card-name">{course.name}</h3>
                  <div className="sch-featured__card-meta">
                    <span>{course.duration}</span>
                    <span>{course.format}</span>
                  </div>
                  <span className="sch-featured__card-fee">{course.fee}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="sch-featured__cta-wrap">
            <Link to="/school/courses">
              <motion.button className="sch-featured__cta" {...buttonHover}>
                View All Programmes
              </motion.button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Campus Life Preview ── */}
      <AnimatedSection className="sch-campus-preview">
        <div className="sch-campus-preview__inner">
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80"
            alt="Meridian Institute Campus"
            className="sch-campus-preview__image"
            loading="lazy"
          />
          <div className="sch-campus-preview__content">
            <h2 className="sch-campus-preview__title">Experience Campus Life</h2>
            <p className="sch-campus-preview__text">
              Our vibrant 120-acre campus is a melting pot of cultures, ideas, and ambition. From
              state-of-the-art labs to lush green spaces, every corner is designed to inspire
              learning and collaboration.
            </p>
            <ul className="sch-campus-preview__features">
              <li className="sch-campus-preview__feature">Modern Library</li>
              <li className="sch-campus-preview__feature">Research Labs</li>
              <li className="sch-campus-preview__feature">Sports Complex</li>
              <li className="sch-campus-preview__feature">Student Hostels</li>
              <li className="sch-campus-preview__feature">Medical Centre</li>
              <li className="sch-campus-preview__feature">Cafeteria</li>
            </ul>
            <Link to="/school/campus">
              <motion.button className="sch-campus-preview__btn" {...buttonHover}>
                Discover Our Campus
              </motion.button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Testimonials ── */}
      <AnimatedSection className="sch-testimonials">
        <div className="sch-testimonials__inner">
          <h2 className="sch-testimonials__title">What Our Students Say</h2>
          <div className="sch-testimonials__grid">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="sch-testimonials__card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="sch-testimonials__quote">{t.quote}</p>
                <div className="sch-testimonials__author">
                  <img src={t.avatar} alt={t.name} className="sch-testimonials__avatar" loading="lazy" />
                  <div className="sch-testimonials__author-info">
                    <span className="sch-testimonials__author-name">{t.name}</span>
                    <span className="sch-testimonials__author-program">{t.program}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── CTA Banner ── */}
      <AnimatedSection className="sch-cta-banner">
        <h2 className="sch-cta-banner__title">Begin Your Journey at Meridian</h2>
        <p className="sch-cta-banner__text">
          Applications for the 2025/2026 academic year are now open. Join thousands of graduates who
          have gone on to shape industries and lead nations.
        </p>
        <Link to="/school/admissions">
          <motion.button className="sch-cta-banner__btn" {...buttonHover}>
            Start Your Application
          </motion.button>
        </Link>
      </AnimatedSection>
    </div>
  );
}
