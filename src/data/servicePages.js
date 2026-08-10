/**
 * Content for the dedicated cleaning service pages.
 * Rendered by src/pages/services/[slug].astro via a shared template.
 * Keyed by slug (matches services[].id in site.js and images.services).
 */

export const servicePages = {
  'office-cleaning': {
    navLabel: 'Office Cleaning',
    metaTitle: 'Office Cleaning Melbourne | Atlas Commercial Cleaning',
    metaDescription:
      'Reliable office cleaning tailored to your workplace — workstations, reception, kitchens, washrooms and floors. Flexible after-hours scheduling. 15+ years’ experience.',
    hero: {
      eyebrow: 'Office Cleaning',
      title: 'Office Cleaning That Works Around Your Business',
      paras: [
        'A clean workplace is about more than appearance — it’s about creating a professional environment where employees can thrive and clients feel confident from the moment they walk through the door.',
        'Atlas provides reliable office cleaning tailored to your workplace, backed by clear communication, structured quality assurance and over 15 years of industry experience.',
      ],
    },
    intro: {
      heading: 'More Than Just Office Cleaning',
      paras: [
        'We believe great office cleaning is about more than emptying bins and vacuuming floors. It’s about creating workplaces that are consistently clean, welcoming and professionally maintained — while giving you confidence your cleaning is being managed properly.',
        'Whether you’re responsible for a small office or a multi-level commercial building, our goal is to become a trusted long-term cleaning partner, not simply another contractor. Every workplace operates differently, so we tailor our cleaning programs around your business, staff, operating hours and priorities.',
      ],
    },
    standard: {
      heading: 'The ATLAS Service Standard™',
      intro: 'Every commercial cleaning partnership is built around our five service principles.',
      items: [
        { title: 'Dedicated Communication', text: 'You’ll have a dedicated point of contact who understands your workplace and responds promptly to questions, requests or changes.' },
        { title: 'Tailored Cleaning Programs', text: 'We develop customised cleaning schedules based on your office layout, staff numbers, operational requirements and preferred frequency.' },
        { title: 'Quality Assurance', text: 'Regular quality inspections help ensure every clean meets the standards we’ve agreed with you.' },
        { title: 'Reliable Service Delivery', text: 'Our team delivers consistent service to agreed schedules while respecting your workplace and operations.' },
        { title: 'Continuous Improvement', text: 'We welcome feedback and regularly review our services so we keep meeting your expectations as your business evolves.' },
      ],
    },
    included: {
      heading: 'Office Cleaning Services',
      intro: 'Our office cleaning can be tailored to suit businesses of all sizes.',
      groups: [
        { title: 'Workstations & Offices', text: 'Cleaning desks, workstations, shared areas and meeting rooms.' },
        { title: 'Reception Areas', text: 'A clean, welcoming first impression for clients and visitors.' },
        { title: 'Kitchens & Staff Amenities', text: 'Sinks, benches, appliances, cupboards and lunchrooms.' },
        { title: 'Washrooms', text: 'Cleaning and sanitising toilets, basins, mirrors, partitions and high-touch surfaces.' },
        { title: 'Floor Care', items: ['Vacuuming', 'Mopping', 'Spot cleaning', 'Dust removal', 'Hard floor maintenance'] },
        { title: 'Waste Management', text: 'Collection and disposal of general office waste with bin liner replacement.' },
        { title: 'High-Touch Surfaces', items: ['Door handles', 'Light switches', 'Shared desks', 'Kitchen surfaces', 'Lift buttons', 'Meeting room furniture'] },
        { title: 'Flexible Programs', items: ['Daily', 'Weekly', 'Fortnightly', 'After-hours', 'Early morning', 'Weekend'] },
      ],
    },
    industries: {
      heading: 'Businesses We Support',
      intro: 'Our office cleaning is suitable for:',
      items: ['Corporate Offices', 'Professional Service Firms', 'Law Firms', 'Accounting Practices', 'Medical & Allied Health Clinics', 'Real Estate Agencies', 'Community Organisations', 'Consulting Firms', 'Education Providers', 'Government Offices'],
    },
    why: {
      heading: 'Why Businesses Choose Atlas',
      paras: [
        'Businesses don’t just choose a cleaning company — they choose a partner they can rely on. We understand reliability, communication and accountability are just as important as the cleaning itself.',
        'Our leadership team brings more than 15 years of industry experience, so we understand the expectations of commercial clients and deliver cleaning that supports professional workplaces.',
      ],
    },
    process: {
      heading: 'Our Process',
      steps: [
        { title: 'Consultation', text: 'We take the time to understand your workplace, priorities and cleaning requirements.' },
        { title: 'Site Assessment', text: 'Where required, we visit your premises to assess the scope and prepare a tailored proposal.' },
        { title: 'Tailored Proposal', text: 'You’ll receive a transparent quotation outlining the recommended services, schedule and program.' },
        { title: 'Service Delivery', text: 'Our team completes the agreed services using professional equipment, quality products and consistent procedures.' },
        { title: 'Quality Review', text: 'Regular inspections and feedback help ensure we keep delivering the standard you expect.' },
      ],
    },
    faqs: [
      { q: 'Can cleaning be completed outside business hours?', a: 'Yes. We offer flexible scheduling, including evenings, early mornings and weekends, to minimise disruption.' },
      { q: 'Do you provide cleaning products and equipment?', a: 'Yes. Our team supplies professional equipment and products unless alternative arrangements are requested.' },
      { q: 'Can our cleaning schedule change as our business grows?', a: 'Absolutely. Our programs are designed to adapt as your requirements change.' },
      { q: 'Are you insured?', a: 'Yes. We operate with appropriate insurance and are committed to professional, safe work practices.' },
      { q: 'Can you customise our cleaning checklist?', a: 'Yes. Every workplace is different, and we’ll build a program that reflects your priorities.' },
    ],
    cta: {
      heading: 'Ready to Experience the Atlas Difference?',
      paras: ['Whether you’re looking for a new cleaning provider or setting up a regular program for the first time, we’re ready to make your workplace cleaning easier through reliable service, clear communication and consistent quality.'],
    },
  },

  'builders-handover-cleaning': {
    navLabel: 'Builders & Handover',
    metaTitle: 'Builders & Handover Cleaning Melbourne | Atlas',
    metaDescription:
      'Detailed post-construction and builders’ cleaning to prepare residential and commercial projects for practical completion and client handover.',
    hero: {
      eyebrow: 'Builders & Handover Cleaning',
      title: 'Professional Builders & Handover Cleaning',
      paras: [
        'Helping builders, developers and renovation contractors present every completed project at its very best.',
        'Atlas provides detailed post-construction cleaning designed to prepare residential and commercial projects for practical completion and client handover — from custom homes and townhouses to renovations and commercial fit-outs.',
      ],
    },
    intro: {
      heading: 'Helping You Finish Every Project With Confidence',
      paras: [
        'Completing a construction project takes months of planning, coordination and hard work. The final clean is one of the last steps before your client walks through the property.',
        'Dust, construction residue, fingerprints and unfinished presentation can distract from the quality of your workmanship. We help builders showcase completed projects with detailed builders’ cleans that prepare properties for practical completion and handover.',
      ],
    },
    standard: {
      heading: 'The ATLAS Service Standard™',
      intro: 'Every builders’ clean is delivered using our structured service approach.',
      items: [
        { title: 'Reliable Scheduling', text: 'Construction schedules change. We schedule cleaning around your project milestones and handover dates.' },
        { title: 'Detailed Cleaning Plans', text: 'Every project is different. Our approach is tailored to the property’s size, finish and construction stage.' },
        { title: 'Quality Assurance', text: 'Before we consider a project complete, we conduct a final inspection to ensure cleaning meets our standards.' },
        { title: 'Clear Communication', text: 'We keep builders informed throughout and remain responsive if timelines change.' },
        { title: 'Professional Presentation', text: 'Every property is cleaned with attention to detail so it makes the best possible impression at handover.' },
      ],
    },
    included: {
      heading: 'Our Builders’ Cleaning Services',
      intro: null,
      groups: [
        { title: 'Final Builders’ Cleans', text: 'Comprehensive cleaning before practical completion or client handover.' },
        { title: 'Post-Construction Cleaning', text: 'Removal of construction dust, debris and residue following building works.' },
        { title: 'Internal Window Cleaning', text: 'Cleaning internal glass, removing dust, stickers, fingerprints and marks.' },
        { title: 'Kitchen Detailing', text: 'Cabinetry, benchtops, splashbacks, sinks and appliances.' },
        { title: 'Bathroom Detailing', text: 'Tiles, showers, mirrors, vanities, basins, toilets and fixtures.' },
        { title: 'Floor Cleaning', items: ['Vacuuming', 'Mopping', 'Dust removal', 'Spot cleaning', 'Presentation cleaning'] },
        { title: 'Detail Cleaning', items: ['Paint splatter', 'Adhesive residue', 'Stickers', 'Silicone residue', 'Construction dust', 'Fingerprints'] },
      ],
    },
    industries: {
      heading: 'Projects We Support',
      intro: 'We work with a range of construction professionals:',
      items: ['Residential Builders', 'Custom Home Builders', 'Volume Builders', 'Townhouse Developers', 'Commercial Builders', 'Renovation Contractors', 'Project Managers', 'Construction Companies'],
    },
    why: {
      heading: 'Why Builders Choose Atlas',
      paras: ['Builders need subcontractors who are dependable, professional and easy to work with. We understand our work reflects on your finished project, so we focus on:'],
      checks: ['Reliability', 'Communication', 'Attention to detail', 'Flexible scheduling', 'Consistent quality', 'Respect for completed workmanship'],
    },
    process: {
      heading: 'Our Process',
      steps: [
        { title: 'Initial Consultation', text: 'We discuss your project, timeline and cleaning requirements.' },
        { title: 'Site Assessment', text: 'Where appropriate, we inspect the property to understand the scope.' },
        { title: 'Tailored Quote', text: 'You’ll receive a transparent quotation outlining the recommended services.' },
        { title: 'Builders’ Clean', text: 'Our team completes the clean while working carefully around finished surfaces and fixtures.' },
        { title: 'Final Quality Inspection', text: 'Before completion, we review the property to ensure it’s cleaned to our standard.' },
      ],
    },
    faqs: [
      { q: 'When should a builders’ clean be booked?', a: 'Ideally once major construction is complete and the property is ready for final presentation before handover.' },
      { q: 'Can you work around our construction schedule?', a: 'Yes. We understand timelines change and aim to provide flexible scheduling wherever possible.' },
      { q: 'Do you provide cleaning equipment and products?', a: 'Yes. Our team arrives with professional equipment and products suitable for the project.' },
      { q: 'Do you clean both residential and commercial projects?', a: 'Yes — across residential and commercial developments.' },
      { q: 'Can you provide recurring services for multiple projects?', a: 'Absolutely. We’re happy to support builders and developers with ongoing cleaning across multiple projects.' },
    ],
    cta: {
      heading: 'Build Better Partnerships',
      paras: ['Whether you’re completing a custom home, townhouse development or commercial fit-out, our team is ready to support your next project with reliable service, attention to detail and professional communication.'],
    },
  },

  'end-of-lease-cleaning': {
    navLabel: 'End of Lease',
    metaTitle: 'End of Lease Cleaning Melbourne | Atlas',
    metaDescription:
      'Thorough end of lease cleaning for tenants, landlords and property managers — kitchens, bathrooms, living areas and more, ready for final inspection.',
    hero: {
      eyebrow: 'End of Lease Cleaning',
      title: 'End of Lease Cleaning in Melbourne',
      paras: [
        'Moving is stressful enough without having to worry about the cleaning.',
        'Atlas provides thorough end of lease cleaning to help tenants, landlords and property managers prepare properties for final inspections and new occupants — tailored to the size and condition of your property.',
      ],
    },
    intro: {
      heading: 'Leave Your Property Looking Its Best',
      paras: [
        'When you’re moving out, there’s already enough to organise. Our job is to take care of the cleaning so you can focus on everything else.',
        'Every property is different, which is why we tailor each clean to the size and condition of the home — from kitchens and bathrooms to living areas and bedrooms, working through with attention to detail.',
      ],
    },
    included: {
      heading: 'What’s Included?',
      intro: 'Every property is different, but an end of lease clean may include:',
      groups: [
        { title: 'Kitchen', items: ['Benchtops', 'Splashbacks', 'Sink', 'Cupboards (in & out)', 'Oven exterior', 'Rangehood', 'Stove', 'Floors'] },
        { title: 'Bathrooms', items: ['Showers', 'Screens', 'Tiles', 'Mirrors', 'Vanity', 'Toilet', 'Floors'] },
        { title: 'Living Areas & Bedrooms', items: ['Vacuuming', 'Mopping', 'Dusting', 'Skirting boards', 'Window sills', 'Wardrobes', 'Light switches', 'Doors'] },
        { title: 'General Areas', items: ['Cobweb removal', 'Spot cleaning walls', 'Internal windows', 'Tracks & frames', 'Dust removal'] },
      ],
    },
    industries: {
      heading: 'Who We Help',
      intro: 'Our end of lease cleaning suits:',
      items: ['Tenants moving out', 'Landlords preparing for new tenants', 'Property managers', 'Real estate agencies', 'Homeowners preparing to sell'],
    },
    why: {
      heading: 'Why Choose Atlas?',
      paras: ['We know moving can be overwhelming. Our goal is to make one part of the process easier through reliable service, clear communication and a thorough clean.'],
      checks: ['Transparent quotations', 'Friendly communication', 'Flexible booking times', 'Attention to detail', 'Professional service'],
    },
    process: {
      heading: 'Our Process',
      steps: [
        { title: 'Request a Quote', text: 'Tell us about your property — bedrooms, bathrooms and any extra areas.' },
        { title: 'Receive Your Quote', text: 'We provide a tailored quotation based on size and requirements.' },
        { title: 'We Complete the Clean', text: 'Our team carries out a detailed clean using professional equipment and products.' },
        { title: 'Final Walkthrough', text: 'Before we leave, we complete a final check to ensure a high standard.' },
      ],
    },
    faqs: [
      { q: 'Do I need to be home during the clean?', a: 'No. As long as we can access the property, we can complete the clean while you focus on your move.' },
      { q: 'Do you bring your own equipment?', a: 'Yes. We supply our own professional equipment and products.' },
      { q: 'How long does an end of lease clean take?', a: 'It depends on the size and condition of the property. We’ll estimate when we prepare your quote.' },
      { q: 'Can you clean apartments as well as houses?', a: 'Yes — apartments, units, townhouses and houses of various sizes.' },
    ],
    cta: {
      heading: 'Moving Out?',
      paras: ['We’ll help make your move a little easier with a thorough, reliable end of lease clean. Contact Atlas today to request your free quote.'],
    },
  },

  'strata-cleaning': {
    navLabel: 'Strata Cleaning',
    metaTitle: 'Strata Cleaning Melbourne | Atlas',
    metaDescription:
      'Dependable strata and common-area cleaning for owners corporations, body corporates and property managers across Melbourne.',
    hero: {
      eyebrow: 'Strata Cleaning',
      title: 'Reliable Strata Cleaning Across Melbourne',
      paras: [
        'Keeping apartment buildings and shared spaces clean, tidy and well maintained.',
        'Atlas works with owners corporations, body corporates and property managers to provide dependable strata cleaning tailored to each property — from boutique complexes to multi-storey residential buildings.',
      ],
    },
    intro: {
      heading: 'Keeping Common Areas Clean Matters',
      paras: [
        'The shared spaces in a building are used every day. Entrances, hallways, lifts and stairwells are often the first things residents and visitors notice. Regular cleaning helps create a welcoming environment while protecting the presentation and value of your property.',
        'We work closely with property managers and owners corporations to deliver reliable cleaning with minimal disruption to residents.',
      ],
    },
    included: {
      heading: 'What’s Included?',
      intro: 'Every property is different, so our schedules are tailored to your building.',
      groups: [
        { title: 'Common Areas', items: ['Entrance foyers', 'Hallways', 'Corridors', 'Stairwells', 'Lift areas'] },
        { title: 'Floor Cleaning', items: ['Vacuuming carpets', 'Mopping hard floors', 'Spot cleaning', 'Dust removal'] },
        { title: 'Glass Cleaning', items: ['Entry doors', 'Internal glass', 'Glass balustrades', 'Shared windows'] },
        { title: 'Bin Rooms', text: 'Keeping shared bin areas clean, tidy and hygienic.' },
        { title: 'Shared Facilities', text: 'Communal kitchens, bathrooms, meeting rooms, gyms and other amenities where required.' },
        { title: 'High-Touch Surfaces', items: ['Handrails', 'Lift buttons', 'Door handles', 'Light switches', 'Entry touchpoints'] },
      ],
    },
    industries: {
      heading: 'Who We Work With',
      intro: 'We provide strata cleaning for:',
      items: ['Apartment Buildings', 'Unit Complexes', 'Townhouse Developments', 'Mixed-Use Buildings', 'Owners Corporations', 'Property Managers', 'Body Corporates'],
    },
    why: {
      heading: 'Why Choose Atlas?',
      paras: ['Managing a property comes with enough responsibilities — your cleaning company shouldn’t be another. We aim to become a long-term cleaning partner you can rely on.'],
      checks: ['Reliable scheduled cleaning', 'Clear communication', 'Flexible service plans', 'Attention to detail', 'A team that takes pride in your property'],
    },
    process: {
      heading: 'Our Process',
      steps: [
        { title: 'Tell Us About Your Property', text: 'We discuss your building, the common areas that need attention and your preferred schedule.' },
        { title: 'Site Inspection', text: 'Where required, we visit the property to assess the scope.' },
        { title: 'Tailored Quote', text: 'You’ll receive a cleaning proposal based on your building’s requirements.' },
        { title: 'Ongoing Cleaning', text: 'Our team delivers reliable cleaning to the agreed schedule.' },
      ],
    },
    faqs: [
      { q: 'How often can our building be cleaned?', a: 'Weekly, multiple times a week, or customised to suit your building.' },
      { q: 'Can you clean multiple properties?', a: 'Yes. We work with property managers responsible for multiple buildings.' },
      { q: 'Do you provide all cleaning equipment?', a: 'Yes. Our team supplies professional equipment and products.' },
    ],
    cta: {
      heading: 'Looking for a Reliable Strata Cleaning Partner?',
      paras: ['Whether you’re changing providers or arranging cleaning for a new property, we’d love to help.'],
    },
  },

  'airbnb-cleaning': {
    navLabel: 'Airbnb Cleaning',
    metaTitle: 'Airbnb Cleaning Melbourne | Atlas',
    metaDescription:
      'Fast, reliable Airbnb and short-stay turnaround cleaning that keeps your property guest-ready between every booking.',
    hero: {
      eyebrow: 'Airbnb Cleaning',
      title: 'Airbnb Cleaning That Keeps You Guest-Ready',
      paras: [
        'Fast, reliable cleaning between guest stays.',
        'Running an Airbnb takes time, and every turnaround matters. Atlas helps hosts prepare their property for every new guest with thorough cleaning and attention to detail — whether you manage one property or several short-stay accommodations.',
      ],
    },
    intro: {
      heading: 'Helping You Create Great First Impressions',
      paras: [
        'A clean property can make all the difference to your guest’s experience. Short-stay accommodation requires more than a quick clean — every guest expects a fresh, welcoming space from the moment they arrive.',
        'Our goal is to help you maintain high standards so your guests enjoy their stay and your property is ready for the next booking.',
      ],
    },
    included: {
      heading: 'What’s Included?',
      intro: 'Our Airbnb cleaning service may include:',
      groups: [
        { title: 'Living Areas', items: ['Vacuuming', 'Mopping', 'Dusting', 'Tidying furniture', 'Emptying bins'] },
        { title: 'Kitchen', items: ['Benchtops', 'Sink', 'Splashbacks', 'Appliances', 'Cupboard fronts', 'Floors'] },
        { title: 'Bathrooms', items: ['Shower', 'Toilet', 'Vanity', 'Mirrors', 'Floors'] },
        { title: 'Bedrooms', items: ['Dusting', 'Vacuuming', 'Bed making (if linen provided)', 'Presentation'] },
        { title: 'Final Touches', items: ['Spot checking', 'General presentation', 'Preparing for guest arrival'] },
      ],
    },
    industries: {
      heading: 'Suitable For',
      intro: null,
      items: ['Airbnb Properties', 'Short-Stay Accommodation', 'Holiday Homes', 'Investment Properties'],
    },
    why: {
      heading: 'Why Choose Atlas?',
      paras: ['Airbnb cleaning isn’t just about cleaning — it’s about consistency. When guests walk through the door, they should feel like they’re the first people to stay there.'],
      checks: ['Reliable turnaround cleaning', 'Flexible scheduling', 'Clear communication', 'Attention to detail', 'Ready for your next guest'],
    },
    process: {
      heading: 'Our Process',
      steps: [
        { title: 'Contact Us', text: 'Tell us about your property and your typical booking schedule.' },
        { title: 'Receive a Quote', text: 'We prepare a tailored quote based on your property’s size and requirements.' },
        { title: 'Guest Turnover Cleaning', text: 'We clean and prepare your property between bookings.' },
      ],
    },
    faqs: [
      { q: 'Can cleaning be scheduled between guest bookings?', a: 'Yes. We work around your booking schedule wherever possible.' },
      { q: 'Can you clean multiple Airbnb properties?', a: 'Absolutely.' },
      { q: 'Do I need to provide cleaning equipment?', a: 'No. We bring our own professional equipment and products.' },
    ],
    cta: {
      heading: 'Need a Reliable Airbnb Cleaning Service?',
      paras: ['We’ll help keep your property looking its best so you can focus on hosting.'],
    },
  },

  'childcare-cleaning': {
    navLabel: 'Childcare Cleaning',
    metaTitle: 'Childcare Cleaning Melbourne | Atlas',
    metaDescription:
      'Professional childcare and early-learning cleaning — hygienic, careful and completed outside operating hours to suit your centre.',
    hero: {
      eyebrow: 'Childcare Cleaning',
      title: 'Professional Childcare Cleaning Services',
      paras: [
        'Helping create clean, hygienic environments where children can learn and play.',
        'Atlas provides professional cleaning tailored to childcare centres, kindergartens and early-learning environments — fitting around your daily operations with careful attention to cleanliness, hygiene and consistency.',
      ],
    },
    intro: {
      heading: 'Cleaning That Supports Healthy Learning Environments',
      paras: [
        'Children spend much of their day exploring, playing and learning through hands-on experiences. Maintaining a clean environment helps create a welcoming space for children, educators and families.',
        'We understand the unique needs of early-learning environments and tailor our services to suit each centre.',
      ],
    },
    included: {
      heading: 'What’s Included?',
      intro: 'Our childcare cleaning services may include:',
      groups: [
        { title: 'Classrooms', items: ['Vacuuming', 'Mopping', 'Dusting', 'Tables & chairs', 'Emptying bins'] },
        { title: 'Bathrooms', items: ['Toilets', 'Basins', 'Mirrors', 'Floors', 'High-touch surfaces'] },
        { title: 'Kitchens & Staff Areas', text: 'Benches, sinks, appliances and shared staff facilities.' },
        { title: 'Reception Areas', text: 'Keeping entrances clean and welcoming for families and visitors.' },
        { title: 'Shared Spaces', text: 'Hallways, offices, meeting rooms and common areas.' },
        { title: 'High-Touch Surfaces', items: ['Door handles', 'Light switches', 'Tables', 'Shared furniture', 'Touched surfaces'] },
      ],
    },
    industries: {
      heading: 'Suitable For',
      intro: null,
      items: ['Long Day Care Centres', 'Kindergartens', 'Early Learning Centres', 'Preschools', 'Outside School Hours Care'],
    },
    why: {
      heading: 'Why Choose Atlas?',
      paras: ['With a background in early childhood education, we understand childcare centres are busy environments with their own routines. Our goal is to provide reliable cleaning that supports educators by maintaining clean, organised spaces without disrupting the centre.'],
      checks: ['Reliable service', 'Flexible after-hours cleaning', 'Clear communication', 'Attention to detail', 'Tailored cleaning schedules'],
    },
    process: {
      heading: 'Our Process',
      steps: [
        { title: 'Get in Touch', text: 'Tell us about your centre and cleaning requirements.' },
        { title: 'Site Visit', text: 'We discuss your priorities and inspect the facility if required.' },
        { title: 'Tailored Quote', text: 'You’ll receive a customised proposal based on your centre’s needs.' },
        { title: 'Ongoing Cleaning', text: 'Our team delivers cleaning to the agreed schedule.' },
      ],
    },
    faqs: [
      { q: 'Can cleaning be completed after children have gone home?', a: 'Yes. Most childcare cleaning is completed outside operating hours.' },
      { q: 'Can cleaning schedules be customised?', a: 'Absolutely. Every centre has different needs and routines.' },
      { q: 'Do you supply cleaning products?', a: 'Yes. Our team provides professional equipment and products.' },
    ],
    cta: {
      heading: 'Supporting Your Centre Every Day',
      paras: ['We’re here to help you maintain a clean, welcoming environment for children, educators and families.'],
    },
  },
};
