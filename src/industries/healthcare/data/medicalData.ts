export interface Service {
  id: number;
  name: string;
  department: string;
  icon: string;
  description: string;
}

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  department: string;
  qualifications: string;
  experience: number;
  availability: 'Available' | 'Limited' | 'Unavailable';
  image: string;
  bio: string;
}

export const departments = [
  'General Practice',
  'Pediatrics',
  'Cardiology',
  'Dermatology',
  'Gynecology',
  'Orthopedics',
  'Eye Care',
  'Dental',
  'Mental Health',
  'Laboratory',
  'Pharmacy',
  'Emergency',
];

export const services: Service[] = [
  {
    id: 1,
    name: 'General Practice',
    department: 'General Practice',
    icon: '🩺',
    description:
      'Comprehensive primary care including routine check-ups, vaccinations, chronic disease management, and health screenings for the whole family.',
  },
  {
    id: 2,
    name: 'Pediatrics',
    department: 'Pediatrics',
    icon: '👶',
    description:
      'Specialized child healthcare from newborn care to adolescence. Growth monitoring, immunizations, and developmental assessments.',
  },
  {
    id: 3,
    name: 'Cardiology',
    department: 'Cardiology',
    icon: '❤️',
    description:
      'Advanced heart care including ECG, echocardiography, stress testing, and management of hypertension and heart conditions.',
  },
  {
    id: 4,
    name: 'Dermatology',
    department: 'Dermatology',
    icon: '🧴',
    description:
      'Expert skin care for acne, eczema, psoriasis, skin infections, cosmetic dermatology, and skin cancer screening.',
  },
  {
    id: 5,
    name: 'Gynecology',
    department: 'Gynecology',
    icon: '🌸',
    description:
      'Complete women\'s health services including prenatal care, family planning, cervical screening, and reproductive health consultations.',
  },
  {
    id: 6,
    name: 'Orthopedics',
    department: 'Orthopedics',
    icon: '🦴',
    description:
      'Bone, joint, and muscle care including fracture management, sports injuries, arthritis treatment, and physiotherapy referrals.',
  },
  {
    id: 7,
    name: 'Eye Care',
    department: 'Eye Care',
    icon: '👁️',
    description:
      'Comprehensive ophthalmology services including vision testing, glaucoma screening, cataract assessment, and prescription eyewear.',
  },
  {
    id: 8,
    name: 'Dental Care',
    department: 'Dental',
    icon: '🦷',
    description:
      'Full dental services from routine cleanings and fillings to root canals, extractions, orthodontics, and cosmetic dentistry.',
  },
  {
    id: 9,
    name: 'Mental Health',
    department: 'Mental Health',
    icon: '🧠',
    description:
      'Confidential mental wellness support including counseling, psychiatric evaluations, anxiety and depression management, and therapy sessions.',
  },
  {
    id: 10,
    name: 'Laboratory Services',
    department: 'Laboratory',
    icon: '🔬',
    description:
      'State-of-the-art diagnostics including blood work, urinalysis, hormonal panels, genetic testing, and rapid COVID/malaria testing.',
  },
  {
    id: 11,
    name: 'Pharmacy',
    department: 'Pharmacy',
    icon: '💊',
    description:
      'On-site pharmacy with genuine medications, prescription fulfillment, over-the-counter products, and pharmacist consultations.',
  },
  {
    id: 12,
    name: 'Emergency Medicine',
    department: 'Emergency',
    icon: '🚑',
    description:
      'Round-the-clock emergency care with fully equipped trauma rooms, ambulance services, and rapid-response medical teams.',
  },
];

export const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Adaeze Okafor',
    specialty: 'General Practice',
    department: 'General Practice',
    qualifications: 'MBBS, FMCGP',
    experience: 14,
    availability: 'Available',
    image: 'https://picsum.photos/seed/doctor1/400/400',
    bio: 'Dr. Okafor is a seasoned family medicine physician with 14 years of experience. She leads the primary care unit and is passionate about preventive medicine.',
  },
  {
    id: 2,
    name: 'Dr. Chukwuemeka Nwosu',
    specialty: 'Cardiology',
    department: 'Cardiology',
    qualifications: 'MBBS, FWACP (Cardiology)',
    experience: 18,
    availability: 'Limited',
    image: 'https://picsum.photos/seed/doctor2/400/400',
    bio: 'A leading cardiologist trained in Lagos and London. Dr. Nwosu specializes in interventional cardiology and heart failure management.',
  },
  {
    id: 3,
    name: 'Dr. Folake Adeyemi',
    specialty: 'Pediatrics',
    department: 'Pediatrics',
    qualifications: 'MBBS, FMCPaed',
    experience: 11,
    availability: 'Available',
    image: 'https://picsum.photos/seed/doctor3/400/400',
    bio: 'Dr. Adeyemi is a compassionate pediatrician who believes in holistic child development. She runs the neonatal and well-baby clinics.',
  },
  {
    id: 4,
    name: 'Dr. Ibrahim Bello',
    specialty: 'Orthopedics',
    department: 'Orthopedics',
    qualifications: 'MBBS, FWACS (Ortho)',
    experience: 16,
    availability: 'Available',
    image: 'https://picsum.photos/seed/doctor4/400/400',
    bio: 'Orthopedic surgeon with sub-specialty in sports medicine. Dr. Bello has performed over 2,000 successful surgeries and consults for professional athletes.',
  },
  {
    id: 5,
    name: 'Dr. Ngozi Eze',
    specialty: 'Gynecology',
    department: 'Gynecology',
    qualifications: 'MBBS, FRCOG',
    experience: 13,
    availability: 'Limited',
    image: 'https://picsum.photos/seed/doctor5/400/400',
    bio: 'Consultant obstetrician and gynecologist with training from the UK. Dr. Eze specializes in high-risk pregnancies and minimally invasive gynecologic surgery.',
  },
  {
    id: 6,
    name: 'Dr. Olumide Fashola',
    specialty: 'Dermatology',
    department: 'Dermatology',
    qualifications: 'MBBS, FMCD',
    experience: 9,
    availability: 'Available',
    image: 'https://picsum.photos/seed/doctor6/400/400',
    bio: 'Dr. Fashola combines clinical dermatology with cosmetic expertise. He treats skin of color with particular attention to hyperpigmentation and keloid management.',
  },
  {
    id: 7,
    name: 'Dr. Amina Yusuf',
    specialty: 'Mental Health',
    department: 'Mental Health',
    qualifications: 'MBBS, FMCPsych',
    experience: 10,
    availability: 'Unavailable',
    image: 'https://picsum.photos/seed/doctor7/400/400',
    bio: 'A compassionate psychiatrist focused on destigmatizing mental health care in Nigeria. Dr. Yusuf offers therapy, counseling, and pharmacological management.',
  },
  {
    id: 8,
    name: 'Dr. Tunde Ajayi',
    specialty: 'Emergency Medicine',
    department: 'Emergency',
    qualifications: 'MBBS, FCEM',
    experience: 12,
    availability: 'Available',
    image: 'https://picsum.photos/seed/doctor8/400/400',
    bio: 'Dr. Ajayi leads the 24/7 emergency department. Trained in South Africa, he brings world-class trauma and acute care expertise to Solace Medical Centre.',
  },
];

export const testimonials = [
  {
    name: 'Mrs. Chidinma Obi',
    text: 'Solace Medical Centre saved my father\'s life during a cardiac emergency. The speed and professionalism of the team was extraordinary. We are forever grateful.',
    role: 'Patient Family',
  },
  {
    name: 'Mr. Babajide Oke',
    text: 'The best healthcare experience I\'ve had in Lagos. Clean facilities, short wait times, and doctors who actually listen. Dr. Okafor is exceptional.',
    role: 'Regular Patient',
  },
  {
    name: 'Eng. Fatima Abdullahi',
    text: 'Their laboratory turnaround is incredible. I had my full panel results within 4 hours. The online patient portal makes managing my family\'s health so convenient.',
    role: 'Patient',
  },
];

export const accreditations = [
  'Joint Commission International (JCI) Accredited',
  'Nigerian Medical Association Approved',
  'ISO 9001:2015 Certified',
  'Health Facility Monitoring & Accreditation Agency (HEFAMAA)',
  'West African College of Physicians Partner',
];

export const facilities = [
  'Modern ICU with 12 beds',
  'Advanced Imaging Suite (CT, MRI, X-Ray)',
  'Fully Equipped Operating Theatres',
  'On-site Pharmacy & Laboratory',
  'Private and Semi-Private Patient Rooms',
  'Ambulance Fleet with GPS Tracking',
  'Telemedicine Consultation Rooms',
  'Child-Friendly Pediatric Ward',
];
