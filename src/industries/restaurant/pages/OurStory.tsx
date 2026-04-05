import AnimatedSection from '../../../components/shared/AnimatedSection';

const timeline = [
  {
    year: '2012',
    heading: 'The Beginning',
    text: 'Chef Adaeze Okonkwo opens a small 20-seat supper club in Victoria Island, Lagos, serving reimagined Nigerian classics to an intimate crowd of food lovers.',
  },
  {
    year: '2016',
    heading: 'Koko & Thyme is Born',
    text: 'After years of underground supper clubs and pop-ups across West Africa, Koko & Thyme officially opens its doors on Admiralty Way, Lekki — a 60-seat fine dining destination.',
  },
  {
    year: '2020',
    heading: 'International Recognition',
    text: 'Featured in Condé Nast Traveller\'s "Best New Restaurants in Africa." Our Jollof Risotto becomes a viral sensation and cements our place on the global culinary map.',
  },
  {
    year: '2024',
    heading: 'Expansion & Evolution',
    text: 'We expand to 80 seats with a new private dining wing, launch our signature tasting menu, and begin hosting visiting chefs from across the continent and beyond.',
  },
];

const team = [
  {
    name: 'Chef Adaeze Okonkwo',
    role: 'Founder & Head Chef',
    photo: 'https://picsum.photos/seed/chef1/300/300',
    bio: 'Trained in Paris and Lagos, Adaeze brings two decades of culinary mastery to every plate. Her philosophy: honour the ingredient, tell the story.',
  },
  {
    name: 'Emeka Nwosu',
    role: 'Sous Chef',
    photo: 'https://picsum.photos/seed/chef2/300/300',
    bio: 'A rising star in Nigerian gastronomy, Emeka\'s precision and creativity drive our daily specials and seasonal menus.',
  },
  {
    name: 'Folake Adeyemi',
    role: 'Sommelier & Bar Lead',
    photo: 'https://picsum.photos/seed/chef3/300/300',
    bio: 'With certifications from the Court of Master Sommeliers, Folake curates our wine list and signature cocktail pairings.',
  },
  {
    name: 'Tunde Bakare',
    role: 'Restaurant Manager',
    photo: 'https://picsum.photos/seed/chef4/300/300',
    bio: 'Tunde ensures every guest feels at home from the moment they walk in. Fifteen years of hospitality expertise, distilled into every interaction.',
  },
];

export default function OurStory() {
  return (
    <div className="rest-our-story">
      {/* ── Full-Screen Hero ── */}
      <section
        className="rest-our-story__hero"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=800&q=80)',
        }}
      >
        <div className="rest-our-story__hero-overlay" />
        <AnimatedSection className="rest-our-story__hero-content">
          <h1 className="rest-our-story__hero-title">Our Story</h1>
          <p className="rest-our-story__hero-text">
            From a small supper club in Victoria Island to one of Lagos&rsquo; most celebrated
            dining destinations — this is the story of Koko &amp; Thyme.
          </p>
        </AnimatedSection>
      </section>

      {/* ── Timeline ── */}
      <section className="rest-our-story__timeline">
        <AnimatedSection className="rest-our-story__timeline-inner">
          <h2 className="rest-our-story__timeline-title">Our Journey</h2>
          <div className="rest-our-story__timeline-items">
            {timeline.map((item, i) => (
              <div className="rest-our-story__timeline-item" key={i}>
                <div className="rest-our-story__timeline-dot" />
                <div
                  className="rest-our-story__timeline-content"
                  style={i % 2 === 0 ? { marginRight: 'auto' } : { marginLeft: 'auto' }}
                >
                  <div className="rest-our-story__timeline-year">{item.year}</div>
                  <h3 className="rest-our-story__timeline-heading">{item.heading}</h3>
                  <p className="rest-our-story__timeline-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Meet the Team ── */}
      <section className="rest-our-story__team">
        <AnimatedSection className="rest-our-story__team-inner">
          <h2 className="rest-our-story__team-title">Meet the Team</h2>
          <div className="rest-our-story__team-grid">
            {team.map((member, i) => (
              <div className="rest-our-story__team-card" key={i}>
                <img
                  className="rest-our-story__team-photo"
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                />
                <h3 className="rest-our-story__team-name">{member.name}</h3>
                <p className="rest-our-story__team-role">{member.role}</p>
                <p className="rest-our-story__team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Philosophy ── */}
      <section className="rest-our-story__philosophy">
        <AnimatedSection className="rest-our-story__philosophy-inner">
          <p className="section-label" style={{ color: '#C4922A' }}>Our Philosophy</p>
          <blockquote className="rest-our-story__philosophy-quote">
            &ldquo;We do not simply cook food — we translate memory into flavour, heritage
            into art, and community into every plate that leaves our kitchen.&rdquo;
          </blockquote>
          <p className="rest-our-story__philosophy-attr">
            — Chef Adaeze Okonkwo, Founder
          </p>
        </AnimatedSection>
      </section>
    </div>
  );
}
