# DEPLOY FORCE LIGHT V3 — SimpleWay Academy

Este pacote é ROOT-ONLY: extraia o conteúdo diretamente na raiz do repositório `Tehkne-Solutions/simpleway-academy-site`.

Se a home continuar escura, este pacote não foi aplicado no root correto ou o Cloudflare está publicando build antigo/cache.

Checklist rápido:

1. A raiz do repo deve conter `package.json`, `astro.config.mjs`, `src/`, `public/`.
2. Não pode ficar `simpleway-academy-site/src/...` dentro do repo.
3. Depois do push, no Cloudflare use: Build command `npm run build`, Output `dist`, Deploy command vazio.
4. Rode um deploy com Clear build cache.

Marcador visual esperado na home: layout claro, fotos Unsplash, logo oficial no header/footer, APF/Fala Inicial e nenhum texto OPI.
