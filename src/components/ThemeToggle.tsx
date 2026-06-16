import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.getAttribute('data-theme') === 'dark'
    }
    return false
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'dark')
  }, [dark])

  return (
    <button
      className="theme-toggle"
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'dark mode' : 'Dark mode'}
    >
      {dark ? '☀️' : '🌙'}
    </button>
  )
}
