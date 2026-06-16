import { Link } from '@tanstack/react-router'

const HOURS = [
  { day: 'Monday', time: '11:00 AM – 3:00 PM' },
  { day: 'Tuesday', time: '9:00 AM – 8:00 PM' },
  { day: 'Wednesday', time: '9:00 AM – 8:00 PM' },
  { day: 'Thursday', time: '9:00 AM – 8:00 PM' },
  { day: 'Friday', time: '9:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 5:00 PM' },
  { day: 'Sunday', time: 'Closed', closed: true },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__grid">
        {/* Brand */}
        <div>
          <div className="footer__brand-name">🎂 Good Cake Bakery</div>
          <p className="footer__tagline">
            Panadería &amp; Pastelería — handcrafted Mexican breads, custom cakes,
            and artisan pastries baked with love in downtown Tigard since 2018.
          </p>
          <div className="footer__social">
            <a href="https://www.facebook.com/goodcakebakeryTigard/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
            <a href="https://www.instagram.com/good.cake.bakery/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">✦</a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div className="footer__col-title">Explore</div>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Our Menu</Link></li>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link href="tel:+15038109369">Order a Cake</Link></li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <div className="footer__col-title">Hours</div>
          {HOURS.map(({ day, time, closed }) => (
            <div key={day} className="footer__hours-row">
              <span>{day}</span>
              <span style={closed ? { color: 'var(--pink-rose)', fontStyle: 'italic' } : {}}>{time}</span>
            </div>
          ))}
          <div style={{ marginTop: '16px', fontSize: '0.8rem', color: 'rgba(251,246,239,0.5)' }}>
            📍 12085 SW Hall Blvd #130, Tigard, OR 97223
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {year} Good Cake Bakery. All rights reserved.</span>
        <span style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <a href="tel:+15038109369" style={{ color: 'rgba(251,246,239,0.45)', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--pink-rose)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(251,246,239,0.45)')}>
            (503) 810-9369
          </a>
          <span>·</span>
          <a href="mailto:goodcakebakery@gmail.com" style={{ color: 'rgba(251,246,239,0.45)', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--pink-rose)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(251,246,239,0.45)')}>
            goodcakebakery@gmail.com
          </a>
        </span>
      </div>
    </footer>
  )
}
