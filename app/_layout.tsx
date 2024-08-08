import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { PersistGate } from 'redux-persist/integration/react';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import { persistor, store } from '@/store/store';
import SessionProvider from '@/ctx';
import commonStyles from '@/styles/common';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <GestureHandlerRootView style={commonStyles.flexOne}>
            <SessionProvider>
              <Slot />
            </SessionProvider>
          </GestureHandlerRootView>
        </PersistGate>
      </ReduxProvider>
    </ThemeProvider>
  );
}
