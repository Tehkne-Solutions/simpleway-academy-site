# SimpleWay Academy — Security Hardening V9.11

Este site é estático/Cloudflare Worker Assets, portanto não possui wp-admin, banco de dados público ou PHP exposto. A camada aplicada aqui segue a lógica de proteção preventiva no nível CDN/front, equivalente ao cuidado operacional que usaríamos em WordPress com Wordfence, mas adaptada para site estático.

## Camadas aplicadas

- Security headers em `public/_headers`.
- CSP restringindo scripts, imagens, frames e formulários.
- `frame-ancestors` e `X-Frame-Options` contra clickjacking.
- `X-Content-Type-Options: nosniff`.
- `Referrer-Policy` conservadora.
- `Permissions-Policy` bloqueando câmera, microfone, geolocalização, USB e pagamento.
- Formulários com honeypot invisível para bots simples.
- Tempo mínimo antes de envio para reduzir submit automatizado imediato.
- Sanitização client-side dos campos enviados ao WhatsApp.
- `noopener,noreferrer` nos disparos para WhatsApp.
- Remoção de painel editorial público.

## Próximos reforços recomendados na Cloudflare

- Ativar WAF Managed Ruleset.
- Ativar Bot Fight Mode ou Super Bot Fight Mode, se disponível.
- Rate limiting para rotas sensíveis, caso sejam criadas APIs no futuro.
- Turnstile nos formulários quando deixarem de abrir WhatsApp e passarem a gravar lead em backend.
- Security Level: Medium ou High durante campanhas.
- Bloquear países/ASNs suspeitos se houver ataque real.
- Page Rule/Cache Rule com cache agressivo para assets estáticos.

Assinatura: Tehkné Solutions
