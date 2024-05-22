import React from 'react';
import './CharacterList.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useData } from '../../provider/DataContext';
import Character from '../../components/Character/Character';

function CharacterList() {
  const { characters } = useData();
  return (
    <div className="characterList">
      <h2>Liste des personnages</h2>
      <SearchBar />
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterList;
