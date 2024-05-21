import React from 'react';
import './PokemonRandom.scss';

type Character = {
  id: number;
  name: string;
  race: string;
  description: string;
  image: string;
};

type PokemonRandomProps = {
  characters: Character[];
};

function PokemonRandom({ characters }: PokemonRandomProps) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  const randomCharacter = characters[randomIndex];
  // console.log(randomCharacter);

  return (
    <div className="pokemonRandom">
      <h3 className="pokemonRandom__title">Personnage Aléatoire</h3>
      {randomCharacter && ( // Vérification si un personnage est disponible
        <div className="pokemonRandom__area">
          <div className="pokemonRandom__info">
            <h3 className="pokemonRandom__info-name">{randomCharacter.name}</h3>
            <p className="pokemonRandom__info-race">{randomCharacter.race}</p>
          </div>
          <div className="pokemonRandom__description">
            <p className="pokemonRandom__description-text">
              {randomCharacter.description}
            </p>
            <img
              src={randomCharacter.image}
              alt={randomCharacter.name}
              className="pokemonRandom__description-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonRandom;
