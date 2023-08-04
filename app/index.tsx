import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LocaleToggle } from '@/components/ui/LocaleToggle/LocaleToggle';

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';

export default function IndexPage() {
  const { t } = useTranslation();

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
      <Text className="text-5xl font-semibold">{t('pages.home.title', { name: 'Sylvester' })}</Text>

      <LocaleToggle />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
