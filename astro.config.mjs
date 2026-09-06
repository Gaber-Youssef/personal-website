import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://gaberyoussef.dev',
  markdown: { shikiConfig: { theme: 'github-light' } },
  redirects: {
    '/projects': '/#results',
    '/cv': '/#results',
    '/services': '/#services',
  },
  integrations: [mdx(), sitemap({ filter: (page) => !['/cv', '/projects', '/services', '/404'].includes(new URL(page).pathname.replace(/\/$/, '')) }), tailwind()]
});