import React from 'react';

// Style
import { NewsCardStyle } from '../../styles/HomePageStyles';

// Mui
import { Box, Typography, Stack, Container, Link } from '@mui/material/';

function NewsCard({ article }) {
  return (
    <NewsCardStyle flexWrap='wrap'>
      <Link href={article.link} target='_blank' underline='none'>
        <Box component='img' src={article.image} />
        <Typography component='h5' variant='runningText2' align='center'>
          {article.title}
        </Typography>
      </Link>
    </NewsCardStyle>
  );
}

export default NewsCard;
