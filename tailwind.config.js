module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },

    /*     fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      2xl: '1.563rem',
      3xl: '1.953rem',
      4xl: '2.441rem',
      5xl: '3.052rem',
    } */
    /*    colors: {
      while: '#FFFFFF',
      black: '#000000',
      primary: {
        99: '#FFFBFE ',
        95: '#F6EDFF',
        90: '#EADDFF',
        80: '#D0BCFF',
        70: '#B69DF8',
        60: '#9A82DB',
        50: '#7F67BE',
        40: '#6750A4',
        30: '#4F378B',
        20: '#381E72',
        10: '#21005D',
        light: '',
        DEFAULT: '',
        dark: '',
      },
      secondary: {
        99: '#FFFBFE',
        95: '#F6EDFF',
        90: '#E8DEF8',
        80: '#CCC2DC',
        70: '#B0A7C0',
        60: '#958DA5',
        50: '#7A7289',
        40: '#625B71',
        30: '#4A4458',
        20: '#332D41',
        10: '#1D192B',
        light: '',
        DEFAULT: '',
        dark: '',
      },
      tertiary: {
        99: '#FFFBFA',
        95: '#FFECF1',
        90: '#FFD8E4',
        80: '#EFB8C8',
        70: '#D29DAC',
        60: '#B58392',
        50: '#986977',
        40: '#7D5260',
        30: '#633B48',
        20: '#492532',
        10: '#31111D',
        light: '',
        DEFAULT: '',
        dark: '',
      },
      error: {
        99: '#FFFBF9',
        95: '#FCEEEE',
        90: '#F9DEDC',
        80: '#F2B8B5',
        70: '#EC928E',
        60: '#E46962',
        50: '#DC362E',
        40: '#B3261E',
        30: '#8C1D18',
        20: '#601410',
        10: '#410E0B',
        light: '',
        DEFAULT: '',
        dark: '',
      },
      neutral: {
        99: '#FFFBFE',
        95: '#F4EFF4',
        90: '#E6E1E5',
        80: '#C9C5CA',
        70: '#AEAAAE',
        60: '#939094',
        50: '#787579',
        40: '#605D62',
        30: '#484649',
        20: '#313033',
        10: '#1C1B1F',
        light: '',
        DEFAULT: '',
        dark: '',
      },
      neutralVariant: {
        99: '#FFFBFE',
        95: '#F5EEFA',
        90: '#E7E0EC',
        80: '#CAC4D0',
        70: '#AEA9B4',
        60: '#938F99',
        50: '#79747E',
        40: '#605D66',
        30: '#49454F',
        20: '#322F37',
        10: '#1D1A22',
        light: '',
        DEFAULT: '',
        dark: '',
      },
    }, */
  },
  plugins: [],
};
