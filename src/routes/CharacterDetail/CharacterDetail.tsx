import React from 'react';
import { useParams } from 'react-router-dom';
import { useData } from '../../provider/DataContext';

function CharacterDetail() {
  const { id } = useParams<{ id: string }>();
  const { characters } = useData();
  const character = characters.find((char) => char.id === Number(id));

  if (!character) {
    return <div>Personnage non trouvé</div>;
  }

  return (
    <div className="characterDetail">
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
    </div>
  );
}

export default CharacterDetail;
