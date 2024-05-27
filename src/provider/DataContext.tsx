/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type Character = {
  id: number;
  name: string;
  race: string;
  image: string;
  description: string;
};

type DataContextType = {
  characters: Character[];
  setCharacters: Dispatch<SetStateAction<Character[]>>;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

type DataProviderProps = {
  children: ReactNode;
};

export function DataProvider({ children }: DataProviderProps) {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://dragonball-api.com/api/characters?limit=58'
        );
        // console.log(response.data.items);

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

  // Utiliser useMemo pour éviter la recréation de l'objet à chaque rendu
  const contextValue = useMemo(
    () => ({ characters, setCharacters }),
    [characters, setCharacters]
  );
  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}

// Bien sûr, voyons cela en détail :

// Contexte (Context) :
// Le contexte est un outil de React qui permet de passer des données à travers l'arborescence des composants sans avoir besoin de passer explicitement les données via les props à chaque niveau. Il est utile lorsque vous avez des données que de nombreux composants de votre application doivent accéder.

// Le contexte est souvent utilisé dans les cas suivants :

// Lorsque vous avez des données qui doivent être partagées entre de nombreux composants.
// Lorsque vous voulez éviter de passer les mêmes données via plusieurs niveaux de composants via les props.
// Lorsque vous souhaitez mettre à jour des données dans un composant et que ces mises à jour doivent être accessibles à d'autres composants.
// Provider (DataProvider) :
// Le Provider est un composant qui enveloppe une partie de votre application et fournit les données via le contexte à ses composants enfants. Il est responsable de la création du contexte et de la fourniture des données aux composants enfants.

// Le Provider est généralement utilisé pour :

// Créer un contexte et le fournir à toute l'application.
// Initialiser les données à fournir via le contexte.
// Mettre à jour les données dans le contexte lorsque cela est nécessaire.
// Dispatch :
// Dispatch est un type fourni par React pour la manipulation des états dans les composants fonctionnels utilisant le hook useState. Il représente une fonction qui peut être utilisée pour envoyer une action qui modifie l'état.

// Dans le contexte de votre exemple, setCharacters est une fonction de dispatch. Lorsqu'elle est appelée avec de nouvelles données, elle envoie une action pour mettre à jour l'état des personnages dans votre application. C'est ce qui permet de mettre à jour les données et de déclencher le rendu des composants qui utilisent ces données.
