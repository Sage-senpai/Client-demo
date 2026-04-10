// ── Consulting Data — Vertex Advisory ──

export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
  deliverables: string[];
  industries: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  result: string;
  approach: string[];
  image: string;
  category: 'Strategy' | 'Digital' | 'Operations' | 'Finance';
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  specialty: string;
  country: string;
  bio: string;
  image: string;
}

export interface Insight {
  id: string;
  title: string;
  excerpt: string;
  category: 'Strategy' | 'Digital' | 'Leadership' | 'Growth';
  image: string;
  date: string;
  readTime: string;
}

export interface EngagementPackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: 'svc-1',
    name: 'Strategy & Growth',
    icon: '\u2726',
    description:
      'We partner with executive teams to define bold growth strategies grounded in rigorous market analysis. From market entry to M&A advisory, we architect roadmaps that unlock sustainable competitive advantage across global markets.',
    deliverables: [
      'Market Landscape & Competitive Intelligence',
      'Growth Strategy & Revenue Roadmap',
      'M&A Target Screening & Due Diligence',
      'Board-Ready Strategic Plans',
      'Quarterly Strategy Review Cadence',
    ],
    industries: ['Financial Services', 'Technology', 'Healthcare', 'Energy', 'Retail'],
  },
  {
    id: 'svc-2',
    name: 'Digital Transformation',
    icon: '\u2316',
    description:
      'We guide enterprises through end-to-end digital reinvention. Our approach integrates technology selection, process redesign, and change management to deliver measurable ROI and future-proof operations.',
    deliverables: [
      'Digital Maturity Assessment',
      'Technology Stack Architecture',
      'Process Automation Blueprints',
      'Change Management & Adoption Framework',
      'Digital KPI Dashboard & Tracking',
    ],
    industries: ['Manufacturing', 'Banking', 'Government', 'Logistics', 'Insurance'],
  },
  {
    id: 'svc-3',
    name: 'Operations Excellence',
    icon: '\u2699',
    description:
      'We reengineer operational models to eliminate waste, accelerate throughput, and build resilient supply chains. Our teams embed on-site to drive measurable efficiency gains across complex global operations.',
    deliverables: [
      'End-to-End Process Mapping & Analysis',
      'Supply Chain Optimization',
      'Lean & Six Sigma Implementation',
      'Cost Reduction Programs',
      'Operational KPI Frameworks',
    ],
    industries: ['Logistics', 'Manufacturing', 'Retail', 'Aerospace', 'Pharmaceuticals'],
  },
  {
    id: 'svc-4',
    name: 'Financial Advisory',
    icon: '\u25C8',
    description:
      'From restructuring to capital raising, we provide independent financial counsel that protects value and maximizes returns. Our advisors operate across multi-currency, cross-border contexts with precision.',
    deliverables: [
      'Financial Modelling & Valuation',
      'Capital Structure Optimization',
      'Cross-Border Transaction Support',
      'Risk Assessment & Mitigation Plans',
      'Investor Relations Strategy',
    ],
    industries: ['Private Equity', 'Banking', 'Real Estate', 'Infrastructure', 'Energy'],
  },
  {
    id: 'svc-5',
    name: 'HR & Talent Strategy',
    icon: '\u2605',
    description:
      'We design people strategies that attract, retain, and develop world-class talent. Our frameworks span compensation benchmarking, org design, DEI programs, and succession planning for global workforces.',
    deliverables: [
      'Organizational Design & Restructuring',
      'Global Compensation Benchmarking',
      'Talent Acquisition Strategy',
      'DEI Program Design & Metrics',
      'Leadership Succession Planning',
    ],
    industries: ['Technology', 'Financial Services', 'Professional Services', 'Healthcare', 'Consumer Goods'],
  },
  {
    id: 'svc-6',
    name: 'Legal & Compliance',
    icon: '\u2696',
    description:
      'We help organizations navigate complex regulatory landscapes across jurisdictions. Our teams bring deep expertise in cross-border compliance, data protection, anti-corruption, and ESG governance.',
    deliverables: [
      'Regulatory Compliance Audits',
      'Cross-Border Legal Framework Design',
      'Data Privacy & GDPR Readiness',
      'Anti-Corruption & Ethics Programs',
      'ESG Governance Frameworks',
    ],
    industries: ['Financial Services', 'Pharmaceuticals', 'Technology', 'Energy', 'Government'],
  },
  {
    id: 'svc-7',
    name: 'Marketing & Brand',
    icon: '\u25B2',
    description:
      'We build global brand architectures and go-to-market strategies that resonate across cultures. From brand positioning to multi-market campaign orchestration, we drive awareness and demand at scale.',
    deliverables: [
      'Brand Architecture & Positioning',
      'Go-to-Market Strategy',
      'Multi-Market Campaign Frameworks',
      'Customer Journey Mapping & CX Design',
      'Brand Equity Measurement & Tracking',
    ],
    industries: ['Consumer Goods', 'Technology', 'Luxury', 'Automotive', 'Hospitality'],
  },
  {
    id: 'svc-8',
    name: 'Technology & Innovation',
    icon: '\u2301',
    description:
      'We help enterprises harness emerging technologies — AI, blockchain, IoT, cloud — to create new revenue streams and transform business models. Innovation is not optional; we make it executable.',
    deliverables: [
      'Innovation Lab & Incubation Setup',
      'AI & Machine Learning Strategy',
      'Cloud Migration & Architecture',
      'Technology Due Diligence',
      'Digital Product Strategy & Roadmap',
    ],
    industries: ['Technology', 'Financial Services', 'Healthcare', 'Manufacturing', 'Telecommunications'],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-1',
    client: 'Fortune 500 Retailer',
    industry: 'Retail & Consumer',
    challenge:
      'Stagnating growth across 14 markets with declining foot traffic and an underdeveloped e-commerce channel threatening market share.',
    result: '+340% Revenue',
    approach: ['Market Analysis', 'Omnichannel Strategy', 'Digital Transformation', 'Change Management'],
    image: 'https://picsum.photos/seed/vertex1/800/600',
    category: 'Strategy',
  },
  {
    id: 'cs-2',
    client: 'European Fintech Unicorn',
    industry: 'Financial Services',
    challenge:
      'Needed to scale from 3 to 22 markets within 18 months while navigating diverse regulatory frameworks across the EU and APAC.',
    result: '22 Markets in 18mo',
    approach: ['Regulatory Mapping', 'Expansion Playbook', 'Compliance Framework', 'Talent Strategy'],
    image: 'https://picsum.photos/seed/vertex2/800/600',
    category: 'Strategy',
  },
  {
    id: 'cs-3',
    client: 'Global Energy Conglomerate',
    industry: 'Energy & Resources',
    challenge:
      'Legacy systems and fragmented operations across 6 continents were driving $120M in annual inefficiency costs.',
    result: '40% Cost Reduction',
    approach: ['Process Reengineering', 'ERP Migration', 'Supply Chain Optimization', 'Lean Deployment'],
    image: 'https://picsum.photos/seed/vertex3/800/600',
    category: 'Operations',
  },
  {
    id: 'cs-4',
    client: 'Asia-Pacific Healthcare Group',
    industry: 'Healthcare',
    challenge:
      'Outdated patient management systems and manual processes were causing 35% longer wait times and declining patient satisfaction scores.',
    result: '60% Efficiency Gain',
    approach: ['Digital Assessment', 'Platform Selection', 'Process Automation', 'Staff Training'],
    image: 'https://picsum.photos/seed/vertex4/800/600',
    category: 'Digital',
  },
  {
    id: 'cs-5',
    client: 'Middle East Sovereign Fund',
    industry: 'Investment',
    challenge:
      'Portfolio of 40+ companies needed unified governance, performance tracking, and cross-portfolio synergy identification.',
    result: '$2.1B Value Created',
    approach: ['Portfolio Analytics', 'Governance Design', 'Synergy Mapping', 'Performance Dashboards'],
    image: 'https://picsum.photos/seed/vertex5/800/600',
    category: 'Finance',
  },
  {
    id: 'cs-6',
    client: 'African Telecom Leader',
    industry: 'Telecommunications',
    challenge:
      'Needed to launch a digital banking subsidiary across 8 African markets while managing cannibalisation risk to core telecom revenue.',
    result: '12M Users in Year 1',
    approach: ['Business Case Modelling', 'Market Entry Strategy', 'Regulatory Navigation', 'Product Design'],
    image: 'https://picsum.photos/seed/vertex6/800/600',
    category: 'Digital',
  },
];

export const team: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'James Whitfield',
    title: 'Managing Partner',
    specialty: 'Corporate Strategy & M&A',
    country: 'United States',
    bio: 'Former McKinsey principal with 20 years advising Fortune 500 boards. Led $12B+ in cross-border transactions across North America and Europe.',
    image: 'https://picsum.photos/seed/vxteam1/400/400',
  },
  {
    id: 'tm-2',
    name: 'Eleanor Hargreaves',
    title: 'Senior Partner — EMEA',
    specialty: 'Digital Transformation',
    country: 'United Kingdom',
    bio: 'Oxford-educated technologist and strategist. 15 years driving enterprise digital reinvention for FTSE 100 and DAX companies.',
    image: 'https://picsum.photos/seed/vxteam2/400/400',
  },
  {
    id: 'tm-3',
    name: 'Wei Lin Chen',
    title: 'Partner — Asia-Pacific',
    specialty: 'Operations & Supply Chain',
    country: 'Singapore',
    bio: 'Supply chain architect who has optimized $8B+ in logistics spend. Deep expertise in APAC manufacturing and cross-border trade.',
    image: 'https://picsum.photos/seed/vxteam3/400/400',
  },
  {
    id: 'tm-4',
    name: 'Adebayo Ogunlade',
    title: 'Partner — Africa & Middle East',
    specialty: 'Market Entry & Growth',
    country: 'Nigeria',
    bio: 'Pioneer in African market strategy. Advised 30+ multinationals on entry and expansion across Sub-Saharan Africa and the Gulf states.',
    image: 'https://picsum.photos/seed/vxteam4/400/400',
  },
  {
    id: 'tm-5',
    name: 'Katarina Vogel',
    title: 'Partner — Financial Advisory',
    specialty: 'Restructuring & Capital Markets',
    country: 'Germany',
    bio: 'Former Goldman Sachs director specializing in cross-border restructuring. Managed $20B+ in distressed asset mandates across Europe.',
    image: 'https://picsum.photos/seed/vxteam5/400/400',
  },
  {
    id: 'tm-6',
    name: 'Rafael Mendes',
    title: 'Principal — Latin America',
    specialty: 'Technology & Innovation',
    country: 'Brazil',
    bio: 'Ex-Google strategist turned innovation consultant. Helped launch 15+ corporate venture studios across emerging markets.',
    image: 'https://picsum.photos/seed/vxteam6/400/400',
  },
  {
    id: 'tm-7',
    name: 'Fatima Al-Rashid',
    title: 'Director — GCC Region',
    specialty: 'HR & Organizational Design',
    country: 'United Arab Emirates',
    bio: 'Organizational psychologist and talent strategist. Designed workforce transformation programs for sovereign wealth funds and national champions.',
    image: 'https://picsum.photos/seed/vxteam7/400/400',
  },
  {
    id: 'tm-8',
    name: 'Yuki Tanaka',
    title: 'Principal — Japan & Korea',
    specialty: 'Legal & Compliance',
    country: 'Japan',
    bio: 'Dual-qualified lawyer (NY Bar & Japan). Expert in cross-border regulatory compliance, data governance, and ESG frameworks.',
    image: 'https://picsum.photos/seed/vxteam8/400/400',
  },
];

export const insights: Insight[] = [
  {
    id: 'in-1',
    title: 'The CEO Agenda 2025: Five Forces Reshaping Global Strategy',
    excerpt:
      'From AI disruption to geopolitical fragmentation, we examine the macro forces that will define corporate strategy over the next decade and how boards should respond.',
    category: 'Strategy',
    image: 'https://picsum.photos/seed/vxblog1/800/500',
    date: 'Mar 8, 2025',
    readTime: '12 min read',
  },
  {
    id: 'in-2',
    title: 'Beyond the Hype: Practical AI Implementation for Enterprise',
    excerpt:
      'Most AI pilots fail to scale. We share the four-pillar framework our clients use to move from experimentation to enterprise-wide AI value creation.',
    category: 'Digital',
    image: 'https://picsum.photos/seed/vxblog2/800/500',
    date: 'Feb 22, 2025',
    readTime: '9 min read',
  },
  {
    id: 'in-3',
    title: 'Leading Through Uncertainty: Lessons from 200+ Transformation Programs',
    excerpt:
      'Change management is the number one predictor of transformation success. We distill two decades of leadership coaching into actionable principles.',
    category: 'Leadership',
    image: 'https://picsum.photos/seed/vxblog3/800/500',
    date: 'Feb 5, 2025',
    readTime: '8 min read',
  },
  {
    id: 'in-4',
    title: 'Cross-Border M&A in 2025: Navigating Regulatory Complexity',
    excerpt:
      'With antitrust scrutiny at all-time highs and new FDI screening regimes, we map the evolving regulatory landscape for international dealmakers.',
    category: 'Strategy',
    image: 'https://picsum.photos/seed/vxblog4/800/500',
    date: 'Jan 18, 2025',
    readTime: '11 min read',
  },
  {
    id: 'in-5',
    title: 'Scaling in Emerging Markets: The Playbook for Sustainable Growth',
    excerpt:
      'Emerging markets offer massive opportunity but demand a fundamentally different playbook. We share frameworks for Africa, LATAM, and Southeast Asia.',
    category: 'Growth',
    image: 'https://picsum.photos/seed/vxblog5/800/500',
    date: 'Jan 4, 2025',
    readTime: '10 min read',
  },
  {
    id: 'in-6',
    title: 'The Future of Work: Designing Organizations for the AI Era',
    excerpt:
      'AI will not replace your workforce — but it will redesign it. We outline the org structures, skills, and leadership models needed for the next era.',
    category: 'Leadership',
    image: 'https://picsum.photos/seed/vxblog6/800/500',
    date: 'Dec 12, 2024',
    readTime: '7 min read',
  },
];

export const packages: EngagementPackage[] = [
  {
    id: 'pkg-1',
    name: 'Project-Based',
    price: 'From $50K',
    description:
      'Focused engagements with defined scope, timeline, and deliverables. Ideal for specific strategic questions, due diligence, or transformation sprints.',
    features: [
      'Dedicated project team',
      'Defined scope & deliverables',
      'Typical duration: 4-12 weeks',
      'Executive sponsor alignment',
      'Final presentation to leadership',
      'Post-engagement knowledge transfer',
    ],
  },
  {
    id: 'pkg-2',
    name: 'Monthly Retainer',
    price: 'From $25K/mo',
    description:
      'Ongoing strategic partnership with guaranteed capacity. Perfect for companies navigating continuous change, expansion, or complex multi-market challenges.',
    features: [
      'Named partner & analyst team',
      'Monthly strategy sessions',
      'Unlimited ad-hoc advisory calls',
      'Quarterly business reviews',
      'Priority access to Vertex research',
      'Cross-practice expertise on demand',
      'Dedicated Slack/Teams channel',
      'Annual strategy offsite facilitation',
    ],
    popular: true,
  },
  {
    id: 'pkg-3',
    name: 'Enterprise Partnership',
    price: 'Custom',
    description:
      'Bespoke, multi-year partnerships for large enterprises requiring embedded consulting teams, global coverage, and board-level advisory across practices.',
    features: [
      'Embedded on-site consulting team',
      'Global multi-office coverage',
      'Board & C-suite advisory access',
      'Custom research & benchmarking',
      'Innovation lab facilitation',
      'Multi-practice coordination',
      'Dedicated relationship partner',
      'Annual governance & value review',
      'Preferential rates across all practices',
    ],
  },
];
