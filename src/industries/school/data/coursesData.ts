export interface Course {
  id: number;
  name: string;
  department: 'Technology' | 'Business' | 'Medicine' | 'Law' | 'Arts' | 'Engineering';
  duration: 'Short Course' | 'Certificate' | 'Diploma' | 'Degree';
  durationLabel: string;
  format: 'In-Person' | 'Online' | 'Hybrid';
  fee: string;
  description: string;
  image: string;
}

const coursesData: Course[] = [
  // ── Technology ──
  {
    id: 1,
    name: 'Full-Stack Software Engineering',
    department: 'Technology',
    duration: 'Degree',
    durationLabel: '4 Years',
    format: 'In-Person',
    fee: '₦2,400,000 / yr',
    description:
      'A comprehensive programme covering front-end and back-end development, cloud infrastructure, DevOps, and software architecture with hands-on projects every semester.',
    image: 'https://picsum.photos/seed/course1/400/300',
  },
  {
    id: 2,
    name: 'Data Science & Analytics',
    department: 'Technology',
    duration: 'Diploma',
    durationLabel: '18 Months',
    format: 'Hybrid',
    fee: '₦1,800,000',
    description:
      'Master statistical modelling, machine learning, and data visualisation using Python, R, and modern BI tools with real-world case studies from African markets.',
    image: 'https://picsum.photos/seed/course2/400/300',
  },

  // ── Business ──
  {
    id: 3,
    name: 'MBA — African Markets Focus',
    department: 'Business',
    duration: 'Degree',
    durationLabel: '2 Years',
    format: 'In-Person',
    fee: '₦3,200,000 / yr',
    description:
      'An executive MBA programme built around Africa\'s emerging economies, covering strategy, finance, supply chain, and leadership with immersive consulting projects.',
    image: 'https://picsum.photos/seed/course3/400/300',
  },
  {
    id: 4,
    name: 'Entrepreneurship & Innovation',
    department: 'Business',
    duration: 'Certificate',
    durationLabel: '6 Months',
    format: 'Online',
    fee: '₦650,000',
    description:
      'Launch your venture with structured modules on ideation, business modelling, fundraising, and go-to-market strategy tailored for the African startup ecosystem.',
    image: 'https://picsum.photos/seed/course4/400/300',
  },

  // ── Medicine ──
  {
    id: 5,
    name: 'Medicine & Surgery (MBBS)',
    department: 'Medicine',
    duration: 'Degree',
    durationLabel: '6 Years',
    format: 'In-Person',
    fee: '₦3,800,000 / yr',
    description:
      'A rigorous medical programme combining pre-clinical sciences, clinical rotations across partner hospitals, and community health outreach across West Africa.',
    image: 'https://picsum.photos/seed/course5/400/300',
  },
  {
    id: 6,
    name: 'Public Health & Epidemiology',
    department: 'Medicine',
    duration: 'Diploma',
    durationLabel: '12 Months',
    format: 'Hybrid',
    fee: '₦1,200,000',
    description:
      'Equip yourself with the skills to design and manage public health interventions, disease surveillance systems, and health policy across diverse African contexts.',
    image: 'https://picsum.photos/seed/course6/400/300',
  },

  // ── Law ──
  {
    id: 7,
    name: 'Bachelor of Laws (LLB)',
    department: 'Law',
    duration: 'Degree',
    durationLabel: '5 Years',
    format: 'In-Person',
    fee: '₦2,600,000 / yr',
    description:
      'A foundational law degree covering constitutional law, commercial law, human rights, and jurisprudence with moot courts and legal clinics every term.',
    image: 'https://picsum.photos/seed/course7/400/300',
  },
  {
    id: 8,
    name: 'International Trade & Maritime Law',
    department: 'Law',
    duration: 'Certificate',
    durationLabel: '9 Months',
    format: 'Online',
    fee: '₦900,000',
    description:
      'Specialise in the legal frameworks governing cross-border trade, shipping, and maritime disputes with case studies from African ports and trade corridors.',
    image: 'https://picsum.photos/seed/course8/400/300',
  },

  // ── Arts ──
  {
    id: 9,
    name: 'African Literature & Creative Writing',
    department: 'Arts',
    duration: 'Degree',
    durationLabel: '3 Years',
    format: 'In-Person',
    fee: '₦1,600,000 / yr',
    description:
      'Explore the rich tapestry of African storytelling — from Achebe to Adichie — while developing your craft through workshops, residencies, and publishing labs.',
    image: 'https://picsum.photos/seed/course9/400/300',
  },
  {
    id: 10,
    name: 'Visual Arts & Digital Media',
    department: 'Arts',
    duration: 'Short Course',
    durationLabel: '8 Weeks',
    format: 'Hybrid',
    fee: '₦350,000',
    description:
      'An intensive studio programme blending traditional African art forms with digital design, animation, and mixed-media practice for contemporary creatives.',
    image: 'https://picsum.photos/seed/course10/400/300',
  },

  // ── Engineering ──
  {
    id: 11,
    name: 'Civil & Structural Engineering',
    department: 'Engineering',
    duration: 'Degree',
    durationLabel: '5 Years',
    format: 'In-Person',
    fee: '₦2,800,000 / yr',
    description:
      'Design and build Africa\'s future infrastructure — from bridges to smart cities — with a curriculum grounded in sustainable engineering practice and fieldwork.',
    image: 'https://picsum.photos/seed/course11/400/300',
  },
  {
    id: 12,
    name: 'Renewable Energy Systems',
    department: 'Engineering',
    duration: 'Short Course',
    durationLabel: '10 Weeks',
    format: 'Online',
    fee: '₦420,000',
    description:
      'Learn to design, install, and manage solar, wind, and hybrid energy systems tailored for off-grid and urban African environments.',
    image: 'https://picsum.photos/seed/course12/400/300',
  },
];

export default coursesData;
