import React from 'react';
import { motion } from 'framer-motion';

const AuroraText = ({ 
  children, 
  className = '',
  animationDuration = 3
}) => {
  return (
    <div className="relative inline-block">
      {/* Aurora glow effect */}
      <motion.div
        className="absolute inset-0 blur-xl opacity-70"
        style={{
          background: 'conic-gradient(#8b5cf6, #a855f7, #c084fc, #8b5cf6)',
          zIndex: -1,
          borderRadius: '100%',
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Inner glow */}
      <motion.div
        className="absolute inset-0 blur-md opacity-50"
        style={{
          background: 'radial-gradient(circle, #8b5cf6, #a855f7, #8b5cf6)',
          zIndex: -1,
          borderRadius: '100%',
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: animationDuration / 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Text with gradient */}
      <motion.span
        className={`${className} relative`}
        style={{
          background: 'linear-gradient(90deg, #7e22ce, #a855f7, #c084fc, #a855f7, #7e22ce)',
          backgroundSize: '300% 300%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.span>
    </div>
  );
};

export default AuroraText;