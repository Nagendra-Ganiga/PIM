import React from 'react';
import { View } from 'react-native';

import AssignmentCard, {
  type AssignmentCardProps,
} from '../../../../../Card/AssignmentCard/AssignmentCard';

type AssignmentData = AssignmentCardProps & {
  id: number;
};

const assignmentData: AssignmentData[] = [
  {
    id: 1,
    sectionHeader: {
      Eyebrow: 'Active assignment',
      Title: 'Year-end Raw Materials Count',
      Status: 'Counting open',
      StatusType: 'success',
    },
    schedule: 'PI-2025-00481',
    location: 'RM01 - Raw Materials',
    stockFreeze: '18 Dec · 06:00',
    completed: 864,
    total: 1184,

    onViewDetails: () => console.log('View details'),
    onContinue: () => console.log('Continue counting'),
  },
];

export default function AssignmentCardItem() {
  return (
    <View className="w-full flex-1">
      {assignmentData.map(({ id, ...assignmentProps }) => (
        <View key={id} className="flex-1">
          <AssignmentCard {...assignmentProps} />
        </View>
      ))}
    </View>
  );
}
