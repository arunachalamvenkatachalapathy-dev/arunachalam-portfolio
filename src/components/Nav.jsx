import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    return false
  })
  const [menuOpen, setMenuOpen] = useState(false)

  // Apply dark class to <html>
  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  // Scroll detection for nav shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/95 dark:bg-dark-bg/95 backdrop-blur-md border-b border-surface-border dark:border-dark-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-wrapper flex items-center justify-between h-16" aria-label="Main navigation">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 group focus:outline-none"
          aria-label="Arunachalam V — home"
        >
          <div className="w-8 h-8 rounded-lg bg-teal-700 flex items-center justify-center text-white font-bold text-sm group-hover:bg-teal-800 transition-colors">
            AV
          </div>
          <span className="font-semibold text-charcoal dark:text-white hidden sm:block tracking-tight">
            Arunachalam V
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 flex items-center justify-center rounded-lg
              text-charcoal-muted dark:text-gray-400
              hover:text-teal-700 dark:hover:text-teal-400
              hover:bg-surface-card dark:hover:bg-dark-card
              transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg
              text-charcoal-soft dark:text-gray-300
              hover:bg-surface-card dark:hover:bg-dark-card
              transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-surface/98 dark:bg-dark-bg/98 backdrop-blur-md border-b border-surface-border dark:border-dark-border`}
      >
        <ul className="section-wrapper py-4 flex flex-col gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-2.5 px-3 rounded-lg text-sm font-medium text-charcoal-soft dark:text-gray-300
                  hover:text-teal-700 hover:bg-surface-card dark:hover:text-teal-400 dark:hover:bg-dark-card
                  transition-all duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
