import {
  FaqItem,
  PainPointItem,
  FeatureItem,
} from '../types';
import { getBusinessName } from '../config/env';

const brand = getBusinessName();
const brandDisplay = brand;

export const HERO_CONTENT = {
  headlinePrefix: 'The offline POS & stock app',
  headlineHighlight: 'built for your shop.',
  description:
    'After setup, keep recording sales during an outage, track stock movements, and review your day from your phone.',
  primaryCta: 'Create your account',
  secondaryCta: 'How it works',
  microcopy: 'No payment card data collected • Mobile-first • Offline sales after setup',
  trustBadges: [
    'Offline-first sales',
    'No special hardware required',
    'Digital receipt sharing',
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
    tag: 'STOCK HISTORY',
    title: 'Traceable stock movements',
    copy: 'Sales and stock adjustments create movement records, so owners can follow how a stock figure was produced.',
    highlight: 'Built around an append-only movement ledger.',
    image: '/feature-inventory.webp',
    colorKey: 'blue',
    accentColor: '#1d63d8',
    pillBg: 'rgba(29, 99, 216, 0.08)',
    pillBorder: 'rgba(29, 99, 216, 0.22)',
  },
  {
    id: 'feat-receipts',
    tag: 'RECEIPTS',
    title: 'Shareable digital receipts',
    copy: 'Create a digital receipt and share it through supported apps, including WhatsApp when available on the device.',
    highlight: 'Keep a receipt record without relying on a printer.',
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
    copy: 'Record customer credit and part-payments in a movement history instead of relying on loose paper notes.',
    highlight: 'Balances remain tied to their recorded movements.',
    image: '/feature-credit.webp',
    colorKey: 'amber',
    accentColor: '#92400e',
    pillBg: 'rgba(180, 83, 9, 0.08)',
    pillBorder: 'rgba(180, 83, 9, 0.22)',
  },
  {
    id: 'feat-multibranch',
    tag: 'MULTI-BRANCH',
    title: 'Built for 1 to 6 branches',
    copy: 'The product supports branch-scoped staff access and business-wide records, subject to role and pilot validation.',
    highlight: 'Branch access is controlled by assigned permissions.',
    image: '/feature-branch.webp',
    colorKey: 'purple',
    accentColor: '#7c3aed',
    pillBg: 'rgba(124, 58, 237, 0.08)',
    pillBorder: 'rgba(124, 58, 237, 0.22)',
  },
];

export const FINAL_CTA_CONTENT = {
  headline: 'Give every sale a proper record.',
  description: `Create your ${brandDisplay} account, set up your shop, and keep sales, stock movements, and customer credit in one place.`,
  primaryCta: 'Create your account',
  microcopy: 'No payment card data collected • Mobile-first • Guided setup',
  image: '/cta-bottom-phone.svg',
};

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
      `${brandDisplay} is a web app designed for modern phones, tablets, and laptops. A compatible browser and an internet connection are needed for initial setup and synchronization.`,
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
    question: 'Where can I confirm current access and pricing?',
    answer:
      'Commercial packaging is not yet published on this website. Create an account to begin registration, and contact the team if you need current access information.',
  },
];
