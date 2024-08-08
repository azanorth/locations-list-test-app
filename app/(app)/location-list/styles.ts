import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  addButton: {
    backgroundColor: Colors.light.primary,
    height: 40,
    justifyContent: 'center',
    padding: 5,
    borderRadius: 8,
  },
  list: {
    width: '100%',
    flex: 1,
    padding: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  keyboardAvoidingContainer: {
    flex: 1,
    width: '100%',
  },
  listContentContainer: {
    flexGrow: 1,
    paddingBottom: 10,
  },
});

export default styles;
