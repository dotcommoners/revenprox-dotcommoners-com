// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// RevenProx project site. Served under the docs domain at /revenprox/.
export default defineConfig({
  site: 'https://docs.dotcommoners.com',
  base: '/revenprox/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
