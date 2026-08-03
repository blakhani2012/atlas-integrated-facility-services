/**
 * Central site content for Atlas Integrated Facility Services.
 * Edit this file to update contact details, services, stats, etc.
 * (Placeholders are marked with TODO — swap in real details.)
 */

export const company = {
  name: 'Atlas Integrated Facility Services',
  legalName: 'Atlas Integrated Facility Services Pty Ltd',
  shortName: 'Atlas',
  tagline: 'One partner for a cleaner, greener, better-run facility.',
  // TODO: replace with real contact details
  phone: '1300 000 000',
  phoneHref: 'tel:1300000000',
  email: 'hello@atlasintegrated.com.au',
  emailHref: 'mailto:hello@atlasintegrated.com.au',
  abn: 'ABN 00 000 000 000', // TODO
  address: {
    line1: 'Level 1, 100 Example Street',
    line2: 'Sydney NSW 2000',
    country: 'Australia',
  },
  hours: 'Mon–Fri 7:00am – 6:00pm · 24/7 emergency response',
  socials: {
    linkedin: '#',
    facebook: '#',
    instagram: '#',
  },
};

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Atlas', href: '#why' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Contact', href: '#contact' },
];

/** Four trust pillars shown under the hero */
export const pillars = [
  {
    icon: 'shield',
    title: 'Fully Insured & Certified',
    text: 'Public liability cover, ISO-aligned processes and full compliance documentation on every site.',
  },
  {
    icon: 'users',
    title: 'Trained Local Teams',
    text: 'Vetted, uniformed and directly employed staff — never faceless subcontractors.',
  },
  {
    icon: 'leaf',
    title: 'Eco-Friendly Methods',
    text: 'Low-tox products, water-wise practices and measurable waste-diversion targets.',
  },
  {
    icon: 'clock',
    title: '24/7 Rapid Response',
    text: 'A single point of contact and emergency call-outs whenever you need them.',
  },
];

/** Core service offerings (from the Services grid) */
export const services = [
  {
    id: 'commercial-cleaning',
    title: 'Commercial Cleaning',
    summary:
      'Daily office, retail, medical and industrial cleaning that keeps your spaces spotless, safe and presentable.',
    points: ['Office & workplace cleaning', 'Medical & clinical hygiene', 'Retail & showroom presentation', 'Industrial & warehouse'],
    icon: 'sparkles',
  },
  {
    id: 'grounds-landscaping',
    title: 'Grounds & Landscaping',
    summary:
      'Lawn care, gardens and external grounds maintained to keep your kerb appeal sharp all year round.',
    points: ['Lawn & turf care', 'Garden bed maintenance', 'Pruning & green-waste removal', 'Seasonal planting'],
    icon: 'leaf',
  },
  {
    id: 'waste-hygiene',
    title: 'Waste, Hygiene & Washrooms',
    summary:
      'Waste management, washroom servicing and pest control that protect health and keep sites compliant.',
    points: ['Waste & recycling management', 'Washroom & sanitary services', 'Pest control', 'Consumables restocking'],
    icon: 'recycle',
  },
  {
    id: 'facilities-management',
    title: 'Integrated Facilities Management',
    summary:
      'One coordinated team across multiple sites — a single point of accountability for every service you need.',
    points: ['Multi-site coordination', 'Help desk & reporting', 'Contractor management', 'Preventive maintenance'],
    icon: 'building',
  },
];

/** Headline stats band */
export const stats = [
  { value: '15', suffix: '+', label: 'Years serving Australian businesses' },
  { value: '500', suffix: '+', label: 'Sites cleaned & maintained' },
  { value: '98', suffix: '%', label: 'Client retention rate' },
  { value: '24/7', suffix: '', label: 'Emergency response' },
];

/** "Why choose Atlas" reasons */
export const whyReasons = [
  {
    title: 'One partner, every service',
    text: 'Cleaning, grounds, waste and full FM under one contract — fewer invoices, one number to call, total accountability.',
  },
  {
    title: 'People you can trust',
    text: 'Police-checked, directly employed and continuously trained teams who take pride in your site.',
  },
  {
    title: 'Sustainability built in',
    text: 'Green-certified products, waste diversion and transparent reporting help you hit your ESG goals.',
  },
  {
    title: 'Tailored to your site',
    text: 'Scopes are built around your building, hours and budget — never a one-size-fits-all package.',
  },
];

/** Sectors / industries served */
export const sectors = [
  { name: 'Commercial Offices', icon: 'building' },
  { name: 'Retail & Shopping Centres', icon: 'store' },
  { name: 'Healthcare & Aged Care', icon: 'heart' },
  { name: 'Education', icon: 'book' },
  { name: 'Industrial & Warehousing', icon: 'factory' },
  { name: 'Strata & Body Corporate', icon: 'home' },
];

/** Client testimonials */
export const testimonials = [
  {
    quote:
      'Switching to Atlas for cleaning, grounds and waste under one contract cut our admin in half. Standards went up, not down.',
    name: 'Facilities Manager',
    role: 'National Retail Group', // TODO: real attribution
  },
  {
    quote:
      'Their team is reliable, professional and genuinely cares about our site. The 24/7 response has saved us more than once.',
    name: 'Building Manager',
    role: 'A-Grade Commercial Tower', // TODO
  },
  {
    quote:
      'The sustainability reporting alone made the switch worth it. Atlas helped us hit waste-diversion targets we thought were years away.',
    name: 'Operations Director',
    role: 'Aged Care Provider', // TODO
  },
];
