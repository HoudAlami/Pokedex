import React, { useState } from 'react';
import './CharacterList.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useData } from '../../provider/DataContext';
import Character from '../../components/Character/Character';

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
      <h2>Liste des personnages</h2>
      <SearchBar inputValue={searchValue} handleChange={handleSearchChange} />
      {filteredCharacters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterList;
