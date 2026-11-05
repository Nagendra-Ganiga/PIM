import { View } from 'react-native';
import React from 'react';
import { ArrowRight } from 'lucide-react-native';
import DeviceReadCard, {
  type DeviceReadItem,
} from '../../../../../Card/DeviceReadCard/DeviceReadCard';
import Colors from '../../../../../../styles/Colors';

const deviceDetails: DeviceReadItem[] = [
  {
    id: 1,
    label: 'Tablet',
    value: 'TAB-WH-024 · 82%',
  },
  {
    id: 2,
    label: 'Default printer',
    value: 'Zebra ZQ521 · Connected',
  },
  {
    id: 3,
    label: 'Downloaded scope',
    value: '1,184 / 1,184 materials',
  },
  {
    id: 4,
    label: 'Last successful sync',
    value: 'Today, 10:40',
  },
];

export default function DeviceReadCardItem() {
  return (
    <View className="flex-1">
      <DeviceReadCard
        sectionHeader={{
          Title: 'Device readiness',
          Status: 'Ready',
          StatusType: 'success',
        }}
        buttonProps={{
          title: 'Device return Checklist',
          buttonType: 'text',
          iconPosition: 'right',
          icon: <ArrowRight size={20} color={Colors.brandBlue} />,
        }}
        details={deviceDetails}
      />
    </View>
  );
}
