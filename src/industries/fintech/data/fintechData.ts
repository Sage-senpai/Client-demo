/* ═══════════════════════════════════════════════════
   KASH — Fintech / Neobank Data Layer
   ═══════════════════════════════════════════════════ */

// ── Transaction Types ──
export interface Transaction {
  id: number;
  desc: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  type: 'credit' | 'debit';
}

export const transactions: Transaction[] = [
  { id: 1, desc: 'Salary Deposit — Apex Technologies', amount: 850000, date: '2025-01-15', status: 'completed', type: 'credit' },
  { id: 2, desc: 'Netflix Subscription', amount: 4900, date: '2025-01-15', status: 'completed', type: 'debit' },
  { id: 3, desc: 'Transfer to Amaka O.', amount: 25000, date: '2025-01-14', status: 'completed', type: 'debit' },
  { id: 4, desc: 'Shoprite — Groceries', amount: 18750, date: '2025-01-14', status: 'completed', type: 'debit' },
  { id: 5, desc: 'Freelance Payment — Dribbble Client', amount: 320000, date: '2025-01-13', status: 'completed', type: 'credit' },
  { id: 6, desc: 'Uber Ride — VI to Lekki', amount: 3200, date: '2025-01-13', status: 'completed', type: 'debit' },
  { id: 7, desc: 'Airtime Purchase — MTN', amount: 5000, date: '2025-01-12', status: 'completed', type: 'debit' },
  { id: 8, desc: 'Investment Return — Kash Vault', amount: 42500, date: '2025-01-12', status: 'completed', type: 'credit' },
  { id: 9, desc: 'Transfer from Emeka C.', amount: 150000, date: '2025-01-11', status: 'completed', type: 'credit' },
  { id: 10, desc: 'Electricity Bill — IKEDC', amount: 15000, date: '2025-01-11', status: 'pending', type: 'debit' },
  { id: 11, desc: 'Jumia — Electronics', amount: 67800, date: '2025-01-10', status: 'completed', type: 'debit' },
  { id: 12, desc: 'Rent Transfer — Landlord', amount: 400000, date: '2025-01-10', status: 'completed', type: 'debit' },
  { id: 13, desc: 'Refund — Amazon Order #4821', amount: 12300, date: '2025-01-09', status: 'completed', type: 'credit' },
  { id: 14, desc: 'Spotify Premium', amount: 2900, date: '2025-01-09', status: 'completed', type: 'debit' },
  { id: 15, desc: 'Transfer to Savings Goal', amount: 100000, date: '2025-01-08', status: 'completed', type: 'debit' },
  { id: 16, desc: 'POS — The Place Restaurant', amount: 8500, date: '2025-01-08', status: 'failed', type: 'debit' },
  { id: 17, desc: 'Cashback Reward — January Promo', amount: 5000, date: '2025-01-07', status: 'completed', type: 'credit' },
  { id: 18, desc: 'DStv Subscription', amount: 21000, date: '2025-01-07', status: 'pending', type: 'debit' },
  { id: 19, desc: 'Transfer from Tunde A.', amount: 75000, date: '2025-01-06', status: 'completed', type: 'credit' },
  { id: 20, desc: 'Gym Membership — Pulse Athletics', amount: 25000, date: '2025-01-06', status: 'completed', type: 'debit' },
];

// ── Pricing Plans ──
export interface Plan {
  name: string;
  price: string;
  priceAnnual: string;
  period: string;
  description: string;
  features: string[];
  featured: boolean;
}

export const plans: Plan[] = [
  {
    name: 'Free',
    price: '₦0',
    priceAnnual: '₦0',
    period: '/month',
    description: 'Everything you need to start banking smarter.',
    features: [
      'Kash Naira Account',
      'Virtual debit card',
      'Free transfers (5/month)',
      'Spending insights',
      'Bill payments',
      'Mobile app access',
    ],
    featured: false,
  },
  {
    name: 'Pro',
    price: '₦999',
    priceAnnual: '₦9,990',
    period: '/month',
    description: 'For individuals who want premium banking.',
    features: [
      'Everything in Free',
      'Unlimited free transfers',
      'Physical metal card',
      'Kash Vault (high-yield savings)',
      'Multi-currency wallets (USD, GBP, EUR)',
      'Priority customer support',
      'Cashback rewards (1.5%)',
      'Expense categories & budgets',
    ],
    featured: true,
  },
  {
    name: 'Business',
    price: '₦4,999',
    priceAnnual: '₦49,990',
    period: '/month',
    description: 'Built for teams, startups, and enterprises.',
    features: [
      'Everything in Pro',
      'Up to 25 team cards',
      'Payroll disbursement',
      'Invoicing & payment links',
      'API access & webhooks',
      'Dedicated account manager',
      'Spend controls & approvals',
      'Custom reporting & analytics',
      'PCI DSS Level 1 compliance',
    ],
    featured: false,
  },
];

// ── Features ──
export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export const features: Feature[] = [
  {
    id: 1,
    title: 'Instant Transfers',
    description: 'Send money to any Nigerian bank account in under 2 seconds. Zero delays, zero stress.',
    icon: '&#9889;',
    details: [
      'Instant settlement to all banks',
      'Bulk transfers for payroll',
      'Scheduled & recurring payments',
      'Real-time transaction notifications',
    ],
  },
  {
    id: 2,
    title: 'Virtual & Physical Cards',
    description: 'Get a virtual card instantly or order a sleek metal card delivered to your doorstep.',
    icon: '&#128179;',
    details: [
      'Instant virtual card creation',
      'Premium metal Visa card',
      'Freeze/unfreeze in one tap',
      'Set spending limits per card',
    ],
  },
  {
    id: 3,
    title: 'Kash Vault',
    description: 'Earn up to 14% annual returns on your savings. Your money works while you sleep.',
    icon: '&#128176;',
    details: [
      'Flexible or fixed savings plans',
      'Up to 14% annual yield',
      'Auto-save rules (daily, weekly, monthly)',
      'Withdraw anytime (flexible plans)',
    ],
  },
  {
    id: 4,
    title: 'Multi-Currency Wallets',
    description: 'Hold, send, and receive USD, GBP, and EUR without hidden conversion fees.',
    icon: '&#127760;',
    details: [
      'USD, GBP, EUR wallets',
      'Competitive FX rates',
      'Receive international payments',
      'Convert between currencies instantly',
    ],
  },
  {
    id: 5,
    title: 'Smart Budgeting',
    description: 'AI-powered insights that categorize spending and help you save automatically.',
    icon: '&#128202;',
    details: [
      'Auto-categorized transactions',
      'Monthly spending reports',
      'Custom budget goals',
      'Overspend alerts & nudges',
    ],
  },
  {
    id: 6,
    title: 'Business Banking',
    description: 'Invoicing, payroll, team cards, and API access — everything your business needs.',
    icon: '&#127970;',
    details: [
      'Team card management',
      'Automated payroll disbursement',
      'Invoice generation & tracking',
      'RESTful API & webhooks',
    ],
  },
];

// ── FAQ ──
export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: 'Is my money safe with Kash?',
    a: 'Absolutely. Kash is licensed by the Central Bank of Nigeria (CBN) and all deposits are insured by the Nigeria Deposit Insurance Corporation (NDIC) up to ₦500,000. We use bank-grade AES-256 encryption and maintain PCI DSS Level 1 compliance.',
  },
  {
    q: 'How do I open an account?',
    a: 'Download the Kash app, enter your phone number, verify your BVN, and you are done. The entire process takes under 3 minutes. No branch visits, no paperwork, no stress.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'Never. We believe in radical transparency. Free plan users get 5 free transfers per month. Pro and Business users get unlimited free transfers. All fees are clearly listed on our pricing page.',
  },
  {
    q: 'Can I use Kash for international payments?',
    a: 'Yes. Pro and Business users can hold USD, GBP, and EUR wallets. You can receive international payments, convert currencies, and pay for subscriptions in foreign currencies at competitive rates.',
  },
  {
    q: 'What happens if I lose my phone?',
    a: 'Freeze your account instantly from any browser at kash.ng/freeze or call our 24/7 support line. Your biometric authentication ensures no one can access your account without your fingerprint or face ID.',
  },
  {
    q: 'Does Kash support business accounts?',
    a: 'Yes. Our Business plan includes team cards, payroll disbursement, invoicing, API access, spend controls, and a dedicated account manager. Perfect for startups, SMEs, and enterprises of any size.',
  },
];
