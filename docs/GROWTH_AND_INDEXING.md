# Search Visibility, Indexing & Growth Plan — OjàPadi Landing

Grounded in 2026 Google Search documentation and current ranking research (sources:
Google Search Central sitemap/ownership docs, Zyppy 2026 ranking-factors expert survey,
Search Engine Land, yellowHEAD/SEO.com factor syntheses, Nigeria local-SEO guides). This file
is the source of truth for getting ojapadicom.vercel.app indexed and ranked, and every item
is either already shipped in this repo or requires an owner action listed at the bottom.

## 1. What actually moves rankings in 2026 (evidence)

Priority-ordered, best-evidence first:

1. **Content relevance + intent alignment** — the page must be the best answer for the query.
2. **Content quality / E-E-A-T** — Trustworthiness is the gating factor. Verifiable claims,
   real business details, first-hand specifics.
3. **Backlinks (quality, not volume)** — links from trusted, thematically relevant sites.
   Nigerian relevance compounds for NG queries.
4. **NavBoost / click data** — Google uses real CTR and click satisfaction from Search
   Console data. Compelling titles/descriptions + rich snippets lift CTR, which compounds.
5. **Freshness** — time-weighted. Date content, update regularly.
6. **Core Web Vitals** — LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1. Confirmed but *smaller than*
   relevance/content/links (confirmed by John Mueller). A tiebreaker you must not lose.
7. **Mobile-first indexing** — mobile content is what gets indexed and ranked.
8. **Schema/AEO** — no direct rank boost, but drives rich results + AI-answer extraction
   (FAQPage pages get ~2.7x the AI citations of non-schema pages). Already shipped.

Non-factors per current evidence: `meta keywords` weight, raw domain age, aggregate
`priority`/`changefreq` sitemap tags.

## 2. Already shipped in this repo (build-time SEO/AEO)

| Signal | Where | Status |
|---|---|---|
| Static per-route HTML head (title, description, canonical, OG, Twitter, robots) | build plugin writes `dist/index.html` + `dist/pricing/index.html` from `src/seo/seo.ts` | Done |
| Full Schema.org `@graph`: SoftwareApplication (offers ₦0/₦5,000/₦15,000), Organization (+contactPoint, address NG, areaServed NG), WebSite, WebPage per route, FAQPage, per-route BreadcrumbList | same plugin + runtime `DynamicJsonLd` (single source, no drift) | Done |
| FAQPage schema text equals visible FAQ text exactly | `FAQ_LIST` drives both section + schema | Done |
| `llms.txt` — agent/AI-crawler brief w/ 10 FAQs | `public/llms.txt` | Done |
| robots.txt allows GPTBot, PerplexityBot, ClaudeBot, Google-Extended etc. | `public/robots.txt` | Done |
| Canonical self-references each route (`/` vs `/pricing`) | seo.ts | Done |
| `og:locale en_NG`, `og:site_name`, `og:image` 1200×630 + width/height/alt, `twitter:*` | seo.ts | Done |
| `robots` meta `index, follow, max-image-preview:large` | seo.ts | Done |
| Absolute sitemap URLs + build-date `lastmod`, only canonical pages indexed (`/`, `/pricing`) | sitemap.xml + build plugin | Done |
| Absolute `Sitemap:` directive in robots.txt | build plugin rewrite | Done |
| Performance: statically rendered smoke-free shell, lazy webp images, `content-visibility`, rAF-throttled handlers, 82 kB gzip JS, 5.7 kB CSS, font `display=swap` | src/ + index.css | Done |
| IndexNow key (Bing/Seznam/Yandex instant indexing) | `public/<key>.txt`, key below | Done |

## 3. Immediate action — Google Search Console (owner, log in first)

Reference: Google Search Central "Verify your site ownership" + "Build and submit a sitemap".

1. Go to https://search.google.com/search-console → **Add property**.
2. Two options:
   - **URL prefix property**: `https://ojapadicom.vercel.app` (or your production domain).
   - **Domain property** (recommended once you own a real domain): requires a DNS TXT record
     at the domain provider. Covers http/https/www/subdomains in one property.
3. Verification method (Vercel-hosted static build supports all of these):
   - **HTML tag** — paste the `<meta name="google-site-verification" content="...">` tag
     into `ojapadi-landing/index.html` inside `<head>` and redeploy. Easiest on Vercel.
   - **HTML file upload** — drop the `google<token>.html` file into `ojapadi-landing/public/`
     and redeploy; served at the exact requested path.
   - **DNS TXT** — only for a Domain property.
4. **Submit the sitemap**: Sitemaps → `sitemap.xml`. (~2 URLs. Google will tell you
   `lastmod` is good since it equals build date.)
5. **URL Inspection → Request indexing** for `https://ojapadicom.vercel.app/` and
   `/pricing` (only if still "not indexed"; after a fresh deploy the pages usually index
   via sitemap within a few days).
6. Settings → verify **country target = Nigeria** (Settings → Country) once production URL
   is a real domain.
7. Confirm **canonical host** (Settings → URL parameters / property): the vercel.app domain
   is temporary — see section 6, the real domain must become canonical.

**Every deploy**: after shipping changes, re-run URL Inspection → Request indexing on the
changed route, or wait for sitemap re-crawl (Google re-crawls sitemap pages; lastmod changed
signals freshness).

## 4. Bing / IndexNow

- **Bing Webmaster Tools**: add site URL, then create a property *from Google Search Console*
  import (one click at webmasters.google... → Bing). Bing fetches the Google sitemap.
- **IndexNow** (Bing/Seznam/Yandex — powers some AI/answer surfaces): key
  `b65da858-67c0-4fa3-b673-72f58a94673a` is already hosted at
  `https://ojapadicom.vercel.app/b65da858-67c0-4fa3-b673-72f58a94673a.txt`.
  After a real deployment, submit once per sitemap URL:
  `curl -X POST https://api.indexnow.org/indexnow -H 'Content-Type: application/json' -d '{"host":"VITE_SITE_URL","key":"b65da858-67c0-4fa3-b673-72f58a94673a","keyLocation":"https://VITE_SITE_URL/b65da858-67c0-4fa3-b673-72f58a94673a.txt","urlList":["https://VITE_SITE_URL/","https://VITE_SITE_URL/pricing"]}'`

## 5. Nigeria local search (Google Business Profile + citations)

Local pack beats organic for "pos for small business near me" queries. Do this even though
OjàPadi is a national product — a claimed, verified profile with Nigeria presence is a
strong entity/trust signal.

1. **Google Business Profile** (business.google.com):
   - Name exactly: **OjàPadi Technologies** (matches site + Organization schema).
   - Category: Primary **Software company**; secondary *"POS software company"* or
     *"Information technology company"* if listed.
   - Service areas: Lagos, Abuja, Kano, Port Harcourt, Ibadan + nationwide.
   - Phone `+234 902 645 4008` (matches site), email `OjàPadi.support@gmail.com`
     (matches schema contactPoint), website = production URL, Naira pricing.
   - Photos: dashboard, receipt, store owner + cashier; respond to every review within 24h.
   - Reviews: after successful onboarding, ask happy founders via WhatsApp for a review
     (see FAQ-6 support flow). Never buy reviews — profile suspension risk.

2. **NAP consistency kit** — use *exactly* this everywhere:
   - Name: OjàPadi Technologies
   - Phone: +234 902 645 4008
   - Email: OjàPadi.support@gmail.com
   - Website: (production URL, currently ojapadicom.vercel.app until domain lands)
   - Description (90 words): "OjàPadi is a 100% offline-first retail POS, inventory and
     customer-credit platform for Nigerian shops with 1 to 6 branches. Record sales,
     track stock on a permanent ledger, send WhatsApp receipts, and stop staff theft —
     all without internet."

3. **Citations** (free listings; do in order): VConnect, Businesslist.com.ng, Ngex
   Yellow Pages (Finelib), Connect Nigeria, Joliba.com.ng, BusinessConnect.com.ng,
   Whogohost Business Directory. Each: exact NAP above, category *Software / Business
   Software*, link to `/pricing` for the offer page.

## 6. Domain — the single highest-leverage fix

`ojapadicom.vercel.app` can technically rank, but a real domain wins on every axis:
anchor-text relevance, entity trust, GEO/E-E-A-T, and Google's domain property. Recommend:

1. Buy `ojapadi.com` (or `ojapadi.com.ng` for the strongest NG geo signal per 2026
   country-level guidance). .com.ng requires CAC/Nigerian entity evidence; pick per CAC status.
2. Add a custom domain on Vercel → auto TLS.
3. Canonical it: Vercel uses the deploy URL only for previews. Set the production domain to
   the real one; add a 301 from the vercel.app alias in the Vercel project settings
   (Project → Settings → Domains → alias → redirect all traffic).
4. GSC Domain property via DNS TXT; re-submit sitemap for the new host.
5. Update `VITE_SITE_URL` in `.env` → rebuild → deploy. Sitemap, canonicals, OG, llms.txt
   URLs all regenerate from it (single source).
6. Create GSC + Bing properties for the new host too; request indexing.

## 7. Backlinks + digital PR (the "underground" work)

One quality Nigerian link is worth more than a hundred spam links. Targets ranked by
relevance × authority for a retail-POS product:

1. **Nigerian tech media** — TechCabal, Techpoint.africa, Technext.ng, Benjamindada,
   Pulse.ng Tech, Nairametrics Tech, Guardian Tech (Nigeria), BusinessDay Tech.
   Pitch angle ≠ "launched an app". Use an evidence hook: "1,000+ Nigerian retail stores
   now record daily sales with zero data — new index-crunching report on offline-first
   retail" or a founder story. Original data (e.g. "what stops shops adopting POS: power +
   data") is the strongest pitch.
2. **Niche/vertical**: retail-tech and fintech newsletters, eCommerce Nigeria,
   SME-focused blogs (startup church, HowNow (Corporate), POVO 's B2B...). Guest post:
   "POS hardware is dying — phone + WhatsApp is the new receipt" on a retail blog.
3. **Listing/review sites**: Product Hunt launch, AlternativeTo, Capterra, G2, GetApp,
   SourceForge. These give evergreen backlinks + review surface.
4. **Community**: Quora answers (r "point of sale software Nigeria"), Reddit r/Nigeria,
   r/smallbusiness, r/entrepreneurs, Nairaland tech/science + business sections,
   Facebook retail-owner groups (marketing co-ops). Always answer-first, link sparingly.
5. **Partnerships**: thermal-printer resellers, POS hardware wholesalers, CAC/startup
   helpdesk content, business-school newsletters. Each partner profile is a citation + link.
6. **HARO/Help-a-B2B-Writer / Qwoted**: respond to retail-tech queries for bylines.
7. After any link earns, find it in GSC → Links report; request indexing if not crawled.

Don't: link farms, paid "₦5k 50 links" panels (they poison the profile), exact-match
anchor spam.

## 8. Content / keyword map (from docs/research-and-seo.md)

| Query (intent) | Surface | Status |
|---|---|---|
| point of sale software nigeria | title, description, hero, FAQ-9, llms.txt | Live |
| inventory management software nigeria | title, description, FAQ-2/3/10, schema featureList | Live |
| pos app for small business nigeria | meta keywords, FAQ-9, testimonials | Live |
| shop management app nigeria | description, FAQ-1/5 | Live |
| stock management software nigeria | description, FAQ-3, pain points | Live |
| retail pos system nigeria | title, FAQ-10, schema | Live |
| offline pos app that works without internet | FAQ-2, FAQ-8, hero copy | Live |
| pos that works during power outage | FAQ-8 (added) | Live |
| app to track customer credit / debt book | FAQ-3/5, social proof | Live |
| how much does pos app cost nigeria | FAQ-7 (added, price-answer-first) | Live |
| can i use a phone as pos for my shop | FAQ-9 (added) | Live |

**Freshness cadence**: quarterly — re-verify claims, update FAQ answers, refresh lastmod
(plugin auto-sets build date). Add new FAQs when customers ask new questions via WhatsApp.

## 9. Monitoring & KPIs

- **Weekly** (first month): GSC Performance → note queries with impressions; CTR spike =
  click data working. Request indexing after each deploy.
- **Monthly**: GSC top-20 queries, average position, CWV in GSC/PSI (LCP < 2.5s, INP <
  200ms, CLS < 0.1); backlink count (GSC Links or free link checkers); Bing index count.
- **Targets (90 days from production-domain deploy)**: `/` + `/pricing` indexed and
  "Submitted and indexed"; ≥ 5 FAQ terms in top-50; ≥ 3 directory citations live;
  1 GB profile verified; ≥ 3 quality backlinks.
- Watch the **AI slug**: Search Labs / Perplexity / ChatGPT browse to `/llms.txt` and
  FAQPage — extraction success there is a leading indicator for answer engines.

## 10. Owner action list (do in order)

1. Log in to GSC → add property → verify (HTML tag or file; or DNS once domain lands) → submit `sitemap.xml` → request indexing for `/` and `/pricing`.
2. Equivalent in Bing Webmaster Tools (import from GSC) + run IndexNow POST (section 4).
3. Buy a real domain (`ojapadi.com` / `.com.ng`), attach in Vercel, 301 the vercel.app alias, set `VITE_SITE_URL`, redeploy.
4. Create + fully verify Google Business Profile (section 5) and fill the 7 directory citations with the exact NAP.
5. Fill `VITE_SOCIAL_INSTAGRAM`, `VITE_SOCIAL_TIKTOK`, `VITE_SOCIAL_FACEBOOK`, `VITE_SOCIAL_TWITTER` in `.env` (currently empty) and redeploy — this powers the Organization `sameAs` entity links in schema, a real E-E-A-T/entity signal.
6. Launch on Product Hunt / AlternativeTo / Capterra; run the 6 backlink plays from section 7.
7. Weekly GSC monitoring per section 9; request indexing after each deploy.

Everything in sections 2, 4 (key file), 5 and the keyword map is already in this codebase —
the remaining work is owner account actions, the production domain, and the backlink plays.