import { ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import SafeAreaWrapper from '../../../components/UI/SafeArea/SafeAreaWrapper';
import ButtonsWrapper from '../../../components/UI/Button/ButtonsWrapper';
import InputTextWrapper from '../../../components/UI/InputText/InputTextWrapper';
import ModalWrapper from '../../../components/UI/Modal/ModalWrapper';
import CheckBoxWrapper from '../../../components/UI/CheckBox/CheckBoxWrapper';
import RadioButtonWrapper from '../../../components/UI/RadioBox/RadioButtonWrapper';
import SwitchWrapper from '../../../components/UI/Switch/SwitchWrapper';
import { Images } from '../../../assets/images/Images';

export default function Home() {
  const [email, setEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState('email');
  const [isEnabled, setIsEnabled] = useState(false);
  const [comment, setComment] = useState('');

  const [checked, setChecked] = useState({
    term: false,
    notification: false,
  });

  const toggleCheckedBox = (key: keyof typeof checked) => {
    setChecked(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <SafeAreaWrapper className="bg-White">
      <ScrollView>
        <Text className=" text-center text24BBlack">Input Text1</Text>
        <ButtonsWrapper variant="filled" title="Filled" onPress={() => {}} />
        <ButtonsWrapper
          variant="outlined"
          title="Outlined"
          onPress={() => {}}
        />
        <ButtonsWrapper variant="success" title="Success" onPress={() => {}} />
        <ButtonsWrapper variant="danger" title="Danger" onPress={() => {}} />
        <ButtonsWrapper
          variant="warningOutlined"
          title="Warning"
          onPress={() => {}}
        />
        <ButtonsWrapper
          variant="infoOutlined"
          title="Info"
          onPress={() => {}}
        />
        <ButtonsWrapper
          variant="infoOutlined"
          title="Info"
          onPress={() => {}}
          disabled={true}
        />
        <ButtonsWrapper
          buttonType="icon"
          icon={<Images.Hide />}
          onPress={() => console.log('Icon clicked')}
        />
        <ButtonsWrapper
          buttonType="iconText"
          title="Add Item"
          icon={<Images.Hide />}
          iconPosition="right"
          variant="filled"
          onPress={() => console.log('Add clicked')}
        />
        <ButtonsWrapper
          buttonType="text"
          title="Forgot Password?"
          onPress={() => console.log('Forgot clicked')}
        />
        <Text className=" text-center text24BRed">Input Text1</Text>
        <InputTextWrapper
          labelText="Name Text"
          focusEnabled={true}
          value={email}
          onChangeText={setEmail}
          floatingLabel={true}
          secureTextEntry={true}
        />
        <InputTextWrapper
          labelText="Comment Text"
          focusEnabled={true}
          value={email}
          onChangeText={setEmail}
          floatingLabel={false}
          secureTextEntry={false}
          multiline={true}
          numberOfLines={40}
          textAlignVertical="top"
          height={200}
        />

        <InputTextWrapper
          labelText="Comment Text"
          focusEnabled={true}
          value={comment}
          onChangeText={setComment}
          floatingLabel={false}
          multiline={true}
          numberOfLines={4}
          textAlignVertical="top"
          maxLength={500}
        />
        <Text className="text-[30px]  text-center w-[100%] text-black font-HeeboRegular">
          Modal
        </Text>
        <ModalWrapper
          pressableText="Show Modal"
          modalTitle="Confirm Action"
          closeIcon
          onClose={() => console.log('Modal closed')}
          onConfirm={() => console.log('Confirmed successfully')}
          trigger={<Text>Click</Text>}
          // eslint-disable-next-line react/no-unstable-nested-components
          modalfooter={closeModal => (
            <View className="flex-row justify-end gap-3">
              <ButtonsWrapper
                variant="outlined"
                title="Cancel"
                onPress={closeModal}
              />
              <ButtonsWrapper
                variant="filled"
                title="Confirm"
                onPress={() => ''}
              />
            </View>
          )}
        >
          <View className="gap-3">
            <Text className="text-base text-black">
              Are you sure you want to continue?
            </Text>

            <Text className="text-sm text-gray-500">
              Please confirm before proceeding.
            </Text>
          </View>
        </ModalWrapper>
        <Text className="text-[30px]  text-center w-[100%] text-black font-HeeboRegular">
          Check Box
        </Text>
        <CheckBoxWrapper
          label="Term"
          checked={checked.term}
          onPress={() => toggleCheckedBox('term')}
          size={24}
        />
        <CheckBoxWrapper
          label="notification"
          checked={checked.notification}
          onPress={() => toggleCheckedBox('notification')}
          size={24}
        />
        <Text className="text-[30px]  text-center w-[100%] text-black font-HeeboRegular">
          Radio Box
        </Text>
        <RadioButtonWrapper
          label="Email"
          selected={selectedOption === 'email'}
          onPress={() => setSelectedOption('email')}
        />
        <RadioButtonWrapper
          label="SMS"
          selected={selectedOption === 'sms'}
          onPress={() => setSelectedOption('sms')}
        />
        <RadioButtonWrapper
          label="Push Notification"
          selected={selectedOption === 'push'}
          onPress={() => setSelectedOption('push')}
        />
        <Text className="text-[30px]  text-center w-[100%] text-black font-HeeboRegular">
          Switch Box
        </Text>
        <SwitchWrapper
          value={isEnabled}
          onValueChange={setIsEnabled}
          accessibilityLabel="Enable notifications"
          accessibilityHint="Turns notifications on or off"
        />
      </ScrollView>
    </SafeAreaWrapper>
  );
}
