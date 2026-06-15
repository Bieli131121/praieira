import styles from './Categories.module.css'

const CATEGORIES = [
  { id: 'biquinis',    title: 'Biquínis',    subtitle: 'Modelagens exclusivas', href: '#' },
  { id: 'saidas',      title: 'Saídas',      subtitle: 'Do mar à calçada',      href: '#' },
  { id: 'acessorios',  title: 'Acessórios',  subtitle: 'Detalhes que completam', href: '#' },
]

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="7" x2="11" y2="7" />
      <polyline points="7,3 11,7 7,11" />
    </svg>
  )
}

export default function Categories() {
  return (
    <section className={styles.section} id="colecao" aria-labelledby="cats-title">
      <div className={styles.header}>
        <span className="u-section-label" style={{ color: '#7A3D10' }}>O que você encontra</span>
        <h2 className={styles.title} id="cats-title">Nossa coleção</h2>
      </div>

      <ul className={styles.grid}>
        {CATEGORIES.map(({ id, title, subtitle, href }) => (
          <li key={id} className={styles.card}>
            <div className={styles.bar} />
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardSub}>{subtitle}</p>
            <a href={href} className={styles.arrow} aria-label={`Ver ${title}`}>
              <ArrowIcon />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
