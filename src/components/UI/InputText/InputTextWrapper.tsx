// InputTextWrapper Features
// - Reusable React Native input component with floating label and placeholder support.
// - Supports controlled input values using value and onChangeText.
// - Supports different keyboard types, including email, numeric, phone-pad, and default keyboards.
// - Includes a password visibility toggle for secure text inputs.
// - Supports editable and read-only input modes.
// - Provides character limits using maxLength.
// - Supports autofocus and programmatic focus control.
// - Supports multiline text input with a configurable number of lines.
// - Automatically adjusts TextArea height based on content size.
// - Maintains a minimum height for multiline inputs.
// - Supports dynamic height changes when text is added or removed.
// - Enables scrolling for multiline text inputs.
// - Provides text alignment and optional custom height for text areas.
// - Dynamically updates label position, color, and border styles based on focus and input value.
// - Keeps password visibility icon correctly aligned within the input container.
// - Supports floating and non-floating label modes.
// - Automatically removes focus when the keyboard is dismissed.
// - Uses centralized InputTextStyle styles for consistent UI across the application.

import React, { useEffect, useRef, useState } from 'react';

import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Images } from '../../../assets/images/Images';

type InputTextWrapperProps = {
  labelText?: string;
  floatingLabel?: boolean;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  editable?: boolean;
  maxLength?: number;
  autoFocus?: boolean;
  focusEnabled?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
  height?: number | string;
};

export default function InputTextWrapper({
  labelText = 'Name',
  floatingLabel = true,
  placeholder,
  value = '',
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
  editable = true,
  maxLength,
  autoFocus = false,
  focusEnabled = true,
  multiline = false,
  numberOfLines,
  textAlignVertical = 'center',
  height,
}: InputTextWrapperProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [textAreaHeight, setTextAreaHeight] = useState(56);

  const inputRef = useRef<React.ElementRef<typeof TextInput>>(null);

  const hasValue = value.trim().length > 0;
  const shouldFloat = isFocused || hasValue;
  const isActive = isFocused && focusEnabled;

  const labelClassName = [
    InputTextStyle.labelText,
    floatingLabel
      ? shouldFloat
        ? InputTextStyle.labelUp
        : InputTextStyle.labelDown
      : 'text-darkGray',
    isActive || shouldFloat ? 'text-brandBlue' : 'text-darkGray',
  ]
    .filter(Boolean)
    .join(' ');

  const inputClassName = [
    InputTextStyle.inputBase,
    isActive ? 'border-brandBlue' : 'border-darkGray',
  ].join(' ');

  useEffect(() => {
    const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => {
      inputRef.current?.blur();
      setIsFocused(false);
    });

    return () => keyboardHideListener.remove();
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  // Automatically adjust TextArea height based on content
  const handleContentSizeChange = (event: {
    nativeEvent: { contentSize: { height: number } };
  }) => {
    if (multiline) {
      const contentHeight = event.nativeEvent.contentSize.height;
      setTextAreaHeight(Math.max(56, contentHeight + 24));
    }
  };

  return (
    <View>
      <Text className={labelClassName}>{labelText}</Text>

      <View className="relative">
        <TextInput
          ref={inputRef}
          className={inputClassName}
          placeholder={placeholder}
          placeholderTextColor="#A9A9A9"
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry && !showPassword}
          editable={editable}
          maxLength={maxLength}
          autoFocus={autoFocus && focusEnabled}
          showSoftInputOnFocus={focusEnabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          multiline={multiline}
          numberOfLines={numberOfLines}
          textAlignVertical={multiline ? 'top' : textAlignVertical}
          onContentSizeChange={handleContentSizeChange}
          scrollEnabled={multiline}
          style={{
            height: multiline ? textAreaHeight : height ?? 56,
          }}
        />

        {secureTextEntry && (
          <View className={InputTextStyle.inputShowHideIcon}>
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              disabled={!editable}
              hitSlop={10}
              accessibilityRole="button"
            >
              {showPassword ? <Images.Hide /> : <Images.Show />}
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

// Component for styling InputText in the application
export const InputTextStyle = {
  inputBase:
    'w-full h-[56px] border rounded-[8px] text-black px-[20px]  text-[20px] text-black font-HeeboRegular',

  labelText: 'mb-[5px] px-[5px] text-[16px] text-black font-HeeboRegular',
  labelDown:
    'absolute top-[50%] left-[20px] z-10 bg-white px-[5px] text-[20px] transform translate-y-[-50%]',
  labelUp: 'absolute top-[-8px] left-[15px] z-10 bg-white px-[5px] text-[12px]',

  inputShowHideIcon:
    'absolute right-[10px] top-[50%] w-[30px] h-[30px] transform translate-y-[-50%] flex-row items-center justify-center',
};
