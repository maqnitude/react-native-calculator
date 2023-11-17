import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './TabStyles';

interface TabProps {
  text: string;
  onPress: () => void;
  type?: string;
  color: boolean;
}

const Tab: React.FC<TabProps> = ({ text, onPress, type, color }) => {
  const tabStyles = [styles.tab];
  switch (type) {
    case 'last':
      tabStyles.push(styles.lastTab);
      break;
    case 'first':
      tabStyles.push(styles.firstTab);
      break;
  }
  if (!color) {
    tabStyles.push(styles.tabOff);
  }
  return (
    <TouchableOpacity style={tabStyles} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Tab;
