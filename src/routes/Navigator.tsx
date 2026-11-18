import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as ROUTES from './Routes';
import { RootStackParamList } from './types';
import Login from '../views/auth/Login/Login';

type NavigatorProps = {
  isShowLogin: boolean;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = ({ isShowLogin }: NavigatorProps) => {
  return (
    <Stack.Navigator
      // initialRouteName={ROUTES.pageNameHome}
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
      key={isShowLogin ? 'auth' : 'private'}
    >
      {isShowLogin ? (
        <Stack.Screen name="Login" component={Login} />
      ) : (
        <>
          <Stack.Screen
            name={ROUTES.pageNameHome}
            component={ROUTES.pageHome}
            options={{ title: 'Welcome' }}
          />

          <Stack.Screen
            name={ROUTES.pageNameSchedules}
            component={ROUTES.pageSchedules}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Navigator;
