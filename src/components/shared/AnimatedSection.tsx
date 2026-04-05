import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

export default function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      <motion.div variants={childVariants}>{children}</motion.div>
    </motion.div>
  );
}
