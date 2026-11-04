import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Layout from '../../../Layout/Layout';
import {
  Wifi,
  CalendarDays,
  ClipboardList,
  Package,
  Tag,
  CloudUpload,
  AlertTriangle,
} from 'lucide-react-native';
import Button from '../../../components/UI/Button/Button';
import Colors from '../../../styles/Colors';
import StackCard from '../../../components/Card/StackCard/StackCard';
import AssignmentCard from '../../../components/Card/AssignmentCard/AssignmentCard';

const stats = [
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
export default function Home() {
  return (
    <Layout title="Home" subtitle="PI-2025-00481 · North Manufacturing">
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
                icon={<Wifi size={20} color={Colors.brandTealBase} />}
                rounded
              />
            </View>
          </View>
          <View className={HomeStyles.CarRow}>
            {stats.map(item => (
              <StackCard
                key={item.id}
                title={item.title}
                value={item.value}
                subtitle={item.subtitle}
                icon={item.icon}
                iconBgColor={item.iconBgColor}
              />
            ))}
          </View>
          <View>
            <AssignmentCard
              title="Year-end Raw Materials Count"
              status="Counting open"
              schedule="PI-2025-00481"
              location="RM01 - Raw Materials"
              stockFreeze="18 Dec · 06:00"
              completed={864}
              total={1184}
              onViewDetails={() => console.log('View details')}
              onContinue={() => console.log('Continue counting')}
            />
          </View>
          <View></View>
        </View>
      </ScrollView>
    </Layout>
  );
}

export const HomeStyles = {
  container: 'flex flex-col gap-[20px] my-[30px]',
  headerContent: 'flex flex-row justify-between items-center  ',
  userInfo: 'flex-1 gap-[5px]',
  date: 'text12BBrandBlue',
  greeting: 'text24BBlack',
  location: 'text12BMediumGray',
  CarRow: 'flex-row gap-[20px]',
};
