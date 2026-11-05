import React from 'react';
import { View } from 'react-native';

type ProgressBarProps = {
  progress: number;
  height?: number;
  backgroundColor?: string;
  progressColor?: string;
};

export default function ProgressBar({
  progress,
  height = 8,
  backgroundColor,
  progressColor,
}: ProgressBarProps) {
  const percentage = Math.min(Math.max(progress, 0), 100);

  return (
    <View
      className={ProgressBarStyle.ProgressTrack}
      style={{
        height,
        backgroundColor,
      }}
    >
      <View
        className={ProgressBarStyle.ProgressTrack}
        style={{
          width: `${percentage}%`,
          backgroundColor: progressColor,
        }}
      />
    </View>
  );
}

export const ProgressBarStyle = {
  ProgressTrack: 'h-[8px] bg-lightGray rounded-full  overflow-hidden',
  ProgressFill: 'h-full bg-brandBlue rounded-full',
};
