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

  // ⬇⬇  FORMSPREE FORM IDs  ⬇⬇
  // Just the id from the endpoint URL (the part after /f/), not the whole URL.
  //
  // Quote / inquiry form → this id:
  formspreeId: 'mrenvplk',
  //
  // Careers popup → same inbox as quotes for now (go-live). To split careers
  // into p.montalvan@icloud.com later, create a second Formspree form pointed
  // at that address and swap this id.
  careersFormspreeId: 'mrenvplk',
};

export const careersMailto =
  `mailto:${site.careersEmail}` +
  `?subject=${encodeURIComponent('Career Inquiry — Executive Parking')}`;

export const contactMailto = `mailto:${site.email}`;

export const formspreeAction = `https://formspree.io/f/${site.formspreeId}`;

export const careersFormspreeAction = `https://formspree.io/f/${site.careersFormspreeId}`;
