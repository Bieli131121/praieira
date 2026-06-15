import styles from './CTASection.module.css'

function InstagramIcon() {
  return (
    <svg className="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function CTASection() {
  return (
    <section className={styles.section} id="contato" aria-labelledby="cta-title">
      <h2 className={styles.title} id="cta-title">Venha nos conhecer</h2>
      <p className={styles.body}>
        Siga no Instagram ou visite a loja em Garopaba — estamos te esperando.
      </p>
      <div className={styles.actions}>
        <a
          href="https://instagram.com/praieira.garopaba"
          className="btn-bronze"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver Instagram da Praieira"
        >
          <InstagramIcon />
          @praieira.garopaba
        </a>
      </div>
    </section>
  )
}
