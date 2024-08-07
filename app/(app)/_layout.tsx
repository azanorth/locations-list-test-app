import { Redirect, Stack } from 'expo-router';

import { useSession } from '@/ctx';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';

const HomeLayout = () => {
  const { session } = useSession();
  const colorScheme = useColorScheme();

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: 'transparent',
        headerShadowVisible: false,
        headerLeft: () => <ThemedText type="subtitle">Home</ThemedText>,
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
      }}
    />
  );
};

export default HomeLayout;
