import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import CounterStat from '../../../components/shared/CounterStat';
import { fadeUp } from '../../../styles/_animations';
import { accreditations, facilities, testimonials } from '../data/medicalData';

export default function About() {
  return (
    <div className="med-about-page">
      {/* ── Page Header ── */}
      <section className="med-page-header">
        <AnimatedSection className="med-page-header__inner">
          <motion.h1
            className="med-page-header__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            About Solace Medical
          </motion.h1>
          <motion.p
            className="med-page-header__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            A legacy of compassionate care, modern medicine, and community trust.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* ── Our Story ── */}
      <section className="med-about">
        <AnimatedSection className="med-about__inner">
          <div className="med-about__story">
            <div className="med-about__story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, Solace Medical Centre began as a modest family clinic
                on Victoria Island, Lagos. Driven by a vision to make world-class
                healthcare accessible to every Nigerian, our founder Dr. Emeka Nwachukwu
                assembled a team of passionate physicians and invested in cutting-edge
                medical technology.
              </p>
              <p>
                Over the past 15 years, we have grown from a 10-bed facility into a
                full-service medical centre with 12 departments, 45 specialist doctors,
                and advanced diagnostic equipment. We have served over 15,000 patients
                and continue to expand our reach through telemedicine and community
                health outreach programs.
              </p>
              <p>
                At Solace Medical, every patient is treated like family. Our name reflects
                our core mission: to provide comfort, relief, and hope through
                exceptional medical care.
              </p>
            </div>
            <img
              className="med-about__story-image"
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80"
              alt="Solace Medical Centre building"
              loading="lazy"
            />
          </div>

          {/* ── Stats ── */}
          <div className="med-about__stats-grid">
            <CounterStat end={15000} suffix="+" label="Patients Served" />
            <CounterStat end={45} suffix="" label="Specialist Doctors" />
            <CounterStat end={15} suffix="" label="Years of Service" />
            <CounterStat end={98} suffix="%" label="Patient Satisfaction" />
          </div>
        </AnimatedSection>
      </section>

      {/* ── Accreditations ── */}
      <AnimatedSection className="med-about">
        <div className="med-about__inner">
          <div className="med-about__accreditations">
            <h2 className="med-about__accreditations-title">Accreditations &amp; Certifications</h2>
            <div className="med-about__accreditations-grid">
              {accreditations.map((acc, i) => (
                <div className="med-about__accreditation-badge" key={i}>
                  <span>&#9989;</span>
                  {acc}
                </div>
              ))}
            </div>
          </div>

          {/* ── Facilities ── */}
          <div className="med-about__facilities">
            <h2 className="med-about__facilities-title">Our Facilities</h2>
            <div className="med-about__facilities-grid">
              {facilities.map((facility, i) => (
                <div className="med-about__facility-card" key={i}>
                  {facility}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Testimonials ── */}
      <section className="med-about__testimonials">
        <AnimatedSection className="med-about__testimonials-inner">
          <h2 className="med-about__testimonials-title">What Our Patients Say</h2>
          <div className="med-about__testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="med-about__testimonial-card" key={i}>
                <p>&ldquo;{t.text}&rdquo;</p>
                <div className="med-about__testimonial-author">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
