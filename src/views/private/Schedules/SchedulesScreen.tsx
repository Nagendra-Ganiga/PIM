import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import Layout from '../../../components/Layout/Layout';
import Header from '../../../components/Layout/Header';
import { PageHeaderStyle } from '../../../styles/GlobalStyles';
import Button from '../../../components/UI/Button/Button';
import Colors from '../../../styles/Colors';
import { RefreshCcw } from 'lucide-react-native';
import SchedulesFilter from '../../../components/Schedules/SchedulesFilter/SchedulesFilter';

export default function Schedules() {
  return (
    <Layout
      header={
        <Header
          title="My PI schedules"
          subtitle="PI-2025-00481 · North Manufacturingg"
        />
      }
    >
      <ScrollView>
        <View className={PageHeaderStyle.container}>
          <View className={PageHeaderStyle.headerContent}>
            <View className={PageHeaderStyle.userInfo}>
              <Text className={PageHeaderStyle.date}>My workr</Text>
              <Text className={PageHeaderStyle.greeting}>
                Assigned PI schedules
              </Text>
              <Text className={PageHeaderStyle.location}>
                Download scope, review authorization, and begin counting
                assigned inventory.
              </Text>
            </View>
            <View>
              <Button
                buttonType="iconText"
                variant="outlined"
                title="Refresh assignment"
                icon={<RefreshCcw size={18} color={Colors.brandDarkBlue} />}
              />
            </View>
          </View>
          <View>
            <View>
              <SchedulesFilter />
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}
