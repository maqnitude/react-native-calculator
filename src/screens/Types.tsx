import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';

export type RootStackParamList = {
  CalculatorApp: undefined;
  Alternative: undefined;
  ConverterApp: undefined;
  HistoryApp: undefined;
};

export type CalculatorAppProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CalculatorApp'>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export type AlternativeAppProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Alternative'>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ConverterAppProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ConverterApp'>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export type HistoryAppProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HistoryApp'>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
