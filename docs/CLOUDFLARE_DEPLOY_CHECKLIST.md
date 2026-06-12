# Checklist Cloudflare Pages

## Configuração correta

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Production branch: `main`
- Node version: `20`
- Deploy command: vazio

## Atenção

Se o painel estiver com `npx wrangler deploy` em Deploy command, remova. Este projeto é estático e deve ser publicado pelo fluxo padrão de Pages.

## Após deploy

Validar:

- `/`
- `/metodologia`
- `/simpleway-english`
- `/planos`
- `/pre-matricula`
- `/blog`
- `/sitemap-index.xml`
- `/robots.txt`

## Domínio

Quando o domínio estiver pronto:

- `simplewayacademy.com.br` → site institucional
- `app.simplewayacademy.com.br` → app SimpleWay Academy
