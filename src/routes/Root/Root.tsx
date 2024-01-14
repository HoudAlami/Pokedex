import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Root() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then((response) => {
        setPokemons(response.data.name);
      })
      .catch((error) => {
        console.error('erreur');
      });
  }, []);
  return (
    <div className="root">
      <Outlet pokemons={pokemons} />
    </div>
  );
}

export default Root;
