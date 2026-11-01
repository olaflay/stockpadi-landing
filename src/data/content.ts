import {
  FaqItem,
  PainPointItem,
  FeatureItem,
  PricingPlan,
} from '../types';
import { getBusinessName } from '../config/env';

const brand = getBusinessName();
const brandDisplay = brand;

export const HERO_CONTENT = {
  headlinePrefix: 'The offline POS & stock app',
  headlineHighlight: 'built for your shop.',
  description:
    'After setup, keep recording sales during an outage, track stock movements, and review your day from your phone.',
  primaryCta: 'Start free',
  secondaryCta: 'How it works',
  microcopy: 'No payment card data collected • Mobile-first • Offline sales after setup',
  trustBadges: [
    'Offline-first sales',
    'No special hardware required',
    'WhatsApp receipts',
  ],
  image: '/hero-phone.webp',
};

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
  microcopy: 'No payment card data collected • Mobile-first • Guided setup',
  image: '/cta-bottom-phone.svg',
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-pilot',
    name: 'Pilot access',
    price: 'Contact us',
    cadence: '',
    subtitle: 'Plan limits and paid packaging are being validated with pilot merchants.',
    features: [
      'Offline sales after authenticated setup',
      'Append-only stock movement history',
      'WhatsApp & digital receipts',
      'Customer credit & debt book',
      'Owner-controlled data export',
    ],
    ctaText: 'Request pilot access',
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Does it work when the internet is completely down?',
    answer:
      `After initial setup and while the local session remains valid, core sales can continue without an active connection. Pending work remains visible and retries when the authenticated service is reachable.`,
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
      'Roles and server-side authorization restrict sensitive actions. Access depends on the assigned role, capability, branch, and authenticated server policy.',
  },
  {
    id: 'faq-4',
    question: 'What happens if my phone gets lost or stolen?',
    answer:
      'Synchronized records can be recovered from the service, and authorized owners can export local data. Unsynchronized work exists only on its device, so pending work and recovery actions remain visible.',
  },
  {
    id: 'faq-5',
    question: 'Can I track multiple branches on one account?',
    answer:
      'The product data model supports businesses with 1 to 6 branches. Consolidated workflows remain subject to role, branch, synchronization, and pilot validation.',
  },
  {
    id: 'faq-6',
    question: 'How much does it cost, and is there a free plan?',
    answer:
      'Commercial limits and paid packaging are being validated with pilot merchants. Contact the team for current pilot terms; the app does not collect customer card details.',
  },
];
