module.exports = {
  content: [
    "index.html",
    "./src/**/*.jsx",
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
    "./src/app.js",
    "./src/index.html",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "550px",
      md: "749px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundColor: {
        // Background Color
        "main-bg": "#FAFBFB",
        "secondary-bg": "black",

        // Dark Background Color
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",

        // Text Color
        "main-text": "#F7F7F7",
        "secondary-text": "#20232A",
      },
    },
  },
  plugins: [],
};
