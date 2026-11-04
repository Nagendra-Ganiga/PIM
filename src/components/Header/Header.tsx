import { View, Text } from 'react-native';
import React from 'react';
import Button from '../UI/Button/Button';
import {
  ArrowLeft,
  BellIcon,
  ChevronDown,
  UserIcon,
  Wifi,
} from 'lucide-react-native';
import Colors from '../../styles/Colors';
import { useNavigation } from '@react-navigation/native';

type HeaderProps = {
  title?: string;
  subtitle?: string;
  backArrow?: boolean;
};

export default function Header({
  title,
  subtitle,
  backArrow = false,
}: HeaderProps) {
  const navigation = useNavigation();

  return (
    <View className={HeaderStyles.headerContainer}>
      <View className={HeaderStyles.leftSection}>
        {backArrow && (
          <View>
            <Button
              variant="BackButton"
              buttonType="icon"
              onPress={() => navigation.goBack()}
              icon={<ArrowLeft size={20} />}
            />
          </View>
        )}

        <View className={HeaderStyles.titleContainer}>
          <Text className={HeaderStyles.title}>{title}</Text>
          {subtitle && (
            <Text className={HeaderStyles.subtitle}>{subtitle}</Text>
          )}
        </View>
      </View>
      <View className={HeaderStyles.rightSection}>
        <View>
          <Button
            buttonType="iconText"
            title="Offline"
            variant="success"
            rounded
            icon={<Wifi size={20} color={Colors.brandTealBase} />}
          />
        </View>
        <View>
          <BellIcon size={24} />
        </View>
        <View className={HeaderStyles.userSection}>
          <View>
            <UserIcon size={24} />
          </View>
          <View className={HeaderStyles.userInfo}>
            <Text className={HeaderStyles.userName}>Alex Khan</Text>
            <Text className={HeaderStyles.userRole}>Inventory Counter</Text>
          </View>
          <View>
            <ChevronDown size={20} color={Colors.mediumGray} />
          </View>
        </View>
      </View>
    </View>
  );
}

export const HeaderStyles = {
  headerContainer: 'flex flex-row items-center justify-between',
  leftSection: 'flex flex-row items-center gap-[15px] ',
  rightSection: 'flex flex-row items-center gap-[25px] ',
  titleContainer: 'flex flex-col gap-[0px]',
  title: 'text18BDarkNavyBlue',
  subtitle: 'text12RMediumGray',
  userSection:
    'flex flex-row items-center gap-[15px] border-l-[1px] pl-[15px] border-l-lightGray',
  userInfo: 'flex flex-col gap-[-2px]',
  userName: 'text12BDarkNavyBlue',
  userRole: 'text10RMediumGray',
};
