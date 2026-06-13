# SimpleWay Academy Site — V9.8

Site institucional estático da SimpleWay Academy preparado para Cloudflare Workers/Pages.

## Destaques da V9.8
- Visual mais autoral, colorido e modular.
- Títulos com identidade visual azul/vermelho/dourado.
- Imagens revisadas para ficarem mais coerentes com cada texto.
- Páginas aprofundadas com conteúdo comercial, pedagógico e estratégico.
- Hub Caminhos SimpleWay e páginas por público/profissão.
- Formulários com CTA para WhatsApp +55 19 99893-0846.
- Assinatura: Tehkné Solutions.

## Deploy
- Node version: 22
- Build command: npm run build
- Deploy command: npm run deploy
- Build output directory: dist


## V9.9 — Public Copy Cleanup + Brand Hero Color System

- Removed public dev/briefing copy from methodology and caminho pages.
- Removed public link/page for the editorial mock.
- Replaced pastel-dominant hero treatments with stronger SimpleWay brand color blocks.
- Kept the Lego/modular visual language with blue, gold and red accents.

## V9.10 — Auditoria visual de imagens

Pacote com revisão global das imagens públicas, evitando repetição de fotos e conectando cada imagem ao assunto da seção.

Validação esperada:

```bash
npm run build
```



## V9.11 — Real Photo Recovery + Static Security Hardening

- Corrige regressão visual em que imagens reais não carregavam.
- Remove dependência de `source.unsplash.com`.
- Usa endpoints de fotos reais contextuais e fallback de foto real, sem trocar conteúdo visual por SVG/ícones.
- Mantém imagens coerentes com título, página e contexto.
- Adiciona headers de segurança estilo hardening CDN.
- Adiciona honeypot e proteção básica anti-spam nos formulários WhatsApp.
- Documenta recomendações Cloudflare equivalentes a uma postura Wordfence para site estático.
