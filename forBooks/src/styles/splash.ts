import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  bgWrap: {
    backgroundColor: '#1C161E',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 300,
    height: 200,
  },

  lead: {
    fontSize: 32,
    color: '#F3E3BF',
    fontWeight: '600',
    marginBottom: 8,
  },

  sub: {
    fontSize: 20,
    fontFamily: 'Catamaran',
    color: 'rgba(243, 227, 191, 0.7)',
  },

  modal: {
    flex: 1,
    position: 'relative',
  },

  modalBody: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: 360,
    backgroundColor: '#482B29',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  btnGroup: {
    marginTop: 20,
  },

  button: {
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(232, 152, 34, 0.3)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Catamaran',
  },

  opt1: {
    backgroundColor: '#F3E3BF',
    color: '#996A22',
  },

  opt2: {
    backgroundColor: '#482B29',
    borderColor: '#F3E3BF',
    marginTop: 12,
  },
  opt2Text: {
    color: '#F3E3BF',
  },
});
