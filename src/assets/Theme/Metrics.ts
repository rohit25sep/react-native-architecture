import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const moderateScale = (size: number) => size;

// Used via Metrics.baseMargin
const Metrics = {
  zero: 0,
  floatingLeft: scale(13),
  textFieldRadius: 6,
  borderLineWidth: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  buttonRadius: 4,
  isSmallDevice: isSmallSize(),
  isIphoneXGreater: isIphoneXGreater(),
  icons: {
    tiny: scale(16),
    small: scale(20),
    medium: scale(30),
    large: scale(45),
    xl: scale(50),
  },
  images: {
    small: scale(20),
    medium: scale(40),
    large: scale(60),
    profile: scale(115),
    logoSmall: scale(110),
    logo: scale(200),
  },
  headerShadow: {
    shadowColor: 'grey',
    shadowOffset: {width: 1, height: 2.5},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  size: {
    s: 5,
    m: 10,
    l: 15,
    xl: 20,
    xxl: 25,
    xxxl: 30,
  },
};

export function isIphoneXGreater() {
  return (
    // This has to be iOS
    Platform.OS === 'ios' &&
    // Check either, iPhone X or XR
    isIPhoneXSize()
  );
}

function isIPhoneXSize() {
  return height >= 812 || width >= 812;
}

function isSmallSize() {
  return height <= 568 || width <= 320;
}

export {scale, moderateScale, Metrics};
