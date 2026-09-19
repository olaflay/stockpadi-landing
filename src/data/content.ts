import {
  TestimonialItem,
  FaqItem,
  PainPointItem,
  FeatureItem,
  PricingPlan,
} from '../types';

export const HERO_CONTENT = {
  headlinePrefix: 'The simplest way to',
  headlineHighlight: 'record sales & manage stock.',
  description:
    'Offline-ready POS for retail stores. Record sales in seconds, prevent stock theft, and see your true daily profit.',
  primaryCta: 'Start free',
  secondaryCta: 'How it works',
  image: '/hero-phone.png',
};

export const SOCIAL_PROOF_CARDS = [
  {
    id: 'sp-1',
    title: 'Kano Provision Store',
    location: 'Kano State',
    highlight: '₦340k daily sales recorded offline',
    subtext: '3 checkout counters synced automatically when back online.',
    tag: 'Supermarket',
    image: '/store-photo-1.png',
  },
  {
    id: 'sp-2',
    title: 'Ikeja Fashion Boutique',
    location: 'Lagos',
    highlight: 'Zero stock shrinkage in 6 months',
    subtext: 'Every item barcode scanned at point of sale.',
    tag: 'Fashion & Retail',
    image: '/feature-inventory.png',
  },
  {
    id: 'sp-3',
    title: 'Wuse Multi-Branch Mart',
    location: 'Abuja (3 Branches)',
    highlight: 'Consolidated owner overview',
    subtext: 'Track revenue per location without calling attendants.',
    tag: 'Multi-Branch',
    image: '/feature-branch.png',
  },
];

export const PAIN_POINTS: PainPointItem[] = [
  {
    id: 'pain-1',
    title: 'Manual Paper Ledgers',
    description:
      'Paper receipts get misplaced and calculator totals don’t match till cash at the end of the day.',
    quote: 'Records that take hours to reconcile',
    badge: 'Discrepancies',
    image: '/how-it-works-ledger.jpg',
  },
  {
    id: 'pain-2',
    title: 'Unnoticed Shelf Stockouts',
    description:
      'Items leave shelves without digital records. Weeks pass before anyone catches stock leakage or missing inventory.',
    quote: 'Stock you thought you still had',
    badge: 'Shrinkage',
    image: '/how-it-works-shelves.jpg',
  },
  {
    id: 'pain-3',
    title: 'Unrecorded Rush Sales & Debts',
    description:
      'When the counter gets busy or customers promise to pay tomorrow, manual paper books fail and revenue vanishes.',
    quote: 'Sales forgotten when the store gets busy',
    badge: 'Unrecorded Sales',
    image: '/how-it-works-market.jpg',
  },
];

export const CORE_FEATURES: FeatureItem[] = [
  {
    id: 'feat-inventory',
    tag: 'IMMUTABLE LEDGER',
    title: 'Offline Inventory Ledger',
    copy: 'Stock decreases only from verified sales or approved adjustments. Zero cashier tampering.',
    highlight: 'True quantity derived from append-only movement logs.',
    image: '/feature-inventory.png',
  },
  {
    id: 'feat-receipts',
    tag: 'DIGITAL RECEIPTS',
    title: 'Instant WhatsApp Receipts',
    copy: 'Send clear digital receipts directly to customer WhatsApp. No paper or printer needed.',
    highlight: 'One-tap digital delivery with store name and date.',
  },
  {
    id: 'feat-credit',
    tag: 'DEBT BOOK',
    title: 'Customer Credit Tracking',
    copy: 'Log customer balances, record part-payments, and send polite WhatsApp payment reminders.',
    highlight: 'Zero forgotten credit. Instant account statements.',
    image: '/feature-credit.png',
  },
  {
    id: 'feat-multibranch',
    tag: 'MULTI-BRANCH',
    title: '1 to 6 Branches in One App',
    copy: 'View revenue, stock levels, and staff sales across all branches from your own phone.',
    highlight: 'Owner dashboard with isolated staff PIN logins.',
    image: '/feature-branch.png',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-free',
    name: 'Free Plan',
    price: '₦0',
    cadence: '/ forever',
    subtitle: '1 store with up to 75 products. Start with zero risk.',
    features: [
      '1 store branch (1 till)',
      '100% offline — works without data',
      'WhatsApp & digital receipts',
      'Customer credit & debt book',
      'Phone camera barcode scan',
    ],
    ctaText: 'Start free',
  },
  {
    id: 'plan-pro',
    name: 'Pro Plan',
    price: '₦5,000',
    cadence: '/ month',
    subtitle: 'Anti-theft protection and multi-branch control for growing stores.',
    isPopular: true,
    features: [
      'Up to 3 store branches',
      'Unlimited products & stock ledger',
      'Owner vs Cashier PINs (anti-theft)',
      'Profit & loss reports & stock alerts',
      'Automatic WhatsApp debt reminders',
    ],
    ctaText: 'Upgrade to Pro',
  },
  {
    id: 'plan-enterprise',
    name: 'Enterprise Plan',
    price: '₦15,000',
    cadence: '/ month',
    subtitle: 'For supermarkets, pharmacies, and retail chains with 4 to 6 outlets.',
    features: [
      'Up to 6 store branches',
      'Inter-branch stock transfers',
      'Custom store logo on receipts',
      'Dedicated priority WhatsApp support',
      'Automated daily cloud backups',
    ],
    ctaText: 'Contact Enterprise',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    quote:
      'The profit reports showed me which items were actually profitable after transport costs. Now I stock what makes money.',
    name: 'Alhaji Musa Garba',
    role: 'MD, Garba Supermarket',
    location: 'Kano (3 Branches)',
    avatarBg: 'var(--color-brand-accent)',
    initials: 'MG',
  },
  {
    id: 't-2',
    quote:
      'When our shop WiFi cuts or power changes, StockPadi never stops. My cashiers record sales and share WhatsApp receipts instantly.',
    name: 'Folashade Adeleke',
    role: 'Founder, Shade’s Mart',
    location: 'Ikeja, Lagos',
    avatarBg: '#1a7f3c',
    initials: 'FA',
  },
  {
    id: 't-3',
    quote:
      'Cashiers can no longer alter prices or hide sold items. The immutable ledger put an end to all discrepancies.',
    name: 'Emeka Okafor',
    role: 'CEO, Prime Line Retail',
    location: 'Wuse 2, Abuja',
    avatarBg: '#0f5132',
    initials: 'EO',
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Do I need a printer or special POS hardware?',
    answer:
      'No expensive hardware needed. StockPadi runs on any standard Android phone, tablet, or laptop. Send instant digital receipts to customer WhatsApp or connect any standard thermal Bluetooth printer.',
  },
  {
    id: 'faq-2',
    question: 'Can I use StockPadi completely offline without data?',
    answer:
      'Yes. StockPadi is 100% offline-first. Record sales, issue receipts, and manage inventory with zero data. Everything syncs to our secure cloud automatically when you reconnect.',
  },
  {
    id: 'faq-3',
    question: 'Can staff alter prices or delete sales behind my back?',
    answer:
      'No. Role-based Cashier PINs prevent staff from modifying prices, deleting past transactions, or viewing your profit margins. Every stock movement is logged permanently.',
  },
  {
    id: 'faq-4',
    question: 'What happens if my phone gets lost or damaged?',
    answer:
      'Your business records are securely backed up. Simply sign in from any new phone or computer to instantly restore all products, sales history, and customer debts.',
  },
  {
    id: 'faq-5',
    question: 'Can I monitor multiple store branches from one place?',
    answer:
      'Yes. Store owners can compare performance, track real-time revenue, and transfer inventory across up to 6 store branches from a single owner dashboard.',
  },
  {
    id: 'faq-6',
    question: 'Can someone help me set up my inventory?',
    answer:
      'Yes. Our team can help you upload your product catalog from Excel or help you configure your store directly via WhatsApp at zero extra cost.',
  },
];
