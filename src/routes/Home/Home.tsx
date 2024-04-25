import React from 'react';
import './Home.scss';
import PokemonRandom from '../../components/PokemonRandom/PokemonRandom';

function Home() {
  return (
    <div className="home">
      <h1 className="home__title">Pokedex</h1>
      <div className="home__item">
        <h2 className="home__item-title">Liste des Pokemons</h2>
      </div>
      <PokemonRandom />
    </div>
  );
}

export default Home;
