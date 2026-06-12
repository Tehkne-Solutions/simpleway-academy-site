# Aplicar sem erro

1. Na raiz do repo, apague arquivos antigos se quiser garantir:

```bash
rm -rf src site public dist docs scripts
rm -f package.json astro.config.mjs tsconfig.json README.md CHANGELOG.md
```

2. Extraia o ZIP na raiz.

3. Rode localmente:

```bash
npm run build
```

4. Verifique:

```bash
grep -R "SWA_STATIC_LIGHT_V4" dist index.html site public || true
grep -R "OPI" site public || true
```

5. Commit e push.

6. No Cloudflare, Deploy command deve ficar vazio.
