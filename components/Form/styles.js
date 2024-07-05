import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10,
    height: 40,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
    borderRadius: 4,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#1A5276',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 8,
  },
  errorMessage: {
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#E24035',
    },
    item: {
      fontSize: 14,
      color: '#E24035',
    },
  },
});
