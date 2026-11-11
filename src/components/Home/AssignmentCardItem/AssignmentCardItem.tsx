import React from 'react';
import { View, Text } from 'react-native';
import { ScanLine } from 'lucide-react-native';

import Button from '../../UI/Button/Button';
import Colors from '../../../styles/Colors';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';
import SectionHeader, {
  type SectionHeaderProps,
} from '../../UI/Card/CardHeader/CardHeader';
import Card from '../../UI/Card/Card';

export type AssignmentCardProps = {
  sectionHeader?: SectionHeaderProps;
  schedule: string;
  location: string;
  stockFreeze: string;
  completed: number;
  total: number;
  onViewDetails?: () => void;
  onContinue?: () => void;
};

type Props = {
  assignmentData: AssignmentCardProps;
};

export default function AssignmentCardItem({ assignmentData }: Props) {
  const {
    sectionHeader,
    schedule,
    location,
    stockFreeze,
    completed,
    total,
    onViewDetails,
    onContinue,
  } = assignmentData;

  const percentage =
    total > 0 ? Math.min(Math.max((completed / total) * 100, 0), 100) : 0;

  const remaining = Math.max(total - completed, 0);

  return (
    <Card>
      {/* Header */}
      <SectionHeader {...sectionHeader} />

      <View className={AssignmentStyles.mainWrapper}>
        {/* Assignment Details */}
        <View className={AssignmentStyles.details}>
          <View className={AssignmentStyles.detailItem}>
            <Text className={AssignmentStyles.label}>Schedule</Text>
            <Text className={AssignmentStyles.value}>{schedule}</Text>
          </View>

          <View className={AssignmentStyles.detailItem}>
            <Text className={AssignmentStyles.label}>Location</Text>
            <Text className={AssignmentStyles.value}>{location}</Text>
          </View>

          <View className={AssignmentStyles.detailItem}>
            <Text className={AssignmentStyles.label}>Stock freeze</Text>
            <Text className={AssignmentStyles.value}>{stockFreeze}</Text>
          </View>

          <View className={AssignmentStyles.detailItem}>
            <Text className={AssignmentStyles.label}>Progress</Text>
            <Text className={AssignmentStyles.value}>
              {completed.toLocaleString()} / {total.toLocaleString()}
            </Text>
          </View>
        </View>

        {/* Progress Bar */}
        <ProgressBar
          progress={percentage}
          height={8}
          backgroundColor={Colors.lightGray}
          progressColor={Colors.brandBlue}
        />

        {/* Footer */}
        <View className={AssignmentStyles.footer}>
          <Text className={AssignmentStyles.footerText}>
            {remaining.toLocaleString()} materials remaining · 46 local records
            pending sync
          </Text>

          <View className={AssignmentStyles.actions}>
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
    </Card>
  );
}

export const AssignmentStyles = {
  mainWrapper: 'flex-1 flex-col gap-[20px] px-[20px] my-[20px]',
  details: 'flex-row justify-between gap-[20px]',
  detailItem: 'flex-1 gap-[2px]',
  label: 'text12RMediumGray',
  value: 'text12BDarkNavyBlue',
  footer:
    'flex-row flex-wrap items-center justify-between gap-[10px] mt-[auto]',
  footerText: 'text12RMediumGray',
  actions: 'flex-row items-center gap-[15px]',
};
