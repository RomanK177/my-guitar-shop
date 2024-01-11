import React from 'react';

// Style
import { HeroSliderImage, useStyles } from '../../styles/HomePageStyles';

// Images
import Slide1 from '../../assets/images/top_AAD50.jpg';
import Slide2 from '../../assets/images/top_AZES.jpg';
import Slide3 from '../../assets/images/rotating-banner_rga622xhwh.jpg';
import Slide4 from '../../assets/images/top_SR500E_SR505E.jpg';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';

// Mui
import { Box, Typography, Stack } from '@mui/material/';

function HeroSlider() {
  const classes = useStyles();

  return (
    <Swiper
      style={{ height: '85vh' }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      slidesPerView={1}
      autoplay={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className={classes.heroSlide}>
        <Box component='img' style={HeroSliderImage} src={Slide1} />
        <Stack className='absolute-center'>
          <Typography variant='headline1' align='center'>
            Advanced Acoustic
          </Typography>
          <Typography variant='headline2' align='center'>
            Reimagining the Acoustic Experience
          </Typography>
        </Stack>
      </SwiperSlide>
      <SwiperSlide className={classes.heroSlide}>
        <Box component='img' style={HeroSliderImage} src={Slide2} />
        <Stack className='absolute-center'>
          <Typography variant='headline1' align='center'>
            AZ ESSENTIALS
          </Typography>
          <Typography variant='headline2' align='center'>
            - Your journey starts here
          </Typography>
        </Stack>
      </SwiperSlide>
      <SwiperSlide className={classes.heroSlide}>
        <Box component='img' style={HeroSliderImage} src={Slide3} />
        <Stack className='absolute-center'>
          <Typography variant='headline1' align='center'>
            The RGA622XH
          </Typography>
          <Typography variant='headline2' align='center'>
            Featuring 27 Frets of Fury
          </Typography>
        </Stack>
      </SwiperSlide>
      <SwiperSlide className={classes.heroSlide}>
        <Box component='img' style={HeroSliderImage} src={Slide4} />
        <Stack className='absolute-center'>
          <Typography variant='headline1'>Sound Gear</Typography>
          <Typography variant='headline2'>A Stunning Aurora</Typography>
        </Stack>
      </SwiperSlide>
      ...
    </Swiper>
  );
}

export default HeroSlider;
