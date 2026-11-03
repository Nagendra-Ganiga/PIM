import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../views/private/Landing/Home';

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },

  screens: {
    Home: {
      screen: Home,
      options: { title: 'Welcome' },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function StackNavigation() {
  return <Navigation />;
}
