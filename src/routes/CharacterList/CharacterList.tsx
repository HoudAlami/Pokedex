import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../provider/DataContext';
import SearchBar from '../../components/SearchBar/SearchBar';
import Character from '../../components/Character/Character';
import './CharacterList.scss';

function CharacterList() {
  const { characters } = useData();
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="characterList">
      <Link to="/">
        <h1>retour</h1>
      </Link>

      <h2>Liste des personnages</h2>
      <SearchBar inputValue={searchValue} handleChange={handleSearchChange} />
      {filteredCharacters.map((character) => (
        <Link to={`/character/${character.id}`} key={character.id}>
          <Character character={character} />
        </Link>
      ))}
    </div>
  );
}

export default CharacterList;
