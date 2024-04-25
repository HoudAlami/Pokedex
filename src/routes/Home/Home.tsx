/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './Home.scss';
import axios from 'axios';
import PokemonRandom from '../../components/PokemonRandom/PokemonRandom';

function Home() {
  const [data, setData] = useState([]);
  // const [randomItem, setRandomItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
        );
        setData(response.data);
        console.log(response);
      } catch (error) {
        console.error('erreur du fetch', error);
      }
    };
    fetchData();
  }, []);
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
