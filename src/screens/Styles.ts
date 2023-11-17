import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    fontSize: 94,
    textAlign: 'right',
  },

  subContent: {
    textAlign: 'right',
    color: '#CBE1FF',
    fontSize: 28,
    fontWeight: '300',
    padding: 20,
  },
});


export default styles;
