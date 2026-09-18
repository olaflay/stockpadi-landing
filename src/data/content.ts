import {
  TestimonialItem,
  FaqItem,
  PainPointItem,
  FeatureItem,
  PersonaStoryItem,
} from '../types';

export const HERO_CONTENT = {
  headlinePrefix: 'The simplest way to',
  headlineHighlight: 'record a sale & track stock.',
  description:
    'StockPadi helps retail businesses record sales offline, print instant thermal receipts, track customer credit, and know daily net profit across 1 to 6 branches.',
  primaryCta: 'Start for free',
  secondaryCta: 'See how it works',
  trustBadge: 'Built for Nigerian retail • 100% offline-first • Zero monthly hardware fee',
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
    tag: 'WIRELESS PRINTING',
    title: 'Instant Bluetooth receipts',
    copy: 'Hand customers a clean, professional 58mm or 80mm thermal receipt in two seconds. Also share directly to WhatsApp.',
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

export const HARDWARE_BUNDLE = {
  tag: 'STOCKPADI STARTER BUNDLE',
  headline: 'No ink. No wires. No excuses.',
  subheadline:
    'Your customer receives a clean printed receipt in seconds. Your stock records update simultaneously. Works 100% offline.',
  price: '₦55,000',
  priceDetail: 'one-time printer purchase + 1 year cloud sync included',
  includedItems: [
    '58mm portable Bluetooth thermal printer (rechargeable lithium battery)',
    'Sample rolls of high-contrast thermal receipt paper',
    'USB-C charging cable & power adapter',
    '1 year of advanced StockPadi cloud sync & multi-branch reporting',
    'Dedicated WhatsApp onboarding assistance within 24 hours',
  ],
  freeTierNote:
    'Already have a phone? You can start with the free StockPadi app right now with digital receipts. Add physical printing whenever you are ready.',
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    quote:
      'The sales and profit reports changed everything for me. Products I assumed were my biggest winners were actually losing me money after transport costs. Now I stock what actually yields profit.',
    name: 'Alhaji Musa Garba',
    role: 'Managing Director, Garba Provisions & Supermarket',
    location: 'Kano (3 Branches)',
    avatarBg: '#2234FD',
    initials: 'MG',
  },
  {
    id: 't-2',
    quote:
      'I was tired of apps that would freeze the moment our shop WiFi dropped or PHCN took light. StockPadi never stops. My cashiers record sales in seconds and print receipts without thinking twice.',
    name: 'Folashade Adeleke',
    role: 'Founder, Shade’s FMCG Mart',
    location: 'Ikeja, Lagos',
    avatarBg: '#16A34A',
    initials: 'FA',
  },
  {
    id: 't-3',
    quote:
      'Before StockPadi, my staff could secretly adjust prices or hide sold items in our old ledger book. The immutable stock movements ledger put an end to all stories. My numbers now balance to the last kobo.',
    name: 'Emeka Okafor',
    role: 'CEO, Prime Line Menswear & Accessories',
    location: 'Wuse 2, Abuja',
    avatarBg: '#EA580C',
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
    question: 'Do I need to purchase a printer before using StockPadi?',
    answer:
      'No. You can download and start using StockPadi immediately on your smartphone or computer for free. You can issue digital WhatsApp receipts or show on-screen receipts. The ₦55,000 Bluetooth thermal printer is optional and can be added whenever your store wants physical paper receipts.',
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
      'Yes. StockPadi supports 1 to 6 branches under a single business account. Staff can be restricted to their assigned branch till, while the owner enjoys a unified dashboard showing total revenue and branch-by-branch comparisons.',
  },
  {
    id: 'faq-5',
    question: 'How fast is delivery for the Bluetooth thermal printer bundle?',
    answer:
      'Printer deliveries typically arrive within 24 hours in Lagos and Ibadan, and 2 to 3 business days in Abuja, Kano, Port Harcourt, and other states. Our support team contacts you via WhatsApp to assist with setup the moment you order.',
  },
  {
    id: 'faq-6',
    question: 'Can I import my existing product list from Excel?',
    answer:
      'Yes. StockPadi features a simple CSV bulk import tool. You can upload your catalog with names, barcodes, categories, and initial stock quantities in one click.',
  },
];
