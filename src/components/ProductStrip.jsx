import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../contexts/CartContext.js';

// Mui
import theme from '../styles/CustomTheme';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  Stack,
  Container,
  Divider,
} from '@mui/material/';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

function ProductStrip({ product }) {
  const { cartData, setCartData } = useContext(CartContext);
  const [inCart, setInCart] = useState(undefined);

  const removeFromCart = async () => {
    let index = cartData.findIndex((item) => item.id === product.id);
    setCartData(cartData.toSpliced(index, 1));
  };

  useEffect(() => {
    if (cartData.find((p) => p.id === product.id)) {
      setInCart(true);
    } else {
      setInCart(false);
    }
    console.log(cartData);
  }, [cartData.length]);

  return (
    <Container>
      <Stack>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Typography component='h2' variant='headline' mb='20px'>
            {product.name}
          </Typography>
          {inCart ? (
            <RemoveShoppingCartIcon
              onClick={removeFromCart}
              sx={{ cursor: 'pointer' }}
            />
          ) : (
            <AddShoppingCartIcon
              onClick={() => {
                setCartData([...cartData, product]);
                // setInCart(true);
              }}
              sx={{ cursor: 'pointer' }}
            />
          )}
        </Stack>
        <Box component='img' src={product.image} />
        <Typography
          component='p'
          variant='runningText1'
          color='black !important'
        >
          {product.description}
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls='panel1-content'
            id='panel1-header'
          >
            <Typography
              component='h3'
              variant='headline2'
              color='black !important'
            >
              Features
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={3}>
              {product.features.map((feature) => (
                <Stack
                  direction='row'
                  justifyContent='space-between'
                  spacing={2}
                >
                  <Box>
                    <Typography
                      component='h3'
                      variant='headline1'
                      color='black !important'
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      mt='25px'
                      component='p'
                      variant='runningText2'
                      color='black !important'
                    >
                      {feature.text}
                    </Typography>
                  </Box>
                  <Box
                    component='img'
                    src={feature.image}
                    sx={{ width: '30%' }}
                  />
                </Stack>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Stack>
      <Divider />
    </Container>
  );
}

export default ProductStrip;
