/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './Home.scss';
import axios from 'axios';
import PokemonRandom from '../../components/PokemonRandom/PokemonRandom';

type Character = {
  id: number;
  name: string;
  race: string;
  description: string;
  image: string;
};

function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://dragonball-api.com/api/characters?limit=58'
        );
        console.log(response.data.items);

        // Vérifier si la réponse contient bien un objet avec une propriété 'items'
        if (response.data.items) {
          // Extraire le tableau de personnages de la propriété 'items'
          const charactersData = response.data.items;
          // Mettre à jour l'état avec les personnages
          setCharacters(charactersData);
        } else {
          console.error("La réponse de l'API est invalide :", response.data);
        }
      } catch (error) {
        console.error('Erreur lors du fetch :', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      <h1 className="home__title">DB DEX</h1>
      <div className="home__item">
        <h2 className="home__item-title">Liste des Pokemons</h2>
      </div>
      {/* Passer le tableau characters au composant PokemonRandom */}
      <PokemonRandom characters={characters} />
    </div>
  );
}

export default Home;
