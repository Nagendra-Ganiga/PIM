import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type SafeAreaWrapperProps = {
  children: React.ReactNode;
  edges?: Array<'top' | 'right' | 'bottom' | 'left'>;
  className?: string;
};

export default function SafeAreaWrapper({
  children,
  edges = ['top', 'right', 'bottom', 'left'],
  className,
}: SafeAreaWrapperProps) {
  return (
    <SafeAreaView
      className={`flex-1 px-[20px] bg-white ${className}`}
      edges={edges}
    >
      {children}
    </SafeAreaView>
  );
}
