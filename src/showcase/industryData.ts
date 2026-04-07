export interface IndustryItem {
  id: string;
  name: string;
  brand: string;
  description: string;
  accent: string;
  image: string;
  route: string;
}

const industries: IndustryItem[] = [
  {
    id: 'restaurant',
    name: 'Restaurant',
    brand: 'Koko & Thyme',
    description: 'Contemporary West African fine dining experience with a modern twist.',
    accent: '#8B3A2A',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80',
    route: '/restaurant',
  },
  {
    id: 'airport',
    name: 'Airport',
    brand: 'Apogee International',
    description: 'Premium African hub airport with real-time flight tracking.',
    accent: '#1E6FD9',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
    route: '/airport',
  },
  {
    id: 'resort',
    name: 'Vacation Resort',
    brand: 'Coral Terrace Resort & Spa',
    description: 'Luxury coastal resort with full booking system and spa services.',
    accent: '#0B6E6E',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80',
    route: '/resort',
  },
  {
    id: 'delivery',
    name: 'Delivery System',
    brand: 'Zinga Delivery',
    description: 'Pan-African same-day delivery with live order tracking.',
    accent: '#F59E0B',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    route: '/delivery',
  },
  {
    id: 'school',
    name: 'School / Academy',
    brand: 'Meridian Institute',
    description: 'Pan-African higher education with course catalog and admissions.',
    accent: '#1B3A6B',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80',
    route: '/school',
  },
  {
    id: 'saas',
    name: 'SaaS Product',
    brand: 'Vela',
    description: 'AI-enhanced team productivity and project intelligence platform.',
    accent: '#4F46E5',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80',
    route: '/saas',
  },
  {
    id: 'tech',
    name: 'Tech Company',
    brand: 'Axiom Labs',
    description: 'Full-stack software consultancy with AI integration services.',
    accent: '#38BDF8',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    route: '/tech',
  },
  {
    id: 'construction',
    name: 'Construction',
    brand: 'Bastion Group',
    description: 'Civil & structural engineering firm delivering landmark projects.',
    accent: '#D97706',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    route: '/construction',
  },
  {
    id: 'beauty',
    name: 'Hair & Beauty',
    brand: 'Radiance Studio',
    description: 'Premium urban salon with full appointment booking system.',
    accent: '#C49A8A',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80',
    route: '/beauty',
  },
  {
    id: 'coworking',
    name: 'Coworking & Café',
    brand: 'Grove & Co.',
    description: 'Biophilic coworking space with artisan café and event booking.',
    accent: '#2D4A32',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    route: '/coworking',
  },
];

export default industries;
