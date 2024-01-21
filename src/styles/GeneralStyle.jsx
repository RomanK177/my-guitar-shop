import theme from './CustomTheme';
import styled from '@emotion/styled';
import MuiBox from '@mui/material/Box';

export const PageWrapperStyle = {
  background: theme.palette.background.overlay_light,
  paddingTop: '120px',
};

export const ZoomImageWrapper = styled(MuiBox)(({ theme }) => ({
  figure: {
    width: '100%',
    padding: '20px',
    borderRadius: '5px',
    background: theme.palette.background.overlay_light,
    border: '1px solid black',
    boxSizing: 'border-box',
  },
}));
