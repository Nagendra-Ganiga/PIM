import React from 'react';
import { View, Text } from 'react-native';

import { CardStyle } from '../../../styles/GlobalStyles';

import SectionHeader, {
  type SectionHeaderProps,
} from '../SectionHeader/SectionHeader';
import Button, { ButtonProps } from '../../UI/Button/Button';

export type DeviceReadItem = {
  id: number;
  label: string;
  value: string;
};

type DeviceReadCardProps = {
  sectionHeader?: SectionHeaderProps;
  buttonProps?: ButtonProps;
  details: DeviceReadItem[];
  footerTitle?: string;
};

export default function DeviceReadCard({
  sectionHeader,
  buttonProps,
  details,
}: DeviceReadCardProps) {
  return (
    <View className={CardStyle.Card}>
      {/* Header */}
      {sectionHeader && <SectionHeader {...sectionHeader} />}

      {/* Device Details */}
      <View className={DeviceReadStyles.List}>
        {details.map(item => (
          <View key={item.id} className={DeviceReadStyles.Row}>
            <Text className={DeviceReadStyles.Label}>{item.label}</Text>

            <Text className={DeviceReadStyles.Value}>{item.value}</Text>
          </View>
        ))}
      </View>

      {/* Footer Action */}

      {buttonProps && (
        <View className={DeviceReadStyles.Footer}>
          <Button {...buttonProps} />
        </View>
      )}
    </View>
  );
}

export const DeviceReadStyles = {
  List: 'flex-col',

  Row: 'flex-row items-center justify-between px-[20px] py-[20px] border-b border-lightGray',

  Label: 'text12RMediumGray',

  Value: 'text12BDarkNavyBlue',

  Footer: 'flex-row items-center justify-center gap-[5px] py-[20px]',

  FooterText: 'text14BBrandBlue',
};
