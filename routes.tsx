/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import Root from './src/routes/Root/Root';
import Home from './src/routes/Home/Home';
import CharacterList from './src/routes/CharacterList/CharacterList';
import CharacterDetail from './src/routes/CharacterDetail/CharacterDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/characterList',
        element: <CharacterList />,
      },
      {
        path: '/character/:id',
        element: <CharacterDetail />,
      },
    ],
  },
]);
