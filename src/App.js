import { useState } from 'react';
import './App.scss';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Context
import CartContext from './contexts/CartContext.js';
import AppContext from './contexts/AppContext';

// MUI
import { ThemeProvider } from '@mui/material/styles';
import { LinearProgress } from '@mui/material';
import theme from './styles/CustomTheme';

// Parts
const Layout = lazy(() => import('./layouts/layout.jsx'));
const HomePage = lazy(() => import('./pages/HomePage'));
const ElectricGuitars = lazy(() => import('./pages/ElectricGuitars'));
const Header = lazy(() => import('./components/Header'));
const ErrorScreen = lazy(() => import('./pages/ErrorScreen'));

function App() {
  // State
  const [cartData, setCartData] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);

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
      path: '/electric-guitars',
      element: (
        <Suspense fallback={<LinearProgress />}>
          <Layout>
            <ElectricGuitars />
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

  const appContextData = { openDrawer, setOpenDrawer };

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={appContextData}>
          <CartContext.Provider value={cartContextData}>
            <RouterProvider router={router} />
          </CartContext.Provider>
        </AppContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
