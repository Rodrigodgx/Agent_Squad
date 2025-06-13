import React from 'react';

const CharacterIcon = ({ character }) => {
  return (
    <div className="character-icon">
      {character.name}
    </div>
  );
};

export default CharacterIcon;