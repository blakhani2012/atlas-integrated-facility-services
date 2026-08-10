/**
 * Central site content for Atlas Integrated Facility Services.
 * Edit this file to update contact details, services, stats, etc.
 * (Placeholders are marked with TODO — swap in real details.)
 */

export const company = {
  name: 'Atlas Integrated Facility Services',
  legalName: 'Atlas Integrated Facility Services Pty Ltd',
  shortName: 'Atlas',
  tagline: 'Reliable commercial cleaning, managed properly.',
  phone: '+61 402 986 444',
  phoneHref: 'tel:+61402986444',
  email: 'info@atlasifs.com.au',
  emailHref: 'mailto:info@atlasifs.com.au',
  abn: '', // TODO: add ABN when the client provides it
  address: {
    line1: '24 Ceratta Cres',
    line2: 'Tarneit VIC 3029',
    country: 'Australia',
  },
  hours: 'Flexible scheduling · after-hours, early-morning & weekend cleaning',
  socials: {
    linkedin: '#',
    facebook: '#',
    instagram: '#',
  },
};

/** Acknowledgement of Country — shown in the footer */
export const acknowledgement =
  'Atlas Integrated Facility Services acknowledges the Traditional Owners and Custodians of the lands on which we live and work. We pay our respects to Elders past and present, and extend that respect to all Aboriginal and Torres Strait Islander peoples.';

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Why Atlas', href: '/#why' },
  { label: 'Contact', href: '/#contact' },
];

/** Four trust pillars shown under the hero */
export const pillars = [
  {
    icon: 'shield',
    title: 'Fully Insured',
    text: 'Appropriate insurance cover and safe, professional work practices on every site.',
  },
  {
    icon: 'users',
    title: 'Trained Local Teams',
    text: 'Vetted, uniformed teams who take genuine pride in your workplace.',
  },
  {
    icon: 'check',
    title: 'Quality Assurance',
    text: 'Regular inspections keep every clean consistent with what we agreed.',
  },
  {
    icon: 'clock',
    title: 'Flexible Scheduling',
    text: 'Daily, after-hours, early-morning or weekend cleaning around your operations.',
  },
];

/** Core cleaning services (each links to a dedicated page) */
export const services = [
  {
    id: 'office-cleaning',
    title: 'Office Cleaning',
    href: '/services/office-cleaning',
    summary:
      'Reliable daily and periodic office cleaning tailored to your workplace, hours and priorities.',
    points: ['Workstations & offices', 'Reception areas', 'Kitchens & amenities', 'Washrooms & floors'],
    icon: 'sparkles',
  },
  {
    id: 'builders-handover-cleaning',
    title: 'Builders & Handover Cleaning',
    href: '/services/builders-handover-cleaning',
    summary:
      'Detailed post-construction cleans that prepare residential and commercial projects for handover.',
    points: ['Final builders’ cleans', 'Dust & residue removal', 'Kitchen & bathroom detailing', 'Internal windows'],
    icon: 'factory',
  },
  {
    id: 'end-of-lease-cleaning',
    title: 'End of Lease Cleaning',
    href: '/services/end-of-lease-cleaning',
    summary:
      'Thorough move-out cleans that help tenants, landlords and agents pass the final inspection.',
    points: ['Kitchens & bathrooms', 'Living areas & bedrooms', 'Internal windows & tracks', 'Detail cleaning'],
    icon: 'home',
  },
  {
    id: 'strata-cleaning',
    title: 'Strata Cleaning',
    href: '/services/strata-cleaning',
    summary:
      'Dependable common-area cleaning for owners corporations, body corporates and property managers.',
    points: ['Foyers, hallways & lifts', 'Stairwells & glass', 'Bin rooms', 'High-touch surfaces'],
    icon: 'building',
  },
  {
    id: 'airbnb-cleaning',
    title: 'Airbnb Cleaning',
    href: '/services/airbnb-cleaning',
    summary:
      'Fast, consistent turnaround cleaning that keeps your short-stay property guest-ready.',
    points: ['Guest turnover cleans', 'Kitchens & bathrooms', 'Bed making (linen supplied)', 'Final presentation'],
    icon: 'star',
  },
  {
    id: 'childcare-cleaning',
    title: 'Childcare Cleaning',
    href: '/services/childcare-cleaning',
    summary:
      'Careful, hygienic cleaning for childcare centres and early-learning environments, after hours.',
    points: ['Classrooms & play areas', 'Bathrooms & amenities', 'High-touch surfaces', 'Tailored schedules'],
    icon: 'heart',
  },
];

/** Headline stats band (kept accurate — no unverified metrics) */
export const stats = [
  { value: '15', suffix: '+', label: 'Years of industry experience' },
  { value: '6', suffix: '', label: 'Cleaning specialisations' },
  { value: '5', suffix: '', label: 'Service-standard principles' },
  { value: '100', suffix: '%', label: 'Focus on quality & communication' },
];

/** "Why choose Atlas" reasons */
export const whyReasons = [
  {
    title: 'A partner, not just a contractor',
    text: 'We build long-term relationships based on reliability, communication and accountability — not one-off jobs.',
  },
  {
    title: 'People you can trust',
    text: 'Vetted, uniformed and directly managed teams who take pride in maintaining your workplace.',
  },
  {
    title: 'Quality you can see',
    text: 'Regular inspections and client feedback keep our standards consistently high.',
  },
  {
    title: 'Tailored to your site',
    text: 'Cleaning programs built around your layout, operating hours and priorities — never one-size-fits-all.',
  },
];

/** Industries / businesses we support */
export const sectors = [
  { name: 'Corporate Offices', icon: 'building' },
  { name: 'Medical & Allied Health', icon: 'heart' },
  { name: 'Law & Accounting Firms', icon: 'book' },
  { name: 'Real Estate Agencies', icon: 'store' },
  { name: 'Childcare & Education', icon: 'users' },
  { name: 'Strata & Body Corporate', icon: 'home' },
];

/** Client testimonials — TODO: replace with real, attributed quotes */
export const testimonials = [
  {
    quote:
      'Atlas took over our office cleaning and the difference was immediate — consistent standards and a single point of contact who actually answers.',
    name: 'Office Manager',
    role: 'Professional services firm', // TODO: real attribution
  },
  {
    quote:
      'Reliable, professional and easy to deal with. Their after-hours cleaning means zero disruption to our team.',
    name: 'Practice Manager',
    role: 'Medical clinic', // TODO
  },
  {
    quote:
      'Their builders’ cleans make our completed projects present beautifully at handover. A trusted part of our process.',
    name: 'Site Supervisor',
    role: 'Residential builder', // TODO
  },
];
