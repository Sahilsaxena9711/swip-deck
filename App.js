import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native';
import { Tabs } from './src/components';
import { ROUTES } from './src/constants';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={props => <Tabs {...props} ROUTES={ROUTES} />}
        >
          {ROUTES.map((route, routeKey) =>
            <Tab.Screen key={routeKey} name={route.name} component={route.component} />
          )}
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}