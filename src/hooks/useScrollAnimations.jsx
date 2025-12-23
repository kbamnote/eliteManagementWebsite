/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Custom hook for scroll-triggered animations
export const useScrollAnimations = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, threshold: 0.05 }); // Changed to trigger more frequently and repeat on scroll

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return { ref, controls, inView };
};

// Animated component for elements that come into view
export const AnimatedOnScroll = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.3, // Quicker animation
  direction = 'up',
  ...props 
}) => {
  const { ref, controls } = useScrollAnimations();

  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 30, opacity: 0 };
      case 'down': return { y: -30, opacity: 0 };
      case 'left': return { x: -30, opacity: 0 };
      case 'right': return { x: 30, opacity: 0 };
      default: return { y: 30, opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    return { y: 0, x: 0, opacity: 1, scale: 1 };
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialPosition()}
      animate={controls}
      variants={{
        visible: { 
          ...getAnimatePosition(),
          transition: { 
            duration, 
            delay,
            ease: [0.25, 0.1, 0.25, 1]
          }
        },
        hidden: getInitialPosition()
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Parallax effect for scroll-based movement
export const ParallaxElement = ({ 
  children, 
  speed = 0.5, 
  className = '',
  ...props 
}) => {
  const { ref, controls } = useScrollAnimations();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ y: 0 }}
      animate={controls}
      variants={{
        visible: { 
          y: [0, -20 * speed, 0],
          transition: { 
            duration: 1.5, // Quicker animation
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        },
        hidden: { y: 0 }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Staggered animations for multiple elements
export const StaggerContainer = ({ 
  children, 
  className = '',
  staggerDelay = 0.05, // Quicker stagger
  ...props 
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.05 }} // Trigger more frequently and repeat
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
        hidden: {},
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = '', delay = 0, ...props }) => {
  return (
    <motion.div
      className={className}
      variants={{
        visible: { 
          opacity: 1, 
          y: 0, 
          x: 0,
          scale: 1,
          transition: { 
            duration: 0.3, // Quicker animation
            delay,
            ease: [0.25, 0.1, 0.25, 1]
          }
        },
        hidden: { 
          opacity: 0, 
          y: 30,
          x: 0,
          scale: 0.9
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};