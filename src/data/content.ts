import {
  TestimonialItem,
  FaqItem,
  PainPointItem,
  FeatureItem,
  PricingPlan,
} from '../types';
import { getBusinessName } from '../config/env';

const brand = getBusinessName();
const brandDisplay = brand === 'OjaPadi' ? 'OjàPadi' : brand;

export const HERO_CONTENT = {
  headlinePrefix: 'The offline POS & stock app',
  headlineHighlight: 'built for your shop.',
  description:
    'Works 100% offline. Record sales in seconds, stop missing stock, and see your daily profit on any phone.',
  primaryCta: 'Start free',
  secondaryCta: 'How it works',
  microcopy: 'No bank card required • Free forever • Start selling in 2 minutes',
  trustBadges: [
    '100% offline',
    '0% hardware',
    'WhatsApp receipts',
  ],
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

export const CORE_FEATURES: (FeatureItem & {
  colorKey: 'blue' | 'green' | 'amber' | 'purple';
  accentColor: string;
  pillBg: string;
  pillBorder: string;
})[] = [
  {
    id: 'feat-inventory',
    tag: 'ANTI-THEFT',
    title: 'Tamper-Proof Stock',
    copy: 'Stock moves only when sales occur. Cashiers cannot delete records, alter counts, or edit prices.',
    highlight: 'Locked with staff name & timestamp.',
    image: '/feature-inventory.webp',
    colorKey: 'blue',
    accentColor: '#1d63d8',
    pillBg: 'rgba(29, 99, 216, 0.08)',
    pillBorder: 'rgba(29, 99, 216, 0.22)',
  },
  {
    id: 'feat-receipts',
    tag: 'RECEIPTS',
    title: 'WhatsApp Receipts',
    copy: 'Send instant digital receipts directly to customer WhatsApp. Zero paper, zero printer cost.',
    highlight: '1-tap send with your shop name.',
    image: '/feature-receipt.webp',
    colorKey: 'green',
    accentColor: '#15803d',
    pillBg: 'rgba(21, 128, 61, 0.08)',
    pillBorder: 'rgba(21, 128, 61, 0.22)',
  },
  {
    id: 'feat-credit',
    tag: 'DEBT BOOK',
    title: 'Customer Debt Ledger',
    copy: 'Track customer credit, record part-payments, and send polite WhatsApp reminders in one tap.',
    highlight: 'Zero forgotten customer balances.',
    image: '/feature-credit.webp',
    colorKey: 'amber',
    accentColor: '#b45309',
    pillBg: 'rgba(180, 83, 9, 0.08)',
    pillBorder: 'rgba(180, 83, 9, 0.22)',
  },
  {
    id: 'feat-multibranch',
    tag: 'MULTI-BRANCH',
    title: '1 to 6 Shops, One Phone',
    copy: 'Check live sales, cash-in-hand, and low stock across all branches without traveling.',
    highlight: 'Owner view with private staff PINs.',
    image: '/feature-branch.webp',
    colorKey: 'purple',
    accentColor: '#7c3aed',
    pillBg: 'rgba(124, 58, 237, 0.08)',
    pillBorder: 'rgba(124, 58, 237, 0.22)',
  },
];

export const FINAL_CTA_CONTENT = {
  headline: 'Start recording sales in 2 minutes.',
  description: `No complicated setup or training needed. Open ${brandDisplay} on your phone, add your products, and record your first sale right away.`,
  primaryCta: 'Start free',
  secondaryCta: 'View plans',
  microcopy: 'No bank card required • Free forever • Start selling in 2 minutes',
  image: '/cta-bottom-phone.svg',
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-free',
    name: 'Free Plan',
    price: '₦0',
    cadence: '/ forever',
    subtitle: '1 shop with up to 75 products. 100% free to start.',
    features: [
      '1 store branch (1 till)',
      '100% offline, works without data',
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
      'Before, cashiers would sell items at higher prices and pocket the difference. Now selling prices are locked, receipts go straight to customer WhatsApp, and daily balancing takes under 5 minutes.',
    name: 'Alhaji Musa Garba',
    role: 'MD, Garba Provisions',
    location: 'Kano (3 Branches)',
    avatarBg: 'var(--color-brand-accent)',
    initials: 'MG',
  },
  {
    id: 't-2',
    quote:
      `When our shop network fails or NEPA takes light, ${brandDisplay} never stops. My staff keep selling, scanning barcodes, and issuing receipts without skipping a beat.`,
    name: 'Folashade Adeleke',
    role: 'Founder, Shade’s Mart',
    location: 'Ikeja, Lagos',
    avatarBg: '#1a7f3c',
    initials: 'FA',
  },
  {
    id: 't-3',
    quote:
      `I run 3 supermarket branches in Abuja. With ${brandDisplay}, I know exactly what each branch sold and the cash in the drawer by 8pm without making a single call.`,
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
    question: 'Does it work when the internet is completely down?',
    answer:
      `Yes. You can record sales, scan barcodes, and issue receipts with zero data. Everything syncs to our secure cloud automatically the moment you reconnect.`,
  },
  {
    id: 'faq-2',
    question: 'Do I need to buy a POS machine or special hardware?',
    answer:
      `No expensive hardware needed. ${brandDisplay} runs directly on any normal Android phone, tablet, or laptop. Digital receipts go straight to customer WhatsApp with one tap.`,
  },
  {
    id: 'faq-3',
    question: 'Can staff delete sales or change prices without my permission?',
    answer:
      'No. Cashier PINs lock your selling prices and prevent staff from editing or deleting transactions. Only the store owner can adjust stock or view profit margins.',
  },
  {
    id: 'faq-4',
    question: 'What happens if my phone gets lost or stolen?',
    answer:
      'You never lose your records. Your data is backed up to the cloud. Just log in on any new phone or computer, and your entire catalog, sales, and debt book are right there.',
  },
  {
    id: 'faq-5',
    question: 'Can I track multiple branches on one account?',
    answer:
      'Yes. Monitor daily sales, cash in drawer, and stock levels across up to 6 store branches right from your phone, without calling your attendants.',
  },
  {
    id: 'faq-6',
    question: 'How much does it cost, and is there a free plan?',
    answer:
      'The Free Plan is ₦0 forever for 1 shop with up to 75 products (no credit card needed). Paid plans start at ₦5,000/month for unlimited products, multiple branches, and staff PINs.',
  },
];
