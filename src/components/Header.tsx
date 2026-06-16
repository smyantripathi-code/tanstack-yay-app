import { Link, useRouterState } from '@tanstack/react-router'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const router = useRouterState()
  const path = router.location.pathname

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'Our Story' },
    { to: '/order', label: 'Order' },
  ]

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          🎂 Good <span className="header__logo-accent">Cake</span> Bakery
        </Link>

        <nav className="header__nav">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              {...(path === link.to ? { 'data-active': true } : {})}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <ThemeToggle />
          <Link href="tel:+15038109369" className="btn btn--primary" style={{ fontSize: '0.82rem', padding: '8px 18px' }}>
            Order Now
          </Link>
        </div>
      </div>
    </header>
  )
}
