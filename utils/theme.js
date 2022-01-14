export default {
  // Configuration flags
  useCustomProperties: true, // Enables CSS custom properties to help mitigate a flash of unstyled content during rehydration
  useBodyStyles: true, // Adds styles defined in theme.styles.root to the <body> element along with color and background-color
  initialColorModeName: 'dark', // The key used for the top-level color palette in theme.colors
  useColorSchemeMediaQuery: 'system', // Initializes the color mode based on the prefers-color-scheme media query
  useBorderBox: 'true', // Adds a global box-sizing: border-box style

  breakpoints: ['40em', '52em', '64em'],
  sizes: {
    nav: '64px',
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
    body: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif',
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
      secondary: '#222222'
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
      default: '#333',
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
          secondary: '#EEEEEE'
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
          default: '#DDDDDD',
          active: '#444'
        },
        modalOverlay: 'rgba(0,0,0, 0.75)',
        shadow: 'rgba(0,0,0, 0.2)',
      },
    },
  },
  layout: {
    nav: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'foreground.primary',
      zIndex: 100,
      boxShadow: theme => [
        `inset 0px -1px 0px ${theme.colors.border.default}`, 
        'none', 
        'none'
      ],
      inner: {
        width: '100%',
        maxWidth: 'container',
        mx: 3,
        my: 0,
        px: 0,
        py: 3,
        boxShadow: theme => [
          'none', 
          `inset 0px -1px 0px ${theme.colors.border.default}`, 
          `inset 0px -1px 0px ${theme.colors.border.default}`
        ],
        transition: 'all 0.2s ease-out'
      }
    },
    main: {
      py: 9,
      color: 'foreground.primary',
      transition: 'background-color 0.2s ease-out, color 0.2s ease-out',
    },
    footer: {
      px: 3,
      pb: 4,
      backgroundColor: 'background.primary',
      color: 'foreground.primary',
      // boxShadow: theme => `inset 0px 1px 0px ${theme.colors.border.default}`,
      transition: 'background-color 0.2s ease-out',
      inner: {
        width: '100%',
        maxWidth: 'container',
        margin: '0 auto',
        pt: '24px',
        boxShadow: theme => `inset 0px 1px 0px ${theme.colors.border.default}`,
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
      transition: 'color 0.2s ease-out',
      '::selection': {
        textShadow: 'none',
        backgroundColor: 'foreground.primary',
        color: 'background.primary'
      },
    },
    overline: {
      fontFamily: 'body',
      lineHeight: 'body',
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
      fontSize: [6, 7, 8],
      variant: 'text.heading',
      m: 0,
    },
    h2: {
      color: 'foreground.primary',
      variant: 'text.heading',
      fontSize: 4,
      m: 0,
    },
    h3: {
      color: 'foreground.primary',
      variant: 'text.heading',
      fontSize: 3,
      m: 0,
    },
    h4: {
      color: 'foreground.primary',
      variant: 'text.heading',
      fontSize: 2,
      m: 0,
    },
    h5: {
      color: 'foreground.primary',
      variant: 'text.heading',
      fontSize: 1,
      m: 0,
    },
    h6: {
      color: 'foreground.primary',
      variant: 'text.heading',
      fontSize: 0,
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
        backgroundImage: theme => `linear-gradient(to right, ${theme.colors.foreground.secondary}, ${theme.colors.foreground.secondary})`,
        backgroundSize: '100% 1px',
        backgroundPosition: '0 100%',
        backgroundRepeat: 'no-repeat',
        ':hover': {
          color: 'foreground.primary',
          textDecoration: 'none',
          backgroundImage: theme => `linear-gradient(to right, ${theme.colors.foreground.primary}, ${theme.colors.foreground.primary})`,
          transition: 'all 0.2s ease-out',
        },
        ':focus': {
          color: 'foreground.primary',
          textDecoration: 'none',
          backgroundImage: theme => `linear-gradient(to right, ${theme.colors.foreground.primary}, ${theme.colors.foreground.primary})`,
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
      transition: 'all 0.2s ease-out',
      ':hover': {
        color: 'foreground.secondary',
        transition: 'all 0.2s ease-out',
      },
      ':focus': {
        color: 'foreground.secondary',
        transition: 'all 0.2s ease-out',
      },
    },
    iconOutline: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'body',
      height: '40px',
      width: '40px',
      p: 0,
      fontSize: 0,
      fontWeight: 'bold',
      color: 'foreground.primary',
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
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'body',
      height: '40px',
      width: '40px',
      p: 0,
      fontSize: 0,
      fontWeight: 'bold',
      color: 'foreground.primary',
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
}