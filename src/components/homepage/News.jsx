import React, { useState, useEffect } from 'react';

import NewsCard from './NewsCard';

// Style
import { NewsSection } from '../../styles/HomePageStyles';

// Mui
import { Typography, Stack, Container } from '@mui/material/';

function News() {
  const [news, setNews] = useState(undefined);

  //   Simulating getting news via api
  const getNews = async () => {
    const news = await [
      {
        title: 'Steve Di Giorgio Signature Model',
        image: 'https://www.ibanez.com/asia/news_file/file/LN_SDGB1.jpg',
        link: 'https://www.ibanez.com/asia/products/detail/sdgb1_1p_01.html',
      },
      {
        title: 'Monthly New Arrival',
        image: 'https://www.ibanez.com/asia/news_file/file/mna2311.jpg',
        link: 'https://www.ibanez.com/asia/news/detail/20200413163629.html',
      },
      {
        title: 'TWP10 TWIN PEAKS',
        image: 'https://www.ibanez.com/asia/news_file/file/LN_TWP10.jpg',
        link: 'https://www.ibanez.com/asia/products/detail/twp10_01.html',
      },
      {
        title: 'Paul Gilbert Signature Pick',
        image: 'https://www.ibanez.com/asia/news_file/file/fp_1000PGYE.jpg',
        link: 'https://www.ibanez.com/asia/products/detail/b1000pgye_01.html',
      },
    ];
    setNews(news);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <NewsSection>
      <Container>
        <Typography component='h2' variant='headline2' mb='25px'>
          Latest News
        </Typography>
        <Stack direction='row'>
          {news && news.map((article) => <NewsCard article={article} />)}
        </Stack>
      </Container>
    </NewsSection>
  );
}

export default News;
