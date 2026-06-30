import styles from './WhatYouGet.module.css'

const cards = [
  { icon: '🏋️', title: 'Ficha de Musculação Ilustrada', desc: 'Todos os exercícios na plataforma de alunos, em vídeo, sem precisar perguntar nada ao professor da academia. Atualizada de 3 em 3 meses durante 1 ano.' },
  { icon: '🏠', title: 'Treinos em Casa', desc: 'Planejamento enviado toda semana na plataforma, todos em vídeo. Apenas 33 minutos por dia, zero equipamento.' },
  { icon: '🥗', title: 'Cardápios Exclusivos', desc: 'Criados por nutricionista parceira, pensados para reduzir gordura e ganhar massa com qualidade.' },
  { icon: '💬', title: 'Mentoria no WhatsApp', desc: 'Acompanhamento pessoal direto — para você nunca desistir e ter alguém ao seu lado em cada etapa.' },
  { icon: '📅', title: '1 Ano Completo', desc: 'Equipe junto com você por um ano inteiro. Ajustes, revisões, evolução real. Após 1 ano você decide se renova.' },
]

export default function WhatYouGet() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={`sh reveal`}>
          <span className="label">O que você recebe</span>
          <h2 className="heading">
            Tudo o que você precisa<br />
            <span className="pink">em um só lugar.</span>
          </h2>
          <p className={styles.sub}>
            Plataforma, vídeos, cardápios e mentoria. Você não depende de adivinhação nem de palpite de internet.
          </p>
        </div>
        <div className={styles.grid}>
          {cards.map((c, i) => (
            <div key={i} className={`reveal d${Math.min(i + 1, 5)} ${styles.card}`}>
              <div className={styles.icon}>{c.icon}</div>
              <div className={styles.title}>{c.title}</div>
              <p className={styles.desc}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
