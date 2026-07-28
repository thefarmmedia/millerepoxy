# Miller's Epoxy Solutions LLC — Website

A static, no-build-step marketing site for Miller's Epoxy Solutions LLC
(Decatur, IL). Plain HTML/CSS/JS — no framework, no bundler. Open any
`.html` file in a browser, or serve the folder with any static host.

## Structure

```
index.html                             Home
about.html                             About TJ Miller
services.html                          Services (flake, solid color, garage/commercial)
gallery.html                           Project gallery
contact.html                           Contact / free quote form
decatur-epoxy-flooring.html            Location page — Decatur, IL (HQ)
springfield-il-epoxy-flooring.html     Location page — Springfield, IL
champaign-urbana-epoxy-flooring.html   Location page — Champaign & Urbana, IL
mattoon-illinois-epoxy-flooring.html   Location page — Mattoon, IL
central-illinois-epoxy-flooring.html   Location page — Central Illinois (region hub)
404.html                               Not-found page
assets/css/styles.css                  All styles
assets/js/main.js                      Mobile nav toggle, scroll shadow, footer year, contact form handler
robots.txt / sitemap.xml               SEO basics (update the domain if it differs from millersepoxysolutions.com)
```

## Before you launch — things left as placeholders

1. **Logo** — the header/footer currently use a CSS/SVG dot-mark approximation
   of the brand, not the real circular chrome-and-blue logo. Drop the real
   logo file into `assets/images/`, then swap the `.brand-mark` SVG for an
   `<img>` tag in every page's header/footer (or ask for it to be done for you).
2. **Photos** — every photo slot (hero, about, service cards, gallery) is a
   gradient placeholder with a text label. Replace with real jobsite photos.
3. **Testimonials** — the review cards on `index.html` are placeholders
   marked with a yellow "swap this" note. Replace with real customer quotes.
4. **Contact form** — `contact.html`'s form currently just shows a client-side
   "thanks" message; it is not wired to an inbox. Connect it to Formspree,
   a `mailto:` action, a CRM webhook, or your booking tool of choice.
5. **Map embed** — `contact.html` has a placeholder where a Google Maps embed
   should go once you're comfortable publishing a public address.
6. **Verify facts** — service-area copy, warranty terms, and process steps
   were written from published info about the business; double-check details
   like warranty terms and service radius before publishing.

## Business info baked into the site

- Miller's Epoxy Solutions LLC, founded 2024, owner TJ Miller
- Decatur, IL 62526 · (217) 521-4188 · millepoxyllc@gmail.com
- Facebook: https://www.facebook.com/p/Millers-Epoxy-Solutions-LLC-61568597266206/
- Service area: Decatur, Springfield, Champaign, Urbana, Savoy, Mattoon, Central Illinois
