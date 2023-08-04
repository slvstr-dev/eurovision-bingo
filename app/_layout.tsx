import { Stack } from 'expo-router';
import { IntlProvider } from 'use-intl';

import translations from '@/languages/en-GB';

export default function Layout() {
  return (
    <IntlProvider messages={translations} locale="en-GB">
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: 'rgb(245 158 11)',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </IntlProvider>
  );
}
