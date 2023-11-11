import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

// TODO: Bring this to a separate folder (i.e. ./conponents/CustomButton.ts)
type CustomButtonProps = {
  onPress: () => void,
  title: string,
};

const CustomButton = ({ onPress, title }: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const CalculatorApp = () => {
  const onButtonPressed = () => {
    // do nothing for now
    // this could a switch case for different button types
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text>The calculations will be displayed here.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRowContainer}>
          {['C', '', '%', '/'].map((value, index) => (
            <CustomButton key={index} title={value} onPress={onButtonPressed} />
          ))} 
        </View>
        <View style={styles.buttonRowContainer}>
          {['7', '8', '9', '*'].map((value, index) => (
            <CustomButton key={index} title={value} onPress={onButtonPressed} />
          ))} 
        </View>
        <View style={styles.buttonRowContainer}>
          {['4', '5', '6', '-'].map((value, index) => (
            <CustomButton key={index} title={value} onPress={onButtonPressed} />
          ))} 
        </View>
        <View style={styles.buttonRowContainer}>
          {['1', '2', '3', '+'].map((value, index) => (
            <CustomButton key={index} title={value} onPress={onButtonPressed} />
          ))}
        </View>
        <View style={styles.buttonRowContainer}>
          {['', '0', '.', '='].map((value, index) => (
            <CustomButton key={index} title={value} onPress={onButtonPressed} />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  displayContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  buttonContainer: {
    flex: 4,
    backgroundColor: 'gray',
  },
  buttonRowContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '2.5%',
  },
  button: {
    minWidth: '20%',
    minHeight: '40%',
    padding: '5%',
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default CalculatorApp;
