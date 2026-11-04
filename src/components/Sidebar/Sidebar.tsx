import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';

import {
  Box,
  Home,
  CalendarDays,
  ScanLine,
  ClipboardList,
  RefreshCw,
  Printer,
  User,
} from 'lucide-react-native';

import Colors from '../../styles/Colors';

const menuItems = [
  { id: 'Home', label: 'Home', icon: Home },
  { id: 'Schedules', label: 'Schedules', icon: CalendarDays },
  { id: 'Count', label: 'Count', icon: ScanLine },
  { id: 'Records', label: 'Records', icon: ClipboardList },
  { id: 'Sync', label: 'Sync', icon: RefreshCw, badge: 3 },
];

const bottomMenuItems = [
  { id: 'Printer', label: 'Printer', icon: Printer, dot: true },
  { id: 'Profile', label: 'Profile', icon: User },
];

export default function Sidebar() {
  const navigation = useNavigation<any>();

  const activeRoute = useNavigationState(
    state => state.routes[state.index]?.name,
  );

  const renderMenuItem = (item: any) => {
    const Icon = item.icon;
    const isActive = activeRoute === item.id;

    return (
      <Pressable
        key={item.id}
        onPress={() => {
          if (item.id === 'Home' || item.id === 'Schedules') {
            navigation.navigate(item.id);
          }
        }}
        className={`${SidebarStyles.MenuItem} ${
          isActive ? 'bg-brandDarkBlue border-brandBlue' : 'border-transparent'
        }`}
      >
        <View className="relative">
          <Icon
            size={22}
            color={isActive ? Colors.white : Colors.mediumGray}
            strokeWidth={2}
          />

          {item.badge && (
            <View className={SidebarStyles.Badge}>
              <Text className="text-white text-xs font-bold">{item.badge}</Text>
            </View>
          )}

          {item.dot && <View className={SidebarStyles.StatusDot} />}
        </View>

        <Text
          className={`${SidebarStyles.MenuLabel} ${
            isActive ? 'text-white' : 'text-mediumGray'
          }`}
        >
          {item.label}
        </Text>
      </Pressable>
    );
  };

  return (
    <View className={SidebarStyles.Container}>
      <Pressable
        className={SidebarStyles.Logo}
        onPress={() => navigation.navigate('Home')}
      >
        <Box color={Colors.white} size={24} />
      </Pressable>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className={SidebarStyles.MenuList}>
          {menuItems.map(renderMenuItem)}
        </View>
      </ScrollView>

      <View className={SidebarStyles.BottomMenu}>
        {bottomMenuItems.map(renderMenuItem)}
      </View>
    </View>
  );
}

const SidebarStyles = {
  Container: 'flex-1 bg-darkNavyBlue p-[10px]',

  Logo: 'items-center justify-center mb-[20px] bg-brandBlue px-[20px] py-[15px] mx-[10px] rounded-[10px]',

  MenuList: 'gap-[10px]',

  MenuItem:
    'relative flex-col items-center justify-center p-[10px] gap-[5px] rounded-[10px] border-l-[3px]',

  MenuLabel: 'text-[12px] font-HeeboRegular',

  Badge:
    'absolute -top-2 -right-3 bg-red rounded-full w-[18px] h-[18px] items-center justify-center',

  StatusDot: 'absolute -top-1 -right-2 w-2 h-2 rounded-full bg-emerald-400',

  BottomMenu:
    'gap-[10px] mt-[10px] mb-[20px] border-t border-mediumGray pt-[20px]',
};
