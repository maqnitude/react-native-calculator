import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import Row from '../components/Row';
import Button from '../components/Button';
import Tab from '../components/Tab';

import styles from './Styles';
import { ConverterAppProps } from './Types';

const ConverterApp = ({ navigation, active, setActive }: ConverterAppProps) => {
  const handleButtonPress = (text: string) => {};

  return (
    <View style={styles.container}>
      <Row>
        <Tab type="left" text="Calculator" color={!active} onPress={() => {navigation.navigate('CalculatorApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
        <Tab type="mid" text="Alternative" color={!active} onPress={() => {navigation.navigate('AlternativeApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
        <Tab type="mid" text="Converter" color={active} onPress={() => {navigation.navigate('ConverterApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
        <Tab type="right" text="History" color={!active} onPress={() => {navigation.navigate('HistoryApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
      </Row>
      <View style={styles.displayContainer}>
        <Text style={[styles.value, {fontSize: 24}]}>This is the display area.</Text>
      </View>
      <SafeAreaView style={styles.buttonContainer}>
        <Text style={[styles.subContent, {fontSize: 20}]}>Below is where the buttons are displayed.</Text>
        <Button theme="secondary" text="X" onPress={() => handleButtonPress('X')} />
      </SafeAreaView>
    </View>
  );
};

export default ConverterApp;
