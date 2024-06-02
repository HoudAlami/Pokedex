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
      <Link to="/" className="charecterList__return">
        <h1>retour</h1>
      </Link>

      <h2 className="characterList__title">Liste des personnages</h2>
      <SearchBar inputValue={searchValue} handleChange={handleSearchChange} />
      <div className="characterList__area">
        {filteredCharacters.map((character) => (
          <Link to={`/character/${character.id}`} key={character.id}>
            <Character character={character} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
