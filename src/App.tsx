import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CalculatorApp from './screens/Calculator';
import ConverterApp from './screens/Converter';

const Stack = createNativeStackNavigator();

const App = () => {
  const [screen, setScreen] = useState<boolean>(false);

  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="CalculatorApp" options={{ headerShown: false }}>
          {(props) => <CalculatorApp {...props} screen={screen} setScreen={setScreen} />}
        </Stack.Screen>
        <Stack.Screen name="ConverterApp" options={{ headerShown: false }}>
          {(props) => <ConverterApp {...props} screen={screen} setScreen={setScreen} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
