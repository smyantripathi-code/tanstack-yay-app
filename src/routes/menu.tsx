import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/menu')({
  component: MenuPage,
})

const MENU_CATEGORIES = [
  {
    id: 'custom-cakes',
    title: 'Custom Cakes',
    icon: '🎂',
    desc: 'Every cake made to your vision. Call or email to start your order.',
    items: [
      { name: 'Tres Leches Cake', desc: 'Soaked in three milks — whole, evaporated, and condensed. Layered with fresh fruit filling or whipped frosting. Our #1 best seller.', price: 'From $40', badge: 'Best Seller' },
      { name: 'Dulce de Leche Cake', desc: 'Rich caramel milk cake with whipped frosting — perfect for birthdays or any special occasion.', price: 'From $40', badge: '' },
      { name: 'Chocolate Cake', desc: 'Light, fluffy, and heavenly. Our chocolate layers are moist and deeply flavored.', price: 'From $40', badge: '' },
      { name: 'White Cake', desc: 'Classic white cake with wedding cake frosting. Often filled with pineapple, strawberry, or other fillings.', price: 'From $40', badge: '' },
      { name: 'Gender Reveal Cake', desc: 'Custom colored inside with your choice of flavors and frosting. A moment you will never forget.', price: 'Custom quote', badge: 'Popular' },
      { name: 'Wedding & Quinceañera Cakes', desc: 'Multi-tiered, elaborate custom designs. Jay brings the artistry and precision of a cake baker with 13+ years of experience.', price: 'Custom quote', badge: 'Made to Order' },
    ],
  },
  {
    id: 'pastries',
    title: 'Pastries & Specialty Items',
    icon: '🥐',
    desc: 'Fresh in the case daily — come early for the best selection.',
    items: [
      { name: 'Eclairs', desc: 'Our top-selling pastry. Delicate choux pastry filled to order — a Good Cake signature.', price: '$3–$5', badge: 'Top Seller' },
      { name: 'Churro Cheesecake', desc: 'Creamy cheesecake on a buttery croissant base, topped with cinnamon sugar. Customers describe it as "absolute magic."', price: '$5–$7', badge: 'Fan Favorite' },
      { name: 'Almond Croissant', desc: 'Praised for a uniquely rich flavor — flaky, buttery, and nutty. A must-try on your first visit.', price: '$4–$6', badge: '' },
      { name: 'Brownies', desc: 'Dense, fudgy, and made fresh. Available daily.', price: '$3–$4', badge: '' },
      { name: 'Cupcakes', desc: 'Decorated and available in a range of flavors. Great for parties or a personal treat.', price: '$3–$5', badge: '' },
      { name: 'Cake Pops', desc: 'Fun, handheld, and great for events and parties. Custom decoration available.', price: '$2–$3', badge: '' },
      { name: 'Muffins', desc: 'Baked fresh, available in seasonal flavors.', price: '$3', badge: '' },
      { name: 'Trail Cheesecake', desc: 'A rotating specialty cheesecake — ask in-store for today\'s flavor.', price: '$5–$7', badge: 'Rotating' },
    ],
  },
  {
    id: 'pan-dulce',
    title: 'Pan Dulce & Mexican Breads',
    icon: '🍞',
    desc: 'Authentic traditional Mexican breads baked by third-generation baker Edgar Contreras.',
    items: [
      { name: 'Conchas', desc: 'Our classic pink-sugar sprinkled concha — airy, lightly sweet, and a perfect snack anytime.', price: '$2–$3', badge: 'Daily Fresh' },
      { name: 'Pan de Muerto', desc: 'Traditional Day of the Dead sweet bread, available seasonally in October–November.', price: '$4–$6', badge: 'Seasonal' },
      { name: 'Rosca de Reyes', desc: 'Traditional wreath-shaped Kings\' Bread for Three Kings Day in January. We\'ve broken our own order record two years in a row — 200+ in one season!', price: 'From $18', badge: 'January Only' },
      { name: 'Mexican Shortbread Cookies', desc: 'Giant, buttery, and crumbly shortbread-based cookies — a crowd favorite from Edgar\'s case.', price: '$2–$3', badge: '' },
      { name: 'Salvadorian Sweet Breads', desc: 'Slightly denser sweet breads with a rich, buttery finish — a nod to the Central American baking tradition.', price: '$2–$3', badge: '' },
    ],
  },
  {
    id: 'seasonal',
    title: 'Seasonal & Holiday',
    icon: '🎃',
    desc: 'We celebrate every season. Ask us what\'s coming up next.',
    items: [
      { name: 'Sugar Skulls', desc: 'Decorative and edible sugar skulls for Día de Muertos, made with care and vibrant color.', price: '$5–$12', badge: 'Fall' },
      { name: 'Decorated Sugar Cookies', desc: 'Available for Halloween, Christmas, Valentine\'s Day, and more — custom decorated to order.', price: '$3–$5', badge: 'Holidays' },
      { name: 'Flan', desc: 'Classic Mexican caramel flan — creamy and silky.', price: '$4–$6', badge: '' },
      { name: 'Seasonal Cheesecake Slices', desc: 'Rotating flavors based on the season. Ask in-store for today\'s option.', price: '$5–$7', badge: 'Rotating' },
    ],
  },
]

function MenuPage() {
  return (
    <>
      {/* Page Hero */}
      <div style={{
        background: 'var(--brown-deep)',
        padding: '64px 24px 56px',
        textAlign: 'center',
      }}>
        <div className="container">
          <div className="eyebrow">Our Menu</div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            color: 'var(--ivory)',
            marginBottom: '16px',
          }}>
            Handcrafted every day
          </h1>
          <p style={{ color: 'rgba(251,246,239,0.7)', maxWidth: '520px', margin: '0 auto 28px', fontSize: '1.05rem' }}>
            Traditional Mexican breads, custom celebration cakes, and artisan pastries — all made in-house with quality ingredients and decades of experience.
          </p>
          <p style={{
            fontSize: '0.82rem',
            color: 'rgba(251,246,239,0.45)',
            fontStyle: 'italic',
          }}>
            * Prices are estimates. Please call or visit for current pricing and availability. Custom cakes require advance notice.
          </p>
        </div>
      </div>

      {/* Jump Links */}
      <div style={{ background: 'var(--ivory-dark)', borderBottom: '1px solid var(--pink-light)', padding: '16px 24px' }}>
        <div className="container" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {MENU_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.84rem',
                fontWeight: '500',
                color: 'var(--text-mid)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                background: 'var(--white)',
                border: '1px solid var(--pink-light)',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--pink-rose)'
                e.currentTarget.style.color = 'white'
                e.currentTarget.style.borderColor = 'var(--pink-rose)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--white)'
                e.currentTarget.style.color = 'var(--text-mid)'
                e.currentTarget.style.borderColor = 'var(--pink-light)'
              }}
            >
              {cat.icon} {cat.title}
            </a>
          ))}
        </div>
      </div>

      {/* Menu Sections */}
      {MENU_CATEGORIES.map((cat, ci) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`section${ci % 2 !== 0 ? ' section--alt' : ''}`}
        >
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '36px' }}>
              <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>{cat.icon}</div>
              <div>
                <div className="eyebrow">{cat.title}</div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginBottom: '6px' }}>{cat.title}</h2>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{cat.desc}</p>
              </div>
            </div>

            <div className="menu-grid">
              {cat.items.map((item) => (
                <div key={item.name} className="menu-card">
                  <div className="menu-card__name">{item.name}</div>
                  <div className="menu-card__desc">{item.desc}</div>
                  <div className="menu-card__footer">
                    <span className="menu-card__price">{item.price}</span>
                    {item.badge && <span className="menu-card__badge">{item.badge}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Order CTA */}
      <div className="cta-band">
        <div className="eyebrow" style={{ color: 'var(--gold)' }}>Custom Orders</div>
        <h2 style={{ color: 'var(--ivory)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', margin: '12px 0 16px' }}>
          Don't see what you're looking for?
        </h2>
        <p style={{ color: 'rgba(251,246,239,0.7)', maxWidth: '460px', margin: '0 auto 28px', fontSize: '1rem' }}>
          We love custom requests. Call us or fill out our order form and we'll work with you to create exactly what you need.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/order" className="btn btn--gold">Request a Custom Order</Link>
          <a href="tel:+15038109369" className="btn btn--secondary">(503) 810-9369</a>
        </div>
      </div>
    </>
  )
}
