import {moderateScale} from './Metrics';

const type = {
  //Currently most used Fonts in App
  book: 'Gotham-Book',
  medium: 'Gotham-Medium',
  gotham: 'Gotham-Medium',
  light: 'Gotham-Light',
  bold: 'Gotham-Bold',
  italic: 'Gotham-BookItalic',
  //////

  black: 'Gotham-Black',
  thin: 'Gotham-Thin',
  thinItalic: 'Gotham-ThinItalic',
  ultraItalic: 'Gotham-UltraItalic',
  xlight: 'Gotham-XLight',
  xLightItalic: 'Gotham-XLightItalic',
};

const weight = {
  weight300: '300',
  weight400: '400',
  weight500: '500',
  weight600: '600',
  weight700: '700',
  weight800: '800',
  weight900: '900',
  bold: 'bold',
};

const size = {
  h1: moderateScale(38),
  h2: moderateScale(34),
  h3: moderateScale(30),
  h4: moderateScale(26),
  h5: moderateScale(22),
  h6: moderateScale(19),
  input: moderateScale(18),
  regular: moderateScale(17),
  label: moderateScale(16),
  text: moderateScale(15),
  appBarText: moderateScale(14.5),
  medium: moderateScale(14),
  minSmall: moderateScale(11),
  small: moderateScale(12),
  mediumSmall: moderateScale(11),
  extraSmall: moderateScale(10),
  short: moderateScale(9),
  tiny: moderateScale(8.5),
};

const style = {
  h1: {
    fontFamily: type.bold,
    fontSize: size.h1,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.bold,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.light,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.light,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.light,
    fontSize: size.h6,
  },
  normal: {
    fontFamily: type.light,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.light,
    fontSize: size.medium,
  },
  label: {
    fontFamily: type.light,
    fontSize: size.label,
  },
  barTitle: {
    fontFamily: type.bold,
    fontSize: size.label,
  },
};

export default {
  type,
  size,
  style,
  weight,
};
