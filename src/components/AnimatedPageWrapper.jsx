/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedPageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, opacity: 0 }}
      transition={{ 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // Custom easing for smoother animation
        opacity: { duration: 0.4 },
        y: { duration: 0.6 }
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPageWrapper;