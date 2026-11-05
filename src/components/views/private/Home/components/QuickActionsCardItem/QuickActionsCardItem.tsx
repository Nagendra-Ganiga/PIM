import React from 'react';
import { View } from 'react-native';
import {
  CalendarDays,
  ScanLine,
  RefreshCw,
  Printer,
} from 'lucide-react-native';

import QuickActionsCard, {
  type QuickActionItem,
} from '../../../../../Card/QuickActionsCard/QuickActionsCard';

import Colors from '../../../../../../styles/Colors';

const actions: QuickActionItem[] = [
  {
    id: 1,
    title: 'My schedules',
    icon: <CalendarDays size={24} color={Colors.brandBlue} />,
    onPress: () => console.log('My schedules'),
  },
  {
    id: 2,
    title: 'Scan material',
    icon: <ScanLine size={24} color={Colors.brandBlue} />,
    onPress: () => console.log('Scan material'),
  },
  {
    id: 3,
    title: 'Sync now',
    icon: <RefreshCw size={24} color={Colors.brandBlue} />,
    onPress: () => console.log('Sync now'),
  },
  {
    id: 4,
    title: 'Printer status',
    icon: <Printer size={24} color={Colors.brandBlue} />,
    onPress: () => console.log('Printer status'),
  },
];

export default function QuickActionsCardItem() {
  return (
    <View className="w-full flex-1">
      <QuickActionsCard
        sectionHeaderProps={{
          Title: 'Quick actions',
        }}
        buttonProps={{
          variant: 'softOutlined',
          buttonType: 'iconText',
          iconPosition: 'top',
        }}
        actions={actions}
      />
    </View>
  );
}
