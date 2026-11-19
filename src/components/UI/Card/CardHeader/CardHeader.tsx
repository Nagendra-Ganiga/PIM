import React from 'react';
import { View, Text } from 'react-native';

import StatusBadge, { type StatusType } from '../../StatusBadge/StatusBadge';

import Button, { type ButtonProps } from '../../Button/Button';

type TextProps = {
  eyebrow?: string;
  eyebrowSize?: number;
  title?: string;
  titleSize?: number;
};
type IconProps = {
  icon?: React.ReactNode;
  iconBgColor?: string;
};
type StatusProps = {
  status?: string;
  statusType?: StatusType;
};
type ViewButtonProps = {
  showViewAll?: boolean;
  viewAllButtonProps?: ButtonProps;
};
export type SectionHeaderProps = {
  textProps?: TextProps;
  iconProps?: IconProps;
  statusProps?: StatusProps;
  viewButtonProps?: ViewButtonProps;
};

export default function SectionHeader({
  textProps,
  iconProps,
  statusProps,
  viewButtonProps,
}: SectionHeaderProps) {
  const { eyebrow, eyebrowSize = 12, title, titleSize = 18 } = textProps ?? {};

  const { icon, iconBgColor } = iconProps ?? {};

  const { status, statusType } = statusProps ?? {};

  const { showViewAll, viewAllButtonProps } = viewButtonProps ?? {};

  return (
    <View className={SectionHeaderStyles.header}>
      <View className="flex-1 flex-row gap-[10px]">
        {icon && (
          <View
            className={SectionHeaderStyles.iconContainer}
            style={{ backgroundColor: iconBgColor }}
          >
            {icon}
          </View>
        )}

        <View className={SectionHeaderStyles.headerRow}>
          {eyebrow && (
            <Text
              className={SectionHeaderStyles.eyebrow}
              style={{ fontSize: eyebrowSize }}
            >
              {eyebrow}
            </Text>
          )}

          <Text
            className={SectionHeaderStyles.title}
            style={{ fontSize: titleSize }}
          >
            {title}
          </Text>
        </View>
      </View>
      {statusType && <StatusBadge statusType={statusType} title={status} />}
      {showViewAll && <Button {...viewAllButtonProps} />}
    </View>
  );
}

export const SectionHeaderStyles = {
  header:
    'flex-row items-center justify-between py-[20px] px-[20px] border-b border-gray',
  headerRow: 'flex-1 gap-[5px]',
  eyebrow: 'text12BBrandBlue',
  title: 'text18BDarkNavyBlue',
  iconContainer: 'p-[10px] rounded-[8px] self-start',
};
