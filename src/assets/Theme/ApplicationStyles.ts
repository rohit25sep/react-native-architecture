import Colors from './Colors';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.clear,
  },
  themeContainer: {
    flex: 1,
    backgroundColor: Colors.clear,
  },
  screenOverlay: {
    flex: 1,
    backgroundColor: Colors.clear,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toastText: {
    color: Colors.white,
  },
  toastButtonTextStyle: {
    color: Colors.white,
  },
  shadow: {
    elevation: 3,
    shadowColor: Colors.clear,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.7,
  },
};

export default ApplicationStyles;
