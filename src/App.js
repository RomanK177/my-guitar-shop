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
const HomePage = lazy(() => import('./pages/HomePage'));
const ElectricGuitars = lazy(() => import('./pages/ElectricGuitars'));
const Header = lazy(() => import('./components/Header'));
const ErrorScreen = lazy(() => import('./pages/ErrorScreen'));

function App() {
  // State
  const [cartData, setCartData] = useState([]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense fallback={<LinearProgress />}>
          <Header />
          <HomePage />
        </Suspense>
      ),
      errorElement: <ErrorScreen />,
    },
    {
      path: '/electric-guitars',
      element: (
        <Suspense fallback={<LinearProgress />}>
          <Header />
          <ElectricGuitars />
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
