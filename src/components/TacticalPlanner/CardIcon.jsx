import React from 'react';

const CardIcon = ({ card }) => {
  return (
    <div className="card-icon">
      {card.name}
    </div>
  );
};

export default CardIcon;