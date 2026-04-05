import AnimatedSection from '../../../components/shared/AnimatedSection';

const teamMembers = [
  {
    name: 'Amara Obi',
    specialty: 'Hair Colourist & Texture Specialist',
    experience: '12 years experience',
    photo: 'https://picsum.photos/seed/team-amara/600/700',
    bio: 'Amara is a certified colour specialist with training from the Wella Studio in London. She is renowned for her seamless balayage blends and vibrant fashion colours, with a passion for enhancing natural textures.',
  },
  {
    name: 'Chidinma Eze',
    specialty: 'Braids, Locs & Protective Styling',
    experience: '9 years experience',
    photo: 'https://picsum.photos/seed/team-chidinma/600/700',
    bio: 'Chidinma is an expert in protective styling — from intricate goddess locs to knotless braids. She believes in preserving hair health while creating stunning, long-lasting styles for every occasion.',
  },
  {
    name: 'Kelechi Nwankwo',
    specialty: 'Skin Therapist & Aesthetician',
    experience: '10 years experience',
    photo: 'https://picsum.photos/seed/team-kelechi/600/700',
    bio: 'With advanced certifications in dermatological skincare, Kelechi specialises in treating hyperpigmentation, acne-prone skin, and anti-ageing concerns. Her facials are the most requested at Radiance.',
  },
  {
    name: 'Fatima Bello',
    specialty: 'Nail Artist & Nail Technician',
    experience: '7 years experience',
    photo: 'https://picsum.photos/seed/team-fatima/600/700',
    bio: 'Fatima is an award-winning nail artist known for her intricate hand-painted designs and sculpted acrylics. She has been featured in magazines and styled nails for multiple fashion campaigns.',
  },
  {
    name: 'Tunde Adeyemi',
    specialty: 'Spa Therapist & Massage Expert',
    experience: '11 years experience',
    photo: 'https://picsum.photos/seed/team-tunde/600/700',
    bio: 'Tunde trained in Thai and Swedish massage therapy and brings a holistic approach to relaxation. His deep tissue massages and hot stone treatments are favourites among regular clients.',
  },
  {
    name: 'Blessing Udo',
    specialty: 'Bridal Specialist & Makeup Artist',
    experience: '8 years experience',
    photo: 'https://picsum.photos/seed/team-blessing/600/700',
    bio: 'Blessing is the go-to bridal stylist in Abuja. She has styled over 300 brides and specialises in flawless airbrush makeup, bespoke bridal hair, and creating timeless wedding-day looks.',
  },
];

export default function Team() {
  return (
    <div className="beauty-team-page">
      <AnimatedSection className="beauty-team-page__inner">
        <div className="beauty-team-page__header">
          <p className="section-label">Our Talent</p>
          <h1 className="beauty-team-page__title">Meet Our Stylists</h1>
          <p className="beauty-team-page__subtitle">
            World-class expertise, personal care, and genuine passion for beauty — that is the Radiance team.
          </p>
        </div>

        <div className="beauty-team-page__grid">
          {teamMembers.map((member, i) => (
            <div className="beauty-team-page__card" key={i}>
              <img
                className="beauty-team-page__card-photo"
                src={member.photo}
                alt={member.name}
                loading="lazy"
              />
              <div className="beauty-team-page__card-body">
                <h3 className="beauty-team-page__card-name">{member.name}</h3>
                <p className="beauty-team-page__card-specialty">{member.specialty}</p>
                <p className="beauty-team-page__card-exp">{member.experience}</p>
                <p className="beauty-team-page__card-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ── Our Promise ── */}
      <section className="beauty-promise">
        <AnimatedSection className="beauty-promise__inner">
          <p className="section-label">Our Commitment</p>
          <h2 className="beauty-promise__title">Our Promise to You</h2>
          <p className="beauty-promise__text">
            At Radiance Studio, we believe that beauty is deeply personal. Every client who walks through our doors receives a bespoke experience — a consultation to understand your vision, expert execution, and aftercare advice to keep you glowing long after you leave.
          </p>
          <p className="beauty-promise__text">
            We invest in continuous education, ensuring our team stays at the forefront of global beauty trends while honouring the rich traditions of African hair and skincare. Your confidence is our craft.
          </p>
        </AnimatedSection>
      </section>
    </div>
  );
}
