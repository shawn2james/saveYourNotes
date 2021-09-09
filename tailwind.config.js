const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      "fontFamily": {
        "poppins": "'Poppins', Helvetica, sans-serif",
        "marck-script": "'Marck Script', 'Poppins', sans-serif",
      },
      "backgroundImage": theme => ({
        "body": "url('assets/main-background.png')",
      }),
      "colors": {
        "light": "#F8F8F8",
        "dark": colors.black,
        "secondary": "#ADEFFE"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
