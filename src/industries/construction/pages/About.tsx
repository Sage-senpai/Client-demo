import AnimatedSection from '../../../components/shared/AnimatedSection';

const timeline = [
  {
    year: '2007',
    title: 'Foundation',
    desc: 'Bastion Group was founded in Lagos by Engr. Chukwuemeka Okonkwo with a team of 8 engineers and a vision to raise the standard of construction in Nigeria. Our first project was a 12-unit residential block in Surulere.',
  },
  {
    year: '2012',
    title: 'Infrastructure Expansion',
    desc: 'Secured our first federal infrastructure contract — a 6km access road in Abuja. Opened a second office in the FCT and grew the team to 85 professionals. Achieved CORBON registration and SON certification.',
  },
  {
    year: '2018',
    title: 'Landmark Milestones',
    desc: 'Completed our 100th project and crossed ₦50 billion in cumulative project value. Delivered the Eko Atlantic Tower C — our tallest building to date at 22 storeys. Expanded operations to 12 Nigerian states.',
  },
  {
    year: '2024',
    title: 'Industry Leadership',
    desc: 'Surpassed 200 completed projects with a perfect on-budget delivery record. Launched our HSE Academy for workforce training and introduced digital twin technology for project monitoring across all active sites.',
  },
];

const leaders = [
  {
    name: 'Engr. Chukwuemeka Okonkwo',
    role: 'Managing Director / CEO',
    bio: 'A structural engineer with 30 years of experience. Former director at Julius Berger. COREN registered, FNICE fellow. Leads Bastion\'s strategic vision and client relationships.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Engr. Amina Bello',
    role: 'Director of Operations',
    bio: 'Civil engineer specializing in project delivery and logistics. 20 years in large-scale construction. Oversees all active project sites and resource allocation across the firm.',
    avatar: 'https://picsum.photos/seed/leader2/200/200',
  },
  {
    name: 'Engr. Tunde Adeyemi',
    role: 'Head of Structural Design',
    bio: 'Structural design expert with a PhD from Imperial College London. Leads the engineering design team responsible for all structural calculations, BIM modelling, and technical specifications.',
    avatar: 'https://picsum.photos/seed/leader3/200/200',
  },
  {
    name: 'Mrs. Ngozi Eze',
    role: 'HSE Director',
    bio: 'NEBOSH and ISO 45001 certified safety professional. 15 years in construction HSE management. Established Bastion\'s award-winning safety culture and training programmes.',
    avatar: 'https://picsum.photos/seed/leader4/200/200',
  },
];

const certifications = [
  {
    icon: '🏛️',
    name: 'CORBON',
    desc: 'Council of Registered Builders of Nigeria — Full corporate registration as a building and civil engineering contractor.',
  },
  {
    icon: '✅',
    name: 'SON Certified',
    desc: 'Standards Organisation of Nigeria — Compliance certification for construction materials testing and quality assurance protocols.',
  },
  {
    icon: '🔬',
    name: 'NAEC Member',
    desc: 'Nigerian Association of Engineering Consultants — Active member participating in industry standards development and advocacy.',
  },
];

export default function About() {
  return (
    <div className="con-about-page">
      {/* ── Page Header ── */}
      <div className="con-page-header">
        <h1 className="con-page-header__title">About Bastion Group</h1>
        <p className="con-page-header__subtitle">
          18 years of building Nigeria's future — one structure at a time.
        </p>
      </div>

      {/* ── Vision / Mission / Values ── */}
      <AnimatedSection className="con-section">
        <hr className="con-accent-bar" />
        <h2 className="con-section-title">Our Foundation</h2>
        <p className="con-section-subtitle">
          The principles that guide every decision and every structure we build.
        </p>
        <div className="con-vmv">
          <div className="con-vmv-card">
            <h3 className="con-vmv-card__title">Vision</h3>
            <p className="con-vmv-card__text">
              To be Nigeria's most trusted engineering and construction firm — recognised
              for delivering transformative infrastructure that stands the test of time and
              sets the benchmark for the African construction industry.
            </p>
          </div>
          <div className="con-vmv-card">
            <h3 className="con-vmv-card__title">Mission</h3>
            <p className="con-vmv-card__text">
              We deliver structurally sound, on-budget, and on-schedule construction
              solutions by combining deep engineering expertise, rigorous safety standards,
              and a relentless commitment to client satisfaction across every project.
            </p>
          </div>
          <div className="con-vmv-card">
            <h3 className="con-vmv-card__title">Core Values</h3>
            <ul className="con-vmv-card__list">
              <li>Structural Integrity in everything we build</li>
              <li>Safety as a non-negotiable priority</li>
              <li>Transparency in cost, timeline, and process</li>
              <li>Innovation in materials and methods</li>
              <li>Community impact through responsible construction</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Timeline ── */}
      <AnimatedSection className="con-section con-section--warm">
        <div className="con-section__inner">
          <hr className="con-accent-bar" />
          <h2 className="con-section-title">Our Journey</h2>
          <p className="con-section-subtitle">
            Key milestones in Bastion Group's growth from a Lagos startup to a national
            engineering firm.
          </p>
          <div className="con-timeline">
            {timeline.map((item) => (
              <div className="con-timeline-item" key={item.year}>
                <div className="con-timeline-item__dot" />
                <p className="con-timeline-item__year">{item.year}</p>
                <h3 className="con-timeline-item__title">{item.title}</h3>
                <p className="con-timeline-item__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Leadership ── */}
      <AnimatedSection className="con-section">
        <hr className="con-accent-bar" />
        <h2 className="con-section-title">Leadership Team</h2>
        <p className="con-section-subtitle">
          Experienced professionals driving Bastion's engineering excellence.
        </p>
        <div className="con-leaders">
          {leaders.map((leader) => (
            <div className="con-leader-card" key={leader.name}>
              <img
                src={leader.avatar}
                alt={leader.name}
                className="con-leader-card__avatar"
              />
              <h3 className="con-leader-card__name">{leader.name}</h3>
              <p className="con-leader-card__role">{leader.role}</p>
              <p className="con-leader-card__bio">{leader.bio}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ── Certifications ── */}
      <AnimatedSection className="con-section con-section--warm">
        <div className="con-section__inner">
          <hr className="con-accent-bar" />
          <h2 className="con-section-title">Certifications &amp; Accreditations</h2>
          <p className="con-section-subtitle">
            Bastion Group maintains the highest industry certifications and professional
            memberships.
          </p>
          <div className="con-about-certs">
            {certifications.map((cert) => (
              <div className="con-cert-card" key={cert.name}>
                <div className="con-cert-card__icon">{cert.icon}</div>
                <h3 className="con-cert-card__name">{cert.name}</h3>
                <p className="con-cert-card__desc">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
