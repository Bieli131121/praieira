import styles from './WaveDivider.module.css'

/**
 * WaveDivider
 * @param {string} colorTop    - cor da seção acima (fill do rect)
 * @param {string} colorBottom - cor da seção abaixo (fill do path)
 */
export default function WaveDivider({ colorTop, colorBottom }) {
  return (
    <svg
      className={styles.wave}
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="1440" height="60" fill={colorTop} />
      <path
        d="M0,28 C200,56 400,8 600,30 C800,52 1000,6 1200,28 C1300,40 1380,16 1440,22 L1440,60 L0,60 Z"
        fill={colorBottom}
      />
    </svg>
  )
}
