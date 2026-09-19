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
    'Works 100% offline. Record sales in seconds, stop staff theft, and know your daily profit on your phone.',
  primaryCta: 'Start free',
  secondaryCta: 'How it works',
  image: '/hero-phone.webp',
};

export const SOCIAL_PROOF_CARDS = [
  {
    id: 'sp-1',
    title: 'Kano Provision Store',
    location: 'Kano State',
    highlight: '₦340k daily sales recorded with zero data',
    subtext: '3 checkout counters synced automatically when back online.',
    tag: 'Supermarket',
    image: '/store-photo-1.webp',
  },
  {
    id: 'sp-2',
    title: 'Ikeja Fashion Boutique',
    location: 'Lagos',
    highlight: 'Zero stock missing in 6 months',
    subtext: 'Every piece scanned before leaving the counter.',
    tag: 'Fashion & Retail',
    image: '/feature-inventory.webp',
  },
  {
    id: 'sp-3',
    title: 'Wuse Multi-Branch Mart',
    location: 'Abuja (3 Branches)',
    highlight: 'Track 3 branches without calling attendants',
    subtext: 'See sales and cash in hand for each branch right on your phone.',
    tag: 'Multi-Branch',
    image: '/feature-branch.webp',
  },
];

export const PAIN_POINTS: PainPointItem[] = [
  {
    id: 'pain-1',
    title: 'Missing Cash at Closing',
    description:
      'Your sales book says one amount, your drawer has another. Finding where the money went takes hours.',
    quote: 'Cash that never balances at the end of the day',
    badge: 'Missing Cash',
    image: '/how-it-works-ledger.webp',
  },
  {
    id: 'pain-2',
    title: 'Items Gone From Shelves',
    description:
      'Cartons finish before you realize. You don’t know if staff sold it, gave it out, or took it.',
    quote: 'Goods finish and nobody knows who took them',
    badge: 'Missing Stock',
    image: '/how-it-works-shelves.webp',
  },
  {
    id: 'pain-3',
    title: 'Rush Hour & Unwritten Debts',
    description:
      'When customers rush the counter or take goods on credit, writing it on paper is too slow. Money is lost.',
    quote: 'Sales forgotten when the shop gets busy',
    badge: 'Rush Hour',
    image: '/how-it-works-market.webp',
  },
];

export const CORE_FEATURES: FeatureItem[] = [
  {
    id: 'feat-inventory',
    tag: 'ANTI-THEFT STOCK',
    title: 'Staff Cannot Alter Stock',
    copy: 'Stock only reduces when a sale is recorded. Attendants cannot edit quantities, delete sales, or change prices.',
    highlight: 'Every sale is locked with cashier name and time.',
    image: '/feature-inventory.webp',
  },
  {
    id: 'feat-receipts',
    tag: 'DIGITAL RECEIPTS',
    title: 'Instant WhatsApp Receipts',
    copy: 'Send clean digital receipts directly to customer WhatsApp. Zero paper or printer ink needed.',
    highlight: 'One tap to send receipt with your store name.',
  },
  {
    id: 'feat-credit',
    tag: 'DEBT BOOK',
    title: 'Customer Credit & Debt Book',
    copy: 'Write down who owes you, record part-payments, and send polite WhatsApp reminders with one tap.',
    highlight: 'Never forget who owes your shop money.',
    image: '/feature-credit.webp',
  },
  {
    id: 'feat-multibranch',
    tag: 'MULTI-BRANCH',
    title: 'Manage 1 to 6 Shops on One Phone',
    copy: 'Check daily sales, cash in hand, and low stock across all your branches without traveling.',
    highlight: 'Owner dashboard with private staff PINs.',
    image: '/feature-branch.webp',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-free',
    name: 'Free Plan',
    price: '₦0',
    cadence: '/ forever',
    subtitle: '1 shop with up to 75 products. 100% free to start.',
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
    subtitle: 'Stop staff theft and track multiple branches from your phone.',
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
      'Cashiers can no longer change prices or delete sales from the till. Every kobo and item is accounted for at closing time.',
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
