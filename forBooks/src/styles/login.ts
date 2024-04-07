import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  bgWrap: {
    backgroundColor: '#1C161E',
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },

  goBackWrap: {
    position: 'absolute',
    top: 60,
    left: 20,
  },

  goBackBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  goBackText: {
    color: '#EFE3C8',
    fontSize: 24,
  },

  textGroup: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },

  salut: {
    color: '#F3E3BF',
    fontSize: 36,
    fontWeight: '600',
    marginBottom: 10,
  },

  sub: {
    color: 'white',
    fontSize: 20,
  },

  form: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 20,
  },

  button: {
    backgroundColor: '#F3E3BF',
    marginTop: 12,
    paddingVertical: 18,
    borderRadius: 12,
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
    color: '#704341',
    fontSize: 20,
    textAlign: 'center',
  },
});
