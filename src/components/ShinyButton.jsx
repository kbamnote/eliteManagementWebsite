import React from 'react';
import { motion } from 'framer-motion';

const ShinyButton = ({ 
  children, 
  className = '',
  baseColor = '#3b82f6',
  hoverColor = '#2563eb',
  borderRadius = '12px',
  animationDuration = '3s',
  onClick,
  ...props 
}) => {
  return (
    <motion.button
      className={`relative overflow-hidden px-6 py-3 font-medium transition-all ${className}`}
      style={{ borderRadius }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {/* Shiny overlay */}
      <span 
        className="absolute inset-0"
        style={{
          borderRadius,
          background: `linear-gradient(120deg, 
            transparent, 
            rgba(255, 255, 255, 0.8), 
            rgba(255, 255, 255, 0.3), 
            transparent)`,
          backgroundSize: '200% 100%',
          animation: `shimmer ${animationDuration} infinite linear`,
        }}
      />
      
      {/* Base background */}
      <span 
        className="absolute inset-0"
        style={{
          borderRadius,
          background: `linear-gradient(to right, ${baseColor}, ${hoverColor})`,
          zIndex: -1
        }}
      />
      
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </motion.button>
  );
};

export default ShinyButton;