import { Text } from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../../../components/UI/SafeAreaWrapper/SafeAreaWrapper';
import ButtonsWrapper from '../../../components/UI/ButtonsWrapper/ButtonsWrapper';

export default function Home() {
  return (
    <SafeAreaWrapper className="bg-White">
      <Text className="text-[30px]  text-center w-[100%] text-black font-HeeboRegular">
        Buttons
      </Text>
      <ButtonsWrapper variant="filled" title="Filled" onPress={() => {}} />
      <ButtonsWrapper variant="outlined" title="Outlined" onPress={() => {}} />
      <ButtonsWrapper variant="success" title="Success" onPress={() => {}} />
      <ButtonsWrapper variant="danger" title="Danger" onPress={() => {}} />
      <ButtonsWrapper
        variant="warningOutlined"
        title="Warning"
        onPress={() => {}}
      />
      <ButtonsWrapper variant="infoOutlined" title="Info" onPress={() => {}} />

      <Text className="text-[30px]  text-center w-[100%] text-black font-HeeboRegular">
        Input Text
      </Text>
    </SafeAreaWrapper>
  );
}
