import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import Row from '../components/Row';
import { AlternativeAppProps } from './Types';
import styles from './Styles';
import Tab from '../components/Tab';
import { updateHistory } from '../storage';

const AlternativeApp = ({ navigation, route, active, setActive }: AlternativeAppProps) => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (route.params?.selectedHistory) {
      setText(route.params.selectedHistory)
    }
  }, [route.params?.selectedHistory]);

  const handleSubmitButton = () => {
    try {
      const newResult = eval(text);
      setResult(newResult);
      updateHistory(`${text} = ${newResult}`);
    }
    catch (error) {
      setResult('Error: Unexpected result');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Row>
          <Tab type="left" text="Calculator" color={!active} onPress={() => {navigation.navigate('CalculatorApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
          <Tab type="mid" text="Alternative" color={active} onPress={() => {navigation.navigate('AlternativeApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
          <Tab type="mid" text="Converter" color={!active} onPress={() => {navigation.navigate('ConverterApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
          <Tab type="right" text="History" color={!active} onPress={() => {navigation.navigate('HistoryApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
        </Row>
      </View>
      <View style={{flex: 9, justifyContent: 'flex-start', margin: 5}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10}}>
          <TextInput
            style={{color: '#fff', fontSize: 20, flex: 1, borderColor: 'gray', borderWidth: 1, marginRight: 5}}
            placeholder="Type your equation here"
            placeholderTextColor={'#fff'}
            onChangeText={newText => setText(newText)}
            defaultValue={text}
          />
          <Button color="#0060E5" onPress={handleSubmitButton} title="calculate"/>
        </View>
        <Text style={[styles.subContent, {textAlign: 'left'}]}> Result: {result} </Text>
      </View>
    </View>
  );
};

export default AlternativeApp;
