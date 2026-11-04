import React from 'react';
import { View, Text } from 'react-native';
import { ScanLine } from 'lucide-react-native';

import Button from '../../UI/Button/Button';
import Colors from '../../../styles/Colors';
import StatusBadge from '../../UI/StatusBadge/StatusBadge';

type AssignmentCardProps = {
  title: string;
  status: string;
  schedule: string;
  location: string;
  stockFreeze: string;
  completed: number;
  total: number;
  onViewDetails?: () => void;
  onContinue?: () => void;
};

export default function AssignmentCard({
  title,
  schedule,
  location,
  stockFreeze,
  completed,
  total,
  onViewDetails,
  onContinue,
}: AssignmentCardProps) {
  const percentage = total > 0 ? (completed / total) * 100 : 0;
  const remaining = total - completed;

  return (
    <View className={AssignmentStyles.Card}>
      {/* Header */}
      <View className={AssignmentStyles.Header}>
        <View className={AssignmentStyles.HeaderRow}>
          <Text className={AssignmentStyles.Heading}>ACTIVE ASSIGNMENT</Text>
          <Text className={AssignmentStyles.Title}>{title}</Text>
        </View>

        <StatusBadge status="success" title="Counting open" />
      </View>

      <View className={AssignmentStyles.MainWrapper}>
        {/* Assignment Details */}
        <View className={AssignmentStyles.Details}>
          <View className={AssignmentStyles.DetailItem}>
            <Text className={AssignmentStyles.Label}>Schedule</Text>
            <Text className={AssignmentStyles.Value}>{schedule}</Text>
          </View>

          <View className={AssignmentStyles.DetailItem}>
            <Text className={AssignmentStyles.Label}>Location</Text>
            <Text className={AssignmentStyles.Value}>{location}</Text>
          </View>

          <View className={AssignmentStyles.DetailItem}>
            <Text className={AssignmentStyles.Label}>Stock freeze</Text>
            <Text className={AssignmentStyles.Value}>{stockFreeze}</Text>
          </View>

          <View className={AssignmentStyles.DetailItem}>
            <Text className={AssignmentStyles.Label}>Progress</Text>
            <Text className={AssignmentStyles.Value}>
              {completed.toLocaleString()} / {total.toLocaleString()}
            </Text>
          </View>
        </View>

        {/* Progress Bar */}
        <View className={AssignmentStyles.ProgressTrack}>
          <View
            className={AssignmentStyles.ProgressFill}
            style={{ width: `${percentage}%` }}
          />
        </View>

        {/* Footer */}
        <View className={AssignmentStyles.Footer}>
          <Text className={AssignmentStyles.FooterText}>
            {remaining.toLocaleString()} materials remaining · 46 local records
            pending sync
          </Text>

          <View className={AssignmentStyles.Actions}>
            <Button
              title="View details"
              variant="outlined"
              onPress={onViewDetails}
            />

            <Button
              title="Continue counting"
              variant="filled"
              buttonType="iconText"
              icon={<ScanLine size={20} color={Colors.white} />}
              onPress={onContinue}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export const AssignmentStyles = {
  Card: 'bg-white border border-lightGray rounded-[10px] overflow-hidden',
  HeaderRow: 'flex-1 gap-[5px]',
  Header:
    'flex-row items-center justify-between py-[20px] px-[20px] border-b border-lightGray',

  Heading: 'text12BBrandBlue',

  Title: 'text18BDarkNavyBlue',

  StatusBadge: 'bg-brandTeal rounded-full px-[12px] py-[6px]',

  StatusText: 'text12BBrandTeal',

  MainWrapper: 'flex gap-[20px] px-[20px] my-[20px]',

  Details: 'flex-row justify-between gap-[20px] ',

  DetailItem: 'flex-1 gap-[2px]',

  Label: 'text12RMediumGray',

  Value: 'text12BDarkNavyBlue',

  ProgressTrack: 'h-[8px] bg-lightGray rounded-full  overflow-hidden',

  ProgressFill: 'h-full bg-brandBlue rounded-full',

  Footer: 'flex-row items-center justify-between gap-[20px] ',

  FooterText: 'text12RMediumGray flex-1',

  Actions: 'flex-row items-center gap-[15px]',
};
