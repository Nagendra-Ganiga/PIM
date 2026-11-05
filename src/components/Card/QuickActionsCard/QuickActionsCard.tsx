import React from 'react';
import { View } from 'react-native';
import SectionHeader, {
  type SectionHeaderProps,
} from '../SectionHeader/SectionHeader';
import { CardStyle } from '../../../styles/GlobalStyles';
import Button, { type ButtonProps } from '../../UI/Button/Button';

export type QuickActionItem = {
  id: number;
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
};

type QuickActionsCardProps = {
  sectionHeaderProps?: SectionHeaderProps;
  buttonProps?: ButtonProps;
  actions: QuickActionItem[];
};

export default function QuickActionsCard({
  sectionHeaderProps,
  buttonProps,
  actions,
}: QuickActionsCardProps) {
  return (
    <View className={CardStyle.Card}>
      <SectionHeader {...sectionHeaderProps} />

      <View className="flex-row flex-wrap gap-[10px] p-[15px] justify-between">
        {actions.map(item => (
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
    </View>
  );
}
