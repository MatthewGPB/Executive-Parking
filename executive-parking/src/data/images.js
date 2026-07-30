// ============================================================
//  MEDIA PATHS — every image & video on the site, in one place.
//
//  HOW THIS WORKS
//  --------------
//  Set USE_LOCAL_IMAGES below:
//
//    true   → images load from /public/images/ in this repo   (recommended)
//    false  → images load from the old Shopify CDN            (fallback)
//
//  Keep it `false` until the renamed image files are actually uploaded
//  into /public/images/, THEN flip it to `true` and redeploy.
//  While it's `false` the site looks exactly like it does now (Shopify CDN),
//  so uploading this code cannot break anything.
//  If anything looks wrong after switching, flip it back to `false` —
//  the site instantly returns to the Shopify CDN images.
// ============================================================

export const USE_LOCAL_IMAGES = true;

const CDN = 'https://cdn.shopify.com/s/files/1/0710/5658/8961/files';

// ---- Local files (expected in /public/…) --------------------
const local = {
  logo:          '/images/logo-nav.png',
  emblem:        '/images/emblem-arrival.png',
  emblemContact: '/images/emblem-contact.png',
  social:        '/images/social-share.png',

  experience: '/images/home-experience.jpg',
  story:      '/images/home-story.jpg',
  service:    '/images/home-service.jpg',
  clients:    '/images/home-clients.jpg',
  team:       '/images/home-team.jpg',

  aboutCar:    '/images/about-car.png',
  servicesCar: '/images/services-car.png',

  heroVideo: '/video/hero.mp4',

  slides: [
    '/images/slideshow/slide-01.jpg',
    '/images/slideshow/slide-02.jpg',
    '/images/slideshow/slide-03.jpg',
    '/images/slideshow/slide-04.jpg',
    '/images/slideshow/slide-05.jpg',
  ],
};

// ---- Original Shopify CDN files (fallback) ------------------
const cdn = {
  logo:          `${CDN}/PAM_14.png?v=1776435560`,
  emblem:        `${CDN}/PAM_PARKING_1.png?v=1773273940`,
  emblemContact: `${CDN}/PAM_PARKING.png?v=1772504766`,
  social:        `${CDN}/IMG_8881.png?height=628&pad_color=ffffff&v=1772504707&width=1200`,

  experience: `${CDN}/image_33.jpg?v=1772032594`,
  story:      `${CDN}/image_44.jpg?v=1773271363`,
  service:    `${CDN}/image_47.jpg?v=1773271748`,
  clients:    `${CDN}/image_45.jpg?v=1773271517`,
  team:       `${CDN}/image_46.jpg?v=1773271749`,

  // The car artwork was never reachable on the CDN — in fallback mode the
  // pages draw the built-in gold SVG car instead.
  aboutCar:    null,
  servicesCar: null,

  heroVideo: 'https://cdn.shopify.com/videos/c/o/v/749d09e799244337b693f68975c1979a.mp4',

  // Slideshow images were JS-loaded on Shopify; no CDN URLs available.
  // In fallback mode the slideshow section simply doesn't render.
  slides: [],
};

export const media = USE_LOCAL_IMAGES ? local : cdn;

// Alt text, kept next to the paths so it stays in sync.
export const alt = {
  logo:          'PAM Executive Parking',
  emblemContact: 'Executive Parking — contact us',
  experience:    'The best valet experience in South Florida',
  story:         'Executive Parking — our story',
  service:       'Executive Parking — our service',
  clients:       'Executive Parking — our clients',
  team:          'Executive Parking — the team',
  aboutCar:      'PAM Executive Parking — luxury valet',
  servicesCar:   'PAM Executive Parking — luxury valet services',
};
