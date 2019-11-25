module.exports = {
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      gray: {
        dark: '#464E57',
        medium: '#5E7285',
        light: '#C0CFDE',
        lighter: '#F9FCFF',
      },
      orange: {
        dark: '#FF5C1C',
        medium: '#FF662A',
        brand: '#FF7F2A',
      },
      yellow: {
        brand: '#FFCC00'
      },
      brand: {
        neurabot: '#224DE5'
      }
    },
    shadow: {
      default: "0px 10px 50px rgba(192, 207, 222, 0.5)"
    },
    fontFamily: {
      heading: ['"Metropolis"', 'sans-serif' ],
      body: ['"Inter"', 'sans-serif' ],
    },
    fontSize: {
      '5xl':'3rem',
      '4xl':'2.5rem',
      '3xl':'2rem',
      '2xl':'1.5rem',
      'xl':'1.25rem',
      'lg':'1.125rem',
      'base':'1rem',
      'sm':'0.875rem',
      'xs':'0.75rem',
    },
    letterSpacing: {
      tight: '-1px',
      wide: '2px',
    },
    lineHeight: {
      none: 1,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },
    screens: {
      'md': '600px',
      'lg': '1200px',
    },
    space: {
      '1': '10px',
      '2': '20px',
      '3': '30px',
      '4': '40px',
      '5': '50px',
      '6': '60px',
      '7': '70px',
      '8': '80px',
      '9': '90px',
      '10': '100px',
    },
    extend: {
      width: {
        '1/3': 'calc(33.3333333% - 20px)',
        '5/12': 'calc(41.66666667% - 20px)',
        '1/2': 'calc(50% - 20px)',
        '7/12': 'calc(58.33333333% - 20px)',
      },
    }
  },
  variants: {},
  plugins: []
}
