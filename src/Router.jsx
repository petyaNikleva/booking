import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import HomePage from './pages/HomePage.jsx';
import ListingDetailsPage from './pages/ListingDetailsPage.jsx';
import ListingFavoritesPage from './pages/ListingFavouritesPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/favorites',
        element: <ListingFavoritesPage />,
      },
      {
        path: '/listings/:listingId',
        element: <ListingDetailsPage />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
