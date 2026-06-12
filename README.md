# SimpleWay Academy — Site Institucional

Site institucional da SimpleWay Academy em Astro, otimizado para Cloudflare Pages, SEO, UX responsivo e captação via WhatsApp.

## Stack

- Astro static site
- Cloudflare Pages
- Sitemap automático com `@astrojs/sitemap`
- Formulários estáticos que abrem WhatsApp para `+55 19 99893-0846`
- Imagens remotas via Unsplash Images CDN
- UI light premium com cores SimpleWay English: azul, vermelho e amarelo/dourado
- Assinatura: Tehkné Solutions

## Conceito

O site vende e educa. O app SimpleWay Academy ensina.

O site comunica:

- Método SimpleWay
- Fala Inicial / APF — Ativação Pessoal de Fala
- História Guiada / Imersão Guiada
- Perguntas da História
- Desafio das 72 Frases
- Revisão Inteligente
- SimpleWay English
- Planos e parcerias
- Blog SEO

## Deploy Cloudflare Pages

Configuração recomendada:

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Production branch: `main`
- Deploy command: vazio
- Node version: `20`

Não usar `npx wrangler deploy` para este site estático.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Responsivo

O projeto foi estruturado mobile-first, com:

- menu mobile acessível,
- botões 100% no mobile,
- grids colapsando para uma coluna,
- cards sem overflow horizontal,
- títulos com `clamp()` e limite visual,
- imagens com `object-fit`, lazy loading e tamanhos declarados,
- foco em telas a partir de 320px.


## Brand assets

Os arquivos oficiais de marca ficam em:

```txt
public/brand/simpleway-logomark.png
public/brand/simpleway-logo-full.png
public/favicon.ico
public/favicon.svg
public/favicon-16x16.png
public/favicon-32x32.png
public/apple-touch-icon.png
public/android-chrome-192x192.png
public/android-chrome-512x512.png
public/site.webmanifest
public/og-simpleway-academy.png
```

O header usa o logotipo do farol. O footer usa o logo completo oficial da SimpleWay Academy.
