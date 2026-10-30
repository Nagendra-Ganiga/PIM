/** @type {import('tailwindcss').Config} */
const colors = require('./src/styles/Colors').default;
const typography = require('./src/styles/Typography.js');

module.exports = {
  content: [
    './App.tsx',
    './components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        HeeboBlack: ['Heebo-Black'],
        HeeboBold: ['Heebo-Bold'],
        HeeboExtraBold: ['Heebo-ExtraBold'],
        HeeboExtraLight: ['Heebo-ExtraLight'],
        HeeboLight: ['Heebo-Light'],
        HeeboMedium: ['Heebo-Medium'],
        HeeboRegular: ['Heebo-Regular'],
        HeeboSemiBold: ['Heebo-SemiBold'],
        HeeboThin: ['Heebo-Thin'],
      },
    },
  },
  plugins: [typography],
};
