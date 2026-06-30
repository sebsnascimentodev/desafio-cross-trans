import styles from './Testimonials.module.css'

const items = [
  { text: '"Encontrei aqui o que nenhuma academia tinha: alguém que entende meu corpo, meu processo e respeita minha jornada."', since: 'Aluno desde 2024' },
  { text: '"Eu nunca tinha treinado na vida. Comecei pelos treinos em casa, 33 minutos por dia, sem aparelho. Hoje vejo resultado real."', since: 'Aluno desde 2023' },
  { text: '"A mentoria no WhatsApp mudou tudo. Quando bateu desânimo, tinha alguém ali. Não me senti sozinho em nenhum momento."', since: 'Aluno desde 2024' },
]

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className="sh reveal">
          <span className="label">Depoimentos</span>
          <h2 className="heading">
            Veja se esse é o <span className="blue">resultado</span><br />
            que você também quer alcançar.
          </h2>
        </div>
        <div className={styles.grid}>
          {items.map((t, i) => (
            <div key={i} className={`reveal d${i + 1} ${styles.card}`}>
              <span className={styles.quote} aria-hidden="true">"</span>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.author}>{t.since}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
