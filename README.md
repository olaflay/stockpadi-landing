# OjàPadi Landing Page

The high-converting, offline-first marketing landing page for **OjàPadi** (Point of Sale & Inventory Management for retail businesses in Nigeria and emerging markets).

Modeled with precision after the spatial orientation, motion cadence, and conversion psychology of modern SaaS landing pages, while deeply grounded in **OjàPadi's PRD, multi-tenant business model, and strict design rules** (Samsung One UI thumb reach, sentence case, zero AI slop, WCAG AA).

---

## Key Highlights

- **100% Standalone Repository**: Completely separated from the main OjàPadi web app codebase.
- **Ultra-Fast & Zero Bloat**: Built with Vite + React 19 + TypeScript. Production bundle is < 50kB gzipped.
- **FigoBooks Spatial Rhythm**:
  - Sticky glassmorphic blur navbar with mobile drawer.
  - Interactive hero stage with scroll-linked receipt emergence.
  - Tilting merchant social proof avatar pillars.
  - Dark `#080B18` high-contrast problem card stack.
  - 4-column architecture feature grid.
  - Persona story showcases (Supermarkets, Multi-Branch, Boutiques).
  - "No ink. No wires. No excuses." wireless printer demo with interactive test print.
  - 3D interactive testimonial carousel.
  - Pre-sale FAQ accordion.
  - Mobile bottom floating conversion bar.
- **Deep SEO & AEO (Answer Engine Optimization)**:
  - Complete Schema.org JSON-LD (`SoftwareApplication`, `Organization`, `FAQPage`, `BreadcrumbList`).
  - OpenGraph & Twitter Cards optimized for WhatsApp and social shares.
  - Optimized for AI Search bots (Perplexity, ChatGPT, Claude) with BLUF (Bottom-Line Up Front) content structure.
- **Strict Design Standards**:
  - Sentence-case typography (`Bricolage Grotesque` headlines + `Plus Jakarta Sans` body).
  - No generic marketing buzzwords.
  - Real SVG icons (`lucide-react`).

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:3001` in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates a static production bundle in `dist/` ready for instant deployment.

---

## Deploying to Vercel / Netlify / GitHub

This repository is ready to be pushed to its own GitHub repository:

```bash
git add .
git commit -m "feat: initial release of OjàPadi landing page"
git remote add origin https://github.com/your-username/ojapadi-landing.git
git branch -M main
git push -u origin main
```

When importing into Vercel or Netlify:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
