# Como aplicar o patch final

## Opção 1 — Substituição completa

Extraia o ZIP e substitua o conteúdo do repositório `Tehkne-Solutions/simpleway-academy-site`.

```bash
git add .
git commit -m "feat: ship SimpleWay Academy institutional site final patch"
git push origin main
```

## Opção 2 — Patch incremental

Use o arquivo:

```txt
patches/PATCH_FINAL_SITE_COMPLETO.diff
```

Comando sugerido a partir da raiz do repositório:

```bash
patch -p1 < patches/PATCH_FINAL_SITE_COMPLETO.diff
```

Como o patch foi gerado a partir do pacote Sprint 1, a opção 1 é a mais segura.
