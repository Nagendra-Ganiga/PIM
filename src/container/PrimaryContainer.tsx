import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Navigator from '../routes/Navigator';
import { AuthContext } from '../context/AuthContext';

const PrimaryContainer = () => {
  const [isShowLogin, setIsShowLogin] = useState(true);

  return (
    <AuthContext.Provider value={{ setIsShowLogin }}>
      <NavigationContainer>
        <Navigator isShowLogin={isShowLogin} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default PrimaryContainer;
