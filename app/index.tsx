import { Redirect } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

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

  return <Redirect href="/cats" />;

  // return (
  // <>
  //   <Stack.Screen
  //     options={{
  //       title: 'Welcome',
  //     }}
  //   />

  //   <View style={styles.container}>
  //     <Text style={styles.title}>Cat X Dog</Text>

  //     <Text style={styles.subtitle}>Welcome</Text>
  //   </View>
  // </>

  // <SafeAreaView className="flex-1 items-center justify-center bg-grey-200">
  //   <Text className="text-5xl font-semibold">
  //     {t('pages.home.title', { name: 'Sylvester' })}
  //   </Text>

  //   <LocaleToggle />
  // </SafeAreaView>
  // );
}
