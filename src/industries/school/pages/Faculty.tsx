import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp } from '../../../styles/_animations';

interface FacultyMember {
  id: number;
  name: string;
  title: string;
  department: string;
  bio: string;
  photo: string;
}

const facultyData: FacultyMember[] = [
  {
    id: 1,
    name: 'Prof. Adaeze Nwankwo',
    title: 'Dean of Technology',
    department: 'Technology',
    bio: 'A pioneer in AI research across Africa with over 20 years of experience in software systems, distributed computing, and digital transformation strategy.',
    photo: 'https://picsum.photos/seed/fac1/400/400',
  },
  {
    id: 2,
    name: 'Dr. Olumide Adeyemi',
    title: 'Senior Lecturer, Data Science',
    department: 'Technology',
    bio: 'Former lead data scientist at a Big Four firm, now dedicated to training the next generation of African data professionals through hands-on pedagogy.',
    photo: 'https://picsum.photos/seed/fac2/400/400',
  },
  {
    id: 3,
    name: 'Prof. Nana Akua Mensah',
    title: 'Dean of Business',
    department: 'Business',
    bio: 'Harvard-trained economist specialising in African capital markets, trade policy, and SME growth. Advisor to multiple central banks across the continent.',
    photo: 'https://picsum.photos/seed/fac3/400/400',
  },
  {
    id: 4,
    name: 'Dr. Chidi Okonkwo',
    title: 'Lecturer, Entrepreneurship',
    department: 'Business',
    bio: 'Serial entrepreneur turned academic. Founded three successful startups before joining Meridian to mentor the next wave of African founders.',
    photo: 'https://picsum.photos/seed/fac4/400/400',
  },
  {
    id: 5,
    name: 'Prof. Fatimah Bello',
    title: 'Dean of Medicine',
    department: 'Medicine',
    bio: 'Internationally recognised surgeon and public health advocate. Led WHO field missions across West Africa and published over 80 peer-reviewed papers.',
    photo: 'https://picsum.photos/seed/fac5/400/400',
  },
  {
    id: 6,
    name: 'Dr. Samuel Otieno',
    title: 'Lecturer, Epidemiology',
    department: 'Medicine',
    bio: 'Epidemiologist with field experience in disease surveillance across East and West Africa. Passionate about training community health leaders.',
    photo: 'https://picsum.photos/seed/fac6/400/400',
  },
  {
    id: 7,
    name: 'Prof. Aisha Diop',
    title: 'Dean of Law',
    department: 'Law',
    bio: 'Constitutional law scholar and former judge at the ECOWAS Court of Justice. Champion of human rights and legal reform across Francophone Africa.',
    photo: 'https://picsum.photos/seed/fac7/400/400',
  },
  {
    id: 8,
    name: 'Barr. Emeka Eze',
    title: 'Lecturer, Maritime Law',
    department: 'Law',
    bio: 'Practising maritime lawyer with 15 years of experience in international shipping disputes. Brings real-world litigation experience to the classroom.',
    photo: 'https://picsum.photos/seed/fac8/400/400',
  },
  {
    id: 9,
    name: 'Prof. Yaa Asantewaa',
    title: 'Dean of Arts',
    department: 'Arts',
    bio: 'Award-winning novelist and literary critic. Her work explores post-colonial identity, and she has been a visiting professor at Oxford and Columbia.',
    photo: 'https://picsum.photos/seed/fac9/400/400',
  },
  {
    id: 10,
    name: 'Mr. Tunde Bakare',
    title: 'Lecturer, Digital Media',
    department: 'Arts',
    bio: 'Multimedia artist and animator whose work has been exhibited at the Venice Biennale. Mentors students in blending African aesthetics with digital tools.',
    photo: 'https://picsum.photos/seed/fac10/400/400',
  },
  {
    id: 11,
    name: 'Prof. Ibrahim Kamara',
    title: 'Dean of Engineering',
    department: 'Engineering',
    bio: 'Structural engineer who oversaw major infrastructure projects across three African countries. Advocates for sustainable building practices and local material innovation.',
    photo: 'https://picsum.photos/seed/fac11/400/400',
  },
  {
    id: 12,
    name: 'Dr. Grace Mwangi',
    title: 'Lecturer, Renewable Energy',
    department: 'Engineering',
    bio: 'Renewable energy researcher with a focus on off-grid solar solutions for rural Africa. Holds patents on micro-grid inverter technology.',
    photo: 'https://picsum.photos/seed/fac12/400/400',
  },
];

const departments = ['All', 'Technology', 'Business', 'Medicine', 'Law', 'Arts', 'Engineering'];

export default function Faculty() {
  const [activeDept, setActiveDept] = useState('All');

  const filtered = useMemo(() => {
    if (activeDept === 'All') return facultyData;
    return facultyData.filter((f) => f.department === activeDept);
  }, [activeDept]);

  return (
    <div>
      {/* ── Page Header ── */}
      <section className="sch-page-header">
        <h1 className="sch-page-header__title">Our Faculty</h1>
        <p className="sch-page-header__subtitle">
          Meet the distinguished scholars and industry experts who make Meridian Institute a beacon of academic excellence
        </p>
      </section>

      {/* ── Faculty Grid ── */}
      <AnimatedSection className="sch-faculty">
        <div className="sch-faculty__filters">
          {departments.map((dept) => (
            <button
              key={dept}
              className={`sch-faculty__filter-btn ${activeDept === dept ? 'sch-faculty__filter-btn--active' : ''}`}
              onClick={() => setActiveDept(dept)}
            >
              {dept}
            </button>
          ))}
        </div>

        <div className="sch-faculty__grid">
          {filtered.map((member, i) => (
            <motion.div
              key={member.id}
              className="sch-faculty__card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <img
                src={member.photo}
                alt={member.name}
                className="sch-faculty__card-photo"
                loading="lazy"
              />
              <div className="sch-faculty__card-body">
                <h3 className="sch-faculty__card-name">{member.name}</h3>
                <span className="sch-faculty__card-title">{member.title}</span>
                <span className="sch-faculty__card-dept">{member.department}</span>
                <p className="sch-faculty__card-bio">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
