// import theme from './CustomTheme';
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

export const HeaderWrapper = styled(MuiBox)`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 2;
  padding: 10px;
  background: ${({ theme }) => theme.palette.background.overlay};
`;

export const Logo = styled(MuiLink)`
  cursor: pointer;
  &:hover {
    /* Styles for the :hover state */
    background-color: lightgray;
    color: darkblue;
    /* Add more styles as needed */
  }
`;
