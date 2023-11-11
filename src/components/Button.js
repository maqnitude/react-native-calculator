import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 24,
    textAlign: 'center',
  },
  button: {
    minWidth: '20%',
    minHeight: '40%',
    padding: '5%',
    backgroundColor: 'white',
  },
});

export default ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
