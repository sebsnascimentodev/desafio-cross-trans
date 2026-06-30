import styles from './HowItWorks.module.css'

const steps = [
  { num: '01', title: 'Escolha seu plano', desc: 'Anual ou Completo. Você decide o caminho que combina com sua rotina.' },
  { num: '02', title: 'Receba na plataforma', desc: 'Ficha ilustrada, treinos em vídeo e cardápios direto no seu celular.' },
  { num: '03', title: 'Comece hoje', desc: 'Mentoria no WhatsApp para você nunca treinar sozinho.' },
]

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className="sh reveal">
          <span className="label">Como funciona</span>
          <h2 className="heading">
            Três passos para<br />
            <span className="blue">começar agora.</span>
          </h2>
        </div>
        <div className={styles.grid}>
          {steps.map((s, i) => (
            <div key={i} className={`reveal d${i + 1} ${styles.step}`}>
              <div className={styles.bg} aria-hidden="true">{s.num}</div>
              <span className={styles.num}>Passo {s.num}</span>
              <div className={styles.title}>{s.title}</div>
              <p className={styles.desc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
