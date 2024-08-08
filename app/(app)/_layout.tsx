import { Redirect, Stack } from 'expo-router';

import { useSession } from '@/ctx';

const AppLayout = () => {
  const { session } = useSession();

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="create-location"
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
        }}
      />
      <Stack.Screen
        name="location-details"
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
        }}
      />
      <Stack.Screen
        name="location-list"
        options={{
          presentation: 'card',
        }}
      />
    </Stack>
  );
};

export default AppLayout;
