import { View } from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../UI/SafeArea/SafeAreaWrapper';
import Sidebar from './Sidebar';
import Header from './Header';

type LayoutProps = {
  sidebar?: React.ReactNode | boolean;
  header?: React.ReactNode;
  children?: React.ReactNode;
};

export default function Layout({
  sidebar = <Sidebar />,
  header,
  children,
}: LayoutProps) {
  return (
    <SafeAreaWrapper edges={['top']}>
      <View className={LayoutStyles.layoutContainer}>
        {sidebar && <View className={LayoutStyles.leftBar}>{sidebar}</View>}
        <View className={LayoutStyles.rightBar}>
          {header ?? <Header />}
          <View className={LayoutStyles.body}>{children}</View>
        </View>
      </View>
    </SafeAreaWrapper>
  );
}

export const LayoutStyles = {
  layoutContainer: 'flex flex-row h-full w-full',
  leftBar: 'w-[100px] bg-darkNavyBlue ',
  rightBar: 'flex-1 ',
  headerBar:
    'h-[75px] bg-White border-lightGray border-b-[1px] py-[10px] px-[20px]',
  body: 'flex-1  px-[20px] bg-lightBG',
};
