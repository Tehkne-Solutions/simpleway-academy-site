
## Correção Cloudflare Worker — Node 22

Configuração recomendada no Cloudflare:

- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Build output directory: `dist`
- Root directory: `/`
- Node version: `22`

Este pacote usa `.node-version` com `22` e `wrangler` pinado em `4.86.0` para impedir que o Cloudflare instale automaticamente `wrangler@4.100.0` em Node 20.

Valide depois do deploy em `/BUILD_MARKER.txt`. O retorno esperado inclui:

```txt
SWA_WORKER_DEPLOY_FIX_V6_NODE22
SWA_STATIC_LIGHT_V4_2026_06_12_ROOT_ONLY
```

# SimpleWay Academy Site — FORCE LIGHT V4

Pacote root-only, sem Astro, sem dependências e com build estático por Node.

## Build Cloudflare

- Build command: `npm run build`
- Build output directory: `dist`
- Deploy command: vazio
- Node version: 20

## Marcador de validação

Procure no HTML/CSS por: `SWA_STATIC_LIGHT_V4_2026_06_12_ROOT_ONLY`.

## Aplicação

Extraia este ZIP diretamente na raiz do repo `Tehkne-Solutions/simpleway-academy-site`, sobrescrevendo os arquivos.


## V5 — Worker Deploy Fix

Marcador: `SWA_WORKER_DEPLOY_FIX_V5`.

Cloudflare Workers & Pages deve usar:

- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Output directory: `dist`

Produto desenvolvido por Tehkné Solutions.
