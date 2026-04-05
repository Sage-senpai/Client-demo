import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { buttonHover } from '../../../styles/_animations';

const coralKitchenMenu = [
  { name: 'Grilled Atlantic Lobster', desc: 'With yam fondant and suya-spiced butter', price: '₦28,000' },
  { name: 'Ofada Rice Risotto', desc: 'Wild mushroom, Locust bean reduction, parmesan crisp', price: '₦18,500' },
  { name: 'Pepper Soup Bouillabaisse', desc: 'Catch of the day, tiger prawns, smoked catfish', price: '₦22,000' },
  { name: 'Coconut Panna Cotta', desc: 'Palm wine caramel, dehydrated pineapple', price: '₦9,500' },
];

const sunsetBarMenu = [
  { name: 'Coral Sunset Cocktail', desc: 'Hibiscus-infused gin, lime, honey, sparkling water', price: '₦7,500' },
  { name: 'Grilled Prawn Skewers', desc: 'Chilli-lime glaze, plantain crisps', price: '₦14,000' },
  { name: 'Smoky Jollof Arancini', desc: 'Crispy jollof rice balls, tomato aioli', price: '₦8,500' },
  { name: 'Fresh Oysters', desc: 'Half dozen, shallot vinaigrette, lemon', price: '₦19,000' },
];

export default function Dining() {
  return (
    <div className="resort-dining-page">
      {/* ── PAGE HERO ── */}
      <div className="resort-page-hero">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
          alt="Fine dining"
          className="resort-page-hero__bg"
        />
        <div className="resort-page-hero__overlay" />
        <div className="resort-page-hero__content">
          <h1 className="resort-page-hero__title">Dining</h1>
          <p className="resort-page-hero__subtitle">
            A culinary journey where Nigerian heritage meets global technique.
          </p>
        </div>
      </div>

      {/* ── CORAL KITCHEN ── */}
      <section className="resort-restaurant-section">
        <div className="resort-container">
          <AnimatedSection>
            <div className="resort-restaurant">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
                alt="Coral Kitchen"
                className="resort-restaurant__image"
              />
              <div className="resort-restaurant__content">
                <div className="resort-restaurant__cuisine">Fine Dining &middot; Nigerian Contemporary</div>
                <h3>Coral Kitchen</h3>
                <p className="resort-restaurant__desc">
                  Our flagship restaurant reinterprets the rich culinary traditions of
                  Nigeria&rsquo;s coastline through a modern lens. Chef Emeka Okonkwo
                  and his team craft seasonal tasting menus that honour local ingredients
                  while pushing creative boundaries. Each course tells a story of the
                  land and sea that surround Coral Terrace.
                </p>
                <p className="resort-restaurant__hours">
                  <strong>Hours:</strong> Breakfast 7:00 &ndash; 10:30 AM &middot; Dinner 6:30 &ndash; 10:30 PM
                </p>
                <p className="resort-restaurant__hours">
                  <strong>Dress Code:</strong> Smart casual
                </p>

                <div className="resort-menu-highlights">
                  <h4>Menu Highlights</h4>
                  {coralKitchenMenu.map((item) => (
                    <div key={item.name} className="resort-menu-item">
                      <div>
                        <div className="resort-menu-item__name">{item.name}</div>
                        <div className="resort-menu-item__desc">{item.desc}</div>
                      </div>
                      <div className="resort-menu-item__price">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SUNSET BAR ── */}
      <section className="resort-restaurant-section">
        <div className="resort-container">
          <AnimatedSection>
            <div className="resort-restaurant resort-restaurant--reverse">
              <img
                src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80"
                alt="The Sunset Bar"
                className="resort-restaurant__image"
              />
              <div className="resort-restaurant__content">
                <div className="resort-restaurant__cuisine">Bar &amp; Lounge &middot; Coastal Casual</div>
                <h3>The Sunset Bar</h3>
                <p className="resort-restaurant__desc">
                  Perched at the edge of the infinity pool with panoramic ocean views,
                  The Sunset Bar is the resort&rsquo;s social heart. Sip hand-crafted
                  cocktails infused with local botanicals while watching the sun melt
                  into the Atlantic. The sharing-style menu features fresh seafood and
                  bold Nigerian bar snacks perfect for languid afternoons.
                </p>
                <p className="resort-restaurant__hours">
                  <strong>Hours:</strong> 11:00 AM &ndash; midnight, daily
                </p>
                <p className="resort-restaurant__hours">
                  <strong>Dress Code:</strong> Resort casual
                </p>

                <div className="resort-menu-highlights">
                  <h4>Bar Favourites</h4>
                  {sunsetBarMenu.map((item) => (
                    <div key={item.name} className="resort-menu-item">
                      <div>
                        <div className="resort-menu-item__name">{item.name}</div>
                        <div className="resort-menu-item__desc">{item.desc}</div>
                      </div>
                      <div className="resort-menu-item__price">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── RESERVATION CTA ── */}
      <AnimatedSection>
        <div className="resort-reservation-cta">
          <div className="resort-container">
            <h3>Reserve Your Table</h3>
            <p>
              For reservations or special dietary requirements, please contact our
              dining concierge or book directly through the resort.
            </p>
            <motion.div {...buttonHover}>
              <Link to="/resort/book" className="resort-btn resort-btn--secondary">
                Make a Reservation
              </Link>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
