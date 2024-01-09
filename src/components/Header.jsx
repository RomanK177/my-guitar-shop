import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mui
import theme from '../styles/CustomTheme';
import {
  Box,
  Typography,
  Stack,
  Container,
  Link,
  List,
  Button,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
} from '@mui/material/';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { HeaderWrapper, Logo } from '../styles/HeaderStyles';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'Electric Guitars', link: '/electric-guitars' },
    { text: 'Bass Guitars', link: '/bass-guitars' },
    { text: 'Acoustic Guitars', link: '/acoustic-guitars' },
  ];

  const toggleDrawer = (open) => (event) => {
    console.log('🚀 ~ file: Header.jsx:33 ~ toggleDrawer ~ open:', open);
    if (event.key === 'Tab' || event.key === 'Shift') {
      return;
    }

    setDrawerOpen(open);
  };

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
          <Logo href='/'>
            <Typography
              component='h4'
              variant='subtitle'
              className='absolute-center'
              color='white'
            >
              Guitar Shop
            </Typography>
          </Logo>
          <Button onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ fill: 'white' }} />
          </Button>
        </Stack>
        <Drawer anchor='right' open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role='presentation'
            // onClick={toggleDrawer(false)}
            // onKeyDown={toggleDrawer()}
          >
            <List>
              {menuItems.map((menuItem, index) => (
                <ListItem
                  key={menuItem.text}
                  disablePadding
                  onClick={() => {
                    console.log('sss');
                    //   toggleDrawer(false);
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
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
