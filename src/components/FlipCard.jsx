/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const FlipCard = ({ frontTitle, frontText, backTitle, backText, icon }) => {
  return (
    <motion.div 
      className="flip-card-container"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flip-card">
        <motion.div 
          className="flip-card-inner"
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flip-card-front">
            {icon && <div className="flip-icon">{icon}</div>}
            <h3 className="flip-title">{frontTitle}</h3>
            <p className="flip-text">{frontText}</p>
          </div>
          <div className="flip-card-back">
            <h3 className="flip-title">{backTitle}</h3>
            <p className="flip-text">{backText}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FlipCard;