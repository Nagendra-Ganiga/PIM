import React from 'react';
import { View, Text } from 'react-native';
import { ScanLine } from 'lucide-react-native';

import Button from '../../UI/Button/Button';
import Colors from '../../../styles/Colors';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';
import SectionHeader, {
  type SectionHeaderProps,
} from '../SectionHeader/SectionHeader';
import { CardStyle } from '../../../styles/GlobalStyles';

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

export default function AssignmentCard({
  sectionHeader,
  schedule,
  location,
  stockFreeze,
  completed,
  total,
  onViewDetails,
  onContinue,
}: AssignmentCardProps) {
  const percentage =
    total > 0 ? Math.min(Math.max((completed / total) * 100, 0), 100) : 0;

  const remaining = Math.max(total - completed, 0);

  return (
    <View className={`${CardStyle.Card} flex-col`}>
      {/* Header */}
      <SectionHeader {...sectionHeader} />

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
        <ProgressBar
          progress={percentage}
          height={8}
          backgroundColor={Colors.lightGray}
          progressColor={Colors.brandBlue}
        />

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
  MainWrapper: 'flex-1 flex-col gap-[20px] px-[20px] my-[20px]',

  Details: 'flex-row justify-between gap-[20px] ',

  DetailItem: 'flex-1 gap-[2px]',

  Label: 'text12RMediumGray',

  Value: 'text12BDarkNavyBlue',

  Footer:
    'flex-row flex-wrap items-center justify-between gap-[10px] mt-[auto]',

  FooterText: 'text12RMediumGray ',

  Actions: 'flex-row items-center gap-[15px]',
};
