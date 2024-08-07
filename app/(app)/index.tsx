import { useSession } from '@/ctx';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

const HomeScreen = () => {
  const { signOut } = useSession();
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <ThemedText onPress={signOut}>Sign Out</ThemedText>
    </ThemedView>
  );
};

export default HomeScreen;
