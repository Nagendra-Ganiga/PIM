// InputTextWrapper Features
// - Reusable React Native input component with floating label and placeholder support.
// - Supports controlled input values using value and onChangeText.
// - Supports different keyboard types, including email, numeric, and default keyboards.
// - Includes a password visibility toggle for secure text inputs.
// - Supports editable and read-only input modes.
// - Provides character limits using maxLength.
// - Supports autofocus and programmatic focus control.
// - Supports multiline text input with a configurable number of lines.
// - Provides text alignment and custom height for text areas.
// - Dynamically updates label and border styles based on focus and input value.
// - Automatically removes focus when the keyboard is dismissed.

import React, { useEffect, useRef, useState } from 'react';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Images } from '../../../assets/images/Images';
import { InputTextStyle } from '../../../styles/GlobalStyles';

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
    isActive ? 'text-brandBlue' : 'text-darkGray',
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

  return (
    <View className="relative">
      <Text className={labelClassName}>{labelText}</Text>

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
        textAlignVertical={textAlignVertical}
        style={{ height: height || 56 }}
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
  );
}
