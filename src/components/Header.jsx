import { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CartContext from '../contexts/CartContext.js';

// Mui
import theme from '../styles/CustomTheme';
import {
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
  Badge,
} from '@mui/material/';

import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { HeaderWrapper, Logo, HeaderMenu } from '../styles/HeaderStyles';

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { cartData, setCartData } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'Electric Guitars', link: '/products/electric-guitars' },
    { text: 'Bass Guitars', link: '/products/bass-guitars' },
    { text: 'Acoustic Guitars', link: '/products/acoustic-guitars' },
  ];

  const toggleDrawer = (open) => (event) => {
    if (event.key === 'Tab' || event.key === 'Shift') {
      return;
    }

    setOpenDrawer(open);
  };
  useEffect(() => {
    setOpenDrawer(false);
  }, [location.pathname]);

  return (
    <HeaderWrapper>
      <Container>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Stack direction='row' spacing={1}>
            <Link href='#'>
              <FacebookIcon color='my_white' />
            </Link>
            <Link href='#'>
              <InstagramIcon color='my_white' />
            </Link>
            <Link href='#'>
              <YouTubeIcon color='my_white' />
            </Link>
          </Stack>
          <Logo
            onClick={() => {
              navigate('/');
            }}
          >
            <Typography
              component='h4'
              variant='subtitle'
              className='absolute-center'
              color='white'
            >
              Guitar Shop
            </Typography>
          </Logo>
          <Stack direction='row' alignItems='center'>
            <Button
              onClick={() => {
                navigate('/cart');
              }}
            >
              <Badge badgeContent={cartData.length} color='secondary'>
                <ShoppingCartIcon sx={{ fill: 'white' }} />
              </Badge>
            </Button>
            <Button onClick={toggleDrawer(!openDrawer)}>
              <MenuIcon sx={{ fill: 'white' }} />
            </Button>
          </Stack>
        </Stack>
        <HeaderMenu anchor='right' open={openDrawer}>
          <Box className='bg' onClick={() => setOpenDrawer(false)}></Box>
          <Box
            sx={{ width: 250 }}
            role='presentation'
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer()}
          >
            <List>
              {menuItems.map((menuItem, index) => (
                <ListItem
                  key={menuItem.text}
                  disablePadding
                  onClick={() => {
                    navigate(menuItem.link);
                  }}
                >
                  <ListItemButton>
                    <ListItemText primary={menuItem.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </HeaderMenu>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
