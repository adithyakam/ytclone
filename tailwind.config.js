/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "error-color": "#dd2c00",
      "primary-color": "#3f51b5",
      "light-primary-color": "#c5cae9",
      "dark-primary-color": "#303f9f",
      "accent-color": "#ff4081",
      "light-accent-color": "#ff80ab",
      "dark-accent-color": "#f50057",
      "light-theme-background-color": "#fff",
      "light-theme-base-color": "#000",
      "light-theme-text-color": "#212121",
      "light-theme-secondary-color": "#737373",
      "light-theme-disabled-color": "#9b9b9b",
      "light-theme-divider-color": "#dbdbdb",
      "dark-theme-background-color": "#121212",
      "dark-theme-base-color": "#fff",
      "dark-theme-text-color": "#fff",
      "dark-theme-secondary-color": "#bcbcbc",
      "dark-theme-disabled-color": "#646464",
      "dark-theme-divider-color": "#3c3c3c",
    },
    extend: {},
  },
  plugins: [],
};
