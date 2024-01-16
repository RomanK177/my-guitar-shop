import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext.js';
import ProductStrip from '../components/ProductStrip';

// Mui
import { Box, Typography, Stack, Container, Divider } from '@mui/material/';
import { PageWrapperStyle } from '../styles/GeneralStyle';

function Cart() {
  const { cartData } = useContext(CartContext);
  return (
    <Box sx={PageWrapperStyle}>
      <Container>
        <Typography component='h1' variant='headline' mb='20px' align='center'>
          Cart
        </Typography>
        <Divider />
      </Container>

      {cartData.length > 0 ? (
        cartData.map((item) => <ProductStrip key={item.id} product={item} />)
      ) : (
        <Stack justifyContent='center' sx={{ minHeight: '70vh' }}>
          <Typography
            component='h2'
            variant='headline3'
            mb='20px'
            align='center'
          >
            Empty
          </Typography>
        </Stack>
      )}
    </Box>
  );
}

export default Cart;
