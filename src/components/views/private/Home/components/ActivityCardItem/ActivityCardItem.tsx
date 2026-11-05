import React from 'react';
import { View } from 'react-native';

import ActivityCard, {
  type ActivityItem,
} from '../../../../../Card/ActivityCard/ActivityCard';
import { ChevronRight } from 'lucide-react-native';
import Colors from '../../../../../../styles/Colors';

const activities: ActivityItem[] = [
  {
    id: 1,
    title: 'MAT-40218 · Industrial sealing ring - 42 mm',
    reference: 'T-1009-07-004821 · 480 EA · A-03-14',
    time: 'Today, 10:42',
    onPress: () => console.log('Activity 1'),
  },
  {
    id: 2,
    title: 'MAT-88241 · Hydraulic coupling assembly',
    reference: 'T-1009-07-004820 · 108 EA · B-01-06',
    time: 'Today, 10:31',
    onPress: () => console.log('Activity 2'),
  },
  {
    id: 3,
    title: 'MAT-11807 · Stainless fastener pack',
    reference: 'T-1009-07-004819 · 62 PK · C-02-11',
    time: 'Today, 10:18',
    onPress: () => console.log('Activity 3'),
  },
];

export default function ActivityCardItem() {
  return (
    <View className="flex-1">
      <ActivityCard
        sectionHeaderProps={{
          Eyebrow: 'Today',
          Title: 'Recent counting activity',
          ShowViewAll: true,
          viewAllButtonProps: {
            title: 'View All',
            buttonType: 'text',
            iconPosition: 'right',
            onPress: () => console.log('View All'),
            icon: <ChevronRight size={20} color={Colors.brandBlue} />,
          },
        }}
        activities={activities}
      />
    </View>
  );
}
