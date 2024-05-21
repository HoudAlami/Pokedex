import React from 'react';
import { useLocation } from 'react-router-dom';
import './CharacterList.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import Character from '../../components/Personnage/Character';

type CharacterType = {
  id: number;
  name: string;
  race: string;
  description: string;
  image: string;
};

type CharacterListProps = {
  characters: CharacterType[];
};

function CharacterList({ characters }: CharacterListProps) {
  const location = useLocation();
  const charactersLocation: CharacterType[] = location.state?.characters || [];

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
