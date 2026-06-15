import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio" aria-labelledby="hero-title">
      <div className={styles.text}>
        <span className="u-eyebrow">Garopaba · Santa Catarina</span>
        <h1 className={styles.title} id="hero-title">
          Feito para<br />
          quem vive<br />
          o <em>verão</em>
        </h1>
        <p className={styles.body}>
          Moda praia com alma catarinense. Peças que abraçam o corpo e conversam com o mar, a areia e o sol de Garopaba.
        </p>
        <div className={styles.actions}>
          <a href="#colecao" className="btn-primary">Ver coleção</a>
          <a
            href="https://instagram.com/praieira.garopaba"
            className="btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            @praieira.garopaba
          </a>
        </div>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <div className={styles.card}>
          {/*
            Trocar pelo <img> real do produto:
            <img src="/images/hero-produto.jpg" alt="Coleção Verão 2026" />

            Remover o SVG placeholder abaixo quando tiver a foto.
          */}
          <svg className={styles.placeholder} width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="18" fill="#8B3D12" />
            <circle cx="60" cy="60" r="26" fill="none" stroke="#A04020" strokeWidth="2" />
            <line x1="60" y1="8"   x2="60"  y2="28"  stroke="#8B3D12" strokeWidth="3"   strokeLinecap="round" />
            <line x1="60" y1="92"  x2="60"  y2="112" stroke="#8B3D12" strokeWidth="3"   strokeLinecap="round" />
            <line x1="8"  y1="60"  x2="28"  y2="60"  stroke="#8B3D12" strokeWidth="3"   strokeLinecap="round" />
            <line x1="92" y1="60"  x2="112" y2="60"  stroke="#8B3D12" strokeWidth="3"   strokeLinecap="round" />
            <line x1="21" y1="21"  x2="36"  y2="36"  stroke="#8B3D12" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="84" y1="84"  x2="99"  y2="99"  stroke="#8B3D12" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="99" y1="21"  x2="84"  y2="36"  stroke="#8B3D12" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="36" y1="84"  x2="21"  y2="99"  stroke="#8B3D12" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="32" y1="10"  x2="40"  y2="28"  stroke="#8B3D12" strokeWidth="2"   strokeLinecap="round" />
            <line x1="88" y1="92"  x2="80"  y2="110" stroke="#8B3D12" strokeWidth="2"   strokeLinecap="round" />
            <line x1="10" y1="32"  x2="28"  y2="40"  stroke="#8B3D12" strokeWidth="2"   strokeLinecap="round" />
            <line x1="92" y1="80"  x2="110" y2="88"  stroke="#8B3D12" strokeWidth="2"   strokeLinecap="round" />
            <line x1="88" y1="10"  x2="80"  y2="28"  stroke="#8B3D12" strokeWidth="2"   strokeLinecap="round" />
            <line x1="32" y1="92"  x2="40"  y2="110" stroke="#8B3D12" strokeWidth="2"   strokeLinecap="round" />
            <line x1="10" y1="88"  x2="28"  y2="80"  stroke="#8B3D12" strokeWidth="2"   strokeLinecap="round" />
            <line x1="92" y1="32"  x2="110" y2="40"  stroke="#8B3D12" strokeWidth="2"   strokeLinecap="round" />
          </svg>

          <span className={styles.cardTag}>Verão 2026</span>
          <span className={styles.cardCaption}>Nova coleção</span>
        </div>
      </div>
    </section>
  )
}
