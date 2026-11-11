import React from 'react';
import { View } from 'react-native';

import SectionHeader, {
  type SectionHeaderProps,
} from '../../UI/Card/CardHeader/CardHeader';

import Button, { type ButtonProps } from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';

export type QuickActionItem = {
  id: number;
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
};

export type QuickActionsCardProps = {
  sectionHeaderProps?: SectionHeaderProps;
  buttonProps?: ButtonProps;
  quickActionsData: QuickActionItem[];
};

export default function QuickActionsCardItem({
  sectionHeaderProps,
  buttonProps,
  quickActionsData,
}: QuickActionsCardProps) {
  return (
    <Card>
      {sectionHeaderProps && <SectionHeader {...sectionHeaderProps} />}

      <View className="flex-row flex-wrap gap-[10px] p-[10px] justify-between">
        {quickActionsData.map(item => (
          <View key={item.id} className="w-[48.5%]">
            <Button
              {...buttonProps}
              title={item.title}
              icon={item.icon}
              onPress={item.onPress}
              style={[buttonProps?.style, { width: '100%', minHeight: 100 }]}
            />
          </View>
        ))}
      </View>
    </Card>
  );
}
