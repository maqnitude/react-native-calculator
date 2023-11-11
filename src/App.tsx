import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Row from './components/Row';
import Button from './components/Button';
import { onButtonPressed } from './utils/calculator';

const CalculatorApp = () => {
  const [currentInput, setCurrentInput] = useState("");
  const [previousInput, setPreviousInput] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleButtonPress = (text: string) => {
    const result = onButtonPressed(text, currentInput, previousInput, operation);
    setCurrentInput(result.currentInput);
    setPreviousInput(result.previousInput);
    setOperation(result.operation);
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text>{JSON.stringify(currentInput)}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Row>
          <Button text="C" onPress={() => handleButtonPress("C")}/>
          <Button text="." onPress={() => handleButtonPress(".")}/>
          <Button text="%" onPress={() => handleButtonPress("%")}/>
          <Button text="/" onPress={() => handleButtonPress("/")}/>
        </Row>
        <Row>
          <Button text="7" onPress={() => handleButtonPress("7")}/>
          <Button text="8" onPress={() => handleButtonPress("8")}/>
          <Button text="9" onPress={() => handleButtonPress("9")}/>
          <Button text="+" onPress={() => handleButtonPress("+")}/>
        </Row>
        <Row>
          <Button text="4" onPress={() => handleButtonPress("4")}/>
          <Button text="5" onPress={() => handleButtonPress("5")}/>
          <Button text="6" onPress={() => handleButtonPress("6")}/>
          <Button text="-" onPress={() => handleButtonPress("-")}/>
        </Row>
        <Row>
          <Button text="1" onPress={() => handleButtonPress("1")}/>
          <Button text="2" onPress={() => handleButtonPress("2")}/>
          <Button text="3" onPress={() => handleButtonPress("3")}/>
          <Button text="=" onPress={() => handleButtonPress("=")}/>
        </Row>
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
});

export default CalculatorApp;
