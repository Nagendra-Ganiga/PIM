import { StatusBar } from 'react-native';
import React from 'react';

type AppContainerProps = {
  children: React.ReactNode;
  barStyle?: 'default' | 'light-content' | 'dark-content';
};

export default function AppContainer({
  children,
  barStyle,
}: AppContainerProps) {
  return (
    <>
      <StatusBar barStyle={barStyle} />
      {children}
    </>
  );
}
