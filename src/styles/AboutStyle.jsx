import React from 'react';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: '250px',
    borderRadius: '10px',
    border: '1px solid black',
    padding: '10px',
    background: theme.palette.black.light,
    position: 'relative',
    paddingBlock: '25px',
    transformStyle: 'preserve-3d',
    boxShadow: '10px 13px 5px 0px #50618bd3',
  },
  cardFace: {
    position: 'absolute',
    top: '15px',
    marginTop: '0!important',
  },
  back: {
    transform: 'rotateY(-180deg)',
    backfaceVisibility: 'hidden',
  },
  front: {
    backfaceVisibility: 'hidden',

    // transform: 'rotateY(-180deg)',
  },
  iframeWrapper: {
    paddingBottom: '50%',
    borderRadius: '15px',
    overflow: 'hidden',
    width: '100%',
    position: 'relative',
    boxShadow: '0px 0px 50px 0px #50618bd3',
    '& iframe': {
      position: 'absolute',
    },
  },
  mapWrapper: {
    padding: '10px 15px',
    marginInline: 'auto',
    width: 'min(750px, 95%)',
    borderRadius: '25px',
    overflow: 'hidden',
    boxShadow: '0px 0px 50px 0px #50618bd3',
    backgroundColor: theme.palette.background.overlay,
    '& iframe': {
      borderRadius: '20px',
    },
  },
}));
