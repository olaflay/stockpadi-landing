# FigoBooks Landing Page Reference

This directory stores the official full-page design reference captured from [FigoBooks](https://figobooks.com/), which serves as our layout, spatial orientation, and kinetic choreography baseline ("copy like an artist, not verbatim") for the **StockPadi** landing page.

---

## Reference Assets

* **Full Page PDF**: [figobooks-landing-reference.pdf](file:///c:/Users/ADMIN/Desktop/stockpadi/stockpadi-landing/docs/figobooks-landing-reference.pdf) (8.1 MB) — Complete 6-page high-resolution vector and raster render of the entire website.
* **Overview Screenshot**: [figobooks-landing-reference.png](file:///c:/Users/ADMIN/Desktop/stockpadi/stockpadi-landing/docs/figobooks-landing-reference.png) (124 KB) — Panoramic vertical screenshot of the full landing page.

---

## Section-by-Section Mapping: FigoBooks Reference vs. StockPadi

| Page / Section | FigoBooks Reference | StockPadi Implementation | Key Difference / Adaptation |
|---|---|---|---|
| **Page 1: Hero & Stage** | Headline ("The simplest way to record a sale") + Hardware emergence stage | [HeroSection.tsx](file:///c:/Users/ADMIN/Desktop/stockpadi/stockpadi-landing/src/components/HeroSection.tsx) | Sentence-case typography, interactive test print button with realistic Nigerian grocery receipt items (Golden Penny, Dangote, Peak Milk). |
| **Page 1: Social Proof** | "Join 500+ businesses..." + Tilting grid of store photos | [SocialProof.tsx](file:///c:/Users/ADMIN/Desktop/stockpadi/stockpadi-landing/src/components/SocialProof.tsx) | "Join 1,000+ retail stores..." with dual tilting merchant pillars from Lagos, Ibadan, Abuja, and Kano with growth metrics. |
| **Page 2: Pain Points** | "You're probably losing money you don't know about" + 3 dark problem cards | [PainPoints.tsx](file:///c:/Users/ADMIN/Desktop/stockpadi/stockpadi-landing/src/components/PainPoints.tsx) | Dark `#0b0f12` M3 container with borderless tonal quotation callouts highlighting night reconciliation disputes, stock shrinkage, and network downtime. |
| **Page 3: Core Features** | "Running a business used to mean guessing, not knowing" + 4 column cards | [FeaturesSection.tsx](file:///c:/Users/ADMIN/Desktop/stockpadi/stockpadi-landing/src/components/FeaturesSection.tsx) | M3 filled borderless tonal cards: Immutable Ledger, Open Bluetooth Receipts, Debt Book, and 1 to 6 Multi-Branch Visibility. |
| **Page 3: Business Model / Pricing** | Proprietary ₦55,000 Figo Mini hardware bundle card | [PricingPlans.tsx](file:///c:/Users/ADMIN/Desktop/stockpadi/stockpadi-landing/src/components/PricingPlans.tsx) | **Strictly StockPadi's own pricing**: Free ₦0 forever, Pro ₦5,000/mo, Enterprise ₦15,000/mo. No mandatory hardware lease or lock-in. |
| **Page 4: Personas / Story** | "The New Selling Experience" merchant photo gallery | [ExperienceStory.tsx](file:///c:/Users/ADMIN/Desktop/stockpadi/stockpadi-landing/src/components/ExperienceStory.tsx) | Tailored retail vertical showcases: Supermarket/Provisions, Multi-Branch Owners, and Fashion/Electronics Boutiques. |
| **Page 4: Hardware Showcase** | "No ink. No wires. No excuses." | [HardwareSection.tsx](file:///c:/Users/ADMIN/Desktop/stockpadi/stockpadi-landing/src/components/HardwareSection.tsx) | Open Hardware philosophy: Works with **ANY** 58mm/80mm ESC/POS Bluetooth thermal printer or smartphone camera. |
| **Page 5: Testimonials** | "From people who tried it" + card deck | [Testimonials.tsx](file:///c:/Users/ADMIN/Desktop/stockpadi/stockpadi-landing/src/components/Testimonials.tsx) | Interactive review carousel with merchant initials, previous/next controls, and pagination indicators. |
| **Page 5: FAQ** | "A few useful answers" accordion | [FaqSection.tsx](file:///c:/Users/ADMIN/Desktop/stockpadi/stockpadi-landing/src/components/FaqSection.tsx) | Pre-sale accordion with animated disclosure, matching visible copy with dynamic Schema.org JSON-LD for search and AI answer engines. |
| **Page 6: Final CTA** | "Five minutes from now." card with phone visual | [FinalCta.tsx](file:///c:/Users/ADMIN/Desktop/stockpadi/stockpadi-landing/src/components/FinalCta.tsx) | High-contrast emerald closing card with rapid 2-minute onboarding call-to-action. |
| **Page 6: Footer** | 4-column directory with giant "Figobooks" watermark | [Footer.tsx](file:///c:/Users/ADMIN/Desktop/stockpadi/stockpadi-landing/src/components/Footer.tsx) | Dynamic links driven by environment variables, legal notices, and giant watermark. |

---

## Technical Standards Retained
- **M3 Tonal Design**: Borderless filled surfaces using tonal luminance steps rather than heavy strokes.
- **Dynamic Configuration**: All links, domains, contact channels, and branding are powered by `import.meta.env` (zero hardcoded domains).
- **High Performance**: `content-visibility: auto; contain-intrinsic-size: 1px 700px;` and `requestAnimationFrame` 60fps scroll loop.
