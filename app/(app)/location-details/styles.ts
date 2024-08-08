import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'flex-start',
  },
  row: {
    height: 70,
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    flex: 1,
    fontSize: 16,
  },
  valueBold: {
    fontWeight: 'bold',
  },
});

export default styles;
