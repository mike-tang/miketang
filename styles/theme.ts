import { get } from 'theme-ui'
import { makeTheme } from '@theme-ui/css/utils'

export const theme = makeTheme ({
  // Configuration flags: https://theme-ui.com/theming#configuration-flags
  config: {
    useCustomProperties: true, // Enables CSS custom properties to help mitigate a flash of unstyled content during rehydration
    useRootStyles: true, // Adds styles defined in theme.styles.root to the <body> element along with color and background-color
    initialColorModeName: 'dark', // The key used for the top-level color palette in theme.colors
    useColorSchemeMediaQuery: true, // Initializes the color mode based on the prefers-color-scheme media query
    useBorderBox: true, // Adds a global box-sizing: border-box style,
    useLocalStorage: true, // Persists the color mode in localStorage
  },
  breakpoints: [
    '688px',
    '832px',
    '1024px'
  ],
  sizes: {
    nav: ['72px', '88px', '88px'],
    container: 640,
    button: '40px',
    input: '40px',
  },
  space: [ 0, 4, 8, 16, 24, 32, 40, 64, 80, 120 ],
  radii: {
    primary: '16px',
    compact: '8px',
    round: '40px',
  },
  fonts: {
    body: `Inter, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif`,
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [ 12, 14, 16, 20, 24, 40, 48, 64, 80 ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    oneLine: 1,
    body: 1.6,
    heading: 1.25,
    button: '40px',
  },
  letterSpacings: {
    body: 'normal',
    caps: '2px',
  },
  colors: {
    accent: {
      1: '#111',
      2: '#333',
      3: '#444',
      4: '#666',
      5: '#888',
      6: '#DDD',
      7: '#EAEAEA',
      8: '#F8F8F8',
    },
    text: '#DDD',
    background: {
      primary: '#111111',
      secondary: '#222222',
      primaryTransparent: 'rgba(17, 17, 17, 0.64)'
    },
    foreground: {
      primary: '#DDD',
      secondary: '#888'
    },
    primary: {
      default: '#7762E1',
      dark: '#5345B9'
    },
    secondary: {
      light: '#3ECACA',
      default: '#00A6A6',
      dark: '#007B7A'
    },
    border: {
      default: '#222',
      active: '#DDD'
    },
    modalOverlay: 'rgba(0,0,0, 0.75)',
    shadow: 'rgba(0,0,0, 0.2)',
    modes: {
      light: {
        accent: {
          1: '#F8F8F8',
          2: '#EAEAEA',
          3: '#DDDDDD',
          4: '#888',
          5: '#666',
          6: '#444',
          7: '#333',
          8: '#111',
        },
        text: '#444',
        background: {
          primary: '#F8F8F8',
          secondary: '#EEEEEE',
          primaryTransparent: 'rgba(255, 255, 255, 0.64)'
        },
        foreground: {
          primary: '#444',
          secondary: '#666'
        },
        primary: {
          default: '#7762E1',
          dark: '#5345B9'
        },
        secondary: {
          light: '#3ECACA',
          default: '#00A6A6',
          dark: '#007B7A'
        },
        border: {
          default: '#EEEEEE',
          active: '#444'
        },
        modalOverlay: 'rgba(0,0,0, 0.75)',
        shadow: 'rgba(0,0,0, 0.2)',
      },
    },
  },
  layout: {
    nav: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'foreground.primary',
      zIndex: 100,
      boxShadow: theme => `inset 0px -1px 0px ${get(theme, 'colors.border.default')}`,
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: 'background.primaryTransparent',
      backdropFilter: 'blur(4px)',
      transition: 'all 0.2s ease-out',
      inner: {
        width: '100%',
        maxWidth: 'container',
        justifyContent: 'space-between',
        mx: 4,
        my: 0,
        px: 0,
        py: [3, 4, 4],
        transition: 'all 0.2s ease-out'
      }
    },
    main: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      flex: '1 0 0',
      alignItems: 'center',
      justifyContent: 'flex-start',
      mt: theme => get(theme, 'sizes.nav'),
      color: 'foreground.primary',
    },
    section: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      boxShadow: theme => [
        `inset 0px -1px 0px ${get(theme, 'colors.border.default')}`, 
        'none'
      ],
      transition: 'box-shadow 0.2s ease-out',
      ':last-of-type': {
        boxShadow: 'none',
      },
      ':last-of-type > div': {
        boxShadow: 'none',
      },
      inner: {
        width: '100%',
        maxWidth: ['none', 'container'],
        flexDirection: 'column',
        px: [4, 0],
        py: 6,
        boxShadow: theme => [
          'none', 
          `inset 0px -1px 0px ${get(theme, 'colors.border.default')}`, 
        ],
        transition: 'box-shadow 0.2s ease-out'
      }
    },
    footer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      color: 'foreground.primary',
      boxShadow: theme => `inset 0px 1px 0px ${get(theme, 'colors.border.default')}`,
      backgroundColor: 'background.primary',
      transition: 'all 0.2s ease-out',
      inner: {
        width: '100%',
        maxWidth: 'container',
        flexDirection: 'column',
        mx: 4,
        my: 0,
        px: 0,
        py: 0,
        transition: 'all 0.2s ease-out'
      }
    }
  },
  borderWidths: {
    outline: '1px',
    divider: '1px'
  },
  borderStyles: {
    outline: 'solid',
    divider: 'solid',
    empty: 'dashed'
  },
  text: {
    default: {
      '::selection': {
        textShadow: 'none',
        backgroundColor: 'foreground.primary',
        color: 'background.primary'
      },
    },
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      transition: 'color 0.2s ease-out',
      '::selection': {
        textShadow: 'none',
        backgroundColor: 'foreground.primary',
        color: 'background.primary'
      },
    },
    body: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 2,
      letterSpacing: '-0.01096em',
      transition: 'color 0.2s ease-out',
      '::selection': {
        textShadow: 'none',
        backgroundColor: 'foreground.primary',
        color: 'background.primary'
      },
    },
    overline: {
      fontFamily: 'body',
      lineHeight: 'oneLine',
      fontWeight: 'bold',
      fontSize: 0,
      textTransform: 'uppercase',
      letterSpacing: '2px',
      color: 'foreground.secondary',
      transition: 'color 0.2s ease-out',
      '::selection': {
        textShadow: 'none',
        backgroundColor: 'foreground.primary',
        color: 'background.primary'
      },
    }
  },
  styles: {
    root: {
      fontSize: '16px',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      backgroundColor: 'background.primary',
      transition: 'background-color 0.2s ease-out',
    },
    h1: {
      color: 'foreground.primary',
      fontSize: 5,
      letterSpacing: '-0.02213em',
      variant: 'text.heading',
      m: 0,
    },
    h2: {
      color: 'foreground.primary',
      variant: 'text.heading',
      fontSize: 4,
      letterSpacing: '-0.01949em',
      m: 0,
    },
    h3: {
      color: 'foreground.primary',
      variant: 'text.heading',
      fontSize: 3,
      letterSpacing: '-0.01666em',
      m: 0,
    },
    h4: {
      color: 'foreground.primary',
      variant: 'text.heading',
      fontSize: 2,
      letterSpacing: '-0.01096em',
      m: 0,
    },
    h5: {
      color: 'foreground.primary',
      variant: 'text.heading',
      fontSize: 1,
      letterSpacing: '-0.00622em',
      m: 0,
    },
    h6: {
      color: 'foreground.primary',
      variant: 'text.heading',
      fontSize: 0,
      letterSpacing: '0.00049em',
      m: 0,
    },
    p: {
      color: 'foreground.primary',
      variant: 'text.body',
      m: 0
    },
    a: {
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease-out',
      ':hover': {
        textDecoration: 'underline',
        transition: 'all 0.2s ease-out',
      },
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    strong: {
      fontWeight: 'bold',
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    },
    spinner: {
      color: 'primary.default',
    },
    hr: {
      color: 'border.default',
      m: 0,
    },
    visuallyHidden: {
      position: 'absolute',
      top: '-1000px',
      left: '-1000px',
      width: '1px',
      height: '1px',
      border: 0,
      clip: 'rect(0 0 0 0)',
      overflow: 'hidden',
      visibility: 'hidden',
      padding: 0,
    },
  },
  links: {
    text: {
      color: 'foreground.secondary',
      fontWeight: 'bold',
      maxWidth: 'fit-content',
      transition: 'all 0.2s ease-out',
      ':hover': {
        color: 'foreground.primary',
        textDecoration: 'none',
        transition: 'all 0.2s ease-out',
      },
      ':focus': {
        color: 'foreground.primary',
        textDecoration: 'none',
        transition: 'all 0.2s ease-out',
      },
      '::selection': {
        textShadow: 'none',
        backgroundColor: 'foreground.primary',
        color: 'background.primary'
      },
      underlined: {
        backgroundImage: theme => `linear-gradient(to right, ${get(theme, 'colors.foreground.secondary')}, ${get(theme, 'colors.foreground.secondary')})`,
        backgroundSize: '100% 1px',
        backgroundPosition: '0 100%',
        backgroundRepeat: 'no-repeat',
        ':hover': {
          color: 'foreground.primary',
          textDecoration: 'none',
          backgroundImage: theme => `linear-gradient(to right, ${get(theme, 'colors.foreground.primary')}, ${get(theme, 'colors.foreground.primary')})`,
          transition: 'all 0.2s ease-out',
        },
        ':focus': {
          color: 'foreground.primary',
          textDecoration: 'none',
          backgroundImage: theme => `linear-gradient(to right, ${get(theme, 'colors.foreground.primary')}, ${get(theme, 'colors.foreground.primary')})`,
          transition: 'all 0.2s ease-out',
        },
        '::selection': {
          textShadow: 'none',
          backgroundColor: 'foreground.primary',
          color: 'background.primary'
        },
      },
    },
    logo: {
      width: 'auto',
      height: '100%',
      display: 'inline-flex',
      lineHeight: 0,
      color: 'foreground.primary',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease-out',
      // ':hover': {
      //   color: 'foreground.secondary',
      //   transition: 'all 0.2s ease-out',
      // },
      // ':focus': {
      //   color: 'foreground.secondary',
      //   transition: 'all 0.2s ease-out',
      // },
    },
    iconOutline: {
      display: 'flex',
      flex: '0 0 auto',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'body',
      height: '40px',
      width: '40px',
      p: 2,
      fontSize: 0,
      fontWeight: 'bold',
      color: 'foreground.secondary',
      bg: 'transparent',
      borderStyle: 'outline',
      borderWidth: 'outline',
      borderColor: 'border.default',
      borderRadius: 'round',
      cursor: 'pointer',
      transition: 'all 0.2s ease-out',
      '&:hover': {
        color: 'foreground.primary',
        borderColor: 'foreground.primary',
        bg: 'transparent',
        transition: 'all 0.2s ease-out',
      },
      '&:focus': {
        color: 'foreground.primary',
        borderColor: 'foreground.secondary',
        bg: 'transparent',
        transition: 'all 0.2s ease-out',
      },
      '&:disabled': {
        color: 'accent.2',
        borderColor: 'accent.2',
        bg: 'transparent',
        transition: 'all 0.2s ease-out',
        cursor: 'not-allowed',
      },
      '>svg': {
        mr: 0,
      },
    }
  },
  forms: {
    select: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: [1, 1, 1],
      color: 'foreground.primary',
      borderRadius: 'compact',
      borderColor: 'border.default',
      transition: 'border 0.2s ease-out',
      '&:focus': {
        borderColor: 'border.active',
        outline: 'none',
        transition: 'border 0.2s ease-out',
      },
      '&:disabled': {
        color: 'accent.4',
        bg: 'accent.2',
        cursor: 'not-allowed',
      },
      '::selection': {
        textShadow: 'none',
        backgroundColor: 'foreground.primary',
        color: 'background.primary'
      },
    },
  },
  buttons: {
    iconOutline: {
      display: 'flex',
      flex: '0 0 auto',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'body',
      height: '40px',
      width: '40px',
      p: 0,
      fontSize: 0,
      fontWeight: 'bold',
      color: 'foreground.secondary',
      bg: 'transparent',
      borderStyle: 'outline',
      borderWidth: 'outline',
      borderColor: 'border.default',
      borderRadius: 'round',
      cursor: 'pointer',
      transition: 'all 0.2s ease-out',
      '&:hover': {
        color: 'foreground.primary',
        borderColor: 'foreground.primary',
        bg: 'transparent',
        transition: 'all 0.2s ease-out',
      },
      '&:focus': {
        color: 'foreground.primary',
        borderColor: 'foreground.secondary',
        bg: 'transparent',
        transition: 'all 0.2s ease-out',
      },
      '&:disabled': {
        color: 'accent.2',
        borderColor: 'accent.2',
        bg: 'transparent',
        transition: 'all 0.2s ease-out',
        cursor: 'not-allowed',
      },
      '>svg': {
        mr: 0,
      },
    },
    icon: {
      color: 'foreground.secondary',
      cursor: 'pointer',
      transition: 'all 0.2s ease-out',
      '&:hover': {
        color: 'foreground.primary',
        transition: 'all 0.2s ease-out',
      },
      '&:focus': {
        color: 'foreground.primary',
        transition: 'all 0.2s ease-out',
      },
      '&:disabled': {
        color: 'accent.2',
        transition: 'all 0.2s ease-out',
        cursor: 'not-allowed',
      },
    }
  }
})