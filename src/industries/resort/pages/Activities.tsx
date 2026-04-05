import AnimatedSection from '../../../components/shared/AnimatedSection';

const activities = [
  {
    icon: '🏄',
    name: 'Surf Lessons',
    description:
      'Our certified instructors guide beginners and intermediates through the Atlantic swell just offshore. All equipment is provided, and each session is tailored to your skill level.',
    duration: '2 hours',
    price: '₦25,000',
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: '🤿',
    name: 'Snorkeling Expedition',
    description:
      'Explore the vibrant coral formations and marine life along the Ilaje reef. A marine biologist accompanies every trip to share insights about the local ecosystem.',
    duration: '3 hours',
    price: '₦30,000',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: '🚣',
    name: 'Lagoon Kayaking',
    description:
      'Paddle through the serene mangrove-lined lagoon at your own pace. Morning sessions offer the best birdwatching, while sunset paddles are pure magic.',
    duration: '1.5 hours',
    price: '₦15,000',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: '🎣',
    name: 'Deep-Sea Fishing',
    description:
      'Board our chartered vessel and venture into deep waters for marlin, sailfish, and tuna. Catch-and-release or have the chef prepare your prize at dinner.',
    duration: '5 hours',
    price: '₦120,000',
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: '🧘',
    name: 'Beach Yoga & Meditation',
    description:
      'Begin your day on the sand with a guided vinyasa flow as the sun rises over the ocean. Sessions conclude with a five-minute guided meditation.',
    duration: '1 hour',
    price: 'Complimentary',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: '🚴',
    name: 'Coastal Cycling Tour',
    description:
      'Ride along the coastal trail through fishing villages and coconut groves. Stops include a local market visit and a refreshment break at a palm-wine tapper.',
    duration: '3 hours',
    price: '₦20,000',
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: '🍳',
    name: 'Nigerian Cooking Class',
    description:
      'Join our sous chef to learn the secrets behind classic Nigerian dishes — jollof rice, pepper soup, and puff-puff. You eat everything you make.',
    duration: '2.5 hours',
    price: '₦22,000',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: '🌅',
    name: 'Sunset Catamaran Cruise',
    description:
      'Sail along the coastline aboard our luxury catamaran with sparkling wine, canapes, and a live acoustic set as the sky turns gold and crimson.',
    duration: '2 hours',
    price: '₦45,000',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=85',
  },
];

export default function Activities() {
  return (
    <div className="resort-activities-page">
      {/* ── PAGE HERO ── */}
      <div className="resort-page-hero">
        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
          alt="Activities"
          className="resort-page-hero__bg"
        />
        <div className="resort-page-hero__overlay" />
        <div className="resort-page-hero__content">
          <h1 className="resort-page-hero__title">Activities</h1>
          <p className="resort-page-hero__subtitle">
            Adventure, culture, and relaxation — however you like to spend your days.
          </p>
        </div>
      </div>

      {/* ── ACTIVITY CARDS ── */}
      <section className="resort-section">
        <div className="resort-container">
          <AnimatedSection>
            <h2 className="resort-section-title">Experiences Await</h2>
            <p className="resort-section-subtitle">
              Every activity is led by experienced local guides who bring the
              coast to life through stories, skill, and genuine warmth.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="resort-activity-cards">
              {activities.map((act) => (
                <div key={act.name} className="resort-activity-card">
                  <img
                    src={act.image}
                    alt={act.name}
                    className="resort-activity-card__image"
                  />
                  <div className="resort-activity-card__body">
                    <div className="resort-activity-card__icon">{act.icon}</div>
                    <h3 className="resort-activity-card__name">{act.name}</h3>
                    <p className="resort-activity-card__desc">{act.description}</p>
                    <div className="resort-activity-card__meta">
                      <span className="resort-activity-card__tag">{act.duration}</span>
                      <span className="resort-activity-card__tag">{act.price}</span>
                      <span className="resort-activity-card__tag resort-activity-card__tag--difficulty">
                        {act.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
