import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CalculatorApp from './screens/Calculator';
import AlternativeApp from './screens/Alternative';
import ConverterApp from './screens/Converter';
import HistoryApp from './screens/History';

const Stack = createNativeStackNavigator();

const App = () => {
  const [active, setActive] = useState<boolean>(true);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CalculatorApp" options={{ headerShown: false }}>
          {(props) => <CalculatorApp {...props} active={active} setActive={setActive} />}
        </Stack.Screen>
        <Stack.Screen name="AlternativeApp" options={{ headerShown: false }}>
          {(props) => <AlternativeApp {...props} active={active} setActive={setActive} />}
        </Stack.Screen>
        <Stack.Screen name="ConverterApp" options={{ headerShown: false }}>
          {(props) => <ConverterApp {...props} active={active} setActive={setActive} />}
        </Stack.Screen>
        <Stack.Screen name="HistoryApp" options={{ headerShown: false }}>
          {(props) => <HistoryApp {...props} active={active} setActive={setActive} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
