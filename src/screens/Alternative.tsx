import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import Row from '../components/Row';
import { AlternativeAppProps } from './Types';
import { generateStyles } from './Styles';
import Tab from '../components/Tab';
import { updateHistory } from '../storage';

const AlternativeApp = ({ navigation, route, active, setActive, dimensions }: AlternativeAppProps) => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const styles = generateStyles(dimensions.width, dimensions.height);

  useEffect(() => {
    if (route.params?.selectedHistory) {
      let [calc, res] = route.params.selectedHistory.split(' = ');
      setText(calc);
      setResult(res);
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
      <View style={{flex: 2}}>
        <Row>
          <Tab dimensions={ dimensions } type="left" text="Calculator" color={!active} onPress={() => {navigation.navigate('CalculatorApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
          <Tab dimensions={ dimensions } type="mid" text="Alternative" color={active} onPress={() => {navigation.navigate('AlternativeApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
          <Tab dimensions={ dimensions } type="mid" text="Converter" color={!active} onPress={() => {navigation.navigate('ConverterApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
          <Tab dimensions={ dimensions } type="right" text="History" color={!active} onPress={() => {navigation.navigate('HistoryApp'); setActive(isActive => isActive ? isActive : !isActive);}} />
        </Row>
      </View>
      <View style={{flex: 8, justifyContent: 'flex-start', margin: 5}}>
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
        <Text style={{color: '#CBE1FF', fontSize: 28, fontWeight: '300', marginRight: 10, textAlign: 'left'}}> Result: {result} </Text>
      </View>
    </View>
  );
};

export default AlternativeApp;
