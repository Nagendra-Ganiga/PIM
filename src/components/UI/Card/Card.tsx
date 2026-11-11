import React from 'react';
import { View, ViewProps } from 'react-native';

type CardProps = ViewProps & {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children }: CardProps) {
  return <View className={CardStyle.card}>{children}</View>;
}

export const CardStyle = {
  card: 'w-full flex-1 bg-white border border-lightGray rounded-[10px] overflow-hidden ',
};
