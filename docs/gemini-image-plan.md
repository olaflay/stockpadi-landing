# StockPadi Landing — Gemini Image Generation Plan

Bar: figobooks.com. Quality target = crisp, high-contrast, product-only
screens. Nothing fake. Nothing decorative.

## Hard rules (non-negotiable)

1. **No receipt photos.** No paper receipts, no thermal rolls, no printer,
   no hands holding receipts.
2. **No women, no faces, no people.** Products and screens only alert. People
   models dilute trust; they also mismatch real users (shop owners, not models).
3. **No payment content.** No cards, no POS terminal, no money transfer
   splash, no "PAY" buttons, no bank logos.
4. **No random cards.** No generic credit cards / gift cards / reward cards.
5. **One UI / Realistic, not illustrative.** No 3D cartoon, no glassmorphism,
   no neon gradients. Flat, real device frames, real screen UI.

## Aspect ratio inventory (all images)

| # | File name | Location | Aspect | Purpose |
|---|---|---|---|---|
| 1 | `hero-phone.png` | Hero | 9:16 (phone portrait) | App dashboard on a phone, tilted slightly, soft surface shadow |
| 2 | `feature-inventory.png` | Features | 3:4 | Inventory/ledger screen close-up, no printer |
| 3 | `feature-credit.png` | Features | 3:4 | Debt book / customer balances screen close-up |
| 4 | `feature-branch.png` | Features | 3:4 | Multi-branch overview screen close-up |
| 5 | `og-cover.png` | SEO/social share | 16:9 | StockPadi brand cover, logo + tagline, no product demo |
| 6 | `store-photo-1.png` ... `store-photo-3.png` | Social proof | 3:2 | Real shop interior, no people, Nigerian market context |

## Gemini prompt template

Use consistently. Fill in {SLOT} per image.

```
Generate a high-fidelity, realistic product user-interface screenshot for a
Nigerian retail point-of-sale mobile app called StockPadi.

STYLE:
- Flat modern UI, high contrast, readable at small size
- Follow Samsung One UI / Material 3 tonal design (neutral surfaces, one
  brand accent color, deep green)
- Real device frame (modern smartphone), soft realistic drop shadow, plain
  light studio background — NO 3D cartoon, NO glassmorphism, NO neon
- Photorealistic rendering, 4k detail

CONTENT: {SLOT}

BANNED (must not appear anywhere):
- No paper receipts or receipt printers
- No people, no hands, no faces, no women
- No credit/debit cards, no POS terminal, no bank logos, no payment splashes
- No random decorative cards

OUTPUT: single clean image, no text watermark, no logo watermark.
```

### Slot fillers

1. hero: `A single home screen showing today's sales total, number of
   transactions, low-stock alerts, and a green "New Sale" button. Language
   header reads "StockPadi".`
2. feature-inventory: `Inventory list screen with product names, current stock
   quantities, barcode/scan icons, and one line highlighted as "low stock".`
3. feature-credit: `Customer debt book screen listing customer names, owed
   amounts in naira (₦), and a green "Remind" button. No amounts with
   punctuation errors; use plain denominations like N 5,000.`
4. feature-branch: `Multi-branch overview with 3 store tiles showing sales and
   stock per branch and a green "+ Add Branch" button.`
5. og-cover: `Clean brand cover: deep green background, white "StockPadi" wordmark
   centered, short tagline "Record sales. Manage stock anywhere." No product
   demo, no phone.`
6. store-photo-N: `Photorealistic interior of a small Nigerian grocery /
   provisions store, neatly stacked shelves, no people visible, natural window
   light, shallow depth of field.`

## WHERE images get used in code

Every image consumes a slot in `src/data/content.ts` via a key like
`image: 'hero-phone.png'`. No new component required; swap the existing
mockup references in `HeroSection.tsx` / `FeaturesSection.tsx` /
`SocialProof.tsx`.

## After generation (QA checklist)

- [ ] Run every image through the banned-content check: any receipt, person,
      card, or printer = regenerate.
- [ ] Verify aspect ratio matches table above.
- [ ] Naira amounts look real (₦ / N prefix, no decimals on whole figures).
- [ ] Brand accent is the deep green; no stray colors.
- [ ] Files placed in `public/` and referenced by filename only (no base64).
