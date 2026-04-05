import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp } from '../../../styles/_animations';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Meridian Launches New AI Research Centre in Partnership with Google',
    excerpt:
      'The new centre will focus on applied AI solutions for healthcare, agriculture, and financial inclusion across Sub-Saharan Africa, with a $5M initial endowment.',
    category: 'Research',
    date: 'March 15, 2025',
    author: 'Prof. Adaeze Nwankwo',
    image: 'https://picsum.photos/seed/blog1/800/500',
  },
  {
    id: 2,
    title: '2025 Convocation: Over 1,200 Graduates Walk the Stage',
    excerpt:
      'Meridian Institute celebrated its 28th convocation ceremony with graduates from 14 African countries. The keynote was delivered by Dr. Ngozi Okonjo-Iweala.',
    category: 'Events',
    date: 'March 2, 2025',
    author: 'Communications Office',
    image: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Student-Led Startup Wins $250K at Pan-African Innovation Challenge',
    excerpt:
      'A team of three Meridian engineering students won the grand prize for their solar-powered water purification device designed for rural communities.',
    category: 'Student Achievement',
    date: 'February 18, 2025',
    author: 'Dr. Grace Mwangi',
    image: 'https://picsum.photos/seed/blog3/800/500',
  },
  {
    id: 4,
    title: 'New Scholarship Programme for Women in STEM Announced',
    excerpt:
      'The Meridian Women in STEM Fund will cover full tuition for 50 female students annually across Technology, Medicine, and Engineering programmes starting 2025.',
    category: 'Admissions',
    date: 'February 5, 2025',
    author: 'Prof. Fatimah Bello',
    image: 'https://picsum.photos/seed/blog4/800/500',
  },
  {
    id: 5,
    title: 'Faculty Spotlight: Prof. Yaa Asantewaa on the Future of African Literature',
    excerpt:
      'In an exclusive interview, the Dean of Arts discusses how African storytelling is shaping global literary culture and what it means for the next generation of writers.',
    category: 'Faculty',
    date: 'January 22, 2025',
    author: 'Editorial Team',
    image: 'https://picsum.photos/seed/blog5/800/500',
  },
  {
    id: 6,
    title: 'Meridian Partners with Lagos Teaching Hospital for Clinical Rotations',
    excerpt:
      'Medical students will now complete two semesters of clinical rotations at LUTH, gaining exposure to one of West Africa\'s largest teaching hospitals.',
    category: 'Partnerships',
    date: 'January 10, 2025',
    author: 'Dr. Samuel Otieno',
    image: 'https://picsum.photos/seed/blog6/800/500',
  },
];

export default function Blog() {
  return (
    <div>
      {/* ── Page Header ── */}
      <section className="sch-page-header">
        <h1 className="sch-page-header__title">News & Blog</h1>
        <p className="sch-page-header__subtitle">
          Stay up to date with the latest happenings, research breakthroughs, and stories from Meridian Institute
        </p>
      </section>

      {/* ── Blog Grid ── */}
      <AnimatedSection className="sch-blog">
        <div className="sch-blog__grid">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              className="sch-blog__card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="sch-blog__card-img"
                loading="lazy"
              />
              <div className="sch-blog__card-body">
                <span className="sch-blog__card-category">{post.category}</span>
                <h3 className="sch-blog__card-title">{post.title}</h3>
                <p className="sch-blog__card-excerpt">{post.excerpt}</p>
                <div className="sch-blog__card-meta">
                  <div>
                    <span className="sch-blog__card-author">{post.author}</span>
                    <span> &middot; {post.date}</span>
                  </div>
                  <span className="sch-blog__card-link">Read More &rarr;</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
