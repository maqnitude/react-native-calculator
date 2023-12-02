import { StyleSheet } from 'react-native';

export const generateStyles = (width: number, height: number) => {
  const isLandscape = width > height;

  const buttonWidth = isLandscape ? width / 20 : width / 4;
  const doubleButtonWidth = isLandscape ? width / 2 - 29 : width / 2 - 18;
  const fontSize = isLandscape ? 20 : 34;

  return StyleSheet.create({
    text: {
      color: '#CBE1FF',
      fontSize: fontSize,
    },
    button: {
      flex: 1,
      height: Math.floor(buttonWidth - 10),
      backgroundColor: '#242933',
      borderRadius: 2,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
    },
    buttonDouble: {
      width: Math.ceil(doubleButtonWidth),
      flex: 0,
      alignItems: 'flex-start',
      paddingLeft: 40,
    },
    secondary_button: {
      backgroundColor: '#363E4D',
    },
    primary_button: {
      backgroundColor: '#0060E5',
    },
    topLeftCorner: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 2,
      borderBottomRightRadius: 2,
      borderBottomLeftRadius: 2,
    },
    topRightCorner: {
      borderTopLeftRadius: 2,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 2,
      borderBottomLeftRadius: 2,
    },
    bottomLeftCorner: {
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
      borderBottomRightRadius: 2,
      borderBottomLeftRadius: 8,
    },
    bottomRightCorner: {
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
      borderBottomRightRadius: 8,
      borderBottomLeftRadius: 2,
    },
  });
};
