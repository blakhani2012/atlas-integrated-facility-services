// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
//
// Build target:
//   • default            → PRODUCTION on the client's own domain (atlasifs.com.au), served at root.
//   • DEPLOY_TARGET=gh-pages → the GitHub Pages preview under the repo sub-path (set in the CI workflow).
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

export default defineConfig({
  site: ghPages ? 'https://blakhani2012.github.io' : 'https://atlasifs.com.au',
  base: ghPages ? '/atlas-integrated-facility-services' : '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
