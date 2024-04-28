import React from 'react';
import 'react-native-url-polyfill/auto';
import { Stack } from 'expo-router';

function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

export default RootLayout;
