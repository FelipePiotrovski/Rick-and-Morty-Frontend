import React from 'react';
import './characterscard.css'


function CharactersCard({ characters, handleCharacterClick }) {

  return (
    <div className='characters_card'>
      {characters.map(character => (
        <div className={`characters ${character.status === 'Dead' ? 'dead-character' : ''}`} key={character.id} onClick={() => handleCharacterClick(character.id)}>
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