import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import Row from '../components/Row';
import Button from '../components/Button';
import Tab from '../components/Tab';

import styles from './Styles';
import { ConverterAppProps } from './Types';

const ConverterApp = ({ navigation, activeTab, setActiveTab }: ConverterAppProps) => {
  const handleButtonPress = (text: string) => { console.log(text); };

  return (
    <View style={styles.container}>
      <Row>
        <Tab type="first" text="Calculator" color={activeTab === 'calculator'} onPress={() => {navigation.navigate('CalculatorApp'); setActiveTab('calculator');}} />
        <Tab text="Alternative" color={activeTab === 'alternative'} onPress={() => {navigation.navigate('AlternativeApp'); setActiveTab('alternative');}} />
        <Tab type="last" text="Converter" color={activeTab === 'converter'} onPress={() => {navigation.navigate('ConverterApp'); setActiveTab('converter');}} />
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
