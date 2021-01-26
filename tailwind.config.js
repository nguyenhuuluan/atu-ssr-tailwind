module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
        75: '75',
        100: '100',
      },
      gridTemplateColumns: {
        // Simple 8 row grid

        8: 'repeat(8, minmax(0, 1fr))',

        // Complex site-specific row configuration

        // card: 'repeat(auto-fit, minmax(200px, 250px))',
        card: 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      gridAutoRows: {
        contact: 'minmax(4rem, min-content)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
