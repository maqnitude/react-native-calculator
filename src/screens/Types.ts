import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';

export type RootStackParamList = {
  CalculatorApp: undefined;
  ConverterApp: undefined;
};

export type CalculatorAppProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CalculatorApp'>;
  screen: boolean;
  setScreen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ConverterAppProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ConverterApp'>;
  screen: boolean;
  setScreen: React.Dispatch<React.SetStateAction<boolean>>;
};
