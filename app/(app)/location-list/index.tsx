import { useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

import { ThemedView } from '@/components/ThemedView';
import GreetingHeader from '@/components/GreetingHeader';
import ListTile from '@/components/ListTile';
import { Colors } from '@/constants/Colors';
import { useAppSelector } from '@/hooks/useStore';
import { selectFilteredLocations } from '@/store/locations/slice';
import commonStyles from '@/styles/common';
import styles from './styles';

const LocationListScreen = () => {
  const [filterByName, setFilterByName] = useState('');
  const colorScheme = useColorScheme();
  const locations = useAppSelector((state) =>
    selectFilteredLocations(state, filterByName),
  );

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
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Filter by name"
            style={[
              styles.input,
              { color: Colors[colorScheme ?? 'light'].text },
            ]}
            onChangeText={setFilterByName}
            value={filterByName}
          />
          {filterByName.trim() ? (
            <Pressable onPress={() => setFilterByName('')}>
              <AntDesign
                name="closecircleo"
                size={24}
                color={Colors[colorScheme ?? 'light'].text}
              />
            </Pressable>
          ) : null}
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={100}
          style={styles.keyboardAvoidingContainer}
        >
          <FlatList
            data={locations}
            style={styles.list}
            contentContainerStyle={styles.listContentContainer}
            renderItem={({ item }) => <ListTile location={item} />}
            keyExtractor={(item) => item.id}
          />
        </KeyboardAvoidingView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default LocationListScreen;
