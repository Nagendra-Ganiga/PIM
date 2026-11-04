import { View } from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../components/UI/SafeArea/SafeAreaWrapper';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';

type LayoutProps = {
  title?: string;
  subtitle?: string;
  backArrow?: boolean;
  sidebar?: React.ReactNode | boolean;
  header?: React.ReactNode;
  children?: React.ReactNode;
};

export default function Layout({
  title,
  subtitle,
  backArrow,
  sidebar = <Sidebar />,
  header,
  children,
}: LayoutProps) {
  return (
    <SafeAreaWrapper edges={['top']}>
      <View className={LayoutStyles.LayoutContainer}>
        {sidebar && <View className={LayoutStyles.leftBar}>{sidebar}</View>}
        <View className={LayoutStyles.rightBar}>
          <View className={LayoutStyles.headerBar}>
            {header ?? (
              <Header title={title} subtitle={subtitle} backArrow={backArrow} />
            )}
          </View>
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
  headerBar:
    'h-[75px] bg-White border-lightGray border-b-[1px] py-[10px] px-[20px]',
  body: 'flex-1  px-[20px] bg-lightBG',
};
