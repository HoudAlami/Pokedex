import React from 'react';
import './PokemonRandom.scss';

function PokemonRandom() {
  return (
    <div className="pokemonRandom">
      <h3 className="pokemonRandom__title">PokemonRandom</h3>
      <div className="pokemonRandom__info">
        <h3 className="pokemonRandom__name">Kinouss #148</h3>
        <p className="pokemonRandom__type">Type hnini</p>
      </div>
      <div className="pokemonRandom__description">
        <p className="pokemonRandom__description-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi libero
          excepturi ad incidunt soluta doloremque accusantium harum expedita ab
          vero. Nobis magni ratione cum, architecto laudantium dolore quos
          libero qui? Nisi dolores aspernatur facilis maiores illum consequatur
          cupiditate fugit ipsum, aliquid quidem recusandae reprehenderit esse
          similique porro reiciendis quam! Ut animi facere dignissimos quos
          excepturi accusamus facilis explicabo eligendi nostrum.
        </p>
        <img
          src="#"
          alt="pokemon"
          className="pokemonRandom__description-image"
        />
      </div>
    </div>
  );
}

export default PokemonRandom;
