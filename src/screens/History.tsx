import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { getData, clearData } from '../storage';

import Row from '../components/Row';
import Button from '../components/Button';
import Tab from '../components/Tab';

import styles from './Styles';
import { HistoryAppProps } from './Types';

const HistoryApp = ({ navigation, active, setActive }: HistoryAppProps) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const history = await getData();
      setHistory(history);
    };

    fetchHistory();
  }, []);

  const handleClearHistory = async () => {
    await clearData();
    setHistory([]);
  };

  return (
    <View style={styles.container}>
      <Row>
        <Tab type="left" text="Calculator" color={!active} onPress={() => {navigation.navigate('CalculatorApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
        <Tab type="mid" text="Converter" color={!active} onPress={() => {navigation.navigate('ConverterApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
        <Tab type="right" text="History" color={active} onPress={() => {navigation.navigate('HistoryApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
      </Row>
      <View style={styles.displayContainer}>
        {history.map((calculation, index) => (
          <Text key={index} style={{fontSize: 24, color: 'white'}}>{calculation}</Text>
        ))}
      </View>
      <Row>
        <Button text="Clear" onPress={handleClearHistory} />
      </Row>
    </View>
  );
};

export default HistoryApp;
