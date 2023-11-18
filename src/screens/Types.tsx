import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';

export type RootStackParamList = {
  CalculatorApp: undefined;
  AlternativeApp: undefined;
  ConverterApp: undefined;
};

export type CalculatorAppProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CalculatorApp'>;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

export type AlternativeAppProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AlternativeApp'>;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export type ConverterAppProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ConverterApp'>;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};
