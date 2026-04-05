export interface CaseStudy {
  id: number;
  name: string;
  sector: 'FinTech' | 'HealthTech' | 'E-Commerce' | 'EdTech' | 'Web3';
  challenge: string;
  outcome: string;
  techStack: string[];
  description: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    name: 'NexaPay',
    sector: 'FinTech',
    challenge:
      'A leading Lagos FinTech needed to rebuild their payment gateway to handle 10x transaction volume after a Series B raise.',
    outcome: '99.99% uptime with 14ms average response time — processing 2.3M daily transactions.',
    techStack: ['Go', 'PostgreSQL', 'Redis', 'AWS', 'Terraform', 'Kafka'],
    description:
      'We re-architected the entire payment processing pipeline using event-driven microservices in Go. The new system features automatic horizontal scaling, real-time fraud detection, and a multi-region failover strategy that guarantees sub-second recovery.',
  },
  {
    id: 2,
    name: 'MediTrack Pro',
    sector: 'HealthTech',
    challenge:
      'A West African telemedicine startup struggled with patient data fragmentation across 12 partner hospitals.',
    outcome: '85% reduction in patient record retrieval time — serving 340K patients across 3 countries.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Docker', 'AWS', 'HL7 FHIR'],
    description:
      'We built a unified health data exchange platform compliant with HL7 FHIR standards. The system integrates with existing hospital management software through custom adapters, enabling real-time access to complete patient histories across all partner facilities.',
  },
  {
    id: 3,
    name: 'ShopFleet',
    sector: 'E-Commerce',
    challenge:
      'A fast-growing Nigerian e-commerce marketplace experienced cart abandonment rates above 73% due to slow checkout flows.',
    outcome: 'Cart abandonment dropped to 31% — GMV increased 4.2x within 6 months.',
    techStack: ['Next.js', 'Python', 'PostgreSQL', 'Stripe', 'Redis', 'Cloudflare'],
    description:
      'We redesigned the entire checkout experience with a one-tap payment system, intelligent address prediction, and real-time delivery estimates. The backend was optimized with aggressive caching and database query tuning that cut page load times by 78%.',
  },
  {
    id: 4,
    name: 'LearnLoop',
    sector: 'EdTech',
    challenge:
      'An EdTech company needed an adaptive learning platform that could personalize curriculum for 500K+ students with varying skill levels.',
    outcome: '62% improvement in student completion rates — platform scaled to 1.2M active learners.',
    techStack: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'AWS', 'FastAPI'],
    description:
      'We developed an AI-powered adaptive learning engine that analyzes student performance in real time and adjusts difficulty, pacing, and content recommendations. The ML model was trained on anonymized data from 200K learning sessions to optimize engagement and retention.',
  },
  {
    id: 5,
    name: 'ChainVault',
    sector: 'Web3',
    challenge:
      'A Web3 startup needed a secure multi-chain wallet with fiat on-ramp capabilities for the African market.',
    outcome: 'Over $18M in assets secured — 120K wallets created in the first quarter.',
    techStack: ['Solidity', 'React', 'Rust', 'Node.js', 'PostgreSQL', 'Alchemy'],
    description:
      'We engineered a non-custodial multi-chain wallet supporting Ethereum, Polygon, and Solana with MPC key management. The integrated fiat on-ramp uses local payment methods including bank transfers, mobile money, and USSD, making crypto accessible to users without traditional banking.',
  },
  {
    id: 6,
    name: 'PayBridge',
    sector: 'FinTech',
    challenge:
      'A cross-border payments provider needed to reduce settlement times from 3 days to under 1 hour across 8 African corridors.',
    outcome: 'Average settlement time reduced to 23 minutes — $47M processed monthly.',
    techStack: ['Go', 'React', 'PostgreSQL', 'RabbitMQ', 'Docker', 'Kubernetes'],
    description:
      'We built a real-time settlement engine that leverages liquidity pools and smart routing to find the fastest path for each transaction. The system integrates with local payment networks in Nigeria, Kenya, Ghana, South Africa, and four other markets.',
  },
  {
    id: 7,
    name: 'CareConnect',
    sector: 'HealthTech',
    challenge:
      'A digital health platform needed to deploy AI-assisted diagnostics for rural clinics with unreliable internet connectivity.',
    outcome: 'Diagnostic accuracy of 94% — deployed across 85 rural clinics in Northern Nigeria.',
    techStack: ['Flutter', 'Python', 'TensorFlow Lite', 'SQLite', 'Firebase', 'Docker'],
    description:
      'We developed an offline-first mobile application with on-device ML models for preliminary diagnostics. The app syncs patient data when connectivity is available and provides clinical decision support for community health workers, including triage recommendations and drug interaction checks.',
  },
  {
    id: 8,
    name: 'DaoForge',
    sector: 'Web3',
    challenge:
      'A decentralized governance platform needed to reduce gas costs by 90% while maintaining on-chain vote integrity.',
    outcome: 'Gas costs reduced by 94% — 45K governance proposals processed with zero disputes.',
    techStack: ['Solidity', 'React', 'The Graph', 'IPFS', 'Hardhat', 'TypeScript'],
    description:
      'We implemented a hybrid on-chain/off-chain governance system using Snapshot-style off-chain voting with on-chain execution. Merkle proofs ensure vote integrity, while batched execution and gas-optimized contracts dramatically reduce costs for DAO participants.',
  },
];

export default caseStudies;
