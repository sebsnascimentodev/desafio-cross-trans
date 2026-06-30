# Desafio Cross Trans

Landing page para um programa de treino e mentoria voltado a **homens trans e pessoas transmasculinas**, com foco em masculinização do físico (peitoral, abdômen, ganho de massa magra) com acompanhamento individual.

🔗 Demo local: rode `npm run dev` e acesse `http://localhost:5173`

## Sobre o projeto

A página foi pensada para comunicar, de forma direta e acolhedora, que o método de treino respeita o corpo e o tempo de cada pessoa — sem adaptar conteúdo genérico para um público que tem necessidades específicas. A estrutura segue o funil clássico de uma landing page de conversão:

| Seção | Componente | O que mostra |
|---|---|---|
| Topo | `Navbar` | Navegação fixa entre as seções |
| Herói | `Hero` | Proposta de valor e CTA principal via WhatsApp |
| Para quem é | `ForWho` | Benefícios e público-alvo |
| O que você recebe | `WhatYouGet` | Itens inclusos no programa |
| Antes e depois | `BeforeAfter` | Resultados reais, com máscara de privacidade configurável |
| Depoimentos | `Testimonials` | Prova social |
| Planos | `Plans` | Opções de contratação |
| Como funciona | `HowItWorks` | Passo a passo do processo |
| Dúvidas | `FAQ` | Perguntas frequentes |
| CTA final | `CTAFinal` | Última chamada para ação |
| Rodapé | `Footer` | Informações finais |
| Flutuante | `WaFloat` | Botão fixo de contato via WhatsApp |

## Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) — build e dev server
- CSS Modules (sem framework de UI)
- [Oxlint](https://oxc.rs/) — lint

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

### Outros comandos

```bash
npm run build    # gera a build de produção em dist/
npm run preview  # serve a build de produção localmente
npm run lint      # roda o linter
```

## Configuração de conteúdo

Instruções detalhadas sobre como trocar a foto do herói, as fotos de antes/depois (com máscara de privacidade para borrar o rosto), o número de WhatsApp e os depoimentos estão em [`COMO_USAR.md`](./COMO_USAR.md).

## Estrutura do projeto

```
src/
├── components/   # Seções da landing page (um componente + CSS module por seção)
├── hooks/        # Hooks customizados (ex.: animação de revelação ao rolar a página)
├── assets/       # Imagens estáticas importadas pelo bundler
├── App.jsx       # Composição das seções
└── main.jsx      # Ponto de entrada
public/
├── favicon.svg   # Ícone da aba (bandeira trans)
└── images/       # Imagens carregadas em runtime (hero, antes/depois)
```
