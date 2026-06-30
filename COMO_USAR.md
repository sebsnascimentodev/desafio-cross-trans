# Desafio Cross Trans — Instruções

## Rodar o projeto

```bash
npm run dev
```
Abre em http://localhost:5173

---

## Foto do herói (fundo da primeira seção)

Coloque a foto em:
```
public/images/hero.jpg
```
Formatos aceitos: jpg, png, webp.

A foto é exibida em preto e branco com overlay escuro à esquerda.
O overlay é mais transparente à direita, então fotos com a pessoa
centralizada ou à direita funcionam melhor.

---

## Fotos de antes e depois

Coloque as fotos em:
```
public/images/before-after/
  aluno1-antes.jpg
  aluno1-depois.jpg
  aluno2-antes.jpg
  aluno2-depois.jpg
  aluno3-antes.jpg
  aluno3-depois.jpg
  aluno4-antes.jpg
  aluno4-depois.jpg
```

### Máscaras de privacidade (blur no rosto)

A máscara é configurada em `src/components/BeforeAfter.jsx`.

Cada card tem um objeto `mask` que define a região a ser borrada:

```js
mask: { top: '0%', left: '0%', width: '100%', height: '28%' }
```

- `top` / `left` — posição do início da máscara (% da foto)
- `width` / `height` — tamanho da área borrada

**Exemplos:**
- Foto com pessoa em pé inteira → `height: '22%'` borra a cabeça
- Foto cortada na cintura → `height: '35%'` borra mais da metade superior
- Rosto deslocado à esquerda → ajuste `left` e `width`

---

## Trocar o número do WhatsApp

Busque e substitua `5511999999999` pelo número real no projeto:
```bash
grep -r "5511999999999" src/
```

---

## Adicionar mais depoimentos

Edite o array em `src/components/Testimonials.jsx`.

## Adicionar mais cards de antes/depois

Edite o array `cards` em `src/components/BeforeAfter.jsx` — adicione
novas entradas seguindo o mesmo padrão.
