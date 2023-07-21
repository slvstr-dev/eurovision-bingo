import { Stack } from 'expo-router';
import { IntlProvider } from 'use-intl';

const messages = {
  app: {
    hello: 'Hello {username}!',
  },
};

export default function Layout() {
  return (
    <IntlProvider messages={messages} locale="en">
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
