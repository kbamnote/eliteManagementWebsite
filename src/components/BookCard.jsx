import React from 'react';

const BookCard = ({ frontText, backText }) => {
  return (
    <div className="book-card-wrapper">
      <div className="book">
        <p className="back-text">{backText}</p>
        <div className="cover">
          <p className="front-text">{frontText}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;