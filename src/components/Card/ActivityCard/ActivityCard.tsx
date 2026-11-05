import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Check, ChevronRight } from 'lucide-react-native';

import SectionHeader, {
  type SectionHeaderProps,
} from '../SectionHeader/SectionHeader';

import { CardStyle } from '../../../styles/GlobalStyles';
import Colors from '../../../styles/Colors';

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

export default function ActivityCard({
  sectionHeaderProps,
  activities,
}: ActivityCardProps) {
  return (
    <View className={CardStyle.Card}>
      {sectionHeaderProps && <SectionHeader {...sectionHeaderProps} />}

      <View className={ActivityStyles.List}>
        {activities.map(item => (
          <Pressable
            key={item.id}
            onPress={item.onPress}
            className={ActivityStyles.Row}
          >
            {/* Success Icon */}
            <View className={ActivityStyles.IconWrapper}>
              <Check size={20} color={Colors.brandTealBase} />
            </View>

            {/* Activity Details */}
            <View className={ActivityStyles.Details}>
              <Text className={ActivityStyles.Title}>{item.title}</Text>

              <Text className={ActivityStyles.Reference}>{item.reference}</Text>
            </View>

            {/* Time */}
            <Text className={ActivityStyles.Time}>{item.time}</Text>

            {/* Arrow */}
            <ChevronRight size={20} color={Colors.brandDarkBlue} />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

export const ActivityStyles = {
  List: '',

  Row: 'flex-row items-center gap-[12px] px-[15px] py-[15px] border-b border-lightGray',

  IconWrapper:
    ' rounded-[10px] bg-brandTeal  items-center justify-center px-[10px] py-[10px]',

  Details: 'flex-1 gap-[5px]',

  Title: 'text12BDarkNavyBlue',

  Reference: 'text10RMediumGray',

  Time: 'text10RMediumGray',
};
