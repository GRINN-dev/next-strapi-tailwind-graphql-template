module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        //
      },
      colors: {
        primary: {
          50: "#436be5",
          100: "#436be5",
          200: "#3961db",
          300: "#2f57d1",
          400: "#254dc7",
          500: "#1b43bd",
          600: "#1139b3",
          700: "#072fa9",
          800: "#00259f",
          900: "#001b95",
        },
        secondary: {
          50: "#ffbaba",
          100: "#ffb0b0",
          200: "#ffa6a6",
          300: "#f89c9c",
          400: "#ee9292",
          500: "#e48888",
          600: "#da7e7e",
          700: "#d07474",
          800: "#c66a6a",
          900: "#bc6060",
        },
        accent: {
          50: "#9dffff",
          100: "#93ffff",
          200: "#89fffa",
          300: "#7ffff0",
          400: "#75ffe6",
          500: "#6bffdc",
          600: "#61f5d2",
          700: "#57ebc8",
          800: "#4de1be",
          900: "#43d7b4",
        },
      },
    },
  },
  plugins: [],
};
