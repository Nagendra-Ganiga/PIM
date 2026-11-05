import React from 'react';
import { View, Text } from 'react-native';

import StatusBadge, { type StatusType } from '../../UI/StatusBadge/StatusBadge';

import Button, { type ButtonProps } from '../../UI/Button/Button';

export type SectionHeaderProps = {
  Eyebrow?: string;
  Title?: string;
  Status?: string;
  StatusType?: StatusType;
  ShowViewAll?: boolean;
  viewAllButtonProps?: ButtonProps;
};

export default function SectionHeader({
  Eyebrow,
  Title,
  Status,
  StatusType,
  ShowViewAll,
  viewAllButtonProps,
}: SectionHeaderProps) {
  return (
    <View className={SectionHeaderStyles.Header}>
      <View className={SectionHeaderStyles.HeaderRow}>
        {Eyebrow && (
          <Text className={SectionHeaderStyles.Eyebrow}>{Eyebrow}</Text>
        )}

        <Text className={SectionHeaderStyles.Title}>{Title}</Text>
      </View>

      {StatusType && <StatusBadge statusType={StatusType} title={Status} />}

      {ShowViewAll && <Button {...viewAllButtonProps} />}
    </View>
  );
}

export const SectionHeaderStyles = {
  Header:
    'flex-row items-center justify-between py-[20px] px-[20px] border-b border-lightGray',
  HeaderRow: 'flex-1 gap-[5px]',
  Eyebrow: 'text12BBrandBlue',
  Title: 'text18BDarkNavyBlue',
};
