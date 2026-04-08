/* ── TerraYield Agritech Data ── */

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  unit: string;
  farmer: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  tags: string[];
  description: string;
}

export interface Order {
  id: string;
  product: string;
  buyer: string;
  quantity: string;
  amount: string;
  status: 'Delivered' | 'Pending' | 'Processing';
}

export interface WeatherDay {
  day: string;
  temp: number;
  condition: string;
  wind: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const categories = [
  'All',
  'Grains',
  'Tubers',
  'Fruits',
  'Vegetables',
  'Livestock',
  'Processed',
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Premium Ofada Rice',
    category: 'Grains',
    price: '₦85,000',
    unit: '/tonne',
    farmer: 'Adebayo Farms',
    location: 'Ogun State',
    rating: 4.8,
    reviews: 124,
    image: 'https://picsum.photos/seed/terra1/800/600',
    tags: ['Organic', 'Premium'],
    description: 'Stone-free, hand-selected Ofada rice grown without pesticides. Rich aroma and unique flavour.',
  },
  {
    id: 2,
    name: 'Yellow Maize (Dried)',
    category: 'Grains',
    price: '₦62,000',
    unit: '/tonne',
    farmer: 'Benue Harvest Co.',
    location: 'Benue State',
    rating: 4.5,
    reviews: 89,
    image: 'https://picsum.photos/seed/terra2/800/600',
    tags: ['Bulk Available'],
    description: 'High-quality dried yellow maize suitable for animal feed and flour production.',
  },
  {
    id: 3,
    name: 'Fresh Cassava Tubers',
    category: 'Tubers',
    price: '₦35,000',
    unit: '/tonne',
    farmer: 'Eze Agro Ltd',
    location: 'Imo State',
    rating: 4.6,
    reviews: 76,
    image: 'https://picsum.photos/seed/terra3/800/600',
    tags: ['Organic'],
    description: 'Freshly harvested TMS 30572 cassava variety. Ideal for garri, fufu, and starch production.',
  },
  {
    id: 4,
    name: 'Seed Yam (White)',
    category: 'Tubers',
    price: '₦120,000',
    unit: '/tonne',
    farmer: 'Plateau Roots',
    location: 'Plateau State',
    rating: 4.7,
    reviews: 52,
    image: 'https://picsum.photos/seed/terra4/800/600',
    tags: ['Premium', 'Bulk Available'],
    description: 'Certified seed yam tubers — Dioscorea rotundata. High yield variety for commercial farming.',
  },
  {
    id: 5,
    name: 'Mango (Alphonso)',
    category: 'Fruits',
    price: '₦4,500',
    unit: '/crate',
    farmer: 'Kwara Orchards',
    location: 'Kwara State',
    rating: 4.9,
    reviews: 201,
    image: 'https://picsum.photos/seed/terra5/800/600',
    tags: ['Organic', 'Premium'],
    description: 'Sweet, fiberless Alphonso mangoes. Handpicked at peak ripeness. Export quality.',
  },
  {
    id: 6,
    name: 'Watermelon (Crimson Sweet)',
    category: 'Fruits',
    price: '₦2,800',
    unit: '/crate',
    farmer: 'Green Valley Farms',
    location: 'Nasarawa State',
    rating: 4.4,
    reviews: 67,
    image: 'https://picsum.photos/seed/terra6/800/600',
    tags: ['Bulk Available'],
    description: 'Juicy Crimson Sweet watermelons averaging 8–12 kg each. Perfect for wholesale and retail.',
  },
  {
    id: 7,
    name: 'Red Bell Pepper',
    category: 'Vegetables',
    price: '₦18,000',
    unit: '/kg',
    farmer: 'Jos Fresh',
    location: 'Plateau State',
    rating: 4.6,
    reviews: 93,
    image: 'https://picsum.photos/seed/terra7/800/600',
    tags: ['Organic'],
    description: 'Vibrant red bell peppers grown in Jos highlands. Crunchy, sweet, and pesticide-free.',
  },
  {
    id: 8,
    name: 'Tomatoes (UTC)',
    category: 'Vegetables',
    price: '₦12,500',
    unit: '/crate',
    farmer: 'Kaduna Greens',
    location: 'Kaduna State',
    rating: 4.3,
    reviews: 145,
    image: 'https://picsum.photos/seed/terra8/800/600',
    tags: ['Bulk Available'],
    description: 'Firm UTC tomatoes perfect for cooking and processing. Consistent supply year-round.',
  },
  {
    id: 9,
    name: 'Live Broiler Chicken',
    category: 'Livestock',
    price: '₦5,200',
    unit: '/bird',
    farmer: 'Oyo Poultry Hub',
    location: 'Oyo State',
    rating: 4.7,
    reviews: 112,
    image: 'https://picsum.photos/seed/terra9/800/600',
    tags: ['Premium'],
    description: 'Healthy broilers raised on quality feed. Average weight 2.5–3 kg. Vaccinated and certified.',
  },
  {
    id: 10,
    name: 'Catfish (Table Size)',
    category: 'Livestock',
    price: '₦3,800',
    unit: '/kg',
    farmer: 'Delta Aqua Farms',
    location: 'Delta State',
    rating: 4.5,
    reviews: 88,
    image: 'https://picsum.photos/seed/terra10/800/600',
    tags: ['Organic', 'Bulk Available'],
    description: 'Farm-raised Clarias catfish, 800g–1.2kg each. Fed with premium floating feed. Fresh daily.',
  },
  {
    id: 11,
    name: 'Sorghum (Red)',
    category: 'Grains',
    price: '₦55,000',
    unit: '/tonne',
    farmer: 'Sokoto Grains',
    location: 'Sokoto State',
    rating: 4.4,
    reviews: 43,
    image: 'https://picsum.photos/seed/terra11/800/600',
    tags: ['Bulk Available'],
    description: 'Premium red sorghum grain. Ideal for brewing, flour, and animal feed. Moisture content below 12%.',
  },
  {
    id: 12,
    name: 'Sweet Potato (Orange)',
    category: 'Tubers',
    price: '₦45,000',
    unit: '/tonne',
    farmer: 'FCT Roots Ltd',
    location: 'Abuja',
    rating: 4.6,
    reviews: 61,
    image: 'https://picsum.photos/seed/terra12/800/600',
    tags: ['Organic', 'Premium'],
    description: 'Vitamin A-rich orange-fleshed sweet potatoes. IITA-improved variety. Great nutritional value.',
  },
  {
    id: 13,
    name: 'Palm Oil (Crude)',
    category: 'Processed',
    price: '₦280,000',
    unit: '/tonne',
    farmer: 'Edo Palm Estate',
    location: 'Edo State',
    rating: 4.8,
    reviews: 167,
    image: 'https://picsum.photos/seed/terra13/800/600',
    tags: ['Premium', 'Bulk Available'],
    description: 'Fresh crude palm oil, cold-pressed within 24 hours of harvest. Low FFA, deep red color.',
  },
  {
    id: 14,
    name: 'Groundnut Paste',
    category: 'Processed',
    price: '₦6,500',
    unit: '/kg',
    farmer: 'Kano Nut Works',
    location: 'Kano State',
    rating: 4.5,
    reviews: 79,
    image: 'https://picsum.photos/seed/terra14/800/600',
    tags: ['Organic'],
    description: 'Stone-ground pure groundnut paste. No additives, no preservatives. Rich and creamy.',
  },
  {
    id: 15,
    name: 'Pineapple (Smooth Cayenne)',
    category: 'Fruits',
    price: '₦3,200',
    unit: '/crate',
    farmer: 'Cross River Tropicals',
    location: 'Cross River State',
    rating: 4.7,
    reviews: 98,
    image: 'https://picsum.photos/seed/terra15/800/600',
    tags: ['Organic', 'Premium'],
    description: 'Sweet and tangy Smooth Cayenne pineapples. Excellent for juice, export, and fresh consumption.',
  },
  {
    id: 16,
    name: 'Dried Hibiscus (Zobo)',
    category: 'Processed',
    price: '₦4,200',
    unit: '/kg',
    farmer: 'Northern Flora',
    location: 'Jigawa State',
    rating: 4.6,
    reviews: 134,
    image: 'https://picsum.photos/seed/terra16/800/600',
    tags: ['Organic', 'Bulk Available'],
    description: 'Sun-dried hibiscus calyces (zobo). Deep red, aromatic. Export-grade quality for beverages.',
  },
];

export const orders: Order[] = [
  { id: 'TY-2024-001', product: 'Ofada Rice', buyer: 'Lagos Foods Ltd', quantity: '5 tonnes', amount: '₦425,000', status: 'Delivered' },
  { id: 'TY-2024-002', product: 'Fresh Cassava', buyer: 'Garri Masters Inc', quantity: '10 tonnes', amount: '₦350,000', status: 'Processing' },
  { id: 'TY-2024-003', product: 'Palm Oil', buyer: 'Unilever Nigeria', quantity: '2 tonnes', amount: '₦560,000', status: 'Pending' },
  { id: 'TY-2024-004', product: 'Broiler Chicken', buyer: 'ChickenRepublic', quantity: '500 birds', amount: '₦2,600,000', status: 'Delivered' },
  { id: 'TY-2024-005', product: 'Tomatoes', buyer: 'Dangote Farms', quantity: '20 crates', amount: '₦250,000', status: 'Delivered' },
  { id: 'TY-2024-006', product: 'Yellow Maize', buyer: 'Flour Mills Plc', quantity: '15 tonnes', amount: '₦930,000', status: 'Processing' },
];

export const weatherData: WeatherDay[] = [
  { day: 'Mon', temp: 32, condition: 'Sunny', wind: '12 km/h' },
  { day: 'Tue', temp: 30, condition: 'Cloudy', wind: '8 km/h' },
  { day: 'Wed', temp: 28, condition: 'Rain', wind: '15 km/h' },
  { day: 'Thu', temp: 31, condition: 'Sunny', wind: '10 km/h' },
  { day: 'Fri', temp: 29, condition: 'Cloudy', wind: '14 km/h' },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How IoT Sensors Are Revolutionizing Irrigation in Nigeria',
    excerpt: 'Smart irrigation systems can reduce water usage by up to 40% while boosting crop yields. We explore the latest sensor technology transforming Nigerian farms.',
    category: 'Technology',
    date: 'March 15, 2025',
    author: 'Dr. Emeka Obi',
    image: 'https://picsum.photos/seed/terrablog1/800/600',
  },
  {
    id: 2,
    title: 'Commodity Prices: Q1 2025 Market Outlook',
    excerpt: 'Rice prices stabilize as local production increases. Maize demand from poultry sector drives 15% price uptick. Full market analysis inside.',
    category: 'Market',
    date: 'March 8, 2025',
    author: 'Amina Yusuf',
    image: 'https://picsum.photos/seed/terrablog2/800/600',
  },
  {
    id: 3,
    title: 'Federal Government Launches ₦500B Agricultural Fund',
    excerpt: 'The new agricultural development fund targets smallholder farmers with low-interest loans and input subsidies across 24 states.',
    category: 'Policy',
    date: 'February 28, 2025',
    author: 'Chukwuma Eze',
    image: 'https://picsum.photos/seed/terrablog3/800/600',
  },
  {
    id: 4,
    title: '5 Cover Crops That Improve Nigerian Soil Health',
    excerpt: 'Mucuna, cowpea, and other nitrogen-fixing cover crops that restore soil fertility naturally. Practical guide for smallholder farmers.',
    category: 'Farming Tips',
    date: 'February 20, 2025',
    author: 'Biodun Adeyemi',
    image: 'https://picsum.photos/seed/terrablog4/800/600',
  },
  {
    id: 5,
    title: 'From Farm to Shelf: Building a Cold Chain Network',
    excerpt: 'Nigeria loses 40% of produce post-harvest. How TerraYield and partners are building a cold chain network to change that.',
    category: 'Technology',
    date: 'February 12, 2025',
    author: 'Ngozi Okafor',
    image: 'https://picsum.photos/seed/terrablog5/800/600',
  },
  {
    id: 6,
    title: 'Organic Certification: A Complete Guide for Nigerian Farmers',
    excerpt: 'Step-by-step guide to getting your farm organic-certified. Costs, timelines, and which certifications international buyers accept.',
    category: 'Farming Tips',
    date: 'February 5, 2025',
    author: 'Dr. Emeka Obi',
    image: 'https://picsum.photos/seed/terrablog6/800/600',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Adaeze Okonkwo',
    role: 'CEO & Co-Founder',
    bio: 'Former McKinsey consultant with 12 years in agricultural supply chains. Built TerraYield to close the gap between Nigerian farmers and premium markets.',
    image: 'https://picsum.photos/seed/terrateam1/400/400',
  },
  {
    name: 'Oluwaseun Adeyemi',
    role: 'CTO & Co-Founder',
    bio: 'Ex-Andela engineer. Led IoT deployments across 3 African countries. Believes technology should work for farmers, not the other way around.',
    image: 'https://picsum.photos/seed/terrateam2/400/400',
  },
  {
    name: 'Dr. Ibrahim Musa',
    role: 'Head of Agronomy',
    bio: 'PhD in Soil Science from ABU Zaria. 15 years of field research. Leads our crop advisory and soil testing programs.',
    image: 'https://picsum.photos/seed/terrateam3/400/400',
  },
  {
    name: 'Funke Akindele',
    role: 'VP, Partnerships',
    bio: 'Former UN FAO program officer. Manages relationships with development partners, government agencies, and international buyers.',
    image: 'https://picsum.photos/seed/terrateam4/400/400',
  },
];

export const testimonials = [
  {
    name: 'Malam Sani Danladi',
    location: 'Kano State',
    quote: 'Before TerraYield, I sold my groundnuts to middlemen at ₦180/kg. Now I sell directly to buyers at ₦350/kg. My income has doubled in one season.',
    image: 'https://picsum.photos/seed/terratest1/200/200',
  },
  {
    name: 'Mrs. Ngozi Ibe',
    location: 'Enugu State',
    quote: 'The soil testing service showed my farm was nitrogen-deficient. After following the recommendations, my cassava yield increased by 60%. Game changer.',
    image: 'https://picsum.photos/seed/terratest2/200/200',
  },
  {
    name: 'Alhaji Bello Yusuf',
    location: 'Benue State',
    quote: 'I used to lose 30% of my tomatoes before they reached the market. TerraYield connected me with cold chain logistics and now my losses are below 5%.',
    image: 'https://picsum.photos/seed/terratest3/200/200',
  },
];
