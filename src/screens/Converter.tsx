import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import Row from '../components/Row';
import Button from '../components/Button';
import Tab from '../components/Tab';

import { onButtonPressed } from '../utils/calculator';
import styles from './Styles';
import { ConverterAppProps } from './Types';

const ConverterApp = ({ navigation, screen, setScreen }: ConverterAppProps) => {
  const handleButtonPress = (text: string) => {};

  return (
    <View style={styles.container}>
      <Row>
        <Tab type="first" text="Calculator" color={!screen} onPress={() => {navigation.navigate('CalculatorApp'); setScreen(oldScreen => oldScreen ? !oldScreen : oldScreen);}} />
        <Tab type="last" text="Converter" color={screen} onPress={() => {navigation.navigate('ConverterApp'); setScreen(oldScreen => oldScreen ? oldScreen : !oldScreen);}} />
      </Row>
      <View style={styles.displayContainer}>
        <Text>This is the display area.</Text>
      </View>
      <SafeAreaView style={styles.buttonContainer}>
        <Text>Here is where the buttons are displayed</Text>
      </SafeAreaView>
    </View>
  );
};

export default ConverterApp;
