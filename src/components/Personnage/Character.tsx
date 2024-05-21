import React from 'react';
import './Character.scss';

type OneCharacter = {
  id: number;
  name: string;
  race: string;
  description: string;
  image: string;
};

type CharacterProps = {
  character: OneCharacter;
};

function Character({ character }: CharacterProps) {
  return (
    <div className="character">
      <div className="character__info">
        <h3 className="character__info-name">{character.name}</h3>
        <p className="character__info-race">Sayan</p>
      </div>
      <img
        src="public\assets\db.png"
        alt="boule"
        className="character__image"
      />
    </div>
  );
}

export default Character;
