// ============================================================
//  Site-wide contact details & links — edit here, applies everywhere.
// ============================================================

export const site = {
  name: 'PAM Executive Parking',

  // Main contact inbox (Contact section + general inquiries)
  email: 'p.montalvan@executiveparkingpb.com',

  // Careers / employment inquiries route to a separate inbox
  careersEmail: 'p.montalvan@icloud.com',

  phone: '(561) 377-7704',
  phoneHref: 'tel:+15613777704',

  address: {
    street: '700 S Rosemary',
    city: 'West Palm Beach, Florida 33401',
  },

  // ⬇⬇  FORMSPREE PLACEHOLDER  ⬇⬇
  // 1. Create a free form at https://formspree.io
  // 2. Replace YOUR_FORM_ID below with your endpoint id (e.g. "xroadelp")
  // The inquiry form posts here. Until replaced, submissions won't deliver.
  formspreeId: 'YOUR_FORM_ID',
};

export const careersMailto =
  `mailto:${site.careersEmail}` +
  `?subject=${encodeURIComponent('Career Inquiry — Executive Parking')}`;

export const contactMailto = `mailto:${site.email}`;

export const formspreeAction = `https://formspree.io/f/${site.formspreeId}`;
