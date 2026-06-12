import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://simplewayacademy.com.br',
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap()],
  build: {
    format: 'directory',
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssCodeSplit: true,
      assetsInlineLimit: 2048
    }
  }
});
