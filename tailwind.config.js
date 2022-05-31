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
      // => @media (min-width: 640px) { ... }

      md: "749px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundColor: {
        // Background Color
        "main-bg": "#FAFBFB",
        "secondary-bg": "#FAFBFB",

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
