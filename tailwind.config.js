module.exports = {
  theme: {
    //Liner Gradients
    linearGradients: {
      directions: { // defaults to these values
        't': 'to top',
        'tr': 'to top right',
        'r': 'to right',
        'br': 'to bottom right',
        'b': 'to bottom',
        'bl': 'to bottom left',
        'l': 'to left',
        'tl': 'to top left',
      },
      colors: { // defaults to {}
        'red': '#C898FF',
        'red-blue': ['#C898FF', '#72A1FF'],
        'blue-red': ['#72A1FF', '#C898FF'],
        'red-blue-with-stops': ['#72A1FF', '#C898FF', '#6B8DD6', '#C898FF'],
        'red-blue-with-end': ['#667eea', '#764ba2', '#6B8DD6', '#8E37D7'],
      },
    },
    repeatingLinearGradients: theme => ({
      directions: theme('linearGradients.directions'), // defaults to the same values as linearGradients’ directions
      colors: theme('linearGradients.colors'), // defaults to {}
      lengths: { // defaults to {}
        'sm': '25px',
        'md': '50px',
        'lg': '100px',
      },
    }),

    // Border Gradients
    linearBorderGradients: {
      directions: { // defaults to these values
        't': 'to top',
        'tr': 'to top right',
        'r': 'to right',
        'br': 'to bottom right',
        'b': 'to bottom',
        'bl': 'to bottom left',
        'l': 'to left',
        'tl': 'to top left',
      },
      colors: { // defaults to {}
        'red': '#C898FF',
        'red-blue': ['#C898FF', '#72A1FF'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
      },
    },
    repeatingLinearBorderGradients: theme => ({
      directions: theme('linearBorderGradients.directions'), // defaults to the same values as linearBorderGradients’ directions
      colors: theme('linearBorderGradients.colors'), // defaults to {}
      lengths: { // defaults to {}
        'sm': '25px',
        'md': '50px',
        'lg': '100px',
      },
    }),

    //Transition 
    transitionProperty: { // defaults to these values
      'none': 'none',
      'all': 'all',
      'color': 'color',
      'bg': 'background-color',
      'border': 'border-color',
      'colors': ['color', 'background-color', 'border-color'],
      'opacity': 'opacity',
      'transform': 'transform',
    },
    transitionDuration: { // defaults to these values
      'default': '250ms',
      '0': '0ms',
      '100': '100ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
    },
    transitionTimingFunction: { // defaults to these values
      'default': 'ease',
      'linear': 'linear',
      'ease': 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
    },
    transitionDelay: { // defaults to these values
      'default': '0ms',
      '0': '0ms',
      '100': '100ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
    },
    willChange: { // defaults to these values
      'auto': 'auto',
      'scroll': 'scroll-position',
      'contents': 'contents',
      'opacity': 'opacity',
      'transform': 'transform',
    },

    //Transform
    transform: { // defaults to this value
      'none': 'none',
    },
    transformOrigin: { // defaults to these values
      't': 'top',
      'tr': 'top right',
      'r': 'right',
      'br': 'bottom right',
      'b': 'bottom',
      'bl': 'bottom left',
      'l': 'left',
      'tl': 'top left',
    },
    translate: { // defaults to {}
      '1/2': '50%',
      'full': '100%',
      'right-up': ['100%', '-100%'],
      '3d': ['40px', '-60px', '-130px'],
    },
    scale: { // defaults to {}
      '90': '0.9',
      '100': '1',
      '110': '1.1',
      '-100': '-1',
      'stretched-x': ['2', '0.5'],
      'stretched-y': ['0.5', '2'],
      '3d': ['0.5', '1', '2'],
    },
    rotate: { // defaults to {}
      '90': '90deg',
      '180': '180deg',
      '270': '270deg',
      '3d': ['0', '1', '0.5', '45deg'],
    },
    skew: { // defaults to {}
      '-5': '-5deg',
      '5': '5deg',
    },
    perspective: { // defaults to {}
      'none': 'none',
      '250': '250px',
      '500': '500px',
      '750': '750px',
      '1000': '1000px',
    },
    perspectiveOrigin: { // defaults to these values
      't': 'top',
      'tr': 'top right',
      'r': 'right',
      'br': 'bottom right',
      'b': 'bottom',
      'bl': 'bottom left',
      'l': 'left',
      'tl': 'top left',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
    },
    fluidContainer: {
      'default': {
        Width: '100%',   // defaults to null (no max width)        
        padding: '15px',      // defaults to '15px'
        responsiveMaxWidth: { // defaults to {}
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',     // at screen 'lg', the max width will change to 1200px
        'xl': '1200px',
        },
        responsivePadding: {  // defaults to {}
          'sm': '30px',       // at screen 'sm', the padding will change to 30px
          'md': '15px', 
          'lg': '15px', 
          'xl': '15px', 
        },
      },
    },
    extend: {
      screens:{
        'desktop': '1367px',
      },
      width:{
        '55':'55%',
        '70':'70%',
        '575':'575px',
        '22':'22px',
        '250':'250px',
        '519':'519px',
      },
      height:{
        '22': '22px',
        '43': '43px',
        '715':'715px',
      },
      margin:{
        "290":"290px",
        "15": "15px",
        "21": "20px",
        "25": "25px",
        "85": "85px",
        "50": "50px",
      },
      padding:{
        "290":"290px",
        "195":"195px",
        "150":"150px",
        "21":"20px",
        "25":"25px",
        "35":"35px",
        "50":"50px",
        "50%":"50%",
        "55":"55px",
        "85":"85px",
      },
      inset:{
        '-110' : '-110px',
        '-130' : '-130px',
        '-230' : '-230px',
        '-328' : '-328px',
        '-600' : '-600px',
        '800'   : '800px',
        '570'   : '570px',
        '250'   : '250px',
        '130'  : '130px',
        '110'  : '110px',
        '62'   : '62px',
        '50'   : '50px',
        '5'    : '5px',
        '50%'   : '50%',
      },
      fontSize:{
        "14":"14px",
        "22":"22px",
        "29":"29px",
        "75":"75px",
        "3x2":"35px",
        "3x3":"37px",
        "4x2":"40px",
        "6x2":"55px",
        "6x3":"58px",
      },
      backgroundPosition: {
        "p-gradient": "100% 0"
      },
      backgroundSize: {
        "s-gradient": "300% 100%"
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ["Open Sans", "sans-serif"]
      },
      borderWidth: {
        default: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '10': '10px',
      },
      zIndex:{
        '-1': '-1',
      },
      borderRadius:{
        '10': '10px',
      },
      borderColor: theme => ({ 
        ...theme('colors'),
        'primary': '#E8E8E8',
        'btn': '#141516',
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#4A4C4F',
        'heading': '#201F22',
        'orange-70': '#BA5C23',
        'btn': '#141516',
      }),
      colors: {
        'primary': '#4A4C4F',
        'heading': '#201F22',
        'orange-70': '#BA5C23',
        'btn': '#141516',
        'icon': '#242424',
      },
      lineHeight:{
        "26":"26px",
      },
    },
  },
  variants: { // all the following default to ['responsive']
    lineHeight: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    width: ['responsive', 'hover', 'focus'],
    height: ['responsive', 'hover', 'focus'],
    inset: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive', 'hover', 'focus'],
    fontFamily: ['responsive', 'hover', 'focus'],
    fluidContainer: ['responsive'], // defaults to ['responsive']
    backgroundImage: ['responsive', 'hover'], // this is for the "bg-none" utility
    linearGradients: ['responsive', 'hover'],
    repeatingLinearGradients: ['responsive', 'hover'],
    transitionProperty: ['responsive'],
    transitionDuration: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDelay: ['responsive'],
    willChange: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    translate: ['responsive'],
    scale: ['responsive'],
    rotate: ['responsive'],
    skew: ['responsive'],
    perspective: ['responsive'],
    perspectiveOrigin: ['responsive'],
    transformStyle: ['responsive'],
    backfaceVisibility: ['responsive'],
    transformBox: ['responsive'],
    linearBorderGradients: ['responsive', 'hover'], // defaults to ['responsive']
    repeatingLinearBorderGradients: ['responsive', 'hover'], // defaults to ['responsive']
    borderWidth: ['responsive', 'hover', 'focus'],
    backgroundSize: ['responsive', 'hover', 'focus'],
    padding: ['responsive', 'hover', 'focus'],
    margin: ['responsive', 'hover', 'focus'],
    display: ['responsive', 'hover', 'focus'],
    visibility: ['responsive', 'hover', 'focus'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('tailwindcss-gradients')(),
      require('tailwindcss-transitions')(),
      require('tailwindcss-border-gradients')(),
      require('tailwindcss-transforms')({
        '3d': false, // defaults to false
      }),
      require('tailwindcss-fluid-container')({
        componentPrefix: 'c-', // defaults to 'c-'
        widthUtilities: true, // defaults to true
        paddingUtilities: true, // defaults to true
        marginUtilities: true, // defaults to true
        negativeMarginUtilities: true, // defaults to true
      }),
  ],
}
