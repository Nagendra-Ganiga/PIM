// @ts-ignore: Allow side-effect import for styles without type declarations
import './global.css';
import React from 'react';
import Home from './src/views/private/Home/Home';
import AppContainer from './src/components/UI/AppContainer/AppContainer';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppContainer barStyle="dark-content">
        <Home />
      </AppContainer>
    </SafeAreaProvider>
  );
};

export default App;
