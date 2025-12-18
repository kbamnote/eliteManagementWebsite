import React from 'react';

const FlipCard = ({ frontTitle, frontText, backTitle, backText, icon }) => {
  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {icon && <div className="flip-icon">{icon}</div>}
            <h3 className="flip-title">{frontTitle}</h3>
            <p className="flip-text">{frontText}</p>
          </div>
          <div className="flip-card-back">
            <h3 className="flip-title">{backTitle}</h3>
            <p className="flip-text">{backText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;