import theme from './CustomTheme';
import styled from '@emotion/styled';
import { makeStyles } from '@mui/styles';
import MuiBox from '@mui/material/Box';
import MuiLink from '@mui/material/Link';

export const useStyles = makeStyles((theme) => ({
  heroSlide: {
    '&.swiper-slide-active': {
      animation: '$scale 4s ease-out infinite',
      animationDelay: '1s',
    },
  },

  // Empty rule for bubble3, to be filled by container styles
  '@keyframes scale': {
    '0%': {
      transform: 'scale(1)',
    },

    '80%': {
      transform: 'scale(1.3)',
    },
    '100%': {
      transform: 'scale(1.3)',
    },
  },
  '@keyframes floatUp2': {
    '0%': {
      transform: 'translateY(100%) translateX(-100%)',
      opacity: 1,
    },
    '50%': {
      transform: 'translateY(-50%) translateX(25px) scale(1.9)',
      backgroundColor: theme.palette.primary.light,
      opacity: 0.8,
    },
    '100%': {
      transform: 'translateY(-100%) translateX(0) scale(1.3)',
      backgroundColor: theme.palette.primary.dark,
      opacity: 0,
    },
  },
  '@keyframes floatUp3': {
    '0%': {
      transform: 'translateY(0) translateX(-100%)',
      opacity: 0,
    },
    '50%': {
      transform: 'translateY(-50%) translateX(25px)',
      opacity: 0.8,
    },
    '100%': {
      transform: 'translateY(-100%) translateX(0)',
      opacity: 0,
    },
  },
}));

export const PageWrapperStyle = {
  background: theme.palette.background.overlay_light,
  paddingTop: '120px',
};

export const Logo = styled(MuiLink)`
  cursor: pointer;
  &:hover {
    background-color: lightgray;
    color: darkblue;
  }
`;

export const HeaderMenu = styled(MuiBox)(({ open }) => ({
  position: 'fixed',
  right: 0,
  top: '55px',
  transition: 'all 0.3s ease-in-out',
  backgroundColor: ' gray',
  height: ' 100%',
  color: 'white',
  background: theme.palette.background.overlay,
  transform: open ? 'translateX(0%)' : 'translateX(100%)',
  '& .bg': {
    cursor: 'pointer',
    position: 'fixed',
    right: 0,
    background: theme.palette.background.overlay,
    width: '100vw',
    height: '100vh',
    transition: 'all 0.3s ease-in-out',
    opacity: open ? '1' : '0',
    transform: open ? 'translateX(0%)' : 'translateX(100%)',
  },
}));
