# Correção de Deploy — Cloudflare Workers & Pages

Este pacote é o V5 Worker Deploy Fix.

## Por que a home antiga continuava aparecendo?

O projeto no painel está em modo **Workers & Pages / Worker service**, não apenas Pages estático. Nesse modo, rodar somente `npm run build` gera a pasta `dist`, mas não publica os assets novos no Worker. A versão antiga continuava servida pelo Worker previamente publicado.

## Configuração correta no Cloudflare

- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Output directory: `dist`
- Root directory: `/`
- Node version: `20`

O comando `npm run deploy` executa `wrangler deploy`, usando `wrangler.jsonc` e publicando `dist` como assets do Worker.

## Validação

Após o deploy, abra o DevTools ou veja o HTML da página e procure:

`SWA_STATIC_LIGHT_V4_2026_06_12_ROOT_ONLY`

Também confirme que não existe mais `OPI` no HTML.
