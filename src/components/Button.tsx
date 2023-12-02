import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { generateStyles } from './ButtonStyles';

interface ButtonProps {
  text: string;
  onPress: () => void;
  size?: string;
  theme?: string;
  dimensions: { width: number; height: number };
}

const Button: React.FC<ButtonProps> = ({ text, onPress, size, theme, dimensions }) => {
  const styles = generateStyles(dimensions.width, dimensions.height);
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

export default Button;
