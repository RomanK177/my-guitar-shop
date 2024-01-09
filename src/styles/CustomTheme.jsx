import { createTheme, experimental_sx as sx } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
// const { palette } = createTheme();

const myPalette = {
  primary: {
    main: '#002DCF',
    dark: '#0F2A8D',
    dark50: alpha('#0F2A8D', 0.5),
    semiDark: '#093545',
    extraDark: '#08186d',
    light: '#10A4D3',
    lighter: '#2DC8FA',
    extra_light: '#ECF5F9',
  },
  secondary: {
    main: '#EE2051',
    dark: '#dd0a3c',
    light: '#f33964',
    //you have to provide primary main and light, can even more but not less
  },
  blue_gray: {
    main: '#DFF0F6',
    dark: '#b9e5f5',
    light: '#FAFBFE',
    extra_dark: '#878D96',
  },
  green: {
    main: '#33D951',
    light: '#70f187',
    dark: '#1bec42',
    button: '#20a100',
  },
  yellow: {
    dark: '#FCF801',
    main: '#faf61c',
    light: '#f7f468',
  },
  button: {
    main: '#365DEC',
    light: '#365dec',
    dark: '#1651a8',
    extra_light: '#b7c0dd',
  },
  my_white: {
    main: '#ffffff',
    dark: '#ffffff',
    light: '#FFFFFF26',
  },
  background: {
    main: 'rgba(45, 200, 250, 0.25)',
    light: '#ECF5F9',
    overlay: 'rgba(0, 0, 0, 0.8)',
    overlay_light: 'rgba(255, 255, 255, 0.40)',
  },
};

const theme = createTheme({
  palette: { ...myPalette },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 769,
      lg: 1024,
      xl: 1350,
    },
  },
  typography: {
    h1: {
      fontSize: 'clamp(34px, 4vw, 48px)',
      fontWeight: 700,
    },
    h2: {
      fontSize: 'max(28px, 4vw)',
      fontWeight: 800,
    },
    h3: {
      fontSize: 'max(22px, 2vw)',
      fontWeight: 700,
    },
    p: {
      fontSize: 'max(16px, 1vw)',
      display: 'block',
    },
    input: {
      fontSize: 'max(16px, 1vw)',
    },
    button: {
      fontSize: 'max(18px, 1.1vw)',
    },
    mobileHeadline: {
      fontSize: '32px',
      fontWeight: 400,
      color: myPalette.primary.dark,
    },
    headline1: {
      fontSize: '48px',
      fontWeight: 400,
      color: 'white',
    },
    headline2: {
      fontSize: '32px',
      fontWeight: 300,
      color: 'white',
    },
    headline3: {
      fontSize: '32px',
      fontWeight: 700,
    },
    runningText1: {
      fontSize: '20px',
      fontWeight: 400,
      color: myPalette.primary.dark,
      marginBottom: '0px',
    },
    runningText2: {
      fontSize: '18px',
      fontWeight: 400,
      color: 'white',
      marginBottom: '0px',
    },
    runningText3: {
      fontSize: '16px',
      fontWeight: 400,
      color: 'white',
    },
    runningText4: {
      fontSize: '14px',
      fontWeight: 300,
      //   color: 'white',
    },
    subtitle: {
      fontSize: '25px',
      fontWeight: 700,
      color: myPalette.primary.main,
    },
    subtitle2: {
      fontSize: '22px',
      fontWeight: 700,
      color: myPalette.primary.main,
    },
    subtitle3: {
      fontSize: '20px',
      fontWeight: 700,
      color: myPalette.primary.main,
    },
  },
  //EXAMPLE TO COMPONENT OVERRIDES
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: 'min(1520px, 95%) !important',
          position: 'relative',
          '&.rounded': {
            boxShadow: '0px 0px 30px 0px rgba(15, 42, 141, 0.15)',
            width: 'unset',
            margin: 'unset',
            padding: 'unset',
            marginBlock: '35px 130px',
            marginInline: '24px',
            borderRadius: '30px',
            paddingBottom: '9px;',

            '@media (min-width: 769px)': {
              marginInline: 'unset',
              paddingBottom: '20px;',
            },
          },

          '&.blank': {
            position: 'fixed',
            inset: '0',
            borderRadius: 'unset',
            paddingInline: '15px ',
            boxShadow: 'unset',
            backgroundColor: '#fff',
            margin: 'unset',
            zIndex: 10,

            '.header': {
              marginTop: '16px',
              marginBottom: '25px',
            },

            '.page-titles': {
              h1: {
                fontFamily: 'Open Sans',
                fontSize: '32px',
                fontWeight: 700,
                lineHeight: 1.1,
                color: `${myPalette.primary.semiDark}`,
              },
              h2: {
                fontFamily: 'Open Sans',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: 1.5,
                color: `${myPalette.primary.semiDark}`,
              },
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        lineHeight: 1,

        // Name of the slot
        containedWhite: {
          color: myPalette.primary.main,
          fontWeight: '700',
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: myPalette.primary.extra_light,
            color: myPalette.primary.dark,
            boxShadow: '0px 0px 10px 0px rgba(2, 37, 166, 0.45)',
          },
        },
        containedRed: {
          color: 'white',
          fontWeight: '700',
          backgroundColor: myPalette.secondary.main,
          '&:hover': {
            backgroundColor: myPalette.secondary.main,
            boxShadow: '0px 0px 10px 0px rgba(2, 37, 166, 0.45)',
          },
        },
        containedBlue: {
          color: 'white',
          fontWeight: '700',
          background: myPalette.button.main,
          '&:hover': {
            backgroundColor: myPalette.button.main,
            boxShadow: '0px 0px 10px 0px rgba(2, 37, 166, 0.45)',
          },
        },
        containedLightBlue: {
          color: myPalette.button.main,
          height: 'fit-content',
          fontWeight: '700',
          backgroundColor: alpha(myPalette.primary.lighter, 0.15),
          '&:hover': {
            backgroundColor: alpha(myPalette.primary.lighter, 0.2),
            boxShadow: '0px 0px 10px 0px rgba(2, 37, 166, 0.45)',
          },
        },
        outlineLight: {
          color: 'white',
          fontWeight: '700',
          border: `1px solid ${myPalette.primary.lighter}`,
          backgroundColor: 'transparent',
        },
        outlineBlue: {
          color: myPalette.primary.main,
          fontWeight: '700',
          border: `1px solid ${myPalette.primary.main}`,
          backgroundColor: 'transparent',
        },
        root: {
          // Some CSS
          paddingInline: '24px',
          borderRadius: '100vw',
          fontSize: '1rem',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          border: '1px solid transparent',
          '&.light-blue': {
            border: '1px solid rgba(15, 42, 141, 0.50)',
            borderRadius: '100vw',
            // fieldset: {
            //   border: '1px solid rgba(15, 42, 141, 0.50)',
            // },
          },
          '&.form-input': {
            color: myPalette.primary.dark,
            backgroundColor: myPalette.primary.extra_light,
            borderRadius: '100vw',

            input: {
              textAlign: 'left',
            },

            '*': {
              border: '0px solid rgba(15, 42, 141, 0.50)',
            },
          },
          fieldset: {
            borderRadius: '100vw',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          position: 'relative',
          boxShadow: '0px 0px 30px 0px rgba(15, 42, 141, 0.15)',
          borderRadius: '15px',
          // width: 'unset',
          // height: 'max(18.385vw, 348px)',
          padding: 'unset',
          marginBottom: '22px',

          '@media (min-width: 769px)': {
            marginBottom: '30px',
          },

          img: {
            width: '100%',
            borderRadius: '15px 15px 0 0',
          },

          '.tag': {
            position: 'absolute',
            top: '15px',
            left: '15px',
            color: `${myPalette.my_white.main}`,
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '1',
            padding: '5px 15px',
            borderRadius: '15px',
            background: 'rgba(45, 200, 250, 0.25)',
          },
          '.magnify': {
            position: 'absolute',
            right: '15px',
            top: '15px',
          },

          '.post-details': {
            padding: '20px',
            h2: {
              color: `${myPalette.primary.main}`,
              fontSize: '22px',
              fontWeight: 700,
              lineHeight: 1.1,
            },
            p: {
              color: `${myPalette.primary.main}`,
              fontSize: '16px',
            },
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '.MuiInputBase-root': {
            '&.light-border': {
              borderRadius: '30px',
              border: `1px solid ${myPalette.button.extra_light}`,
              flexGrow: 1,
            },
            div: {
              //   paddingRight: 'unset !important',
              //   padding: '3px 15px !important',
              textOverflow: 'unset',
              color: myPalette.button.extra_light,
            },
            // svg: { display: 'none' },
            fieldset: { display: 'none' },
          },
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          // '.selected': {
          // 	backgroundColor: myPalette.primary.main,
          // 	color: myPalette.my_white.main,
          // },

          '.checkbox-wrapper': {
            input: {
              position: 'relative',
              width: '16px',
              height: '16px',
              backgroundColor: 'transparent',
              borderRadius: '50%',
              verticalAlign: 'middle',
              border: `1px solid ${myPalette.primary.main}`,
              appearance: 'none',
              outline: 'none',
              cursor: 'pointer',

              '&:checked': {
                backgroundColor: 'gray',
              },
            },
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          //   background: myPalette.secondary.dark,
          margin: '0 !important',
          borderRadius: '100vw !important',
          '&::before': {
            content: 'unset',
          },
          '&.Mui-expanded': {
            // backgroundColor: 'pink !important',
            borderRadius: '40px!important',
            padding: '25px 12px !important',
            '.MuiAccordionSummary-expandIconWrapper': {
              transform: 'rotate(0deg)',
            },
          },
          '.MuiAccordionSummary-expandIconWrapper': {
            transform: 'rotate(90deg)',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          background: 'white',
          borderRadius: '100vw !important',
          paddingInline: '12px !important',
          '.MuiAccordionSummary-content': {
            margin: '6px 0 !important',
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          //   background: myPalette.gray[200],
          borderBottomLeftRadius: 'max(10px, 0.8vw)',
          borderBottomRightRadius: 'max(10px, 0.8vw)',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        ...{
          root: {
            borderRadius: '100vw',
            background: myPalette.primary.extra_light,
          },
        },
      },
    },
  },
});

export default theme;
