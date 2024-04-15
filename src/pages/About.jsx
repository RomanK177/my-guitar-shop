import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
// Mui
import theme from '../styles/CustomTheme';
import { Box, Typography, Stack, Container, Divider } from '@mui/material/';
import { PageWrapperStyle } from '../styles/GeneralStyle';
import Grow from '@mui/material/Grow';

// Style
import clsx from 'clsx';
import { useStyles } from '../styles/AboutStyle';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { text: 'Awesome Guy', svg: 'quality.svg', text2: 'So Awesome!' },
  {
    text: 'Good Communication Skills',
    svg: 'service.svg',
    text2: 'Good Listener',
  },
  {
    text: 'I deliver the Goods',
    svg: 'shipping.svg',
    text2: 'I am speed',
  },
  {
    text: 'Team PLayer',
    svg: 'team.svg',
    text2: 'Together We can Make It! ',
  },
  {
    text: 'Epic Beard',
    svg: 'beard.svg',
    text2: 'My Beard is Glorious!',
  },
];

function About() {
  const cardsContainer = useRef();
  const classes = useStyles();
  useGSAP(
    () => {
      gsap.to('.card', {
        rotationY: 180,
        transformPerspective: 4000,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          scrub: 3,
          trigger: cardsContainer.current,
          start: 'top center',
          end: 'bottom top',
        },
      });
    },
    { scope: cardsContainer }
  );
  useGSAP(() => {
    gsap.from('.youtube', {
      y: '100%',
      ease: 'power2.out',
      scrollTrigger: {
        scrub: 12, //
        trigger: cardsContainer.current,
        start: 'bottom center',
        end: 'bottom top',
      },
    });
  }, {});
  return (
    <Box sx={PageWrapperStyle}>
      <Container>
        <Typography component='h1' variant='headline' mb='20px' align='center'>
          About Me
        </Typography>
        <Divider />
        <Typography
          component='h2'
          variant='headline2'
          mb='20px'
          mt='20px'
          color={theme.palette.black.main}
          //   align='center'
        >
          Location:
        </Typography>
        <Grow in={true}>
          <Box className={classes.mapWrapper}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13410.051202035664!2d34.9837303!3d32.83167165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sil!4v1713022030826!5m2!1sen!2sil'
              width='100%'
              height='450'
              allowfullscreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </Box>
        </Grow>
        <Divider sx={{ marginTop: '20px' }} />
        <Typography
          component='h2'
          variant='headline2'
          mb='20px'
          mt='20px'
          color={theme.palette.black.main}
        >
          Why You Should Hire Me:
        </Typography>
        <Stack
          ref={cardsContainer}
          useFlexGap={true}
          direction='row'
          justifyContent='center'
          spacing={4}
          sx={{ width: '90%', flexWrap: 'wrap' }}
          pb={20}
        >
          {cards.map((card) => (
            <Stack
              className={clsx(classes.card, 'card')}
              alignItems='center'
              spacing={2}
              sx={{
                width: '200px',
                borderRadius: '10px',
                border: '1px solid black',
                padding: '10px',
                background: theme.palette.black.light,
              }}
            >
              <Typography className={clsx(classes.front, classes.cardFace)}>
                {card.text}
              </Typography>
              <Typography className={clsx(classes.back, classes.cardFace)}>
                {card.text2}
              </Typography>
              <Box
                component='img'
                sx={{ maxWidth: '100px' }}
                src={require(`../assets/images/${card.svg}`)}
              ></Box>
            </Stack>
          ))}
        </Stack>
        <Divider />
        <Typography
          component='h2'
          variant='headline2'
          mb='20px'
          mt='20px'
          color={theme.palette.black.main}
        >
          And Lastly, check out my cover for INFERI:
        </Typography>
        <Box pb={10}>
          <Box className={clsx(classes.iframeWrapper, 'youtube')}>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/r7_bQgiMcog?si=w3Wf3cnNYo2FNIk1'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
            ></iframe>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
