import React from 'react';

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
  List,
  Link,
  Button,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material/';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function ProductStrip({ product }) {
  return (
    <Container>
      <Stack>
        <Typography component='h2' variant='headline' mb='20px'>
          {product.name}
        </Typography>
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
    </Container>
  );
}

export default ProductStrip;
