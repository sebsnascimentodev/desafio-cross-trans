import styles from './BeforeAfter.module.css'

/**
 * Máscaras de segurança para privacidade dos alunos:
 *
 * Cada card aceita:
 *   before   — caminho da foto "antes"    ex: "/images/before-after/aluno1-antes.jpg"
 *   after    — caminho da foto "depois"   ex: "/images/before-after/aluno1-depois.jpg"
 *   name     — nome ou apelido do aluno
 *   duration — tempo de programa
 *   mask     — objeto com a região do rosto a borrar:
 *              { top: '0%', left: '0%', width: '100%', height: '28%' }
 *              (percentuais relativos à foto)
 *
 * Por padrão, a máscara borra os 28% superiores (região da cabeça/rosto).
 * Ajuste os valores para cada foto conforme necessário.
 */

const DEFAULT_MASK = { top: '0%', left: '0%', width: '100%', height: '28%' }

const cards = [
  {
    before: '/images/before-after/aluno1-antes.jpg',
    after:  '/images/before-after/aluno1-depois.jpg',
    name:   'Aluno 01',
    duration: '8 meses de programa',
    mask: DEFAULT_MASK,
  },
  {
    before: '/images/before-after/aluno2-antes.jpg',
    after:  '/images/before-after/aluno2-depois.jpg',
    name:   'Aluno 02',
    duration: '1 ano de programa',
    mask: DEFAULT_MASK,
  },
  {
    before: '/images/before-after/aluno3-antes.jpg',
    after:  '/images/before-after/aluno3-depois.jpg',
    name:   'Aluno 03',
    duration: '6 meses de programa',
    mask: DEFAULT_MASK,
  },
  {
    before: '/images/before-after/aluno4-antes.jpg',
    after:  '/images/before-after/aluno4-depois.jpg',
    name:   'Aluno 04',
    duration: '10 meses de programa',
    mask: DEFAULT_MASK,
  },
]

function MaskedPhoto({ src, alt, mask }) {
  const hasImage = Boolean(src)
  return (
    <div className={styles.photoWrap}>
      {hasImage ? (
        <>
          <img src={src} alt={alt} className={styles.photo} />
          {/* Máscara de privacidade — borra a região do rosto */}
          <div
            className={styles.faceMask}
            style={{
              top:    mask.top,
              left:   mask.left,
              width:  mask.width,
              height: mask.height,
            }}
            aria-hidden="true"
          />
        </>
      ) : (
        <div className={styles.placeholder} aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <span>{alt}</span>
        </div>
      )}
    </div>
  )
}

export default function BeforeAfter() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <span className="label">Antes e depois</span>
          <h2 className="heading reveal">
            A transformação de<br />
            <span className="blue">quem chegou antes.</span>
          </h2>
        </div>
        <p className={`reveal d1 ${styles.sub}`}>
          Arraste para ver a evolução de alunos que seguiram o método.<br />
          <span className={styles.privacyNote}>
            🔒 Rostos ocultados para privacidade dos alunos.
          </span>
        </p>
      </div>

      <div className={styles.scroll} role="list">
        {cards.map((c, i) => (
          <div key={i} className={`reveal d${Math.min(i + 1, 4)} ${styles.card}`} role="listitem">
            <div className={styles.imgs}>
              <MaskedPhoto src={c.before} alt="Antes" mask={c.mask} />
              <MaskedPhoto src={c.after}  alt="Depois" mask={c.mask} />
              <div className={styles.sep} aria-hidden="true" />
              {/* Labels ANTES / DEPOIS na parte inferior das fotos */}
              <div className={styles.labels}>
                <span className={styles.labelBefore}>ANTES</span>
                <span className={styles.labelAfter}>DEPOIS</span>
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.name}>{c.name}</div>
              <div className={styles.duration}>{c.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
