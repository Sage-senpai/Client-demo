import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './BackToShowcase.scss';

export default function BackToShowcase() {
  const navigate = useNavigate();

  return (
    <motion.button
      className="back-to-showcase"
      onClick={() => navigate('/')}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      ← Back to showcase
    </motion.button>
  );
}
