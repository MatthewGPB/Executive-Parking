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

2. **Line-art car images.** `about-us` and `services` currently use a built-in
   gold SVG car (`src/components/CarLineArt.astro`) as a stand-in. To use the
   original artwork, drop the image into `/public` (e.g. `/public/car.png`) and
   replace `<CarLineArt ... />` with
   `<img src="/car.png" alt="..." class="car-frame" />` on those pages.

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
  layouts/Layout.astro      ← head, Google tag (G-9S3QH05DZP), fonts, nav, footer
  components/
    Nav.astro               ← fixed nav + working mobile menu
    Footer.astro
    Testimonials.astro      ← responsive envelope carousel
    QuoteForm.astro         ← inquiry form (#quote)
    ArrivalDivider.astro    ← "Continue the arrival" motif
    JourneyCTA.astro        ← shared closing CTA
    CarLineArt.astro        ← gold SVG car placeholder
  pages/
    index.astro             ← homepage
    about-us.astro
    services.astro
```
