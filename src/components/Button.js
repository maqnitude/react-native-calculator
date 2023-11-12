import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: '#CBE1FF',
    fontSize: 34,
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
    // width: Math.floor(screen.width / 2 - 20),
    width: buttonWidth * 2 - 18,
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

export default ({ text, onPress, size, theme }) => {
  const buttonStyles = [styles.button];
  if (size === 'double') {
    buttonStyles.push(styles.buttonDouble);
  }
  if (theme) {
    theme.split(' ').forEach(prop => {
      if (prop === 'primary') {
        buttonStyles.push(styles.primary_button);
      }
      else if (prop === 'secondary') {
        buttonStyles.push(styles.secondary_button);
      }
      else if (prop === 'top-left-corner') {
        buttonStyles.push(styles.topLeftCorner);
      }
      else if (prop === 'top-right-corner') {
        buttonStyles.push(styles.topRightCorner);
      }
      else if (prop === 'bottom-left-corner') {
        buttonStyles.push(styles.bottomLeftCorner);
      }
      else if (prop === 'bottom-right-corner') {
        buttonStyles.push(styles.bottomRightCorner);
      }
    });
  }
  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
