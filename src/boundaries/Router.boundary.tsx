import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import * as fromNav from '@navigation';

import { Home } from '../pages/home/Home';
import { NotFound } from '../pages/not-found/NotFound';

export const RouterBoundary: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          path: fromNav.DASHBOARD,
          element: <Home />,
        },
        {
          path: fromNav.NOT_FOUND,
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
