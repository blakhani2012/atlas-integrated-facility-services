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
  hero: 'photo-1600880292203-757bb62b4baf', // clean modern office
  aboutPrimary: 'photo-1521737604893-d14cc237f11d', // team on site
  aboutSecondary: 'photo-1584622650111-993a426fbf0a', // cleaning trolley / products
  whyChoose: 'photo-1497366216548-37526070297c', // clean, tidy workspace
  ctaBackdrop: 'photo-1497366811353-6870744d04b2', // office interior
  services: {
    'office-cleaning': 'photo-1581578731548-c64695cc6952',
    'builders-handover-cleaning': 'photo-1600585154340-be6161a56a0c',
    'end-of-lease-cleaning': 'photo-1560448204-e02f11c3d0e2',
    'strata-cleaning': 'photo-1545324418-cc1a3fa10c00',
    'airbnb-cleaning': 'photo-1560185007-cde436f6a4d0',
    'childcare-cleaning': 'photo-1503676260728-1c00da094a0b',
  },
};
