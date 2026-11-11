import React from 'react';
import { View, Text } from 'react-native';
import Card from '../../UI/Card/Card';

export type StatsItem = {
  id: number;
  title?: string;
  value?: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  iconBgColor?: string;
};

type StackCardProps = {
  stats: StatsItem[];
};

export default function StackCardItem({ stats }: StackCardProps) {
  return (
    <View className={StackCardStyle.row}>
      {stats.map(item => (
        <Card key={item.id}>
          <View className={StackCardStyle.container}>
            <View
              className={StackCardStyle.iconContainer}
              style={{ backgroundColor: item.iconBgColor }}
            >
              {item.icon}
            </View>

            <View className={StackCardStyle.textContainer}>
              <Text className={StackCardStyle.textSmall}>{item.title}</Text>
              <Text className={StackCardStyle.textBig}>{item.value}</Text>
              <Text className={StackCardStyle.textSmall}>{item.subtitle}</Text>
            </View>
          </View>
        </Card>
      ))}
    </View>
  );
}

export const StackCardStyle = {
  row: 'flex-1 flex-row gap-[20px]',
  container: 'flex-row gap-[10px] items-center p-[10px]',
  iconContainer: 'p-[10px] rounded-[8px] self-start',
  textContainer: 'flex-1 flex-col gap-[5px] self-start',
  textSmall: 'text10RMediumGray',
  textBig: 'text24BDarkNavyBlue',
};
