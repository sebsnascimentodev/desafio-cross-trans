import styles from './ForWho.module.css'

const benefits = [
  'Peitoral reto, definido e masculinizado',
  'Abdômen reto e forte, sem cintura marcada',
  'Estratégia para reduzir gordura sem perder força',
  'Ganho de massa magra com segurança',
  'Respeito ao seu corpo, ao seu tempo e ao seu processo',
]

export default function ForWho() {
  return (
    <section>
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <div className="sh reveal">
              <span className="label">Para quem é</span>
              <h2 className="heading">
                Pensado para <span className="pink">você</span>,<br />
                não adaptado de<br />
                outro corpo.
              </h2>
            </div>
            <p className={`reveal d1 ${styles.body}`}>
              O método foi construído para homens trans e pessoas transmasculinas
              que querem trabalhar o peitoral e o abdômen de forma que realmente
              masculinize. Aqui ninguém precisa explicar do começo. Você chega,
              é entendido e começa a treinar.
            </p>
          </div>
          <ul className={styles.list}>
            {benefits.map((text, i) => (
              <li key={i} className={`reveal d${i + 1} ${styles.item}`}>
                <span className={styles.check}>✓</span>
                <span className={styles.text}>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
