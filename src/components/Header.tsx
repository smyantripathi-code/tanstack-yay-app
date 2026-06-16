import { useState, useEffect, useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'Our Story', to: '/about' },
]

export function Header() {
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const menuRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)

      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }

    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      )
      document.removeEventListener(
        'touchstart',
        handleClickOutside
      )
    }
  }, [])

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          🎂 Good{' '}
          <span className="header__logo-accent">
            Cake
          </span>{' '}
          Bakery
        </Link>

        {!isMobile ? (
          <>
            <nav
              style={{
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'center',
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeProps={{
                    style: {
                      color: 'var(--primary)',
                    },
                  }}
                  style={{
  textDecoration: 'none',
  color: '#fff',
  fontWeight: 500,
}}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="header__actions">
              <ThemeToggle />

              <a
                href="tel:+15038109369"
                className="btn btn--primary"
              >
                Order Now
              </a>
            </div>
          </>
        ) : (
          <div
            ref={menuRef}
            style={{ position: 'relative' }}
          >
            <button
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
              aria-label="Toggle menu"
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: '1.8rem',
                cursor: 'pointer',
                color: '#fff',
                padding: 0,
              }}
            >
              ☰
            </button>

            {menuOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '55px',
                  right: 0,
                  width: '240px',
                  background: 'rgba(0, 0, 0, 0.35)',
backdropFilter: 'blur(16px)',
WebkitBackdropFilter: 'blur(16px)',
border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow:
                    '0 12px 40px rgba(0,0,0,0.15)',
                  zIndex: 1000,
                }}
              >
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    style={{
                      display: 'block',
                      padding: '1rem',
                      textDecoration: 'none',
                      color: '#fff',
                      borderBottom:
  '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {item.label}
                  </Link>
                ))}

                <div
                  style={{
                    padding: '1rem',
                    borderBottom:
  '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <ThemeToggle />
                </div>

                <a
                  href="tel:+15038109369"
                  style={{
                    display: 'block',
                    margin: '0.75rem',
                    textAlign: 'center',
                    textDecoration: 'none',
                  }}
                  className="btn btn--primary"
                >
                  Order Now
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
