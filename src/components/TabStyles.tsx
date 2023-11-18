import { StyleSheet, Dimensions } from 'react-native';

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

export default styles;
