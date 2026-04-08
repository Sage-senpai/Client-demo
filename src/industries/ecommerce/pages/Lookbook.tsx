import { motion } from 'framer-motion';
import AnimatedSection from '../../../components/shared/AnimatedSection';
import { fadeUp } from '../../../styles/_animations';

const springCollection = [
  { image: 'https://picsum.photos/seed/nuvlb1/600/800', label: 'Adire Dreams' },
  { image: 'https://picsum.photos/seed/nuvlb2/600/800', label: 'Bold Prints' },
  { image: 'https://picsum.photos/seed/nuvlb3/600/800', label: 'Sunset Hues' },
  { image: 'https://picsum.photos/seed/nuvlb4/600/800', label: 'Everyday Luxe' },
  { image: 'https://picsum.photos/seed/nuvlb5/600/800', label: 'Street Edit' },
  { image: 'https://picsum.photos/seed/nuvlb6/600/800', label: 'Golden Hour' },
];

const harmattanCollection = [
  { image: 'https://picsum.photos/seed/nuvlb7/600/800', label: 'Layered Up' },
  { image: 'https://picsum.photos/seed/nuvlb8/600/800', label: 'Earth Tones' },
  { image: 'https://picsum.photos/seed/nuvlb9/600/800', label: 'Warm Knits' },
  { image: 'https://picsum.photos/seed/nuvlb10/600/800', label: 'Night Out' },
  { image: 'https://picsum.photos/seed/nuvlb11/600/800', label: 'Aso Oke Glow' },
  { image: 'https://picsum.photos/seed/nuvlb12/600/800', label: 'Statement Coats' },
];

const festiveCollection = [
  { image: 'https://picsum.photos/seed/nuvlb13/600/800', label: 'Celebration' },
  { image: 'https://picsum.photos/seed/nuvlb14/600/800', label: 'Metallic Weave' },
  { image: 'https://picsum.photos/seed/nuvlb15/600/800', label: 'Regal Whites' },
  { image: 'https://picsum.photos/seed/nuvlb16/600/800', label: 'Party Ready' },
  { image: 'https://picsum.photos/seed/nuvlb17/600/800', label: 'After Dark' },
  { image: 'https://picsum.photos/seed/nuvlb18/600/800', label: 'Gold Rush' },
];

interface SeasonGridProps {
  label: string;
  images: { image: string; label: string }[];
}

function SeasonGrid({ label, images }: SeasonGridProps) {
  return (
    <div>
      <h3 className="ecom-lookbook__season-label">{label}</h3>
      <div className="ecom-lookbook__grid">
        {images.map((item, i) => (
          <motion.div
            className="ecom-lookbook__image-card"
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <img src={item.image} alt={item.label} loading="lazy" />
            <span className="ecom-lookbook__image-label">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Lookbook() {
  return (
    <div className="ecom-lookbook">
      {/* Header */}
      <section className="ecom-lookbook__header">
        <AnimatedSection className="ecom-lookbook__header-inner">
          <p className="section-label">Editorial</p>
          <motion.h1
            className="ecom-lookbook__heading"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            The Nuvora Lookbook
          </motion.h1>
          <motion.p
            className="ecom-lookbook__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Styled editorial shoots showcasing our collections across seasons.
            Every image tells the story of African fashion reimagined.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* Grids */}
      <section className="ecom-lookbook__grid-section">
        <AnimatedSection className="ecom-lookbook__grid-inner">
          <SeasonGrid label="Spring / Summer 2025" images={springCollection} />
          <SeasonGrid label="Harmattan Collection" images={harmattanCollection} />
          <SeasonGrid label="Festive Season" images={festiveCollection} />
        </AnimatedSection>
      </section>
    </div>
  );
}
