import { useEffect, useRef } from 'react'
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
  {
    before: '/images/before-after/aluno5-antes.jpg',
    after:  '/images/before-after/aluno5-depois.jpg',
    name:   'Aluno 05',
    duration: '9 meses de programa',
    mask: DEFAULT_MASK,
  },
  {
    before: '/images/before-after/aluno6-antes.jpg',
    after:  '/images/before-after/aluno6-depois.jpg',
    name:   'Aluno 06',
    duration: '7 meses de programa',
    mask: DEFAULT_MASK,
  },
  {
    before: '/images/before-after/aluno7-antes.jpg',
    after:  '/images/before-after/aluno7-depois.jpg',
    name:   'Aluno 07',
    duration: '1 ano e 2 meses de programa',
    mask: DEFAULT_MASK,
  },
  {
    before: '/images/before-after/aluno8-antes.jpg',
    after:  '/images/before-after/aluno8-depois.jpg',
    name:   'Aluno 08',
    duration: '5 meses de programa',
    mask: DEFAULT_MASK,
  },
]

// Duas cópias da lista lado a lado para permitir o loop infinito do carrossel.
const trackCards = [...cards, ...cards]

// Velocidade do movimento automático, em pixels por segundo.
const AUTO_SPEED = 36
// Arraste (mouse/caneta) abaixo desse deslocamento ainda conta como clique, não drag.
const DRAG_THRESHOLD = 4

function MaskedPhoto({ src, alt, mask }) {
  const hasImage = Boolean(src)
  return (
    <div className={styles.photoWrap}>
      {hasImage ? (
        <>
          <img src={src} alt={alt} className={styles.photo} draggable="false" />
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
  const trackRef = useRef(null)
  const firstCardRef = useRef(null)
  const secondGroupFirstCardRef = useRef(null)
  const loopRef = useRef({ leadingGap: 0, groupWidth: 0 })
  const pausedRef = useRef(false)
  const dragRef = useRef({ active: false, moved: false, startX: 0, startScroll: 0 })

  // Mede a largura de um "grupo" de cards (via posição do primeiro card de
  // cada cópia) para saber quando resetar o scroll e simular o loop infinito.
  useEffect(() => {
    const measure = () => {
      const first = firstCardRef.current
      const secondGroupFirst = secondGroupFirstCardRef.current
      if (!first || !secondGroupFirst) return
      loopRef.current = {
        leadingGap: first.offsetLeft,
        groupWidth: secondGroupFirst.offsetLeft - first.offsetLeft,
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Movimento automático lateral, pausado durante hover/arraste.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    let raf
    let lastTs = null

    const step = (ts) => {
      if (lastTs == null) lastTs = ts
      const dt = ts - lastTs
      lastTs = ts

      const { leadingGap, groupWidth } = loopRef.current
      if (!pausedRef.current && groupWidth > 0) {
        track.scrollLeft += (AUTO_SPEED * dt) / 1000
        if (track.scrollLeft >= leadingGap + groupWidth) {
          track.scrollLeft -= groupWidth
        }
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  const handlePointerDown = (e) => {
    if (e.pointerType === 'touch') return // toque já arrasta nativamente
    const track = trackRef.current
    dragRef.current = { active: true, moved: false, startX: e.clientX, startScroll: track.scrollLeft }
    pausedRef.current = true
    track.setPointerCapture(e.pointerId)
    track.classList.add(styles.dragging)
  }

  const handlePointerMove = (e) => {
    const drag = dragRef.current
    if (!drag.active) return
    const track = trackRef.current
    const dx = e.clientX - drag.startX
    if (Math.abs(dx) > DRAG_THRESHOLD) drag.moved = true
    track.scrollLeft = drag.startScroll - dx

    const { leadingGap, groupWidth } = loopRef.current
    if (groupWidth > 0) {
      if (track.scrollLeft >= leadingGap + groupWidth) {
        track.scrollLeft -= groupWidth
        drag.startScroll -= groupWidth
      } else if (track.scrollLeft < leadingGap) {
        track.scrollLeft += groupWidth
        drag.startScroll += groupWidth
      }
    }
  }

  const endDrag = () => {
    if (!dragRef.current.active) return
    dragRef.current.active = false
    trackRef.current?.classList.remove(styles.dragging)
    pausedRef.current = false
  }

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

      <div
        className={styles.scroll}
        role="list"
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        onMouseEnter={() => { pausedRef.current = true }}
        onMouseLeave={() => { if (!dragRef.current.active) pausedRef.current = false }}
      >
        {trackCards.map((c, i) => {
          const isClone = i >= cards.length
          const revealIdx = Math.min((i % cards.length) + 1, 4)
          const cardRef =
            i === 0 ? firstCardRef : i === cards.length ? secondGroupFirstCardRef : undefined

          return (
            <div
              key={isClone ? `clone-${i}` : i}
              ref={cardRef}
              className={`${isClone ? '' : `reveal d${revealIdx}`} ${styles.card}`}
              role="listitem"
              aria-hidden={isClone || undefined}
            >
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
          )
        })}
      </div>
    </section>
  )
}
