import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tabs.Screen
        name="cats"
        options={{
          title: 'Cats',
          tabBarIcon: () => <Text>🐱</Text>,
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
      />

      <Tabs.Screen
        name="dogs"
        options={{
          title: 'Dogs',
          tabBarIcon: () => <Text>🐶</Text>,
          headerStyle: {
            backgroundColor: 'red',
          },
        }}
      />
    </Tabs>
  );
}
