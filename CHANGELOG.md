# Changelog

## v5.1.0 — Worker Deploy Fix V6 Node 22

- Pinado `wrangler` em `4.86.0` sem caret para evitar instalação automática do `4.100.0`.
- Adicionado `.node-version` com `22`.
- Adicionado `engines.node >=22.0.0`.
- Mantido build estático `node scripts/build.mjs`.
- Mantido deploy Worker via `wrangler deploy`.
- Marcador de validação: `SWA_WORKER_DEPLOY_FIX_V6_NODE22`.

# CHANGELOG

## v5.0.0 — Worker Deploy Fix

- Adicionado `wrangler.jsonc`.
- Adicionado script `npm run deploy`.
- Adicionado marcador `SWA_WORKER_DEPLOY_FIX_V5`.
- Corrigido fluxo para Cloudflare Workers & Pages publicar assets novos em `dist`.
- Mantida home light premium e remoção de OPI no front.

# Changelog

## [4.0.0] - Force Light Premium V4
- Remove dependência de Astro para eliminar build antigo/stale.
- Home light premium nova com marcador visível.
- OPI removido do front, substituído por Fala Inicial / APF.
- Logo oficial, favicon e footer com marca.
- Forms para WhatsApp +55 19 99893-0846.
- Build estático com `node scripts/build.mjs`.


## V7 Redirects Fix

- Removed invalid `/* /404.html 404` from `_redirects` because Cloudflare Workers Assets accepts only 200/301/302/303/307/308 in `_redirects`.
- Added safe `tsconfig.json` not depending on Astro.
- Marker: `SWA_WORKER_DEPLOY_FIX_V7_REDIRECTS_OK`.
