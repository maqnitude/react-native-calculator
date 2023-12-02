import { StyleSheet } from 'react-native';

export const generateStyles = (width: number, height: number) => {
  const isLandscape = width > height;

  const tabHeight = isLandscape ? height / 14 : height / 20;

  return StyleSheet.create({
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
      height: tabHeight,
    },
    leftTab: {
      borderTopLeftRadius: 4,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 4,
    },
    midTab: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    },
    rightTab: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
      borderBottomLeftRadius: 0,
    },
    tabOff: {
      backgroundColor: '#2D3440',
    },
  });
};
