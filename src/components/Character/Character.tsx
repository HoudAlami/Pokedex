import React from 'react';
import './Character.scss';

type CharacterProps = {
  character: {
    id: number;
    name: string;
    race: string;
    image: string;
  };
};

function Character({ character }: CharacterProps) {
  return (
    <div className="character">
      <div className="character__info">
        <h3 className="character__info-name">{character.name}</h3>
        <p className="character__info-race">{character.race}</p>
      </div>
      <img src={character.image} alt="boule" className="character__image" />
    </div>
  );
}

export default Character;
