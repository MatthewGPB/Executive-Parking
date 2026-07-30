# PAM Executive Parking

Luxury private valet website for Palm Beach & South Florida. Built with [Astro](https://astro.build) — static output, ready for Vercel / GitHub.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel: **New Project → Import** the repo.
3. Vercel auto-detects Astro. Leave the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. Point your domain (`executiveparkingpb.com`) at the project.

## Things to finish (marked in code)

1. **Formspree (contact form).** Open `src/data/site.js` and replace
   `formspreeId: 'YOUR_FORM_ID'` with your real Formspree endpoint id
   (create a free form at https://formspree.io). Until then the form shows a
   reminder instead of sending.

2. **Upload the image files.** All media now loads from this repo rather than
   the Shopify CDN. Drop the renamed files into `public/images/`,
   `public/images/slideshow/`, and `public/video/` — each folder has a
   README.txt listing exactly which filenames it expects.

   Every path lives in one file: **`src/data/images.js`**. If an image needs a
   different name or extension, change it there once.

   That file also has a `USE_LOCAL_IMAGES` switch at the top. Set it to `false`
   to fall back to the old Shopify CDN images if anything goes wrong.

3. **Legal links.** The footer's Terms / Privacy / Designation Form links still
   point at the existing live pages. Update the hrefs in
   `src/components/Footer.astro` once those pages move to the new host.

## Contact details

All emails, phone, and the Formspree id live in one file: **`src/data/site.js`**.

- General / contact inbox: `p.montalvan@executiveparkingpb.com`
- Careers inbox (nav + footer): `p.montalvan@icloud.com`
- Phone: (561) 377-7704

## Structure

```
src/
  data/site.js              ← contact info + Formspree id (edit here)
  data/images.js            ← every image/video path + CDN fallback switch
  layouts/Layout.astro      ← head, Google tag (G-9S3QH05DZP), fonts, nav, footer
  components/
    Nav.astro               ← fixed nav + working mobile menu
    Footer.astro
    Testimonials.astro      ← responsive envelope carousel
    QuoteForm.astro         ← inquiry form (#quote)
    ArrivalDivider.astro    ← "Continue the arrival" motif
    JourneyCTA.astro        ← shared closing CTA
    CarLineArt.astro        ← framed car artwork (SVG fallback if no image)
    Slideshow.astro         ← 5-image closing slideshow
  pages/
    index.astro             ← homepage
    about-us.astro
    services.astro
```
