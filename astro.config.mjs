// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
//
// Currently deployed to GitHub Pages (project site → served under a sub-path).
// When the client's real hosting/domain is ready, set `site` to that domain and
// remove `base` (or set it to '/').
export default defineConfig({
  site: 'https://blakhani2012.github.io',
  base: '/atlas-integrated-facility-services',
  vite: {
    plugins: [tailwindcss()],
  },
});
