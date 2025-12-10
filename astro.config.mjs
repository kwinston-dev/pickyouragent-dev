import { defineConfig } from 'astro/config';
import rehypeSlug from 'rehype-slug';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pickyouragent.dev',
  output: 'static',
  integrations: [mdx(), sitemap()],
  markdown: {
    rehypePlugins: [rehypeSlug],
  },
  build: {
    inlineStylesheets: 'never'
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});

