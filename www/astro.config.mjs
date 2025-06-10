import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { DOCS_CONFIG } from './src/config.ts';

// https://astro.build/config
export default defineConfig({
  site: DOCS_CONFIG.siteUrl,
  // Only use base path in production (GitHub Pages)
  base: process.env.NODE_ENV === 'production' ? DOCS_CONFIG.basePath : undefined,
  integrations: [
    starlight({
      title: `${DOCS_CONFIG.title} v${DOCS_CONFIG.currentVersion}`,
      social: [
        {
          label: 'GitHub',
          icon: 'github',
          href: DOCS_CONFIG.repositoryUrl,
        },
      ],
    }),
  ],
});
