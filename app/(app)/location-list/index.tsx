import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedView } from '@/components/ThemedView';
import GreetingHeader from '@/components/GreetingHeader';
import commonStyles from '@/styles/common';
import ListTile from '@/components/ListTile';
import { Colors } from '@/constants/Colors';
import { useAppSelector } from '@/hooks/useStore';
import { selectLocations } from '@/store/locations/slice';

const LocationListScreen = () => {
  const locations = useAppSelector(selectLocations);

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
          data={locations}
          style={styles.list}
          renderItem={({ item }) => <ListTile location={item} />}
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
