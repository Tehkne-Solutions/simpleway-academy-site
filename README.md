# SimpleWay Academy — Site Institucional

Site institucional da SimpleWay Academy feito em Astro para Cloudflare Pages.

## Decisão de arquitetura

- Site institucional, blog, SEO, páginas comerciais e captação ficam neste projeto.
- O app SimpleWay Academy é a plataforma oficial do aluno/professor.
- O app deve viver em `app.simplewayacademy.com.br`.
- Assinatura obrigatória: Tehkné Solutions.

## Stack

- Astro static site
- Cloudflare Pages
- HTML/CSS/TypeScript leve
- SEO com sitemap, robots, Schema.org e páginas estáticas performáticas
- Formulários preparados para integração futura com n8n, Google Sheets ou Supabase

## Cloudflare Pages

Configuração recomendada:

```txt
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Root directory: /
Production branch: main
Node version: 20
```

## Desenvolvimento local

```bash
npm install
npm run dev
npm run build
```

## Sprints

### Sprint 0 — Fundação

- Base Astro
- Identidade SimpleWay
- Home premium inicial
- Metodologia
- SimpleWay English
- Planos
- Blog base
- Pré-matrícula
- Contato
- Páginas legais
- SEO base

### Sprint 1 — Home Premium SEO Conversion

- Copy final
- Seções comerciais completas
- Depoimentos
- FAQ comercial
- CTA WhatsApp
- Lead form real
- Schema avançado
- Lighthouse 95+
