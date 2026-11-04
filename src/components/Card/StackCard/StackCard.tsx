import React from 'react';
import { View, Text } from 'react-native';
import Colors from '../../../styles/Colors';

type StatCardProps = {
  title?: string;
  value?: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  iconBgColor?: string;
};

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  iconBgColor = Colors.brandSkyBlue,
}: StatCardProps) {
  return (
    <View className={StackCardStyle.Card}>
      <View
        className={StackCardStyle.iconContainer}
        style={{ backgroundColor: iconBgColor }}
      >
        {icon}
      </View>

      <View className={StackCardStyle.TextContainer}>
        <Text className={StackCardStyle.TextSmall}>{title}</Text>
        <Text className={StackCardStyle.TextBig}>{value}</Text>
        <Text className={StackCardStyle.TextSmall}>{subtitle}</Text>
      </View>
    </View>
  );
}

export const StackCardStyle = {
  Card: 'flex-1 flex-row items-start gap-[10px] bg-white p-[15px] rounded-[10px] border border-lightGray shadow-md',
  iconContainer: 'p-[10px] rounded-[8px]',
  TextContainer: 'flex-1 flex-col gap-[5px] self-start',
  TextSmall: 'text10RMediumGray',
  TextBig: 'text24BDarkNavyBlue',
};
