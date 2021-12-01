module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", './inde.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ff4800"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
