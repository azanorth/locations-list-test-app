import { Pressable } from 'react-native';
import { router, Stack } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';

const CreateLocationLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: 'transparent',
        headerShadowVisible: false,
        presentation: 'modal',
        animation: 'slide_from_bottom',
        headerLeft: () => (
          <ThemedText type="subtitle">Create the new location</ThemedText>
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

export default CreateLocationLayout;
