import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';

interface Event {
  id: number;
  title: string;
  type: 'Workshop' | 'Networking' | 'Masterclass' | 'Social';
  date: string;
  time: string;
  seatsRemaining: number;
  price: string;
  image: string;
  past?: boolean;
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: 'Lagos Startup Pitch Night',
    type: 'Networking',
    date: 'January 18, 2025',
    time: '6:00 PM – 9:00 PM',
    seatsRemaining: 24,
    price: '₦5,000',
    image: 'https://picsum.photos/seed/groveevt1/800/500',
  },
  {
    id: 2,
    title: 'UX Design Fundamentals Workshop',
    type: 'Workshop',
    date: 'January 25, 2025',
    time: '10:00 AM – 4:00 PM',
    seatsRemaining: 12,
    price: '₦15,000',
    image: 'https://picsum.photos/seed/groveevt2/800/500',
  },
  {
    id: 3,
    title: 'AI & Machine Learning Masterclass',
    type: 'Masterclass',
    date: 'February 1, 2025',
    time: '2:00 PM – 6:00 PM',
    seatsRemaining: 8,
    price: '₦20,000',
    image: 'https://picsum.photos/seed/groveevt3/800/500',
  },
  {
    id: 4,
    title: 'Freelancer Finance Workshop',
    type: 'Workshop',
    date: 'February 8, 2025',
    time: '10:00 AM – 1:00 PM',
    seatsRemaining: 30,
    price: '₦8,000',
    image: 'https://picsum.photos/seed/groveevt4/800/500',
  },
  {
    id: 5,
    title: 'Friday Social: Wine & Design',
    type: 'Social',
    date: 'February 14, 2025',
    time: '7:00 PM – 10:00 PM',
    seatsRemaining: 40,
    price: 'Free for members',
    image: 'https://picsum.photos/seed/groveevt5/800/500',
  },
  {
    id: 6,
    title: 'Content Marketing Masterclass',
    type: 'Masterclass',
    date: 'February 22, 2025',
    time: '11:00 AM – 3:00 PM',
    seatsRemaining: 15,
    price: '₦12,000',
    image: 'https://picsum.photos/seed/groveevt6/800/500',
  },
];

const pastEvents: Event[] = [
  {
    id: 101,
    title: 'Year-End Tech Mixer',
    type: 'Networking',
    date: 'December 20, 2024',
    time: '6:00 PM – 10:00 PM',
    seatsRemaining: 0,
    price: '₦5,000',
    image: 'https://picsum.photos/seed/groveevtpast1/800/500',
    past: true,
  },
  {
    id: 102,
    title: 'Brand Identity Workshop',
    type: 'Workshop',
    date: 'December 7, 2024',
    time: '10:00 AM – 4:00 PM',
    seatsRemaining: 0,
    price: '₦15,000',
    image: 'https://picsum.photos/seed/groveevtpast2/800/500',
    past: true,
  },
  {
    id: 103,
    title: 'Founders Fireside Chat',
    type: 'Social',
    date: 'November 29, 2024',
    time: '5:00 PM – 8:00 PM',
    seatsRemaining: 0,
    price: 'Free',
    image: 'https://picsum.photos/seed/groveevtpast3/800/500',
    past: true,
  },
];

function EventCard({ event }: { event: Event }) {
  const handleRegister = () => {
    toast.success(
      `You are registered for "${event.title}" on ${event.date}. Check your email for confirmation!`
    );
  };

  return (
    <div className={`cw-event-card ${event.past ? 'cw-event-card--past' : ''}`}>
      <div className="cw-event-card__image">
        <img src={event.image} alt={event.title} />
        <span
          className={`cw-event-card__badge cw-event-card__badge--${
            event.past ? 'completed' : event.type.toLowerCase()
          }`}
        >
          {event.past ? 'Completed' : event.type}
        </span>
      </div>
      <div className="cw-event-card__body">
        <h4 className="cw-event-card__title">{event.title}</h4>
        <p className="cw-event-card__meta">{event.date}</p>
        <p className="cw-event-card__meta">{event.time}</p>
        <div className="cw-event-card__footer">
          <span className="cw-event-card__footer-price">{event.price}</span>
          {!event.past && (
            <span className="cw-event-card__footer-seats">
              {event.seatsRemaining} seats left
            </span>
          )}
        </div>
        {event.past ? (
          <button
            className="cw-event-card__register-btn cw-event-card__register-btn--disabled"
            disabled
          >
            Event Completed
          </button>
        ) : (
          <button className="cw-event-card__register-btn" onClick={handleRegister}>
            Register →
          </button>
        )}
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <div className="cw-events">
      {/* ── HERO ── */}
      <section className="cw-events__hero">
        <div className="cw-container">
          <h1>Events at Grove &amp; Co.</h1>
          <p>
            Workshops, networking nights, and masterclasses curated for the Lagos creative and tech community.
          </p>
        </div>
      </section>

      {/* ── UPCOMING ── */}
      <AnimatedSection className="cw-events__upcoming">
        <div className="cw-container">
          <h2 className="cw-section-title">Upcoming Events</h2>
          <p className="cw-section-subtitle">
            Secure your spot — our events fill up fast.
          </p>
          <div className="cw-events__grid">
            {upcomingEvents.map((evt) => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── PAST ── */}
      <AnimatedSection className="cw-events__past">
        <div className="cw-container">
          <h2 className="cw-section-title">Past Events</h2>
          <p className="cw-section-subtitle">
            A look back at what we have done together.
          </p>
          <div className="cw-events__grid">
            {pastEvents.map((evt) => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
