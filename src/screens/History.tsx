import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Button } from 'react-native';

import { getData, clearData } from '../storage';

import Row from '../components/Row';
import Tab from '../components/Tab';
import SearchBar from '../components/SearchBar';

import styles from './Styles';
import { HistoryAppProps } from './Types';
import { useFocusEffect } from '@react-navigation/native';

const HistoryApp = ({ navigation, active, setActive }: HistoryAppProps) => {
  const [history, setHistory] = useState<string[]>([]);
  const [selectedHistory, setSelectedHistory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // useFocusEffect is a hook provided by @react-navigation/native that
  // runs the provided callback whenever the screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      const fetchHistory = async () => {
        const history = await getData();
        setHistory(history);
      };
      fetchHistory();
    }, [])
  );

  const handleClearHistory = async () => {
    await clearData();
    setHistory([]);
  };

  const handleSelectHistory = (calculation) => {
    setSelectedHistory(calculation);
    navigation.navigate('AlternativeApp', { selectedHistory: calculation });
  };

  return (
    <View style={styles.container}>
      <Row>
        <Tab type="left" text="Calculator" color={!active} onPress={() => {navigation.navigate('CalculatorApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
        <Tab type="mid" text="Alternative" color={!active} onPress={() => {navigation.navigate('AlternativeApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
        <Tab type="mid" text="Converter" color={!active} onPress={() => {navigation.navigate('ConverterApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
        <Tab type="right" text="History" color={active} onPress={() => {navigation.navigate('HistoryApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
      </Row>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <View style={styles.displayContainer}>
        <ScrollView>
          {history.filter(calculation => calculation.includes(searchQuery.trim())).map((calculation, index) => (
            <TouchableOpacity key={index} onPress={() => handleSelectHistory(calculation)}>
              <Text key={index} style={{fontSize: 32, color: 'white', borderWidth: 1, borderTopColor: 'gray', borderLeftColor: '#161A20', borderRightColor: '#161A20', borderBottomColor: '#161A20'}}>{calculation}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <Row>
        <Button title="Clear" onPress={handleClearHistory} />
      </Row>
    </View>
  );
};

export default HistoryApp;
