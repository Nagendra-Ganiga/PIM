import React from 'react';
import { View, Text, type StyleProp, type ViewStyle } from 'react-native';

export type StatusType =
  | 'active'
  | 'review'
  | 'upcoming'
  | 'success'
  | 'warning'
  | 'danger'
  | 'offline'
  | 'info';

type StatusBadgeProps = {
  statusType: StatusType;
  title?: string;
  variant?: 'badge' | 'dot';
  style?: StyleProp<ViewStyle>;
};

const StatusStyles: Record<
  StatusType,
  { background: string; text: string; dot: string }
> = {
  active: {
    background: 'bg-brandNavyBase',
    text: 'text12BBrandNavy',
    dot: 'bg-brandNavyBase',
  },
  review: {
    background: 'bg-brandYellow',
    text: 'text12BBrandYellowBase',
    dot: 'bg-brandYellowBase',
  },
  upcoming: {
    background: 'bg-lightGray',
    text: 'text12BMediumGray',
    dot: 'bg-mediumGrayBase',
  },
  success: {
    background: 'bg-brandTeal',
    text: 'text12BBrandTealBase',
    dot: 'bg-brandTealBase',
  },
  warning: {
    background: 'bg-brandYellow',
    text: 'text12BBrandYellowBase',
    dot: 'bg-brandYellowBase',
  },
  danger: {
    background: 'bg-brandPink',
    text: 'text12BBrandPinkBase',
    dot: 'bg-brandPinkBase',
  },
  offline: {
    background: 'bg-brandPurple',
    text: 'text12BBrandPurpleBase',
    dot: 'bg-brandPurpleBase',
  },
  info: {
    background: 'bg-brandSkyBlue',
    text: 'text12BBrandSkyBlueBase',
    dot: 'bg-brandSkyBlueBase',
  },
};

export default function StatusBadge({
  statusType,
  title,
  variant = 'badge',
  style: customStyle,
}: StatusBadgeProps) {
  const style = StatusStyles[statusType];

  const label =
    title ?? statusType.charAt(0).toUpperCase() + statusType.slice(1);

  if (variant === 'dot') {
    return (
      <View className="flex-row items-center gap-[6px]" style={customStyle}>
        <View className={`w-[8px] h-[8px] rounded-full ${style.dot}`} />
        <Text className={style.text}>{label}</Text>
      </View>
    );
  }

  return (
    <View
      className={`${style.background} rounded-full px-[12px] py-[6px] items-center justify-center`}
      style={customStyle}
    >
      <Text className={style.text}>{label}</Text>
    </View>
  );
}
