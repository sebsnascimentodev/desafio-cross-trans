import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <div className={styles.logo}>
              <div className={styles.flag}>
                <span className={styles.fb}/><span className={styles.fp}/>
                <span className={styles.fw}/><span className={styles.fp}/>
                <span className={styles.fb}/>
              </div>
              <span className={styles.name}>Desafio Cross Trans</span>
            </div>
            <p className={styles.tag}>
              Treino, mentoria e cardápio pensados para homens trans e pessoas transmasculinas.
            </p>
          </div>
          <div>
            <div className={styles.h}>Contato</div>
            <ul className={styles.links}>
              <li><a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="mailto:contato@desafiocrosstrans.com">contato@desafiocrosstrans.com</a></li>
            </ul>
          </div>
          <div>
            <div className={styles.h}>Redes Sociais</div>
            <ul className={styles.links}>
              <li><a href="#" target="_blank" rel="noopener noreferrer">@desafiocrosstrans</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© Desafio Cross Trans. Todos os direitos reservados. 2026</span>
          <span>Feito com respeito e pertencimento.</span>
        </div>
      </div>
    </footer>
  )
}
