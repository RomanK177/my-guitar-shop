import React, { useState } from 'react';

// Mui
import theme from '../styles/CustomTheme';
import {
  Box,
  Typography,
  Stack,
  Container,
  TextField,
  Button,
} from '@mui/material/';

function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // You can perform actions with the form data here
    console.log('Form submitted with data:', name, email, phone);

    // Reset the form after submission, if needed
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <Box
      component='footer'
      sx={{
        backgroundImage:
          'url(https://www.ibanez.com/common/images/footer_bg.jpg)',
      }}
    >
      <Container sx={{ padding: '50px' }}>
        <Typography
          align='center !important'
          variant='headline2'
          component='h4'
          mb='50px'
        >
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack>
            <Stack
              direction='row'
              justifyContent='space-around'
              spacing={2}
              mb='15px'
            >
              <TextField
                label='Name'
                variant='standard'
                required
                className='form-input'
                fullWidth
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                label='Email'
                type='email'
                variant='standard'
                required
                className='form-input'
                fullWidth
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <TextField
                label='Phone'
                type='tel'
                variant='standard'
                className='form-input'
                fullWidth
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </Stack>
            <Button
              // fullWidth
              variant='containedRed'
              type='submit'
              //   color='button'
              //   size='large'
              sx={{ marginInline: 'auto' }}
            >
              Send
            </Button>
          </Stack>
        </form>
      </Container>
    </Box>
  );
}

export default Footer;
