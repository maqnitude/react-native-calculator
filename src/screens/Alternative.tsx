import React, { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import Row from '../components/Row';
import { AlternativeAppProps } from './Types';
import styles from './Styles';
import Tab from '../components/Tab';


const AlternativeApp = ({ navigation, activeTab, setActiveTab }: AlternativeAppProps) => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleSubmitButton = () => {
    try {
      setResult(eval(text));
    }
    catch (error) {
      setResult('Error: Unexpected result');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Row>
          <Tab type="first" text="Calculator" color={activeTab === 'calculator'} onPress={() => {navigation.navigate('CalculatorApp'); setActiveTab('calculator');}} />
          <Tab text="Alternative" color={activeTab === 'alternative'} onPress={() => {navigation.navigate('AlternativeApp'); setActiveTab('alternative');}} />
          <Tab type="last" text="Converter" color={activeTab === 'converter'} onPress={() => {navigation.navigate('ConverterApp'); setActiveTab('converter');}} />
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
