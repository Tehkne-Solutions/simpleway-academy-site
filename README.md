# SimpleWay Academy — Site Institucional

Site institucional da SimpleWay Academy em Astro, preparado para Cloudflare Pages.

## Stack

- Astro static site
- Cloudflare Pages
- Blog e SEO no mesmo projeto
- Formulários/leads via WhatsApp, preparados para n8n, Google Sheets ou Supabase
- App oficial separado em `app.simplewayacademy.com.br`
- Assinatura obrigatória: **Produto desenvolvido por Tehkné Solutions**

## Sprints incluídas

- Sprint 0 — Fundação Astro + Cloudflare Pages
- Sprint 1 — Home Premium SEO Conversion
- Sprint 2 — Metodologia + SimpleWay English SEO Pages
- Sprint 3 — Blog/SEO avançado
- Sprint 4 — Leads e pré-matrícula
- Sprint 5 — Planos, B2B e conversão
- Sprint 6 — Responsivo, performance, segurança e QA final

## Cloudflare Pages

Configuração recomendada:

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Production branch: `main`
- Node version: `20`
- Deploy command: deixar vazio

> Importante: não usar `npx wrangler deploy` como deploy command para este fluxo estático em Pages. Se ele estiver preenchido no painel, remover.

## Como publicar

```bash
git add .
git commit -m "feat: ship SimpleWay Academy institutional site final patch"
git push origin main
```

Depois, acione novo deploy no Cloudflare Pages.

## QA responsivo

Testar manualmente:

- 360 × 740
- 390 × 844
- 430 × 932
- 768 × 1024
- 1024 × 768
- 1366 × 768
- 1440 × 900

## Produto

O site institucional vende, explica, ranqueia e capta. O app SimpleWay Academy ensina.
