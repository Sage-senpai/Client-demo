import { useState } from 'react';
import toast from 'react-hot-toast';
import AnimatedSection from '../../../components/shared/AnimatedSection';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  badge?: 'V' | 'VG' | 'GF';
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const menu: MenuCategory[] = [
  {
    category: 'Breakfast',
    items: [
      {
        name: 'Avocado Toast with Suya Spice',
        description: 'Sourdough, smashed avocado, cherry tomatoes, suya seasoning, poached egg',
        price: '₦3,200',
        badge: 'V',
      },
      {
        name: 'Grove Granola Bowl',
        description: 'House-made granola, Greek yoghurt, seasonal fruits, honey drizzle, chia seeds',
        price: '₦2,800',
        badge: 'V',
      },
      {
        name: 'Full Nigerian Breakfast',
        description: 'Scrambled eggs, grilled plantain, baked beans, sausage, toast, fresh juice',
        price: '₦4,500',
      },
      {
        name: 'Açaí Bowl',
        description: 'Blended açaí, banana, granola, coconut flakes, peanut butter, honey',
        price: '₦3,600',
        badge: 'VG',
      },
      {
        name: 'Egg & Cheese Croissant',
        description: 'Flaky butter croissant, scrambled eggs, aged cheddar, rocket leaves',
        price: '₦2,600',
        badge: 'V',
      },
    ],
  },
  {
    category: 'Coffee & Tea',
    items: [
      {
        name: 'Flat White',
        description: 'Double ristretto with velvety steamed milk — our most popular order',
        price: '₦1,800',
      },
      {
        name: 'Cold Brew on Tap',
        description: '18-hour steeped single-origin, served over ice from our nitro tap',
        price: '₦2,000',
      },
      {
        name: 'Matcha Latte',
        description: 'Ceremonial grade Japanese matcha, oat milk, light sweetener',
        price: '₦2,200',
        badge: 'VG',
      },
      {
        name: 'Chai Latte',
        description: 'Spiced black tea with steamed milk, cinnamon, and cardamom',
        price: '₦1,600',
        badge: 'V',
      },
      {
        name: 'Espresso',
        description: 'Single origin Ethiopian Yirgacheffe, rich and fruity with chocolate notes',
        price: '₦1,200',
      },
      {
        name: 'Hibiscus Iced Tea',
        description: 'Zobo-inspired hibiscus brew, lightly sweetened, served over ice with ginger',
        price: '₦1,400',
        badge: 'VG',
      },
    ],
  },
  {
    category: 'Smoothies & Juices',
    items: [
      {
        name: 'Tropical Green Smoothie',
        description: 'Spinach, mango, pineapple, banana, coconut water',
        price: '₦2,500',
        badge: 'VG',
      },
      {
        name: 'Berry Blast',
        description: 'Mixed berries, banana, almond milk, flaxseed, honey',
        price: '₦2,600',
        badge: 'VG',
      },
      {
        name: 'Fresh Orange Juice',
        description: 'Hand-pressed Valencia oranges, no sugar added',
        price: '₦1,800',
        badge: 'VG',
      },
      {
        name: 'Ginger Shot',
        description: 'Fresh ginger, lemon, turmeric, cayenne — a daily wellness boost',
        price: '₦800',
        badge: 'VG',
      },
    ],
  },
  {
    category: 'Light Bites',
    items: [
      {
        name: 'Grilled Chicken Wrap',
        description: 'Herb-marinated chicken, mixed greens, avocado, chipotle mayo, tortilla',
        price: '₦3,800',
      },
      {
        name: 'Margherita Flatbread',
        description: 'San Marzano tomato, fresh mozzarella, basil, extra virgin olive oil',
        price: '₦3,200',
        badge: 'V',
      },
      {
        name: 'Tuna Poke Bowl',
        description: 'Sushi-grade tuna, edamame, avocado, pickled ginger, soy glaze, rice',
        price: '₦4,200',
        badge: 'GF',
      },
      {
        name: 'Sweet Potato Fries',
        description: 'Crispy baked sweet potato fries with rosemary salt and sriracha mayo',
        price: '₦1,800',
        badge: 'VG',
      },
      {
        name: 'Caesar Salad',
        description: 'Romaine, parmesan, croutons, house-made dressing, grilled chicken optional',
        price: '₦3,000',
        badge: 'GF',
      },
    ],
  },
  {
    category: 'Afternoon Specials',
    items: [
      {
        name: 'Banana Bread Slice',
        description: 'House-baked, moist banana bread with walnuts, served warm with butter',
        price: '₦1,200',
        badge: 'V',
      },
      {
        name: 'Chocolate Brownie',
        description: 'Rich, fudgy dark chocolate brownie with sea salt flakes',
        price: '₦1,500',
        badge: 'V',
      },
      {
        name: 'Affogato',
        description: 'Vanilla gelato drowned in a fresh double shot of espresso',
        price: '₦2,000',
        badge: 'V',
      },
      {
        name: 'Cheese & Crackers Board',
        description: 'Selection of artisan cheeses, crackers, grapes, honey, and walnuts',
        price: '₦3,500',
        badge: 'V',
      },
    ],
  },
];

const allItems = menu.flatMap((cat) => cat.items.map((item) => item.name));

export default function Cafe() {
  const [orderItem, setOrderItem] = useState('');
  const [orderName, setOrderName] = useState('');
  const [orderTime, setOrderTime] = useState('');

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderItem || !orderName || !orderTime) return;
    toast.success(
      `Order placed! ${orderItem} will be ready for pickup at ${orderTime}. See you soon, ${orderName}!`
    );
    setOrderItem('');
    setOrderName('');
    setOrderTime('');
  };

  const badgeClass = (badge: string) => {
    switch (badge) {
      case 'V':
        return 'cw-menu-item__badge--v';
      case 'VG':
        return 'cw-menu-item__badge--vg';
      case 'GF':
        return 'cw-menu-item__badge--gf';
      default:
        return '';
    }
  };

  return (
    <div className="cw-cafe">
      {/* ── HERO ── */}
      <section className="cw-cafe__hero">
        <img
          className="cw-cafe__hero-bg"
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
          alt="The Grove Café"
        />
        <div className="cw-cafe__hero-overlay" />
        <div className="cw-cafe__hero-content">
          <h1>The Grove Café</h1>
          <p>Artisan coffee &amp; wholesome food, crafted daily</p>
        </div>
      </section>

      {/* ── MENU ── */}
      <AnimatedSection className="cw-menu-section">
        <div className="cw-container">
          {menu.map((cat) => (
            <div key={cat.category} className="cw-menu-section__category">
              <h3>{cat.category}</h3>
              <div className="cw-menu-section__grid">
                {cat.items.map((item) => (
                  <div key={item.name} className="cw-menu-item">
                    <div className="cw-menu-item__info">
                      <h4>
                        {item.name}
                        {item.badge && (
                          <span
                            className={`cw-menu-item__badge ${badgeClass(item.badge)}`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </h4>
                      <p>{item.description}</p>
                    </div>
                    <span className="cw-menu-item__price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ── ORDER FORM ── */}
      <AnimatedSection className="cw-order-form">
        <div className="cw-container">
          <div className="cw-order-form__inner">
            <h2>Order for Pickup</h2>
            <p>Skip the queue. Place your order and we will have it ready when you arrive.</p>
            <form onSubmit={handleOrder}>
              <div className="cw-order-form__field">
                <label>Select Item</label>
                <select value={orderItem} onChange={(e) => setOrderItem(e.target.value)}>
                  <option value="">Choose an item...</option>
                  {allItems.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="cw-order-form__field">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={orderName}
                  onChange={(e) => setOrderName(e.target.value)}
                />
              </div>
              <div className="cw-order-form__field">
                <label>Pickup Time</label>
                <select value={orderTime} onChange={(e) => setOrderTime(e.target.value)}>
                  <option value="">Select a time...</option>
                  <option value="7:30 AM">7:30 AM</option>
                  <option value="8:00 AM">8:00 AM</option>
                  <option value="8:30 AM">8:30 AM</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="9:30 AM">9:30 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="10:30 AM">10:30 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="12:30 PM">12:30 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="1:30 PM">1:30 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                </select>
              </div>
              <button type="submit" className="cw-order-form__submit">
                Place Order →
              </button>
            </form>
          </div>
        </div>
      </AnimatedSection>

      {/* ── MEET OUR BARISTA ── */}
      <AnimatedSection className="cw-barista">
        <div className="cw-container">
          <div className="cw-barista__content">
            <div className="cw-barista__image">
              <img
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80"
                alt="Coffee craftsmanship"
              />
            </div>
            <div className="cw-barista__text">
              <h2>Meet Our Head Barista</h2>
              <p>
                Chidera Nwosu has been perfecting his craft for over eight years, training in
                Melbourne, Addis Ababa, and London before bringing his expertise home to Lagos.
                His philosophy is simple: great coffee starts with great relationships — with
                farmers, with beans, and with the people who drink it.
              </p>
              <p>
                Every cup at The Grove Café is pulled with intention. Chidera personally selects
                our seasonal single-origin beans, calibrates our La Marzocca each morning, and
                trains every member of the team to his exacting standards.
              </p>
              <p>
                "Coffee is not just a drink — it is a conversation starter. And in a coworking
                space, those conversations become collaborations, and collaborations become
                companies."
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── COFFEE ORIGIN STORY ── */}
      <AnimatedSection className="cw-origin">
        <div className="cw-container">
          <div className="cw-origin__content">
            <h2>Our Coffee Journey</h2>
            <p>
              We source our beans directly from smallholder farms across Ethiopia, Rwanda, and
              right here in Nigeria — from the highlands of Mambilla Plateau in Taraba State. Every
              batch is traceable, ethically traded, and roasted in small batches at our partner
              roastery in Lekki.
            </p>
            <p>
              Our current seasonal blend, "Forest Floor", combines washed Ethiopian Yirgacheffe
              (bright, citrusy) with natural-process Rwandan beans (deep, berry-forward) for a cup
              that is as complex as the community that drinks it.
            </p>
            <p>
              We believe great coffee should not just taste good — it should do good. A portion of
              every cup sold goes to our "Grow the Grove" initiative, supporting reforestation
              projects across Lagos State.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
