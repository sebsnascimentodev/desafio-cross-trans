import WaIcon from './WaIcon'
import styles from './WaFloat.module.css'

const WA_LINK = 'https://wa.me/5511999999999?text=Olá!%20Quero%20começar%20hoje%20meu%20treino.'

export default function WaFloat() {
  return (
    <a
      href={WA_LINK}
      className={styles.btn}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <WaIcon size={27} />
    </a>
  )
}
