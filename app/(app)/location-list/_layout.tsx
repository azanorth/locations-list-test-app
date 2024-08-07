import { Pressable } from 'react-native';
import { Stack } from 'expo-router';
import { Feather } from '@expo/vector-icons';

import { useSession } from '@/ctx';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';

const LocationListLayout = () => {
  const { signOut } = useSession();
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: 'transparent',
        headerShadowVisible: false,
        headerLeft: () => (
          <ThemedText type="subtitle">Locations List</ThemedText>
        ),
        headerRight: () => (
          <Pressable onPress={signOut}>
            <Feather
              size={24}
              name="log-out"
              color={Colors[colorScheme ?? 'light'].text}
            />
          </Pressable>
        ),
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
      }}
    />
  );
};

export default LocationListLayout;
