import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, Dimensions } from 'react-native';

import Row from '../components/Row';
import Button from '../components/Button';
import Tab from '../components/Tab';

import { onButtonPressed } from '../utils/calculator';
import { generateStyles } from './Styles';
import { CalculatorAppProps } from './Types';

const CalculatorApp = ({ navigation, active, setActive, dimensions }: CalculatorAppProps) => {
  const [currentInput, setCurrentInput] = useState('');
  const [previousInput, setPreviousInput] = useState(null);
  const [operation, setOperation] = useState(null);

  const styles = generateStyles(dimensions.width, dimensions.height);

  const handleButtonPress = async (text: string) => {
    const result = await onButtonPressed(text, currentInput, previousInput, operation);
    setCurrentInput(result.currentInput);
    setPreviousInput(result.previousInput);
    setOperation(result.operation);
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Row>
          <Tab dimensions={ dimensions } type="left" text="Calculator" color={active} onPress={() => {navigation.navigate('CalculatorApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
          <Tab dimensions={ dimensions } type="mid" text="Alternative" color={!active} onPress={() => {navigation.navigate('AlternativeApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
          <Tab dimensions={ dimensions } type="mid" text="Converter" color={!active} onPress={() => {navigation.navigate('ConverterApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
          <Tab dimensions={ dimensions } type="right" text="History" color={!active} onPress={() => {navigation.navigate('HistoryApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
        </Row>
        <Text style={styles.value}>{currentInput}</Text>
      </View>
      <View style={styles.semiDisplayContainer}>
        <Text style={styles.subContent}>{previousInput} {operation}</Text>
      </View>
      <SafeAreaView style={styles.buttonContainer}>
        <Row>
          <Button dimensions={ dimensions } theme="secondary top-left-corner" text="AC" onPress={() => handleButtonPress("AC")} />
          <Button dimensions={ dimensions } theme="secondary" text="+/-" onPress={() => handleButtonPress("+/-")} />
          <Button dimensions={ dimensions } theme="secondary" text="%" onPress={() => handleButtonPress("%")} />
          <Button dimensions={ dimensions } theme="primary top-right-corner" text="÷" onPress={() => handleButtonPress("/")} />
        </Row>
        <Row>
          <Button dimensions={ dimensions } text="7" onPress={() => handleButtonPress("7")} />
          <Button dimensions={ dimensions } text="8" onPress={() => handleButtonPress("8")} />
          <Button dimensions={ dimensions } text="9" onPress={() => handleButtonPress("9")} />
          <Button dimensions={ dimensions } theme="primary" text="×" onPress={() => handleButtonPress("*")} />
        </Row>
        <Row>
          <Button dimensions={ dimensions } text="4" onPress={() => handleButtonPress("4")} />
          <Button dimensions={ dimensions } text="5" onPress={() => handleButtonPress("5")} />
          <Button dimensions={ dimensions } text="6" onPress={() => handleButtonPress("6")} />
          <Button dimensions={ dimensions } theme="primary" text="−" onPress={() => handleButtonPress("-")} />
        </Row>
        <Row>
          <Button dimensions={ dimensions } text="1" onPress={() => handleButtonPress("1")} />
          <Button dimensions={ dimensions } text="2" onPress={() => handleButtonPress("2")} />
          <Button dimensions={ dimensions } text="3" onPress={() => handleButtonPress("3")} />
          <Button dimensions={ dimensions } theme="primary" text="+" onPress={() => handleButtonPress("+")} />
        </Row>
        <Row>
          <Button dimensions={ dimensions } theme="bottom-left-corner" size="double" text="0" onPress={() => handleButtonPress("0")} />
          <Button dimensions={ dimensions } text="." onPress={() => handleButtonPress(".")} />
          <Button dimensions={ dimensions } theme="primary bottom-right-corner" text="=" onPress={() => handleButtonPress("=")} />
        </Row>
      </SafeAreaView>
    </View>
  );
};

export default CalculatorApp;
