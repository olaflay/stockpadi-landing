# StockPadi Landing — Customer & SEO Research

Source: competitor landing pages (Kasuwa 360, Moniebook, SwiftPOS, Moniepoint,
PiperSoft, FigoBooks) + web searches on Nigerian retail POS/inventory terms.

## Who the customer is

- Retail shop owner in Nigeria, 1 to 6 branches (provisions store, supermarket,
  pharmacy, boutique, wholesale).
- Works on an Android phone; store often has weak/unstable network; NEPA light
  cuts are normal.
- Story high-touch, cash-heavy; inventory tracked in a paper ledger or a
  disconnected Excel sheet.
- Fears: staff theft, cashier tampering, unreconciled cash at close, forgotten
  customer credit.

## Customer needs (in priority order — matches hero copy)

1. **Offline-first.** Every competitor sells this; it's the #1 differentiator.
   "Works when network drops / light cuts."
2. **Money "disappearing"/shrinkage.** Track exactly what was sold and who owes.
3. **Debt / credit book.** Recording what people owe, and reminders.
4. **Real stock quantities.** No manual "current qty" field to corrupt.
5. **Multi-branch.** Owner sees all branches, cashier sees only their till.
6. **No hardware lock-in / no expensive terminal.** Bring-your-own printer.

## What people actually search (SEO keyword surface)

Primary short-tail (high volume, high intent — target in H1/hero + meta):

- `point of sale software nigeria`
- `inventory management software nigeria`
- `pos app for small business nigeria`
- `shop management app nigeria`
- `stock management software nigeria`
- `retail pos system nigeria`

Secondary long-tail (lower volume, higher conversion — use in FAQ/H2s):

- `offline pos app that works without internet`
- `pos that works during power outage`
- `app to track customers that owe me money`
- `multi branch pos software nigeria`
- `price list software for retail store`
- `inventory app for provisions store`
- `how to track stock shrinkage`
- `barcode scanner app warehouse nigeria`

## Key insight (why this wins)

Competitors lead with *hardware* (buy our printer, sign a terminal lease).
StockPadi must NEVER do that — it's the reverse. Lead with the *ledger +
offline + debt book*. Hardware is a "bring your own", never a selling point.

## Copy blueprint for the rewritten page

- **Hero:** "The simplest way to record sales & manage stock." + trust badge
  "100% offline-first • Free forever tier • No hardware lock-in". (already in
  code — kept)
- **Navbar (compulsory only):** How it works · Features · Pricing · FAQ ·
  Login · Start free. **Drop Hardware**.
- **No receipt/printer copy anywhere.** Keep only: send receipt directly to
  customer (WhatsApp / on-screen), debt book. That matches what's actually
  implemented.
- **Footer (communication only):** About, support email, socials, Lagos •
  Ibadan • Abuja • Kano. Drop hardware/printer/hardware-support columns.

### Keywords to embed naturally

- "offline" / "works without internet" / "when network drops" → hero, FAQ 1.
- "credit" / "who owes me" / "debt book" → features, FAQ 3.
- "multi-branch" / "multiple shops" → features, FAQ 4, pricing Pro.
- "no hardware lock-in" / "bring your own printer" → hero badge, FAQ 2.
- "free forever" → pricing, FAQ 5.
- "import" / "CSV" / "Excel" → FAQ 6.

## Schema/SEO content currently in code (verified)

- `DynamicJsonLd` renders Product/FAQ/SoftwareApplication JSON-LD — kept.
- Navbar = brand + How it works + Features + Hardware + Pricing + FAQ + Login
  + Start free. **Hardware link must be removed.**
- Footer PRODUCT column has "Thermal printer" / "Shop 58mm printer" /
  Hardware & Support column — **all removed**, communication-only remains.
