import WaIcon from './WaIcon'
import styles from './Plans.module.css'

const WA_ANUAL    = 'https://wa.me/5511999999999?text=Olá!%20Tenho%20interesse%20no%20Plano%20Anual.%20Quero%20começar%20hoje.'
const WA_COMPLETO = 'https://wa.me/5511999999999?text=Olá!%20Tenho%20interesse%20no%20Plano%20Completo.%20Quero%20começar%20hoje.'

const anualFeatures = [
  'Ficha de musculação ilustrada (vídeos)',
  'OU treinos em casa — 33 min/dia',
  'Cardápios exclusivos do nutricionista',
  'Mentoria pessoal no WhatsApp',
  'Acompanhamento por 1 ano completo',
  'Atualizações a cada 3 meses',
]

const completoFeatures = [
  'Tudo do Plano Anual',
  'Ficha completa de academia',
  'Treinos em casa simultaneamente',
  'Cardápios exclusivos do nutricionista',
  'Mentoria pessoal no WhatsApp',
  'Acompanhamento por 1 ano completo',
]

export default function Plans() {
  return (
    <section id="planos">
      <div className="wrap">
        <div className="sh reveal">
          <span className="label">Planos e preços</span>
          <h2 className="heading">
            Escolha o caminho<br />
            <span className="pink">para o seu corpo.</span>
          </h2>
          <p className={styles.sub}>
            Pagamento via PIX ou cartão em até 12x. Plano anual, sem mensalidade recorrente.
          </p>
        </div>
        <div className={styles.grid}>
          {/* Plano Anual */}
          <div className={`reveal d1 ${styles.card}`}>
            <span className={`${styles.badge} ${styles.badgeDef}`}>Plano Anual</span>
            <div className={styles.name}>Anual</div>
            <p className={styles.desc}>Treinos em casa OU na academia — escolha um caminho.</p>
            <div className={styles.price}>R$&nbsp;247</div>
            <div className={styles.note}>PIX à vista ou cartão em até 12x · Plano anual</div>
            <div className={styles.divider} />
            <ul className={styles.features}>
              {anualFeatures.map((f, i) => (
                <li key={i} className={styles.feat}>
                  <span className={styles.check}>✓</span> {f}
                </li>
              ))}
            </ul>
            <a href={WA_ANUAL} className={`btn btn-cta ${styles.cta}`} target="_blank" rel="noopener noreferrer">
              <WaIcon size={14} /> Quero começar hoje
            </a>
            <p className={styles.renew}>Após 1 ano, você decide se quer renovar.</p>
          </div>

          {/* Plano Completo — destaque */}
          <div className={`reveal d2 ${styles.card} ${styles.featured}`}>
            <span className={`${styles.badge} ${styles.badgeFeat}`}>Mais escolhido</span>
            <div className={styles.name}>Completo</div>
            <p className={styles.desc}>Treinos para casa E academia — você nunca fica sem treinar.</p>
            <div className={styles.price}>R$&nbsp;347</div>
            <div className={styles.note}>PIX à vista ou cartão em até 12x · Plano anual</div>
            <div className={styles.divider} />
            <ul className={styles.features}>
              {completoFeatures.map((f, i) => (
                <li key={i} className={styles.feat}>
                  <span className={styles.check}>✓</span> {f}
                </li>
              ))}
            </ul>
            <a href={WA_COMPLETO} className={`btn btn-cta ${styles.cta}`} target="_blank" rel="noopener noreferrer">
              <WaIcon size={14} /> Quero começar hoje
            </a>
            <p className={styles.renew}>Após 1 ano, você decide se quer renovar.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
