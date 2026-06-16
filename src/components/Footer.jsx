import styles from './Footer.module.css'
import tecchtiLogo from '../assets/tecchti-logo.jpg'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.brand}>praieira</span>
      <span className={styles.locale}>Garopaba · SC · Brasil</span>
      <nav className={styles.links} aria-label="Links do rodapé">
        <a href="https://instagram.com/praieira.garopaba" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="#contato">Contato</a>
      </nav>
      <p className={styles.copy}>© {new Date().getFullYear()} Praieira · Todos os direitos reservados</p>

      <div className={styles.devCredit}>
        <span className={styles.devLabel}>Desenvolvido por</span>
        
          href="https://tecchti.com.br"
          className={styles.devBtn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TecchTi — Soluções em TI"
        >
          <img
            src={tecchtiLogo}
            alt=""
            className={styles.devLogo}
            onError={e => { e.currentTarget.style.display = 'none' }}
          />
          <span className={styles.devLogoText}>TecchTi</span>
        </a>
      </div>
    </footer>
  )
}
