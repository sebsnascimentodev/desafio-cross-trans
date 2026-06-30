import { useEffect, useState } from 'react'
import WaIcon from './WaIcon'
import styles from './Navbar.module.css'

const WA_LINK = 'https://wa.me/5511999999999?text=Olá!%20Quero%20começar%20hoje%20meu%20treino.'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <div className={styles.flag}>
            <span className={styles.fb} />
            <span className={styles.fp} />
            <span className={styles.fw} />
            <span className={styles.fp} />
            <span className={styles.fb} />
          </div>
          <span className={styles.name}>Desafio Cross Trans</span>
        </a>
        <a href={WA_LINK} className={styles.wa} target="_blank" rel="noopener noreferrer">
          <WaIcon size={14} />
          WhatsApp
        </a>
      </div>
    </nav>
  )
}
