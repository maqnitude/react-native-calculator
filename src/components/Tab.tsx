import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  tab: {
    flex: 1,
    backgroundColor: '#0060E5',
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight / 20,
  },
  firstTab: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 4,
  },
  lastTab: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 0,
  },
  tabOff: {
    backgroundColor: '#2D3440',
  },
});

interface TabProps {
  text: string;
  onPress: () => void;
  type?: string;
  color: boolean;
}

const Tab: React.FC<TabProps> = ({ text, onPress, type, color }) => {
  const tabStyles = [styles.tab];
  switch(type) {
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
