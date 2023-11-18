import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import Row from '../components/Row';
import Button from '../components/Button';
import Tab from '../components/Tab';

import { onButtonPressed } from '../utils/calculator';
import styles from './Styles';
import { HistoryAppProps } from './Types';

const HistoryApp = ({ navigation, active, setActive }: HistoryAppProps) => {
  const handleButtonPress = (text: string) => {};

  return (
    <View style={styles.container}>
      <Row>
        <Tab type="left" text="Calculator" color={!active} onPress={() => {navigation.navigate('CalculatorApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
        <Tab type="mid" text="Alternative" color={!active} onPress={() => {navigation.navigate('AlternativeApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
        <Tab type="mid" text="Converter" color={!active} onPress={() => {navigation.navigate('ConverterApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
        <Tab type="right" text="History" color={active} onPress={() => {navigation.navigate('HistoryApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
      </Row>
      <View style={styles.displayContainer}>
        <Text style={{fontSize: 32, color: 'white'}}>This is where the history will be displayed.</Text>
      </View>
    </View>
  );
};

export default HistoryApp;
