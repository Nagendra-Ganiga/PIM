import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as ROUTES from './Routes';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.pageNameHome}
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
    >
      <Stack.Screen
        name={ROUTES.pageNameHome}
        component={ROUTES.pageHome}
        options={{ title: 'Welcome' }}
      />

      <Stack.Screen
        name={ROUTES.pageNameSchedules}
        component={ROUTES.pageSchedules}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
