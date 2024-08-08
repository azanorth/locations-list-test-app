import { Pressable, useColorScheme } from 'react-native';
import { router, Stack } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';

const LocationDetailsLayout = () => {
  const colorScheme = useColorScheme();
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: 'transparent',
        headerShadowVisible: false,
        headerLeft: () => (
          <ThemedText type="subtitle">Location Details</ThemedText>
        ),
        headerRight: () => (
          <Pressable onPress={router.back}>
            <AntDesign
              name="close"
              size={24}
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

export default LocationDetailsLayout;
