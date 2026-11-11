import React from 'react';
import { View, Text } from 'react-native';

import StatusBadge, { type StatusType } from '../../StatusBadge/StatusBadge';

import Button, { type ButtonProps } from '../../Button/Button';

export type SectionHeaderProps = {
  eyebrow?: string;
  title?: string;
  status?: string;
  statusType?: StatusType;
  showViewAll?: boolean;
  viewAllButtonProps?: ButtonProps;
};

export default function SectionHeader({
  eyebrow,
  title,
  status,
  statusType,
  showViewAll,
  viewAllButtonProps,
}: SectionHeaderProps) {
  return (
    <View className={SectionHeaderStyles.header}>
      <View className={SectionHeaderStyles.headerRow}>
        {eyebrow && (
          <Text className={SectionHeaderStyles.eyebrow}>{eyebrow}</Text>
        )}

        <Text className={SectionHeaderStyles.title}>{title}</Text>
      </View>

      {statusType && <StatusBadge statusType={statusType} title={status} />}

      {showViewAll && <Button {...viewAllButtonProps} />}
    </View>
  );
}

export const SectionHeaderStyles = {
  header:
    'flex-row items-center justify-between py-[20px] px-[20px] border-b border-lightGray',
  headerRow: 'flex-1 gap-[5px]',
  eyebrow: 'text12BBrandBlue',
  title: 'text18BDarkNavyBlue',
};
