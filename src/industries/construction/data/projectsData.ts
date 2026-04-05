export interface Project {
  id: number;
  name: string;
  location: string;
  sector: 'Commercial' | 'Residential' | 'Industrial' | 'Infrastructure' | 'Institutional';
  value: string;
  status: 'Completed' | 'Ongoing';
  description: string;
  challenge: string;
  solution: string;
  image: string;
  techTags: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    name: 'Eko Atlantic Tower C',
    location: 'Lagos, Nigeria',
    sector: 'Commercial',
    value: '₦4,200M',
    status: 'Completed',
    description:
      'A 22-storey Grade A commercial office tower in the heart of Eko Atlantic City featuring floor-to-ceiling glazing, integrated smart building systems, and a rooftop helipad. The building achieved a LEED Silver equivalent rating.',
    challenge:
      'Building on reclaimed land demanded specialized deep piling solutions to withstand the unique soil conditions and high water table typical of the Lagos coastline.',
    solution:
      'We deployed continuous flight auger piles reaching 45 meters depth, supported by a comprehensive dewatering system that maintained dry working conditions throughout the 28-month construction period.',
    image: 'https://picsum.photos/seed/bastion1/800/600',
    techTags: ['Steel Frame', 'Deep Piling', 'Smart Systems', 'Curtain Wall', 'LEED'],
  },
  {
    id: 2,
    name: 'Lekki Gardens Estate Phase III',
    location: 'Lekki, Lagos',
    sector: 'Residential',
    value: '₦2,800M',
    status: 'Completed',
    description:
      'A master-planned estate of 120 premium residential units spanning duplexes, terraces, and apartments, complete with a clubhouse, swimming pool, playground, and 24-hour power supply through an integrated gas-powered generation plant.',
    challenge:
      'Delivering 120 units simultaneously while maintaining consistent quality across all building types required meticulous planning and resource coordination.',
    solution:
      'Bastion implemented a phased zone delivery model with dedicated QA teams per zone, using precast concrete panels for the terraces to accelerate the build cycle by 35%.',
    image: 'https://picsum.photos/seed/bastion2/800/600',
    techTags: ['Precast Concrete', 'Estate Infrastructure', 'Power Generation', 'Landscaping'],
  },
  {
    id: 3,
    name: 'Dangote Refinery Access Road',
    location: 'Ibeju-Lekki, Lagos',
    sector: 'Infrastructure',
    value: '₦6,500M',
    status: 'Completed',
    description:
      'A 14-kilometer dual carriageway access road connecting the Lekki Free Trade Zone to the main expressway, featuring heavy-duty pavement designed for 60-tonne truck loads, drainage culverts, and solar-powered street lighting.',
    challenge:
      'The route traversed swampy terrain that required extensive ground improvement before any road construction could begin.',
    solution:
      'We employed sand-fill compaction and geotextile reinforcement over a 3-kilometer swamp section, then used roller-compacted concrete for the heavy-duty pavement to ensure longevity under extreme loads.',
    image: 'https://picsum.photos/seed/bastion3/800/600',
    techTags: ['Road Construction', 'Ground Improvement', 'Geotextile', 'Solar Lighting'],
  },
  {
    id: 4,
    name: 'TechHub Innovation Centre',
    location: 'Abuja, FCT',
    sector: 'Commercial',
    value: '₦1,950M',
    status: 'Completed',
    description:
      'A 5-storey technology innovation hub with co-working spaces, server rooms, auditorium, and rooftop solar farm. The building features an exposed concrete and steel aesthetic designed to reflect the innovative spirit of its tenants.',
    challenge:
      'Integrating heavy mechanical and electrical infrastructure for server rooms while maintaining an open-plan flexible workspace design.',
    solution:
      'Bastion designed a raised access floor system with modular MEP risers that allow tenants to reconfigure their spaces without structural modifications.',
    image: 'https://picsum.photos/seed/bastion4/800/600',
    techTags: ['Raised Floors', 'Solar PV', 'Exposed Concrete', 'MEP Integration'],
  },
  {
    id: 5,
    name: 'Kano Flour Mill Expansion',
    location: 'Kano, Nigeria',
    sector: 'Industrial',
    value: '₦3,100M',
    status: 'Completed',
    description:
      'Expansion of an existing flour milling facility to double its production capacity, including new silo structures, processing halls, packaging lines, and a dedicated rail spur for raw material delivery.',
    challenge:
      'Construction had to proceed while the existing facility continued full production, with zero tolerance for contamination of food-grade products.',
    solution:
      'We established a hermetic containment barrier between the construction zone and operational areas, with real-time air quality monitoring and negative pressure ventilation in active milling sections.',
    image: 'https://picsum.photos/seed/bastion5/800/600',
    techTags: ['Industrial Steel', 'Silo Construction', 'Containment', 'Rail Infrastructure'],
  },
  {
    id: 6,
    name: 'University of Lagos New Faculty Building',
    location: 'Lagos, Nigeria',
    sector: 'Institutional',
    value: '₦1,400M',
    status: 'Ongoing',
    description:
      'A state-of-the-art 4-storey faculty building for the Department of Engineering, featuring lecture halls, research laboratories, a fabrication workshop, and a 300-seat auditorium with integrated AV systems.',
    challenge:
      'Constructing on a tight campus site adjacent to occupied buildings while maintaining student and staff safety during an active academic session.',
    solution:
      'Bastion developed a comprehensive traffic management and safety plan with dedicated pedestrian diversions, noise-restricted working hours, and weekend-only heavy lift operations.',
    image: 'https://picsum.photos/seed/bastion6/800/600',
    techTags: ['Institutional', 'Lab Design', 'AV Systems', 'Campus Construction'],
  },
  {
    id: 7,
    name: 'Banana Island Luxury Residence',
    location: 'Ikoyi, Lagos',
    sector: 'Residential',
    value: '₦1,800M',
    status: 'Ongoing',
    description:
      'An ultra-luxury 6-bedroom waterfront mansion with infinity pool, private dock, home cinema, wine cellar, and full smart home automation. The design blends contemporary Nigerian architecture with Mediterranean influences.',
    challenge:
      'The client demanded imported Italian marble, German fixtures, and Japanese smart home systems, requiring precise coordination of international supply chains and specialist installers.',
    solution:
      'We established a dedicated procurement office that coordinated with 14 international suppliers, pre-inspected all materials at origin, and sequenced deliveries to match the installation programme exactly.',
    image: 'https://picsum.photos/seed/bastion7/800/600',
    techTags: ['Luxury Finish', 'Smart Home', 'Waterfront', 'Imported Materials'],
  },
  {
    id: 8,
    name: 'Enugu-Onitsha Expressway Bridge Rehabilitation',
    location: 'Anambra, Nigeria',
    sector: 'Infrastructure',
    value: '₦5,200M',
    status: 'Ongoing',
    description:
      'Rehabilitation and widening of three critical bridges along the Enugu-Onitsha expressway corridor, including structural strengthening, deck replacement, and installation of modern crash barriers and drainage systems.',
    challenge:
      'The bridges had to remain partially open to traffic throughout the rehabilitation, as they serve as the sole crossing points for thousands of daily commuters and heavy goods vehicles.',
    solution:
      'Bastion implemented a half-bridge phased construction approach with temporary steel bailey bridges to maintain traffic flow, complemented by night-shift concrete pours to minimize disruption.',
    image: 'https://picsum.photos/seed/bastion8/800/600',
    techTags: ['Bridge Engineering', 'Structural Rehab', 'Bailey Bridge', 'Night Works'],
  },
  {
    id: 9,
    name: 'Port Harcourt Warehouse Complex',
    location: 'Port Harcourt, Rivers',
    sector: 'Industrial',
    value: '₦2,400M',
    status: 'Completed',
    description:
      'A 40,000 m² warehousing and logistics complex with 8 independent warehouse units, cold storage facility, truck staging area, and administrative offices. The complex serves as a major distribution hub for the Niger Delta region.',
    challenge:
      'The site sits in a high water table zone prone to flooding, and the client required a floor loading capacity of 50 kN/m² for heavy pallet storage.',
    solution:
      'We designed a raft foundation system with integrated French drains and a perimeter flood bund, achieving the required floor capacity through post-tensioned concrete slabs.',
    image: 'https://picsum.photos/seed/bastion9/800/600',
    techTags: ['Warehouse', 'Cold Storage', 'Post-Tensioned', 'Flood Protection'],
  },
  {
    id: 10,
    name: 'Abuja International School Campus',
    location: 'Abuja, FCT',
    sector: 'Institutional',
    value: '₦3,700M',
    status: 'Completed',
    description:
      'A full K-12 international school campus on 15 hectares, comprising primary and secondary classroom blocks, science labs, sports complex with Olympic-size pool, dormitories, staff quarters, and a 500-seat amphitheatre.',
    challenge:
      'The ambitious scope had to be delivered within a strict 18-month timeline to meet the school opening date, across a site that required significant earthworks and levelling.',
    solution:
      'Bastion mobilized three independent construction teams working in parallel on academic, sports, and residential zones, with a centralized logistics hub managing materials for all three fronts.',
    image: 'https://picsum.photos/seed/bastion10/800/600',
    techTags: ['Campus Design', 'Sports Complex', 'Dormitories', 'Fast-Track', 'Earthworks'],
  },
];

export default projectsData;
