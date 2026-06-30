import WaIcon from './WaIcon'
import heroImg from '../assets/hero.jpg'
import styles from './Hero.module.css'

const WA_LINK = 'https://wa.me/5511999999999?text=Olá!%20Quero%20começar%20hoje%20meu%20treino.'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className={styles.bgImg}
        />
        <div className={styles.overlay} />
      </div>

      {/* Grid de fundo sutil */}
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.content}>
        <span className={`reveal ${styles.badge}`}>
          ● Treino para homens trans e transmasculinos
        </span>

        <h1 className={`display reveal d1 ${styles.title}`}>
          Construa o físico<br />
          <span className="blue">masculino</span> que<br />
          combina com<br />
          <span className="pink">você</span> — com<br />
          segurança e<br />
          acompanha<wbr />mento<br />
          de verdade.
        </h1>

        <p className={`reveal d2 ${styles.sub}`}>
          Treinos pensados para o seu corpo —{' '}
          <strong>em casa ou na academia</strong>.
          Defina o peitoral, reduza gordura e ganhe massa magra, com mentoria de
          quem entende a sua jornada.
        </p>

        <div className={`reveal d3 ${styles.btns}`}>
          <a href={WA_LINK} className="btn btn-cta" target="_blank" rel="noopener noreferrer">
            <WaIcon size={15} />
            Quero começar hoje
          </a>
          <a href="#planos" className="btn btn-ghost">Ver planos</a>
        </div>

        <div className={`reveal d4 ${styles.pills}`}>
          <span className={styles.pill}>Acompanhamento por 1 ano</span>
          <span className={styles.pill}>Mentoria pessoal no WhatsApp</span>
          <span className={styles.pill}>Cardápios do nutricionista</span>
        </div>
      </div>
    </section>
  )
}
