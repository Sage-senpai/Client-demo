// ── Agency Data — Flux Creative ──

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  image: string;
  results: string;
  techStack: string[];
  category: 'Branding' | 'Web' | 'Social' | 'SEO';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

export interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-1',
    client: 'Zenith Motors',
    industry: 'Automotive',
    image: 'https://picsum.photos/seed/zenith/800/600',
    results: '340% increase in qualified leads within 6 months',
    techStack: ['Figma', 'React', 'Next.js', 'Google Ads'],
    category: 'Branding',
  },
  {
    id: 'cs-2',
    client: 'Aura Skincare',
    industry: 'Beauty & Cosmetics',
    image: 'https://picsum.photos/seed/aura/800/600',
    results: '2.1M impressions in first campaign quarter',
    techStack: ['Shopify', 'Meta Ads', 'Klaviyo', 'Canva'],
    category: 'Social',
  },
  {
    id: 'cs-3',
    client: 'NovaPay',
    industry: 'Fintech',
    image: 'https://picsum.photos/seed/novapay/800/600',
    results: 'Page 1 Google ranking for 28 target keywords',
    techStack: ['Ahrefs', 'WordPress', 'Schema Markup', 'GA4'],
    category: 'SEO',
  },
  {
    id: 'cs-4',
    client: 'Brick & Barrel',
    industry: 'Real Estate',
    image: 'https://picsum.photos/seed/brickbarrel/800/600',
    results: '65% reduction in bounce rate after redesign',
    techStack: ['Next.js', 'Three.js', 'Sanity CMS', 'Vercel'],
    category: 'Web',
  },
  {
    id: 'cs-5',
    client: 'FreshRoots',
    industry: 'Agriculture',
    image: 'https://picsum.photos/seed/freshroots/800/600',
    results: 'Brand awareness lifted by 180% in target markets',
    techStack: ['Illustrator', 'After Effects', 'Webflow', 'Mailchimp'],
    category: 'Branding',
  },
  {
    id: 'cs-6',
    client: 'CloudSync',
    industry: 'SaaS',
    image: 'https://picsum.photos/seed/cloudsync/800/600',
    results: '12,000 monthly organic visitors from zero',
    techStack: ['SEMrush', 'HubSpot', 'Gatsby', 'Contentful'],
    category: 'SEO',
  },
  {
    id: 'cs-7',
    client: 'Mama Titi Kitchen',
    industry: 'Food & Beverage',
    image: 'https://picsum.photos/seed/mamatiti/800/600',
    results: '450K+ followers gained across social platforms',
    techStack: ['TikTok Ads', 'Instagram Reels', 'CapCut', 'Buffer'],
    category: 'Social',
  },
  {
    id: 'cs-8',
    client: 'Orion Fitness',
    industry: 'Health & Fitness',
    image: 'https://picsum.photos/seed/orionfitness/800/600',
    results: 'E-commerce revenue up 210% post-launch',
    techStack: ['React', 'Stripe', 'Tailwind CSS', 'Framer Motion'],
    category: 'Web',
  },
];

export const services: Service[] = [
  {
    id: 'svc-1',
    title: 'Brand Strategy',
    description: 'We craft brand identities that resonate deeply with your audience and stand the test of time. From positioning to visual systems, we build the foundation.',
    icon: '\u2726',
    deliverables: ['Brand Audit & Research', 'Positioning & Messaging', 'Visual Identity System', 'Brand Guidelines Document', 'Tone of Voice Framework'],
  },
  {
    id: 'svc-2',
    title: 'Web Design & Development',
    description: 'Beautiful, high-performance websites engineered for conversion. We blend stunning design with rock-solid code to create digital experiences that work.',
    icon: '\u2316',
    deliverables: ['UX Research & Wireframing', 'UI Design in Figma', 'Frontend Development (React/Next.js)', 'CMS Integration', 'Performance Optimization & Launch'],
  },
  {
    id: 'svc-3',
    title: 'Search Engine Optimization',
    description: 'Dominate search results with data-driven SEO strategies. We focus on sustainable growth through technical excellence and compelling content.',
    icon: '\u2315',
    deliverables: ['Technical SEO Audit', 'Keyword Research & Strategy', 'On-Page Optimization', 'Content Calendar & Briefs', 'Monthly Reporting & Analysis'],
  },
  {
    id: 'svc-4',
    title: 'Social Media Management',
    description: 'We turn followers into fans and fans into customers. Our social strategies are built on data, creativity, and authentic community engagement.',
    icon: '\u2661',
    deliverables: ['Platform Strategy & Setup', 'Content Creation (Graphics + Video)', 'Community Management', 'Influencer Outreach', 'Analytics & Growth Reports'],
  },
  {
    id: 'svc-5',
    title: 'Paid Advertising',
    description: 'Maximize every naira of your ad spend with targeted campaigns across Google, Meta, TikTok, and LinkedIn. We optimize relentlessly for ROAS.',
    icon: '\u25B2',
    deliverables: ['Campaign Strategy & Planning', 'Ad Creative Design', 'Audience Targeting & Segmentation', 'A/B Testing & Optimization', 'Conversion Tracking & Attribution'],
  },
  {
    id: 'svc-6',
    title: 'Email Marketing',
    description: 'Nurture leads and drive repeat purchases with email sequences that feel personal, not spammy. We build automations that sell while you sleep.',
    icon: '\u2709',
    deliverables: ['Email Strategy & Audit', 'Template Design & Development', 'Automation Workflows', 'List Segmentation & Hygiene', 'Performance Analytics & Optimization'],
  },
];

export const team: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Adaeze Okonkwo',
    role: 'Founder & Creative Director',
    image: 'https://picsum.photos/seed/adaeze/400/400',
    bio: 'Former Leo Burnett strategist. 12 years shaping brands across Africa and Europe.',
  },
  {
    id: 'tm-2',
    name: 'Tunde Balogun',
    role: 'Head of Engineering',
    image: 'https://picsum.photos/seed/tunde/400/400',
    bio: 'Full-stack engineer and systems thinker. Builds websites that load in under a second.',
  },
  {
    id: 'tm-3',
    name: 'Chisom Eze',
    role: 'Lead Designer',
    image: 'https://picsum.photos/seed/chisom/400/400',
    bio: 'Award-winning visual designer with an eye for typography and bold color systems.',
  },
  {
    id: 'tm-4',
    name: 'Femi Adeyemi',
    role: 'SEO Strategist',
    image: 'https://picsum.photos/seed/femi/400/400',
    bio: 'Data nerd and keyword whisperer. Has driven 10M+ organic visits for clients.',
  },
  {
    id: 'tm-5',
    name: 'Nkechi Umeh',
    role: 'Social Media Lead',
    image: 'https://picsum.photos/seed/nkechi/400/400',
    bio: 'Content strategist who turned three brands viral. Speaks fluent meme.',
  },
  {
    id: 'tm-6',
    name: 'Emeka Nwosu',
    role: 'Paid Ads Manager',
    image: 'https://picsum.photos/seed/emeka/400/400',
    bio: 'Google & Meta certified. Manages 8-figure annual ad budgets with surgical precision.',
  },
  {
    id: 'tm-7',
    name: 'Yewande Cole',
    role: 'Copywriter',
    image: 'https://picsum.photos/seed/yewande/400/400',
    bio: 'Words are her weapons. From taglines to landing pages, she makes every word count.',
  },
  {
    id: 'tm-8',
    name: 'Olu Martins',
    role: 'Motion Designer',
    image: 'https://picsum.photos/seed/olu/400/400',
    bio: 'Brings brands to life through motion. After Effects, Lottie, and CSS animation wizard.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'bp-1',
    title: 'Why Your Brand Identity Is Costing You Customers',
    excerpt: 'A weak brand identity does more damage than you think. Here is how to audit yours and fix the leaks before they drain your revenue.',
    category: 'Branding',
    image: 'https://picsum.photos/seed/blog1/800/500',
    date: 'Mar 15, 2025',
    readTime: '6 min read',
  },
  {
    id: 'bp-2',
    title: 'The 2025 SEO Playbook for Nigerian Businesses',
    excerpt: 'Google SGE is changing search. Here is what local businesses need to know to stay on page one.',
    category: 'SEO',
    image: 'https://picsum.photos/seed/blog2/800/500',
    date: 'Feb 28, 2025',
    readTime: '8 min read',
  },
  {
    id: 'bp-3',
    title: 'How We Grew a Food Brand to 450K Followers in 90 Days',
    excerpt: 'A behind-the-scenes look at the social strategy, content calendar, and ad spend that made Mama Titi Kitchen go viral.',
    category: 'Social Media',
    image: 'https://picsum.photos/seed/blog3/800/500',
    date: 'Feb 10, 2025',
    readTime: '10 min read',
  },
  {
    id: 'bp-4',
    title: 'Web Performance: Why Your Site Speed Is Killing Conversions',
    excerpt: 'Every second of load time costs you 7% in conversions. We break down the fixes that actually move the needle.',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/blog4/800/500',
    date: 'Jan 22, 2025',
    readTime: '7 min read',
  },
  {
    id: 'bp-5',
    title: 'Paid Ads in Africa: Platforms, Budgets, and What Actually Works',
    excerpt: 'We spent N50M on ads last year across 6 platforms. Here is where the money actually performed.',
    category: 'Paid Advertising',
    image: 'https://picsum.photos/seed/blog5/800/500',
    date: 'Jan 08, 2025',
    readTime: '9 min read',
  },
  {
    id: 'bp-6',
    title: 'Email Marketing Is Not Dead: Our 42% Open Rate Strategy',
    excerpt: 'Forget the noise. Email still delivers the highest ROI in marketing. Here is exactly how we do it for our clients.',
    category: 'Email Marketing',
    image: 'https://picsum.photos/seed/blog6/800/500',
    date: 'Dec 18, 2024',
    readTime: '5 min read',
  },
];

export const packages: Package[] = [
  {
    id: 'pkg-1',
    name: 'Starter',
    price: '\u20A6300k',
    description: 'Perfect for small businesses ready to establish a professional digital presence.',
    features: [
      'Brand identity refresh',
      '5-page responsive website',
      'Social media setup (3 platforms)',
      'Basic SEO optimization',
      'Monthly performance report',
      '30-day post-launch support',
    ],
  },
  {
    id: 'pkg-2',
    name: 'Growth',
    price: '\u20A6650k',
    description: 'For scaling businesses that need consistent growth across multiple channels.',
    features: [
      'Full brand strategy & identity',
      'Custom 10-page website with CMS',
      'Social media management (3 months)',
      'SEO strategy & implementation',
      'Google Ads setup & management',
      'Email marketing automation',
      'Bi-weekly strategy calls',
      '90-day post-launch support',
    ],
    popular: true,
  },
  {
    id: 'pkg-3',
    name: 'Enterprise',
    price: '\u20A61.2M',
    description: 'Full-service partnership for established brands demanding excellence at every touchpoint.',
    features: [
      'Complete brand overhaul & guidelines',
      'Custom web application (React/Next.js)',
      'Full social media management (6 months)',
      'Advanced SEO & content strategy',
      'Multi-platform paid ad campaigns',
      'Email marketing with automations',
      'Dedicated account manager',
      'Weekly strategy sessions',
      'Priority support & 6-month warranty',
    ],
  },
];
