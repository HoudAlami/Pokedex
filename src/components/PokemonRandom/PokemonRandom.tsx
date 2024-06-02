import React from 'react';
import './PokemonRandom.scss';
import { Link } from 'react-router-dom';

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
  if (characters.length === 0) {
    return (
      <div className="pokemonRandom__error">Aucun personnage disponible</div>
    );
  }
  const randomIndex = Math.floor(Math.random() * characters.length);
  const randomCharacter = characters[randomIndex];
  // console.log(randomCharacter);

  return (
    <div className="pokemonRandom">
      <Link to={`/character/${randomCharacter.id}`} className="Link">
        <h3 className="pokemonRandom__title">Personnage Aléatoire</h3>
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
        <img
          src="public\Dragon-Ball-Goku-PNG-Images.png"
          alt="/"
          className="goku"
        />
      </Link>
    </div>
  );
}

export default PokemonRandom;
