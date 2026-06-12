import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://simplewayacademy.com.br',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()]
});
