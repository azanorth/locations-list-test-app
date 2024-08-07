import { useCallback } from 'react';
import { router } from 'expo-router';

import { useSession } from '@/ctx';
import { ThemedView } from '@/components/ThemedView';
import LoginForm from '@/features/LoginForm';
import commonStyles from '@/styles/common';

const SignInScreen = () => {
  const { signIn } = useSession();

  const handleLogin = useCallback(() => {
    signIn();
    router.replace('/');
  }, [signIn]);

  return (
    <ThemedView style={commonStyles.flexOne}>
      <LoginForm onSubmit={handleLogin} />
    </ThemedView>
  );
};

export default SignInScreen;
