import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Badge from '../../pages/Badge';
import Home from '../../pages/Home';
import DynamicDate from '../../pages/DynamicDate';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/badge',
    element: <Badge />,
  },
  {
    path: '/date',
    element: <DynamicDate />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
