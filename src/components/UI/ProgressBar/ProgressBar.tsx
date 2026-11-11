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
      className={ProgressBarStyle.progressTrack}
      style={{
        height,
        backgroundColor,
      }}
    >
      <View
        className={ProgressBarStyle.progressTrack}
        style={{
          width: `${percentage}%`,
          backgroundColor: progressColor,
        }}
      />
    </View>
  );
}

export const ProgressBarStyle = {
  progressTrack: 'h-[8px] bg-lightGray rounded-full  overflow-hidden',
  progressFill: 'h-full bg-brandBlue rounded-full',
};
