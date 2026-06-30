import WaIcon from './WaIcon'
import styles from './CTAFinal.module.css'

const WA_LINK = 'https://wa.me/5511999999999?text=Olá!%20Quero%20começar%20hoje%20meu%20treino.'

export default function CTAFinal() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={`reveal ${styles.inner}`}>
          <span className="label">Última chamada</span>
          <h2 className="heading">
            Bora entrar para a nossa{' '}
            <span className="blue">família</span> e começar hoje mesmo a sua jornada?
          </h2>
          <div className={`reveal d1 ${styles.btns}`}>
            <a href={WA_LINK} className="btn btn-cta" target="_blank" rel="noopener noreferrer">
              <WaIcon size={15} /> Quero começar hoje
            </a>
            <a href="#planos" className="btn btn-ghost">Ver planos</a>
          </div>
        </div>
      </div>
    </section>
  )
}
