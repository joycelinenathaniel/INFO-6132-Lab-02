import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#E3F0FA',
    marginBottom: 16,
    marginHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  description: {
    fontWeight: '700',
    fontSize: Platform.OS === 'ios' ? 16 : 20,
    marginBottom: 4,
    textAlign: 'start',
    flex: 1,
  },
  completed: {
    fontWeight: '700',
    fontSize: 12,
  },
  switch: {
    alignItems: 'center',
    paddingHorizontal: 8,
    width: 90,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
