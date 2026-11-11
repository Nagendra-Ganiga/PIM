import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Layout from '../../../components/Layout/Layout';
import { Bell } from 'lucide-react-native';
import Button from '../../../components/UI/Button/Button';
import Colors from '../../../styles/Colors';
import AssignmentCardItem, {
  type AssignmentCardProps,
} from '../../../components/Home/AssignmentCardItem/AssignmentCardItem';
import QuickActionsCardItem, {
  type QuickActionItem,
} from '../../../components/Home/QuickActionsCardItem/QuickActionsCardItem';
import ActivityCardItem, {
  type ActivityItem,
} from '../../../components/Home/ActivityCardItem/ActivityCardItem';
import DeviceReadCardItem, {
  type DeviceReadItem,
} from '../../../components/Home/DeviceReadCardItem/DeviceReadCardItem';
import Header from '../../../components/Layout/Header';
import {
  CalendarDays,
  ClipboardList,
  Package,
  Tag,
  CloudUpload,
  AlertTriangle,
  ScanLine,
} from 'lucide-react-native';
import StackCardItem, {
  type StatsItem,
} from '../../../components/Home/StackCardItem/StackCardItem';
import { ChevronRight } from 'lucide-react-native/icons';

const stats: StatsItem[] = [
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
const assignmentData: AssignmentCardProps = {
  sectionHeader: {
    eyebrow: 'Active assignment',
    title: 'Year-end Raw Materials Count',
    status: 'Counting open',
    statusType: 'success',
  },
  schedule: 'PI-2025-00481',
  location: 'RM01 - Raw Materials',
  stockFreeze: '18 Dec · 06:00',
  completed: 864,
  total: 1184,
};

const quickActionsData: QuickActionItem[] = [
  {
    id: 1,
    title: 'Scan material',
    icon: <ScanLine size={22} color={Colors.brandBlue} />,
    onPress: () => console.log('Scan material'),
  },
  {
    id: 2,
    title: 'Manual entry',
    icon: <ClipboardList size={22} color={Colors.brandBlue} />,
    onPress: () => console.log('Manual entry'),
  },
  {
    id: 3,
    title: 'Manual entry',
    icon: <ClipboardList size={22} color={Colors.brandBlue} />,
    onPress: () => console.log('Manual entry'),
  },
  {
    id: 4,
    title: 'Manual entry',
    icon: <ClipboardList size={22} color={Colors.brandBlue} />,
    onPress: () => console.log('Manual entry'),
  },
];

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

const deviceReadData: DeviceReadItem[] = [
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

export default function Home() {
  return (
    <Layout
      header={
        <Header title="Home" subtitle="PI-2025-00481 · North Manufacturing" />
      }
    >
      <ScrollView>
        <View className={HomeStyles.container}>
          <View className={HomeStyles.headerContent}>
            <View className={HomeStyles.userInfo}>
              <Text className={HomeStyles.date}>Thursday, 18 December</Text>
              <Text className={HomeStyles.greeting}>Good morning, Alex!</Text>
              <Text className={HomeStyles.location}>
                North Manufacturing Plant · Employee E10482
              </Text>
            </View>
            <View>
              <Button
                buttonType="iconText"
                variant="success"
                title="Online · Synced 2 min ago"
                icon={<Bell size={20} color={Colors.brandTealBase} />}
                rounded
              />
            </View>
          </View>
          <View className={HomeStyles.cardRow}>
            <StackCardItem stats={stats} />
          </View>
          <View className={HomeStyles.col2}>
            <View className="flex-[2]">
              <AssignmentCardItem assignmentData={assignmentData} />
            </View>
            <View className="flex-[1]">
              <QuickActionsCardItem
                sectionHeaderProps={{
                  title: 'Quick actions',
                }}
                buttonProps={{
                  variant: 'softOutlined',
                  iconPosition: 'top',
                  buttonType: 'iconText',
                }}
                quickActionsData={quickActionsData}
              />
            </View>
          </View>
          <View className={HomeStyles.col2}>
            <View className="flex-[2]">
              <ActivityCardItem
                sectionHeaderProps={{
                  title: 'Recent activities',
                  showViewAll: true,
                  viewAllButtonProps: {
                    title: 'View all',
                    buttonType: 'text',
                    iconPosition: 'right',
                    icon: <ChevronRight color={Colors.brandBlue} size={20} />,
                  },
                }}
                activities={activities}
              />
            </View>
            <View className="flex-[1]">
              <DeviceReadCardItem
                sectionHeader={{
                  title: 'Device readiness',
                  status: 'Ready',
                  statusType: 'success',
                }}
                deviceReadData={deviceReadData}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}

export const HomeStyles = {
  container: 'flex flex-col gap-[20px] my-[30px]',
  headerContent: 'flex flex-row justify-between items-center',
  userInfo: 'flex-1 gap-[5px]',
  date: 'text12BBrandBlue',
  greeting: 'text24BBlack',
  location: 'text12BMediumGray',
  cardRow: 'flex-row gap-[20px]',
  col2: 'w-full flex-row gap-[20px]',
};
