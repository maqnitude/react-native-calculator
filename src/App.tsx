import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CalculatorApp from './screens/Calculator';
import AlternativeApp from './screens/Alternative';
import ConverterApp from './screens/Converter';
import HistoryApp from './screens/History';

const Stack = createNativeStackNavigator();

const App = () => {
  const [active, setActive] = useState<boolean>(true);
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const onChange = ({ window }) => {
      setDimensions(window);
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CalculatorApp" options={{ headerShown: false }}>
          {(props) => <CalculatorApp {...props} active={active} setActive={setActive} dimensions={dimensions} />}
        </Stack.Screen>
        <Stack.Screen name="AlternativeApp" options={{ headerShown: false }}>
          {(props) => <AlternativeApp {...props} active={active} setActive={setActive} dimensions={dimensions} />}
        </Stack.Screen>
        <Stack.Screen name="ConverterApp" options={{ headerShown: false }}>
          {(props) => <ConverterApp {...props} active={active} setActive={setActive} dimensions={dimensions} />}
        </Stack.Screen>
        <Stack.Screen name="HistoryApp" options={{ headerShown: false }}>
          {(props) => <HistoryApp {...props} active={active} setActive={setActive} dimensions={dimensions} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
