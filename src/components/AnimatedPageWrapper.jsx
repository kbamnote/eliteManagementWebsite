/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedPageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        duration: 0.5,
        ease: "easeInOut"
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPageWrapper;