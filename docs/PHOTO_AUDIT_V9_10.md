# Auditoria de imagens — V9.10

Objetivo: eliminar repetição visual e alinhar cada imagem ao tema da seção/página.

## Resultado da auditoria

- `site`: 335 imagens externas em `<img>`, 335 URLs únicas, 0 duplicatas globais, 0 páginas com duplicata interna.
- `dist`: 335 imagens externas em `<img>`, 335 URLs únicas, 0 duplicatas globais, 0 páginas com duplicata interna.

## Critério aplicado

- Cada imagem de conteúdo recebeu URL própria.
- As queries das imagens foram definidas por página, título, alt text e tema da seção.
- Imagens institucionais de logo/brand foram preservadas.
- JSON-LD de artigos foi atualizado para não apontar para imagens antigas repetidas.

