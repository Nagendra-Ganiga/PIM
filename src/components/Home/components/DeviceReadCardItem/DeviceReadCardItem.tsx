import React from 'react';
import { View, Text } from 'react-native';

import SectionHeader, {
  type SectionHeaderProps,
} from '../../../UI/Card/CardHeader/CardHeader';
import Button, { type ButtonProps } from '../../../UI/Button/Button';
import Card from '../../../UI/Card/Card';

export type DeviceReadItem = {
  id: number;
  label: string;
  value: string;
};

export type DeviceReadCardProps = {
  sectionHeader?: SectionHeaderProps;
  buttonProps?: ButtonProps;
  deviceReadData: DeviceReadItem[];
  footerTitle?: string;
};

export default function DeviceReadCard({
  sectionHeader,
  buttonProps,
  deviceReadData,
}: DeviceReadCardProps) {
  return (
    <Card>
      {/* Header */}
      {sectionHeader && <SectionHeader {...sectionHeader} />}

      {/* Device Details */}
      <View className={DeviceReadStyles.list}>
        {deviceReadData.map(item => (
          <View key={item.id} className={DeviceReadStyles.row}>
            <Text className={DeviceReadStyles.label}>{item.label}</Text>

            <Text className={DeviceReadStyles.value}>{item.value}</Text>
          </View>
        ))}
      </View>

      {/* Footer Action */}

      {buttonProps && (
        <View className={DeviceReadStyles.footer}>
          <Button {...buttonProps} />
        </View>
      )}
    </Card>
  );
}

export const DeviceReadStyles = {
  list: 'flex-col',
  row: 'flex-row items-center justify-between px-[20px] py-[20px] border-b border-lightGray',
  label: 'text12RMediumGray',
  value: 'text12BDarkNavyBlue',
  footer: 'flex-row items-center justify-center gap-[5px] py-[20px]',
  footerText: 'text14BBrandBlue',
};
