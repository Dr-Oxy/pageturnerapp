import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  label: {
    textTransform: 'capitalize',
    color: 'white',
    fontSize: 20,
    marginBottom: 8,
    fontFamily: 'EB Garamond',
  },

  normalInput: {
    color: 'white',
    width: '100%',
    backgroundColor: 'rgba(232, 152, 34, 0.1)',
    fontSize: 18,
    fontFamily: 'Catamaran',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F3E3BF',
  },

  disabledInput: {
    borderColor: 'transparent',
    backgroundColor: '#ccc',
    color: 'gray',
  },

  errorInput: {
    borderColor: '#EB6B6B',
  },

  errorText: {
    color: '#E30303',
    fontSize: 14,
    padding: 2,
    marginTop: 8,
    fontFamily: 'Catamaran',
  },
});
