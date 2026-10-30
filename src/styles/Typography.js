// ========================================
// TYPOGRAPHY CLASS NAMING CONVENTION
// ========================================
//
// Syntax: text + FontSize + FontWeight + ColorName
//
// Example:
// text14RBrandBlack
//
// text  = Typography class
// 14    = Font size (14px)
// R     = Heebo Regular
// BrandBlack = Text color
//
// Font Weight:
// R     = Regular
// M     = Medium
// SB    = SemiBold
// B     = Bold
// EB    = ExtraBold
// Black = Black
// L     = Light
// EL    = ExtraLight
// T     = Thin
//
// Font Sizes:
// 10, 11, 12, 14, 16, 18, 20, 24
//
// Colors:
// White, Black, BrandBlack, BrandBlue,
// DarkGray, LightGray, Red, LightBackground
//
// ========================================
const plugin = require('tailwindcss/plugin');
const Colors = require('./Colors').default;

const fontSizes = [10, 11, 12, 14, 16, 18, 20, 24];

const fontFamilies = {
  R: 'Heebo-Regular',
  M: 'Heebo-Medium',
  SB: 'Heebo-SemiBold',
  B: 'Heebo-Bold',
  EB: 'Heebo-ExtraBold',
  Black: 'Heebo-Black',
  L: 'Heebo-Light',
  EL: 'Heebo-ExtraLight',
  T: 'Heebo-Thin',
};

const utilities = {};

Object.entries(fontFamilies).forEach(([fontKey, fontFamily]) => {
  fontSizes.forEach(fontSize => {
    Object.entries(Colors).forEach(([colorName, colorValue]) => {
      const className = `.text${fontSize}${fontKey}${colorName
        .charAt(0)
        .toUpperCase()}${colorName.slice(1)}`;

      utilities[className] = {
        fontFamily,
        fontSize,
        color: colorValue,
      };
    });
  });
});

module.exports = plugin(({ addUtilities }) => {
  addUtilities(utilities);
});
