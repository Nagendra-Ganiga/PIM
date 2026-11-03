// @ts-ignore: Allow side-effect import for styles without type declarations
import './global.css';
import React from 'react';
import AppContainer from './src/components/UI/AppContainer/AppContainer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigation from './src/routes/navigation/StackNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppContainer barStyle="dark-content">
        <StackNavigation />
      </AppContainer>
    </SafeAreaProvider>
  );
};

export default App;
