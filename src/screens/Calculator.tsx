import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import Row from '../components/Row';
import Button from '../components/Button';
import Tab from '../components/Tab';

import { onButtonPressed } from '../utils/calculator';
import styles from './Styles';
import { CalculatorAppProps } from './Types';

const CalculatorApp = ({ navigation, active, setActive }: CalculatorAppProps) => {
  const [currentInput, setCurrentInput] = useState('');
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
        <Row>
          <Tab type="left" text="Calculator" color={active} onPress={() => {navigation.navigate('CalculatorApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
          <Tab type="mid" text="Converter" color={!active} onPress={() => {navigation.navigate('ConverterApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
          <Tab type="right" text="History" color={!active} onPress={() => {navigation.navigate('HistoryApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
        </Row>
        <Text style={styles.value}>{currentInput}</Text>
      </View>
      <View style={styles.semiDisplayContainer}>
        <Text style={styles.subContent}>{previousInput} {operation}</Text>
      </View>
      <SafeAreaView style={styles.buttonContainer}>
        <Row>
          <Button theme="secondary top-left-corner" text="AC" onPress={() => handleButtonPress("AC")} />
          <Button theme="secondary" text="+/-" onPress={() => handleButtonPress("+/-")} />
          <Button theme="secondary" text="%" onPress={() => handleButtonPress("%")} />
          <Button theme="primary top-right-corner" text="÷" onPress={() => handleButtonPress("/")} />
        </Row>
        <Row>
          <Button text="7" onPress={() => handleButtonPress("7")} />
          <Button text="8" onPress={() => handleButtonPress("8")} />
          <Button text="9" onPress={() => handleButtonPress("9")} />
          <Button theme="primary" text="×" onPress={() => handleButtonPress("*")} />
        </Row>
        <Row>
          <Button text="4" onPress={() => handleButtonPress("4")} />
          <Button text="5" onPress={() => handleButtonPress("5")} />
          <Button text="6" onPress={() => handleButtonPress("6")} />
          <Button theme="primary" text="−" onPress={() => handleButtonPress("-")} />
        </Row>
        <Row>
          <Button text="1" onPress={() => handleButtonPress("1")} />
          <Button text="2" onPress={() => handleButtonPress("2")} />
          <Button text="3" onPress={() => handleButtonPress("3")} />
          <Button theme="primary" text="+" onPress={() => handleButtonPress("+")} />
        </Row>
        <Row>
          <Button theme="bottom-left-corner" size="double" text="0" onPress={() => handleButtonPress("0")} />
          <Button text="." onPress={() => handleButtonPress(".")} />
          <Button theme="primary bottom-right-corner" text="=" onPress={() => handleButtonPress("=")} />
        </Row>
      </SafeAreaView>
    </View>
  );
};

export default CalculatorApp;
