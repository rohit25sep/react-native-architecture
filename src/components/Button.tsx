import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {multipleTapHandler} from '../hoc/multipleTapHandler';
import {getTestID} from '../utils/AppUtils';
import {Fonts, Colors} from '../assets/Theme';

const TouchableOpacityMultipleTapHandler = multipleTapHandler(
  TouchableWithoutFeedback,
);
export interface ButtonProps {
  text: string;
  onPress: () => Promise<void> | any;
  isFilled: boolean;
  testID?: string;
}
const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacityMultipleTapHandler
      disabled={!props.isFilled}
      accessibilityRole="button"
      onPress={props.onPress}
      testID={props.testID || getTestID(props.text)}>
      <View style={styles(props.isFilled).btnContainerStyle}>
        <Text style={styles(props.isFilled).btnTextStyle}> {props.text} </Text>
      </View>
    </TouchableOpacityMultipleTapHandler>
  );
};

const styles = (isFilled: boolean) =>
  StyleSheet.create({
    btnContainerStyle: {
      backgroundColor: Colors.lakeshoreBlue,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 15,
      marginRight: 15,
      alignContent: 'center',
      borderRadius: 5,
      marginBottom: 15,
      marginTop: 15,
      paddingVertical: 14.5,
      opacity: isFilled ? 1 : 0.5,
    },
    btnTextStyle: {
      color: 'white',
      fontStyle: 'normal',
      fontWeight: '700',
      marginHorizontal:10,
      lineHeight: 19,
      fontSize: Fonts.size.label,
      
    },
  });

export default Button;
