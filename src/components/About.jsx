import styles from './About.module.css'

function SunDecoration() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="100" cy="100" r="32" fill="#8B3D12" />
      <circle cx="100" cy="100" r="45" fill="none" stroke="#A04020" strokeWidth="2" />
      <line x1="100" y1="10"  x2="100" y2="44"  stroke="#8B3D12" strokeWidth="4"   strokeLinecap="round" />
      <line x1="100" y1="156" x2="100" y2="190" stroke="#8B3D12" strokeWidth="4"   strokeLinecap="round" />
      <line x1="10"  y1="100" x2="44"  y2="100" stroke="#8B3D12" strokeWidth="4"   strokeLinecap="round" />
      <line x1="156" y1="100" x2="190" y2="100" stroke="#8B3D12" strokeWidth="4"   strokeLinecap="round" />
      <line x1="36"  y1="36"  x2="62"  y2="62"  stroke="#8B3D12" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="138" y1="138" x2="164" y2="164" stroke="#8B3D12" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="164" y1="36"  x2="138" y2="62"  stroke="#8B3D12" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="62"  y1="138" x2="36"  y2="164" stroke="#8B3D12" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="55"  y1="14"  x2="67"  y2="48"  stroke="#8B3D12" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="145" y1="152" x2="133" y2="186" stroke="#8B3D12" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="14"  y1="55"  x2="48"  y2="67"  stroke="#8B3D12" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="152" y1="133" x2="186" y2="145" stroke="#8B3D12" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="145" y1="14"  x2="133" y2="48"  stroke="#8B3D12" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="55"  y1="152" x2="67"  y2="186" stroke="#8B3D12" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="14"  y1="145" x2="48"  y2="133" stroke="#8B3D12" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="152" y1="55"  x2="186" y2="67"  stroke="#8B3D12" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  )
}

export default function About() {
  return (
    <section className={styles.section} id="sobre" aria-labelledby="about-title">
      <div className={styles.row}>
        <div className={styles.text}>
          <span className="u-section-label">Nossa história</span>
          <h2 className={styles.title} id="about-title">Nascida à beira-mar</h2>
          <p className={styles.body}>
            A Praieira nasceu do amor por Garopaba — suas ondas, seu ritmo, sua leveza. Cada peça é pensada para a mulher que vive o litoral catarinense com autenticidade e estilo.
          </p>
          <p className={styles.body}>
            Mais do que uma loja de moda praia, somos um pedaço da cultura local. Bem-vinda.
          </p>
          <p className={styles.locale}>Garopaba, Santa Catarina</p>
        </div>

        <div className={styles.sun}>
          <SunDecoration />
        </div>
      </div>
    </section>
  )
}
