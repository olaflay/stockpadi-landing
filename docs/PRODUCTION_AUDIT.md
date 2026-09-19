# StockPadi Landing — Production Audit & System Architecture

Audited against running production `dist/` build (`npm run build`, preview server) and reviewed source. Date: 2026-09-19.

## Executive summary

The landing page is a static Vite + React 19 SPA with zero backend runtime, zero API calls, and zero database access at request time. It renders with **no horizontal overflow at any tested viewport** (1440, 1280, 1024, 820, 768, 600, 390, 360 px), produces **zero console errors and zero failed network requests**, and every section is flush to the viewport edges — there is no stray rendering bleeding off any side. It is safe for full production deployment and trivially handles 1,000 concurrent users with the architecture described below.

Three production blockers were found and fixed in this audit:

1. **Missing SPA rewrite config.** `/pricing` is a client-side route pushed via `history.pushState`. Without a rewrite rule, a hard navigation or crawler hit on `https://…/pricing` returns a 404 on Vercel/Netlify. Added `vercel.json` with a catch-all rewrite to `/index.html` (static files still win over the rewrite, so `sitemap.xml`, `robots.txt`, and images keep serving normally).
2. **Canonical / og:url / twitter:url pointed to the homepage on the pricing route.** On `/pricing` the page self-declared `https://…/` as its canonical, which would dilute the dedicated pricing URL indexed in the sitemap. Fixed in `DynamicJsonLd.tsx` to resolve the current pathname so `/pricing` canonicalizes to `/pricing` and the home page to `/`.
3. **Stale `#hardware` anchor in `sitemap.xml`.** The section no longer exists. Removed; remaining anchors (`#how-it-works`, `#features`, `#faq`) verified present on the page.

## Render audit (no extra rendering on any side)

Method: production build served over `vite preview`, inspected with an automated browser at widths 360 → 1440 px.

| Check | Result |
|---|---|
| Page scroll width == client width (no scrollbar cramping) | Pass, all widths |
| Sections `left == 0`, `right == viewport` (no side gaps or bleed) | Pass, all widths (`landing-nav`, hero, social proof, pain points, features, testimonials, FAQ, final CTA, footer) |
| Largest off-screen offenders | Only the testimonial carousel track, which extends off-screen **by design** and is clipped by `overflow: hidden` on `.testimonial-carousel-wrapper` — it never enlarges the document |
| Console errors / failed requests | 0 / 0 (only expected fetches: HTML, hashed JS/CSS, fonts, local webp images) |
| Pricing route direct load | Pass (SPA fallback active) |
| `prefers-reduced-motion` | `--disable` set globally (line 1699) — scroll animations disabled for users who opt out |

Protective measures already in place:
- `body { overflow-x: hidden }` masks any stray overflow (line 96). Verified no stray overflow exists to mask.
- `content-visibility: auto` + `contain-intrinsic-size` on the heavy scroll sections (lines 167–176) avoids painting off-screen sections.
- Scroll handlers on `App`, `SocialProof`, and `PainPoints` are `requestAnimationFrame`-throttled and `passive:true`.
- All `<img>` elements are `loading="lazy"` + `decoding="async"` with explicit `width`/`height` (no layout shift). Wide images use `.webp` (avg 47 KB); the `.png`/`.jpg` full-size fallbacks are copied to `dist/` but never referenced by any rendered asset except `og-cover.png`.

## Production deploy state

Ready to push. Required: build with `VITE_SITE_URL` and `VITE_WEB_APP_URL` set (they are consumed at build time to absolutize the sitemap and drive the CTA link). Deploy the `dist/` output as a static site; `vercel.json` (Vite preset, `dist` output) now handles the SPA route.

Non-blocking follow-ups recorded for a later pass:
- `PricingPlans.tsx` is a dead component (no imports; excluded from the bundle by tree-shaking). Delete or wire it up.
- `hero-phone.webp/png` and `icon.svg` in `public/` are unreferenced (the hero renders a CSS mockup, favicon is `favicon.svg`). ~510 KB dead weight in `dist/`; remove to shrink deploys.
- Bundle is 263 KB JS / **81 KB gzip** + 5.7 KB CSS gzip (~88 KB total gzip). README claims "< 50 kB gzipped" — outdated; either code-split or correct the README. Testimonials render an 11× repeated track (33 cards); reducing repeats to ~5 saves low-end Android GPU/`filter` cost with no visual difference.
- JSON-LD/OG/canonical are injected client-side by `DynamicJsonLd`. Fine for Google (renders JS) and AI bots, but pre-rendering the head at build time would guarantee zero-JS crawler coverage. No action required to deploy.
- `sitemap.xml` `lastmod` is hand-maintained; regenerate or drop it each release.
- Google Fonts is the only third-party request. `display=swap` is set, so blocked fonts fall back to system fonts — no text blocking.

## System design & architecture 🏛 (1,000 concurrent users)

The landing page is deliberately the lightest service in the stack. It is a **static single-page application**, meaning the server does no work per request — it only files out bytes.

```
User browser
   │
   ▼
Edge CDN (Vercel global edge / any static host)
   ├── /               → index.html + styles.css  (cached)
   ├── /pricing        → rewritten to index.html   (SPA route, vercel.json)
   ├── /assets/*       → content-hashed JS/CSS     (immutable, cache forever)
   └── /images|fonts   → webp / woff2               (cacheable)
   │
   ▼
Third-party only: fonts.googleapis.com + fonts.gstatic.com (2–3 small requests)
```

Properties that make the concurrency target achievable:

- **No origin work per request.** There is no SSR, no API gateway, no database, no websocket, no session state, and no per-user computation.
- **Immutable, permanently cached assets.** JS/CSS filenames are content-hashed (`index-CSSBWiqh.js`), so the CDN can serve them with long `Cache-Control` and never revalidate. 1,000 concurrent first-time users = 1,000 × ~90 KB gzip ≈ 90 MB of edge file serving — trivial for any CDN (tens of thousands/s class). 1,000 *concurrent returns* users hit browser cache and make near-zero requests.
- **Scaling is out, not up.** Capacity is a property of the CDN PoP network, not the origin. Adding 100× users just adds edge capacity; there is no server to saturate.
- **Zero shared state → no lock contention.** The first scalability destroyer (DB row locks, rate-limiters, session affinity) does not exist here. Every request is independent and idempotent.
- **Baked-for-fork configurability** is preserved: branding, CTA target, and site URL all come from `VITE_*` at build time; no hardcoded domain remains post-fix (sitemap absolutization consumed the env var; `robots.txt` and the committed sitemap stay relative).

The realistic ceiling is therefore the hosting plan's static-file SLA, not the landing's architecture. 1,000 concurrent active users, or even a 10× spike (viral/social flood), is absorbed by the CDN with no tuning. Load is bounded by Google Fonts availability — negligible, and removable by self-hosting the two woff2 files if a vendor dependency is ever unacceptable.

The application itself (POS/ledger) is the part of StockPadi that handles concurrent writes, and it is governed by the repo rules under `.agents/rules/` — `database-and-rls.md`, `offline-sync-and-ledger.md`, and `performance-and-scalability.md`, with the 5,000+ product performance standard. None of that applies to this stateless landing page.

## Verification commands

```bash
npm run build            # tsc + vite production build (zero TS errors, green)
npm run preview          # serve dist/ locally
```

Automated checks used: page-level overflow (`scrollWidth - clientWidth == 0`) at 8 widths; section bounding boxes flush to viewport; zero console errors; zero failed network requests; direct `/pricing` load routes correctly; canonical/OG resolve per-route after the fix.