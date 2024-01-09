import theme from './CustomTheme';
import styled from '@emotion/styled';
import { makeStyles } from '@mui/styles';
import MuiBox from '@mui/material/Box';
import MuiContainer from '@mui/material/Container';
import MuiStack from '@mui/material/Stack';

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

export const HeroSliderImage = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

export const NewsSection = styled(MuiBox)`
  padding-block: min(60px, 5vw);
  background: black;
  color: white;
`;
export const NewsCardStyle = styled(MuiStack)`
  width: 25%;
  & img {
    width: 100%;
    transition: all 0.3s ease-in-out;
  }
  &:hover img {
    opacity: 0.8;
  }
`;
