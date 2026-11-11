import { View } from 'react-native';
import React from 'react';
import {
  CalendarDays,
  ClipboardList,
  Package,
  Tag,
  CloudUpload,
  AlertTriangle,
} from 'lucide-react-native';
import Colors from '../../../../../../styles/Colors';
import StackCard, {
  type StatCardProps,
} from '../../../../../Card/StackCard/StackCard';

type StackCardItemData = StatCardProps & {
  id: number;
};

const stats: StackCardItemData[] = [
  {
    id: 1,
    title: 'Assigned schedules',
    value: 3,
    subtitle: '2 active now',
    icon: <CalendarDays size={20} color={Colors.brandSkyBlueBase} />,
    iconBgColor: Colors.brandSkyBlue,
  },
  {
    id: 2,
    title: 'Pending materials',
    value: 320,
    subtitle: 'Across 2 schedules',
    icon: <ClipboardList size={20} color={Colors.brandYellowBase} />,
    iconBgColor: Colors.brandYellow,
  },
  {
    id: 3,
    title: 'Materials counted',
    value: 864,
    subtitle: '73% complete',
    icon: <Package size={20} color={Colors.brandTealBase} />,
    iconBgColor: Colors.brandTeal,
  },
  {
    id: 4,
    title: 'Tags generated',
    value: 864,
    subtitle: '861 printed',
    icon: <Tag size={20} color={Colors.brandPurpleBase} />,
    iconBgColor: Colors.brandPurple,
  },
  {
    id: 5,
    title: 'Pending sync',
    value: 46,
    subtitle: 'Saved securely',
    icon: <CloudUpload size={20} color={Colors.brandYellowBase} />,
    iconBgColor: Colors.brandYellow,
  },
  {
    id: 6,
    title: 'Failed sync',
    value: 3,
    subtitle: 'Action required',
    icon: <AlertTriangle size={20} color={Colors.brandPinkBase} />,
    iconBgColor: Colors.brandPink,
  },
];
export default function StackCardItem() {
  return (
    <View className="flex-1 flex-row gap-[20px]">
      {stats.map(({ id, ...cardProps }) => (
        <StackCard key={id} {...cardProps} />
      ))}
    </View>
  );
}
