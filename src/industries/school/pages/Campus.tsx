import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp } from '../../../styles/_animations';

const facilities = [
  {
    icon: '\uD83D\uDCDA',
    name: 'Library & Archives',
    desc: 'A 3-storey research library housing over 200,000 volumes, digital archives, and quiet study pods open 24/7 during exam periods.',
  },
  {
    icon: '\uD83D\uDD2C',
    name: 'Research Labs',
    desc: 'State-of-the-art laboratories for engineering, medicine, and technology students with industry-grade equipment and dedicated lab technicians.',
  },
  {
    icon: '\u26BD',
    name: 'Sports Complex',
    desc: 'An Olympic-sized swimming pool, football pitch, indoor basketball court, and a fitness centre with professional coaching staff.',
  },
  {
    icon: '\uD83C\uDFE0',
    name: 'Student Hostels',
    desc: 'Modern, secure accommodation for over 2,000 students. Single and shared rooms available, each with Wi-Fi, laundry, and common lounges.',
  },
  {
    icon: '\uD83C\uDF7D\uFE0F',
    name: 'Cafeteria & Food Court',
    desc: 'Multiple dining options serving local and international cuisine, plus a coffee bar and juice bar for quick bites between lectures.',
  },
  {
    icon: '\uD83C\uDFE5',
    name: 'Medical Centre',
    desc: 'An on-campus health facility staffed by qualified doctors and nurses, providing primary care, counselling, and emergency services to all students.',
  },
];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    alt: 'Campus building exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
    alt: 'Library interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    alt: 'Students in lecture hall',
  },
  {
    src: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&q=80',
    alt: 'Faculty member with students',
  },
  {
    src: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&w=800&q=80',
    alt: 'Graduation ceremony',
  },
  {
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    alt: 'Campus aerial view',
  },
];

const activities = [
  'Debate & Model UN',
  'Drama & Theatre Club',
  'Tech Innovation Hub',
  'Community Service',
  'Music & Choir',
  'Cultural Festivals',
  'Photography Club',
  'Student Government',
  'Intramural Sports',
  'Entrepreneurship Club',
];

export default function Campus() {
  return (
    <div>
      {/* ── Page Header ── */}
      <section className="sch-page-header">
        <h1 className="sch-page-header__title">Campus Life</h1>
        <p className="sch-page-header__subtitle">
          Discover a vibrant community where learning extends beyond the classroom
        </p>
      </section>

      {/* ── Facilities ── */}
      <AnimatedSection className="sch-campus__facilities">
        <div className="sch-campus__facilities-inner">
          <h2 className="sch-campus__facilities-title">Campus Facilities</h2>
          <div className="sch-campus__facilities-grid">
            {facilities.map((fac, i) => (
              <motion.div
                key={i}
                className="sch-campus__facility-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="sch-campus__facility-icon">{fac.icon}</div>
                <h3 className="sch-campus__facility-name">{fac.name}</h3>
                <p className="sch-campus__facility-desc">{fac.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Photo Gallery ── */}
      <AnimatedSection className="sch-campus__gallery">
        <div className="sch-campus__gallery-inner">
          <h2 className="sch-campus__gallery-title">Photo Gallery</h2>
          <div className="sch-campus__gallery-grid">
            {galleryImages.map((img, i) => (
              <motion.img
                key={i}
                src={img.src}
                alt={img.alt}
                className="sch-campus__gallery-img"
                loading="lazy"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Student Life ── */}
      <AnimatedSection className="sch-campus__student-life">
        <div className="sch-campus__student-life-inner">
          <div className="sch-campus__student-life-content">
            <h2 className="sch-campus__student-life-title">Student Life & Activities</h2>
            <p className="sch-campus__student-life-text">
              At Meridian, education is more than academics. Our student life programmes are designed
              to nurture well-rounded individuals who can lead, create, and collaborate. With over 30
              registered student organisations, there is something for everyone.
            </p>
            <ul className="sch-campus__activities-list">
              {activities.map((activity, i) => (
                <li key={i} className="sch-campus__activity">{activity}</li>
              ))}
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
            alt="Students collaborating"
            className="sch-campus__student-life-img"
            loading="lazy"
          />
        </div>
      </AnimatedSection>
    </div>
  );
}
