import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../views/private/Home/HomeScreen';
import Schedules from '../../views/private/Schedules/SchedulesScreen';

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
    animation: 'none',
  },

  screens: {
    Home: {
      screen: Home,
      options: { title: 'Welcome' },
    },
    Schedules: {
      screen: Schedules,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function StackNavigation() {
  return <Navigation />;
}
