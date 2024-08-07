import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedView } from '@/components/ThemedView';
import GreetingHeader from '@/components/GreetingHeader';
import commonStyles from '@/styles/common';
import ListTile from '@/components/ListTile';
import { Colors } from '@/constants/Colors';

const LocationListScreen = () => {
  const data = [
    { id: '1', title: 'Element' },
    { id: '2', title: 'Element' },
    { id: '3', title: 'Element' },
    { id: '4', title: 'Element' },
    { id: '5', title: 'Element' },
    { id: '6', title: 'Element' },
    { id: '7', title: 'Element' },
    { id: '8', title: 'Element' },
    { id: '9', title: 'Element' },
    { id: '10', title: 'Element' },
    { id: '11', title: 'Element' },
    { id: '12', title: 'Element' },
    { id: '13', title: 'Element' },
    { id: '14', title: 'Element' },
    { id: '15', title: 'Element' },
    { id: '16', title: 'Element' },
    { id: '17', title: 'Element' },
  ];

  return (
    <SafeAreaView style={commonStyles.flexOne} edges={['bottom']}>
      <ThemedView style={styles.container}>
        <View style={styles.headerContainer}>
          <GreetingHeader />
          <Pressable
            style={styles.addButton}
            onPress={() => router.push('/create-location')}
          >
            <Text style={{ color: Colors.dark.text }}>Add new location</Text>
          </Pressable>
        </View>
        <FlatList
          data={data}
          style={styles.list}
          renderItem={({ index }) => <ListTile id={index} />}
          keyExtractor={(item) => item.id}
        />
      </ThemedView>
    </SafeAreaView>
  );
};

export default LocationListScreen;

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
});
