import { useState, useEffect } from 'react'
import LogoIcon from '../assets/LogoIcon'
import styles from './Navbar.module.css'

const LINKS = [
  { label: 'Coleção', href: '#colecao' },
  { label: 'Sobre',   href: '#sobre'   },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      {/* Logo */}
      <a href="/" className={styles.logo} aria-label="Praieira — Página inicial">
        <LogoIcon width={30} height={30} />
        <span className={styles.brand}>praieira</span>
      </a>

      {/* Links desktop */}
      <nav aria-label="Menu principal">
        <ul className={styles.links}>
          {LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA desktop */}
      <a
        href="https://instagram.com/praieira.garopaba"
        className={styles.cta}
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>

      {/* Hamburger mobile */}
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(v => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Drawer mobile */}
      {menuOpen && (
        <nav className={styles.drawer} aria-label="Menu mobile">
          <ul>
            {LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={() => setMenuOpen(false)}>{label}</a>
              </li>
            ))}
            <li>
              <a
                href="https://instagram.com/praieira.garopaba"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
