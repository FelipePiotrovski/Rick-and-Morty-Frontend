import React from 'react';

function CharactersCard({ characters, onCharacterClick }) {

  return (
    <div>
      {characters.map(character => (
        <div className={`characters ${character.status === 'Dead' ? 'dead-character' : ''}`} key={character.id} onClick={() => onCharacterClick(character.id)}>
          <img className="charimg" src={character.image} alt={character.name} />
          <div className="overlay">
            <p className="charimg_character_name">{character.name}</p>
            <p className="charimg_character_species">{character.species}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CharactersCard;