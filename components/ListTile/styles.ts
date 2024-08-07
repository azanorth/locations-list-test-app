import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 45,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  tileName: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  tileActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 15,
  },
});

export default styles;
