import { useState } from 'react';
import './App.scss';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Context
import CartContext from './contexts/CartContext.js';

// MUI
import { ThemeProvider } from '@mui/material/styles';
import { LinearProgress } from '@mui/material';
import theme from './styles/CustomTheme';

// Parts
const Layout = lazy(() => import('./layouts/layout.jsx'));
const HomePage = lazy(() => import('./pages/HomePage'));
const Cart = lazy(() => import('./pages/Cart'));
const Products = lazy(() => import('./pages/Products'));
const ErrorScreen = lazy(() => import('./pages/ErrorScreen'));

function App() {
  // State
  const [cartData, setCartData] = useState([]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense fallback={<LinearProgress />}>
          <Layout>
            <HomePage />
          </Layout>
        </Suspense>
      ),
      errorElement: <ErrorScreen />,
    },
    {
      path: '/cart',
      element: (
        <Suspense fallback={<LinearProgress />}>
          <Layout>
            <Cart />
          </Layout>
        </Suspense>
      ),
      errorElement: <ErrorScreen />,
    },
    {
      path: '/products/:slug',
      element: (
        <Suspense fallback={<LinearProgress />}>
          <Layout>
            <Products />
          </Layout>
        </Suspense>
      ),
      errorElement: <ErrorScreen />,
    },
  ]);

  const cartContextData = {
    cartData,
    setCartData,
  };

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CartContext.Provider value={cartContextData}>
          <RouterProvider router={router} />
        </CartContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
