import AnimatedSection from '../../../components/shared/AnimatedSection';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Chukwuemeka Obi',
    role: 'Founder & CEO',
    bio: 'Former senior engineer at Andela. 12 years building distributed systems across Africa and Europe. Passionate about using technology to solve uniquely African challenges.',
    photo: 'https://picsum.photos/seed/axiom1/400/400',
  },
  {
    name: 'Aisha Mohammed',
    role: 'CTO',
    bio: 'Ex-AWS solutions architect with deep expertise in cloud infrastructure and machine learning. Leads the technical vision and architecture decisions at Axiom Labs.',
    photo: 'https://picsum.photos/seed/axiom2/400/400',
  },
  {
    name: 'Oluwaseun Adeyemi',
    role: 'VP of Engineering',
    bio: 'Managed engineering teams at two YC-backed startups. Specializes in building high-performance teams and scalable development processes.',
    photo: 'https://picsum.photos/seed/axiom3/400/400',
  },
  {
    name: 'Ngozi Eze',
    role: 'Lead Designer',
    bio: 'Award-winning product designer with a background in cognitive psychology. Creates interfaces that feel intuitive and look stunning across every screen size.',
    photo: 'https://picsum.photos/seed/axiom4/400/400',
  },
  {
    name: 'Tunde Bakare',
    role: 'Senior Backend Engineer',
    bio: 'Go and Rust specialist who has built payment processing systems handling millions of daily transactions. Obsessed with latency and reliability.',
    photo: 'https://picsum.photos/seed/axiom5/400/400',
  },
  {
    name: 'Fatima Yusuf',
    role: 'AI / ML Engineer',
    bio: 'PhD in Computer Science from the University of Lagos. Builds production ML models for healthcare, fintech, and education clients.',
    photo: 'https://picsum.photos/seed/axiom6/400/400',
  },
  {
    name: 'Ikenna Nwachukwu',
    role: 'DevOps Lead',
    bio: 'Certified Kubernetes administrator and Terraform expert. Manages infrastructure serving 50M+ monthly requests with 99.99% uptime.',
    photo: 'https://picsum.photos/seed/axiom7/400/400',
  },
  {
    name: 'Bola Ogundimu',
    role: 'Head of Product',
    bio: 'Product leader with experience at Paystack and Flutterwave. Bridges the gap between business strategy and engineering execution.',
    photo: 'https://picsum.photos/seed/axiom8/400/400',
  },
];

const values = [
  {
    icon: '🚀',
    title: 'Ship with Urgency',
    desc: 'We move fast without cutting corners. Every sprint has a clear deliverable, and we hold ourselves accountable to deadlines.',
  },
  {
    icon: '🔍',
    title: 'Depth over Breadth',
    desc: 'We go deep on problems. Surface-level solutions create technical debt; thorough understanding creates lasting systems.',
  },
  {
    icon: '🤝',
    title: 'Radical Transparency',
    desc: 'We share progress, blockers, and tradeoffs openly — with each other and with every client. No surprises, ever.',
  },
  {
    icon: '🌍',
    title: 'Build for Africa',
    desc: 'We design for the constraints and opportunities unique to our continent: offline-first, low-bandwidth, mobile-first, and multi-currency.',
  },
];

export default function Team() {
  return (
    <div className="tech-team-page">
      <div className="tech-team-page__inner">
        <AnimatedSection className="tech-team-page__header">
          <p className="section-label">Our People</p>
          <h1 className="tech-team-page__title">The Team</h1>
          <p className="tech-team-page__subtitle">
            40+ engineers, designers, and strategists building the future of software in Africa.
            Meet the leadership team.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <img
            className="tech-page-image"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
            alt="Team collaboration"
            loading="lazy"
          />
        </AnimatedSection>

        <AnimatedSection>
          <div className="tech-team-grid">
            {teamMembers.map((member, i) => (
              <div className="tech-team-card" key={i}>
                <img
                  className="tech-team-card__photo"
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                />
                <div className="tech-team-card__body">
                  <h3 className="tech-team-card__name">{member.name}</h3>
                  <p className="tech-team-card__role">{member.role}</p>
                  <p className="tech-team-card__bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* ── Culture ── */}
      <section className="tech-culture">
        <AnimatedSection className="tech-culture__inner">
          <p className="section-label">How We Work</p>
          <h2 className="tech-culture__title">Our Culture</h2>
          <p className="tech-culture__text">
            Culture is not a ping-pong table. It is the set of shared beliefs that guide
            every decision we make — from how we write code to how we treat each other.
          </p>
          <div className="tech-culture__grid">
            {values.map((val, i) => (
              <div className="tech-culture__value" key={i}>
                <div className="tech-culture__value-icon">{val.icon}</div>
                <h4 className="tech-culture__value-title">{val.title}</h4>
                <p className="tech-culture__value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
