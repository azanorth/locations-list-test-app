import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'flex-start',
  },
  title: {
    paddingBottom: 5,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  labelContainer: {
    width: '100%',
    justifyContent: 'flex-start',
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
  text: {
    textAlign: 'left',
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
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});

export default styles;
