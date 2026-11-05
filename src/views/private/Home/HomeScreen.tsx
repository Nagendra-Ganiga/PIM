import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Layout from '../../../components/Layout/Layout';
import { Bell } from 'lucide-react-native';
import Button from '../../../components/UI/Button/Button';
import Colors from '../../../styles/Colors';
import AssignmentCardItem from '../../../components/views/private/Home/components/AssignmentCardItem/AssignmentCardItem';
import StackCardItem from '../../../components/views/private/Home/components/StackCardItem';
import QuickActionsCardItem from '../../../components/views/private/Home/components/QuickActionsCardItem/QuickActionsCardItem';
import ActivityCardItem from '../../../components/views/private/Home/components/ActivityCardItem/ActivityCardItem';
import DeviceReadCardItem from '../../../components/views/private/Home/components/DeviceReadCardItem/DeviceReadCardItem';

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
                icon={<Bell size={20} color={Colors.brandTealBase} />}
                rounded
              />
            </View>
          </View>
          <View className={HomeStyles.CardRow}>
            <StackCardItem />
          </View>
          <View className={HomeStyles.Col2}>
            <View className="flex-[2]">
              <AssignmentCardItem />
            </View>
            <View className="flex-[1]">
              <QuickActionsCardItem />
            </View>
          </View>
          <View className={HomeStyles.Col2}>
            <View className="flex-[2]">
              <ActivityCardItem />
            </View>
            <View className="flex-[1]">
              <DeviceReadCardItem />
            </View>
          </View>
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
  CardRow: 'flex-row gap-[20px]',
  Col2: 'w-full flex-row gap-[20px]',
};
