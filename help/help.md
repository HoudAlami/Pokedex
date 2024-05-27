Creer une route paramétré :

1- Utilisation de useParams

Récupération de l'ID depuis les paramètres d'URL :
Dans un routeur React, les paramètres d'URL peuvent être récupérés à l'aide du hook useParams fourni par react-router-dom.
Dans notre cas, nous avons utilisé useParams pour obtenir l'ID du personnage à partir de l'URL.

const { id } = useParams<{ id: string }>();

2- Utilisation de useData pour recuperer la data

Nous utilisons un hook personnalisé useData pour obtenir les données des personnages.
Ce hook useData utilise probablement un contexte (DataContext) pour fournir les données des personnages à travers l'application.

const { characters } = useData();

3- Utilisation de characters.find

Recherche du personnage correspondant :
Nous utilisons la méthode find sur le tableau characters pour rechercher le personnage dont l'ID correspond à celui extrait des paramètres d'URL.
La méthode find parcourt chaque élément du tableau characters et retourne le premier élément qui satisfait la condition spécifiée.

const character = characters.find((char) => char.id === Number(id));

4- Utilisation de Number(id)

Conversion de l'ID en nombre :
L'ID extrait des paramètres d'URL est généralement une chaîne de caractères.
Pour s'assurer que nous comparons des nombres, nous utilisons Number(id) pour convertir l'ID en nombre.

En combinant toutes ces étapes, nous obtenons une méthode complète pour rechercher un personnage par son ID dans le composant CharacterDetail. Cette approche garantit que nous affichons uniquement les détails du personnage correspondant à l'ID fourni dans l'URL, tout en fournissant une expérience utilisateur cohérente et informative.
