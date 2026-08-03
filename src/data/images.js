/**
 * Image sources. Currently pulled from Unsplash (free to use, hotlinked).
 * To use your own photos: drop them in /public/images and replace the
 * values below with e.g. '/images/hero.jpg'.
 */

const base = 'https://images.unsplash.com/';

/** Build an optimised Unsplash URL. Ignored for local (/…) paths. */
export function img(src, { w = 1600, h, q = 72 } = {}) {
  if (src.startsWith('/') || src.startsWith('http')) {
    if (!src.startsWith(base)) return src; // local or external — return as-is
  }
  const id = src.replace(base, '');
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    w: String(w),
    q: String(q),
  });
  if (h) params.set('h', String(h));
  return `${base}${id}?${params.toString()}`;
}

export const images = {
  hero: 'photo-1416879595882-3373a0480b5b', // lush green landscaped path
  aboutPrimary: 'photo-1521737604893-d14cc237f11d', // team on site
  aboutSecondary: 'photo-1558904541-efa843a96f01', // grounds / mowing
  whyChoose: 'photo-1497366216548-37526070297c', // clean modern workspace
  ctaBackdrop: 'photo-1441974231531-c6227db76b6e', // forest canopy
  services: {
    'commercial-cleaning': 'photo-1581578731548-c64695cc6952',
    'grounds-landscaping': 'photo-1558904541-efa843a96f01',
    'waste-hygiene': 'photo-1584622650111-993a426fbf0a',
    'facilities-management': 'photo-1497366811353-6870744d04b2',
  },
};
