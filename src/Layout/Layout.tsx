import { View } from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../components/UI/SafeArea/SafeAreaWrapper';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';

type LayoutProps = {
  sidebar?: React.ReactNode | boolean;
  header?: React.ReactNode;
  children?: React.ReactNode;
};

export default function Layout({
  sidebar = <Sidebar />,
  header = <Header />,
  children,
}: LayoutProps) {
  return (
    <SafeAreaWrapper edges={['top']}>
      <View className={LayoutStyles.LayoutContainer}>
        {sidebar && <View className={LayoutStyles.leftBar}>{sidebar}</View>}
        <View className={LayoutStyles.rightBar}>
          <View className={LayoutStyles.headerBar}>{header}</View>
          <View className={LayoutStyles.body}>{children}</View>
        </View>
      </View>
    </SafeAreaWrapper>
  );
}

export const LayoutStyles = {
  LayoutContainer: 'flex flex-row h-full w-full',
  leftBar: 'w-[100px] bg-darkNavyBlue ',
  rightBar: 'flex-1 ',
  headerBar: 'h-16 bg-gray-200 bg-white border-lightGray border-b-[1px]',
  body: 'flex-1  px-[20px] bg-lightBG',
};
