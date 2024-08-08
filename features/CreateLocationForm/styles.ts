import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    padding: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    width: '100%',
    justifyContent: 'flex-start',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.light.primary,
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});

export default styles;
