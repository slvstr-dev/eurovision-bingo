import { Tabs as TabsComponent } from 'expo-router/tabs';

export const Tabs = () => {
  return (
    <TabsComponent
      screenOptions={{
        headerStyle: {
          backgroundColor: 'rgb(245 158 11)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <TabsComponent.Screen name="index" />

      <TabsComponent.Screen name="/settings" />
    </TabsComponent>
  );
};
