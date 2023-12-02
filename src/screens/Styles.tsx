import { StyleSheet } from 'react-native';

export const generateStyles = (width: number, height: number) => {
  const isLandscape = width > height;

  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#161A20',
    },

    displayContainer: {
      flex: 3,
      justifyContent: 'flex-end',
    },

    semiDisplayContainer: {
      flex: 1,
      backgroundColor: '#20252E',
      justifyContent: 'center',
    },

    buttonContainer: {
      flex: 6,
      marginBottom: '5%',
    },

    value: {
      color: '#fff',
      fontSize: isLandscape ? 30 : 94,
      textAlign: 'right',
      marginRight: 10,
    },

    subContent: {
      textAlign: 'right',
      color: '#CBE1FF',
      fontSize: isLandscape ? 10 : 28,
      fontWeight: '300',
      marginRight: 10,
    },
  });
};
