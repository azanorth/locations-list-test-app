import { Redirect, Stack } from 'expo-router';

import { useSession } from '@/ctx';

const AppLayout = () => {
  const { session } = useSession();

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default AppLayout;
