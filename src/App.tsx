import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CalculatorApp from './screens/Calculator';
import AlternativeApp from './screens/Alternative';
import ConverterApp from './screens/Converter';

const Stack = createNativeStackNavigator();

const App = () => {
  const [activeTab, setActiveTab] = useState<string>('calculator');

  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="CalculatorApp" options={{ headerShown: false }}>
          {(props) => <CalculatorApp {...props} activeTab={activeTab} setActiveTab={setActiveTab} />}
        </Stack.Screen>
        <Stack.Screen name="AlternativeApp" options={{ headerShown: false }}>
          {(props) => <AlternativeApp {...props} activeTab={activeTab} setActiveTab={setActiveTab} />}
        </Stack.Screen>
        <Stack.Screen name="ConverterApp" options={{ headerShown: false }}>
          {(props) => <ConverterApp {...props} activeTab={activeTab} setActiveTab={setActiveTab} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
