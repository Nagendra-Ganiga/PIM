import React from 'react';
import { View, Text } from 'react-native';

type StatusType =
  | 'active'
  | 'review'
  | 'upcoming'
  | 'success'
  | 'warning'
  | 'danger'
  | 'offline'
  | 'info';

type StatusBadgeProps = {
  status: StatusType;
  title?: string;
};

const StatusStyles: Record<StatusType, { background: string; text: string }> = {
  active: {
    background: 'bg-brandSkyBlue',
    text: 'text12BBrandSkyBlueBase',
  },
  review: {
    background: 'bg-brandYellow',
    text: 'text12BBrandYellowBase',
  },
  upcoming: {
    background: 'bg-lightGray',
    text: 'text12BMediumGray',
  },
  success: {
    background: 'bg-brandTeal',
    text: 'text12BBrandTealBase',
  },
  warning: {
    background: 'bg-brandYellow',
    text: 'text12BBrandYellowBase',
  },
  danger: {
    background: 'bg-brandPink',
    text: 'text12BBrandPinkBase',
  },
  offline: {
    background: 'bg-brandPurple',
    text: 'text12BBrandPurpleBase',
  },
  info: {
    background: 'bg-brandSkyBlue',
    text: 'text12BBrandSkyBlueBase',
  },
};

export default function StatusBadge({ status, title }: StatusBadgeProps) {
  const style = StatusStyles[status];

  const label = title ?? status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <View
      className={`${style.background} rounded-full px-[12px] py-[6px] self-start items-center justify-center`}
    >
      <Text className={`${style.text} `}>{label}</Text>
    </View>
  );
}
