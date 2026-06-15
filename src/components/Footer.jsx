import styles from './Footer.module.css'

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
    </footer>
  )
}
