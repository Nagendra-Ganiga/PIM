import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Navigator from '../routes/Navigator';

const PrimaryContainer = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default PrimaryContainer;
