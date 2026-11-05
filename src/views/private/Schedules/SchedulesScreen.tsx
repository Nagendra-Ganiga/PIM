import { Text, View } from 'react-native';
import React from 'react';
import Layout from '../../../components/Layout/Layout';

export default function Schedules() {
  return (
    <Layout
      title="Schedules"
      subtitle="PI-2025-00481 · North Manufacturing"
      backArrow={true}
    >
      <View>
        <Text>Schedules</Text>
      </View>
    </Layout>
  );
}
