import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';

export default function IndexPage() {
  if (storybookEnabled) {
    const StorybookUI = require('../.storybook').default;

    return (
      <View style={{ flex: 1 }}>
        <StorybookUI />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-grey-200">
      <Text className="text-5xl font-semibold">Hello world!</Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
