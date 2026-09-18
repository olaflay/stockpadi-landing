import {
  TestimonialItem,
  FaqItem,
  PainPointItem,
  FeatureItem,
  PersonaStoryItem,
  PricingPlan,
} from '../types';

export const HERO_CONTENT = {
  headlinePrefix: 'The simplest way to',
  headlineHighlight: 'record sales & manage stock.',
  description:
    'StockPadi helps retail businesses record sales offline, print receipts, track customer credit, and know daily net profit across 1 to 6 branches.',
  primaryCta: 'Start for free',
  secondaryCta: 'See how it works',
  trustBadge: '100% offline-first • Free forever tier • No proprietary hardware lock-in',
};

export const SOCIAL_PROOF_AVATARS = {
  leftPillars: [
    { name: 'Kano Provision', city: 'Kano', tag: 'Supermarket', growth: '+34%' },
    { name: 'Ikeja Boutique', city: 'Lagos', tag: 'Fashion', growth: '+₦420k' },
    { name: 'Wuse Pharmacy', city: 'Abuja', tag: 'Pharmacy', growth: '100% sync' },
    { name: 'Bodija Store', city: 'Ibadan', tag: 'General Store', growth: '2 tills' },
  ],
  rightPillars: [
    { name: 'Surulere Mart', city: 'Lagos', tag: 'Mini Mart', growth: '3 branches' },
    { name: 'Garki Electronics', city: 'Abuja', tag: 'Electronics', growth: '1.2k SKUs' },
    { name: 'Ring Road Grocers', city: 'Ibadan', tag: 'FMCG', growth: 'Zero errors' },
    { name: 'Alaba Wholesale', city: 'Lagos', tag: 'Wholesale', growth: '58mm print' },
  ],
  headline: 'Join 1,000+ retail stores that closed today knowing exactly what they made.',
  ctaText: 'Start your store free',
};

export const PAIN_POINTS: PainPointItem[] = [
  {
    id: 'pain-1',
    badge: 'MISSING CASH & DISCREPANCIES',
    title: 'Records that take hours to reconcile at night',
    description:
      'Paper receipts get lost, calculator figures don’t match physical cash in the till, and closing shop becomes a two-hour argument every evening.',
    quote: 'Before StockPadi, my cashier and I spent every evening arguing over missing cash.',
  },
  {
    id: 'pain-2',
    badge: 'UNTRACKED SHRINKAGE',
    title: 'Stock you thought you still had on the shelf',
    description:
      'Items leave without being logged. By the time you notice, weeks have passed and nobody knows who took it or when the price changed.',
    quote: 'I used to lose over ₦150,000 every month to untracked stock leakage.',
  },
  {
    id: 'pain-3',
    badge: 'NETWORK DOWNTIME',
    title: 'Sales made during power or network cuts that were never recorded',
    description:
      'When the network drops or the generator stutters, online-only POS apps freeze. Cashiers rush mental math and transactions vanish into thin air.',
    quote: 'When the network died, our previous app stopped working. StockPadi never blinks.',
  },
];

export const CORE_FEATURES: FeatureItem[] = [
  {
    id: 'feat-inventory',
    tag: 'IMMUTABLE LEDGER',
    title: 'Smart offline inventory',
    copy: 'Stock decreases only when a real sale or verified adjustment happens. Every single carton, unit, or bottle is accounted for.',
    highlight: 'Calculates true quantity from verified sales, preventing cashier tampering.',
  },
  {
    id: 'feat-receipts',
    tag: 'OPEN BLUETOOTH PRINTING',
    title: 'Instant receipts on any printer',
    copy: 'Works with any standard 58mm or 80mm ESC/POS thermal printer. Also share digital receipts directly to customer WhatsApp.',
    highlight: 'Connects directly to Android, iPhone, and Windows without cords or internet.',
  },
  {
    id: 'feat-credit',
    tag: 'CUSTOMER DEBT BOOK',
    title: 'Credit ledger & reminders',
    copy: 'Never forget who owes you. Track customer credit balances, record partial payments, and issue printable account statements.',
    highlight: 'Zero guesswork on outstanding debts. One-tap WhatsApp balance reminders.',
  },
  {
    id: 'feat-multibranch',
    tag: '1 TO 6 BRANCHES',
    title: 'Multi-branch visibility',
    copy: 'Check revenue, cash breakdown, and stock levels across all your branch locations from your phone without calling your attendants.',
    highlight: 'Consolidated owner overview plus branch-scoped staff PIN logins.',
  },
];

export const PERSONA_STORIES: PersonaStoryItem[] = [
  {
    id: 'persona-supermarket',
    eyebrow: 'SUPERMARKET & PROVISIONS',
    label: 'Know your fastest-moving items',
    description:
      'See which biscuits, beverages, and household items bring the real profit. Auto-generate reorder lists before you run out of stock.',
    metricLabel: 'Daily sales volume',
    metricValue: '280+ transactions/day',
  },
  {
    id: 'persona-multistore',
    eyebrow: 'MULTI-BRANCH OWNER',
    label: 'Track 1 to 6 shops from one screen',
    description:
      'Compare branch performances in real time. Cashiers only see their till; you see the entire business revenue and margins.',
    metricLabel: 'Owner visibility',
    metricValue: 'Real-time sync on reconnect',
  },
  {
    id: 'persona-boutique',
    eyebrow: 'BOUTIQUE & ELECTRONICS',
    label: 'Scan barcodes & serial numbers',
    description:
      'Speed up checkout with instant smartphone camera barcode scanning. Tag payments as Cash, Transfer, or POS card terminal.',
    metricLabel: 'Checkout speed',
    metricValue: 'Under 15 seconds per customer',
  },
];

/* StockPadi's Official 3 Simple Plans (From docs/BUSINESS-MODEL-AND-ROADMAP.md) */
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-free',
    name: 'Free Plan',
    price: '₦0',
    cadence: '/ forever',
    subtitle: 'For 1 shop with up to 75 products. Perfect to get your store organized with zero risk.',
    features: [
      '1 store location (1 till)',
      'Up to 75 products in catalog',
      '100% offline-first checkout',
      'Digital WhatsApp & on-screen receipts',
      'Customer debt book & credit tracking',
      'Camera barcode scanning on your phone',
      'Daily end-of-day sales summary',
    ],
    ctaText: 'Start free',
  },
  {
    id: 'plan-pro',
    name: 'Pro Plan',
    badge: 'MOST POPULAR FOR RETAIL',
    price: '₦5,000',
    cadence: '/ month',
    subtitle: 'Full anti-theft protection and multi-branch management for growing retail stores.',
    isPopular: true,
    features: [
      'Up to 3 branches (independent stock per branch)',
      'Unlimited products & barcode lookups',
      'Separate Cashier vs Owner PIN logins',
      'Real Net Profit & Loss reports (Sales - Cost - Expenses)',
      'Anti-theft stock audit trail (who changed stock & why)',
      'Low stock & product expiry date alerts',
      '1-tap WhatsApp customer debt reminders',
      'Works with ANY 58mm/80mm Bluetooth printer',
      'Excel & CSV data export for accounting',
    ],
    ctaText: 'Upgrade to Pro',
  },
  {
    id: 'plan-enterprise',
    name: 'Enterprise Plan',
    badge: 'FOR CHAINS & LARGE STORES',
    price: '₦15,000',
    cadence: '/ month',
    subtitle: 'For busy supermarkets, multi-location pharmacies, and chains with 4 to 6 outlets.',
    features: [
      'Up to 6 branches on 1 unified owner dashboard',
      'Inter-branch stock transfers with digital waybill',
      'Store logo & custom branding on all receipts',
      'Priority VIP WhatsApp onboarding & setup support',
      'Advanced cashier permission controls & till limits',
      'Supplier purchase order management',
      'Automated daily cloud backups',
    ],
    ctaText: 'Contact Enterprise',
  },
];

/* Open Hardware Philosophy (Never proprietary lock-in) */
export const HARDWARE_SHOWCASE = {
  tag: 'BRING YOUR OWN PRINTER',
  headline: 'Works with any thermal printer. No hardware lock-in.',
  subheadline:
    'StockPadi connects over Bluetooth or USB to any standard 58mm or 80mm ESC/POS printer. You never need to buy a ₦400,000 computer or an overpriced proprietary terminal.',
  bulletPoints: [
    'Standard ESC/POS Bluetooth protocol (works with any market printer)',
    'Runs directly on Android phones, iPhones, tablets, and Windows PCs',
    'Instant WhatsApp digital receipt option for paperless customers',
    'No monthly hardware rental fees or mandatory terminal leases',
    'Rechargeable 58mm thermal printers available from ₦25,000 anywhere in Nigeria',
  ],
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    quote:
      'The sales and profit reports changed everything for me. Products I assumed were my biggest winners were actually losing me money after transport costs. Now I stock what actually yields profit.',
    name: 'Alhaji Musa Garba',
    role: 'Managing Director, Garba Provisions & Supermarket',
    location: 'Kano (3 Branches)',
    avatarBg: 'var(--color-brand-accent)',
    initials: 'MG',
  },
  {
    id: 't-2',
    quote:
      'I was tired of apps that would freeze the moment our shop WiFi dropped or PHCN took light. StockPadi never stops. My cashiers record sales in seconds and print receipts without thinking twice.',
    name: 'Folashade Adeleke',
    role: 'Founder, Shade’s FMCG Mart',
    location: 'Ikeja, Lagos',
    avatarBg: '#1a7f3c',
    initials: 'FA',
  },
  {
    id: 't-3',
    quote:
      'Before StockPadi, my staff could secretly adjust prices or hide sold items in our old ledger book. The immutable stock movements ledger put an end to all stories. My numbers now balance to the last kobo.',
    name: 'Emeka Okafor',
    role: 'CEO, Prime Line Menswear & Accessories',
    location: 'Wuse 2, Abuja',
    avatarBg: '#b3261e',
    initials: 'EO',
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Do I need an active internet connection to record sales?',
    answer:
      'No. StockPadi is built offline-first from the ground up. You can record sales, look up items, issue receipts, and adjust inventory without any network connection. When your phone reconnects to 2G, 3G, 4G, or WiFi, queued sales upload automatically.',
  },
  {
    id: 'faq-2',
    question: 'Do I have to buy a specific printer from StockPadi?',
    answer:
      'No. StockPadi does not lock you into proprietary hardware. The app connects wirelessly over Bluetooth to ANY standard 58mm or 80mm ESC/POS thermal printer you already own. You can also start without any printer and send receipts directly to customer WhatsApp.',
  },
  {
    id: 'faq-3',
    question: 'How does StockPadi prevent cashiers from manipulating numbers?',
    answer:
      'Stock quantity and customer balances are derived from an immutable, append-only ledger. Cashiers cannot edit past records, delete transactions, or alter product prices without a manager or owner authorization PIN. Every action is permanently recorded in the audit log.',
  },
  {
    id: 'faq-4',
    question: 'Can I manage more than one shop or branch?',
    answer:
      'Yes. The Pro plan supports up to 3 branches, and the Enterprise plan supports up to 6 branches under a single business account. Staff are restricted to their branch till, while the owner sees unified numbers across all stores.',
  },
  {
    id: 'faq-5',
    question: 'What is the price of StockPadi after the free plan?',
    answer:
      'The Free Plan is free forever for 1 shop with up to 75 products. When your business grows, the Pro Plan is just ₦5,000 per month for unlimited products and up to 3 branches. There are zero hidden fees or sales transaction cuts.',
  },
  {
    id: 'faq-6',
    question: 'Can I import my existing product list from Excel?',
    answer:
      'Yes. StockPadi features a simple CSV bulk import tool. You can upload your catalog with names, barcodes, categories, and initial stock quantities in one click.',
  },
];
