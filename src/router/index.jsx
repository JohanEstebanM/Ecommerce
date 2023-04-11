import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Home from '../view/Home';
import Login from '../view/Login';
import Purchases from '../view/Purchases';
import ProductDetail from '../view/ProductDetail';
import NotFound from '../view/NotFound';
import ProtectedRouter from '../components/common/ProtectedRouter';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/purchases',
        element: (
          <ProtectedRouter>
            <Purchases />
          </ProtectedRouter>
        ),
      },
      {
        path: '/products/:id',
        element: <ProductDetail />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
