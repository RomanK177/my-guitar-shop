import { Suspense, useContext } from 'react';
import { LinearProgress } from '@mui/material';
// import Footer from '../components/Footer';
import Header from '../components/Header';

import theme from '../styles/CustomTheme';
import ScrollButton from '../components/ScrollButton.jsx';

import { Box } from '@mui/material/';

function Layout({ children }) {
  return (
    <>
      <Suspense fallback={<LinearProgress />}>
        <Header />
        {children}
        <ScrollButton />
        {/* <Footer /> */}
      </Suspense>
    </>
  );
}

export default Layout;
