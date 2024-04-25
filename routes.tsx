/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import App from './src/components/App/App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);
