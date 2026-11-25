# Landing production optimisation report

Date: 2026-11-25  
Branch: `feat/landing-production-optimization`

## TRUST gate

- **Promise 6 — offline work synchronizes safely:** marketing now states that initial setup and a valid local session are prerequisites and that pending work retries when the authenticated service is reachable.
- **Promise 9 — the interface remains understandable:** registration is a direct, consistent action from the navbar, hero, floating mobile bar, and final CTA. The obsolete pricing route and blocking launch modal are removed.
- **Evidence:** `npm run build`, `npx tsc --noEmit`, browser tests at 390×844 and 1440×900, and a real navigation from the hero CTA to the configured registration page.
- **Tradeoff refused:** no new SEO landing pages were added while the primary registration path and product claims were unreliable.

## Product truth matrix

| Capability | Application evidence | Responsible landing claim | Status / limitation |
| --- | --- | --- | --- |
| Offline sale capture | `frontend/src/features/sales/sale-processor.ts`; `frontend/src/features/sync/SyncCoordinator.ts` | Core sales can continue after setup during an outage | Requires initial authentication/local session; synchronization requires service reachability |
| Stock history | `supabase/migrations/`; `.agents/rules/offline-sync-and-ledger.md` | Stock figures are tied to append-only movement records | Do not claim mutable stock is impossible to corrupt or call the product “tamper-proof” |
| Customer credit | `customer_credit_movements` in `docs/PRD.md` and migrations | Credit and part-payments are recorded as movements | Avoid “zero forgotten balances” guarantees |
| Digital receipts | `receipts` in `docs/PRD.md`; receipt UI in the frontend | Receipts can be generated and shared through supported apps | WhatsApp availability depends on the device/app; no “zero cost” promise |
| Staff and branch access | `business_memberships`, `user_branches`, `worker_permissions`; RLS rules | Access is scoped by assigned role and branch | Server policy is authoritative; do not promise every cashier action is impossible |
| Multi-branch | `docs/LAUNCH_SCOPE.md`; `docs/PRD.md` | Data model supports businesses with 1–6 branches | Consolidated workflows remain subject to pilot validation |
| Refunds and voids | Locked decision 4 in `AGENTS.md` | Not promoted as offline-capable | Online-only by product rule |
| Payment methods | `.agents/rules/payment-and-pci-scope.md` | Payment method is recorded as a tag | The product does not process card or wallet payments |
| Pricing/subscriptions | No finalized billing architecture; assignment constraint | No price, tier, trial, or free-plan claim | Owner decision and billing implementation required before publication |

## Initial audit

### Critical

- Every registration CTA opened a Coming Soon modal instead of registration.
- `/pricing`, pricing metadata, sitemap entries, guarantees, and `llms.txt` contradicted the commercial constraint.
- `llms.txt` claimed “100% offline,” automatic restoration, anti-theft guarantees, fixed prices, and unsupported setup services.

### High

- JSON-LD declared the software free and advertised an unverified organization name.
- The landing page described device/platform support more broadly than the verified web application.
- Brand text was hardcoded in the wordmark and fallback HTML instead of flowing through configuration.
- `robots.txt` omitted `OAI-SearchBot`, the crawler OpenAI documents for ChatGPT search discovery.

### Medium

- Dead pricing/modal components and styles increased maintenance surface.
- No single registration event shape existed for CTA attribution.
- Security headers were absent from Vercel configuration.

## Completed implementation

- Added `VITE_REGISTRATION_URL`; fallback appends `/register` to `VITE_WEB_APP_URL`.
- Replaced the modal flow with direct navigation for navbar, hero, mobile floating, and final CTAs.
- Emits one `registration_cta_clicked` browser event with a `location` property before navigation. It contains no personal data and never blocks navigation.
- Removed pricing components, pricing route generation, pricing sitemap entry, and commercial structured-data claims.
- Added a permanent `/pricing` → `/` redirect.
- Rewrote feature and FAQ copy against verified product limitations.
- Replaced the speculative `llms.txt` with a factual capability/limitations summary.
- Added `OAI-SearchBot` to `robots.txt` while keeping search and training crawler choices independently configurable.
- Added `nosniff`, clickjacking, referrer, and permissions headers in `vercel.json`.
- Preserved the existing visual system while replacing generic font loading with Manrope/Newsreader and retaining reduced-motion support.

## Registration verification

| Entry point | Source | Result |
| --- | --- | --- |
| Navbar | `Navbar.tsx` | Configured direct registration handler |
| Hero | `HeroSection.tsx` | Browser-tested; reached `https://stockpadi-drab.vercel.app/register` |
| Mobile floating bar | `MobileFloatingBar.tsx` | Same direct handler, location `mobile_floating_bar` |
| Final CTA | `FinalCta.tsx` | Same direct handler, location `final` |

The registration page loaded successfully. Account creation was deliberately not submitted, so no production business or user record was created.

## SEO and discoverability

- Generated HTML contains title, description, canonical, Open Graph, Twitter Card, and a single JSON-LD graph.
- Schema uses `SoftwareApplication`, `Organization`, `WebSite`, `WebPage`, `FAQPage`, and `BreadcrumbList` without `Offer`, ratings, prices, or `isAccessibleForFree`.
- Sitemap now contains only the canonical homepage.
- Google recommends useful, reliable, people-first content and notes that meta-keyword stuffing and sitemap submission do not guarantee indexing: <https://developers.google.com/search/docs/fundamentals/seo-starter-guide>.
- Bing recommends canonical-only sitemaps and IndexNow when URLs are added, updated, or removed: <https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a>.
- OpenAI distinguishes `OAI-SearchBot` (search visibility) from `GPTBot` (potential model training): <https://developers.openai.com/api/docs/bots>.

### Keyword-to-page map

| Intent hypothesis | Page | Status |
| --- | --- | --- |
| Offline POS for Nigerian shops | Homepage | Implemented accurately with setup/session limitations |
| Inventory and stock movement tracking | Homepage features | Implemented |
| Customer debt record app | Homepage features/FAQ | Implemented |
| Daily sales record for small shops | Future practical guide | Research before publishing |
| Retail stock-taking template | Future downloadable guide | Research and merchant validation required |

## Performance and accessibility verification

- Production build: passed.
- Build output: HTML 2.10 kB (0.98 kB gzip), CSS 30.71 kB (6.79 kB gzip), JS 372.45 kB (126.76 kB gzip).
- Responsive browser checks: 390×844 and 1440×900, with no horizontal overflow.
- Mobile navigation exposes descriptive open/close labels; FAQ controls expose `aria-expanded`; images include dimensions; reduced-motion CSS remains enabled.
- Automated Lighthouse values are recorded below when the local audit completes. Lab values are not field Core Web Vitals.
- Manual screen-reader and physical low-end Android testing remain required before claiming full WCAG 2.2 AA conformance.

## 30/60/90-day organic roadmap

### First 30 days

- Set the branded canonical domain and `VITE_SITE_URL`.
- Verify Google Search Console and Bing Webmaster Tools ownership, submit the one-URL sitemap, and inspect the canonical homepage.
- Connect one lightweight analytics provider to the existing registration event; measure CTA clicks separately from completed registrations.
- Interview 5–8 merchants and record the exact language used for missing stock, unrecorded sales, and customer debt.

### Days 31–60

- Publish one source-backed guide for daily sales recording and one for customer debt records only after merchant review.
- Add crawlable internal links from the homepage and update the sitemap.
- Implement privacy-safe registration-completion attribution in the main app only after separate approval.
- Earn relevant links through Nigerian retail/SME communities and useful merchant education, not paid backlinks.

### Days 61–90

- Compare Search Console query/page data with CTA locations and activated businesses.
- Improve or retire content based on impressions, qualified visits, and activation—not raw page count.
- Consider IndexNow when the site has regularly updated content; a one-page static site does not justify premature automation.

## Blocked or requires owner approval

- Configure production `VITE_REGISTRATION_URL=https://stockpadi-drab.vercel.app/register` and `VITE_SITE_URL` in Vercel.
- The external registration page currently says “sell offline forever.” Correcting that main-app copy requires a separately approved application change.
- Search Console, Bing Webmaster Tools, DNS, analytics, and production preview access were not available in this repository session.
- No production deployment or merge was performed.
