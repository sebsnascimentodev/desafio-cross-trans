import { useState } from 'react'
import styles from './FAQ.module.css'

const items = [
  { q: 'Preciso de equipamentos para treinar?', a: 'Não. Os treinos em casa foram desenvolvidos com zero equipamentos — apenas o peso do próprio corpo. São 33 minutos por dia e funcionam em qualquer espaço.' },
  { q: 'Funciona para quem nunca treinou?', a: 'Sim. O programa é adaptado ao seu nível atual e evolui junto com você. Atualizado a cada 3 meses, acompanha seu progresso do início ao avançado.' },
  { q: 'Como recebo os treinos?', a: 'Tudo é entregue na plataforma exclusiva de alunos. Para treinos em casa, você recebe o planejamento toda semana em vídeo. Para academia, recebe a ficha ilustrada com todos os exercícios demonstrados.' },
  { q: 'Tem acompanhamento de verdade?', a: 'Sim. A mentoria é pessoal e acontece diretamente no WhatsApp. Você não vai ficar sozinho — a equipe acompanha você durante o ano completo do programa.' },
  { q: 'Quais as formas de pagamento?', a: 'PIX à vista ou cartão de crédito em até 12 parcelas. O plano é anual — após 1 ano você decide se quer renovar, sem cobrança automática.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section>
      <div className="wrap">
        <div className="sh reveal">
          <span className="label">Perguntas frequentes</span>
          <h2 className="heading">
            Tem dúvida?<br />
            <span className="pink">A gente responde.</span>
          </h2>
        </div>
        <div className={styles.list}>
          {items.map((item, i) => (
            <div key={i} className={`reveal d${Math.min(i + 1, 5)} ${styles.item} ${open === i ? styles.open : ''}`}>
              <button
                className={styles.q}
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                {item.q}
                <span className={styles.icon} aria-hidden="true">+</span>
              </button>
              <div
                className={styles.answer}
                style={{ maxHeight: open === i ? '200px' : '0' }}
              >
                <div className={styles.answerInner}>{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
