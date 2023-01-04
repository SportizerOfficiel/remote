module.exports = {
  purge: ['./public/**/*.html', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      hindGuntur: ['"Hind Guntur"', 'sans-serif'],
      righteous: ['"Righteous"', 'cursive'],
    },
    extend: {
      colors: {
        'primary-color': '#c09628',
        'secondary-color': '#151516',
        'white-color': '#fdfbf8',
        'red-color': '#c02828',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
