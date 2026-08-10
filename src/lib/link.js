/**
 * Build an internal URL that respects the site's base path.
 * Works for the production domain (base "/") and the GitHub Pages
 * preview (base "/atlas-integrated-facility-services").
 *
 *   link('/')                        → base-aware home
 *   link('/#contact')                → base-aware home + hash
 *   link('/services/office-cleaning')→ base-aware service page
 */
export function link(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path) path = '/';
  if (!path.startsWith('/')) path = '/' + path;
  return base + path;
}
