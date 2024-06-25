import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Badge from '../../pages/Badge';
import Home from '../../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/badge',
    element: <Badge />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
