import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Check, ChevronRight } from 'lucide-react-native';

import SectionHeader, {
  type SectionHeaderProps,
} from '../../../UI/Card/CardHeader/CardHeader';
import Card from '../../../UI/Card/Card';
import Colors from '../../../../styles/Colors';

export type ActivityItem = {
  id: number;
  title: string;
  reference: string;
  time: string;
  onPress?: () => void;
};

type ActivityCardProps = {
  sectionHeaderProps?: SectionHeaderProps;
  activities: ActivityItem[];
};

export default function ActivityCardItem({
  sectionHeaderProps,
  activities,
}: ActivityCardProps) {
  return (
    <Card>
      {sectionHeaderProps && <SectionHeader {...sectionHeaderProps} />}

      <View className={ActivityStyles.list}>
        {activities.map(item => (
          <Pressable
            key={item.id}
            onPress={item.onPress}
            className={ActivityStyles.row}
          >
            {/* Success Icon */}
            <View className={ActivityStyles.iconWrapper}>
              <Check size={20} color={Colors.brandTealBase} />
            </View>

            {/* Activity Details */}
            <View className={ActivityStyles.details}>
              <Text className={ActivityStyles.title}>{item.title}</Text>

              <Text className={ActivityStyles.reference}>{item.reference}</Text>
            </View>

            {/* Time */}
            <Text className={ActivityStyles.time}>{item.time}</Text>

            {/* Arrow */}
            <ChevronRight size={20} color={Colors.brandDarkBlue} />
          </Pressable>
        ))}
      </View>
    </Card>
  );
}

export const ActivityStyles = {
  list: '',
  row: 'flex-row items-center gap-[12px] px-[15px] py-[15px] border-b border-lightGray',
  iconWrapper:
    ' rounded-[10px] bg-brandTeal  items-center justify-center px-[10px] py-[10px]',
  details: 'flex-1 gap-[5px]',
  title: 'text12BDarkNavyBlue',
  reference: 'text10RMediumGray',
  time: 'text10RMediumGray',
};
